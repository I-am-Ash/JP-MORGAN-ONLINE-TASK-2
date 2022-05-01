////////////////////////////////////////////////////////////////////////////////
//
// Copyright (c) 2018, the Perspective Authors.
//
// This file is part of the Perspective library, distributed under the terms
// of the Apache License 2.0.  The full license can be found in the LICENSE
// file.

//! `Renderer` owns the JavaScript Custom Element plugin, as well as
//! associated state such as column restrictions and `plugin_config`
//! (de-)serialization.
//!
//! `Renderer` wraps a smart pointer and is meant to be shared among many
//! references throughout the application.

mod activate;
mod limits;
mod plugin_store;
mod registry;
mod render_timer;

use self::activate::*;
use self::limits::*;
use self::plugin_store::*;
pub use self::registry::*;
use self::render_timer::*;
use crate::config::*;
use crate::js::perspective::*;
use crate::js::plugin::*;
use crate::session::*;
use crate::utils::*;
use crate::*;

use futures::future::join_all;
use std::cell::{Ref, RefCell};
use std::future::Future;
use std::ops::Deref;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::*;

#[derive(Clone)]
pub struct Renderer(Rc<RendererData>);

/// Immutable state
pub struct RendererData {
    plugin_data: RefCell<RendererMutData>,
    draw_lock: DebounceMutex,
    pub plugin_changed: PubSub<JsPerspectiveViewerPlugin>,
    pub limits_changed: PubSub<RenderLimits>,
    pub settings_open_changed: PubSub<bool>,
}

/// Mutable state
pub struct RendererMutData {
    viewer_elem: HtmlElement,
    metadata: ViewConfigRequirements,
    plugin_store: PluginStore,
    plugins_idx: Option<usize>,
    timer: MovingWindowRenderTimer,
    is_settings_open: bool,
}

type RenderLimits = (usize, usize, Option<usize>, Option<usize>);

impl Deref for Renderer {
    type Target = RendererData;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl PartialEq for Renderer {
    fn eq(&self, other: &Self) -> bool {
        Rc::ptr_eq(&self.0, &other.0)
    }
}

impl Deref for RendererData {
    type Target = RefCell<RendererMutData>;
    fn deref(&self) -> &Self::Target {
        &self.plugin_data
    }
}

impl Renderer {
    pub fn new(viewer_elem: &HtmlElement) -> Self {
        Self(Rc::new(RendererData {
            plugin_data: RefCell::new(RendererMutData {
                viewer_elem: viewer_elem.clone(),
                metadata: ViewConfigRequirements::default(),
                plugin_store: PluginStore::default(),
                plugins_idx: None,
                timer: MovingWindowRenderTimer::default(),
                is_settings_open: false,
            }),
            draw_lock: Default::default(),
            plugin_changed: Default::default(),
            settings_open_changed: Default::default(),
            limits_changed: Default::default(),
        }))
    }

    pub async fn reset(&self) {
        self.0.borrow_mut().plugins_idx = None;
        if let Ok(plugin) = self.get_active_plugin() {
            plugin.restore(&js_object!());
        }
    }

    pub fn delete(&self) -> Result<(), JsValue> {
        self.get_active_plugin()?.delete();
        Ok(())
    }

    pub fn metadata(&self) -> Ref<'_, ViewConfigRequirements> {
        Ref::map(self.borrow(), |x| &x.metadata)
    }

    /// Return all plugin instances, whether they are active or not.  Useful
    /// for configuring all or specific plugins at application init.
    pub fn get_all_plugins(&self) -> Vec<JsPerspectiveViewerPlugin> {
        self.0.borrow_mut().plugin_store.plugins().clone()
    }

    /// Return all plugin names, whether they are active or not.
    pub fn get_all_plugin_names(&self) -> Vec<String> {
        self.0.borrow_mut().plugin_store.plugin_records().clone()
    }

    /// Gets the currently active plugin.  Calling this method before a plugin
    /// has been selected will cause the default (first) plugin to be
    /// selected, and doing so when no plugins have been registered is an
    /// error.
    pub fn get_active_plugin(&self) -> Result<JsPerspectiveViewerPlugin, JsValue> {
        if self.0.borrow().plugins_idx.is_none() {
            self.set_plugin(Some(&PLUGIN_REGISTRY.default_plugin_name()))?;
        }

        let idx = self.0.borrow().plugins_idx.unwrap_or(0);
        let result = self.0.borrow_mut().plugin_store.plugins().get(idx).cloned();
        result.ok_or_else(|| JsValue::from("No Plugin"))
    }

    /// Gets a specific `JsPerspectiveViewerPlugin` by name.
    ///
    /// # Arguments
    /// - `name` The plugin name to lookup.
    pub fn get_plugin(&self, name: &str) -> Result<JsPerspectiveViewerPlugin, JsValue> {
        let idx = self.find_plugin_idx(name);
        let idx = idx.ok_or_else(|| JsValue::from(format!("No Plugin `{}`", name)))?;
        let result = self.0.borrow_mut().plugin_store.plugins().get(idx).cloned();
        Ok(result.unwrap())
    }

    pub fn is_settings_open(&self) -> bool {
        self.0.borrow().is_settings_open
    }

    pub fn set_settings_open(&self, open: Option<bool>) -> Result<bool, JsValue> {
        let open_state = open.unwrap_or_else(|| !self.0.borrow().is_settings_open);
        if self.0.borrow().is_settings_open != open_state {
            self.0.borrow_mut().is_settings_open = open_state;
            self.0
                .borrow()
                .viewer_elem
                .toggle_attribute_with_force("settings", open_state)?;

            self.settings_open_changed.emit_all(open_state);
        }

        Ok(open_state)
    }

    pub async fn restyle_all(&self, view: &JsPerspectiveView) -> Result<JsValue, JsValue> {
        let plugins = self.get_all_plugins();
        let tasks = plugins.iter().map(|plugin| plugin.restyle(view));

        join_all(tasks)
            .await
            .into_iter()
            .collect::<Result<Vec<_>, _>>()
            .map(|_| JsValue::UNDEFINED)
    }

    pub fn set_throttle(&mut self, val: Option<f64>) {
        self.0.borrow_mut().timer.set_throttle(val);
    }

    pub fn disable_active_plugin_render_warning(&self) {
        self.borrow_mut().metadata.render_warning = false;
        self.get_active_plugin().unwrap().set_render_warning(false);
    }

    /// Set the active plugin to the plugin registerd as `name`, or the default
    /// plugin if `None` is provided.
    ///
    /// # Arguments
    /// - `update` The `PluginUpdate` behavior to set.
    pub fn update_plugin(&self, update: PluginUpdate) -> Result<bool, JsValue> {
        match &update {
            PluginUpdate::Missing => Ok(false),
            PluginUpdate::SetDefault => self.set_plugin(None),
            PluginUpdate::Update(plugin) => self.set_plugin(Some(plugin)),
        }
    }

    fn set_plugin(&self, name: Option<&str>) -> Result<bool, JsValue> {
        let default_plugin_name = PLUGIN_REGISTRY.default_plugin_name();
        let name = name.unwrap_or(default_plugin_name.as_str());
        let idx = self
            .find_plugin_idx(name)
            .ok_or_else(|| JsValue::from(format!("Unkown plugin '{}'", name)))?;

        let changed = !matches!(
            self.0.borrow().plugins_idx,
            Some(selected_idx) if selected_idx == idx
        );

        if changed {
            self.borrow_mut().plugins_idx = Some(idx);
            let plugin: JsPerspectiveViewerPlugin = self.get_active_plugin()?;
            self.borrow_mut().metadata = plugin.get_requirements()?;
            self.plugin_changed.emit_all(plugin);
        }

        Ok(changed)
    }

    pub async fn with_lock(
        self,
        task: impl Future<Output = Result<JsValue, JsValue>>,
    ) -> Result<JsValue, JsValue> {
        let draw_mutex = self.draw_lock();
        draw_mutex.lock(task).await
    }

    pub async fn resize(&self) -> Result<JsValue, JsValue> {
        let draw_mutex = self.draw_lock();
        let timer = self.render_timer();
        draw_mutex
            .debounce(async {
                set_timeout(timer.get_avg()).await?;
                let jsplugin = self.get_active_plugin()?;
                jsplugin.resize().await?;
                Ok(JsValue::from(true))
            })
            .await
    }

    pub async fn draw(
        &self,
        session: impl Future<Output = Result<&Session, JsValue>>,
    ) -> Result<JsValue, JsValue> {
        self.draw_plugin(session, false).await
    }

    pub async fn update(&self, session: &Session) -> Result<JsValue, JsValue> {
        self.draw_plugin(async { Ok(session) }, true).await
    }

    async fn draw_plugin(
        &self,
        session: impl Future<Output = Result<&Session, JsValue>>,
        is_update: bool,
    ) -> Result<JsValue, JsValue> {
        let timer = self.render_timer();
        let task = async move {
            if is_update {
                set_timeout(timer.get_avg()).await?;
            }

            if let Some(view) = session.await?.get_view() {
                timer.capture_time(self.draw_view(&view, is_update)).await
            } else {
                Ok(JsValue::from(true))
            }
        };

        let draw_mutex = self.draw_lock();
        if is_update {
            draw_mutex.debounce(task).await
        } else {
            draw_mutex.lock(task).await
        }
    }

    async fn draw_view(
        &self,
        view: &JsPerspectiveView,
        is_update: bool,
    ) -> Result<JsValue, JsValue> {
        let plugin = self.get_active_plugin()?;
        let meta = self.metadata().clone();
        let limits = get_row_and_col_limits(view, &meta).await?;
        self.limits_changed.emit_all(limits);
        let viewer_elem = &self.0.borrow().viewer_elem.clone();
        if is_update {
            let task = plugin.update(view, limits.2, limits.3, false);
            activate_plugin(viewer_elem, &plugin, task).await
        } else {
            let task = plugin.draw(view, limits.2, limits.3, false);
            activate_plugin(viewer_elem, &plugin, task).await
        }
    }

    pub async fn presize(
        &self,
        open: bool,
        on_toggle: impl Future<Output = Result<(), JsValue>>,
    ) -> Result<JsValue, JsValue> {
        let task = async {
            let plugin = self.get_active_plugin()?;
            if open {
                on_toggle.await?;
                plugin.resize().await
            } else {
                let main_panel: web_sys::HtmlElement = self
                    .0
                    .borrow()
                    .viewer_elem
                    .children()
                    .item(0)
                    .unwrap()
                    .unchecked_into();
                let new_width = format!("{}px", &self.0.borrow().viewer_elem.client_width());
                let new_height = format!("{}px", &self.0.borrow().viewer_elem.client_height());
                main_panel.style().set_property("width", &new_width)?;
                main_panel.style().set_property("height", &new_height)?;
                let resize = plugin.resize().await;
                main_panel.style().set_property("width", "")?;
                main_panel.style().set_property("height", "")?;
                on_toggle.await?;
                resize
            }
        };
        self.draw_lock().lock(task).await
    }

    fn draw_lock(&self) -> DebounceMutex {
        self.draw_lock.clone()
    }

    fn render_timer(&self) -> MovingWindowRenderTimer {
        self.0.borrow().timer.clone()
    }

    fn find_plugin_idx(&self, name: &str) -> Option<usize> {
        let short_name = make_short_name(name);
        self.0
            .borrow_mut()
            .plugin_store
            .plugins()
            .iter()
            .position(|elem| make_short_name(&elem.name()).contains(&short_name))
    }
}

fn make_short_name(name: &str) -> String {
    name.to_lowercase()
        .chars()
        .filter(|x| x.is_alphabetic())
        .collect()
}