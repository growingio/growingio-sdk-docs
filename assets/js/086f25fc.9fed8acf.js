"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8968],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=d(n),s=r,c=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?a.createElement(c,i(i({ref:e},k),{},{components:n})):a.createElement(c,i({ref:e},k))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3195:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,title:"\u6570\u636e\u91c7\u96c6API"},i=void 0,o={unversionedId:"framework/harmonyos/api",id:"framework/harmonyos/api",title:"\u6570\u636e\u91c7\u96c6API",description:"\u521d\u59cb\u5316\u662f\u5426\u6210\u529f",source:"@site/docs/framework/harmonyos/api.md",sourceDirName:"framework/harmonyos",slug:"/framework/harmonyos/api",permalink:"/growingio-sdk-docs/docs/framework/harmonyos/api",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/framework/harmonyos/api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u6570\u636e\u91c7\u96c6API"},sidebar:"docSidebar",previous:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/framework/harmonyos/Configuration"},next:{title:"GioKit",permalink:"/growingio-sdk-docs/docs/giokit"}},p={},d=[{value:"\u521d\u59cb\u5316\u662f\u5426\u6210\u529f",id:"\u521d\u59cb\u5316\u662f\u5426\u6210\u529f",level:3},{value:"\u6570\u636e\u91c7\u96c6\u5f00\u5173",id:"\u6570\u636e\u91c7\u96c6\u5f00\u5173",level:3},{value:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237 ID",id:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237-id",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u6e05\u9664\u767b\u5f55\u7528\u6237 ID",id:"\u6e05\u9664\u767b\u5f55\u7528\u6237-id",level:3},{value:"\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",id:"\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",id:"\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",level:3},{value:"\u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6",id:"\u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-2",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"\u4e8b\u4ef6\u8ba1\u65f6\u5668",id:"\u4e8b\u4ef6\u8ba1\u65f6\u5668",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-3",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4},{value:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",id:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-4",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:4},{value:"\u83b7\u53d6\u8bbe\u5907 ID",id:"\u83b7\u53d6\u8bbe\u5907-id",level:3},{value:"\u57cb\u70b9\u4e8b\u4ef6\u901a\u7528\u5c5e\u6027",id:"\u57cb\u70b9\u4e8b\u4ef6\u901a\u7528\u5c5e\u6027",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:4}],k={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u662f\u5426\u6210\u529f"},"\u521d\u59cb\u5316\u662f\u5426\u6210\u529f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static isInitializedSuccessfully(): boolean")),(0,r.kt)("p",null,"\u8fd4\u56de\u662f\u5426\u521d\u59cb\u5316\u6210\u529f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let success = GrowingAnalytics.isInitializedSuccessfully()\n")),(0,r.kt)("h3",{id:"\u6570\u636e\u91c7\u96c6\u5f00\u5173"},"\u6570\u636e\u91c7\u96c6\u5f00\u5173"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static setDataCollectionEnabled(enabled: boolean)")),(0,r.kt)("p",null,"\u6253\u5f00\u6216\u5173\u95ed\u6570\u636e\u91c7\u96c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.setDataCollectionEnabled(true)\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237-id"},"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237 ID"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static setLoginUserId(userId: string, userKey: string = '')")),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528\uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237 ID \u548c\u7528\u6237 Key\n\u5982\u679c\u60a8\u7684 App \u6bcf\u6b21\u7528\u6237\u5347\u7ea7\u7248\u672c\u65f6\u65e0\u9700\u91cd\u65b0\u767b\u5f55\u7684\u8bdd\uff0c\u4e3a\u9632\u6b62\u7528\u6237\u672c\u5730\u7f13\u5b58\u88ab\u6e05\u9664\u5bfc\u81f4\u7684\u65e0\u6cd5\u88ab\u8bc6\u522b\u4e3a\u767b\u5f55\u7528\u6237\uff0c\u5efa\u8bae\u5728\u7528\u6237\u6bcf\u6b21\u5347\u7ea7 App \u7248\u672c\u540e\u521d\u6b21\u8bbf\u95ee\u65f6\u91cd\u65b0\u8c03\u7528 setLoginUserId \u65b9\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u7528\u6237 Key \u9700\u5728\u521d\u59cb\u5316 SDK \u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"strong"},"config.idMappingEnabled = true")))),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u9650\u5236\u5927\u4e8e 0 \u4e14\u5c0f\u4e8e\u7b49\u4e8e 1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userkey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u9650\u5236\u5927\u4e8e 0 \u4e14\u5c0f\u4e8e\u7b49\u4e8e 1000\uff0c\u9ed8\u8ba4\u4e3a ''")))),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.setLoginUserId('user')\nGrowingAnalytics.setLoginUserId('user', 'harmony')\n")),(0,r.kt)("h3",{id:"\u6e05\u9664\u767b\u5f55\u7528\u6237-id"},"\u6e05\u9664\u767b\u5f55\u7528\u6237 ID"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static cleanLoginUserId()")),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.cleanLoginUserId()\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"},"\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static setLocation(latitude: number, longitude: number)")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u57fa\u4e8eWGS-84\u5750\u6807"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5730\u7406\u5750\u6807\u70b9\u7eac\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5730\u7406\u5750\u6807\u70b9\u7ecf\u5ea6")))),(0,r.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const latitude: number = 30.0\nconst longitude: number = 120.0\nGrowingAnalytics.setLocation(latitude, longitude)\n")),(0,r.kt)("h3",{id:"\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"},"\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static cleanLocation()")),(0,r.kt)("p",null,"\u6e05\u9664\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.cleanLocation()\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6"},"\u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static track(eventName: string, attributes: { [key: string]: string | number | boolean | string[] | number[] | boolean[] } = {})")),(0,r.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\uff1b\u6ce8\u610f\uff1a\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728\u5206\u6790\u4e91\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"{ ","[key: string]",": string ","|"," number ","|"," boolean ","|"," string[] ","|"," number[] ","|"," boolean[] }")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff1b\u5f53\u4e8b\u4ef6\u5c5e\u6027\u5173\u8054\u6709\u7ef4\u5ea6\u8868\u65f6\uff0c\u5c5e\u6027\u503c\u4e3a\u5bf9\u5e94\u7684\u7ef4\u5ea6\u8868\u6a21\u578b ID(\u8bb0\u5f55 ID)\uff08\u53ef\u9009\uff09")))),(0,r.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.track('buyProduct1')\n\nGrowingAnalytics.track('buyProduct2', {\n  'name': 'apple',\n  'money': 1000,\n  'num': 100,\n  'from': ['sichuan', 'guizhou', 'hunan']\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://growingio.github.io/growingio-sdk-docs/knowledge/basicknowledge/trackEventUse#%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u57cb\u70b9\u4e8b\u4ef6\u793a\u4f8b"))),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u8ba1\u65f6\u5668"},"\u4e8b\u4ef6\u8ba1\u65f6\u5668"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static async trackTimerStart(eventName: string): Promise<string>")),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a\u4e8b\u4ef6\u8ba1\u65f6\u5668\uff0c\u53c2\u6570\u4e3a\u8ba1\u65f6\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u540d\u79f0\uff0c\u8fd4\u56de\u503c\u4e3a\u8be5\u4e8b\u4ef6\u8ba1\u65f6\u5668\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static async trackTimerPause(timerId: string)")),(0,r.kt)("p",null,"\u6682\u505c\u4e8b\u4ef6\u8ba1\u65f6\u5668\uff0c\u53c2\u6570\u4e3a trackTimer \u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static async trackTimerResume(timerId: string)")),(0,r.kt)("p",null,"\u6062\u590d\u4e8b\u4ef6\u8ba1\u65f6\u5668\uff0c\u53c2\u6570\u4e3a trackTimer \u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static async trackTimerEnd(timerId: string, attributes: { [key: string]: string | number | boolean | string[] | number[] | boolean[] } = {})")),(0,r.kt)("p",null,"\u505c\u6b62\u4e8b\u4ef6\u8ba1\u65f6\u5668\uff0c\u53c2\u6570\u4e3a trackTimer \u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6\u3002\u8c03\u7528\u8be5\u63a5\u53e3\u4f1a\u81ea\u52a8\u89e6\u53d1\u5220\u9664\u5b9a\u65f6\u5668\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static removeTimer(timerId: string)")),(0,r.kt)("p",null,"\u5220\u9664\u4e8b\u4ef6\u8ba1\u65f6\u5668\uff0c\u53c2\u6570\u4e3a trackTimer \u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6\u3002\n\u8be5\u63a5\u53e3\u4f1a\u5c06\u6807\u8bc6\u4e3a timerId \u7684\u8ba1\u65f6\u5668\u7f6e\u4e3a\u7a7a\u3002\u8c03\u7528\u505c\u6b62\u8ba1\u65f6\u5668\u63a5\u53e3\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u8be5\u63a5\u53e3\u3002\u6ce8\u610f\u79fb\u9664\u65f6\u4e0d\u8bba\u8ba1\u65f6\u5668\u5904\u4e8e\u4ec0\u4e48\u72b6\u6001\uff0c\u90fd\u4e0d\u4f1a\u53d1\u9001\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static clearTrackTimer()")),(0,r.kt)("p",null,"\u6e05\u9664\u6240\u6709\u5df2\u7ecf\u6ce8\u518c\u7684\u4e8b\u4ef6\u8ba1\u65f6\u5668\u3002\n\u5b58\u5728\u6240\u6709\u8ba1\u65f6\u5668\u9700\u8981\u6e05\u9664\u65f6\u8c03\u7528\u3002\u6ce8\u610f\u79fb\u9664\u65f6\u4e0d\u8bba\u8ba1\u65f6\u5668\u5904\u4e8e\u4ec0\u4e48\u72b6\u6001\uff0c\u90fd\u4e0d\u4f1a\u53d1\u9001\u4e8b\u4ef6\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-3"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"{ ","[key: string]",": string ","|"," number ","|"," boolean ","|"," string[] ","|"," number[] ","|"," boolean[] }")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff1b\u5f53\u4e8b\u4ef6\u5c5e\u6027\u5173\u8054\u6709\u7ef4\u5ea6\u8868\u65f6\uff0c\u5c5e\u6027\u503c\u4e3a\u5bf9\u5e94\u7684\u7ef4\u5ea6\u8868\u6a21\u578b ID(\u8bb0\u5f55 ID)\uff08\u53ef\u9009\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timerId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba1\u65f6\u5668\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u7531",(0,r.kt)("inlineCode",{parentName:"td"},"trackTimerStart"),"\u8fd4\u56de")))),(0,r.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let timerId = await GrowingAnalytics.trackTimerStart('eventName')\nGrowingAnalytics.trackTimerPause(timerId)\nGrowingAnalytics.trackTimerResume(timerId)\nGrowingAnalytics.trackTimerEnd(timerId)\nGrowingAnalytics.trackTimerEnd(timerId, {\n  'property': 'value',\n  'property2': 100\n})\nGrowingAnalytics.removeTimer(timerId)\nGrowingAnalytics.clearTrackTimer()\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"endTimer \u65f6\u53d1\u9001 CUSTOM \u4e8b\u4ef6\u4e0a\u62a5\u6570\u636e\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"eventName \u57cb\u70b9\u4e8b\u4ef6\u6807\u8bc6\u7b26\uff08trackTimerStart \u4f20\u5165\uff09"),(0,r.kt)("li",{parentName:"ul"},"attributes \u7528\u6237\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5c5e\u6027\uff08trackTimerEnd \u4f20\u5165\uff09"),(0,r.kt)("li",{parentName:"ul"},"event_duration \u4e8b\u4ef6\u65f6\u957f \uff08SDK \u5185\u90e8\u6839\u636e timerId \u81ea\u52a8\u8ba1\u7b97\u83b7\u53d6 \uff09\nevent_duration \u6309\u7167\u79d2\u4e0a\u62a5\uff0c\u5c0f\u6570\u70b9\u7cbe\u5ea6\u4fdd\u8bc1\u5230\u6beb\u79d2\nevent_duration \u53d8\u91cf\u53ca\u5176\u503c\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5728 attributes \u4e2d\nevent_duration \u65f6\u95f4\u7edf\u8ba1\u4e0d\u4f1a\u8ba1\u7b97\u540e\u53f0\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"eventName \u5bf9\u5e94\u7684\u57cb\u70b9\u4e8b\u4ef6\u9700\u8981\u5728\u5e73\u53f0\u4e2d",(0,r.kt)("strong",{parentName:"li"},"\u7ed1\u5b9a"),"\u6807\u8bc6\u7b26\u4e3a event_duration\uff0c \u4e14\u7c7b\u578b\u4e3a\u5c0f\u6570\u7684\u4e8b\u4ef6\u5c5e\u6027"))),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"},"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static setLoginUserAttributes(attributes: { [key: string]: string | number | boolean | string[] | number[] | boolean[] })")),(0,r.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-4"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"{ ","[key: string]",": string ","|"," number ","|"," boolean ","|"," string[] ","|"," number[] ","|"," boolean[] }")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c5e\u6027\u4fe1\u606f")))),(0,r.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.setLoginUserAttributes({\n  'name': 'ben',\n  'age': 30\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://growingio.github.io/growingio-sdk-docs/knowledge/basicknowledge/trackEventUse#%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\u793a\u4f8b"))),(0,r.kt)("h3",{id:"\u83b7\u53d6\u8bbe\u5907-id"},"\u83b7\u53d6\u8bbe\u5907 ID"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static getDeviceId(): string")),(0,r.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907 id\uff0c\u53c8\u79f0\u4e3a\u533f\u540d\u7528\u6237 id\uff0cSDK \u81ea\u52a8\u751f\u6210\u7528\u6765\u5b9a\u4e49\u552f\u4e00\u8bbe\u5907"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let deviceId = GrowingAnalytics.getDeviceId()\n")),(0,r.kt)("h3",{id:"\u57cb\u70b9\u4e8b\u4ef6\u901a\u7528\u5c5e\u6027"},"\u57cb\u70b9\u4e8b\u4ef6\u901a\u7528\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static setGeneralProps(props: { [key: string]: string | number | boolean | string[] | number[] | boolean[] })")),(0,r.kt)("p",null,"\u4e3a\u6240\u6709\u81ea\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6\u8bbe\u7f6e\u901a\u7528\u5c5e\u6027\uff0c\u591a\u6b21\u8c03\u7528\uff0c\u76f8\u540c\u5b57\u6bb5\u7684\u65b0\u503c\u5c06\u8986\u76d6\u65e7\u503c\uff1b\u9700\u5728\u5206\u6790\u4e91\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static removeGeneralProps(keys: string[])")),(0,r.kt)("p",null,"\u79fb\u9664\u6307\u5b9a\u5b57\u6bb5\u7684\u57cb\u70b9\u4e8b\u4ef6\u901a\u7528\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static clearGeneralProps()")),(0,r.kt)("p",null,"\u79fb\u9664\u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u901a\u7528\u5c5e\u6027"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-5"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"{ ","[key: string]",": string ","|"," number ","|"," boolean ","|"," string[] ","|"," number[] ","|"," boolean[] }")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff1b\u5f53\u4e8b\u4ef6\u5c5e\u6027\u5173\u8054\u6709\u7ef4\u5ea6\u8868\u65f6\uff0c\u5c5e\u6027\u503c\u4e3a\u5bf9\u5e94\u7684\u7ef4\u5ea6\u8868\u6a21\u578b ID(\u8bb0\u5f55 ID)")))),(0,r.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"GrowingAnalytics.setGeneralProps({\n  'prop1': 10,\n  'prop2': 'name',\n  'prop3': [1, 2, 3],\n  'prop4': ['a', 'b', 'c'],\n  'name': 'banana'\n})\nGrowingAnalytics.removeGeneralProps(['prop1', 'prop2', 'prop3'])\nGrowingAnalytics.clearGeneralProps()\n")))}m.isMDXComponent=!0}}]);