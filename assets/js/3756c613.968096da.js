"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,u=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u6570\u636e\u91c7\u96c6API",sidebar_position:4},i=void 0,d={unversionedId:"webjs/3.3/api",id:"webjs/3.3/api",title:"\u6570\u636e\u91c7\u96c6API",description:"\u901a\u8fc7window.gdp\u8fd9\u4e2a\u5168\u5c40\u7684\u65b9\u6cd5\u53ef\u4ee5\u8c03\u7528\u5230SDK\u4e2d\u6240\u6709\u5f00\u653e\u7684\u63a5\u53e3\uff0c\u9ed8\u8ba4\u5305\u62ec\u4ee5\u4e0b\u542f\u52a8\u63a5\u53e3\uff0c\u52a8\u6001\u914d\u5408\u63a5\u53e3\u548c\u529f\u80fd\u63a5\u53e3\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u6269\u5c55\u66f4\u591a\u7684\u63a5\u53e3\u3002",source:"@site/docs/webjs/3.3/api.md",sourceDirName:"webjs/3.3",slug:"/webjs/3.3/api",permalink:"/growingio-sdk-docs/docs/webjs/3.3/api",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/3.3/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u91c7\u96c6API",sidebar_position:4},sidebar:"gioSidebar",previous:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/webjs/3.3/initSettings"},next:{title:"Web JS SDK\uff083.8\uff09",permalink:"/growingio-sdk-docs/docs/webjs/3.8"}},p={},o=[{value:"\u6838\u5fc3\u63a5\u53e3",id:"\u6838\u5fc3\u63a5\u53e3",level:2},{value:"\u63a5\u53e3\u5217\u8868",id:"\u63a5\u53e3\u5217\u8868",level:3},{value:"\u542f\u52a8\u63a5\u53e3",id:"\u542f\u52a8\u63a5\u53e3",level:3},{value:"1\u3001\u521d\u59cb\u5316\u63a5\u53e3",id:"1\u521d\u59cb\u5316\u63a5\u53e3",level:4},{value:"2\u3001\u542f\u52a8\u63a5\u53e3",id:"2\u542f\u52a8\u63a5\u53e3",level:4},{value:"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3",id:"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3",level:3},{value:"1\u3001\u4fee\u6539\u8bf7\u6c42\u534f\u8bae(scheme)",id:"1\u4fee\u6539\u8bf7\u6c42\u534f\u8baescheme",level:4},{value:"2\u3001\u4fee\u6539\u6570\u636e\u4e0a\u62a5\u5730\u5740(host)",id:"2\u4fee\u6539\u6570\u636e\u4e0a\u62a5\u5730\u5740host",level:4},{value:"3\u3001\u5f00\u542f/\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0f(debug)",id:"3\u5f00\u542f\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0fdebug",level:4},{value:"4\u3001\u5f00\u542f/\u5173\u95ed\u6570\u636e\u91c7\u96c6(dataCollect)",id:"4\u5f00\u542f\u5173\u95ed\u6570\u636e\u91c7\u96c6datacollect",level:4},{value:"5\u3001\u5f00\u542f/\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6(autotrack)",id:"5\u5f00\u542f\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6autotrack",level:4},{value:"\u529f\u80fd\u63a5\u53e3",id:"\u529f\u80fd\u63a5\u53e3",level:3},{value:"1\u3001\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id",id:"1\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id",level:4},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"2\u3001\u6e05\u9664\u767b\u5f55\u7528\u6237id",id:"2\u6e05\u9664\u767b\u5f55\u7528\u6237id",level:4},{value:"3\u3001\u57cb\u70b9\u4e8b\u4ef6\u63a5\u53e3",id:"3\u57cb\u70b9\u4e8b\u4ef6\u63a5\u53e3",level:4},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"5\u3001\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027",id:"5\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027",level:4},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-2",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4}],s={toc:o};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"window.gdp"),"\u8fd9\u4e2a\u5168\u5c40\u7684\u65b9\u6cd5\u53ef\u4ee5\u8c03\u7528\u5230SDK\u4e2d\u6240\u6709\u5f00\u653e\u7684\u63a5\u53e3\uff0c\u9ed8\u8ba4\u5305\u62ec\u4ee5\u4e0b\u542f\u52a8\u63a5\u53e3\uff0c\u52a8\u6001\u914d\u5408\u63a5\u53e3\u548c\u529f\u80fd\u63a5\u53e3\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u6269\u5c55\u66f4\u591a\u7684\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u6838\u5fc3\u63a5\u53e3"},"\u6838\u5fc3\u63a5\u53e3"),(0,r.kt)("h3",{id:"\u63a5\u53e3\u5217\u8868"},"\u63a5\u53e3\u5217\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u542f\u52a8\u63a5\u53e3\ngdp('init', accountId, datasourceId[, options]);\ngdp('send');\n\n// \u52a8\u6001\u914d\u7f6e\u63a5\u53e3\ngdp('setTrackerScheme', 'http');\ngdp('setTrackerHost', 'Your ServerHost');\ngdp('enableDebug', true);\ngdp('setDataCollect', true);\ngdp('setAutoTrack', true);\n\n// \u529f\u80fd\u63a5\u53e3\ngdp('setUserId', userId);\ngdp('clearUserId');\ngdp('getVisitorId');\ngdp('track', eventId, variables[, item[, callback]]);\ngdp('setUserAttributes', properties, callback);\n")),(0,r.kt)("h3",{id:"\u542f\u52a8\u63a5\u53e3"},"\u542f\u52a8\u63a5\u53e3"),(0,r.kt)("h4",{id:"1\u521d\u59cb\u5316\u63a5\u53e3"},"1\u3001\u521d\u59cb\u5316\u63a5\u53e3"),(0,r.kt)("p",null,"\u7528\u6237\u521d\u59cb\u5316SDK\uff0c\u521d\u59cb\u5316\u914d\u7f6e\u7b49\uff0c\u63a5\u53e3\u539f\u578b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId[, options]);\n")),(0,r.kt)("h4",{id:"2\u542f\u52a8\u63a5\u53e3"},"2\u3001\u542f\u52a8\u63a5\u53e3"),(0,r.kt)("p",null,"\u6b63\u5f0f\u8fd0\u884cSDK\uff0c\u53ef\u4ee5\u5f00\u59cb\u53d1\u9001\u6570\u636e\uff0c\u63a5\u53e3\u539f\u578b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('send');\n")),(0,r.kt)("h3",{id:"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3"},"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("h4",{id:"1\u4fee\u6539\u8bf7\u6c42\u534f\u8baescheme"},"1\u3001\u4fee\u6539\u8bf7\u6c42\u534f\u8bae(scheme)"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"location.protocol"),"\u83b7\u53d6\uff0c\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setTrackerScheme', 'http');\n")),(0,r.kt)("h4",{id:"2\u4fee\u6539\u6570\u636e\u4e0a\u62a5\u5730\u5740host"},"2\u3001\u4fee\u6539\u6570\u636e\u4e0a\u62a5\u5730\u5740(host)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setTrackerHost', 'Your ServerHost');\n")),(0,r.kt)("h4",{id:"3\u5f00\u542f\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0fdebug"},"3\u3001\u5f00\u542f/\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0f(debug)"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f.\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c \u5f00\u542f\u540e\u4f1a\u8f93\u51fa SDK Log \u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('enableDebug', true);\n")),(0,r.kt)("h4",{id:"4\u5f00\u542f\u5173\u95ed\u6570\u636e\u91c7\u96c6datacollect"},"4\u3001\u5f00\u542f/\u5173\u95ed\u6570\u636e\u91c7\u96c6(dataCollect)"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u91c7\u96c6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setDataCollect', true);\n")),(0,r.kt)("h4",{id:"5\u5f00\u542f\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6autotrack"},"5\u3001\u5f00\u542f/\u5173\u95ed\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6(autotrack)"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff0c\u5c06\u4e0d\u518d\u91c7\u96c6",(0,r.kt)("inlineCode",{parentName:"p"},"VIEW_CLICK\u3001VIEW_CHANGE\u3001FORM_SUBMIT"),"\u65e0\u57cb\u70b9\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setAutoTrack', true);\n")),(0,r.kt)("h3",{id:"\u529f\u80fd\u63a5\u53e3"},"\u529f\u80fd\u63a5\u53e3"),(0,r.kt)("h4",{id:"1\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id"},"1\u3001\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setUserId")," API\uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u652f\u6301 ID-MAPPING SDK\u7248\u672c >=3.3.0"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u9700\u5728\u521d\u59cb\u5316 SDK \u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"strong"},"enableIdMapping")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"strong"},"true")))),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"userId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u957f\u5ea6\u9650\u5236\u5927\u4e8e0\u4e14\u5c0f\u4e8e\u7b49\u4e8e1000\uff0c\u5982\u679c\u5927\u4e8e\u957f\u5ea61000\u5c06\u53ea\u622a\u53d6\u524d1000\u957f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"userKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\uff1b\u9002\u7528\u4e8eID-MAPPING,\u53ef\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"userId")," \u7684\u7c7b\u578b")))),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setUserId', '112333445');\ngdp('setUserId', '112333445', 'phone');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"strong"},"userKey"),"\u65f6\u9700SDK\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"strong"},"enableIdMapping")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"strong"},"true"),"\uff0c\u5426\u5219\u4e0d\u751f\u6548\u3002")),(0,r.kt)("h4",{id:"2\u6e05\u9664\u767b\u5f55\u7528\u6237id"},"2\u3001\u6e05\u9664\u767b\u5f55\u7528\u6237id"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"clearUserId"),"\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('clearUserId');\n")),(0,r.kt)("h4",{id:"3\u57cb\u70b9\u4e8b\u4ef6\u63a5\u53e3"},"3\u3001\u57cb\u70b9\u4e8b\u4ef6\u63a5\u53e3"),(0,r.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\uff1b\u6ce8\u610f\uff1a\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728CDP\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027\uff1b",(0,r.kt)("br",null),"\n\u5982\u679c\u4e8b\u4ef6\u5c5e\u6027\u9700\u5173\u8054\u7ef4\u5ea6\u8868\uff0c\u8bf7\u5728\u4e8b\u4ef6\u5c5e\u6027\u4e0b\u5173\u8054\u7ef4\u5ea6\u8868\uff08 CDP\u5e73\u53f0\u7248\u672c>= 2.1 \uff09"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"variables")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff1b\u5f53\u4e8b\u4ef6\u5c5e\u6027\u5173\u8054\u6709\u7ef4\u5ea6\u8868\u65f6\uff0c\u5c5e\u6027\u503c\u4e3a\u5bf9\u5e94\u7684\u7ef4\u5ea6\u8868\u6a21\u578bID(\u8bb0\u5f55ID)\uff08\u53ef\u9009\uff09\uff1b",(0,r.kt)("br",null),"\u9650\u5236\uff1aObject \u7c7b\u578b\uff0cvalue \u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3001\u6574\u6570\u3001\u5c0f\u6570\uff1bkey \u957f\u5ea6 <=50\uff0cvalue \u957f\u5ea6 <=1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"item")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bitem(\u53ef\u9009);\u82e5\u9700\u8981\u4f20item\uff0c\u5219key(\u5fc5\u586b)\uff1a\u7269\u54c1\u6a21\u578b\u552f\u4e00\u6807\u8bc6,id(\u5fc5\u586b)\uff1a\u7269\u54c1\u6a21\u578bid")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1aSDK\u7248\u672c3.3.10\u8d77\uff0c ",(0,r.kt)("inlineCode",{parentName:"strong"},"variables")," \u4e2d\u5c5e\u6027\u503c\u7684\u7c7b\u578b\u65b0\u589e\u652f\u6301\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5143\u7d20\u652f\u6301\u6570\u5b57\u6216\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u6570\u7ec4\u7684\u6570\u636e\u5728\u4e0a\u62a5\u65f6\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u4ee5",(0,r.kt)("inlineCode",{parentName:"strong"},"||"),"\u95f4\u9694\u7684\u5b57\u7b26\u4e32\uff08\u4f8b\uff1anames: ","['tony', 'mike', 'lily']","  =>  names: 'tony||mike||lily'\uff09")),(0,r.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// gdp('track', eventId, variables[, item]]);\ngdp('track', 'order');\ngdp('track', 'order', { type: 'hjh' });\ngdp('track', 'order', {}, { key: 'order_id', id: '12345' });\ngdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' });\n\n// SDK\u7248\u672c3.3.10\u8d77\uff0c\u589e\u52a0\u652f\u6301\u5c5e\u6027\u503c\u4e3a\u6570\u7ec4\u7c7b\u578b\ngdp('track', 'order', { types: ['hjh1', 'hjh2'] }, { key: 'order_id', id: '12345' });\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,r.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u57cb\u70b9\u4e8b\u4ef6\u793a\u4f8b"))),(0,r.kt)("h4",{id:"5\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027"},"5\u3001\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027"),(0,r.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"userAttributes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u767b\u5f55\u7528\u6237\u5c5e\u6027\u7684 Object \u5bf9\u8c61\uff1b\u9650\u5236\uff1aObject \u7c7b\u578b\uff0cvalue \u652f\u6301\u5b57\u7b26\u4e32\u3001\u6574\u6570\u3001\u5c0f\u6570\u7c7b\u578b")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1aSDK\u7248\u672c3.3.10\u8d77\uff0c ",(0,r.kt)("inlineCode",{parentName:"strong"},"userAttributes")," \u4e2d\u5c5e\u6027\u503c\u7684\u7c7b\u578b\u65b0\u589e\u652f\u6301\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5143\u7d20\u652f\u6301\u6570\u5b57\u6216\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u6570\u7ec4\u7684\u6570\u636e\u5728\u4e0a\u62a5\u65f6\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u4ee5",(0,r.kt)("inlineCode",{parentName:"strong"},"||"),"\u95f4\u9694\u7684\u5b57\u7b26\u4e32\uff08\u4f8b\uff1anames: ","['tony', 'mike', 'lily']","  =>  names: 'tony||mike||lily'\uff09")),(0,r.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('setUserAttributes', { name: 'hjh' });\n\n// SDK\u7248\u672c3.3.10\u8d77\uff0c\u589e\u52a0\u652f\u6301\u5c5e\u6027\u503c\u4e3a\u6570\u7ec4\u7c7b\u578b\ngdp('setUserAttributes', { names: ['tony', 'mike', 'lily'] });\n\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,r.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\u793a\u4f8b"))))}k.isMDXComponent=!0}}]);