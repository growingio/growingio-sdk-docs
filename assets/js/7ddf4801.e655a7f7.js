"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),g=i,b=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return t?n.createElement(b,a(a({ref:r},d),{},{components:t})):n.createElement(b,a({ref:r},d))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1576:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,title:"App\u5185\u5d4c\u9875\u6253\u901a"},a=void 0,p={unversionedId:"webjs/plugins/hybridAdapter",id:"webjs/plugins/hybridAdapter",title:"App\u5185\u5d4c\u9875\u6253\u901a",description:"\u7b80\u4ecb\uff08gioHybridAdapter\uff09",source:"@site/docs/webjs/plugins/hybridAdapter.md",sourceDirName:"webjs/plugins",slug:"/webjs/plugins/hybridAdapter",permalink:"/growingio-sdk-docs/docs/webjs/plugins/hybridAdapter",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/plugins/hybridAdapter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"App\u5185\u5d4c\u9875\u6253\u901a"},sidebar:"docSidebar",previous:{title:"\u65e0\u57cb\u70b9",permalink:"/growingio-sdk-docs/docs/webjs/plugins/eventAutoTracking"},next:{title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8",permalink:"/growingio-sdk-docs/docs/webjs/plugins/impressionTracking"}},s={},l=[{value:"\u7b80\u4ecb\uff08gioHybridAdapter\uff09",id:"\u7b80\u4ecbgiohybridadapter",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"CDN\u96c6\u6210\u5f15\u5165",id:"cdn\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3}],d={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u4ecbgiohybridadapter"},"\u7b80\u4ecb\uff08gioHybridAdapter\uff09"),(0,i.kt)("p",null,"\u5f53\u60a8\u7684web\u9875\u9762\u4f5c\u4e3aApp\u5185\u5d4c\u9875\u4f7f\u7528\uff0c\u5c06\u91c7\u96c6\u4fe1\u606f\u5408\u5e76\u81f3Native\u9879\u76ee\u5206\u6790\u65f6\u4f7f\u7528\uff1b\u4e14\u5f53\u6709\u5708\u9009\u9700\u6c42\u65f6\uff0c\u81ea\u52a8\u5904\u7406\u5708\u9009\u903b\u8f91\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u96c6\u6210\u8be5\u63d2\u4ef6\u540e\uff0cSDK\u4f1a\u81ea\u52a8\u5c06web\u9875\u9762\u91c7\u96c6\u7684\u6570\u636e\u8f6c\u53d1\u7ed9Native\u7aef\u8fdb\u884c\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,i.kt)("p",null,"\u5168\u91cf\u96c6\u6210SDK\u65f6\u65e0\u9700\u518d\u6b21\u96c6\u6210\u6b64\u63d2\u4ef6\u3002"),(0,i.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,i.kt)("h4",{id:"cdn\u96c6\u6210\u5f15\u5165"},"CDN\u96c6\u6210\u5f15\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioHybridAdapter.js"><\/script>\n')),(0,i.kt)("h4",{id:"npm\u96c6\u6210\u5f15\u5165"},"npm\u96c6\u6210\u5f15\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import gioHybridAdapter from "gio-webjs-sdk/plugins/gioHybridAdapter"\n')),(0,i.kt)("h3",{id:"2\u6ce8\u518c"},"2\u3001\u6ce8\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [gioHybridAdapter]);\ngdp('init', xxxx);\n")))}u.isMDXComponent=!0}}]);