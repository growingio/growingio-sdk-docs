"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5481],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(g,a(a({ref:r},u),{},{components:t})):n.createElement(g,a({ref:r},u))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4015:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:6,title:"\u6027\u80fd\u76d1\u63a7"},a=void 0,l={unversionedId:"miniprogram/plugins/performance",id:"miniprogram/plugins/performance",title:"\u6027\u80fd\u76d1\u63a7",description:"\u7b80\u4ecb\uff08gioPerformance\uff09",source:"@site/docs/miniprogram/plugins/performance.md",sourceDirName:"miniprogram/plugins",slug:"/miniprogram/plugins/performance",permalink:"/growingio-sdk-docs/docs/miniprogram/plugins/performance",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/plugins/performance.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u6027\u80fd\u76d1\u63a7"},sidebar:"docSidebar",previous:{title:"A/B\u6d4b\u8bd5",permalink:"/growingio-sdk-docs/docs/miniprogram/plugins/abtest"},next:{title:"\u7b2c\u4e09\u65b9\u6570\u636e\u8f6c\u53d1",permalink:"/growingio-sdk-docs/docs/miniprogram/plugins/adapters"}},p={},c=[{value:"\u7b80\u4ecb\uff08gioPerformance\uff09",id:"\u7b80\u4ecbgioperformance",level:2},{value:"\u91c7\u96c6\u8303\u56f4",id:"\u91c7\u96c6\u8303\u56f4",level:2},{value:"1\u3001\u5c0f\u7a0b\u5e8f\u542f\u52a8/\u9875\u9762\u52a0\u8f7d\u76d1\u63a7",id:"1\u5c0f\u7a0b\u5e8f\u542f\u52a8\u9875\u9762\u52a0\u8f7d\u76d1\u63a7",level:3},{value:"2\u3001\u9519\u8bef\u76d1\u63a7",id:"2\u9519\u8bef\u76d1\u63a7",level:3},{value:"\u5c0f\u7a0b\u5e8f\u517c\u5bb9\u6027",id:"\u5c0f\u7a0b\u5e8f\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],u={toc:c},m="wrapper";function s(e){let{components:r,...t}=e;return(0,i.kt)(m,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u4ecbgioperformance"},"\u7b80\u4ecb\uff08gioPerformance\uff09"),(0,i.kt)("p",null,"\u63d0\u4f9b\u5c0f\u7a0b\u5e8f \u5c0f\u7a0b\u5e8f\u542f\u52a8/\u9875\u9762\u52a0\u8f7d\u76d1\u63a7 \u548c \u9519\u8bef\u76d1\u63a7 \u7684\u6027\u80fd\u76d1\u63a7\u91c7\u96c6\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u91c7\u96c6\u8303\u56f4"},"\u91c7\u96c6\u8303\u56f4"),(0,i.kt)("h3",{id:"1\u5c0f\u7a0b\u5e8f\u542f\u52a8\u9875\u9762\u52a0\u8f7d\u76d1\u63a7"},"1\u3001\u5c0f\u7a0b\u5e8f\u542f\u52a8/\u9875\u9762\u52a0\u8f7d\u76d1\u63a7"),(0,i.kt)("p",null,"\u542b\u4ee5\u4e0b\u6307\u6807\u76d1\u63a7\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u51b7\u542f\u52a8\u8017\u65f6\uff08\u9996\u6b21\u52a0\u8f7d\u5c0f\u7a0b\u5e8f\uff09\uff1b\u5c0f\u7a0b\u5e8f\u4ece\u5f00\u59cb\u52a0\u8f7d\u81f3 AppOnLaunch \u7ed3\u675f\u7684\u8017\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u70ed\u542f\u52a8\u8017\u65f6\uff08\u540e\u53f0\u62c9\u8d77\u5c0f\u7a0b\u5e8f\uff09\uff1b\u5c0f\u7a0b\u5e8f\u4ece AppOnShow \u5f00\u59cb\u81f3 PageOnShow \u7ed3\u675f\u7684\u8017\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762\u5b8c\u6574\u52a0\u8f7d\u65f6\u957f\uff08PageLoad\uff09\uff1b\u9875\u9762\u4ece AppOnLaunch \u5f00\u59cb\u6216\u8df3\u8f6c\u5f00\u59cb\u5230\u6e32\u67d3\u5b8c\u6210 PageOnReady \u7ed3\u675f\u7684\u8017\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762\u9996\u6b21\u5185\u5bb9\u7ed8\u5236/\u767d\u5c4f\u65f6\u957f\uff08FCP\uff09\uff1b\u9875\u9762\u4ece AppOnLaunch \u5f00\u59cb\u6216\u8df3\u8f6c\u5f00\u59cb(navigationStart)\u5230\u5f00\u59cb\u6e32\u67d3\u9875\u9762\u5185\u5bb9\u65f6\u7684\u8017\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762\u6700\u5927\u5185\u5bb9\u7ed8\u5236\uff08LCP\uff09\uff1b\u9875\u9762\u4ece AppOnLaunch \u5f00\u59cb\u6216\u8df3\u8f6c\u5f00\u59cb(navigationStart)\u5230\u5f00\u59cb\u6e32\u67d3\u9875\u9762\u6700\u5927\u5185\u5bb9\u65f6\u7684\u8017\u65f6")),(0,i.kt)("h3",{id:"2\u9519\u8bef\u76d1\u63a7"},"2\u3001\u9519\u8bef\u76d1\u63a7"),(0,i.kt)("p",null,"\u542b\u4ee5\u4e0b\u9519\u8bef\u7c7b\u578b\u76d1\u63a7\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JS \u6267\u884c\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},"Promise \u6267\u884c\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762\u8df3\u8f6c\u5f02\u5e38\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bf7\u6c42\u9519\u8bef")),(0,i.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u517c\u5bb9\u6027"},"\u5c0f\u7a0b\u5e8f\u517c\u5bb9\u6027"),(0,i.kt)("p",null,"\u5f53\u524d\u4ec5\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u60f3\u8bd5\u7528\u6027\u80fd\u5206\u6790\u529f\u80fd\uff0c\u8bf7\u4e0e\u60a8\u7684\u5ba2\u6237\u6210\u529f\u7ecf\u7406\u6216\u9500\u552e\u4eba\u5458\u53d6\u5f97\u8054\u7cfb\u3002")))}s.isMDXComponent=!0}}]);