"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5,title:"HarmonyOS SDK \u5408\u89c4\u8bf4\u660e"},i=void 0,l={unversionedId:"compliance/harmonyosCompliance",id:"compliance/harmonyosCompliance",title:"HarmonyOS SDK \u5408\u89c4\u8bf4\u660e",description:"\u9690\u79c1\u534f\u8bae",source:"@site/knowledge/compliance/harmonyosCompliance.md",sourceDirName:"compliance",slug:"/compliance/harmonyosCompliance",permalink:"/growingio-sdk-docs/knowledge/compliance/harmonyosCompliance",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/compliance/harmonyosCompliance.md",tags:[],version:"current",lastUpdatedAt:1704420006,formattedLastUpdatedAt:"Jan 5, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"HarmonyOS SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"knowledge",previous:{title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/knowledge/compliance/minpCompliance"},next:{title:"Debug \u548c\u6821\u9a8c",permalink:"/growingio-sdk-docs/knowledge/debugverify"}},p={},c=[{value:"\u9690\u79c1\u534f\u8bae",id:"\u9690\u79c1\u534f\u8bae",level:2},{value:"\u9690\u79c1\u534f\u8bae\u586b\u5199",id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",level:2},{value:"\u6536\u96c6\u548c\u83b7\u53d6",id:"\u6536\u96c6\u548c\u83b7\u53d6",level:3},{value:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",level:3},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"\u91c7\u96c6\u8be6\u60c5",id:"\u91c7\u96c6\u8be6\u60c5",level:2},{value:"\u8bbe\u5907\u6743\u9650",id:"\u8bbe\u5907\u6743\u9650",level:3},{value:"\u5ef6\u8fdf\u521d\u59cb\u5316",id:"\u5ef6\u8fdf\u521d\u59cb\u5316",level:2},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2}],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9690\u79c1\u534f\u8bae"},"\u9690\u79c1\u534f\u8bae"),(0,a.kt)("p",null,"\u6839\u636e",(0,a.kt)("a",{parentName:"p",href:"http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm"},"\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u5173\u4e8e\u5f00\u5c55\u7eb5\u6df1\u63a8\u8fdbAPP\u4fb5\u5bb3\u7528\u6237\u6743\u76ca\u4e13\u9879\u6574\u6cbb\u884c\u52a8"),"\n\uff0cApp \u9700\u8981\u901a\u8fc7\u9690\u79c1\u534f\u8bae\u8bf4\u660e\u5e94\u7528\u91c7\u96c6\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4e3a\u786e\u4fdd\u60a8\u7684App\u5728\u96c6\u6210 GrowingIO SDK \u4e4b\u540e\uff0c\u80fd\u591f\u6ee1\u8db3\u5de5\u4fe1\u90e8\u76f8\u5173\u5408\u89c4\u8981\u6c42\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8bf4\u660e\u3002"),(0,a.kt)("h2",{id:"\u9690\u79c1\u534f\u8bae\u586b\u5199"},"\u9690\u79c1\u534f\u8bae\u586b\u5199"),(0,a.kt)("h3",{id:"\u6536\u96c6\u548c\u83b7\u53d6"},"\u6536\u96c6\u548c\u83b7\u53d6"),(0,a.kt)("p",null,"\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u6536\u96c6\u548c\u83b7\u5f97\u7684\u4e2a\u4eba\u4fe1\u606f\u680f\u76ee\u4e2d\u6839\u636e",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u60c5\u51b5"),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\u3001IP\u5730\u5740\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002 \n")),(0,a.kt)("p",null,"\u53ef\u5728\u7b2c\u4e09\u65b9SDK\u5217\u8868\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9(\u8bbe\u5907\u4fe1\u606f\u6309\u7167",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u60c5\u51b5"),"\u586b\u5199)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GrowingIO HarmonyOS SDK\n\u7528\u9014\uff1a\u5206\u6790\u6536\u96c6\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f(App)\u7528\u6237\u7684\u4f7f\u7528\u60c5\u51b5\n\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\u7c7b\u578b\uff1a\u8bbe\u5907\u7c7b\u578b\uff0c\u8bbe\u5907\u7248\u672c\uff0c\u7cfb\u7edf\u7248\u672c\uff0c\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u7f51\u7edc\u8bbe\u5907\u5236\u9020\u5546\uff0cIP\u5730\u5740\uff0c\u7f51\u7edc\u6a21\u5f0f\n\u63d0\u4f9b\u65b9\uff1a\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\n\u7b2c\u4e09\u65b9SDK\u9690\u79c1\u534f\u8bae\u94fe\u63a5\uff1ahttps://accounts.growingio.com/user-privacy\n")),(0,a.kt)("h3",{id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"},"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"),(0,a.kt)("p",null,"\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u7684\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab\u680f\u76ee\u4e2d\u6839\u636e",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u60c5\u51b5"),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\u3001IP\u5730\u5740\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n")),(0,a.kt)("h2",{id:"\u5408\u89c4\u6b65\u9aa4"},"\u5408\u89c4\u6b65\u9aa4"),(0,a.kt)("p",null,"1.\u60a8\u9700\u8981\u786e\u4fdd App \u6709\u300a\u9690\u79c1\u534f\u8bae\u300b\uff0c\u5e76\u4e14\u5728\u7528\u6237\u7b2c\u4e00\u6b21\u542f\u52a8 App \u65f6\u5c31\u80fd\u5411\u7528\u6237\u5c55\u793a\u5e76\u53d6\u5f97\u7528\u6237\u540c\u610f\uff1b"),(0,a.kt)("p",null,"2.\u8bf7\u52a1\u5fc5\u544a\u77e5\u7528\u6237\u60a8\u4f7f\u7528\u4e86 GrowingIO SDK\uff0c\u8bf7\u5728 \u300a\u9690\u79c1\u534f\u8bae\u300b \u4e2d\u6dfb\u52a0\u9690\u79c1\u6761\u6b3e\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"#%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE%E5%A1%AB%E5%86%99"},"\u9690\u79c1\u534f\u8bae\u586b\u5199")),(0,a.kt)("p",null,"3.\u96c6\u6210 ",(0,a.kt)("a",{parentName:"p",href:"/docs/framework/harmonyos"},"HarmonyOS SDK"),"\uff0c\u8bf7\u5728\u7528\u6237\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u540e ",(0,a.kt)("a",{parentName:"p",href:"#%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96"},"\u5ef6\u8fdf\u521d\u59cb\u5316 SDK"),"\u3002\n\u200b"),(0,a.kt)("h2",{id:"\u91c7\u96c6\u8be6\u60c5"},"\u91c7\u96c6\u8be6\u60c5"),(0,a.kt)("h3",{id:"\u8bbe\u5907\u6743\u9650"},"\u8bbe\u5907\u6743\u9650"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u6743\u9650"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ohos.permission.INTERNET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u8054\u7f51\u548c\u53d1\u9001\u7edf\u8ba1\u6570\u636e\u7684\u6743\u9650\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1\u3002\u5fc5\u987b\u6743\u9650")))),(0,a.kt)("h2",{id:"\u5ef6\u8fdf\u521d\u59cb\u5316"},"\u5ef6\u8fdf\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u540e\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"await GrowingAnalytics.start(this.context, config)")," \u8fdb\u884c SDK \u7684\u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5728 UIAbility \u4e2d\u540c\u610f\u9690\u79c1\u6761\u6b3e\u540e\u521d\u59cb\u5316 SDK\nexport default class EntryAbility extends UIAbility {\n    onCreate(want, launchParam) {\n        if (<\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n            // \u5c55\u793a\u9690\u79c1\u534f\u8bae\u5f39\u7a97\uff0c\u7b49\u5f85\u7528\u6237\u540c\u610f\n            ...\n\n            if (<\u7528\u6237\u540c\u610f\u4e86\u9690\u79c1\u534f\u8bae>){\n                //GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n                ...\n            }\n        } else {\n            //\u7528\u6237\u5df2\u7ecf\u540c\u610f\u9690\u79c1\u534f\u8bae\n            //GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n            ...\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"},"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"),(0,a.kt)("p",null,"HarmonyOS SDK \u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u652f\u6301\u8bbe\u7f6e\u53d1\u9001\u95f4\u9694\uff0c\u9ed8\u8ba415\u79d2\uff0cSDK \u4f1a\u5148\u5c06\u884c\u4e3a\u6570\u636e\u5b58\u5165 App \u672c\u5730 sqlite \u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u95f4\u9694\u65f6\u95f4\u5411\u670d\u52a1\u5668\u53d1\u9001\u884c\u4e3a\u6570\u636e\u5305\uff08\u6700\u5927 500 \u6761\u884c\u4e3a\u6570\u636e\uff09\uff0c\u5982\u679c\u5f85\u53d1\u9001\u884c\u4e3a\u6570\u636e\u91cf\u5927\u4e8e500\u6761\uff0c\u5219\u53d1\u9001\u81f3\u6240\u6709\u6570\u636e\u53d1\u9001\u5b8c\u6210\uff0c\u884c\u4e3a\u6570\u636e\u53d1\u9001\u6210\u529f\u540e\u5c06\u5728\u6570\u636e\u5e93\u4e2d\u5220\u9664\u3002\u6570\u636e\u5e93\u4e2d\u672a\u53d1\u9001\u7684\u884c\u4e3a\u6570\u636e\u4f1a\u57287\u5929\u4e4b\u540e\u5220\u9664\u3002"))}d.isMDXComponent=!0}}]);