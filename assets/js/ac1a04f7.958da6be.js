"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4869],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),o=n(6010),i=n(9960),c=n(3438),a="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",s=n(3919),d=n(5999);function f(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",a)},n)}function p(e){var t=e.href,n=e.icon,i=e.title,c=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",l),title:i},n," ",i),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",u),title:c},c))}function m(e){var t=e.item,n=(0,c.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,o=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{key:t,item:e}))})))}},9514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=n(5360),a=n(3438),l=["components"],u={slug:"/basicknowledge",title:"\u7b80\u4ecb"},s=void 0,d={unversionedId:"basicknowledge/index",id:"basicknowledge/index",title:"\u7b80\u4ecb",description:"GrowingIO \u505a\u7684\u662f\u7528\u6237\u884c\u4e3a\u6570\u636e\u5206\u6790\u4ea7\u54c1\uff0c\u987e\u540d\u601d\u4e49\uff0c\u89e3\u51b3\u7684\u6838\u5fc3\u95ee\u9898\u662f\uff1a\u7528\u6237\u3001\u884c\u4e3a\u3001\u5206\u6790\u3002",source:"@site/docs/basicknowledge/index.md",sourceDirName:"basicknowledge",slug:"/basicknowledge",permalink:"/growingio-sdk-docs/docs/basicknowledge",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/basicknowledge/index.md",tags:[],version:"current",frontMatter:{slug:"/basicknowledge",title:"\u7b80\u4ecb"},sidebar:"gioSidebar",previous:{title:"SDK \u7b80\u4ecb",permalink:"/growingio-sdk-docs/docs/"},next:{title:"\u7528\u6237\u6a21\u578b",permalink:"/growingio-sdk-docs/docs/basicknowledge/userModel"}},f={},p=[],m={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GrowingIO \u505a\u7684\u662f\u7528\u6237\u884c\u4e3a\u6570\u636e\u5206\u6790\u4ea7\u54c1\uff0c\u987e\u540d\u601d\u4e49\uff0c\u89e3\u51b3\u7684\u6838\u5fc3\u95ee\u9898\u662f\uff1a\u7528\u6237\u3001\u884c\u4e3a\u3001\u5206\u6790\u3002"),(0,i.kt)("p",null,"SDK\u5b9e\u73b0\u7684\u529f\u80fd\u662f\u6570\u636e\u91c7\u96c6\u548c\u4e0a\u62a5\uff0c\u5305\u62ec\u7528\u6237\u6570\u636e\u548c\u884c\u4e3a\u6570\u636e\u3002 ",(0,i.kt)("br",null),"\n\u7528\u6237\u6570\u636e\u7531\u7528\u6237\u6a21\u578b\u6765\u4f53\u73b0\uff1b\u884c\u4e3a\u6570\u636e\u7531\u4e8b\u4ef6\u6a21\u578b\u6765\u4f53\u73b0\u3002 ",(0,i.kt)("br",null),"\n\u4e8b\u4ef6\u6a21\u578b\u57fa\u4e8e\u7528\u6237\u6a21\u578b\uff1b\u5206\u6790\u6a21\u578b\u57fa\u4e8e\u4e8b\u4ef6\u6a21\u578b\u3002 ",(0,i.kt)("br",null)),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);