"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={slug:"/ios/develop",title:"\u524d\u8a00"},a=void 0,l={unversionedId:"ios/develop/index",id:"ios/develop/index",title:"\u524d\u8a00",description:"\u5728\u57fa\u7840\u4f7f\u7528\u4e2d\u5df2\u7ecf\u8be6\u7ec6\u5730\u4ecb\u7ecd\u4e86\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u96c6\u6210\u6211\u4eec\u7684 SDK \u4ee5\u53ca SDK \u4e2d\u53ef\u7528\u7684\u914d\u7f6e\u9879\u548c\u8c03\u7528\u63a5\u53e3\uff0c\u63a5\u4e0b\u6765\u4f1a\u4ecb\u7ecd\u66f4\u591a\u7684 SDK \u7684\u9ad8\u7ea7\u529f\u80fd\uff0c\u5305\u62ec\uff1a",source:"@site/docs/ios/develop/index.md",sourceDirName:"ios/develop",slug:"/ios/develop",permalink:"/growingio-sdk-docs/docs/ios/develop",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/develop/index.md",tags:[],version:"current",frontMatter:{slug:"/ios/develop",title:"\u524d\u8a00"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/ios/base/api"},next:{title:"\u81ea\u5b9a\u4e49 SDK",permalink:"/growingio-sdk-docs/docs/ios/develop/custom_sdk"}},c={},s=[],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/base"},"\u57fa\u7840\u4f7f\u7528"),"\u4e2d\u5df2\u7ecf\u8be6\u7ec6\u5730\u4ecb\u7ecd\u4e86\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u96c6\u6210\u6211\u4eec\u7684 SDK \u4ee5\u53ca SDK \u4e2d\u53ef\u7528\u7684\u914d\u7f6e\u9879\u548c\u8c03\u7528\u63a5\u53e3\uff0c\u63a5\u4e0b\u6765\u4f1a\u4ecb\u7ecd\u66f4\u591a\u7684 SDK \u7684\u9ad8\u7ea7\u529f\u80fd\uff0c\u5305\u62ec\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u4f55\u81ea\u5b9a\u4e49\u60f3\u8981\u7684 SDK \u529f\u80fd;"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u4f55\u4f7f\u7528\u81ea\u5df1\u7684\u4ee3\u7801\u5b9e\u73b0\u7684\u529f\u80fd\u66ff\u6362\u73b0\u6709\u7684\u6a21\u5757;"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5728\u73b0\u6709\u4ee3\u7801\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1;")),(0,o.kt)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u901a\u8fc7\u5c06 SDK \u6a21\u5757\u5316\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"))}d.isMDXComponent=!0}}]);