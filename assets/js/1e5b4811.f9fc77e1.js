"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5330],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),i=r(6010),o=r(9960),c=r(3438),a="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",s=r(3919),p=r(5999);function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",a)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,c=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:c},c))}function f(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t,r=e.item,i=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{key:t,item:e}))})))}},851:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=r(5360),a=r(3438),l=["components"],u={slug:"/webjs",title:"Web JS SDK"},s=void 0,p={unversionedId:"webjs/index",id:"webjs/index",title:"Web JS SDK",description:"Web JS SDK3.0 \u5c06H5\u5185\u5d4c\u9875\uff0cHybrid SDK\uff0cWeb JS SDK\u96c6\u6210\u4e0e\u4e00\u4f53\uff0c\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a",source:"@site/docs/webjs/index.md",sourceDirName:"webjs",slug:"/webjs",permalink:"/growingio-sdk-docs/docs/webjs",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/index.md",tags:[],version:"current",frontMatter:{slug:"/webjs",title:"Web JS SDK"},sidebar:"gioSidebar",previous:{title:"\u81ea\u5b9a\u4e49 SDK",permalink:"/growingio-sdk-docs/docs/ios/develop/custom_sdk"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/webjs/version"}},d={},m=[],f={toc:m};function b(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Web JS SDK3.0 \u5c06H5\u5185\u5d4c\u9875\uff0cHybrid SDK\uff0cWeb JS SDK\u96c6\u6210\u4e0e\u4e00\u4f53\uff0c\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u63a7\u5236"),(0,o.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u5c0f\u7a0b\u5e8f\u6253\u901a\u8bbf\u95ee\u7528\u6237"),(0,o.kt)("li",{parentName:"ul"},"\u539f\u751f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u539f\u751fApp\u6253\u901a\u8bbf\u95ee\u7528\u6237"),(0,o.kt)("li",{parentName:"ul"},"Web\u53ef\u89c6\u5316\u5708\u9009\u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"Hybrid\u53ef\u89c6\u5316\u5708\u9009\u652f\u6301")),(0,o.kt)("p",null,"Web JS SDK \u4ee3\u7801\u5c1a\u672a\u5f00\u6e90\uff0c\u540e\u7eed\u4f1a\u5f00\u6e90"),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);