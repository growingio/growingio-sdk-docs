"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1856],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3666:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:4,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e"},l=void 0,p={unversionedId:"compliance/minpCompliance",id:"compliance/minpCompliance",isDocsHomePage:!1,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",description:"\u6536\u96c6\u7684\u6570\u636e",source:"@site/docs/compliance/minpCompliance.md",sourceDirName:"compliance",slug:"/compliance/minpCompliance",permalink:"/growingio-sdk-docs/docs/compliance/minpCompliance",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/compliance/minpCompliance.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"gioSidebar",previous:{title:"Web JS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/webCompliance"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/android/version"}},u=[{value:"\u6536\u96c6\u7684\u6570\u636e",id:"\u6536\u96c6\u7684\u6570\u636e",children:[]},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",children:[{value:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",id:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",children:[]},{value:"GDPR",id:"gdpr",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"Q\uff1adataCollect \u8bbe\u7f6e false \u4e4b\u540e\uff0c\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5",id:"qdatacollect-\u8bbe\u7f6e-false-\u4e4b\u540e\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5",children:[]}]}],d={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6536\u96c6\u7684\u6570\u636e"},"\u6536\u96c6\u7684\u6570\u636e"),(0,i.kt)("p",null,"\u6309\u7167 GDPR \u7684\u754c\u5b9a\uff0cGrowingIO \u5c5e\u4e8e\u6570\u636e\u5904\u7406\u65b9\uff0c\u8fd9\u662f\u56e0\u4e3a GrowingIO \u4f1a\u6309\u7167\u5ba2\u6237\u7684\u6307\u793a\u4ee3\u8868\u5ba2\u6237\u6536\u96c6\u548c\u5904\u7406\u6570\u636e\u3002\u6211\u4eec\u7684\u5ba2\u6237\u5219\u662f\u6570\u636e\u63a7\u5236\u65b9\uff0c\u4ed6\u4eec\u62e5\u6709\u6240\u6709\u76f8\u5173\u6743\u5229\uff0c\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u968f\u65f6\u63a7\u5236\u662f\u5426\u5f00\u542f\u6570\u636e\u6536\u96c6\u548c\u5904\u7406\u3002"),(0,i.kt)("p",null,"\u6536\u96c6\u4fe1\u606f\u662f\u4e3a\u4e86\u60a8\u7684\u7f51\u7ad9\u5411\u6240\u6709\u7528\u6237\u63d0\u4f9b\u66f4\u597d\u7684\u670d\u52a1\u3002GrowingIO \u5c0f\u7a0b\u5e8f SDK \u5c06\u4f1a\u6536\u96c6\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u76f8\u5173\u7684\u73af\u5883\u4fe1\u606f\uff0c\u5305\u62ec\u5fae\u4fe1\u7248\u672c\u53f7\uff0c\u5c0f\u7a0b\u5e8f\u573a\u666f\u503c\uff0c\u8bbe\u5907\u4fe1\u606f\uff0c\u7f51\u7edc\u4fe1\u606f\u3002\u4f7f\u7528 localstorage \u6765\u5b58\u50a8 SDK \u81ea\u52a8\u751f\u6210\u7684\u8bbf\u95ee\u7528\u6237ID\u3002\u91c7\u96c6\u7684\u7528\u6237\u4fe1\u606f\u90fd\u662f\u5ba2\u6237\u5c0f\u7a0b\u5e8f\u9700\u8981\u8bf7\u6c42\u7528\u6237\u6388\u6743\u7684\uff0c\u8b6c\u5982\uff1a openid\uff0c\u5fae\u4fe1\u5934\u50cf\uff0c\u6635\u79f0\uff0c\u5b9a\u4f4d\u3002"),(0,i.kt)("h2",{id:"\u5408\u89c4\u6b65\u9aa4"},"\u5408\u89c4\u6b65\u9aa4"),(0,i.kt)("h3",{id:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"},"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7528\u6237\u9690\u79c1\u4fdd\u62a4")),(0,i.kt)("h3",{id:"gdpr"},"GDPR"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84"},"\u200bGeneral Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"),"\u200b"),(0,i.kt)("p",null,"GrowingIO \u4f5c\u4e3a\u6570\u636e\u5904\u7406\u65b9\uff0c\u4e3a\u7b26\u5408 GDPR\uff0c\u5c0f\u7a0b\u5e8f SDK \u63d0\u4f9b\u8bbe\u7f6e\u63a5\u53e3\uff0c\u53ef\u5728\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\u65f6\uff0c\u521d\u59cb\u5316\u65f6\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"dataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," \uff0c\u7981\u6b62\u6570\u636e\u91c7\u96c6\u3002",(0,i.kt)("br",null),"\u5728\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setDataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n  host: 'your apiServerHost', \n  version: '1.0.0',\n  dataCollect: false,\n  debug: true  // \u6253\u5f00debug\u8c03\u8bd5\u80fd\u529b\n});\n\n\n// \u5982\u679c\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\uff0c\u5f39\u51fa\u9690\u79c1\u534f\u8bae\u5f39\u6846\uff0c\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u8bbe\u7f6e\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\ngdp('setDataCollect', true);\n\n// \u5982\u679c\u540c\u610f\u9690\u79c1\u534f\u8bae\uff0c\u8bbe\u7f6e\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\u53ef\u5199\u5728 app.js \u7684 onshow \u65b9\u6cd5\u4e2d\ngdp('setDataCollect', true);\n")),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"qdatacollect-\u8bbe\u7f6e-false-\u4e4b\u540e\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5"},"Q\uff1adataCollect \u8bbe\u7f6e false \u4e4b\u540e\uff0c\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5"),(0,i.kt)("p",null,"A\uff1aSDK\u5173\u95ed\u6570\u636e\u91c7\u96c6 dataCollect \u8bbe\u7f6e false \u65f6\uff0c\u6240\u6709\u4e8b\u4ef6\u90fd\u4e0d\u91c7\u96c6\u3002\u53ea\u6709\u5f00\u542f\u4e86\u6570\u636e\u91c7\u96c6 dataCollect \u4e3a ture \u65f6\uff0c\u4e8b\u4ef6\u6570\u636e\u624d\u4f1a\u91c7\u96c6\u4e0a\u62a5"))}s.isMDXComponent=!0}}]);