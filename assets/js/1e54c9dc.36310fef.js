"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[897],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(o),m=n,f=g["".concat(u,".").concat(m)]||g[m]||p[m]||a;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2594:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={slug:"AutoreleasePool",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",author:"YoloMao",author_title:"GrowingIO SDK Team",author_url:"https://github.com/YoloMao",author_image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",tags:["iOS","AutoreleasePool","\u7f16\u8bd1\u5668\u4f18\u5316"]},u=void 0,s={permalink:"/growingio-sdk-docs/blog/AutoreleasePool",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2022-02-22-autoreleasePool.md",source:"@site/blog/2022-02-22-autoreleasePool.md",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",description:"main.m \u4e2d\u7684 AutoreleasePool",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"iOS",permalink:"/growingio-sdk-docs/blog/tags/i-os"},{label:"AutoreleasePool",permalink:"/growingio-sdk-docs/blog/tags/autorelease-pool"},{label:"\u7f16\u8bd1\u5668\u4f18\u5316",permalink:"/growingio-sdk-docs/blog/tags/\u7f16\u8bd1\u5668\u4f18\u5316"}],readingTime:11.88,truncated:!0,authors:[{name:"YoloMao",title:"GrowingIO SDK Team",url:"https://github.com/YoloMao",imageURL:"https://avatars.githubusercontent.com/u/16042670?v=4"}],frontMatter:{slug:"AutoreleasePool",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",author:"YoloMao",author_title:"GrowingIO SDK Team",author_url:"https://github.com/YoloMao",author_image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",tags:["iOS","AutoreleasePool","\u7f16\u8bd1\u5668\u4f18\u5316"]},nextItem:{title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",permalink:"/growingio-sdk-docs/blog/JS Error"}},c={authorsImageUrls:[void 0]},p=[],g={toc:p};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"main.m \u4e2d\u7684 AutoreleasePool\n\u67d0\u6b21\u5076\u7136\u53d1\u73b0main.m\u91cc\u7684 main \u51fd\u6570\u6709\u6240\u53d8\u5316\uff0c\u7ecf\u8fc7\u4e00\u756a\u67e5\u8be2","[1]","\uff0c\u53d1\u73b0\u662f\u4ece Xcode 11 \u5f00\u59cb\u3002\n",(0,a.kt)("img",{loading:"lazy",alt:"autoreleasepool",src:o(287).Z,width:"1496",height:"660"}),"\n\u800c\u5728\u6b64\u4e4b\u524d\uff0c main \u51fd\u6570\u7684\u5b9e\u73b0\u4e3a\uff1a\n",(0,a.kt)("img",{loading:"lazy",alt:"autoreleasepool",src:o(6730).Z,width:"1818",height:"552"})))}m.isMDXComponent=!0},287:function(e,t,o){t.Z=o.p+"assets/images/autoreleasepool-1-4df69502f794f02d20d13565f6bf4099.png"},6730:function(e,t,o){t.Z=o.p+"assets/images/autoreleasepool-2-c84f7fd1cb36f2bd78f08b5e5a929b92.png"}}]);