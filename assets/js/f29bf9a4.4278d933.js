"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=i,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),i=r(6010),o=r(3438),a=r(9960),l=r(3919),c=r(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:a},a))}function g(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},7634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(7462),i=(r(7294),r(3905)),o=r(2991),a=r(3438);const l={slug:"/giokit",title:"\u63d2\u4ef6\u4ecb\u7ecd"},c=void 0,s={unversionedId:"giokit/index",id:"giokit/index",title:"\u63d2\u4ef6\u4ecb\u7ecd",description:"GioKit - GrowingIO SDK \u4f7f\u7528\u8f85\u52a9\u5de5\u5177",source:"@site/docs/giokit/index.md",sourceDirName:"giokit",slug:"/giokit",permalink:"/growingio-sdk-docs/docs/giokit",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/index.md",tags:[],version:"current",frontMatter:{slug:"/giokit",title:"\u63d2\u4ef6\u4ecb\u7ecd"},sidebar:"gioSidebar",previous:{title:"Mobile Debugger",permalink:"/growingio-sdk-docs/docs/debugverify/mobiledebugger"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/growingio-sdk-docs/docs/giokit/android"}},u={},d=[{value:"GioKit - GrowingIO SDK \u4f7f\u7528\u8f85\u52a9\u5de5\u5177",id:"giokit---growingio-sdk-\u4f7f\u7528\u8f85\u52a9\u5de5\u5177",level:2},{value:"Android/iOS",id:"androidios",level:3},{value:"WebJS",id:"webjs",level:3}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"giokit---growingio-sdk-\u4f7f\u7528\u8f85\u52a9\u5de5\u5177"},"GioKit - GrowingIO SDK \u4f7f\u7528\u8f85\u52a9\u5de5\u5177"),(0,i.kt)("p",null,"GioKit \u662f\u4e00\u4e2a\u8f85\u52a9\u5ba2\u6237\u5feb\u901f\u7a33\u5b9a\u63a5\u5165\u4f7f\u7528 GrowingIO SDK \u7684\u5de5\u5177\u3002\u76ee\u524d\u652f\u6301 WebJS\u3001iOS \u548c Android\uff0c\u5b83\u80fd\u591f\u5feb\u901f\u68c0\u6d4b SDK \u662f\u5426\u96c6\u6210\u6210\u529f\uff0c\u5e76\u80fd\u591f\u5728\u9762\u677f\u4e2d\u5b9e\u65f6\u53cd\u9988\u63a5\u5165\u7684 SDK \u4fe1\u606f\uff0c\u5177\u4f53\u5305\u62ec\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,i.kt)("h3",{id:"androidios"},"Android/iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SDK \u81ea\u68c0 - SDK \u96c6\u6210\u68c0\u6d4b\uff0c\u5305\u62ec\u521d\u59cb\u5316\u53c2\u6570\uff0c\u914d\u7f6e\u53c2\u6570\u7b49"),(0,i.kt)("li",{parentName:"ul"},"SDK \u4fe1\u606f - \u5168\u9762\u7684 SDK \u96c6\u6210\u4fe1\u606f\u4e0e App \u57fa\u672c\u4fe1\u606f\uff0c\u65b9\u4fbf\u622a\u56fe\u5206\u4eab"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u57cb\u70b9 - APP \u624b\u52a8\u57cb\u70b9\u68c0\u6d4b(\u4ec5 Android)\uff0c\u5c55\u793a\u57cb\u70b9\u4e8b\u4ef6\u6240\u5728\u7684\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5e93 - \u5b9e\u65f6\u57cb\u70b9\u6570\u636e\u6d4f\u89c8\uff0c\u5305\u62ec\u6570\u636e\u53d1\u9001\u72b6\u6001\uff0c\u53d1\u9001\u6570\u636e\u8be6\u60c5"),(0,i.kt)("li",{parentName:"ul"},"XPath \u8ddf\u8e2a - \u5708\u9009\u8f85\u52a9\u5de5\u5177\uff0c\u53ef\u4ee5\u5c55\u793a\u5143\u7d20\u7684 XPath \u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bb0\u5f55 - \u57cb\u70b9\u4e8b\u4ef6\u8bf7\u6c42\u6293\u5305\u5de5\u5177\uff0c\u5b9e\u65f6\u67e5\u770b\u57cb\u70b9\u6570\u636e\u4e0a\u4f20\u8fdb\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u4e8b\u4ef6 - \u57cb\u70b9\u4e8b\u4ef6\u5b9e\u65f6\u89e6\u53d1\u5c55\u793a\uff0c\u70b9\u51fb\u53ef\u5feb\u901f\u67e5\u770b\u57cb\u70b9\u6570\u636e\u5185\u5bb9")),(0,i.kt)("h3",{id:"webjs"},"WebJS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e5\u5fd7 - \u67e5\u770b Gio \u4e8b\u4ef6\u65e5\u5fd7\u548c\u6d4f\u89c8\u5668 console.log|info|error|debug\uff1b\u624b\u52a8\u6267\u884c JS \u547d\u4ee4\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc - \u67e5\u770b XMLHttpRequest\u3001Fetch \u548c sendBeacon \u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8 - \u67e5\u770b Cookies\u3001LocalStorage \u548c SessionStorage"),(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762\u548c\u8bbe\u5907 - \u67e5\u770b\u5f53\u524d\u9875\u9762\u5728\u6d4f\u89c8\u5668\u548c Gio SDK \u89e3\u6790\u4e0b\u7684\u9875\u9762\u6570\u636e\uff1b\u67e5\u770b\u8bbe\u5907\u76f8\u5173\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u8c03\u8bd5 - \u67e5\u770b\u5e76\u8c03\u8bd5 Gio \u4e8b\u4ef6\uff0c\u5b9e\u65f6\u67e5\u770b Gio \u4e8b\u4ef6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5feb\u901f\u521d\u59cb\u5316 - \u901a\u8fc7\u53ef\u89c6\u5316\u8868\u5355\u5feb\u901f\u751f\u6210\u9002\u5408\u81ea\u5df1\u4e1a\u52a1\u7684 Gio SDK \u521d\u59cb\u5316\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u72b6\u6001 - \u5feb\u901f\u67e5\u770b\u5f53\u524d SDK \u7684\u96c6\u6210\u548c\u914d\u7f6e\u72b6\u6001")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u76ee\u524d GioKit \u8fd8\u5904\u4e8e\u5f00\u53d1\u8bd5\u7528\u9636\u6bb5\uff0c\u66f4\u591a\u529f\u80fd\u5373\u5c06\u4e0a\u7ebf\uff0c\u656c\u8bf7\u671f\u5f85\u3002")),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);