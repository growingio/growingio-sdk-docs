"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4168],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),i=n(9960),o=n(9366),a=n(6010),c="cardContainer_woeA",s="cardContainerLink_iOSj",l="cardTitle_pNjP",d="cardDescription_qC_k",u=n(3919),p=n(5999);function m(e){var t=e.href,n=e.children,o=(0,a.Z)("card margin-bottom--lg padding--lg",c,t&&s);return t?r.createElement(i.Z,{href:t,className:o},n):r.createElement("div",{className:o},n)}function f(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:i},n," ",i),r.createElement("div",{className:(0,a.Z)("text--truncate",d),title:o},o))}function g(e){var t=e.item,n=(0,o.Wl)(t);return r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function v(e){var t,n=e.item,i=(0,u.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function k(e){var t=e.item;switch(t.type){case"link":return r.createElement(v,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(k,{item:e}))})))}},3802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(5360),c=n(9366),s=["components"],l={slug:"/ios",title:"iOS SDK"},d=void 0,u={unversionedId:"ios/index",id:"ios/index",title:"iOS SDK",description:"iOS SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9SDK \u548c \u57cb\u70b9SDK \u4e24\u4e2a\u7248\u672c\uff1a",source:"@site/docs/ios/index.md",sourceDirName:"ios",slug:"/ios",permalink:"/growingio-sdk-docs/docs/ios",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/index.md",tags:[],version:"current",frontMatter:{slug:"/ios",title:"iOS SDK"},sidebar:"gioSidebar",previous:{title:"\u4e8c\u6b21\u5f00\u53d1",permalink:"/growingio-sdk-docs/docs/android/develop/custom_develop"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/ios/version"}},p={},m=[],f={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"iOS SDK \u63d0\u4f9b\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/base#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},"\u65e0\u57cb\u70b9SDK")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/base#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},"\u57cb\u70b9SDK")," \u4e24\u4e2a\u7248\u672c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK \u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6;"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK \u5177\u5907 \u57cb\u70b9SDK \u7684\u6240\u6709\u529f\u80fd\uff0c\u540c\u65f6\u5177\u5907\u81ea\u52a8\u91c7\u96c6\u57fa\u672c\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u5982\u9875\u9762\u8bbf\u95ee\uff0c\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002")),(0,o.kt)("p",null,"\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u6258\u7ba1\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker-cdp"},"Github")),(0,o.kt)("p",null,"\u6b22\u8fce star,fork \u4e00\u6ce2\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u73af\u5883:")," ",(0,o.kt)("br",null),"\nXcode 9.0 \u53ca\u4ee5\u4e0a",(0,o.kt)("br",{parentName:"p"}),"\n","iOS 8.0 \u53ca\u4ee5\u4e0a"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u6839\u636e\u9700\u8981\u9009\u62e9\u96c6\u6210"),"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/base#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,o.kt)("font",{color:"red"},"\u65e0\u57cb\u70b9SDK")),"  \u6216  ",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/base#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,o.kt)("font",{color:"red"},"\u57cb\u70b9SDK"))))),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);