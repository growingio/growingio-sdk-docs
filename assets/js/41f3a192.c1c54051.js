"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9838],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,s=u["".concat(p,".").concat(g)]||u[g]||k[g]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3,title:"\u521d\u59cb\u5316\u914d\u7f6e"},p=void 0,d={unversionedId:"miniprogram/3.3/initSettings",id:"miniprogram/3.3/initSettings",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"\u914d\u7f6e\u4e00\u89c8\u8868",source:"@site/docs/miniprogram/3.3/initSettings.md",sourceDirName:"miniprogram/3.3",slug:"/miniprogram/3.3/initSettings",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/initSettings",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.3/initSettings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"gioSidebar",previous:{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/integration/alipay"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/commonlyApi"}},m={},k=[{value:"\u914d\u7f6e\u4e00\u89c8\u8868",id:"\u914d\u7f6e\u4e00\u89c8\u8868",level:2},{value:"\u914d\u7f6e\u9879\u8be6\u89e3",id:"\u914d\u7f6e\u9879\u8be6\u89e3",level:2},{value:"autotrack",id:"autotrack",level:3},{value:"compress",id:"compress",level:3},{value:"dataCollect",id:"datacollect",level:3},{value:"debug",id:"debug",level:3},{value:"enableEventStore",id:"enableeventstore",level:3},{value:"enableIdMapping",id:"enableidmapping",level:3},{value:"extraParams",id:"extraparams",level:3},{value:"followShare",id:"followshare",level:3},{value:"forceLogin",id:"forcelogin",level:3},{value:"getLocation",id:"getlocation",level:3},{value:"ignoreFields",id:"ignorefields",level:3}],u={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u914d\u7f6e\u4e00\u89c8\u8868"},"\u914d\u7f6e\u4e00\u89c8\u8868"),(0,l.kt)("p",null,"\u4e0b\u8868\u4e2d\u5217\u51fa\u4e86\u6240\u6709\u5c0f\u7a0b\u5e8fSDK\u7684\u914d\u7f6e\u9879\uff0c\u8bf7\u6309\u9700\u8bbe\u7f6e\u3002\u5982\u60a8\u4e0d\u786e\u5b9a\u662f\u5426\u9700\u8981\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b57\u6bb5\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570\u7c7b\u578b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autotrack")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u65e0\u57cb\u70b9\u91c7\u96c6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"comAsPage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06 Component \u7ec4\u4ef6 \u5f53\u505a Page \u5904\u7406")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"compress")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6570\u636e\u52a0\u5bc6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataCollect")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u6570\u636e\u91c7\u96c6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debug")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableEventStore")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u4e8b\u4ef6\u5b58\u50a8;\u82e5\u4f7f\u7528\u6709GIO\u8fd0\u8425SDK\u9700\u8bbe\u7f6e\u4e3a true(SDK\u7248\u672c>=3.3.2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableIdMapping")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5(>= 3.3.0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extraParams")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0eH5\u6570\u636e\u6253\u901a\u65f6\u989d\u5916\u83b7\u53d6\u7684\u5b57\u6bb5(>= 3.3.0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"followShare")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8ddf\u8e2a\u5206\u4eab\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"forceLogin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f\uff1b\u8bbe\u7f6e\u4e3atrue\u65f6\u9700\u4e0e\u63a5\u53e3identify\u4e00\u8d77\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getLocation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u4f4d\u7f6e\u914d\u7f6e\u9879")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getLocation.autoGet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u83b7\u53d6\u7528\u6237\u4f4d\u7f6e\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getLocation.type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wgs84/gcj02")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wgs84")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5750\u6807\u7cfb\u7c7b\u578b\u3002wgs84\uff1a\u6807\u51c6\u5750\u6807\u7cfb\uff1bgcj02\uff1a\u706b\u661f\u5750\u6807\u7cfb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u7aef\u5730\u5740(\u65e0\u9700\u643a\u5e26\u534f\u8bae\u5934)",(0,l.kt)("strong",{parentName:"td"},"(\u5fc5\u586b)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ignoreFields")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u62a5\u5ffd\u7565\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"taro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Taro \u5f00\u53d1\u65f6\u4f7f\u7528\u7684\u5b9e\u4f8b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u5e94\u7528\u7248\u672c(\u5efa\u8bae\u586b\u5199)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 uni-app/mpvue/WePY \u5f00\u53d1\u65f6\u4f7f\u7528\u7684\u5b9e\u4f8b")))),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879\u8be6\u89e3"},"\u914d\u7f6e\u9879\u8be6\u89e3"),(0,l.kt)("h3",{id:"autotrack"},"autotrack"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5f00\u542f\u65e0\u57cb\u70b9\u91c7\u96c6\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u65e0\u57cb\u70b9\u91c7\u96c6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"autotrack: false")," \u8fdb\u884c\u5173\u95ed\u3002"),(0,l.kt)("p",null,"\u5173\u95ed\u65e0\u57cb\u70b9\u540e ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"VIEW_CLICK")," , ",(0,l.kt)("inlineCode",{parentName:"strong"},"VIEW_CHANGE")," , ",(0,l.kt)("inlineCode",{parentName:"strong"},"FORM_SUBMIT"))," \u4e8b\u4ef6\u5c06\u4e0d\u4f1a\u518d\u88ab\u91c7\u96c6\u548c\u4e0a\u62a5\u3002"),(0,l.kt)("h3",{id:"compress"},"compress"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5173\u95ed\u6570\u636e\u52a0\u5bc6\uff0c\u5982\u679c\u60a8\u8ba4\u4e3a\u4e0d\u8db3\u591f\u5b89\u5168\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"compress: true")," \u6253\u5f00\u6570\u636e\u52a0\u5bc6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u5f00\u542f\u52a0\u5bc6\u540e\u6293\u5305\u5de5\u5177\u65e0\u6cd5\u6293\u53d6\u4e0a\u62a5\u7684\u660e\u6587\u6570\u636e\uff0c\u4f46debug\u6a21\u5f0f\u5f00\u542f\u65f6\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u4ecd\u80fd\u770b\u5230\u672a\u52a0\u5bc6\u7684\u4e0a\u62a5\u6570\u636e\u3002")),(0,l.kt)("h3",{id:"datacollect"},"dataCollect"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\u5982\u679c\u60a8\u9700\u8981\u521d\u59cb\u5316\u65f6\u6682\u65f6\u5173\u95ed\u6570\u636e\u91c7\u96c6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"dataCollect: false")," \u5173\u95ed\u3002 \u521d\u59cb\u5316\u5173\u95ed\u6570\u636e\u91c7\u96c6\u540e\uff0c\u81f3\u60a8\u6253\u5f00\u6570\u636e\u91c7\u96c6\u4e4b\u524d\u90fd\u4e0d\u4f1a\u91c7\u96c6\u6570\u636e\u548c\u4e0a\u62a5\u3002"),(0,l.kt)("h3",{id:"debug"},"debug"),(0,l.kt)("p",null,"\u5728\u5f00\u53d1\u65f6\u8bbe\u7f6e debug: true\uff0c\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177\u63a7\u5236\u53f0\uff0c\u5373\u53ef\u770b\u5230\u5b9e\u65f6\u91c7\u96c6\u7684\u6570\u636e\u3002\u6ce8\u610f\u6b63\u5f0f\u4e0a\u7ebf\u65f6\u5173\u95ed\u5b83\uff0c\u5c24\u5176\u662f\u5f00\u542f\u4e86\u6570\u636e\u52a0\u5bc6\u65f6\u3002"),(0,l.kt)("h3",{id:"enableeventstore"},"enableEventStore"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5173\u95ed\u4e8b\u4ef6\u5b58\u50a8\u529f\u80fd\u3002\u6b64\u529f\u80fd\u5728\u5c0f\u7a0b\u5e8fstorage\u4e2d\u5b58\u50a8SDK\u5df2\u4e0a\u62a5\u7684\u4e8b\u4ef6\u6570\u636e\uff0c\u7528\u4e8e\u8fd0\u8425SDK\u6d88\u8d39\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u9694\u5929\u6e05\u7a7a"),"\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u4e0d\u4f7f\u7528\u8fd0\u8425SDK\u53ef\u5ffd\u7565\u6b64\u914d\u7f6e\uff1b\u5982\u679c\u60a8\u4f7f\u7528\u8fd0\u8425SDK\uff0c\u5fc5\u987b\u5f00\u542f\u6b64\u914d\u7f6e\u9879\uff0c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"true"),"\u3002")),(0,l.kt)("h3",{id:"enableidmapping"},"enableIdMapping"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5173\u95ed\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\u5f00\u5173\u3002\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\u540e\uff0c\u540c\u4e00\u8bbf\u95ee\u7528\u6237\u5bf9\u5e94\u4e0d\u540c\u8eab\u4efd\u7684\u767b\u5f55\u7528\u6237ID\u4f1a\u88ab\u8bc6\u522b\u4e3a\u4e00\u4e2a\u7528\u6237\uff0c\u9700\u8981\u5728\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID\u65f6\u8bbe\u7f6euserKey\u3002",(0,l.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.3/commonlyApi#2%E3%80%81%E8%AE%BE%E7%BD%AE%E7%99%BB%E5%BD%95%E7%94%A8%E6%88%B7idsetuserid"},"\u4f7f\u7528\u8be6\u60c5")),(0,l.kt)("h3",{id:"extraparams"},"extraParams"),(0,l.kt)("p",null,"\u5728H5\u9875\u9762\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u7528\u6237\u4fe1\u606f\u4fdd\u6301\u4e00\u81f4\u65f6\uff0c\u4e0a\u62a5\u6570\u636e\u9664",(0,l.kt)("a",{parentName:"p",href:"/docs/webjs/plugins#%E6%89%93%E9%80%9A%E6%88%90%E5%8A%9F%E6%95%88%E6%9E%9C-1"},"\u9ed8\u8ba4\u5b57\u6bb5"),"\u4ee5\u5916\uff0c\u53ef\u589e\u52a0\u4ee5\u4e0b\u5c0f\u7a0b\u5e8fSDK\u5b57\u6bb5\u3002\u4f7f\u7528\u65f6\u53ef\u901a\u8fc7\u8c03\u7528",(0,l.kt)("a",{parentName:"p",href:"./commonlyApi#7%E4%B8%8Eh5%E6%89%93%E9%80%9A%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AEgetgioinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"getGioInfo")),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,l.kt)("strong",{parentName:"h5"},"\u6ce8\u610f\uff1a\u9700\u5185\u5d4c\u9875\u96c6\u6210\u7684Web JS SDK \u7248\u672c>=3.3.3\uff0cWeb JS SDK\u5347\u7ea7\u540e\u65e0\u9700\u505a\u989d\u5916\u914d\u7f6e\uff0c\u81ea\u52a8\u9002\u914d\u4e0a\u62a5\u3002"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u652f\u6301\u5b57\u6bb5\uff1a",(0,l.kt)("br",null),"\nappChannel \u662f\u5c0f\u7a0b\u5e8f\u7684\u573a\u666f\u503c",(0,l.kt)("br",null),"\ndeviceBrand \u662f\u8bbe\u5907\u54c1\u724c",(0,l.kt)("br",null),"\ndeviceModel \u662f\u8bbe\u5907\u578b\u53f7",(0,l.kt)("br",null),"\ndeviceType \u662f\u8bbe\u5907\u7c7b\u578b",(0,l.kt)("br",null),"\nnetworkState \u662f\u7f51\u7edc\u7c7b\u578b",(0,l.kt)("br",null),"\nplatformVersion \u662f\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c",(0,l.kt)("br",null),"\nlanguage \u662f\u8bed\u8a00",(0,l.kt)("br",null),"\nscreenHeight \u662f\u5c4f\u5e55\u9ad8\u5ea6",(0,l.kt)("br",null),"\nscreenWidth \u662f\u5c4f\u5e55\u5bbd\u5ea6"))),(0,l.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gio('init', '91eaf9b283361032','ae45f95742195faa','wx123456', {\n  version: '1.0.1',\n  debug: true,\n  extraParams: [\n  'appChannel',\n  'deviceBrand',\n  'deviceModel',\n  'deviceType',\n  'networkState',\n  'platformVersion',\n  'language',\n  'screenHeight',\n  'screenWidth'\n  ],\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u5185\u5d4c\u9875\u96c6\u6210\u7684Web JS SDK \u7248\u672c\u9700>=3.3.3\uff0cWeb JS SDK\u5347\u7ea7\u540e\u65e0\u9700\u505a\u989d\u5916\u914d\u7f6e\uff0c\u81ea\u52a8\u9002\u914d\u4e0a\u62a5\u3002")),(0,l.kt)("h3",{id:"followshare"},"followShare"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5f00\u542f\u8ddf\u8e2a\u5206\u4eab\u6570\u636e\u529f\u80fd\uff0c\u8be6\u7ec6\u7684\u8fdb\u884c\u8f6c\u53d1\u5206\u4eab\u7684\u7edf\u8ba1\uff0c\u6765\u5e2e\u52a9\u60a8\u66f4\u597d\u7684\u5206\u6790\u3002\u5982\u60a8\u4e0d\u9700\u8981\u6b64\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"followShare: false")," \u6765\u5173\u95ed\u8ddf\u8e2a\u5206\u4eab\u3002"),(0,l.kt)("p",null,"\u5728\u5206\u4eab\u56de\u8c03\u65b9\u6cd5\u4e2d\uff0c\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"contentType")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"contentId")," \u5b57\u6bb5\u3002\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"onShareAppMessage: function() {\n    return {\n        title: '\u81ea\u5b9a\u4e49\u8f6c\u53d1\u6807\u9898',\n        path: 'xxxxxx',\n        contentType: '\u5185\u5bb9\u7c7b\u578b',\n        contentId: '\u5185\u5bb9ID'\n    }\n}\n")),(0,l.kt)("h3",{id:"forcelogin"},"forceLogin"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u4f1a\u81ea\u52a8\u751f\u6210\u8bbf\u95ee\u7528\u6237ID\u6765\u6807\u8bc6\u8bbf\u95ee\u7528\u6237\u3002\u5982\u60a8\u9700\u8981\u4f7f\u7528 openId \u6216 unionId \u6807\u8bc6\u8bbf\u95ee\u7528\u6237\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"forceLogin: true")," \u6765\u6253\u5f00\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f\u9002\u7528\u4e8e\u6253\u5f00\u5c0f\u7a0b\u5e8f\u5c31\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"wx.login")," (",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html"},"\u53c2\u8003\u6587\u6863"),") \u83b7\u53d6 openId \u6216 unionId \u7684\u5c0f\u7a0b\u5e8f\u3002 \u5f00\u542f\u6b64\u6a21\u5f0f\u5e76\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"identity")," \u4e0a\u62a5 openid \u6216 unionId\uff0c\u4f1a\u5c06\u4e0a\u62a5\u7684 Id \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff0c\u6709\u52a9\u4e8e\u8bbf\u95ee\u7528\u6237\u6570\u636e\u5173\u8054\u6027\u5206\u6790\u3002"),(0,l.kt)("p",null,"\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"forceLogin"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u540e\uff0cSDK\u4f1a\u6682\u505c\u4e0a\u62a5\u6570\u636e\uff0c\u5f85\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"wx.login"),"\u540e\u83b7\u53d6 openId \u6216 unionId\uff0c\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," \u65b9\u6cd5\u540e\u5f00\u59cb\u6570\u636e\u4e0a\u62a5\u3002",(0,l.kt)("strong",{parentName:"p"},"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"identify")," \u4f1a\u66ff\u6362\u4e8b\u4ef6\u6570\u636e\u7684 deviceId \u4e3a\u8bbe\u5b9a\u503c\uff08\u4e00\u822c\u662f\u5c0f\u7a0b\u5e8fopenId \u6216 unionId\uff09\uff0c\u5305\u62ec\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"strong"},"identify"),"\u4e4b\u524d\u89e6\u53d1\u7684\u4e8b\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gdp('identify', openId);\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9002\u7528\u4e8e\u6253\u5f00\u5c0f\u7a0b\u5e8f\u5c31\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"wx.login")," \u83b7\u53d6 openId \u6216 unionId \u7684\u5c0f\u7a0b\u5e8f",(0,l.kt)("br",null),"\n\u5982\u679c\u6253\u5f00\u5c0f\u7a0b\u5e8f\u540e\u6ca1\u6709\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"wx.login")," \u83b7\u53d6 openId \u6216 unionId\uff0c\u6ca1\u6709\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," \u65b9\u6cd5\uff0c\u4f46\u662f\u5c0f\u7a0b\u5e8fSDK\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"forceLogin")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4f1a\u5bfc\u81f4SDK\u4e0d\u80fd\u4e0a\u62a5\u6570\u636e\uff0c\u8bbf\u95ee\u6570\u636e\u5c06\u5927\u5e45\u51cf\u5c11\u3002\u5982\u679c\u60a8\u4e0d\u80fd\u786e\u5b9a\u662f\u5426\u8981\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\uff0c\u8bf7\u5148\u54a8\u8be2\u6211\u4eec\u6280\u672f\u652f\u6301\u3002"))),(0,l.kt)("h3",{id:"getlocation"},"getLocation"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u4e0d\u4f1a\u81ea\u52a8\u5728\u5c0f\u7a0b\u5e8f\u542f\u52a8\u65f6\u83b7\u53d6\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\u3002\u5982\u60a8\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u6253\u5f00\u65f6\u83b7\u53d6\u7528\u6237\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"autoGet: true")," \u6765\u6253\u5f00\u6b64\u529f\u80fd\u3002\u540c\u65f6\u60a8\u53ef\u80fd\u9700\u8981\u914d\u7f6e\u9879\u76ee\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"permission"),"\u5b57\u6bb5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission"},"\u53c2\u8003\u6587\u6863")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLocation: {          //\u662f\u5426\u81ea\u52a8\u83b7\u53d6\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f, \u5e76\u8bbe\u7f6e\u83b7\u53d6\u65b9\u5f0f\n   autoGet: true,       //\u9ed8\u8ba4\u4e0d\u81ea\u52a8\u83b7\u53d6\n   type: 'wgs84'        //\u652f\u6301 wgs84\uff08\u6807\u51c6\u5750\u6807\u7cfb\uff09 | gcj02\uff08\u706b\u661f\u5750\u6807\u7cfb\uff09, \u9ed8\u8ba4wgs84\n},\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u9ed8\u8ba4\u6ca1\u6709\u6253\u5f00\u6b64\u529f\u80fd\uff0c\u5f53\u7528\u6237\u8bbf\u95ee\u81f3\u67d0\u4e00\u529f\u80fd\u9700\u8981\u4f4d\u7f6e\u4fe1\u606f\u65f6\uff0c\u53ef\u4ee5\u624b\u52a8\u8c03\u7528\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u63a5\u53e3\uff0c\u81ea\u52a8\u8865\u53d1VISIT\uff0c\u91c7\u96c6\u4f4d\u7f6e\u4fe1\u606f\uff0c\u63d0\u5347\u7528\u6237\u5730\u57df\u5206\u5e03\u7684\u5206\u6790\u51c6\u786e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gdp('getLocation');      // \u83b7\u53d6\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\u5e76\u4e0a\u62a5\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"1\u3001\u5982\u679c\u60a8\u521d\u59cb\u5316\u5f00\u542fgetLocation\u914d\u7f6e\uff0c\u7528\u6237\u6253\u5f00\u5c0f\u7a0b\u5e8f\u5373\u9700\u8981\u6388\u6743\uff1b\u624b\u52a8\u8c03\u7528getLocation\u65b9\u6cd5\u65f6\uff0c\u9700\u8981\u7528\u6237\u6388\u6743\u3002"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"2\u3001\u5982\u679c\u60a8\u521d\u59cb\u5316\u5f00\u542fgetLocation\u914d\u7f6e\u6216\u624b\u52a8\u8c03\u7528getLocation\u65b9\u6cd5\uff0c\u90fd\u9700\u8981\u914d\u7f6e\u9879\u76ee\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"strong"},"permission"),"\u5b57\u6bb5\uff1a",(0,l.kt)("a",{parentName:"strong",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h3",{id:"ignorefields"},"ignoreFields"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u4f1a\u4e0a\u62a5\u7f51\u7edc\u548c\u8bbe\u5907\u7684\u76f8\u5173\u4fe1\u606f\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u8fd9\u4e9b\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"ignoreFields: [xxx,xxx]")," \u6765\u5ffd\u7565\u6307\u5b9a\u5b57\u6bb5\u7684\u4e0a\u62a5\u3002\n\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u9879\u6216\u591a\u9879\u5b57\u6bb5\uff0c\u4f46\u5747\u9700\u4e3a\u6570\u7ec4\u683c\u5f0f\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u652f\u6301\u5b57\u6bb5\uff1a",(0,l.kt)("br",null),"\ndeviceBrand \u662f\u8bbe\u5907\u54c1\u724c",(0,l.kt)("br",null),"\ndeviceModel \u662f\u8bbe\u5907\u578b\u53f7",(0,l.kt)("br",null),"\ndeviceType \u662f\u8bbe\u5907\u7c7b\u578b",(0,l.kt)("br",null),"\nnetworkState \u662f\u7f51\u7edc\u7c7b\u578b",(0,l.kt)("br",null),"\nscreenHeight \u662f\u5c4f\u5e55\u9ad8\u5ea6",(0,l.kt)("br",null),"\nscreenWidth \u662f\u5c4f\u5e55\u5bbd\u5ea6"))),(0,l.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gio('init', '91eaf9b283361032','ae45f95742195faa','wx123456', {\n  version: '1.0.1',\n  debug: true,\n  ignoreFields: [\n  'deviceBrand',\n  'deviceModel',\n  'deviceType',\n  'networkState',\n  'screenHeight',\n  'screenWidth'\n  ],\n});\n")))}g.isMDXComponent=!0}}]);