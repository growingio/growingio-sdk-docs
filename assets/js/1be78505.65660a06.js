"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9514,6167],{895:function(e,t,n){n.d(t,{dK:function(){return r},_k:function(){return l},vc:function(){return c},rx:function(){return i},qo:function(){return s},Hk:function(){return d},Iz:function(){return u}});var a=n(1336),o=n.n(a);n(892)(o()),n(4212).w(o()),n(4182)(o());var r=["en","zh"],l=!1,c=null,i="a3a4267f",s=8,d=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),o=n(3905),r=n(2263),l=n(6291),c=n(2273),i=n(6010),s=n(3018),d=n(3783),u=n(7898),m=n(5537),p=n(7462),f=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),b=n(3366),v=n(6742),E=n(3919),_=n(8617),g="menuLinkText_OKON",k=["items"],C=["item"],Z=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],S=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},I=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,p.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,b.Z)(e,C);return"category"===t.type?0===t.items.length?null:a.createElement(w,(0,p.Z)({item:t},n)):a.createElement(y,(0,p.Z)({item:t},n))}function w(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,l=(0,b.Z)(e,Z),c=n.items,d=n.label,u=n.collapsible,m=S(n,r),f=(0,s.uR)({initialState:function(){return!!u&&(!m&&n.collapsed)}}),h=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,o=e.setCollapsed,r=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&o(!1)}),[t,r,n])}({isActive:m,collapsed:h,setCollapsed:v}),a.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":h})},a.createElement("a",(0,p.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&m},t[g]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},l),d),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},a.createElement(I,{items:c,tabIndex:h?-1:0,onItemClick:o,activePath:r})))}function y(e){var t=e.item,n=e.onItemClick,o=e.activePath,r=(0,b.Z)(e,N),l=t.href,c=t.label,s=S(t,o);return a.createElement("li",{className:"menu__list-item",key:c},a.createElement(v.Z,(0,p.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":s}),to:l},(0,E.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},r),(0,E.Z)(l)?c:a.createElement("span",null,c,a.createElement(_.Z,null))))}var x="sidebar_a3j0",M="sidebarWithHideableNavbar_VlPv",P="sidebarHidden_OqfG",B="sidebarLogo_hmkv",A="menu_cyFh",F="menuWithAnnouncementBar_+O1J",L="collapseSidebarButton_eoK2",H="collapseSidebarButtonIcon_e+kA";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(f,{className:H}))}function z(e){var t,n,o=e.path,r=e.sidebar,l=e.onCollapse,c=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),p=(0,s.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,i.Z)(x,(t={},t[M]=f,t[P]=c,t))},f&&a.createElement(m.Z,{tabIndex:-1,className:B}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",A,(n={},n[F]=!b&&d,n))},a.createElement("ul",{className:"menu__list"},a.createElement(I,{items:r,activePath:o}))),h&&a.createElement(D,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,o=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(I,{items:n,activePath:o,onItemClick:function(){return t()}}))};function W(e){return a.createElement(s.Cv,{component:R,props:e})}var O=a.memo(z),q=a.memo(W);function K(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),o&&a.createElement(q,e))}var Y=n(6845),U=n(4608),j="backToTopButton_i9tI",G="backToTopButtonShow_wCmF";function J(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Q=function(){var e,t=J(),n=t.smoothScrollTop,o=t.cancelScrollToTop,r=(0,a.useState)(!1),l=r[0],c=r[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)c(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&c(!0)}else c(!1)}}),[]),a.createElement("button",{className:(0,i.Z)("clean-btn",j,(e={},e[G]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},V=n(5977),X={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};function $(e){var t,n,l,d=e.currentDocRoute,u=e.versionMetadata,m=e.children,p=(0,r.Z)().isClient,b=u.pluginId,v=u.version,E=d.sidebar,_=E?u.docsSidebars[E]:void 0,g=(0,a.useState)(!1),k=g[0],C=g[1],Z=(0,a.useState)(!1),N=Z[0],S=Z[1],I=(0,a.useCallback)((function(){N&&S(!1),C(!k)}),[N]);return a.createElement(c.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(b,v)}},a.createElement("div",{className:X.docPage},a.createElement(Q,null),_&&a.createElement("aside",{className:(0,i.Z)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&k&&S(!0)}},a.createElement(K,{key:E,sidebar:_,path:d.path,onCollapse:I,isHidden:N}),N&&a.createElement("div",{className:X.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},a.createElement(f,{className:X.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(X.docMainContainer,(n={},n[X.docMainContainerEnhanced]=k||!_,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(l={},l[X.docItemWrapperEnhanced]=k,l))},a.createElement(o.Zo,{components:Y.Z},m)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,V.LX)(o.pathname,e)}));return r?a.createElement($,{currentDocRoute:r,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):a.createElement(U.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),o=n(2273),r=n(4973);t.default=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);