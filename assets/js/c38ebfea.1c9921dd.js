"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6281],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),g=r,c=k["".concat(d,".").concat(g)]||k[g]||m[g]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1115:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:4,title:"\u6570\u636e\u91c7\u96c6API"},d=void 0,p={unversionedId:"miniprogram/commonlyApi",id:"miniprogram/commonlyApi",isDocsHomePage:!1,title:"\u6570\u636e\u91c7\u96c6API",description:"\u901a\u8fc7gioGlobal.gio\u8fd9\u4e2a\u5168\u5c40\u7684\u65b9\u6cd5\u53ef\u4ee5\u8c03\u7528\u5230SDK\u4e2d\u6240\u6709\u5f00\u653e\u7684\u63a5\u53e3\u3002",source:"@site/docs/miniprogram/commonlyApi.md",sourceDirName:"miniprogram",slug:"/miniprogram/commonlyApi",permalink:"/growingio-sdk-docs/docs/miniprogram/commonlyApi",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/miniprogram/commonlyApi.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u6570\u636e\u91c7\u96c6API"},sidebar:"gioSidebar",previous:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/miniprogram/initSettings"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/docs/miniprogram/question"}},s=[{value:"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3",id:"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3",children:[{value:"\u5f00\u542f/\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6(autotrack)",id:"\u5f00\u542f\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6autotrack",children:[]},{value:"\u5f00\u542f/\u5173\u95ed\u6570\u636e\u91c7\u96c6(dataCollect)",id:"\u5f00\u542f\u5173\u95ed\u6570\u636e\u91c7\u96c6datacollect",children:[]},{value:"\u5f00\u542f/\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0f(debug)",id:"\u5f00\u542f\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0fdebug",children:[]},{value:"\u4fee\u6539\u4e0a\u62a5\u5730\u5740(host)",id:"\u4fee\u6539\u4e0a\u62a5\u5730\u5740host",children:[]},{value:"\u4fee\u6539\u8bf7\u6c42\u534f\u8bae(scheme)",id:"\u4fee\u6539\u8bf7\u6c42\u534f\u8baescheme",children:[]}]},{value:"\u529f\u80fd\u63a5\u53e3",id:"\u529f\u80fd\u63a5\u53e3",children:[{value:"\u8bbe\u7f6e\u8bbf\u95ee\u7528\u6237id(identify)",id:"\u8bbe\u7f6e\u8bbf\u95ee\u7528\u6237ididentify",children:[]},{value:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id(setUserId)",id:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237idsetuserid",children:[]},{value:"\u6e05\u9664\u767b\u5f55\u7528\u6237id(clearUserId)",id:"\u6e05\u9664\u767b\u5f55\u7528\u6237idclearuserid",children:[]},{value:"\u81ea\u5b9a\u4e49\u57cb\u70b9(track)",id:"\u81ea\u5b9a\u4e49\u57cb\u70b9track",children:[]},{value:"\u767b\u5f55\u7528\u6237\u5c5e\u6027(setUserAttributes)",id:"\u767b\u5f55\u7528\u6237\u5c5e\u6027setuserattributes",children:[]},{value:"\u5730\u7406\u4f4d\u7f6e(getLocation)",id:"\u5730\u7406\u4f4d\u7f6egetlocation",children:[]},{value:"\u4e0eh5\u6253\u901a\u7528\u6237\u6570\u636e(getGioInfo)",id:"\u4e0eh5\u6253\u901a\u7528\u6237\u6570\u636egetgioinfo",children:[]}]},{value:"\u91c7\u96c6\u6807\u8bb0",id:"\u91c7\u96c6\u6807\u8bb0",children:[{value:"\u989d\u5916\u6570\u636e\u6807\u8bb0",id:"\u989d\u5916\u6570\u636e\u6807\u8bb0",children:[]},{value:"\u5ffd\u7565\u91c7\u96c6\u6807\u8bb0",id:"\u5ffd\u7565\u91c7\u96c6\u6807\u8bb0",children:[]}]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[{value:"navigator\u7ec4\u4ef6",id:"navigator\u7ec4\u4ef6",children:[]}]}],m={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7gioGlobal.gio\u8fd9\u4e2a\u5168\u5c40\u7684\u65b9\u6cd5\u53ef\u4ee5\u8c03\u7528\u5230SDK\u4e2d\u6240\u6709\u5f00\u653e\u7684\u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u60a8\u53ef\u5728\u9875\u9762\u5934\u90e8\u8fdb\u884c\u53d6\u503c\u5e76\u547d\u540d\u4e3agdp\u65b9\u6cd5\u3002const gdp = gioGlobal.gio;"),(0,i.kt)("h2",{id:"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3"},"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3"),(0,i.kt)("h3",{id:"\u5f00\u542f\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6autotrack"},"\u5f00\u542f/\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6(autotrack)"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"flase"))," \u65f6\uff0c\u5c06\u4e0d\u518d\u91c7\u96c6 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"VIEW_CLICK")," , ",(0,i.kt)("inlineCode",{parentName:"strong"},"VIEW_CHANGE")," , ",(0,i.kt)("inlineCode",{parentName:"strong"},"FORM_SUBMIT"))," \u65e0\u57cb\u70b9\u4e8b\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setAutotrack', true | false);\n")),(0,i.kt)("h3",{id:"\u5f00\u542f\u5173\u95ed\u6570\u636e\u91c7\u96c6datacollect"},"\u5f00\u542f/\u5173\u95ed\u6570\u636e\u91c7\u96c6(dataCollect)"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"false"))," \u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u91c7\u96c6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setDataCollect', true | false);\n")),(0,i.kt)("h3",{id:"\u5f00\u542f\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0fdebug"},"\u5f00\u542f/\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0f(debug)"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"true"))," \u65f6\uff0c \u5f00\u542f\u540e\u4f1a\u5728\u5f00\u53d1\u8005\u5de5\u5177\u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('enableDebug', true | false);\n")),(0,i.kt)("h3",{id:"\u4fee\u6539\u4e0a\u62a5\u5730\u5740host"},"\u4fee\u6539\u4e0a\u62a5\u5730\u5740(host)"),(0,i.kt)("p",null,"\u8bf7\u8bbe\u7f6e\u51c6\u786e\u7684host\u5730\u5740\uff0c\u652f\u6301 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IP"))," \u6216 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u57df\u540d"))," \u683c\u5f0f\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u65e0\u9700\u643a\u5e26\u534f\u8bae\u5934"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setTrackerHost', 'xxxxxxxx');\n")),(0,i.kt)("h3",{id:"\u4fee\u6539\u8bf7\u6c42\u534f\u8baescheme"},"\u4fee\u6539\u8bf7\u6c42\u534f\u8bae(scheme)"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e3a",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"https")),"\uff0c\u60a8\u53ef\u4ee5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u8bbe\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setTrackerScheme', 'http' | 'https');\n")),(0,i.kt)("h2",{id:"\u529f\u80fd\u63a5\u53e3"},"\u529f\u80fd\u63a5\u53e3"),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u8bbf\u95ee\u7528\u6237ididentify"},"\u8bbe\u7f6e\u8bbf\u95ee\u7528\u6237id(identify)"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u82e5\u4f7f\u7528\u6b64\u63a5\u53e3\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u5c06 forceLogin \u8bbe\u7f6e\u4e3a true\n\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/initSettings#forcelogin"},"\u8bbe\u7f6e\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f")))),(0,i.kt)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8c03\u7528",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html"},"\u767b\u5f55\u5f00\u653e\u63a5\u53e3")," ",(0,i.kt)("inlineCode",{parentName:"p"},"wx.login")," \u4e4b\u540e\uff0c\u83b7\u53d6 openId\uff0c\u8c03\u7528 identify \u8bbe\u7f6e\u8bbf\u95ee\u7528\u6237ID\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('identify', openId);\n")),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237idsetuserid"},"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id(setUserId)"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setUserId"),"\uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("p",null,"\u82e5\u60a8\u7684\u5c0f\u7a0b\u5e8f\u6bcf\u6b21\u7528\u6237\u5347\u7ea7\u7248\u672c\u65f6\u65e0\u9700\u91cd\u65b0\u767b\u5f55\u7684\u8bdd\uff0c\u4e3a\u9632\u6b62\u7528\u6237\u672c\u5730\u7f13\u5b58\u88ab\u6e05\u9664\u5bfc\u81f4\u7684\u65e0\u6cd5\u88ab\u8bc6\u522b\u4e3a\u767b\u5f55\u7528\u6237\uff0c\u5efa\u8bae\u5728\u76d1\u6d4b\u5230\u7528\u6237\u4e3a\u767b\u5f55\u7528\u6237\u540e\u91cd\u65b0\u8c03\u7528setUserId\u65b9\u6cd5\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u652f\u6301 ID-MAPPING SDK\u7248\u672c >=3.3.0\n",(0,i.kt)("strong",{parentName:"p"},"\u9700\u5728\u521d\u59cb\u5316 SDK \u65f6\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"strong"},"enableIdMapping"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"strong"},"true"))))),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string / number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string / number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff1b\u9002\u7528\u4e8e ID-MAPPING,\u53ef\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"userId")," \u7684\u7c7b\u578b\u3002")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setUserId', 'userId');\ngdp('setUserId', 'userId', 'userKey');\n")),(0,i.kt)("h3",{id:"\u6e05\u9664\u767b\u5f55\u7528\u6237idclearuserid"},"\u6e05\u9664\u767b\u5f55\u7528\u6237id(clearUserId)"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"clearUserId"),"\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('clearUserId');\n")),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u57cb\u70b9track"},"\u81ea\u5b9a\u4e49\u57cb\u70b9(track)"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\uff1b\u6ce8\u610f\uff1a\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728CDP\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027\uff1b",(0,i.kt)("br",null),"\n\u5982\u679c\u4e8b\u4ef6\u5c5e\u6027\u9700\u5173\u8054\u7ef4\u5ea6\u8868\uff0c\u8bf7\u5728\u4e8b\u4ef6\u5c5e\u6027\u4e0b\u5173\u8054\u7ef4\u5ea6\u8868\uff08 CDP\u5e73\u53f0\u7248\u672c>= 2.1 \uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('track', eventId, properties, item);\n")),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"eventId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff1b\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff08\u53ef\u9009\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff1b\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item.id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"item \u4e2d\u5fc5\u586b\uff1b\u7269\u54c1\u6a21\u578b id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item.key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"item \u4e2d\u5fc5\u586b\uff1b\u7269\u54c1\u6a21\u578b\u552f\u4e00\u6807\u8bc6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item.properties")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:null},"item \u4e2d\u9009\u586b\uff1b\u7269\u54c1\u6a21\u578b\u5c5e\u6027")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('track', 'order'); // \u65e0properties\uff0c\u65e0item\ngdp('track', 'order', { type: 'hjh' }); // \u6709properties\uff0c\u65e0item\ngdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // \u65e0properties\uff0c\u6709item\ngdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // \u6709properties\uff0c\u6709item\n")),(0,i.kt)("h3",{id:"\u767b\u5f55\u7528\u6237\u5c5e\u6027setuserattributes"},"\u767b\u5f55\u7528\u6237\u5c5e\u6027(setUserAttributes)"),(0,i.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userAttributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u767b\u5f55\u7528\u6237\u5c5e\u6027\u7684 Object \u5bf9\u8c61\u3002")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setUserAttributes', { name: 'hjh' });\n")),(0,i.kt)("h3",{id:"\u5730\u7406\u4f4d\u7f6egetlocation"},"\u5730\u7406\u4f4d\u7f6e(getLocation)"),(0,i.kt)("p",null,"\u901a\u8fc7\u624b\u52a8\u8c03\u7528\u5730\u7406\u4f4d\u7f6e\u63a5\u53e3\u6765\u8865\u53d1\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u63d0\u5347\u7528\u6237\u5730\u57df\u5206\u5e03\u7684\u5206\u6790\u51c6\u786e\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \u6ce8\u610f\uff1a\u521d\u59cb\u5316\u914d\u7f6e\u9879 location.autoGet \u6253\u5f00\u65f6\uff0c\u65e0\u9700\u8c03\u7528\u6b64\u63a5\u53e3\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('getLocation');\n// \u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u8865\u53d1\u5e26\u4f4d\u7f6e\u4fe1\u606f\u7684VISIT\u4e8b\u4ef6\n")),(0,i.kt)("h3",{id:"\u4e0eh5\u6253\u901a\u7528\u6237\u6570\u636egetgioinfo"},"\u4e0eh5\u6253\u901a\u7528\u6237\u6570\u636e(getGioInfo)"),(0,i.kt)("p",null,"\u5f53\u6709H5\u9875\u9762\u9700\u8981\u83b7\u53d6\u5c0f\u7a0b\u5e8fSDK\u91c7\u96c6\u7528\u6237\u6570\u636e\u7684\u9700\u6c42\u65f6(\u5c06H5\u9875\u9762\u91c7\u96c6\u7684\u6570\u636e\u9700\u8981\u4e0e\u5c0f\u7a0b\u5e8f\u91c7\u96c6\u7684\u6570\u636e\u505a\u5173\u8054\u5206\u6790)\uff0c\u8c03\u7528\u6b64\u63a5\u53e3\u53ef\u5c06\u83b7\u53d6\u4ee5\u4e0b\u6570\u636e\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u80fd\u83b7\u53d6\u5230\u7684\u6570\u636e\u8bf4\u660e\uff1a",(0,i.kt)("br",null),"\ngiou \u662f\u8bbf\u95ee\u7528\u6237ID",(0,i.kt)("br",null),"\ngios \u662f sessionID",(0,i.kt)("br",null),"\ngiocs1 \u662f\u767b\u5f55\u7528\u6237ID",(0,i.kt)("br",null),"\ngioid  \u662f\u4e0a\u4e00\u4e2a\u975e\u7a7a\u7684\u767b\u5f55\u7528\u6237ID\ngiouserkey \u662f\u7528\u6237KEY",(0,i.kt)("br",null),"\ngioprojectid \u662f accountId",(0,i.kt)("br",null),"\ngioappid \u662f \u5c0f\u7a0b\u5e8fappid",(0,i.kt)("br",null),"\ngioplatform \u662f\u5e94\u7528\u5e73\u53f0",(0,i.kt)("br",null),"\ngiodatasourceid \u662f datasourceId"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('getGioInfo');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \u6ce8\u610f\uff1agdp('getGioInfo')\u83b7\u53d6\u7684\u6570\u636e\u662f\u4e00\u6b21\u6027\u7684\uff0c\u975e\u52a8\u6001\u83b7\u53d6\uff0c\u5982\u679c\u5207\u6362\u7528\u6237\u5bfc\u81f4sessionId\u6216userId\u7b49\u7528\u6237\u4fe1\u606f\u53d8\u52a8\u65f6\uff0c\u9700\u8981\u60a8\u624b\u52a8\u91cd\u8bbeH5\u5730\u5740\u6765\u540c\u6b65\u4fe1\u606f\u3002\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// js\nPage({\n  data: {\n    url: `https://www.growingIO.com?${gdp('getGioInfo')}`\n  },\n  onShow() {\n    // \u6bcf\u6b21onShow\u65f6\u91cd\u8bbe\u4e00\u6b21url\u7684\u503c\uff0c\u4fdd\u8bc1getGioInfo\u62ff\u5230\u7684\u662f\u6700\u65b0\u503c\uff0c\u8bf7\u6ce8\u610f\u4e00\u5b9a\u8981\u91cd\u65b0\u76f4\u63a5\u8c03\u7528getGioInfo\n    this.setData({ url: `https://www.growingIO.com?${gdp('getGioInfo')}` }); \u2705\n    // this.setData({ url: this.data.url }); \u274c // \u8fd9\u4e48\u5199\u53c2\u6570\u4f1a\u66f4\u65b0\u4e0d\u6b63\u786e\n  },\n  // \u5982\u679c\u9875\u9762\u4e2d\u6709\u767b\u5f55\uff0c\u9700\u8981\u5728\u767b\u5f55\u4e4b\u540e\u91cd\u8bbe\u4e00\u6b21url\u7684\u503c\n  handleLogin() {\n    ...\n    // \u767b\u5f55\u5b8c\u6210\u540e\u91cd\u8bbe\u4e00\u6b21url\u7684\u503c\uff0c\u4fdd\u8bc1getGioInfo\u62ff\u5230\u7684\u662f\u6700\u65b0\u503c\uff0c\u8bf7\u6ce8\u610f\u4e00\u5b9a\u8981\u91cd\u65b0\u76f4\u63a5\u8c03\u7528getGioInfo\n    this.setData({ url: `https://www.growingIO.com?${gdp('getGioInfo')}` }); \u2705\n    // this.setData({ url: this.data.url }); \u274c // \u8fd9\u4e48\u5199\u53c2\u6570\u4f1a\u66f4\u65b0\u4e0d\u6b63\u786e\n  }\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- wxml --\x3e\n<view>\n  <web-view src="{{url}}"></web-view>\n</view>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"gdp('getGioInfo')"),"\u9ed8\u8ba4\u83b7\u53d6\u5230\u7684\u6570\u636e\u793a\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"giou=e83e8ea2-9604-4c55-882c-172925d0dc1f&gios=ea64c5a5-7163-4a1e-9887-3af9bd467c3b&giocs1=&giouserkey=&gioprojectid=pid11&gioappid=wx33&gioplatform=MinP&giodatasourceid=ds22\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u9700\u8981\u83b7\u53d6\u66f4\u591a\u7684\u5c0f\u7a0b\u5e8fSDK\u91c7\u96c6\u7684\u5b57\u6bb5\u6570\u636e\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"strong",href:"./initSettings#extraparams"},(0,i.kt)("inlineCode",{parentName:"a"},"extraParams"))),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"H5\u9875\u9762\u96c6\u6210SDK\u53c2\u8003",(0,i.kt)("a",{parentName:"strong",href:"/docs/webjs/base/getting_started#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%86%85%E5%B5%8C%E9%A1%B5%E4%BD%BF%E7%94%A8%E9%9B%86%E6%88%90"},"\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u4f7f\u7528\u96c6\u6210"))),(0,i.kt)("h2",{id:"\u91c7\u96c6\u6807\u8bb0"},"\u91c7\u96c6\u6807\u8bb0"),(0,i.kt)("h3",{id:"\u989d\u5916\u6570\u636e\u6807\u8bb0"},"\u989d\u5916\u6570\u636e\u6807\u8bb0"),(0,i.kt)("p",null,"1\u3001\u6709\u65f6SDK\u81ea\u52a8\u91c7\u96c6\u7684\u8282\u70b9\u6570\u636e\u5e76\u4e0d\u80fd\u5b8c\u5168\u6ee1\u8db3\u4e0a\u62a5\u5206\u6790\u9700\u8981\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u989d\u5916\u4fe1\u606f\u7684\u6807\u8bb0 ",(0,i.kt)("inlineCode",{parentName:"p"},"data-title")," \u6765\u8865\u5145SDK\u91c7\u96c6\u7684\u5185\u5bb9\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<view data-title="\u989d\u5916\u7684\u4e0a\u62a5\u4fe1\u606f">\u8282\u70b9</view>\n')),(0,i.kt)("p",null,"2\u3001\u6709\u65f6\u6211\u4eec\u9875\u9762\u4e2d\u53ef\u80fd\u5b58\u5728\u7c7b\u4f3c\u5217\u8868\u7c7b\u7684Dom\u7ed3\u6784\u76f8\u4f3c\u6216\u4e00\u81f4\u4f7f\u5f97SDK\u4e0a\u62a5\u6570\u636e\u51fa\u73b0\u65e0\u6cd5\u533a\u5206\u7684\u60c5\u51b5\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7d22\u5f15\u6807\u8bb0 ",(0,i.kt)("inlineCode",{parentName:"p"},"data-index")," \u6765\u51c6\u786e\u63cf\u8ff0\u8282\u70b9\u4fe1\u606f\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<view>\n  <view data-index="1">\u8282\u70b91</view>\n  <view data-index="2">\u8282\u70b92</view>\n  <view data-index="3">\u8282\u70b93</view>\n</view>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Tips\uff1a\u6211\u4eec\u5efa\u8bae\u60a8\u591a\u8bbe\u5b9a\u989d\u5916\u7684\u6570\u636e\u6807\u8bb0\u6765\u91c7\u96c6\u66f4\u591a\u7684\u6570\u636e\uff0c\u4ee5\u6b64\u83b7\u53d6\u66f4\u5168\u9762\u548c\u66f4\u51c6\u786e\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u3002"))),(0,i.kt)("p",null,"3\u3001\u6709\u65f6\u6211\u4eec\u8868\u5355\u9875\u9762\u4e2d\u53ef\u80fd\u9700\u8981\u83b7\u53d6\u7528\u6237\u9009\u62e9\u6846\u3001\u5355/\u591a\u9009\u6846\u7684\u503c\u8fdb\u884c\u4e0a\u62a5\u4ee5\u51c6\u786e\u5206\u6790\u7528\u6237\u884c\u4e3a\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6570\u503c\u91c7\u96c6\u6807\u8bb0 ",(0,i.kt)("inlineCode",{parentName:"p"},"data-growing-track")," \u6765\u83b7\u53d6\u503c\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<checkbox-group bindchange='checkboxChange' data-growing-track>\n  <label class='checkbox'>\n    <checkbox value='GrowingIO' checked='true' /> GrowingIO\n  </label>\n  <label class='checkbox'>\n    <checkbox value='Google' checked='false' /> Google Analytics\n  </label>\n</checkbox-group>\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u514d\u8d23\u58f0\u660e\u8b66\u544a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u52ff\u5c1d\u8bd5\u5728\u5bc6\u7801\u6846\u4e0a\u6807\u8bb0 data-growing-track \u91c7\u96c6\u6570\u636e\uff0c\u4f1a\u660e\u6587\u66b4\u9732\u7528\u6237\u586b\u5199\u7684\u5bc6\u7801\u4fe1\u606f\u3002GrowingIO\u4e0d\u627f\u62c5\u7531\u6b64\u76f4\u63a5\u6216\u95f4\u63a5\u4ea7\u751f\u7684\u6570\u636e\u98ce\u9669\u548c\u6cd5\u5f8b\u98ce\u9669\u3002"))),(0,i.kt)("h3",{id:"\u5ffd\u7565\u91c7\u96c6\u6807\u8bb0"},"\u5ffd\u7565\u91c7\u96c6\u6807\u8bb0"),(0,i.kt)("p",null,"\u6709\u65f6\u6211\u4eec\u4f1a\u6839\u636e\u4e1a\u52a1\u4e2d\u4e0d\u540c\u7684\u9700\u8981\u5f00\u53d1\u4e00\u4e9b\u7ec4\u4ef6\u6216\u4f7f\u7528\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7ec4\u4ef6\uff0c\u53ef\u80fd\u4f1a\u89e6\u53d1SDK\u7684 VIEW_CHANGE \u4e8b\u4ef6\uff0c\u4f46\u6211\u4eec\u5e76\u4e0d\u671f\u671b\u5b83\u53d1\u751f\u3002"),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5ffd\u7565\u91c7\u96c6\u6807\u8bb0 ",(0,i.kt)("inlineCode",{parentName:"p"},"data-growing-ignore")," \u6765\u8ba9SDK\u5ffd\u7565\u5bf9\u8be5\u7ec4\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<view data-growing-ignore>\u8981\u5ffd\u7565\u7684\u8282\u70b9</view>\n")),(0,i.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("h3",{id:"navigator\u7ec4\u4ef6"},"navigator\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u4e86navigator\u7ec4\u4ef6\uff0c\u9700\u8981\u60a8\u624b\u52a8\u7ed1\u5b9a\u4e00\u4e2a\u7a7a\u7684\u70b9\u51fb\u4e8b\u4ef6\uff0cSDK\u624d\u80fd\u5b9e\u73b0\u8df3\u8f6c\u70b9\u51fb\u7684\u91c7\u96c6\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<navigator>\n  <view bindtap="nameForThisClick">\n     ...\n  </view>\n</navigator>\n')))}k.isMDXComponent=!0}}]);