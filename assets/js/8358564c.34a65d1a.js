"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),h=o,m=s["".concat(c,".").concat(h)]||s[h]||u[h]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={slug:"JS Error",title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",author:"Shen Xiaowei",author_title:"GrowingIO SDK Team",author_url:"https://github.com/Anoiing",author_image_url:"https://avatars.githubusercontent.com/u/23634208?v=4",tags:["JS\uff0c Error\uff0cCatch"]},l=void 0,i={permalink:"/growingio-sdk-docs/blog/JS Error",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2021-11-18-js error catch.md",source:"@site/blog/2021-11-18-js error catch.md",title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",description:"\u4f17\u6240\u5468\u77e5\uff0c\u51e0\u4e4e\u6ca1\u6709\u4e00\u4e2a\u5f00\u53d1\u8005\u80fd\u591f\u505a\u5230\u5f00\u53d1\u65f6100%\u6ca1\u6709Bug\uff0c\u90a3\u4e48\u4e00\u65e6\u6211\u4eec\u7684\u4ea7\u54c1\u51fa\u4e86\u95ee\u9898\uff0c\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u662f\u8feb\u5207\u9700\u8981\u505a\u7684\u4e8b\u3002\u597d\u5728\u6211\u4eec\u5728Web\u573a\u666f\u4e2dJs\u8fd0\u884c\u51fa\u73b0\u5f02\u5e38\u4e0d\u4f1a\u5bfc\u81f4JS\u5f15\u64ce\u5d29\u6e83\uff0c\u6700\u591a\u53ea\u4f1a\u7ec8\u6b62\u5f53\u524d\u6267\u884c\u7684\u4efb\u52a1\u3002\u7136\u540e\u9010\u7ea7\u4e0a\u629b\u9519\u8bef\uff0c\u7c7b\u4f3c\u5192\u6ce1\u4e8b\u4ef6\uff0c\u5728\u9047\u5230\u6700\u8fd1\u7684\u4e00\u5c42catch\u65f6\u505c\u6b62\u4e0a\u629b\uff0c\u5982\u679c\u4e2d\u95f4\u90fd\u6ca1\u6709\u9519\u8bef\u5904\u7406\u7684catch\u65f6\uff0c\u76f4\u81f3window\u5bf9\u8c61\u7ed3\u675f\u3002\u90a3\u4e48\u4eca\u5929\u5c31\u4e0e\u5927\u5bb6\u4e00\u8d77\u63a2\u8ba8\u4e00\u4e0b\u6211\u4eec\u5728Web\u573a\u666f\u4e2d\u7684\u5f02\u5e38\u9519\u8bef\u6570\u636e\u5982\u4f55\u6536\u96c6\u4ee5\u53ca\u5982\u4f55\u4e0a\u62a5\u3002",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"JS\uff0c Error\uff0cCatch",permalink:"/growingio-sdk-docs/blog/tags/js\uff0c-error\uff0c-catch"}],readingTime:10.205,hasTruncateMarker:!0,authors:[{name:"Shen Xiaowei",title:"GrowingIO SDK Team",url:"https://github.com/Anoiing",imageURL:"https://avatars.githubusercontent.com/u/23634208?v=4"}],frontMatter:{slug:"JS Error",title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",author:"Shen Xiaowei",author_title:"GrowingIO SDK Team",author_url:"https://github.com/Anoiing",author_image_url:"https://avatars.githubusercontent.com/u/23634208?v=4",tags:["JS\uff0c Error\uff0cCatch"]},prevItem:{title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",permalink:"/growingio-sdk-docs/blog/AutoreleasePool"},nextItem:{title:"MavenCentral \u8fc1\u79fb\u6b65\u9aa4",permalink:"/growingio-sdk-docs/blog/MavenCentral"}},c={authorsImageUrls:[void 0]},d=[{value:"\u9519\u8bef\u7c7b\u578b",id:"\u9519\u8bef\u7c7b\u578b",level:3},{value:"Js\u6267\u884c\u9519\u8bef",id:"js\u6267\u884c\u9519\u8bef",level:3},{value:"\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef",id:"\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef",level:3},{value:"\u9519\u8bef\u6355\u83b7",id:"\u9519\u8bef\u6355\u83b7",level:3},{value:"window.onerror",id:"windowonerror",level:3},{value:"window.addEventListener(\u2018error\u2019)",id:"windowaddeventlistenererror",level:3},{value:"window.addEventListener(\u2018unhandledrejection\u2019)",id:"windowaddeventlistenerunhandledrejection",level:3},{value:"\u6570\u636e\u4e0a\u62a5",id:"\u6570\u636e\u4e0a\u62a5",level:2},{value:"XMLHttpRequest",id:"xmlhttprequest",level:3},{value:"Image",id:"image",level:3},{value:"SendBeacon",id:"sendbeacon",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003\u6587\u732e\uff1a",id:"\u53c2\u8003\u6587\u732e",level:3}],p=(s="ImageLoader",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var s;const u={toc:d},h="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u51e0\u4e4e\u6ca1\u6709\u4e00\u4e2a\u5f00\u53d1\u8005\u80fd\u591f\u505a\u5230\u5f00\u53d1\u65f6100%\u6ca1\u6709Bug\uff0c\u90a3\u4e48\u4e00\u65e6\u6211\u4eec\u7684\u4ea7\u54c1\u51fa\u4e86\u95ee\u9898\uff0c\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u662f\u8feb\u5207\u9700\u8981\u505a\u7684\u4e8b\u3002\u597d\u5728\u6211\u4eec\u5728Web\u573a\u666f\u4e2dJs\u8fd0\u884c\u51fa\u73b0\u5f02\u5e38\u4e0d\u4f1a\u5bfc\u81f4JS\u5f15\u64ce\u5d29\u6e83\uff0c\u6700\u591a\u53ea\u4f1a\u7ec8\u6b62\u5f53\u524d\u6267\u884c\u7684\u4efb\u52a1\u3002\u7136\u540e\u9010\u7ea7\u4e0a\u629b\u9519\u8bef\uff0c\u7c7b\u4f3c\u5192\u6ce1\u4e8b\u4ef6\uff0c\u5728\u9047\u5230\u6700\u8fd1\u7684\u4e00\u5c42catch\u65f6\u505c\u6b62\u4e0a\u629b\uff0c\u5982\u679c\u4e2d\u95f4\u90fd\u6ca1\u6709\u9519\u8bef\u5904\u7406\u7684catch\u65f6\uff0c\u76f4\u81f3window\u5bf9\u8c61\u7ed3\u675f\u3002\u90a3\u4e48\u4eca\u5929\u5c31\u4e0e\u5927\u5bb6\u4e00\u8d77\u63a2\u8ba8\u4e00\u4e0b\u6211\u4eec\u5728Web\u573a\u666f\u4e2d\u7684\u5f02\u5e38\u9519\u8bef\u6570\u636e\u5982\u4f55\u6536\u96c6\u4ee5\u53ca\u5982\u4f55\u4e0a\u62a5\u3002"),(0,o.kt)("h3",{id:"\u9519\u8bef\u7c7b\u578b"},"\u9519\u8bef\u7c7b\u578b"),(0,o.kt)("p",null,"\u60f3\u8981\u83b7\u53d6\u5230\u76f8\u5bf9\u5b8c\u6574\u7684\u5f02\u5e38\u9519\u8bef\u6570\u636e\uff0c\u5148\u8981\u4e86\u89e3\u5728Web\u4e2d\u5e38\u89c1\u7684\u5f02\u5e38\u9519\u8bef\u90fd\u6709\u54ea\u4e9b\u3002"),(0,o.kt)("h3",{id:"js\u6267\u884c\u9519\u8bef"},"Js\u6267\u884c\u9519\u8bef"),(0,o.kt)("p",null,"\u65e5\u5e38\u6267\u884c\u4e2d\u4e3b\u8981\u6709\u540c\u6b65\u9519\u8bef\u3001\u8bed\u6cd5\u9519\u8bef\u3001\u666e\u901a\u5f02\u6b65\u4efb\u52a1\u9519\u8bef\u3001Promise\u4efb\u52a1\u9519\u8bef\u3001async\u4efb\u52a1\u9519\u8bef5\u79cd\u5e38\u89c1\u7684\u5f02\u5e38\u9519\u8bef\u3002"),(0,o.kt)("h3",{id:"\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef"},"\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef"),(0,o.kt)("p",null,"\u4e3b\u8981\u6709\u56fe\u7247\u3001script\u3001css\u3001font\u7b49\u8d44\u6e90\u7684\u52a0\u8f7d\u9519\u8bef\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"\u9519\u8bef\u6355\u83b7"},"\u9519\u8bef\u6355\u83b7"),(0,o.kt)("p",null,"try\u2026catch\n\u4f5c\u4e3a\u4e00\u4e2a\u4f18\u79c0\u7684\u7a0b\u5e8f\u5458\uff0c\u9996\u5148\u6211\u4eec\u80fd\u60f3\u5230\u7684\u4e00\u5b9a\u662f try\u2026catch\uff0c\u90a3\u4e48\u6211\u4eec\u76f4\u63a5\u4e0a\u4ee3\u7801\uff1a"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-1",mdxType:"ImageLoader"}),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-2",mdxType:"ImageLoader"}),(0,o.kt)("p",null,"\u56e0\u4e3a\u8d44\u6e90\u52a0\u8f7d\u6807\u7b7e\u80af\u5b9a\u4e0d\u80fd\u5728\u4ee3\u7801\u5757\u4e2d\u6267\u884c\uff0c\u56e0\u6b64\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef\u80af\u5b9a\u65e0\u6cd5\u6355\u83b7\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4e0a\u56fe\u7ed3\u679c\uff0c\u6211\u4eec\u53ef\u4ee5\u5c0f\u7ed3\u4e00\u4e0btry\u2026catch\u7684\u5904\u7406\u80fd\u529b\uff1a"),(0,o.kt)("p",null,"\u80fd\u6355\u83b7\u5305\u88f9\u4f53\u5185\u7684\u540c\u6b65\u6267\u884c\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7\u8bed\u6cd5\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7\u5f02\u6b65\u4efb\u52a1\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7Promise\u4efb\u52a1\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef\u3002"),(0,o.kt)("h3",{id:"windowonerror"},"window.onerror"),(0,o.kt)("p",null,"\u6211\u4eec\u6d4f\u89c8\u5668\u5728window\u5bf9\u8c61\u4e0a\u8fd8\u81ea\u5e26\u4e86\u4e00\u4e2aonerror\u7684\u65b9\u6cd5\uff1a"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-3",mdxType:"ImageLoader"}),"\u9700\u8981\u989d\u5916\u6ce8\u610f\uff1a\u8de8\u57df\u811a\u672c\u52a0\u8f7d\u9519\u8bef\u53ea\u6709\u4e00\u4e2a\u201cScript error\u201d\uff0c\u5e76\u4e0d\u80fd\u83b7\u53d6\u5230\u9519\u8bef\u4fe1\u606f\u3002\u53ef\u4ee5\u901a\u8fc7\u5728 script \u6807\u7b7e\u4e0a\u6dfb\u52a0\u201ccrossorigin\u201d\u5c5e\u6027\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002",(0,o.kt)("p",null,"\u57fa\u4e8e\u4e0a\u56fe\u7ed3\u679c\uff0c\u6211\u4eec\u518d\u5c0f\u7ed3\u4e00\u4e0bwindow.onerror\u7684\u5904\u7406\u80fd\u529b\uff1a"),(0,o.kt)("p",null,"\u80fd\u6355\u83b7\u6240\u6709\u540c\u6b65\u6267\u884c\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7\u8bed\u6cd5\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u80fd\u6355\u83b7\u666e\u901a\u5f02\u6b65\u4efb\u52a1\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7Promise\u4efb\u52a1\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7async\u4efb\u52a1\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u4e0d\u80fd\u6355\u83b7\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef\u3002"),(0,o.kt)("h3",{id:"windowaddeventlistenererror"},"window.addEventListener(\u2018error\u2019)"),(0,o.kt)("p",null,"\u5728Web\u9875\u9762\u4e0a\u6211\u4eec\u53ef\u4ee5\u76d1\u542c\u7edd\u5927\u591a\u6570\u4e8b\u4ef6\uff0c\u5f53\u7136\u4e5f\u5305\u62ec\u9519\u8bef\u4e8b\u4ef6\uff0c\u6211\u4eec\u4ece\u5b57\u9762\u610f\u601d\u4e0a\u6d45\u7406\u89e3\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a\u4e0eonerror\u5dee\u4e0d\u591a\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u5b83\u4eec\u4fe9\u7684\u8868\u73b0\u8fd8\u662f\u6709\u4e00\u70b9\u533a\u522b\uff0c\u8fd9\u91cc\u6211\u4eec\u7ed9\u51faaddEventListener\u989d\u5916\u80fd\u6355\u83b7\u7684\u9519\u8bef\uff0c\u5176\u4ed6\u4e0eonerror\u57fa\u672c\u4e00\u81f4\uff1a"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-4",mdxType:"ImageLoader"}),"\u8fd9\u91cc\u8981\u989d\u5916\u6ce8\u610f\u7684\u662f\uff1a\u5982\u679c\u662f\u5728js\u4ee3\u7801\u4e2dnew Image() \u540e\u52a0\u8f7d\u51fa\u73b0\u7684\u9519\u8bef\u662f\u65e0\u6cd5\u6355\u83b7\u7684\u3002",(0,o.kt)("p",null,"\u76f8\u6bd4window.onerror\uff0c\u901a\u8fc7window.addEventListener\u7684\u65b9\u5f0f\u6211\u4eec\u53ef\u4ee5\u6355\u83b7\u8d44\u6e90\u52a0\u8f7d\u7684\u9519\u8bef\u3002"),(0,o.kt)("h3",{id:"windowaddeventlistenerunhandledrejection"},"window.addEventListener(\u2018unhandledrejection\u2019)"),(0,o.kt)("p",null,"\u521a\u624d\u6211\u4eec\u4ecb\u7ecd\u4e863\u79cd\u5e38\u89c1\u7684\u9519\u8bef\u6355\u83b7\u65b9\u5f0f\uff0c\u4f46\u90fd\u4e0d\u80fd\u6355\u83b7Promise\u4efb\u52a1\u7684\u9519\u8bef\uff0c\u8fd9\u91cc\u6709\u4eba\u4f1a\u8bf4\u4e86\uff0cPromise\u4e0d\u662f\u53ef\u4ee5\u81ea\u5df1catch\u5417\uff1f\u662f\u7684\uff0c\u4f46\u662f\u6211\u76f8\u4fe1\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u7684\u5f00\u53d1\u540c\u5b66\u53ef\u80fd\u5e76\u4e0d\u4f1a\u4e3a\u6bcf\u4e00\u4e2aPromise\u5199\u4e00\u4e2acatch\uff0c\u6216\u8005\u53ef\u80fd\u51fa\u73b0\u6f0f\u5199\u7684\u60c5\u51b5\u3002Js\u4e3a\u6211\u4eec\u51c6\u5907\u4e86\u4e00\u4e2a\u201c\u515c\u5e95\u65b9\u6848\u201d: unhandledrejection\u4e8b\u4ef6\u76d1\u542c\u3002\u5b83\u4f1a\u5728Promise \u88abreject\uff08\u629b\u9519\uff09\u4e14\u6ca1\u6709\u88abcatch\u7684\u65f6\u5019\u89e6\u53d1\u3002\u4e0b\u9762\u4e0a\u4f8b\u5b50\uff1a"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-5",mdxType:"ImageLoader"}),"\u5f53\u7136\u5982\u679c\u6211\u4eec\u5c06\u6ca1\u6709catch\u7684Promise\u653e\u5728async\u4e2d\u53bb\u6267\u884c\uff0cunhandledrejection\u4e8b\u4ef6\u76d1\u542c\u4e5f\u80fd\u6355\u83b7\u5230\u3002\u6240\u4ee5async\u4efb\u52a1\u9519\u8befunhandledrejection\u4e8b\u4ef6\u76d1\u542c\u4e5f\u662f\u53ef\u4ee5\u652f\u6301\u6355\u83b7\u7684\u3002",(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9898\u5916\u8bdd\uff1a"),"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u540d\u79f0\u53eb\u505aunhandledrejection\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u82f1\u8bed\u8bcd\u6cd5\u654f\u9510\u7684\u7a0b\u5e8f\u5458\uff0c\u77ac\u95f4\u60f3\u5230\uff0c\u6709\u6ca1\u6709\u53ebhandledrejection\u7684\u4e8b\u4ef6\u5462\uff0c\u5982\u679c\u6709\uff0c\u6211\u4eec\u662f\u4e0d\u662f\u53ef\u4ee5\u731c\u6d4b\u4f5c\u7528\u521a\u597d\u662f\u76f8\u53cd\u5462\uff1f\u8fd8\u771f\u6709\uff01\u5e76\u4e14\u6b63\u5982\u6211\u4eec\u6240\u731c\u6d4b\u7684\uff0c\u5b83\u662f\u5728Promise\u7684reject\u505a\u4e86\u5904\u7406\uff08catch\uff09\u540e\u89e6\u53d1\uff01\u8fd9\u91cc\u6211\u4eec\u5c31\u4e0d\u5c55\u5f00\u8c08\u8bba\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u7814\u7a76\u4e00\u4e0b\u3002"),(0,o.kt)("p",null,"\u56de\u5f52\u6b63\u9898\uff0c\u6211\u4eec\u901a\u8fc7\u8fd9\u4e48\u591a\u4f8b\u5b50\u6d4b\u8bd5\u4e864\u79cd\u6355\u83b7\u9519\u8bef\u7684\u65b9\u5f0f\uff0c\u603b\u7ed3\u5f97\u5230\u4e0b\u8868\uff1a"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-6",mdxType:"ImageLoader"}),"\u90a3\u4e48\u6211\u4eec\u89c2\u5bdf\u8fd9\u4e2a\u8868\u683c\uff0c\u9996\u5148\u53ef\u4ee5\u770b\u5230\u8bed\u6cd5\u9519\u8bef\uff0c4\u79cd\u65b9\u5f0f\u90fd\u4e0d\u80fd\u6355\u83b7\uff0c\u4f46\u662f\u6211\u4eec\u4e00\u822c\u8ba4\u4e3a\u8bed\u6cd5\u9519\u8bef\u4e0d\u5e94\u8be5\u5728\u6267\u884c\u9636\u6bb5\u624d\u53d1\u73b0\uff0c\u5728\u6211\u4eec\u7684\u7f16\u8bd1\u4ee5\u53ca\u6d4b\u8bd5\u73af\u8282\u5c31\u53ef\u4ee5\u68c0\u67e5\u51fa\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u8003\u8651\u5c06\u5176\u6355\u83b7\u3002\u90a3\u4e48\u5176\u4ed6\u7684\u5f02\u5e38\u9519\u8bef\u6211\u4eec\u53d1\u73b0\u901a\u8fc7 addEventListener('onerror') + addEventListener('unhandledrejection') \u7684\u65b9\u5f0f\u6070\u597d\u80fd\u591f\u8986\u76d65\u79cd\u5f02\u5e38\u9519\u8bef\u7684\u6355\u83b7\uff0c\u4e00\u8d77\u6765\u5b9e\u73b0\u4e00\u4e0b\uff1a",(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-7",mdxType:"ImageLoader"}),"\u628aPromise\u53caasync\u4efb\u52a1\u4e2d\u7684\u9519\u8bef\u6355\u83b7\u540e\u7528\u540c\u6b65\u7684\u903b\u8f91\u629b\u51fa\u5373\u53ef\u8ba9onerror\u51c6\u786e\u6355\u83b7\u5230\u3002",(0,o.kt)("p",null,"\u5982\u6b64\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6211\u4eecWeb\u4e2d\u5927\u90e8\u5206\u7684\u5f02\u5e38\u95ee\u9898\u8fdb\u884c\u51c6\u786e\u6355\u83b7\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u770b\u5982\u4f55\u5c06\u9519\u8bef\u95ee\u9898\u4e0a\u62a5\u81f3\u6211\u4eec\u7684\u670d\u52a1\u5668\u8fdb\u884c\u6c47\u603b\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u4e0a\u62a5"},"\u6570\u636e\u4e0a\u62a5"),(0,o.kt)("h3",{id:"xmlhttprequest"},"XMLHttpRequest"),(0,o.kt)("p",null,"\u6211\u4eec\u60f3\u8981\u5c06\u6570\u636e\u4f20\u56de\u670d\u52a1\u5668\uff0c\u6700\u901a\u7528\u7684\u65b9\u5f0f\u5f53\u7136\u5c31\u662fajax\u8bf7\u6c42\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u7684XMLHttpRequest\uff08\u8fd9\u91cc\u6211\u4eec\u4e0d\u8ba8\u8bbaIE\uff09\u7684send\u65b9\u6cd5\uff0c\u53d1\u9001post\u8bf7\u6c42\u6570\u636e\u7ed9\u670d\u52a1\u7aef\uff0c\u8fd9\u91cc\u6211\u4eec\u4e0d\u518d\u7ed9\u51fa\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u5176\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff1a"),(0,o.kt)("p",null,"\u6709\u4e25\u683c\u7684\u8de8\u57df\u9650\u5236\u3001\u643a\u5e26cookie\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u4e0a\u62a5\u8bf7\u6c42\u53ef\u80fd\u4f1a\u963b\u585e\u4e1a\u52a1\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u5bb9\u6613\u4e22\u5931\uff08\u88ab\u6d4f\u89c8\u5668\u5f3a\u5236cancel\uff09\u3002"),(0,o.kt)("h3",{id:"image"},"Image"),(0,o.kt)("p",null,"\u7531\u4e8e\u6d4f\u89c8\u5668\u5bf9\u8d44\u6e90\u6587\u4ef6\u7684\u533a\u522b\u5bf9\u5f85\uff0c\u4e3a\u4e86\u89e3\u51b3\u4e0a\u9762\u7684\u51e0\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a1x1\u5927\u5c0f\u7684\u56fe\u7247\u8fdb\u884c\u5f02\u6b65\u52a0\u8f7d\u7684\u65b9\u5f0f\u6765\u4e0a\u62a5\u3002\u56fe\u7247\u5929\u7136\u53ef\u8de8\u57df\uff0c\u53c8\u80fd\u517c\u5bb9\u6240\u6709\u7684\u6d4f\u89c8\u5668\uff0c\u800cjs\u548ccss\u7b49\u5176\u4ed6\u8d44\u6e90\u6587\u4ef6\u5219\u53ef\u80fd\u51fa\u73b0\u5b89\u5168\u62e6\u622a\u548c\u8de8\u57df\u52a0\u8f7d\u95ee\u9898\u3002"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-8",mdxType:"ImageLoader"}),"\u4f46\u7531\u4e8e\u662f\u4e00\u4e2aget\u8bf7\u6c42\uff0c\u4e0a\u62a5\u7684\u6570\u636e\u91cf\u5728\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\u4e0b\u4e0a\u9650\u4e0d\u4e00\u81f4\uff082kb-8kb\uff09\uff0c\u8fd9\u5c31\u53ef\u80fd\u51fa\u73b0\u8d85\u51fa\u957f\u5ea6\u9650\u5236\u800c\u65e0\u6cd5\u4e0a\u62a5\u5b8c\u6574\u6570\u636e\u7684\u60c5\u51b5\u3002\u56e0\u6b64\uff0c\u56fe\u7247\u4e0a\u62a5\u4e5f\u662f\u4e00\u4e2a\u201c\u4e0d\u5b89\u5168\u201d\u7684\u65b9\u5f0f\u3002",(0,o.kt)("h3",{id:"sendbeacon"},"SendBeacon"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u5929\u751f\u5c31\u662f\u4e3a\u4e86\u6570\u636e\u7edf\u8ba1\u800c\u8bbe\u8ba1\u7684\uff0c\u5b83\u89e3\u51b3\u4e86XMLHttpRequest\u548c\u56fe\u7247\u4e0a\u62a5\u7684\u7edd\u5927\u90e8\u5206\u5f0a\u7aef\uff1a\u6ca1\u6709\u8de8\u57df\u95ee\u9898\u3001\u4e0d\u963b\u585e\u4e1a\u52a1\uff0c\u751a\u81f3\u80fd\u5728\u9875\u9762unload\u9636\u6bb5\u7ee7\u7eed\u53d1\u9001\u6570\u636e\uff0c\u5b8c\u7f8e\u5730\u89e3\u51b3\u4e86\u666e\u901a\u8bf7\u6c42\u5728unload\u9636\u6bb5\u88abcancel\u5bfc\u81f4\u4e22\u6570\u636e\u7684\u95ee\u9898\uff0c\u552f\u4e00\u7684\u95ee\u9898\u5c31\u662fIE\u5e76\u4e0d\u652f\u6301\u3002"),(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-9",mdxType:"ImageLoader"}),"\u8c03\u7528\u65b9\u5f0f\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u7c7b\u4f3c\u6211\u4eec\u53d1\u9001post\u8bf7\u6c42\uff1a",(0,o.kt)(p,{path:"blog/JSErrorCatch/trycatch-10",mdxType:"ImageLoader"}),(0,o.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0csendBeacon\u5e76\u4e0d\u50cfXMLHttpRequest\u4e00\u6837\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9aContent-Type\uff0c\u4e14\u4e0d\u652f\u6301application/json\u7b49\u5e38\u89c1\u683c\u5f0f\u3002data\u7684\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u662f ArrayBufferView \u6216 Blob, DOMString \u6216\u8005 FormData \u7c7b\u578b\u7684\u3002\u8fd9\u91cc\u7ed9\u51faBlob\u7c7b\u578b\u7684\u793a\u4f8b\u3002"),(0,o.kt)("h3",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a3\u79cd\u4e0a\u62a5\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u57fa\u672c\u603b\u7ed3\u51fa\uff0c\u4e0a\u62a5\u6570\u636e\u5efa\u8bae\u4f18\u5148\u4f7f\u7528sendBeacon\u7684\u65b9\u5f0f\uff0c\u4e0d\u652f\u6301\u7684\u6d4f\u89c8\u5668\uff08\u4f8b\u5982IE\uff09\u5219\u964d\u7ea7\u4f7f\u7528\u56fe\u7247\u4e0a\u62a5\uff0c\u5c3d\u91cf\u907f\u514d\u76f4\u63a5\u4f7f\u7528XMLHttpRequest\u8fdb\u884c\u4e0a\u62a5\u3002"),(0,o.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",null,"\u76ee\u524d\u4f60\u867d\u7136GrowingIO Web SDK\u73b0\u5728\u5e76\u6ca1\u6709\u5bf9\u8fd9\u4e9b\u5f02\u5e38\u9519\u8bef\u505a\u5b8c\u6574\u7684\u6536\u96c6\uff08\u56e0\u4e3a\u6211\u4eec\u7684\u4ea7\u54c1\u91cd\u70b9\u4e0d\u5728\u8fd9\uff09\uff0c\u4f46\u662f\u6211\u4eec\u6709\u9700\u8981\u7684\u7528\u6237\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u9519\u8bef\u6355\u83b7\u7684\u903b\u8f91\u5e76\u4f7f\u7528SDK\u7684\u57cb\u70b9\u65b9\u6cd5\u8fdb\u884c\u4e0a\u62a5\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u6b63\u5728Web SDK\u4e0a\u8fdb\u884c\u67b6\u6784\u6f14\u8fdb\u4e14\u5373\u5c06\u5b8c\u6210\uff0c\u521b\u65b0\u6027\u5730\u63d0\u4f9b\u4e86\u5ba2\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u80fd\u529b\uff01\u540e\u7eed\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7SDK\u63d0\u4f9b\u7684\u63d2\u4ef6\u80fd\u529b\uff0c\u81ea\u884c\u5f00\u53d1\u4e00\u4e2a\u9519\u8bef\u6536\u96c6\u7684\u63d2\u4ef6\uff08\u751a\u81f3\u662f\u6027\u80fd\u91c7\u96c6\u63d2\u4ef6\uff09\uff0c\u914d\u5408SDK\u539f\u6709\u529f\u80fd\u5c31\u80fd\u5b8c\u6210\u4e1a\u52a1\u8fd0\u8425\u6570\u636e\u548c\u5f00\u53d1\u6240\u9700\u7684\u9519\u8bef\u3001\u6027\u80fd\u6570\u636e\u7684\u91c7\u96c6\uff01\u656c\u8bf7\u671f\u5f85\uff01"),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u6211\u4eec\u4eca\u5929\u4e3a\u5927\u5bb6\u5206\u4eab\u7684Web\u5e94\u7528Js\u5f02\u5e38\u9519\u8bef\u6536\u96c6\u7684\u5185\u5bb9\u3002"),(0,o.kt)("h3",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror"},"https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener"},"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/unhandledrejection_event"},"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/unhandledrejection_event")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon"},"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon")))}m.isMDXComponent=!0}}]);