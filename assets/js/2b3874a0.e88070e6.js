"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9234],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,g=c["".concat(d,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8362:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"Flutter SDK"},d=void 0,p={unversionedId:"other/Flutter SDK",id:"other/Flutter SDK",title:"Flutter SDK",description:"\u9488\u5bf9\u4e8eSDK 3.0 \u4e0a\u7684flutter\u63d2\u4ef6\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u57cb\u70b9sdk\u3002",source:"@site/docs/other/Flutter SDK.md",sourceDirName:"other",slug:"/other/Flutter SDK",permalink:"/growingio-sdk-docs/docs/other/Flutter SDK",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/other/Flutter SDK.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Flutter SDK"},sidebar:"gioSidebar",previous:{title:"\u7b2c\u4e09\u65b9 SDK",permalink:"/growingio-sdk-docs/docs/other"},next:{title:"React Native SDK",permalink:"/growingio-sdk-docs/docs/other/React Native"}},m={},s=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"Flutter SDK \u96c6\u6210",id:"flutter-sdk-\u96c6\u6210",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"API\u8bf4\u660e",id:"api\u8bf4\u660e",level:2},{value:"1. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID",id:"1-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:4},{value:"2. \u6e05\u9664\u767b\u5f55\u7528\u6237ID",id:"2-\u6e05\u9664\u767b\u5f55\u7528\u6237id",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:4},{value:"3. \u57cb\u70b9\u4e8b\u4ef6",id:"3-\u57cb\u70b9\u4e8b\u4ef6",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:4},{value:"4. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",id:"4-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-2",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:4}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9488\u5bf9\u4e8eSDK 3.0 \u4e0a\u7684flutter\u63d2\u4ef6\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u57cb\u70b9sdk\u3002"),(0,i.kt)("p",null,"\u6e90\u7801\u6258\u7ba1\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/growingio/flutter-growingio-sdk-tracker-plugin"},"growingio/flutter-growingio-sdk-tracker-plugin")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'\u96c6\u6210\u73af\u5883\uff1adart sdk: ">=2.7.0 \u4e14<3.0.0"\nflutter: ">=1.20.0"'),(0,i.kt)("p",{parentName:"div"},"\u5bf9\u5e94\u7684\u662fCDP\u5206\u652f\uff0c\u800c\u4e0d\u662fmaster\u5206\u652f\u8fdb\u884c\u6d4b\u8bd5"))),(0,i.kt)("h2",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u786e\u4fdd\u539f\u751f\u5de5\u7a0b\u4e2d\u5df2\u7ecf\u6dfb\u52a0",(0,i.kt)("strong",{parentName:"p"},"\u539f\u751f\u57cb\u70b9SDK"),", \u5982\u679c\u6ca1\u6709, \u8bf7\u79fb\u6b65\u81f3\u539f\u751f\u7aef\u57cb\u70b9SDK\u96c6\u6210\u6587\u6863: ",(0,i.kt)("a",{parentName:"p",href:"/docs/android/base#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},(0,i.kt)("strong",{parentName:"a"},"Android \u57cb\u70b9SDK")),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/ios/base#%E5%9F%8B%E7%82%B9-sdk-%E9%9B%86%E6%88%90"},(0,i.kt)("strong",{parentName:"a"},"iOS \u57cb\u70b9SDK"))))),(0,i.kt)("h2",{id:"flutter-sdk-\u96c6\u6210"},"Flutter SDK \u96c6\u6210"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,i.kt)("p",null,"\u4ee5\u5de5\u7a0b",(0,i.kt)("inlineCode",{parentName:"p"},"flutter_app"),"\u4e3a\u4f8b\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"dependencies:\n  growingio_sdk_tracker_plugin:\n    git:\n      ref: CDP\n      url: https://github.com/growingio/flutter-growingio-sdk-tracker-plugin.git\n")),(0,i.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter pub get")," \u6307\u4ee4"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u90e8\u5206\u7528\u6237\u65e0\u6cd5\u8bbf\u95eegithub.com\uff0c\u4ece\u800c\u65e0\u6cd5\u4e0b\u62c9\u63d2\u4ef6\u5e93\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u4fee\u6539\u57df\u540d\u4e3ahub.fastgit.xyz\uff0c\u5373\u53ef\u89e3\u51b3"))),(0,i.kt)("h2",{id:"api\u8bf4\u660e"},"API\u8bf4\u660e"),(0,i.kt)("h3",{id:"1-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id"},"1. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"setLoginUserId")," \uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"userId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u6807\u8bc6")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.setLoginUserId('loginUserId');\n")),(0,i.kt)("h3",{id:"2-\u6e05\u9664\u767b\u5f55\u7528\u6237id"},"2. \u6e05\u9664\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanLoginUserId"),"\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.cleanLoginUserId();\n")),(0,i.kt)("h3",{id:"3-\u57cb\u70b9\u4e8b\u4ef6"},"3. \u57cb\u70b9\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\uff1b\u6ce8\u610f\uff1a\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728CDP\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027\uff1b",(0,i.kt)("br",null),"\n\u5982\u679c\u4e8b\u4ef6\u5c5e\u6027\u9700\u5173\u8054\u7ef4\u5ea6\u8868\uff0c\u8bf7\u5728\u4e8b\u4ef6\u5c5e\u6027\u4e0b\u5173\u8054\u7ef4\u5ea6\u8868\uff08 CDP\u5e73\u53f0\u7248\u672c>= 2.1 \uff09"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Map"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff1b\u5f53\u4e8b\u4ef6\u5c5e\u6027\u5173\u8054\u6709\u7ef4\u5ea6\u8868\u65f6\uff0c\u5c5e\u6027\u503c\u4e3a\u5bf9\u5e94\u7684\u7ef4\u5ea6\u8868\u6a21\u578bID(\u8bb0\u5f55ID)\uff08\u53ef\u9009\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"itemKey"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bKey\uff08\u53ef\u9009\uff0c\u4e0eitemId\u53c2\u6570\u4e00\u8d77\u4f20\u5165\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"itemId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bID \uff08\u53ef\u9009\uff0c\u4e0eitemKey\u53c2\u6570\u4e00\u8d77\u4f20\u5165")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.trackCustomEvent('eventId'); \n\nGrowingTracker.trackCustomEvent('eventId', variable: {'testkey': 'testValue', 'testNumKey': '2333'});\n\nGrowingTracker.trackCustomEventItemKeyId('eventId', 'testKey','testId');\n\nGrowingTracker.trackCustomEventItemKeyId('eventId', 'testKey','testId',variable: {'testkey': 'testValue', 'testNumKey': '2333'});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,i.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u57cb\u70b9\u4e8b\u4ef6\u793a\u4f8b")))),(0,i.kt)("h3",{id:"4-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"},"4. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"),(0,i.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Map"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u767b\u5f55\u7528\u6237\u5c5e\u6027")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.setLoginUserAttributes({\n    key1: 'value1',\n    key2: 'value2',\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,i.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\u793a\u4f8b")))))}k.isMDXComponent=!0}}]);