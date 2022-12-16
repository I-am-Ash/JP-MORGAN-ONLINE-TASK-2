"use strict";(self.webpackChunk_finos_perspective_docs=self.webpackChunk_finos_perspective_docs||[]).push([[369],{9369:function(e,t,n){n.d(t,{Z:function(){return at}});var a=n(7294),l=n.n(a),r=n(1944),i=n(902);const o=l().createContext(null);function c(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return l().createElement(o.Provider,{value:r},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function m(){const{metadata:e,frontMatter:t,assets:n}=s();return l().createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(4334),u=n(7524),p=n(7462),v=n(5999),h=n(9960);function f(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return l().createElement(h.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l().createElement("div",{className:"pagination-nav__sublabel"},a),l().createElement("div",{className:"pagination-nav__label"},n))}function E(e){const{previous:t,next:n}=e;return l().createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l().createElement(f,(0,p.Z)({},t,{subLabel:l().createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l().createElement(f,(0,p.Z)({},n,{subLabel:l().createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=s();return l().createElement(E,{previous:e.previous,next:e.next})}var g=n(2263),N=n(143),L=n(5281),_=n(373),Z=n(4477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return l().createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:l().createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return l().createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:l().createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=C[e.versionMetadata.banner];return l().createElement(t,e)}function T(e){let{versionLabel:t,to:n,onClick:a}=e;return l().createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:l().createElement("b",null,l().createElement(h.Z,{to:n,onClick:a},l().createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,g.Z)(),{pluginId:r}=(0,N.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,N.Jo)(r),s=o??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return l().createElement("div",{className:(0,d.Z)(t,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},l().createElement("div",null,l().createElement(k,{siteTitle:a,versionMetadata:n})),l().createElement("div",{className:"margin-top--md"},l().createElement(T,{versionLabel:c.label,to:s.path,onClick:()=>i(c.name)})))}function x(e){let{className:t}=e;const n=(0,Z.E)();return n.banner?l().createElement(y,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,Z.E)();return n.badge?l().createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},l().createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return l().createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l().createElement("b",null,l().createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function A(e){let{lastUpdatedBy:t}=e;return l().createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l().createElement("b",null,t)}}," by {user}")}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return l().createElement("span",{className:L.k.common.lastUpdated},l().createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?l().createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?l().createElement(A,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var U="iconEdit_Z9Sw";function B(e){let{className:t,...n}=e;return l().createElement("svg",(0,p.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(U,t),"aria-hidden":"true"},n),l().createElement("g",null,l().createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function I(e){let{editUrl:t}=e;return l().createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:L.k.common.editThisPage},l().createElement(B,null),l().createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var z="tag_zVej",V="tagRegular_sFm0",S="tagWithCount_h2kH";function R(e){let{permalink:t,label:n,count:a}=e;return l().createElement(h.Z,{href:t,className:(0,d.Z)(z,a?S:V)},n,a&&l().createElement("span",null,a))}var D="tags_jXut",O="tag_QGVx";function P(e){let{tags:t}=e;return l().createElement(l().Fragment,null,l().createElement("b",null,l().createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l().createElement("ul",{className:(0,d.Z)(D,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return l().createElement("li",{key:n,className:O},l().createElement(R,{label:t,permalink:n}))}))))}var q="lastUpdated_vwxv";function F(e){return l().createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},l().createElement("div",{className:"col"},l().createElement(P,e)))}function j(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:r}=e;return l().createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},l().createElement("div",{className:"col"},t&&l().createElement(I,{editUrl:t})),l().createElement("div",{className:(0,d.Z)("col",q)},(n||a)&&l().createElement(M,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:a})))}function $(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:r,tags:i}=e,o=i.length>0,c=!!(t||n||r);return o||c?l().createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},o&&l().createElement(F,{tags:i}),c&&l().createElement(j,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:a})):null}var W=n(6043),G=n(6668);function J(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function Q(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=Q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function Y(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Y(e.parentNode):t}function X(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>Y(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Y(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function K(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,G.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function ee(e){const t=(0,a.useRef)(void 0),n=K();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=X(o,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function te(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l().createElement("ul",{className:r?void 0:n},t.map((e=>l().createElement("li",{key:e.id},l().createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l().createElement(te,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var ne=l().memo(te);function ae(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:c,...s}=e;const m=(0,G.L)(),d=o??m.tableOfContents.minHeadingLevel,u=c??m.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>Q({toc:J(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return ee((0,a.useMemo)((()=>{if(r&&i)return{linkClassName:r,linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u}}),[r,i,d,u])),l().createElement(ne,(0,p.Z)({toc:v,className:n,linkClassName:r},s))}var le="tocCollapsibleButton_TO0P",re="tocCollapsibleButtonExpanded_MG3E";function ie(e){let{collapsed:t,...n}=e;return l().createElement("button",(0,p.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",le,!t&&re,n.className)}),l().createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var oe="tocCollapsible_ETCw",ce="tocCollapsibleContent_vkbj",se="tocCollapsibleExpanded_sAul";function me(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:r}=e;const{collapsed:i,toggleCollapsed:o}=(0,W.u)({initialState:!0});return l().createElement("div",{className:(0,d.Z)(oe,!i&&se,n)},l().createElement(ie,{collapsed:i,onClick:o}),l().createElement(W.z,{lazy:!0,className:ce,collapsed:i},l().createElement(ae,{toc:t,minHeadingLevel:a,maxHeadingLevel:r})))}var de="tocMobile_ITEo";function ue(){const{toc:e,frontMatter:t}=s();return l().createElement(me,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,de)})}var pe="tableOfContents_bqdL";function ve(e){let{className:t,...n}=e;return l().createElement("div",{className:(0,d.Z)(pe,"thin-scrollbar",t)},l().createElement(ae,(0,p.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function he(){const{toc:e,frontMatter:t}=s();return l().createElement(ve,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var fe="anchorWithStickyNavbar_LWe7",Ee="anchorWithHideOnScrollNavbar_WYt5";function be(e){let{as:t,id:n,...a}=e;const{navbar:{hideOnScroll:r}}=(0,G.L)();return"h1"!==t&&n?l().createElement(t,(0,p.Z)({},a,{className:(0,d.Z)("anchor",r?Ee:fe),id:n}),a.children,l().createElement("a",{className:"hash-link",href:`#${n}`,title:(0,v.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l().createElement(t,(0,p.Z)({},a,{id:void 0}))}var ge=n(3905),Ne=n(5742);var Le=n(3477);var _e=n(7459),Ze=n(2389),Ce="details_lb9f",ke="isBrowser_bmU9",Te="collapsibleContent_i85q";function ye(e){return!!e&&("SUMMARY"===e.tagName||ye(e.parentElement))}function xe(e,t){return!!e&&(e===t||xe(e.parentElement,t))}function He(e){let{summary:t,children:n,...r}=e;const i=(0,Ze.Z)(),o=(0,a.useRef)(null),{collapsed:c,setCollapsed:s}=(0,W.u)({initialState:!r.open}),[m,d]=(0,a.useState)(r.open);return l().createElement("details",(0,p.Z)({},r,{ref:o,open:m,"data-collapsed":c,className:(0,_e.Z)(Ce,i&&ke,r.className),onMouseDown:e=>{ye(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ye(t)&&xe(t,o.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t??l().createElement("summary",null,"Details"),l().createElement(W.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),d(!e)}},l().createElement("div",{className:Te},n)))}var we="details_b_Ee";function Ae(e){let{...t}=e;return l().createElement(He,(0,p.Z)({},t,{className:(0,d.Z)("alert alert--info",we,t.className)}))}function Me(e){return l().createElement(be,e)}var Ue="containsTaskList_mC6p";var Be="img_ev3q";var Ie="admonition_LlT9",ze="admonitionHeading_tbUL",Ve="admonitionIcon_kALy",Se="admonitionContent_S0QG";const Re={note:{infimaClassName:"secondary",iconComponent:function(){return l().createElement("svg",{viewBox:"0 0 14 16"},l().createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:l().createElement(v.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return l().createElement("svg",{viewBox:"0 0 12 16"},l().createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:l().createElement(v.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return l().createElement("svg",{viewBox:"0 0 12 16"},l().createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:l().createElement(v.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return l().createElement("svg",{viewBox:"0 0 14 16"},l().createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:l().createElement(v.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return l().createElement("svg",{viewBox:"0 0 16 16"},l().createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:l().createElement(v.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},De={secondary:"note",important:"info",success:"tip",warning:"danger"};function Oe(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=l().Children.toArray(e),n=t.find((e=>l().isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=l().createElement(l().Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}var Pe={head:function(e){const t=l().Children.map(e.children,(e=>l().isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return l().createElement(e.props.originalType,a)}return e}(e):e));return l().createElement(Ne.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return l().Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?l().createElement("code",e):l().createElement(Le.Z,e)},a:function(e){return l().createElement(h.Z,e)},pre:function(e){return l().createElement(Le.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=l().Children.toArray(e.children),n=t.find((e=>l().isValidElement(e)&&"summary"===e.props?.mdxType)),a=l().createElement(l().Fragment,null,t.filter((e=>e!==n)));return l().createElement(Ae,(0,p.Z)({},e,{summary:n}),a)},ul:function(e){return l().createElement("ul",(0,p.Z)({},e,{className:(t=e.className,(0,d.Z)(t,t?.includes("contains-task-list")&&Ue))}));var t},img:function(e){return l().createElement("img",(0,p.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,Be))}));var t},h1:e=>l().createElement(Me,(0,p.Z)({as:"h1"},e)),h2:e=>l().createElement(Me,(0,p.Z)({as:"h2"},e)),h3:e=>l().createElement(Me,(0,p.Z)({as:"h3"},e)),h4:e=>l().createElement(Me,(0,p.Z)({as:"h4"},e)),h5:e=>l().createElement(Me,(0,p.Z)({as:"h5"},e)),h6:e=>l().createElement(Me,(0,p.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:r}=Oe(e),i=function(e){const t=De[e]??e,n=Re[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Re.info)}(n),o=a??i.label,{iconComponent:c}=i,s=r??l().createElement(c,null);return l().createElement("div",{className:(0,d.Z)(L.k.common.admonition,L.k.common.admonitionType(e.type),"alert",`alert--${i.infimaClassName}`,Ie)},l().createElement("div",{className:ze},l().createElement("span",{className:Ve},s),o),l().createElement("div",{className:Se},t))},mermaid:n(1875).Z};function qe(e){let{children:t}=e;return l().createElement(ge.Zo,{components:Pe},t)}function Fe(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return l().createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},n&&l().createElement("header",null,l().createElement(be,{as:"h1"},n)),l().createElement(qe,null,t))}var je=n(3438),$e=n(8596),We=n(4996);function Ge(e){return l().createElement("svg",(0,p.Z)({viewBox:"0 0 24 24"},e),l().createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var Je={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Qe(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l().createElement("span",{className:r,itemProp:"name"},t):n?l().createElement(h.Z,{className:r,href:n,itemProp:"item"},l().createElement("span",{itemProp:"name"},t)):l().createElement("span",{className:r},t)}function Ye(e){let{children:t,active:n,index:a,addMicrodata:r}=e;return l().createElement("li",(0,p.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l().createElement("meta",{itemProp:"position",content:String(a+1)}))}function Xe(){const e=(0,We.Z)("/");return l().createElement("li",{className:"breadcrumbs__item"},l().createElement(h.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",Je.breadcrumbsItemLink),href:e},l().createElement(Ge,{className:Je.breadcrumbHomeIcon})))}function Ke(){const e=(0,je.s1)(),t=(0,$e.Ns)();return e?l().createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,Je.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l().createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l().createElement(Xe,null),e.map(((t,n)=>{const a=n===e.length-1;return l().createElement(Ye,{key:n,active:a,index:n,addMicrodata:!!t.href},l().createElement(Qe,{href:t.href,isLast:a},t.label))})))):null}var et="docItemContainer_Djhp",tt="docItemCol_VOVn";function nt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,u.i)(),a=e.hide_table_of_contents,r=!a&&t.length>0;return{hidden:a,mobile:r?l().createElement(ue,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:l().createElement(he,null)}}();return l().createElement("div",{className:"row"},l().createElement("div",{className:(0,d.Z)("col",!n.hidden&&tt)},l().createElement(x,null),l().createElement("div",{className:et},l().createElement("article",null,l().createElement(Ke,null),l().createElement(H,null),n.mobile,l().createElement(Fe,null,t),l().createElement($,null)),l().createElement(b,null))),n.desktop&&l().createElement("div",{className:"col col--3"},n.desktop))}function at(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return l().createElement(c,{content:e.content},l().createElement(r.FG,{className:t},l().createElement(m,null),l().createElement(nt,null,l().createElement(n,null))))}},4477:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return o}});var a=n(7294),l=n.n(a),r=n(902);const i=l().createContext(null);function o(e){let{children:t,version:n}=e;return l().createElement(i.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(i);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);