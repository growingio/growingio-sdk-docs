"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4989],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6773:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:7,title:"\u6570\u636e\u8f6c\u53d1\u63d2\u4ef6"},a=void 0,p={unversionedId:"miniprogram/plugins/adapters",id:"miniprogram/plugins/adapters",title:"\u6570\u636e\u8f6c\u53d1\u63d2\u4ef6",description:"\u7b80\u4ecb\uff08gioAdapters\uff09",source:"@site/docs/miniprogram/plugins/adapters.md",sourceDirName:"miniprogram/plugins",slug:"/miniprogram/plugins/adapters",permalink:"/growingio-sdk-docs/docs/miniprogram/plugins/adapters",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/plugins/adapters.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u6570\u636e\u8f6c\u53d1\u63d2\u4ef6"},sidebar:"docSidebar",previous:{title:"\u6027\u80fd\u76d1\u63a7",permalink:"/growingio-sdk-docs/docs/miniprogram/plugins/performance"},next:{title:"SDK\u5347\u7ea7\u6307\u5357",permalink:"/growingio-sdk-docs/docs/miniprogram/upgrade"}},s={},c=[{value:"\u7b80\u4ecb\uff08gioAdapters\uff09",id:"\u7b80\u4ecbgioadapters",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],l={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7b80\u4ecbgioadapters"},"\u7b80\u4ecb\uff08gioAdapters\uff09"),(0,o.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7ed9\u5df2\u7ecf\u96c6\u6210\u4e86\u5176\u4ed6\u7b2c\u4e09\u65b9\u5382\u5546\u6570\u636e\u91c7\u96c6 SDK \u7684\u5ba2\u6237\u5feb\u901f\u8f6c\u5165\u6211\u4eec\u7684\u91c7\u96c6 SDK\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u9488\u5bf9\u5404\u4e2a\u7b2c\u4e09\u65b9\u7684\u6570\u636e\u8f6c\u53d1\u670d\u52a1\u6765\u4f5c\u4e3a\u4e00\u4e2a\u8fc7\u6e21\u7684\u65b9\u6848\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u60f3\u8bd5\u7528\u6570\u636e\u8f6c\u53d1\u529f\u80fd\uff0c\u8bf7\u4e0e\u60a8\u7684\u5ba2\u6237\u6210\u529f\u7ecf\u7406\u6216\u9500\u552e\u4eba\u5458\u53d6\u5f97\u8054\u7cfb\u3002")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);