"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[525],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6610:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"\u5185\u7f6e\u63d2\u4ef6",sidebar_position:5},p=void 0,d={unversionedId:"webjs/plugins",id:"webjs/plugins",title:"\u5185\u7f6e\u63d2\u4ef6",description:"GrowingIO Web SDK\u5c06\u5404\u79cd\u529f\u80fd\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u63a5\u5165\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u6269\u5c55\u6027\u3002",source:"@site/docs/webjs/plugins.md",sourceDirName:"webjs",slug:"/webjs/plugins",permalink:"/growingio-sdk-docs/docs/webjs/plugins",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/plugins.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5185\u7f6e\u63d2\u4ef6",sidebar_position:5},sidebar:"gioSidebar",previous:{title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",permalink:"/growingio-sdk-docs/docs/webjs/develop/plugin_dev"},next:{title:"\u5c0f\u7a0b\u5e8f SDK",permalink:"/growingio-sdk-docs/docs/miniprogram/"}},s={},u=[{value:"1. \u901a\u7528\u63a5\u53e3\u63d2\u4ef6",id:"1-\u901a\u7528\u63a5\u53e3\u63d2\u4ef6",level:2},{value:"2. \u4e8b\u4ef6\u5e8f\u53f7\u63d2\u4ef6",id:"2-\u4e8b\u4ef6\u5e8f\u53f7\u63d2\u4ef6",level:2},{value:"3. \u57cb\u70b9\u63d2\u4ef6",id:"3-\u57cb\u70b9\u63d2\u4ef6",level:2},{value:"4. \u65e0\u57cb\u70b9\u63d2\u4ef6",id:"4-\u65e0\u57cb\u70b9\u63d2\u4ef6",level:2},{value:"5. spa\u9875\u9762\u652f\u6301\u63d2\u4ef6",id:"5-spa\u9875\u9762\u652f\u6301\u63d2\u4ef6",level:2},{value:"6. Hybrid\u6253\u901a\u63d2\u4ef6",id:"6-hybrid\u6253\u901a\u63d2\u4ef6",level:2},{value:"APP \u4e2d GIO SDK \u6253\u901a\u8bbe\u7f6e",id:"app-\u4e2d-gio-sdk-\u6253\u901a\u8bbe\u7f6e",level:3},{value:"iOS APP",id:"ios-app",level:4},{value:"Android APP",id:"android-app",level:4},{value:"\u6253\u901a\u6210\u529f\u6548\u679c",id:"\u6253\u901a\u6210\u529f\u6548\u679c",level:3},{value:"7. \u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6",id:"7-\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6",level:2},{value:"\u6253\u901a\u8bbe\u7f6e",id:"\u6253\u901a\u8bbe\u7f6e",level:3},{value:"\u5c0f\u7a0b\u5e8f\u7aef",id:"\u5c0f\u7a0b\u5e8f\u7aef",level:4},{value:"Web\u7aef",id:"web\u7aef",level:4},{value:"\u6253\u901a\u6210\u529f\u6548\u679c",id:"\u6253\u901a\u6210\u529f\u6548\u679c-1",level:3},{value:"8. web\u5708\u9009\u63d2\u4ef6",id:"8-web\u5708\u9009\u63d2\u4ef6",level:2},{value:"9. hybrid\u5708\u9009\u63d2\u4ef6",id:"9-hybrid\u5708\u9009\u63d2\u4ef6",level:2},{value:"10. \u5f39\u7a97\u63d2\u4ef6",id:"10-\u5f39\u7a97\u63d2\u4ef6",level:2}],c={toc:u};function k(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GrowingIO Web SDK\u5c06\u5404\u79cd\u529f\u80fd\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u63a5\u5165\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u6269\u5c55\u6027\u3002"),(0,l.kt)("p",null,"\u5728\u5185\u90e8\u63d0\u4f9b\u4e86\u5982\u57cb\u70b9\uff0c\u65e0\u57cb\u70b9\uff0chybrid\u6253\u901a\uff0chybrid\u5708\u9009\uff0c\u5c0f\u7a0b\u5e8f\u6253\u901a\uff0cweb\u5708\u9009\u7b49\u63d2\u4ef6\u3002\u5177\u4f53\u63d2\u4ef6\u529f\u80fd\u7b80\u4ecb\u5982\u4e0b"),(0,l.kt)("h2",{id:"1-\u901a\u7528\u63a5\u53e3\u63d2\u4ef6"},"1. \u901a\u7528\u63a5\u53e3\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1acommon-plugin"),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u52a8\u6001\u914d\u7f6e\u548c\u90e8\u5206\u529f\u80fd\u63a5\u53e3\uff0c\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"setTrackerScheme(scheme: string): void;\nsetTrackHost(host: string): void;\nenableDebug(debug: boolean): void;\nsetDataCollect(dataCollect: boolean): void;\nsetAutoTrack(enable: boolean): void;\ngetVisitorId(): string;\nsetUserId(userId: string): void;\nclearUserId(): void;\n")),(0,l.kt)("h2",{id:"2-\u4e8b\u4ef6\u5e8f\u53f7\u63d2\u4ef6"},"2. \u4e8b\u4ef6\u5e8f\u53f7\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1asequence-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonLoad\uff0conComposeAfter"),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u5168\u5c40\u4e8b\u4ef6\u548c\u5206\u7c7b\u4e8b\u4ef6\u7f16\u53f7\u7684\u80fd\u529b\u3002\u76f4\u63a5\u5728\u5408\u6210\u7684\u4e8b\u4ef6\u4e0a\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"globalSequenceId, eventSequenceId"),"\u4e24\u4e2a\u5b57\u6bb5\u3002\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u4e00\u65e6\u751f\u6210\u5c31\u4f1a\u4e00\u76f4\u9012\u589e\u4e0b\u53bb\uff0c\u9664\u975e\u4e3b\u52a8\u6e05\u9664\u5bf9\u5e94\u7684cookie\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"globalSequenceId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u6240\u6709\u7c7b\u578b\u4e8b\u4ef6\u4e0a\u62a5\u603b\u6570\u7684\u8ba1\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"eventSequenceId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u5f53\u524d\u7c7b\u578b\u4e8b\u4ef6\u4e0a\u62a5\u6570\u7684\u8ba1\u6570")))),(0,l.kt)("h2",{id:"3-\u57cb\u70b9\u63d2\u4ef6"},"3. \u57cb\u70b9\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1acustom-track-plugin"),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u57cb\u70b9\u529f\u80fd\u63a5\u53e3\uff0c\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"track(eventId: string, variables: object[, item: object], callback: ValueFunction<Response>): void;\nsetUserAttributes(properties: Properties, callback: ValueFunction<Response>): void;\n")),(0,l.kt)("h2",{id:"4-\u65e0\u57cb\u70b9\u63d2\u4ef6"},"4. \u65e0\u57cb\u70b9\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1aaction-track-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonLoad"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6eautotrack\u914d\u7f6e\u63a7\u5236\u662f\u5426\u91c7\u96c6\u3002\u63d0\u4f9b\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u53d1\u9001\u7684\u4e8b\u4ef6\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"VIEW_CLICK"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"VIEW_CHANGE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FORM_SUBMIT"),"\u3002"),(0,l.kt)("h2",{id:"5-spa\u9875\u9762\u652f\u6301\u63d2\u4ef6"},"5. spa\u9875\u9762\u652f\u6301\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1aspa-page-track-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonStart"),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u5728\u5355\u9875\u5e94\u7528\u4e2d\u76d1\u542c\u8def\u7531\u53d8\u5316\u53d1\u9001page\u7684\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"6-hybrid\u6253\u901a\u63d2\u4ef6"},"6. Hybrid\u6253\u901a\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1ahybrid-support-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonLoad"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u63d0\u4f9bH5\u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0eAPP \u4e2d GIO SDK\u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\u89c4\u5219\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e24\u8005SDK\u521d\u59cb\u5316\u53c2\u6570 accountId \u4e00\u81f4\u65f6\uff0cH5\u4e0eAPP\u6253\u901a\uff0c\u6b64\u65f6H5\u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u4ec5\u7531 APP \u4e2d GIO SDK \u53d1\u9001\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4e24\u8005SDK\u521d\u59cb\u5316\u53c2\u6570 accountId \u4e0d\u4e00\u81f4\u65f6\uff0cH5\u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u540c\u65f6\u7531 Web JS SDK \u548c APP \u4e2d GIO SDK\u53d1\u9001\uff1b")),(0,l.kt)("h3",{id:"app-\u4e2d-gio-sdk-\u6253\u901a\u8bbe\u7f6e"},"APP \u4e2d GIO SDK \u6253\u901a\u8bbe\u7f6e"),(0,l.kt)("h4",{id:"ios-app"},"iOS APP"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u6210\u7684\u662f",(0,l.kt)("a",{parentName:"p",href:"/docs/ios/base#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,l.kt)("strong",{parentName:"a"},"\u65e0\u57cb\u70b9SDK")),"\uff0c \u4e0d\u9700\u8981\u505a\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u6ce8\u5165\u6865\u63a5\u4ee3\u7801\uff0c\u5b9e\u73b0\u6570\u636e\u6253\u901a\uff1b"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u6210\u7684\u662f",(0,l.kt)("a",{parentName:"p",href:"/docs/ios/base#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,l.kt)("strong",{parentName:"a"},"\u57cb\u70b9SDK")),"\uff0c\u5219\u9700\u8981\u8bbe\u7f6e\u8be6\u60c5\u53c2\u8003iOS",(0,l.kt)("a",{parentName:"p",href:"/docs/ios/base/Configuration#3%E5%86%85%E5%B5%8Ch5%E9%A1%B5%E9%9D%A2%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E9%85%8D%E7%BD%AE"},"\u5185\u5d4cH5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e")),(0,l.kt)("p",null,"\u9879\u76ee\u4e2d\u65e0\u9700\u5176\u4ed6\u8bbe\u7f6e"),(0,l.kt)("h4",{id:"android-app"},"Android APP"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u6210\u7684\u662f",(0,l.kt)("a",{parentName:"p",href:"/docs/android/base#%E9%9B%86%E6%88%90%E6%97%A0%E5%9F%8B%E7%82%B9sdk"},(0,l.kt)("strong",{parentName:"a"},"\u65e0\u57cb\u70b9SDK")),"\uff0c \u4e0d\u9700\u8981\u505a\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u6ce8\u5165\u6865\u63a5\u4ee3\u7801\uff0c\u5b9e\u73b0\u6570\u636e\u6253\u901a\uff1b"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u6210\u7684\u662f",(0,l.kt)("a",{parentName:"p",href:"/docs/android/base#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},(0,l.kt)("strong",{parentName:"a"},"\u57cb\u70b9SDK")),"\uff0c\u5219\u9700\u8981\u8bbe\u7f6e\uff0c\u8be6\u7ec6\u8bf7\u53c2\u5b89\u5353",(0,l.kt)("a",{parentName:"p",href:"/docs/android/base/Configuration#1-%E5%86%85%E5%B5%8Ch5%E9%A1%B5%E9%9D%A2%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E9%85%8D%E7%BD%AE"},"\u5185\u5d4ch5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e")),(0,l.kt)("h3",{id:"\u6253\u901a\u6210\u529f\u6548\u679c"},"\u6253\u901a\u6210\u529f\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"H5ToApp",src:n(1581).Z,width:"1294",height:"982"}),"\n\u6ee1\u8db3\u6253\u901a\u89c4\u5219\u65f6\uff0cH5 \u9875\u9762\u8c03\u7528 setUserID\uff0ccleanUserID \u4f1a\u8c03\u7528 APP \u7684 setLoginUserID\uff0ccleanUserID\u3002",(0,l.kt)("br",null),"\n\u5f53\u89e6\u53d1\u4e86\u6253\u901a\u89c4\u5219\u540e\uff0ch5\u5185\u5d4c\u9875\u91c7\u96c6\u7684\u6570\u636e\u7ecf APP \u4e2d GIO SDK\u53d1\u9001\u7684\u6570\u636e\u4ee5\u4e0b\u5b57\u6bb5\u7684\u53d8\u5316\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tex"},"deviceId: \u4f7f\u7528\u539f\u751fApp\u7684deviceId\nsessionId: \u4f7f\u7528\u539f\u751fApp\u7684sessionId\ngioId: \u4f7f\u7528\u539f\u751fApp\u7684gioId\nuserId: \u4f7f\u7528\u539f\u751fApp\u7684userId\nuserKey: \u4f7f\u7528\u539f\u751fApp\u7684userKey\ndataSourceId: \u4f7f\u7528\u539f\u751fApp\u7684dataSourceId\nplatform: \u4f7f\u7528\u539f\u751fApp\u7684platform\ndomain: \u4f7f\u7528H5\u9875\u9762\u7684\u57df\u540d\n")),(0,l.kt)("h2",{id:"7-\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6"},"7. \u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1aembed-h5-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonLoad"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u63d0\u4f9b\u5185\u5d4c\u9875 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0e\u5c0f\u7a0b\u5e8f SDK \u91c7\u96c6\u7684\u6570\u636e\u6253\u901a\u80fd\u529b\u3002\u63d2\u4ef6\u4eceurl\u7684search\u4e2d\u83b7\u53d6\u6765\u81ea\u5c0f\u7a0b\u5e8f\u7684gioInfo, \u6253\u901a\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u6ee1\u8db3\u201c\u5c0f\u7a0b\u5e8f SDK \u548c\u5185\u5d4c\u9875\u4e2dWeb JS SDK \u7684 accountId\uff0cappId \u4e00\u81f4\u201d\u6761\u4ef6\u65f6\uff0c\u53ef\u5b9e\u73b0\u4e24\u8fb9\u7684\u6570\u636e\u6253\u901a\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u4e0d\u6ee1\u8db3\u201c\u5c0f\u7a0b\u5e8f SDK \u548c\u5185\u5d4c\u9875\u4e2dWeb JS SDK \u7684 accountId\uff0cappId \u4e00\u81f4\u201d\u6761\u4ef6\u65f6\uff0c\u65e0\u6cd5\u5b9e\u73b0\u4e24\u8fb9\u6570\u636e\u6253\u901a"))),(0,l.kt)("p",null,"\u5728\u6253\u901a\u540e\u5185\u5d4c\u9875\u4e2d\u7684setUserId\u5c06\u65e0\u6548\uff0c\u53ea\u80fd\u4f7f\u7528\u4ece\u5c0f\u7a0b\u5e8f\u7ee7\u627f\u6765\u7684\u767b\u5f55\u7528\u6237ID\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u82e5\u5c0f\u7a0b\u5e8f\u4e2d\u6539\u53d8\u4e86userId\uff0c\u4f46\u5185\u5d4c\u9875\u5e76\u6ca1\u6709\u66f4\u65b0\uff0c\u5219\u5185\u5d4c\u9875\u7684\u6570\u636e\u5c06\u65e0\u6700\u65b0userId"))),(0,l.kt)("h3",{id:"\u6253\u901a\u8bbe\u7f6e"},"\u6253\u901a\u8bbe\u7f6e"),(0,l.kt)("h4",{id:"\u5c0f\u7a0b\u5e8f\u7aef"},"\u5c0f\u7a0b\u5e8f\u7aef"),(0,l.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7aef\u76f8\u5173\u8bbe\u7f6e\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.3/commonlyApi#%E4%B8%8Eh5%E6%89%93%E9%80%9A%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AEgetgioinfo"},"\u4e0eh5\u6253\u901a\u7528\u6237\u6570\u636e")),(0,l.kt)("h4",{id:"web\u7aef"},"Web\u7aef"),(0,l.kt)("p",null,"\u5728\u96c6\u6210\u65f6\u4f7f\u7528\u548c\u5c0f\u7a0b\u5e8f\u76f8\u540c\u7684 accountId \u548c appid \u5373\u53ef\uff0c\u5982\u5c0f\u7a0b\u5e8f\u7684 accountId \u4e3a pid11\uff0cappid \u4e3a wx33"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', 'pid11', 'ds22', 'wx33', {\n    host: 'your apiServerHost',\n    version: '1.0.0'\n});\n")),(0,l.kt)("h3",{id:"\u6253\u901a\u6210\u529f\u6548\u679c-1"},"\u6253\u901a\u6210\u529f\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MinpToH5",src:n(6620).Z,width:"1290",height:"990"}),"\n\u5f53\u89e6\u53d1\u4e86\u6253\u901a\u89c4\u5219\u540e\uff0c\u9ed8\u8ba4h5\u5185\u5d4c\u9875\u4e2d\u53d1\u9001\u6570\u636e\u65f6\u5b57\u6bb5\u7684\u53d8\u5316\u5982\u4e0b\uff0c\u5982\u679c\u914d\u7f6e\u4e86",(0,l.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.3/initSettings#extraparams"},"extraParams"),"\uff0ch5\u5185\u5d4c\u9875\u4e2d\u53d1\u9001\u6570\u636e\u65f6\u4f1a\u589e\u52a0\u914d\u7f6e\u7684\u5b57\u6bb5\u6570\u636e\u3002\n\u5f53\u89e6\u53d1\u4e86\u6253\u901a\u89c4\u5219\u540e\uff0ch5 \u9875\u9762\u7684 Web JS SDK \u8c03\u7528 setUserID\uff0c cleanUserID \u63a5\u53e3\u5c06\u65e0\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tex"},"deviceId: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684deviceId\nsessionId: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684sessionId\ngioId: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684gioId \uff08web\u7248\u672c>=3.3.11\uff0c\u5c0f\u7a0b\u5e8f\u7248\u672c>=3.2.5\uff09\nuserId: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684userId\nuserKey: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684userKey\ndataSourceId: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684dataSourceId\nplatform: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684platform\ndomain: \u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684appId\n")),(0,l.kt)("p",null,"\u7528\u6237\u884c\u4e3a\u4e0e\u91c7\u96c6\u6570\u636e\u63cf\u8ff0\uff1a\u7528\u6237\u70b9\u51fb\u5c0f\u7a0b\u5e8f\u5185\u5d4cH5\u9875\u9762\uff0c\u7531\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762\u8fdb\u5165H5\u9875\u9762\uff0c\u4f1a\u628a\u91c7\u96c6\u6570\u636e\u4e2d\u7684\u4ee5\u4e0a\u5b57\u6bb5\u4fe1\u606f\u5e26\u5165H5\u9875\u9762\uff1b\u8fd9\u6837 Web JS SDK \u5c31\u77e5\u9053 H5\u9875\u9762\u7684\u7528\u6237\u662f\u5c0f\u7a0b\u5e8f\u7684\u7528\u6237\uff0c\u540e\u7eed\u53d1\u9001\u7684\u91c7\u96c6\u6570\u636e\u5c31\u4f1a\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684\u7528\u6237\u4fe1\u606f"),(0,l.kt)("h2",{id:"8-web\u5708\u9009\u63d2\u4ef6"},"8. web\u5708\u9009\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1aweb-circle-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonStart"),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86web\u6ce8\u5165web\u5708\u9009\u811a\u672c\u7684\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"9-hybrid\u5708\u9009\u63d2\u4ef6"},"9. hybrid\u5708\u9009\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1ahybrid-circle-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonStart"),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u5728native app\u4e2d\u76f4\u63a5\u83b7\u53d6hybrid\u9875\u9762\u53ef\u89c6\u533a\u53ef\u5708\u9009\u5143\u7d20\u7684\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"10-\u5f39\u7a97\u63d2\u4ef6"},"10. \u5f39\u7a97\u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u540d\uff1amarketing-plugin"),(0,l.kt)("p",null,"\u76d1\u542c\u65f6\u673a\uff1aonLoad\uff0conComposeAfter"),(0,l.kt)("p",null,"\u5411\u5916\u66b4\u9732",(0,l.kt)("inlineCode",{parentName:"p"},"plugin"),"\u63a5\u53e3\uff0c\u7528\u4e8e\u5f39\u7a97sdk\u7684\u63a5\u5165\u3002\u5177\u4f53\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op/developer-manual/sdkintegrated/mp/js-sdk/web-tan-chuang-sdk"},"Web \u5f39\u7a97 SDK \u63a5\u5165"),"\u3002"))}k.isMDXComponent=!0},6620:function(e,t,n){t.Z=n.p+"assets/images/MinpToH5-e25118b25cd772df15c14da994c3a9a7.png"},1581:function(e,t,n){t.Z=n.p+"assets/images/h5ToApp-df962ec60ecbd3f2a770def361d33d05.png"}}]);