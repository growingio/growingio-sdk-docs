"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6131],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=d(t),m=a,u=k["".concat(l,".").concat(m)]||k[m]||s[m]||r;return t?i.createElement(u,p(p({ref:n},c),{},{components:t})):i.createElement(u,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=k;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<r;d++)p[d]=t[d];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6700:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),p=["components"],o={sidebar_position:2,title:"iOS SDK \u5408\u89c4\u8bf4\u660e"},l=void 0,d={unversionedId:"compliance/iosCompliance",id:"compliance/iosCompliance",isDocsHomePage:!1,title:"iOS SDK \u5408\u89c4\u8bf4\u660e",description:"\u9690\u79c1\u534f\u8bae",source:"@site/docs/compliance/iosCompliance.md",sourceDirName:"compliance",slug:"/compliance/iosCompliance",permalink:"/growingio-sdk-docs/docs/compliance/iosCompliance",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/compliance/iosCompliance.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"iOS SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"gioSidebar",previous:{title:"Android SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/androidCompliance"},next:{title:"Web JS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/webCompliance"}},c=[{value:"\u9690\u79c1\u534f\u8bae",id:"\u9690\u79c1\u534f\u8bae",children:[]},{value:"\u9690\u79c1\u534f\u8bae\u586b\u5199",id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",children:[{value:"\u6536\u96c6\u548c\u83b7\u53d6",id:"\u6536\u96c6\u548c\u83b7\u53d6",children:[]},{value:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",children:[]}]},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",children:[]},{value:"iOS \u6743\u9650\u8bf4\u660e",id:"ios-\u6743\u9650\u8bf4\u660e",children:[]},{value:"\u5176\u4ed6\u8bf4\u660e",id:"\u5176\u4ed6\u8bf4\u660e",children:[{value:"\u5173\u4e8e GDPR",id:"\u5173\u4e8e-gdpr",children:[]},{value:"\u5173\u4e8e IDFA \u5e7f\u544a\u6807\u8bc6\u7b26",id:"\u5173\u4e8e-idfa-\u5e7f\u544a\u6807\u8bc6\u7b26",children:[]}]},{value:"App Store \u9690\u79c1\u95ee\u9898",id:"app-store-\u9690\u79c1\u95ee\u9898",children:[{value:"1. \u662f\u5426\u4f1a\u4ece\u6b64 App \u4e2d\u6536\u96c6\u6570\u636e",id:"1-\u662f\u5426\u4f1a\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u6570\u636e",children:[]},{value:"2. \u4f4d\u7f6e\u6570\u636e\u6536\u96c6",id:"2-\u4f4d\u7f6e\u6570\u636e\u6536\u96c6",children:[]},{value:"3. \u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6",id:"3-\u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6",children:[]},{value:"4.1. \u4f4d\u7f6e",id:"41-\u4f4d\u7f6e",children:[]},{value:"4.2 \u7528\u6237 ID",id:"42-\u7528\u6237-id",children:[]},{value:"4.3 \u8bbe\u5907",id:"43-\u8bbe\u5907",children:[]},{value:"4.4 \u4ea7\u54c1\u4ea4\u4e92",id:"44-\u4ea7\u54c1\u4ea4\u4e92",children:[]},{value:"5. GrowingIO SDK \u5408\u89c4\u6027\u8bf4\u660e",id:"5-growingio-sdk-\u5408\u89c4\u6027\u8bf4\u660e",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"Q\uff1aApp\u4e00\u5f00\u59cb\u7981\u6b62\u4e86<code>IDFA</code>\u6743\u9650\uff0c\u540e\u7eed\u5141\u8bb8\u4e86<code>IDFA</code> \u6743\u9650\uff0c\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316\uff1f",id:"qapp\u4e00\u5f00\u59cb\u7981\u6b62\u4e86idfa\u6743\u9650\u540e\u7eed\u5141\u8bb8\u4e86idfa-\u6743\u9650\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316",children:[]},{value:"Q\uff1a\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6",id:"q\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6",children:[]}]}],s={toc:c};function k(e){var n=e.components,o=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u9690\u79c1\u534f\u8bae"},"\u9690\u79c1\u534f\u8bae"),(0,r.kt)("p",null,"\u6839\u636e",(0,r.kt)("a",{parentName:"p",href:"http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm"},"\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u5173\u4e8e\u5f00\u5c55\u7eb5\u6df1\u63a8\u8fdbAPP\u4fb5\u5bb3\u7528\u6237\u6743\u76ca\u4e13\u9879\u6574\u6cbb\u884c\u52a8"),"\u548c ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/app-store/user-privacy-and-data-use/"},"User Privacy and Data Use"),"\n\uff0cApp \u9700\u8981\u901a\u8fc7\u9690\u79c1\u534f\u8bae\u8bf4\u660e\u5e94\u7528\u91c7\u96c6\u6570\u636e\u3002\u4e3a\u4fdd\u8bc1\u60a8\u7684\u5728\u96c6\u6210 GrowingIO SDK\u4e4b\u540e\uff0c\u80fd\u591f\u6ee1\u8db3\u5de5\u4fe1\u90e8\u548c\u82f9\u679c\u7528\u6237\u9690\u79c1\u76f8\u5173\u5408\u89c4\u8981\u6c42\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8bf4\u660e\u3002"),(0,r.kt)("h2",{id:"\u9690\u79c1\u534f\u8bae\u586b\u5199"},"\u9690\u79c1\u534f\u8bae\u586b\u5199"),(0,r.kt)("h3",{id:"\u6536\u96c6\u548c\u83b7\u53d6"},"\u6536\u96c6\u548c\u83b7\u53d6"),(0,r.kt)("p",null,"\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u6536\u96c6\u548c\u83b7\u5f97\u7684\u4e2a\u4eba\u4fe1\u606f\u680f\u76ee\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u586b\u5199\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a`IDFA`\u3001`IDFV`\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n")),(0,r.kt)("p",null,"\u53ef\u5728\u7b2c\u4e09\u65b9SDK\u5217\u8868\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9(\u8bbe\u5907\u4fe1\u606f\u6309\u7167\u5b9e\u9645\u60c5\u51b5\u586b\u5199)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GIO\u79fb\u52a8\u7aef SDK\n\u7528\u9014\uff1a\u5206\u6790\u6536\u96c6\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f(App)\u7528\u6237\u7684\u4f7f\u7528\u60c5\u51b5\n\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\u7c7b\u578b\uff1a\u8bbe\u5907\u6807\u8bc6\u4fe1\u606f\uff08\u5982IDFA\u3001IDFV\uff09\uff0c\u8bbe\u5907\u7c7b\u578b\uff0c\u8bbe\u5907\u7248\u672c\uff0c\u7cfb\u7edf\u7248\u672c\uff0c\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u7f51\u7edc\u8bbe\u5907\u5236\u9020\u5546\uff0c\u7f51\u7edc\u6a21\u5f0f\n\u63d0\u4f9b\u65b9\uff1a\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\n\u7b2c\u4e09\u65b9SDK\u9690\u79c1\u534f\u8bae\u94fe\u63a5\uff1ahttps://accounts.growingio.com/user-privacy\n")),(0,r.kt)("h3",{id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"},"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"),(0,r.kt)("p",null,"\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u7684\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab\u680f\u76ee\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u586b\u5199\u5982\u4e0b\u5185\u5bb9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a`IDFA`\u3001`IDFV`\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n")),(0,r.kt)("h2",{id:"\u5408\u89c4\u6b65\u9aa4"},"\u5408\u89c4\u6b65\u9aa4"),(0,r.kt)("p",null,"1.\u60a8\u9700\u8981\u786e\u4fdd App \u6709\u300a\u9690\u79c1\u534f\u8bae\u300b\uff0c\u5e76\u4e14\u5728\u7528\u6237\u7b2c\u4e00\u6b21\u542f\u52a8 App \u65f6\u5c31\u80fd\u5411\u7528\u6237\u5c55\u793a\u5e76\u53d6\u5f97\u7528\u6237\u540c\u610f\uff1b"),(0,r.kt)("p",null,"2.\u8bf7\u52a1\u5fc5\u544a\u77e5\u7528\u6237\u60a8\u4f7f\u7528\u4e86 GrowingIO SDK\uff0c\u8bf7\u5728 \u300a\u9690\u79c1\u534f\u8bae\u300b \u4e2d\u6dfb\u52a0\u9690\u79c1\u6761\u6b3e\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE%E5%A1%AB%E5%86%99"},"\u9690\u79c1\u534f\u8bae\u586b\u5199")),(0,r.kt)("p",null,"3.\u5ef6\u8fdf\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u96c6\u6210 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ios/base/Getting_Started"},"iOS SDK"),"\uff0c\u8bf7\u5728\u7528\u6237\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e4b\u540e\u518d\u521d\u59cb\u5316 GrowingIO SDK\u3002\n\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    if (<\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae>) {\n      // \u5c55\u793a\u9690\u79c1\u534f\u8bae\u5f39\u6846\uff0c\u7b49\u5f85\u7528\u6237\u540c\u610f\u540e\uff0c\u6dfb\u52a0 GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n    } else {\n        //  GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n    }\n    ...\n    return YES;\n}\n")),(0,r.kt)("p",null,"4.\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u9ed8\u8ba4\u4f1a\u5c1d\u8bd5\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"IDFV")," \u4fe1\u606f\uff0c\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u7528\u6237\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\u3002\n\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/ios/base/Getting_Started#app-store%E6%8F%90%E4%BA%A4%E5%BA%94%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"App Store \u63d0\u4ea4\u5e94\u7528\u6ce8\u610f\u4e8b\u9879\u200b\u200b")),(0,r.kt)("h2",{id:"ios-\u6743\u9650\u8bf4\u660e"},"iOS \u6743\u9650\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6743\u9650"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u7edc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u8054\u7f51\u548c\u53d1\u9001\u6570\u636e\u6743\u9650\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1\u3002\u5fc5\u987b\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"IDFA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u5e94\u7528\u83b7\u53d6 IDFA\uff0c\u4ee5\u4fbf\u6807\u8bc6\u533f\u540d\u7528\u6237\u3002\u53ef\u9009\u6743\u9650")))),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8bf4\u660e"},"\u5176\u4ed6\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u5173\u4e8e-gdpr"},"\u5173\u4e8e GDPR"),(0,r.kt)("p",null,"\u4e3a\u7b26\u5408\n",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84"},"\u200bGeneral Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"),"\u200b\uff0cGrowingIO SDK \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"dataCollectionEnabled")," \u8bbe\u7f6e\u63a5\u53e3\uff0c\u53ef\u5728\u7528\u6237\u4e0d\u540c\u610f\u6570\u636e\u91c7\u96c6\u65f6\uff0c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"NO")," \u7981\u6b62\u6570\u636e\u91c7\u96c6\uff1b\u5728\u7528\u6237\u540c\u610f\u6570\u636e\u91c7\u96c6\u65f6\uff0c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"YES"),"\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // 1. dataCollectionEnabled \u8bbe\u7f6e\u4e3a NO\n    // \u8bbe\u7f6e\u7981\u6b62\u6570\u636e\u91c7\u96c6\u4ee3\u7801\n    \n    // 2.\u521d\u59cb\u5316 GrowingIO SDK\n    // \u521d\u59cb\u5316\u4ee3\u7801\n  \n    ...\n    return YES;\n}\n\u200b\n// \u67d0\u4e00\u65f6\u523b\u540c\u610f\u6570\u636e\u91c7\u96c6\n- (void)userAcceptDataCollection {\n    ...\n    // 3. dataCollectionEnabled \u8bbe\u7f6e\u4e3a YES\n    // \u8bbe\u7f6e\u5f00\u542f\u6570\u636e\u91c7\u96c6\u4ee3\u7801\n    ...\n}\n\n")),(0,r.kt)("h3",{id:"\u5173\u4e8e-idfa-\u5e7f\u544a\u6807\u8bc6\u7b26"},"\u5173\u4e8e IDFA \u5e7f\u544a\u6807\u8bc6\u7b26"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u9014\u5f84"},"\u4f7f\u7528\u9014\u5f84"),(0,r.kt)("p",null,"GrowingIO SDK \u4f1a\u91c7\u96c6 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFV")," \u5b57\u6bb5\u4e0a\u4f20\uff0c\u5982\u679c\u60a8\u7684\u9879\u76ee\u4e2d\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"AdSupport.framework"),"\uff0c\u4f1a\u5c1d\u8bd5\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\u3002"),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFV")," \u5b57\u6bb5\uff0cGrowingIO SDK \u4f7f\u7528 \u8bbf\u95ee\u7528\u6237ID \u5b57\u6bb5\u6807\u8bc6\u8bbf\u95ee\u7528\u6237 \uff0c\u5176\u503c\u4f7f\u7528 IDFA \u3001IDFV \u6216 \u968f\u673a\u5b57\u7b26\u4e32 \uff0c\u4e09\u8005\u7684\u4f18\u5148\u7ea7\u4e3a IDFA> IDFV > \u968f\u673a\u5b57\u7b26\u4e32 \uff0c\u4f8b\u5982\uff1a\u5982\u679c\u83b7\u53d6\u4e0d\u5230 IDFA\uff0cSDK \u4f1a\u4f7f\u7528 IDFV \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\u3002"),(0,r.kt)("h4",{id:"\u5408\u89c4\u98ce\u9669"},"\u5408\u89c4\u98ce\u9669"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u65f6\u6709\u4e00\u5b9a\u7684\u5408\u89c4\u98ce\u9669\uff0c\u4f46\u662f\u8003\u8651\u5230\u91c7\u96c6\u7684\u51c6\u786e\u6027\uff0cGrowingIO SDK \u4ecd\u7136\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\u7684\u91c7\u96c6\u65b9\u6cd5\uff0c\u5982\u679c\u4e0d\u9700\u8981\u91c7\u96c6",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\uff0c\u8bf7\u5728\u9879\u76ee\u5de5\u7a0b\u4e2d\u53bb\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"AdSupport.framework")," \u7684\u5f15\u7528\uff0c\u5e76\u4e14\u4e0d\u8981\u5728\u9879\u76ee\u4e2d\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"AdSupport")," \u76f8\u5173\u5934\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u53d1\u5e03\u513f\u7ae5\u7ea7\u5e94\u7528\uff0c\u5b8c\u5168\u4e0d\u9700\u8981\u76f8\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u7684\u83b7\u53d6\u903b\u8f91\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/ios/base/Configuration#1-%E7%A6%81%E7%94%A8idfa"},"\u7981\u7528IDFA"),"\u3002"),(0,r.kt)("h2",{id:"app-store-\u9690\u79c1\u95ee\u9898"},"App Store \u9690\u79c1\u95ee\u9898"),(0,r.kt)("p",null,"\u82f9\u679c\u5728 iOS 14.3 \u7cfb\u7edf\u66f4\u65b0\u4e86\u9690\u79c1\u534f\u8bae\uff0c\u8981\u6c42 App \u66f4\u65b0\u6216\u53d1\u5e03\u65f6\u9700\u8981\u53d1\u5e03\u8005\u586b\u5199\u4e00\u4efd\u9690\u79c1\u62a5\u544a\u3002\u6b64\u65f6\u5982\u679c App \u96c6\u6210 GrowingIO SDK \u5e94\u8be5\u5982\u4f55\u586b\u5199:"),(0,r.kt)("h3",{id:"1-\u662f\u5426\u4f1a\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u6570\u636e"},"1. \u662f\u5426\u4f1a\u4ece\u6b64 App \u4e2d\u6536\u96c6\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9 \u300c\u662f\uff0c\u4f1a\u4ece\u6b64 App \u4e2d\u6536\u96c6\u6570\u636e\u300d")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6136).Z}),"\n\u200b\u200b"),(0,r.kt)("h3",{id:"2-\u4f4d\u7f6e\u6570\u636e\u6536\u96c6"},"2. \u4f4d\u7f6e\u6570\u636e\u6536\u96c6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GrowingIO SDK \u4e0d\u4f1a\u4e3b\u52a8\u7533\u8bf7\u91c7\u96c6\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5982\u679c\u5ba2\u6237\u7684App\u7533\u8bf7\u83b7\u53d6\u4e86\u4f4d\u7f6e\u4fe1\u606f\uff0cGrowingIO\u5c31\u4f1a\u91c7\u96c6\u4f4d\u7f6e\u4fe1\u606f\u7528\u4e8e\u5b9a\u4f4d\u7528\u6237\u57ce\u5e02\u7ea7\u522b\u7684\u4f4d\u7f6e\uff0c\u9700\u8981\u52fe\u9009 \u300c\u7cbe\u51c6\u4f4d\u7f6e\u300d")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u60f3\u7981\u7528\u4f4d\u7f6e\u4fe1\u606f\u83b7\u53d6\uff0c\u9700\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"+setEnableLocationTrack:"),"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"NO")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3357).Z})),(0,r.kt)("h3",{id:"3-\u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6"},"3. \u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u9700\u9009\u62e9 \u300c\u8bbe\u5907 ID\u300d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f7f\u7528\u7528\u6237\u5173\u8054\uff0c\u5373\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\u5219\u8fd8\u9700\u52fe\u9009 \u300c\u7528\u6237 ID\u300d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f7f\u7528\u7684\u662f \u65e0\u57cb\u70b9SDK \u9700\u7ee7\u7eed\u52fe\u9009 \u300c\u4ea7\u54c1\u4ea4\u4e92\u300d")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5234).Z}),"\n\u200b\u200b"),(0,r.kt)("h3",{id:"41-\u4f4d\u7f6e"},"4.1. \u4f4d\u7f6e"),(0,r.kt)("h4",{id:"1-\u8bf7\u5728-\u4f4d\u7f6e\u9762\u677f\u4e2d\u52fe\u9009-\u5206\u6790"},"1. \u8bf7\u5728 \u300c\u4f4d\u7f6e\u300d\u9762\u677f\u4e2d\uff0c\u52fe\u9009 \u300c\u5206\u6790\u300d"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8001).Z}),"\n\u200b\u200b"),(0,r.kt)("h4",{id:"2-\u7136\u540e\u4e0b\u4e00\u6b65\u52fe\u9009\u662f\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u7684\u7cbe\u786e\u4f4d\u7f6e\u6570\u636e\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054"},"2. \u7136\u540e\u4e0b\u4e00\u6b65\uff0c\u52fe\u9009\u300c\u662f\uff0c\u4ece\u6b64 App \u4e2d\u6536\u96c6\u7684\u7cbe\u786e\u4f4d\u7f6e\u6570\u636e\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u300d"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(3488).Z})),(0,r.kt)("h4",{id:"3-\u6839\u636e\u60a8app\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"},"3. \u6839\u636e\u60a8App\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"),(0,r.kt)("h3",{id:"42-\u7528\u6237-id"},"4.2 \u7528\u6237 ID"),(0,r.kt)("h4",{id:"1-growingio-sdk-\u4f1a\u5728\u8c03\u7528-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id-\u63a5\u53e3\u65f6\u6536\u96c6\u7528\u6237-id-\u7528\u4e8e\u5206\u6790\u529f\u80fd\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9\u5206\u6790\u5982\u56fe"},"1. GrowingIO SDK \u4f1a\u5728\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\u65f6\u6536\u96c6\u7528\u6237 ID \u7528\u4e8e\u5206\u6790\u529f\u80fd\uff0c\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(7853).Z})),(0,r.kt)("h4",{id:"2-\u52fe\u9009\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\u9009\u62e9\u662f\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u7684\u7528\u6237-id-\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u8fd9\u91cc\u6839\u636e\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u52fe\u9009\u5982\u56fe"},"2. \u52fe\u9009\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u9009\u62e9\u300c\u662f\uff0c\u4ece\u6b64 App \u4e2d\u6536\u96c6\u7684\u7528\u6237 ID \u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u300d\uff0c\u8fd9\u91cc\u6839\u636e\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u52fe\u9009\uff0c\u5982\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1368).Z}),"\n\u200b\u200b"),(0,r.kt)("h4",{id:"3-\u70b9\u51fb\u4e0b\u4e00\u6b65\u9700\u8981\u9009\u62e9\u662f\u6211\u4eec\u4f1a\u5c06\u7528\u6237-id-\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"},"3. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u9700\u8981\u9009\u62e9\u300c\u662f\uff0c\u6211\u4eec\u4f1a\u5c06\u7528\u6237 ID \u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684\u300d\u200b"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(2769).Z})),(0,r.kt)("h3",{id:"43-\u8bbe\u5907"},"4.3 \u8bbe\u5907"),(0,r.kt)("h4",{id:"1-growingio-sdk-\u6536\u96c6\u8bbe\u5907-id-\u7528\u4e8e\u6536\u96c6\u7528\u6237\u767b\u5f55\u524d\u7684\u6570\u636e\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u5206\u6790\u5982\u56fe"},"1. GrowingIO SDK \u6536\u96c6\u8bbe\u5907 ID \u7528\u4e8e\u6536\u96c6\u7528\u6237\u767b\u5f55\u524d\u7684\u6570\u636e\uff0c\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(4275).Z})),(0,r.kt)("h4",{id:"2-\u70b9\u51fb\u4e0b\u4e00\u6b65\u56e0\u4e3a\u6536\u96c6\u5230\u7684\u6570\u636e\u4f1a\u4e0e\u8bbe\u5907-id-\u7ed1\u5b9a\u6240\u4ee5\u6b64\u5904\u7ee7\u7eed\u9009\u62e9\u662f"},"2. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u56e0\u4e3a\u6536\u96c6\u5230\u7684\u6570\u636e\u4f1a\u4e0e\u8bbe\u5907 id \u7ed1\u5b9a\uff0c\u6240\u4ee5\u6b64\u5904\u7ee7\u7eed\u9009\u62e9\u300c\u662f\u300d"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(9195).Z})),(0,r.kt)("h4",{id:"3-\u7ee7\u7eed\u4e0b\u4e00\u6b65\u540c\u7528\u6237-id--\u4f1a\u4f7f\u7528-idfa-\u4e0e\u7b2c\u4e09\u65b9\u6570\u636e\u76f8\u5173\u8054\u4ee5\u7528\u4e8e\u5b9a\u5411\u5e7f\u544a\u6216\u5e7f\u544a\u8bc4\u4f30\u76ee\u7684\u5982\u56fe"},"3. \u7ee7\u7eed\u4e0b\u4e00\u6b65\uff0c\u540c\u7528\u6237 ID \uff0c \u4f1a\u4f7f\u7528 IDFA \u4e0e\u7b2c\u4e09\u65b9\u6570\u636e\u76f8\u5173\u8054\u4ee5\u7528\u4e8e\u5b9a\u5411\u5e7f\u544a\u6216\u5e7f\u544a\u8bc4\u4f30\u76ee\u7684\uff0c\u5982\u56fe"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(9290).Z})),(0,r.kt)("h3",{id:"44-\u4ea7\u54c1\u4ea4\u4e92"},"4.4 \u4ea7\u54c1\u4ea4\u4e92"),(0,r.kt)("h4",{id:"1-\u4f7f\u7528-growingio-\u65e0\u57cb\u70b9sdk\u540e\u4f1a\u6536\u96c6-app\u542f\u52a8app\u9000\u51fa\u7528\u6237\u70b9\u51fb\u9875\u9762\u6d4f\u89c8\u7b49\u76f8\u5173\u884c\u4e3a\u7528\u4e8e\u5206\u6790\u4ea7\u54c1\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u5206\u6790\u5982\u56fe"},"1. \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9SDK\u540e\uff0c\u4f1a\u6536\u96c6 APP\u542f\u52a8\uff0cAPP\u9000\u51fa\uff0c\u7528\u6237\u70b9\u51fb\uff0c\u9875\u9762\u6d4f\u89c8\u7b49\u76f8\u5173\u884c\u4e3a\u7528\u4e8e\u5206\u6790\u4ea7\u54c1\uff0c\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(4402).Z})),(0,r.kt)("h4",{id:"2-\u70b9\u51fb\u4e0b\u4e00\u6b65\u7ee7\u7eed\u9009\u62e9\u662f\u5982\u56fe"},"2. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u7ee7\u7eed\u9009\u62e9\u662f\uff0c\u5982\u56fe"),(0,r.kt)("p",null,"\u200b\u200b",(0,r.kt)("img",{src:t(6501).Z})),(0,r.kt)("h4",{id:"3-\u6700\u540e\u8ffd\u8e2a\u76ee\u7684\u8bf7\u6839\u636e\u60a8\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u8981\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"},"3. \u6700\u540e\u8ffd\u8e2a\u76ee\u7684\uff0c\u8bf7\u6839\u636e\u60a8\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\uff0c\u662f\u5426\u8981\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"),(0,r.kt)("h3",{id:"5-growingio-sdk-\u5408\u89c4\u6027\u8bf4\u660e"},"5. GrowingIO SDK \u5408\u89c4\u6027\u8bf4\u660e"),(0,r.kt)("p",null,"GrowingIO SDK \u9ed8\u8ba4\u6536\u96c6\u7684\u6570\u636e\u7c7b\u578b\u53ea\u6709\u300c\u8bbe\u5907 ID\u300d\u548c\u300c\u7528\u6237 ID\u300d\u4e3b\u8981\u7528\u4e8e\u8ffd\u8e2a\uff0c\u5176\u4ed6\u7684\u6570\u636e\u7c7b\u578b\u91c7\u96c6\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u91c7\u96c6\u4e1a\u52a1\u4ee5\u53ca\u9009\u62e9\u7684SDK \u529f\u80fd\u6765\u505a\u76f8\u5e94\u9009\u62e9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\uff1a\u9700\u9009\u62e9\u300c\u7528\u6237 ID\u300d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u65e0\u57cb\u70b9 SDK\uff1a\u9700\u9009\u62e9\u300c\u4ea7\u54c1\u4ea4\u4e92\u300d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u542f\u5d29\u6e83\u6536\u96c6\uff1a\u9700\u9009\u62e9\u300c\u5d29\u6e83\u6570\u636e\u300d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u542f\u7ecf\u7eac\u5ea6\u91c7\u96c6\uff1a\u9700\u9009\u62e9\u300c\u7cbe\u786e\u4f4d\u7f6e\u300d"))),(0,r.kt)("p",null,"\u53e6\uff0c\u8be5\u9690\u79c1\u534f\u8bae\u7684\u586b\u5199\u662f\u53ef\u4ee5\u66f4\u6539\u7684\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6839\u636e\u81ea\u5df1 App \u4e1a\u52a1\u7684\u8c03\u6574\u53ca\u65f6\u66f4\u65b0\u9690\u79c1\u534f\u8bae"),"\u3002"),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"qapp\u4e00\u5f00\u59cb\u7981\u6b62\u4e86idfa\u6743\u9650\u540e\u7eed\u5141\u8bb8\u4e86idfa-\u6743\u9650\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316"},"Q\uff1aApp\u4e00\u5f00\u59cb\u7981\u6b62\u4e86",(0,r.kt)("inlineCode",{parentName:"h3"},"IDFA"),"\u6743\u9650\uff0c\u540e\u7eed\u5141\u8bb8\u4e86",(0,r.kt)("inlineCode",{parentName:"h3"},"IDFA")," \u6743\u9650\uff0c\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316\uff1f"),(0,r.kt)("p",null,"A\uff1a\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\uff0cApp\u751f\u547d\u5468\u671f\u5185\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u53ea\u4f1a\u83b7\u53d6\u4e00\u6b21\uff0c\u5c31\u7b97\u540e\u7eed IDFA \u6743\u9650\u6253\u5f00\u4e86\uff0c\u4e5f\u4e0d\u4f1a\u518d\u83b7\u53d6\uff0c\u53ef\u4ee5\u5728\u4e0b\u4e00\u6b21App\u542f\u52a8\u540e\u751f\u6548\u3002\u5bf9\u4e8e \u8bbe\u5907\u6807\u8bc6\uff0c\u4ec5\u4e14\u5728 App\u7b2c\u4e00\u6b21\u542f\u52a8\u65f6\u751f\u6210\uff0c\u540e\u7eed\u4e0d\u518d\u6539\u53d8\uff0c\u4f18\u5148\u7ea7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"> ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFV")," > \u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u65e0\u6cd5\u83b7\u53d6\uff0c\u5219\u4f1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"IDFV")," \u4e14\u4e0d\u518d\u53d8\u52a8\uff0c\u4f1a\u5b58\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Keychain"),"\uff0c\u5378\u8f7d\u4e5f\u65e0\u6cd5\u4fee\u6539\u3002\u5982\u679c\u8981\u8bbe\u5907\u6807\u8bc6 \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u7ed1\u5b9a\uff0c\u5219\u9700\u8981\u5728\u7528\u6237\u540c\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\u6743\u9650\u4e4b\u540e\u8fdb\u884c\u7b2c\u4e00\u6b21SDK\u521d\u59cb\u5316\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"q\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6"},"Q\uff1a\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6"),(0,r.kt)("p",null,"A\uff1a\u5bf9\u4e8eSDK\u521d\u59cb\u5316\u4e4b\u524d\uff0c\u6216\u8005\u5f00\u542f\u6570\u636e\u91c7\u96c6\u4e4b\u524d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u4e00\u6982\u4e22\u5f03\u3002"))}k.isMDXComponent=!0},6136:function(e,n,t){n.Z=t.p+"assets/images/datacollect_enable-edb68503eab74d594edbedd050e6d66f.png"},4275:function(e,n,t){n.Z=t.p+"assets/images/datacollect_id_analyze-cc2c6c0deb002009b4b7cda18bc6b5d6.png"},9195:function(e,n,t){n.Z=t.p+"assets/images/datacollect_id_associate-39e20e44a121c8d595f47f5aa7fbd992.png"},5234:function(e,n,t){n.Z=t.p+"assets/images/datacollect_idenfier-ed87724b72f83d4be0b90875a6778191.png"},7853:function(e,n,t){n.Z=t.p+"assets/images/datacollect_identifier_analyze-ff7d064fad68c725827d6519ce8ad451.png"},1368:function(e,n,t){n.Z=t.p+"assets/images/datacollect_identifier_id-3960d1e5fc7daf3df1f027cf46a67842.png"},4402:function(e,n,t){n.Z=t.p+"assets/images/datacollect_interface_analyze-57fb50ed7e26addf622383e6547296dc.png"},6501:function(e,n,t){n.Z=t.p+"assets/images/datacollect_interface_id-1b6e0ec597c8f4b0965d50d63215c4e1.png"},3357:function(e,n,t){n.Z=t.p+"assets/images/datacollect_location-1afef92ccc641dc3f507ff39fbe67657.png"},8001:function(e,n,t){n.Z=t.p+"assets/images/datacollect_location_analyze-615a4173861b6af6607ce5855277f1f2.png"},3488:function(e,n,t){n.Z=t.p+"assets/images/datacollect_location_identifier-fe0705d38fb8c7b4d55ef3f0412100b6.png"},9290:function(e,n,t){n.Z=t.p+"assets/images/datacollect_track_deviceID-459cd8494ebcdfee68de6c8ac850d6c2.png"},2769:function(e,n,t){n.Z=t.p+"assets/images/datacollect_track_id-8eb1ce4116601de8e120fc5133c01d9f.png"}}]);