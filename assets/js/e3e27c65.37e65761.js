"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Android SDK \u5408\u89c4\u8bf4\u660e"},o=void 0,l={unversionedId:"compliance/androidCompliance",id:"compliance/androidCompliance",title:"Android SDK \u5408\u89c4\u8bf4\u660e",description:"\u9690\u79c1\u534f\u8bae",source:"@site/docs/compliance/androidCompliance.md",sourceDirName:"compliance",slug:"/compliance/androidCompliance",permalink:"/growingio-sdk-docs/docs/compliance/androidCompliance",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/compliance/androidCompliance.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Android SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u5b89\u5168\u548c\u4fe1\u606f\u4fdd\u62a4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/"},next:{title:"iOS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/iosCompliance"}},p={},d=[{value:"\u9690\u79c1\u534f\u8bae",id:"\u9690\u79c1\u534f\u8bae",level:2},{value:"\u9690\u79c1\u534f\u8bae\u586b\u5199",id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",level:2},{value:"\u6536\u96c6\u548c\u83b7\u53d6",id:"\u6536\u96c6\u548c\u83b7\u53d6",level:3},{value:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",level:3},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"\u91c7\u96c6\u8be6\u60c5",id:"\u91c7\u96c6\u8be6\u60c5",level:2},{value:"\u4e2a\u4eba\u4fe1\u606f\u5b57\u6bb5\u91c7\u96c6",id:"\u4e2a\u4eba\u4fe1\u606f\u5b57\u6bb5\u91c7\u96c6",level:3},{value:"Android \u8bbe\u5907\u6743\u9650",id:"android-\u8bbe\u5907\u6743\u9650",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u65b9\u5f0f\u4e00\u3001\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173",id:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173",level:3},{value:"\u65b9\u5f0f\u4e8c\u3001\u5ef6\u8fdf\u521d\u59cb\u5316",id:"\u65b9\u5f0f\u4e8c\u5ef6\u8fdf\u521d\u59cb\u5316",level:3},{value:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",level:2},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2},{value:"\u5176\u4ed6\u8bf4\u660e",id:"\u5176\u4ed6\u8bf4\u660e",level:2},{value:"\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0b\u4fe1\u606f",id:"\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0b\u4fe1\u606f",level:3},{value:"\u96c6\u6210OAID SDK",id:"\u96c6\u6210oaid-sdk",level:3},{value:"\u5173\u4e8e Google Play",id:"\u5173\u4e8e-google-play",level:3},{value:"\u5173\u4e8e GDPR",id:"\u5173\u4e8e-gdpr",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u9690\u79c1\u534f\u8bae"},"\u9690\u79c1\u534f\u8bae"),(0,r.kt)("p",null,"\u6839\u636e",(0,r.kt)("a",{parentName:"p",href:"http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm"},"\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u5173\u4e8e\u5f00\u5c55\u7eb5\u6df1\u63a8\u8fdbAPP\u4fb5\u5bb3\u7528\u6237\u6743\u76ca\u4e13\u9879\u6574\u6cbb\u884c\u52a8"),"\n\uff0cApp \u9700\u8981\u901a\u8fc7\u9690\u79c1\u534f\u8bae\u8bf4\u660e\u5e94\u7528\u91c7\u96c6\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4e3a\u786e\u4fdd\u60a8\u7684App\u5728\u96c6\u6210 GrowingIO SDK \u4e4b\u540e\uff0c\u80fd\u591f\u6ee1\u8db3\u5de5\u4fe1\u90e8\u76f8\u5173\u5408\u89c4\u8981\u6c42\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8bf4\u660e\u3002"),(0,r.kt)("h2",{id:"\u9690\u79c1\u534f\u8bae\u586b\u5199"},"\u9690\u79c1\u534f\u8bae\u586b\u5199"),(0,r.kt)("h3",{id:"\u6536\u96c6\u548c\u83b7\u53d6"},"\u6536\u96c6\u548c\u83b7\u53d6"),(0,r.kt)("p",null,"\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u6536\u96c6\u548c\u83b7\u5f97\u7684\u4e2a\u4eba\u4fe1\u606f\u680f\u76ee\u4e2d\u6839\u636e",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u60c5\u51b5"),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\u3001`AndroidID`\u3001`IMEI` \u3001IP\u5730\u5740\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002 \n")),(0,r.kt)("p",null,"\u53ef\u5728\u7b2c\u4e09\u65b9SDK\u5217\u8868\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9(\u8bbe\u5907\u4fe1\u606f\u6309\u7167",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u60c5\u51b5"),"\u586b\u5199)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GIO\u79fb\u52a8\u7aef SDK\n\u7528\u9014\uff1a\u5206\u6790\u6536\u96c6\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f(App)\u7528\u6237\u7684\u4f7f\u7528\u60c5\u51b5\n\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\u7c7b\u578b\uff1a\u8bbe\u5907\u6807\u8bc6\u4fe1\u606f\uff08\u5982IMEI\u3001Android ID\u3001OAID\uff09\uff0c\u8bbe\u5907\u7c7b\u578b\uff0c\u8bbe\u5907\u7248\u672c\uff0c\u7cfb\u7edf\u7248\u672c\uff0c\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u7f51\u7edc\u8bbe\u5907\u5236\u9020\u5546\uff0cIP\u5730\u5740\uff0c\u7f51\u7edc\u6a21\u5f0f\n\u63d0\u4f9b\u65b9\uff1a\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\n\u7b2c\u4e09\u65b9SDK\u9690\u79c1\u534f\u8bae\u94fe\u63a5\uff1ahttps://accounts.growingio.com/user-privacy\n")),(0,r.kt)("h3",{id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"},"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"),(0,r.kt)("p",null,"\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u7684\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab\u680f\u76ee\u4e2d\u6839\u636e",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u60c5\u51b5"),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\u3001`AndroidID`\u3001`IMEI` \u3001IP\u5730\u5740\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n")),(0,r.kt)("h2",{id:"\u5408\u89c4\u6b65\u9aa4"},"\u5408\u89c4\u6b65\u9aa4"),(0,r.kt)("p",null,"1.\u60a8\u9700\u8981\u786e\u4fdd App \u6709\u300a\u9690\u79c1\u534f\u8bae\u300b\uff0c\u5e76\u4e14\u5728\u7528\u6237\u7b2c\u4e00\u6b21\u542f\u52a8 App \u65f6\u5c31\u80fd\u5411\u7528\u6237\u5c55\u793a\u5e76\u53d6\u5f97\u7528\u6237\u540c\u610f\uff1b"),(0,r.kt)("p",null,"2.\u8bf7\u52a1\u5fc5\u544a\u77e5\u7528\u6237\u60a8\u4f7f\u7528\u4e86 GrowingIO SDK\uff0c\u8bf7\u5728 \u300a\u9690\u79c1\u534f\u8bae\u300b \u4e2d\u6dfb\u52a0\u9690\u79c1\u6761\u6b3e\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE%E5%A1%AB%E5%86%99"},"\u9690\u79c1\u534f\u8bae\u586b\u5199")),(0,r.kt)("p",null,"3.\u96c6\u6210 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android"},"Android SDK"),"\uff0c\u8bf7\u5728\u7528\u6237\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u540e ",(0,r.kt)("a",{parentName:"p",href:"#%E6%96%B9%E5%BC%8F%E4%B8%80%E8%AE%BE%E7%BD%AE%E6%95%B0%E6%8D%AE%E6%94%B6%E9%9B%86%E5%BC%80%E5%85%B3"},"\u6253\u5f00 SDK \u7684\u6570\u636e\u6536\u96c6\u5f00\u5173\uff08\u63a8\u8350\uff09")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"#%E6%96%B9%E5%BC%8F%E4%BA%8C%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96"},"\u5ef6\u8fdf\u521d\u59cb\u5316 SDK"),"\u3002\n\u200b"),(0,r.kt)("h2",{id:"\u91c7\u96c6\u8be6\u60c5"},"\u91c7\u96c6\u8be6\u60c5"),(0,r.kt)("h3",{id:"\u4e2a\u4eba\u4fe1\u606f\u5b57\u6bb5\u91c7\u96c6"},"\u4e2a\u4eba\u4fe1\u606f\u5b57\u6bb5\u91c7\u96c6"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u91c7\u96c6\u552f\u4e00\u8bbe\u5907\u8bc6\u522b\u7801\uff08\u5982IMEI/AndroidID/IP\u5730\u5740\uff09\u5bf9\u7528\u6237\u8fdb\u884c\u552f\u4e00\u6807\u8bc6\uff0c\u4ee5\u4fbf\u8fdb\u884c\u8bf8\u5982\u7528\u6237\u8bbf\u95ee\u91cf\uff0c\u5e7f\u544a\u7b49\u6570\u636e\u7edf\u8ba1\u3002\u5728\u65e0\u6cd5\u83b7\u53d6\u8bbe\u5907\u8bc6\u522b\u7801\u7684\u60c5\u51b5\u4e0b\uff08\u5982Android\u9ad8\u7248\u672cAPI\u9650\u5236\uff09\uff0c\u6211\u4eec\u63a8\u8350\u96c6\u6210\u7531",(0,r.kt)("a",{parentName:"p",href:"http://www.msa-alliance.cn/"},"\u79fb\u52a8\u5b89\u5168\u8054\u76dfMSA"),"\u63d0\u4f9b\u7684 Oaid SDK \u4f5c\u4e3a\u8bbe\u5907\u552f\u4e00\u8bc6\u522b\u7801\uff0c\u4ee5\u4fbf\u6b63\u5e38\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"android-\u8bbe\u5907\u6743\u9650"},"Android \u8bbe\u5907\u6743\u9650"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6743\u9650"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"android.permission.INTERNET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u8054\u7f51\u548c\u53d1\u9001\u7edf\u8ba1\u6570\u636e\u7684\u6743\u9650\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1\u3002\u5fc5\u987b\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"android.permission.ACCESS_NETWORK_STATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u68c0\u6d4b\u8054\u7f51\u65b9\u5f0f\uff0c\u5728\u7f51\u7edc\u5f02\u5e38\u72b6\u6001\u4e0b\u907f\u514d\u6570\u636e\u53d1\u9001\uff0c\u8282\u7701\u6d41\u91cf\u548c\u7535\u91cf\u3002\u5fc5\u987b\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"android.permission.ACCESS_WIFI_STATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u83b7\u53d6WIFI\u7f51\u7edc\u7c7b\u578b\uff0c\u68c0\u6d4b\u8054\u7f51\u65b9\u5f0f\uff0c\u8282\u7701\u6d41\u91cf\u548c\u7535\u91cf\u3002\u5fc5\u987b\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"android.permission.READ_PHONE_STATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u83b7\u53d6\u7528\u6237\u8bbe\u5907\u7684IMEI\uff0c\u901a\u8fc7IMEI\u5bf9\u7528\u6237\u8fdb\u884c\u552f\u4e00\u6807\u8bc6\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1\u3002(\u53ea\u5728Android 10\u4ee5\u4e0b\u53ef\u7528\uff0c10\u4ee5\u4e0a\u5df2\u65e0\u6cd5\u83b7\u53d6)\u3002\u53ef\u9009\u6743\u9650")))),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173"},"\u65b9\u5f0f\u4e00\u3001\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173"),(0,r.kt)("p",null,"GrowingIO SDK \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"setDataCollectionEnabled"),"\u63a5\u53e3\uff0c\u53ef\u5728\u7528\u6237\u4e0d\u540c\u610f\u6570\u636e\u91c7\u96c6\u65f6\uff0c\u8c03\u7528\u8be5\u63a5\u53e3\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u7981\u6b62\u6570\u636e\u91c7\u96c6\uff1b\u5728\u7528\u6237\u540c\u610f\u6570\u636e\u91c7\u96c6\u65f6\uff0c\u8c03\u7528\u8be5\u63a5\u53e3\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u5f00\u542f\u6570\u636e\u91c7\u96c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Application \u7684 onCreate() \u65b9\u6cd5\u4e2d\u4e3b\u7ebf\u7a0b\u521d\u59cb\u5316 SDK\npublic class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        boolean isAgreePolicy = <\u7528\u6237\u662f\u5426\u540c\u610f\u4e86\u9690\u79c1\u534f\u8bae>;\n        CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("AccountId", "URLScheme")\n            .setDataCollectionServerHost("ServerHost")\n            .setDataSourceId("DataSourceId")\n            .setDataCollectionEnabled(isAgreePolicy);\n        GrowingTracker.startWithConfiguration(this, sConfiguration);\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u5728 Activity \u4e2d\u540c\u610f\u9690\u79c1\u6761\u6b3e\u540e\u91cd\u65b0\u6253\u5f00SDK\u7684\u6570\u636e\u6536\u96c6\u529f\u80fd\npublic class MyActivity extends Activity {\n    @Override\n    public void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n\n        if (<\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n            // \u5c55\u793a\u9690\u79c1\u534f\u8bae\u5f39\u7a97\uff0c\u7b49\u5f85\u7528\u6237\u540c\u610f\n            if (<\u7528\u6237\u5df2\u7ecf\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n                //\u6253\u5f00SDK\u7684\u6570\u636e\u6536\u96c6\u529f\u80fd\n                GrowingAutotracker.get().setDataCollectionEnabled(true);\n            }\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e8c\u5ef6\u8fdf\u521d\u59cb\u5316"},"\u65b9\u5f0f\u4e8c\u3001\u5ef6\u8fdf\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u540e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"GrowingTracker.startWithConfiguration")," \u8fdb\u884cSDK\u7684\u521d\u59cb\u5316\uff0c\u6b64\u540e\u5728 Application \u7684 onCreate() \u65b9\u6cd5\u4e3b\u7ebf\u7a0b\u4e2d\u521d\u59cb\u5316 SDK\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u5728 Activity \u4e2d\u540c\u610f\u9690\u79c1\u6761\u6b3e\u540e\u521d\u59cb\u5316 SDK\npublic class MyActivity extends Activity {\n    @Override\n    public void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n\n        if (<\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n            // \u5c55\u793a\u9690\u79c1\u534f\u8bae\u5f39\u7a97\uff0c\u7b49\u5f85\u7528\u6237\u540c\u610f\n            if (<\u7528\u6237\u5df2\u7ecf\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n                //GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n                \n            }\n        }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Application \u7684 onCreate() \u65b9\u6cd5\u4e2d\u4e3b\u7ebf\u7a0b\u521d\u59cb\u5316 SDK\npublic class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        if (<\u7528\u6237\u5df2\u7ecf\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n            //GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n\n        }\n\n    }\n}\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6839\u636e\u60a8\u96c6\u6210\u662f\u65e0\u57cb\u70b9SDK\u8fd8\u662f\u57cb\u70b9SDK\uff0c\u8c03\u6574\u8c03\u7528\u7c7b\u540d")),(0,r.kt)("h2",{id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"},"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"),(0,r.kt)("p",null,"\u91c7\u96c6 SDK \u7248\u672c >=3.3.0 \u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6SDK\u7248\u672c\u4fdd\u6301\u4e00\u81f4\u3002\n\u4f7f\u7528\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/android/modules/encoder%20module"},"SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93"),"\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"},"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"),(0,r.kt)("p",null,"Android SDK \u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u652f\u6301\u8bbe\u7f6e\u53d1\u9001\u95f4\u9694(\u6700\u5c0f\u53ef\u8bbe\u7f6e5\u79d2)\uff0c\u9ed8\u8ba415\u79d2\uff0cSDK \u4f1a\u5148\u5c06\u884c\u4e3a\u6570\u636e\u5b58\u5165 App \u672c\u5730 sqlite \u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u95f4\u9694\u65f6\u95f4\u5411\u670d\u52a1\u5668\u53d1\u9001\u884c\u4e3a\u6570\u636e\u5305\uff08\u6700\u5927 50 \u6761\u884c\u4e3a\u6570\u636e\uff09\uff0c\u5982\u679c\u5f85\u53d1\u9001\u884c\u4e3a\u6570\u636e\u91cf\u5927\u4e8e100\u6761\uff0c\u5219\u53d1\u9001\u81f3\u6240\u6709\u6570\u636e\u53d1\u9001\u5b8c\u6210\uff0c\u884c\u4e3a\u6570\u636e\u53d1\u9001\u6210\u529f\u540e\u5c06\u5728\u6570\u636e\u5e93\u4e2d\u5220\u9664\u3002\u6570\u636e\u5e93\u4e2d\u672a\u53d1\u9001\u7684\u884c\u4e3a\u6570\u636e\u4f1a\u57287\u5929\u4e4b\u540e\u5220\u9664\u3002"),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8bf4\u660e"},"\u5176\u4ed6\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0b\u4fe1\u606f"},"\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0b\u4fe1\u606f"),(0,r.kt)("p",null,"GrowingIO SDK \u9ed8\u8ba4\u5141\u8bb8 App \u80fd\u5728\u591a\u8fdb\u7a0b\u73af\u5883\u4e0b\u8fdb\u884c\u6570\u636e\u7684\u7edf\u8ba1\u548c\u53d1\u9001\uff0c\u4e14\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u8bbf\u95ee\u91cf\u6570\u636e\u7edf\u8ba1\u7684\u51c6\u786e\u6027\uff0cSDK \u4e2d\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ActivityManager.getRunningAppProcesses")," \u6765\u83b7\u53d6\u5f53\u524d\u5e94\u7528\u7684\u6240\u6709\u8fdb\u7a0bId\u3002"),(0,r.kt)("p",null,"\u82e5\u662f\u4e0d\u5e0c\u671b GrowingIO SDK \u8c03\u7528\u8be5\u63a5\u53e3\uff0c\u53ef\u4ee5\u5728 SDK \u521d\u59cb\u5316\u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequireAppProcessesEnabled(false)")," \u6765\u5173\u95ed SDK \u83b7\u53d6\u5e94\u7528\u8fdb\u7a0b\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u9700\u8981\u6839\u636e\u60a8\u96c6\u6210\u662f\u65e0\u57cb\u70b9SDK\u8fd8\u662f\u57cb\u70b9SDK\uff0c\u8c03\u6574\u8c03\u7528\u7c7b\u540d\nCdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("AccountId", "URLScheme")\n    .setDataCollectionServerHost("ServerHost")\n    .setDataSourceId("DataSourceId")\n    // \u5173\u95ed SDK \u83b7\u53d6\u5e94\u7528\u8fdb\u7a0b\u7684\u64cd\u4f5c\n    .setRequireAppProcessesEnabled(false);\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u82e5\u5173\u95ed\u4e86 SDK \u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0b\u7684\u64cd\u4f5c\uff0c\u5219 SDK \u4e0d\u4f1a\u518d\u5c06\u5b50\u8fdb\u7a0b\u89c6\u4e3a\u4e00\u4e2a\u65b0\u7684\u8bbf\u95ee\uff0c\u65b0\u7684\u8bbf\u95ee\u6c38\u8fdc\u5728\u4e3b\u8fdb\u7a0b\u4e2d\u751f\u6210\u3002\u5b50\u8fdb\u7a0b\u4e2d\u7684\u6570\u636e\u7edf\u8ba1\u548c\u53d1\u9001\u4e0d\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\n\u5728 SDK \u7248\u672c 3.3.4 \u4e4b\u540e\u63d0\u4f9b\u8be5\u63a5\u53e3\u3002")),(0,r.kt)("h3",{id:"\u96c6\u6210oaid-sdk"},"\u96c6\u6210OAID SDK"),(0,r.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android/modules/oaid%20module"},"\u91c7\u96c6OAID\u4f5c\u4e3a\u8bbe\u5907\u4fe1\u606f")),(0,r.kt)("h3",{id:"\u5173\u4e8e-google-play"},"\u5173\u4e8e Google Play"),(0,r.kt)("p",null,"\u5982\u60a8\u7684 App \u9700\u8981\u5728 Google Play \u5206\u53d1\uff0c\u8bf7\u53c2\u7167 Google Play \u76f8\u5173\u653f\u7b56 - ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/10144311"},"Google Play \u653f\u7b56\u4e2d\u5fc3-\u7528\u6237\u6570\u636e\u5e2e\u52a9\u8bf4\u660e"),"\u3002\n\u5177\u4f53\u5408\u89c4\u6b65\u9aa4\u540c\u4e0a\u6587\u6240\u8ff0\u4e00\u81f4\u3002"),(0,r.kt)("h3",{id:"\u5173\u4e8e-gdpr"},"\u5173\u4e8e GDPR"),(0,r.kt)("p",null,"\u200b\u4e3a\u7b26\u5408 ",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84"},"General Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u200b"),"\uff0c\n\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"#%E6%96%B9%E5%BC%8F%E4%B8%80%E8%AE%BE%E7%BD%AE%E6%95%B0%E6%8D%AE%E6%94%B6%E9%9B%86%E5%BC%80%E5%85%B3"},"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173")))}s.isMDXComponent=!0}}]);