"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[418],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,k=m["".concat(l,".").concat(g)]||m[g]||s[g]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:5,title:"\u63d2\u4ef6"},l=void 0,u={unversionedId:"miniprogram/3.8/plugins",id:"miniprogram/3.8/plugins",title:"\u63d2\u4ef6",description:"\u4ee5\u4e0b\u6211\u4eec\u5217\u51fa\u4e86\u6240\u6709\u5c0f\u7a0b\u5e8fSDK\u652f\u6301\u7684\u63d2\u4ef6\uff0c\u8bf7\u6309\u9700\u52a0\u8f7d\u4f7f\u7528\u3002",source:"@site/docs/miniprogram/3.8/plugins.md",sourceDirName:"miniprogram/3.8",slug:"/miniprogram/3.8/plugins",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/plugins.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u63d2\u4ef6"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/commonlyApi"},next:{title:"3.3\u4e0e3.8\u5bf9\u6bd4",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/contrast"}},c={},s=[{value:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6\uff08gioCompress\uff09",id:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6giocompress",level:3},{value:"\u65e0\u57cb\u70b9\u63d2\u4ef6\uff08gioEventAutoTracking\uff09",id:"\u65e0\u57cb\u70b9\u63d2\u4ef6gioeventautotracking",level:3},{value:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6\uff08gioImpressionTracking\uff09",id:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6gioimpressiontracking",level:3},{value:"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6\uff08gioMultiIntegrate\uff09",id:"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6giomultiintegrate",level:3}],m={toc:s};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ee5\u4e0b\u6211\u4eec\u5217\u51fa\u4e86\u6240\u6709\u5c0f\u7a0b\u5e8fSDK\u652f\u6301\u7684\u63d2\u4ef6\uff0c\u8bf7\u6309\u9700\u52a0\u8f7d\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u53ea\u8981\u60a8\u52a0\u8f7d\u4e86\u63d2\u4ef6\u529f\u80fd\u4f1a\u81ea\u52a8\u52a0\u8f7d\u5e76\u542f\u7528\uff0c\u5982\u679c\u60a8\u4e0d\u60f3\u4f7f\u7528\u5176\u4e2d\u7684\u529f\u80fd\uff0c\u79fb\u9664\u5bf9\u5e94\u63d2\u4ef6\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6giocompress"},"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6\uff08gioCompress\uff09"),(0,i.kt)("p",null,"\u4e0a\u62a5\u8bf7\u6c42\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u538b\u7f29\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,i.kt)("br",null),"\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u52a0\u8f7d\u8be5\u63d2\u4ef6\u540e\u81ea\u52a8\u5f00\u542f\u52a0\u5bc6\u538b\u7f29\u529f\u80fd\u3002\u521d\u59cb\u5316\u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"compress")," \u4f9d\u7136\u6709\u6548\u5e76\u80fd\u63a7\u5236\u8be5\u529f\u80fd\u662f\u5426\u542f\u7528\uff0c\u8bf7\u7559\u610f",(0,i.kt)("inlineCode",{parentName:"p"},"compress"),"\u662f\u5426\u5728\u5f00\u542f\u72b6\u6001\uff08\u9ed8\u8ba4\u4e0d\u914d\u7f6e\u4e3a\u5f00\u542f\uff09\u3002"),(0,i.kt)("h3",{id:"\u65e0\u57cb\u70b9\u63d2\u4ef6gioeventautotracking"},"\u65e0\u57cb\u70b9\u63d2\u4ef6\uff08gioEventAutoTracking\uff09"),(0,i.kt)("p",null,"\u81ea\u52a8\u91c7\u96c6 ",(0,i.kt)("inlineCode",{parentName:"p"},"tap"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"longtap"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"change"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"submit")," \u4e8b\u4ef6\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u4e8b\u4ef6(tap)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_CLICK")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u70b9\u51fb\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u957f\u6309\u4e8b\u4ef6(longtap)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_CLICK")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u957f\u6309\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002\uff08\u652f\u4ed8\u5b9d/\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53d8\u66f4\u4e8b\u4ef6(change)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_CHANGE")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u53d8\u66f4\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8868\u5355\u63d0\u4ea4\u4e8b\u4ef6(submit)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"FORM_SUBMIT")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u8868\u5355\u63d0\u4ea4\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002(\u5feb\u5e94\u7528\u4e0d\u652f\u6301)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,i.kt)("br",null),"\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u52a0\u8f7d\u8be5\u63d2\u4ef6\u540e\u81ea\u52a8\u5f00\u542f\u65e0\u57cb\u70b9\u529f\u80fd\u3002\u521d\u59cb\u5316\u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"autotrack")," \u4f9d\u7136\u6709\u6548\u5e76\u80fd\u63a7\u5236\u8be5\u529f\u80fd\u662f\u5426\u542f\u7528\uff0c\u8bf7\u7559\u610f",(0,i.kt)("inlineCode",{parentName:"p"},"autotrack"),"\u662f\u5426\u5728\u5f00\u542f\u72b6\u6001\uff08\u9ed8\u8ba4\u4e0d\u914d\u7f6e\u4e3a\u5f00\u542f\uff09\u3002"),(0,i.kt)("h3",{id:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6gioimpressiontracking"},"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6\uff08gioImpressionTracking\uff09"),(0,i.kt)("p",null,"\u652f\u6301\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\u529f\u80fd\u7684\u63d2\u4ef6\uff0c\u52a0\u8f7d\u63d2\u4ef6\u540e\u81ea\u52a8\u5f00\u542f\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\u8bf7",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/commonlyApi#%E5%8D%8A%E8%87%AA%E5%8A%A8%E5%9F%8B%E7%82%B9%E6%B5%8F%E8%A7%88%E4%BA%8B%E4%BB%B6"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,i.kt)("h3",{id:"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6giomultiintegrate"},"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6\uff08gioMultiIntegrate\uff09"),(0,i.kt)("p",null,"\u5f53\u4e14\u4ec5\u5f53\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u4f7f\u7528\u72ec\u7acb\u5f00\u53d1\u7684\u5206\u5305\uff08\u5373\u4e3b\u5305\u4e0e\u5206\u5305\u4e0d\u5728\u540c\u4e00\u9879\u76ee\u4e2d\u4e14\u4e0d\u540c\u6846\u67b6\u65f6\uff09\u65f6\uff0c\u63d2\u4ef6\u7528\u4e8e\u6253\u901a\u7528\u6237\u6570\u636e\u548c\u9875\u9762\u6570\u636e\uff0c\u5408\u5e76\u4e3a\u4e00\u4e2aSDK\u8fd0\u884c\u903b\u8f91\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,i.kt)("br",null),"\n1\uff09\u4ec5\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"2\uff09\u4ec5\u652f\u6301\u7528\u6237\u548c\u9875\u9762\u6570\u636e\u6253\u901a\u4e0e\u57cb\u70b9\u4e8b\u4ef6\uff0c\u65e0\u57cb\u70b9\u4e8b\u4ef6\u65e0\u6cd5\u652f\u6301\uff0c\u4f7f\u7528\u8be5\u63d2\u4ef6\u4f1a\u81ea\u52a8\u5f3a\u5236\u5173\u95ed\u65e0\u57cb\u70b9\u529f\u80fd\uff08\u4e0d\u8bba\u662f\u5426\u52a0\u8f7d\u65e0\u57cb\u70b9\u63d2\u4ef6\u548c\u5f00\u542fautotrack\uff09\u3002"),(0,i.kt)("p",null,"3\uff09\u9700\u8981\u5728\u4e3b\u5305\u9879\u76ee\u4e2d\u4e0e\u5206\u5305\u9879\u76ee\u4e2d\u90fd\u96c6\u6210SDK\u548c\u6ce8\u518c\u63d2\u4ef6\uff0c\u5e76\u5728\u5206\u5305\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"subpackage: true"),"\u3002"),(0,i.kt)("p",null,"4\uff09\u5efa\u8bae\u5206\u5305\u9879\u76ee\u5c3d\u91cf\u4e0d\u8981\u8fc7\u591a\uff083\u4e2a\u4ee5\u5185\u4e3a\u5b9c\uff09\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cdSDK\u5408\u5e76\u8fd0\u884c\u65f6\u7684\u6027\u80fd\u4ece\u800c\u5f71\u54cd\u5c0f\u7a0b\u5e8f\u6574\u4f53\u8fd0\u884c\u6027\u80fd\u3002"))}g.isMDXComponent=!0}}]);