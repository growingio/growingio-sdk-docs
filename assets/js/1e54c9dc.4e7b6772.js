"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[897],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},c=function(e){var o=u(e.components);return r.createElement(s.Provider,{value:o},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||n;return t?r.createElement(d,l(l({ref:o},c),{},{components:t})):r.createElement(d,l({ref:o},c))}));function d(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=m;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2594:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const n={slug:"AutoreleasePool",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",author:"YoloMao",author_title:"GrowingIO SDK Team",author_url:"https://github.com/YoloMao",author_image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",tags:["iOS","AutoreleasePool","\u7f16\u8bd1\u5668\u4f18\u5316"]},l=void 0,i={permalink:"/growingio-sdk-docs/blog/AutoreleasePool",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2022-02-22-autoreleasePool.md",source:"@site/blog/2022-02-22-autoreleasePool.md",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",description:"main.m \u4e2d\u7684 AutoreleasePool",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"iOS",permalink:"/growingio-sdk-docs/blog/tags/i-os"},{label:"AutoreleasePool",permalink:"/growingio-sdk-docs/blog/tags/autorelease-pool"},{label:"\u7f16\u8bd1\u5668\u4f18\u5316",permalink:"/growingio-sdk-docs/blog/tags/\u7f16\u8bd1\u5668\u4f18\u5316"}],readingTime:11.91,hasTruncateMarker:!0,authors:[{name:"YoloMao",title:"GrowingIO SDK Team",url:"https://github.com/YoloMao",imageURL:"https://avatars.githubusercontent.com/u/16042670?v=4"}],frontMatter:{slug:"AutoreleasePool",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",author:"YoloMao",author_title:"GrowingIO SDK Team",author_url:"https://github.com/YoloMao",author_image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",tags:["iOS","AutoreleasePool","\u7f16\u8bd1\u5668\u4f18\u5316"]},prevItem:{title:"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1 - Android \u7bc7",permalink:"/growingio-sdk-docs/blog/custom android sdk"},nextItem:{title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",permalink:"/growingio-sdk-docs/blog/JS Error"}},s={authorsImageUrls:[void 0]},u=[],c=(p="ImageLoader",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const g={toc:u},m="wrapper";function d(e){let{components:o,...t}=e;return(0,a.kt)(m,(0,r.Z)({},g,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"main.m \u4e2d\u7684 AutoreleasePool\n\u67d0\u6b21\u5076\u7136\u53d1\u73b0main.m\u91cc\u7684 main \u51fd\u6570\u6709\u6240\u53d8\u5316\uff0c\u7ecf\u8fc7\u4e00\u756a\u67e5\u8be2","[1]","\uff0c\u53d1\u73b0\u662f\u4ece Xcode 11 \u5f00\u59cb\u3002"),(0,a.kt)(c,{path:"blog/autoreleasepool/autoreleasepool-1",mdxType:"ImageLoader"}),"\u800c\u5728\u6b64\u4e4b\u524d\uff0c main \u51fd\u6570\u7684\u5b9e\u73b0\u4e3a\uff1a",(0,a.kt)(c,{path:"blog/autoreleasepool/autoreleasepool-2",mdxType:"ImageLoader"}))}d.isMDXComponent=!0}}]);