"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=n.createContext({}),d=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(g.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=d(r),c=o,s=b["".concat(g,".").concat(c)]||b[c]||p[c]||i;return r?n.createElement(s,l(l({ref:t},u),{},{components:r})):n.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=c;var a={};for(var g in t)hasOwnProperty.call(t,g)&&(a[g]=t[g]);a.originalType=e,a[b]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,title:"Mobile Debugger"},l=void 0,a={unversionedId:"debugverify/mobiledebugger",id:"debugverify/mobiledebugger",title:"Mobile Debugger",description:"GrowingIO \u7684\u79fb\u52a8\u7aef\u7684SDK\u652f\u6301 Mobile Debugger \u5de5\u5177\uff0c\u53ef\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u3002",source:"@site/knowledge/debugverify/mobiledebugger.md",sourceDirName:"debugverify",slug:"/debugverify/mobiledebugger",permalink:"/growingio-sdk-docs/knowledge/debugverify/mobiledebugger",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/debugverify/mobiledebugger.md",tags:[],version:"current",lastUpdatedAt:1703662489,formattedLastUpdatedAt:"Dec 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Mobile Debugger"},sidebar:"knowledge",previous:{title:"\u65e5\u5fd7\u8f93\u51fa\u8c03\u8bd5\u548c\u6821\u9a8c",permalink:"/growingio-sdk-docs/knowledge/debugverify/debug"},next:{title:"\u6d4b\u91cf\u534f\u8bae",permalink:"/growingio-sdk-docs/knowledge/measurement"}},g={},d=[{value:"\u542f\u52a8 Mobile Debugger",id:"\u542f\u52a8-mobile-debugger",level:2},{value:"1.\u8fdb\u5165Mobile Debugger\u542f\u52a8\u9875",id:"1\u8fdb\u5165mobile-debugger\u542f\u52a8\u9875",level:3},{value:"2.\u626b\u7801\u5524\u8d77App",id:"2\u626b\u7801\u5524\u8d77app",level:3},{value:"\u4f7f\u7528 Mobile Debugger \u6d4b\u8bd5\u6570\u636e",id:"\u4f7f\u7528-mobile-debugger-\u6d4b\u8bd5\u6570\u636e",level:2},{value:"\u901a\u8fc7\u201c\u4e8b\u4ef6\u6d41\u201d\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e",id:"\u901a\u8fc7\u4e8b\u4ef6\u6d41\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e",level:3},{value:"\u901a\u8fc7\u201cSDK\u8fd0\u884c\u65e5\u5fd7\u201d\u67e5\u770bSDK\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f/\u8b66\u544a/\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7",id:"\u901a\u8fc7sdk\u8fd0\u884c\u65e5\u5fd7\u67e5\u770bsdk\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f\u8b66\u544a\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7",level:3}],u=(b="ImageLoader",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var b;const p={toc:d},c="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GrowingIO \u7684\u79fb\u52a8\u7aef\u7684SDK\u652f\u6301 Mobile Debugger \u5de5\u5177\uff0c\u53ef\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u3002"),(0,o.kt)("h2",{id:"\u542f\u52a8-mobile-debugger"},"\u542f\u52a8 Mobile Debugger"),(0,o.kt)("p",null,"\u6b64\u529f\u80fd\u53ef\u4ee5\u5728\u7f51\u9875\u7aef\u67e5\u770b\u79fb\u52a8\u7aef SDK \u4e0a\u62a5\u6570\u636e\u7684\u65e5\u5fd7\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"1\u8fdb\u5165mobile-debugger\u542f\u52a8\u9875"},"1.\u8fdb\u5165Mobile Debugger\u542f\u52a8\u9875"),(0,o.kt)("p",null,"\u767b\u5f55 GrowingIO CDP \u7ba1\u7406\u5e73\u53f0\uff08\u4e00\u822c\u6765\u8bf4\uff0ccdp\u90fd\u4f1a\u914d\u6709\u6570\u636e\u7ba1\u7406\uff09\uff0c\u5728\u5e73\u53f0\u7ba1\u7406---\x3e\u5ba2\u6237\u6570\u636e\u5e73\u53f0---\x3e\u6570\u636e\u6821\u9a8c---\x3e",(0,o.kt)("strong",{parentName:"p"},"Mobile Debugger")," \u8fdb\u5165Mobile Debugger\u542f\u52a8\u9875\u3002"),(0,o.kt)(u,{path:"img/debugverify/EnterMobileDebugger",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"2\u626b\u7801\u5524\u8d77app"},"2.\u626b\u7801\u5524\u8d77App"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9009\u62e9\u9879\u76ee\u4e2d\u9700\u8981\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u7684\u5e94\u7528\uff0c\u5e76\u4fdd\u8bc1\u624b\u673a\u4e2d\u5df2\u7ecf\u5b89\u88c5\u8be5APP\uff0c\u4e14\u8be5APP\u5df2\u7ecf\u96c6\u6210GrowingIO SDK\u548c\u8bbe\u7f6e\u8fc7 URL Scheme\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u624b\u673a\u6d4f\u89c8\u5668\u626b\u63cf\u9875\u9762\u4e2d\u7684\u4e8c\u7ef4\u7801\u5524\u8d77 APP\u3002",(0,o.kt)("admonition",{parentName:"li",title:"\u63d0\u793a",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Android \u8bbe\u5907\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u4e2d\u6d4f\u89c8\u5668\u626b\u7801\u5524\u8d77APP\u3002",(0,o.kt)("br",null),"\niOS \u8bbe\u5907\uff0c\u53ef\u4f7f\u7528\u76f8\u673a\u6216\u81ea\u5e26\u7684\u626b\u7801\u5e94\u7528\u626b\u7801\u5524\u8d77APP\u3002",(0,o.kt)("br",null),"\n\u9700\u8981\u6ce8\u610f",(0,o.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u6216\u5176\u4ed6\u5e94\u7528\u4e2d\u626b\u7801\u65e0\u6cd5\u5524\u8d77APP"),"\u3002",(0,o.kt)("br",null),"\n\u5c0f\u7c73\u8bbe\u5907\uff0c\u7531\u4e8e\u5c0f\u7c73\u7cfb\u7edf\u539f\u56e0\u65e0\u6cd5\u4f7f\u7528 Mobile Debugger\u3002")))),(0,o.kt)("h2",{id:"\u4f7f\u7528-mobile-debugger-\u6d4b\u8bd5\u6570\u636e"},"\u4f7f\u7528 Mobile Debugger \u6d4b\u8bd5\u6570\u636e"),(0,o.kt)("p",null,"\u5728\u5524\u8d77APP\u540e\uff0c\u8be5APP\u91c7\u96c6\u7684\u884c\u4e3a\u6570\u636e\u3001\u65e5\u5fd7\u4fe1\u606f\u4ee5\u53ca\u5f53\u524d\u9875\u9762\u622a\u56fe\u5c31\u4f1a\u51fa\u73b0\u5728\u7f51\u9875\u4e0a\uff0c\u6d4b\u8bd5\u540c\u5b66\u53ef\u4ee5\u6839\u636e\u9875\u9762\u4e2d\u5c55\u793a\u7684\u6570\u636e\u67e5\u770bAPP\u4e2d\u6570\u636e\u7684\u91c7\u96c6\u4ee5\u53ca\u53d1\u9001\u60c5\u51b5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u6d4b\u8bd5\u548c\u6821\u9a8c\u3002"),(0,o.kt)("h3",{id:"\u901a\u8fc7\u4e8b\u4ef6\u6d41\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e"},"\u901a\u8fc7\u201c\u4e8b\u4ef6\u6d41\u201d\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u53ef\u4ee5\u67e5\u770b\u4e0a\u62a5\u4e8b\u4ef6\u5c5e\u6027\u7684\u8bf7\u6c42\u6570\u636e"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZPOkRVBIr9mSewTl5%2F%E4%BA%8B%E4%BB%B6%E6%B5%81%E9%A1%B5%E9%9D%A2.png?alt=media&token=8dce6e01-5f54-48d0-8e62-b500c6c5004d",alt:"Mobile Debugger"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u56fe\u7247\u4e2d\u5e8f\u53f71\uff1a\u53ef\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u7528\u6237\u53ca\u8bbe\u5907\u7b49\u57fa\u672c\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u56fe\u7247\u4e2d\u5e8f\u53f72\uff1a\u7b5b\u9009\u5668\u4e2d\u5c55\u793a\u7684\u662f\u7cfb\u7edf\u4e2d\u5df2\u5b9a\u4e49\u7684\u4e8b\u4ef6\u6807\u8bc6\u7b26\u5217\u8868\uff0c\u5982\u679c\u7b5b\u9009\u540e\u65e0\u6570\u636e\uff0c\u8bf4\u660e\u672c\u6b21\u8fde\u63a5\u672a\u4e0a\u62a5\u6570\u636e")),(0,o.kt)("h3",{id:"\u901a\u8fc7sdk\u8fd0\u884c\u65e5\u5fd7\u67e5\u770bsdk\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f\u8b66\u544a\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7"},"\u901a\u8fc7\u201cSDK\u8fd0\u884c\u65e5\u5fd7\u201d\u67e5\u770bSDK\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f/\u8b66\u544a/\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u53ef\u4ee5\u70b9\u51fb\u65e5\u5fd7\u53d1\u751f\u7684\u65f6\u95f4\u67e5\u770b\u76f8\u5e94\u7684\u65e5\u5fd7"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZRF90xKX8ecHudHtf%2FSDK%E6%97%A5%E5%BF%97.png?alt=media&token=e0069156-124e-464b-bf0d-6c88ab8cdd5c",alt:"\u8fde\u63a5\u6210\u529f\u540e\u8fdb\u5165SDK\u8fd0\u884c\u65e5\u5fd7"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u56fe\u7247\u4e2d\u5e8f\u53f71\uff1a\u53ef\u70b9\u51fb\u6682\u505c\u6309\u94ae\uff0c\u505c\u6b62\u540c\u6b65SDK\u4ea7\u751f\u7684\u65e5\u5fd7\uff0c\u4fbf\u4e8e\u67e5\u770b\u5f53\u524d\u9047\u5230\u7684\u95ee\u9898\uff1b\u518d\u6b21\u70b9\u51fb\u7ee7\u7eed\u6309\u94ae\uff0c\u5219\u540c\u6b65\u6240\u6709\u4ea7\u751f\u7684SDK\u65e5\u5fd7\uff0c\u5e76\u5c55\u793a\u6700\u65b0\u7684\u4e00\u6761\u65e5\u5fd7\u6570\u636e"),(0,o.kt)("li",{parentName:"ol"},"\u56fe\u7247\u4e2d\u5e8f\u53f72\uff1a\u70b9\u51fb\u6e05\u5c4f\u6309\u94ae\uff0c\u6e05\u9664\u5f53\u524d\u6240\u6709\u4ea7\u751f\u7684\u65e5\u5fd7")),(0,o.kt)("p",null,"\u6821\u9a8c\u7684\u5173\u6ce8\u70b9\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/knowledge/debugverify#%E6%A0%A1%E9%AA%8C%E6%97%B6%E9%9C%80%E5%85%B3%E6%B3%A8%E5%AD%97%E6%AE%B5%E5%92%8C%E8%AF%B4%E6%98%8E"},"\u6821\u9a8c\u65f6\u9700\u5173\u6ce8\u5b57\u6bb5\u548c\u8bf4\u660e"),"\u3002"))}s.isMDXComponent=!0}}]);