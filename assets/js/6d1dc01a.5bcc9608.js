"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5598],{3905:(t,e,r)=>{r.d(e,{Zo:()=>k,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},k=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),c=m(r),N=a,g=c["".concat(p,".").concat(N)]||c[N]||o[N]||i;return r?n.createElement(g,l(l({ref:e},k),{},{components:r})):n.createElement(g,l({ref:e},k))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[c]="string"==typeof t?t:a,l[1]=d;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}N.displayName="MDXCreateElement"},7506:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={id:"home",sidebar_position:1,title:"SDK \u7b80\u4ecb",slug:"/"},l=void 0,d={unversionedId:"home",id:"home",title:"SDK \u7b80\u4ecb",description:"\u4ea7\u54c1\u6982\u8ff0",source:"@site/docs/SDK OVERVIEW.md",sourceDirName:".",slug:"/",permalink:"/growingio-sdk-docs/docs/",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/SDK OVERVIEW.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"home",sidebar_position:1,title:"SDK \u7b80\u4ecb",slug:"/"},sidebar:"docSidebar",next:{title:"Android SDK",permalink:"/growingio-sdk-docs/docs/android"}},p={},m=[{value:"\u4ea7\u54c1\u6982\u8ff0",id:"\u4ea7\u54c1\u6982\u8ff0",level:3},{value:"SDK \u652f\u6301\u8303\u56f4",id:"sdk-\u652f\u6301\u8303\u56f4",level:3},{value:"SDK\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b",id:"sdk\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b",level:3},{value:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9",id:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9",level:3},{value:"\u4f7f\u7528\u6d41\u7a0b",id:"\u4f7f\u7528\u6d41\u7a0b",level:3},{value:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e SDK \u7248\u672c\u5bf9\u5e94\u5173\u7cfb",id:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e-sdk-\u7248\u672c\u5bf9\u5e94\u5173\u7cfb",level:3}],k={toc:m},c="wrapper";function o(t){let{components:e,...i}=t;return(0,a.kt)(c,(0,n.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4ea7\u54c1\u6982\u8ff0"},"\u4ea7\u54c1\u6982\u8ff0"),(0,a.kt)("p",null,"\u7ba1\u7406\u5b66\u5927\u5e08\u5f7c\u5f97\xb7\u5fb7\u9c81\u514b\u8bf4\u8fc7\uff1a\u201c\u5982\u679c\u4f60\u65e0\u6cd5\u5ea6\u91cf\u5b83\uff0c\u90a3\u4e48\u4f60\u4e5f\u4e0d\u80fd\u6709\u6548\u589e\u957f\u3002\u201d\u5ea6\u91cf\u7684\u76ee\u6807\u662f\u4e3a\u4e86\u6539\u8fdb\uff0c\u5c24\u5176\u662f\u73b0\u5728\u7684\u6570\u636e\u5316\u65f6\u4ee3\uff0c\u4e1a\u52a1\u589e\u957f\u7684\u524d\u63d0\u662f\u6709\u4e00\u5957\u53ef\u8861\u91cf\u7684\u6570\u636e\u5206\u6790\u4f53\u7cfb\u3002\u6240\u6709\u7684\u6570\u636e\u5206\u6790\uff0c\u6700\u7ec8\u90fd\u662f\u4e3a\u5546\u4e1a\u670d\u52a1\u3002\u4e00\u4e2a\u5206\u6790\u7684\u6574\u4e2a\u6d41\u7a0b\uff0c\u5305\u542b\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6570\u636e\u8f6c\u5316\u3001\u6570\u636e\u5b58\u50a8\u3001\u5546\u4e1a\u667a\u80fd\u3001\u5546\u4e1a\u6d1e\u5bdf\u548c\u5546\u4e1a\u51b3\u7b56\u8fd9\u4e9b\u9636\u6bb5\u3002\u7136\u800c\uff0c\u4f7f\u7528\u4f20\u7edf\u7684\u5206\u6790\u5de5\u5177\u548c\u65b9\u6cd5\uff0c\u6211\u4eec\u5f80\u5f80\u4f1a\u82b1\u8d39\u8d85\u8fc7 80% \u7684\u65f6\u95f4\u5728\u6700\u524d\u9762\u7684\u6570\u636e\u91c7\u96c6\u3001\u6e05\u6d17\u3001\u8f6c\u5316\u548c\u5b58\u50a8\u4e0a\uff0c\u800c\u771f\u6b63\u80fd\u5e26\u6765\u5de8\u5927\u5546\u4e1a\u4ef7\u503c\u7684\u5546\u4e1a\u6d1e\u5bdf\u548c\u51b3\u7b56\u7f3a\u53ea\u6709\u4e0d\u5230 20% \u7684\u65f6\u95f4\uff0c\u6574\u4e2a\u6295\u5165\u4ea7\u51fa\u6bd4\u5b8c\u5168\u5012\u7f6e\u3002\u5982\u4f55\u80fd\u82b1\u8d39\u5c3d\u53ef\u80fd\u5c11\u7684\u65f6\u95f4\uff0c\u53c8\u80fd\u5f97\u5230\u4f18\u8d28\u5168\u9762\u7684\u6570\u636e\uff0c\u662f\u6211\u4eec\u5fc5\u987b\u8981\u53bb\u9762\u5bf9\u548c\u89e3\u51b3\u7684\u95ee\u9898\u3002GrowingIO \u5c31\u662f\u6211\u4eec\u7ed9\u51fa\u7684\u7b54\u6848\u3002"),(0,a.kt)("center",null,(0,a.kt)("img",{src:r(7397).Z,alt:"SDK Banner"})),(0,a.kt)("p",null,"GrowingIO \u662f\u6211\u4eec\u4e8e 2015 \u5e74\u53d1\u5e03\u7684\u65b0\u4e00\u4ee3\u6570\u636e\u5206\u6790\u4ea7\u54c1\uff0c\u65e0\u9700\u57cb\u70b9\u5373\u53ef\u91c7\u96c6\u5168\u91cf\u5b9e\u65f6\u7528\u6237\u884c\u4e3a\u6570\u636e\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u3001\u8fc5\u901f\u548c\u89c4\u6a21\u5316\u7684\u4ea7\u54c1\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u5efa\u7acb\u4e1a\u52a1\u6570\u636e\u5206\u6790\u4f53\u7cfb\uff0c\u8ba9\u4f01\u4e1a\u91cc\u9762\u7684\u6bcf\u4e2a\u4eba\u90fd\u80fd\u7528\u6570\u636e\u53bb\u9a71\u52a8\u4e1a\u52a1\u589e\u957f\u3002\u5343\u91cc\u4e4b\u884c\uff0c\u59cb\u4e8e\u8db3\u4e0b\uff0c\u6570\u636e\u91c7\u96c6\u662f\u6570\u636e\u5206\u6790\u7684\u57fa\u7840\u548c\u5165\u53e3\u3002\u76ee\u524d\u5728\u6570\u636e\u91c7\u96c6\u65b9\u9762\uff0cGrowingIO \u4e0d\u4ec5\u63d0\u4f9b\u4e86\u65e0\u57cb\u70b9\u7684\u8f7b\u91cf\u7ea7\u5ba2\u6237\u7aef JavaScript\u3001iOS \u548c Android SDK\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u6253\u70b9\u7684\u670d\u52a1\u7aef Java\u3001Python\u3001Ruby\u3001Node \u7b49\u8bed\u8a00 SDK\uff0c\u65b9\u4fbf\u4e0e\u4f01\u4e1a\u5185\u90e8\u6570\u636e\u6253\u901a\u3002"),(0,a.kt)("h3",{id:"sdk-\u652f\u6301\u8303\u56f4"},"SDK \u652f\u6301\u8303\u56f4"),(0,a.kt)("p",null,"SDK \u5305\u62ec\u5ba2\u6237\u7aef SDK \u548c\u670d\u52a1\u7aef SDK\u3002\u76ee\u524d\u5ba2\u6237\u7aef SDK \u652f\u6301 Android \u548c iOS \u539f\u751f\uff0cWeb JS\uff0c\u5c0f\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u4f17\u591a\u7b2c\u4e09\u65b9\u6df7\u5408\u5f00\u53d1\u6846\u67b6\u3002\u670d\u52a1\u7aef SDK \u652f\u6301 Java\u3001PHP\u3001Python\u3002"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3001\u6296\u97f3\u5c0f\u7a0b\u5e8f\u3001QQ \u5c0f\u7a0b\u5e8f\u3001\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u5feb\u624b\u5c0f\u7a0b\u5e8f\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3001\u5feb\u5e94\u7528\u3002"),(0,a.kt)("h3",{id:"sdk\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b"},"SDK\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"SDK"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bbf\u95ee"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u9875\u9762\u6d4f\u89c8"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5143\u7d20\u70b9\u51fb"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5143\u7d20\u53d8\u66f4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7528\u6237\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u6fc0\u6d3b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5524\u9192"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5e94\u7528\u5173\u95ed"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Android \u65e0\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Android \u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"iOS \u65e0\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"iOS \u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Web JS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5c0f\u7a0b\u5e8f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"HarmonyOS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"React Native"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Flutter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u4e8b\u4ef6\u7c7b\u578b\u8bf4\u660e\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/knowledge/basicknowledge/eventModel"},(0,a.kt)("strong",{parentName:"a"},"\u4e8b\u4ef6\u6a21\u578b"))," ",(0,a.kt)("br",null))),(0,a.kt)("h3",{id:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9"},"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6846\u67b6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"SDK \u7c7b\u522b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"App \u9002\u914d\u7684\u7cfb\u7edf\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u6846\u67b6\u7248\u672c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u539f\u751f Android"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u539f\u751f iOS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"iOS 10+"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HarmonyOS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"HarmonyOS 3.1.0+"),(0,a.kt)("td",{parentName:"tr",align:"center"},"API 9+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Flutter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u79fb\u52a8\u7aef\u7cfb\u7edf\u540c\u4e0a"),(0,a.kt)("td",{parentName:"tr",align:"center"},"dart>=2.14.0 sdk>=2.10.5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"React Native"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u79fb\u52a8\u7aef\u7cfb\u7edf\u540c\u4e0a"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.46-0.56\u30010.59.9")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8d2d\u4e70\u4ea7\u54c1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"AccountId")," , ",(0,a.kt)("inlineCode",{parentName:"li"},"UrlScheme")," , ",(0,a.kt)("inlineCode",{parentName:"li"},"ServerHost")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"DataSourceId"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u96c6\u6210SDK\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u6821\u9a8c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ea7\u54c1\u4e0a\u7ebf\uff0c\u5f00\u59cb\u5206\u6790\u3002")),(0,a.kt)("admonition",{title:"\u5173\u4e8e CDP \u4ea7\u54c1",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GrowingIO CDP \u4ea7\u54c1\u662f\u96c6",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u6570\u636e\u5206\u6790\u548c\u5ba2\u6237\u7aef\u81ea\u52a8\u57cb\u70b9\u4e00\u4f53\u5316"),"\u7684\u4ea7\u54c1\u670d\u52a1\u3002")),(0,a.kt)("h3",{id:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e-sdk-\u7248\u672c\u5bf9\u5e94\u5173\u7cfb"},"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e SDK \u7248\u672c\u5bf9\u5e94\u5173\u7cfb"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5e73\u53f0\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:"center"},"SDK \u7248\u672c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OP-13.6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},">=3.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OP-14.3.0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5168\u91cf context \u5b57\u6bb5\u4f20\u8f93,\u670d\u52a1\u7aef\u901a\u7528\u7ef4\u5ea6\u62c6\u89e3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3.2.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OP-2.0.0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301 user_key,IDMapping"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3.3.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OP-2.6.0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u57cb\u70b9\u4e8b\u4ef6\u5c5e\u6027\u503c\u3001\u7528\u6237\u53d8\u91cf\u5c5e\u6027\u503c\u53ef\u4f20\u6570\u7ec4\u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Android SDK 3.3.6",(0,a.kt)("br",null),"iOS SDK 3.3.6",(0,a.kt)("br",null),"Web JS SDK 3.3.10",(0,a.kt)("br",null),"\u5c0f\u7a0b\u5e8f SDK 3.3.5",(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OP-2.7.0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u670d\u52a1\u7aef SDK \u57cb\u70b9\u4e8b\u4ef6\u53ef\u4f20 eventTime \u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Java SDK v1.0.11-cdp",(0,a.kt)("br",null)," PHP SDK v1.0.2",(0,a.kt)("br",null)," Python SDK v1.0.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"New SaaS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},">=4.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OP-4.2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,a.kt)("td",{parentName:"tr",align:"center"},">=4.0.0")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u91c7\u96c6\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u529f\u80fd\u4ea7\u54c1\u9700\u8981\u5347\u7ea7\u5230 14.3.0 \u4e4b\u540e\uff0c Android SDK 3.3.0 \u4e4b\u540e\uff0c iOS SDK 3.3.0 \u4e4b\u540e")))}o.isMDXComponent=!0},7397:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/conversion-d17d68690eabc8f4a64d305e069330df.gif"}}]);