"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5014],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(r),m=o,f=g["".concat(u,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},698:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={slug:"JS Error",title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",author:"Shen Xiaowei",author_title:"GrowingIO SDK Team",author_url:"https://github.com/Anoiing",author_image_url:"https://avatars.githubusercontent.com/u/23634208?v=4",tags:["JS\uff0c Error\uff0cCatch"]},u=void 0,l={permalink:"/growingio-sdk-docs/blog/JS Error",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2021-11-18-js error catch.md",source:"@site/blog/2021-11-18-js error catch.md",title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",description:"\u4f17\u6240\u5468\u77e5\uff0c\u51e0\u4e4e\u6ca1\u6709\u4e00\u4e2a\u5f00\u53d1\u8005\u80fd\u591f\u505a\u5230\u5f00\u53d1\u65f6100%\u6ca1\u6709Bug\uff0c\u90a3\u4e48\u4e00\u65e6\u6211\u4eec\u7684\u4ea7\u54c1\u51fa\u4e86\u95ee\u9898\uff0c\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u662f\u8feb\u5207\u9700\u8981\u505a\u7684\u4e8b\u3002\u597d\u5728\u6211\u4eec\u5728Web\u573a\u666f\u4e2dJs\u8fd0\u884c\u51fa\u73b0\u5f02\u5e38\u4e0d\u4f1a\u5bfc\u81f4JS\u5f15\u64ce\u5d29\u6e83\uff0c\u6700\u591a\u53ea\u4f1a\u7ec8\u6b62\u5f53\u524d\u6267\u884c\u7684\u4efb\u52a1\u3002\u7136\u540e\u9010\u7ea7\u4e0a\u629b\u9519\u8bef\uff0c\u7c7b\u4f3c\u5192\u6ce1\u4e8b\u4ef6\uff0c\u5728\u9047\u5230\u6700\u8fd1\u7684\u4e00\u5c42catch\u65f6\u505c\u6b62\u4e0a\u629b\uff0c\u5982\u679c\u4e2d\u95f4\u90fd\u6ca1\u6709\u9519\u8bef\u5904\u7406\u7684catch\u65f6\uff0c\u76f4\u81f3window\u5bf9\u8c61\u7ed3\u675f\u3002\u90a3\u4e48\u4eca\u5929\u5c31\u4e0e\u5927\u5bb6\u4e00\u8d77\u63a2\u8ba8\u4e00\u4e0b\u6211\u4eec\u5728Web\u573a\u666f\u4e2d\u7684\u5f02\u5e38\u9519\u8bef\u6570\u636e\u5982\u4f55\u6536\u96c6\u4ee5\u53ca\u5982\u4f55\u4e0a\u62a5\u3002",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"JS\uff0c Error\uff0cCatch",permalink:"/growingio-sdk-docs/blog/tags/js\uff0c-error\uff0c-catch"}],readingTime:10.155,truncated:!0,authors:[{name:"Shen Xiaowei",title:"GrowingIO SDK Team",url:"https://github.com/Anoiing",imageURL:"https://avatars.githubusercontent.com/u/23634208?v=4"}],frontMatter:{slug:"JS Error",title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",author:"Shen Xiaowei",author_title:"GrowingIO SDK Team",author_url:"https://github.com/Anoiing",author_image_url:"https://avatars.githubusercontent.com/u/23634208?v=4",tags:["JS\uff0c Error\uff0cCatch"]},prevItem:{title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",permalink:"/growingio-sdk-docs/blog/AutoreleasePool"},nextItem:{title:"MavenCentral \u8fc1\u79fb\u6b65\u9aa4",permalink:"/growingio-sdk-docs/blog/MavenCentral"}},s={authorsImageUrls:[void 0]},p=[],g={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u51e0\u4e4e\u6ca1\u6709\u4e00\u4e2a\u5f00\u53d1\u8005\u80fd\u591f\u505a\u5230\u5f00\u53d1\u65f6100%\u6ca1\u6709Bug\uff0c\u90a3\u4e48\u4e00\u65e6\u6211\u4eec\u7684\u4ea7\u54c1\u51fa\u4e86\u95ee\u9898\uff0c\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u662f\u8feb\u5207\u9700\u8981\u505a\u7684\u4e8b\u3002\u597d\u5728\u6211\u4eec\u5728Web\u573a\u666f\u4e2dJs\u8fd0\u884c\u51fa\u73b0\u5f02\u5e38\u4e0d\u4f1a\u5bfc\u81f4JS\u5f15\u64ce\u5d29\u6e83\uff0c\u6700\u591a\u53ea\u4f1a\u7ec8\u6b62\u5f53\u524d\u6267\u884c\u7684\u4efb\u52a1\u3002\u7136\u540e\u9010\u7ea7\u4e0a\u629b\u9519\u8bef\uff0c\u7c7b\u4f3c\u5192\u6ce1\u4e8b\u4ef6\uff0c\u5728\u9047\u5230\u6700\u8fd1\u7684\u4e00\u5c42catch\u65f6\u505c\u6b62\u4e0a\u629b\uff0c\u5982\u679c\u4e2d\u95f4\u90fd\u6ca1\u6709\u9519\u8bef\u5904\u7406\u7684catch\u65f6\uff0c\u76f4\u81f3window\u5bf9\u8c61\u7ed3\u675f\u3002\u90a3\u4e48\u4eca\u5929\u5c31\u4e0e\u5927\u5bb6\u4e00\u8d77\u63a2\u8ba8\u4e00\u4e0b\u6211\u4eec\u5728Web\u573a\u666f\u4e2d\u7684\u5f02\u5e38\u9519\u8bef\u6570\u636e\u5982\u4f55\u6536\u96c6\u4ee5\u53ca\u5982\u4f55\u4e0a\u62a5\u3002"))}m.isMDXComponent=!0}}]);