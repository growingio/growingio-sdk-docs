"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6328],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9903:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:1,title:"\u63d2\u4ef6\u7b80\u4ecb"},u=void 0,l={unversionedId:"giokit/intro",id:"giokit/intro",title:"\u63d2\u4ef6\u7b80\u4ecb",description:"GioKit - GrowingIO SDK \u4f7f\u7528\u8f85\u52a9\u5de5\u5177",source:"@site/docs/giokit/intro.md",sourceDirName:"giokit",slug:"/giokit/intro",permalink:"/growingio-sdk-docs/docs/giokit/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/giokit/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u63d2\u4ef6\u7b80\u4ecb"},sidebar:"gioSidebar",previous:{title:"PHP SDK",permalink:"/growingio-sdk-docs/docs/server/PHP SDK"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/android/version"}},p=[{value:"GioKit - GrowingIO SDK \u4f7f\u7528\u8f85\u52a9\u5de5\u5177",id:"giokit---growingio-sdk-\u4f7f\u7528\u8f85\u52a9\u5de5\u5177",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"giokit---growingio-sdk-\u4f7f\u7528\u8f85\u52a9\u5de5\u5177"},"GioKit - GrowingIO SDK \u4f7f\u7528\u8f85\u52a9\u5de5\u5177"),(0,i.kt)("p",null,"GioKit \u662f\u4e00\u4e2a\u8f85\u52a9\u5ba2\u6237\u5feb\u901f\u7a33\u5b9a\u63a5\u5165\u4f7f\u7528 GrowingIO SDK \u7684\u5de5\u5177\u3002\u76ee\u524d\u652f\u6301 iOS \u548c Android\uff0c\u5b83\u80fd\u591f\u5feb\u901f\u68c0\u6d4b SDK \u662f\u5426\u96c6\u6210\u6210\u529f\uff0c\u5e76\u80fd\u591f\u5728\u9762\u677f\u4e2d\u5b9e\u65f6\u53cd\u9988\u63a5\u5165\u7684 SDK \u4fe1\u606f\uff0c\u5177\u4f53\u5305\u62ec\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SDK \u81ea\u68c0 - SDK \u96c6\u6210\u68c0\u6d4b\uff0c\u5305\u62ec\u521d\u59cb\u5316\u53c2\u6570\uff0c\u914d\u7f6e\u53c2\u6570\u7b49"),(0,i.kt)("li",{parentName:"ul"},"SDK \u4fe1\u606f - \u5168\u9762\u7684 SDK \u96c6\u6210\u4fe1\u606f\u4e0e App \u57fa\u672c\u4fe1\u606f\uff0c\u65b9\u4fbf\u622a\u56fe\u5206\u4eab"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u57cb\u70b9  - APP\u624b\u52a8\u57cb\u70b9\u68c0\u6d4b(\u4ec5Android)\uff0c\u5c55\u793a\u57cb\u70b9\u4e8b\u4ef6\u6240\u5728\u7684\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5e93 - \u5b9e\u65f6\u57cb\u70b9\u6570\u636e\u6d4f\u89c8\uff0c\u5305\u62ec\u6570\u636e\u53d1\u9001\u72b6\u6001\uff0c\u53d1\u9001\u6570\u636e\u8be6\u60c5"),(0,i.kt)("li",{parentName:"ul"},"XPath\u8ddf\u8e2a - \u5708\u9009\u8f85\u52a9\u5de5\u5177\uff0c\u53ef\u4ee5\u5c55\u793a\u5143\u7d20\u7684XPath\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bb0\u5f55 - \u57cb\u70b9\u4e8b\u4ef6\u8bf7\u6c42\u6293\u5305\u5de5\u5177\uff0c\u5b9e\u65f6\u67e5\u770b\u57cb\u70b9\u6570\u636e\u4e0a\u4f20\u8fdb\u5ea6")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u76ee\u524d GioKit \u8fd8\u5904\u4e8e\u5f00\u53d1\u8bd5\u7528\u9636\u6bb5\uff0c\u66f4\u591a\u529f\u80fd\u5373\u5c06\u4e0a\u7ebf\uff0c\u656c\u8bf7\u671f\u5f85\u3002")))}d.isMDXComponent=!0}}]);