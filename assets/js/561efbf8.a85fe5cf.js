"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8001],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,d=u["".concat(a,".").concat(g)]||u[g]||m[g]||o;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3829:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:3,title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29"},p=void 0,s={unversionedId:"miniprogram/3.8/plugins/compress",id:"miniprogram/3.8/plugins/compress",title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29",description:"\u7b80\u4ecb\uff08gioCompress\uff09",source:"@site/docs/miniprogram/3.8/plugins/compress.md",sourceDirName:"miniprogram/3.8/plugins",slug:"/miniprogram/3.8/plugins/compress",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins/compress",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/plugins/compress.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29"},sidebar:"gioSidebar",previous:{title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins/impressionTracking"},next:{title:"\u591a\u9879\u76ee\u5206\u5305\u6253\u901a",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins/multiIntegrate"}},a={},l=[{value:"\u7b80\u4ecb\uff08gioCompress\uff09",id:"\u7b80\u4ecbgiocompress",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],c={toc:l};function m(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u4ecbgiocompress"},"\u7b80\u4ecb\uff08gioCompress\uff09"),(0,i.kt)("p",null,"\u4e0a\u62a5\u8bf7\u6c42\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u538b\u7f29\u3002"),(0,i.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,i.kt)("p",null,"\u5168\u91cf\u96c6\u6210SDK\u65f6\u65e0\u9700\u518d\u6b21\u96c6\u6210\u63d2\u4ef6\u3002"),(0,i.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,i.kt)("h4",{id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"},"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u63d2\u4ef6\u5305\u5e76\u590d\u5236\u81f3\u9879\u76ee\u4e2d\uff1a\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"3"},(0,i.kt)("a",{parentName:"strong",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.9/plugins.zip"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.9/plugins.zip"))),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u5165\u63d2\u4ef6"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import gioCompress from "./utils/plugins/gioCompress"\n')),(0,i.kt)("h4",{id:"npm\u96c6\u6210\u5f15\u5165"},"npm\u96c6\u6210\u5f15\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import gioCompress from "gio-webjs-sdk-cdp/plugins/gioCompress"\n')),(0,i.kt)("h3",{id:"2\u6ce8\u518c"},"2\u3001\u6ce8\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [gioCompress]);\ngdp('init', xxxx);\n")),(0,i.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"1\u3001\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u52a0\u8f7d\u8be5\u63d2\u4ef6\u540e\u81ea\u52a8\u5f00\u542f\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u529f\u80fd\u3002"),(0,i.kt)("p",null,"2\u3001\u521d\u59cb\u5316\u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"compress")," \u4f9d\u7136\u6709\u6548\u5e76\u80fd\u63a7\u5236\u8be5\u529f\u80fd\u662f\u5426\u542f\u7528\uff0c\u8bf7\u7559\u610f\u521d\u59cb\u5316\u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"compress")," \u662f\u5426\u5728\u5f00\u542f\u72b6\u6001\u3002",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/initSettings#compress"},"\u53c2\u8003\u6587\u6863")))}m.isMDXComponent=!0}}]);