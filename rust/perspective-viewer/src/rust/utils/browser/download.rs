////////////////////////////////////////////////////////////////////////////////
//
// Copyright (c) 2018, the Perspective Authors.
//
// This file is part of the Perspective library, distributed under the terms
// of the Apache License 2.0.  The full license can be found in the LICENSE
// file.

use wasm_bindgen::JsCast;

use crate::utils::*;

pub fn download(name: &str, value: &web_sys::Blob) -> ApiResult<()> {
    let element: web_sys::HtmlElement = global::document().create_element("a")?.unchecked_into();
    let blob_url = web_sys::Url::create_object_url_with_blob(value)?;
    element.set_attribute("download", name)?;
    element.set_attribute("href", &blob_url)?;
    element.style().set_property("display", "none")?;
    global::body().append_child(&element)?;
    element.click();
    global::body().remove_child(&element)?;
    Ok(())
}