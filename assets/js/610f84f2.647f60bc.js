"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=a,D=k["".concat(s,".").concat(c)]||k[c]||u[c]||l;return n?r.createElement(D,i(i({ref:t},p),{},{components:n})):r.createElement(D,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,title:"SDK \u5171\u6027\u95ee\u9898"},i=void 0,o={unversionedId:"common",id:"common",title:"SDK \u5171\u6027\u95ee\u9898",description:"1. Release \u7248\u672c\u4e0e Hotfix \u7248\u672c\u600e\u4e48\u533a\u522b\uff1f",source:"@site/question/common.md",sourceDirName:".",slug:"/common",permalink:"/growingio-sdk-docs/question/common",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/question/common.md",tags:[],version:"current",lastUpdatedAt:1678071861,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SDK \u5171\u6027\u95ee\u9898"},sidebar:"question",previous:{title:"\u4f7f\u7528\u8bf4\u660e",permalink:"/growingio-sdk-docs/question/"},next:{title:"Android \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/android"}},s={},d=[{value:"1. Release \u7248\u672c\u4e0e Hotfix \u7248\u672c\u600e\u4e48\u533a\u522b\uff1f",id:"1-release-\u7248\u672c\u4e0e-hotfix-\u7248\u672c\u600e\u4e48\u533a\u522b",level:3},{value:"2.  SDK \u521d\u59cb\u5316\u53c2\u6570 AccountID\u3001DataSourceID\u3001Host \u83b7\u53d6\u65b9\u5f0f",id:"2--sdk-\u521d\u59cb\u5316\u53c2\u6570-accountiddatasourceidhost-\u83b7\u53d6\u65b9\u5f0f",level:3},{value:"3. SDK \u96c6\u6210\u6210\u529f\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u67e5\u5230SDK\u4e0a\u62a5\u7684\u6570\u636e\uff1f",id:"3-sdk-\u96c6\u6210\u6210\u529f\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u67e5\u5230sdk\u4e0a\u62a5\u7684\u6570\u636e",level:3},{value:"4. \u8bbf\u95ee\u4e8b\u4ef6\u7684\u8ba1\u7b97\u53e3\u5f84\u662f\u4ec0\u4e48\uff0c\u5404\u7aef\u7684Session\u5468\u671f\u662f\u600e\u6837\u7684\uff1f",id:"4-\u8bbf\u95ee\u4e8b\u4ef6\u7684\u8ba1\u7b97\u53e3\u5f84\u662f\u4ec0\u4e48\u5404\u7aef\u7684session\u5468\u671f\u662f\u600e\u6837\u7684",level:3},{value:"5. \u9875\u9762\u6d4f\u89c8\u4e8b\u4ef6\u7684\u751f\u6210\u65f6\u673a\u53e3\u5f84\u662f\u4ec0\u4e48\uff1f",id:"5-\u9875\u9762\u6d4f\u89c8\u4e8b\u4ef6\u7684\u751f\u6210\u65f6\u673a\u53e3\u5f84\u662f\u4ec0\u4e48",level:3},{value:"6. \u91c7\u96c6\u6570\u636e\u63a5\u6536\u7684\u670d\u52a1\u5668(\u5373Host)\u505c\u6389\u4e4b\u540e\uff0c\u79fb\u52a8\u7aef\u91c7\u96c6\u5230\u7684\u6570\u636e\u4f1a\u5b58\u591a\u957f\u65f6\u95f4\u5462\u3002\u5176\u4ed6\u7aef\u7684\u6570\u636e\u662f\u5426\u76f4\u63a5\u5c31\u4e22\u6389\u4e86\uff1f",id:"6-\u91c7\u96c6\u6570\u636e\u63a5\u6536\u7684\u670d\u52a1\u5668\u5373host\u505c\u6389\u4e4b\u540e\u79fb\u52a8\u7aef\u91c7\u96c6\u5230\u7684\u6570\u636e\u4f1a\u5b58\u591a\u957f\u65f6\u95f4\u5462\u5176\u4ed6\u7aef\u7684\u6570\u636e\u662f\u5426\u76f4\u63a5\u5c31\u4e22\u6389\u4e86",level:3},{value:"7. GIO\u5e2e\u52a9\u6587\u6863\u6709\u82f1\u6587\u7248\u5417\uff1f",id:"7-gio\u5e2e\u52a9\u6587\u6863\u6709\u82f1\u6587\u7248\u5417",level:3},{value:"8. GIO\u5404\u7aefSDK\u91c7\u96c6\u6570\u636e\u7684\u53d1\u9001\u6570\u636e\u7b56\u7565\u662f\u600e\u6837\u7684\uff1f",id:"8-gio\u5404\u7aefsdk\u91c7\u96c6\u6570\u636e\u7684\u53d1\u9001\u6570\u636e\u7b56\u7565\u662f\u600e\u6837\u7684",level:3},{value:"9. \u57cb\u70b9\u548c\u65e0\u57cb\u70b9\u533a\u522b\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u8981\u6709\u57cb\u70b9SDK\u548c\u65e0\u57cb\u70b9SDK\uff1f",id:"9-\u57cb\u70b9\u548c\u65e0\u57cb\u70b9\u533a\u522b\u662f\u4ec0\u4e48\u4e3a\u4ec0\u4e48\u8981\u6709\u57cb\u70b9sdk\u548c\u65e0\u57cb\u70b9sdk",level:3},{value:"10. \u5ba2\u6237\u7aefSDK DeviceID \u751f\u6210\u673a\u5236\u7b80\u8981\u903b\u8f91\u662f\u4ec0\u4e48\uff1f",id:"10-\u5ba2\u6237\u7aefsdk-deviceid-\u751f\u6210\u673a\u5236\u7b80\u8981\u903b\u8f91\u662f\u4ec0\u4e48",level:3},{value:"11. \u79fb\u52a8\u7aef SDK 2.0\u53473.0\u7248\u672cSDK \u4e0e 2.0SDK\u30013.0SDK\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f",id:"11-\u79fb\u52a8\u7aef-sdk-20\u534730\u7248\u672csdk-\u4e0e-20sdk30sdk\u7684\u5173\u7cfb\u662f\u4ec0\u4e48",level:3},{value:"12. \u5ba2\u6237\u7aef SDK path \u503c\u7684\u751f\u6210\u903b\u8f91\u662f\u4ec0\u4e48\uff1f",id:"12-\u5ba2\u6237\u7aef-sdk-path-\u503c\u7684\u751f\u6210\u903b\u8f91\u662f\u4ec0\u4e48",level:3},{value:"13.SDK \u6570\u636e\u52a0\u5bc6\u538b\u7f29\u4f20\u8f93\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f",id:"13sdk-\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u4f20\u8f93\u662f\u600e\u4e48\u5b9e\u73b0\u7684",level:3}],p={toc:d};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-release-\u7248\u672c\u4e0e-hotfix-\u7248\u672c\u600e\u4e48\u533a\u522b"},"1. Release \u7248\u672c\u4e0e Hotfix \u7248\u672c\u600e\u4e48\u533a\u522b\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"release \u7248\u672c\u662f\u6b63\u5f0f\u7248\u672c\uff1b\u4f8b\u5982\uff1arelease-3.3.1\uff1bhotfix\u7248\u672c\u662f\u975e\u6b63\u5f0f\u7248\u672c\uff0c\u662f\u6240\u5728\u7248\u672c\u7684 Bug \u7d27\u6025\u4fee\u590d\u7248\u672c\uff1bAndroid \u7684 hotfix \u7248\u672c\u5bf9\u5e94\u5e26\u6709\u65e5\u671f\u7684SNAPSHOT\u7248\u672c\uff0c\u4f8b\u5982\uff1arelease-3.2.3-09141-SNAPSHOT\uff1b \u4e0b\u4e00\u4e2arelease \u7248\u672c\u4f1a\u5305\u542b\u4e0a\u4e2a\u7248\u672c\u7684\u6240\u6709 hotfix \u7248\u672c\u7684\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"2--sdk-\u521d\u59cb\u5316\u53c2\u6570-accountiddatasourceidhost-\u83b7\u53d6\u65b9\u5f0f"},"2.  SDK \u521d\u59cb\u5316\u53c2\u6570 AccountID\u3001DataSourceID\u3001Host \u83b7\u53d6\u65b9\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"AccountID\u3001DataSourceID\u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u9879\u76ee\u7ecf\u7406\uff1b\u64cd\u4f5c\u6b65\u9aa4\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/android/"},"\u5e2e\u52a9\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"Host\u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u8be5\u9879\u76ee\u7684\u8fd0\u7ef4\u6216\u9879\u76ee\u7ecf\u7406\u3002"),(0,a.kt)("h3",{id:"3-sdk-\u96c6\u6210\u6210\u529f\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u67e5\u5230sdk\u4e0a\u62a5\u7684\u6570\u636e"},"3. SDK \u96c6\u6210\u6210\u529f\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u67e5\u5230SDK\u4e0a\u62a5\u7684\u6570\u636e\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SDK \u521d\u59cb\u5316\u53c2\u6570 AccountID\u3001DataSourceID\u3001Host \u586b\u5199\u662f\u5426\u6b63\u786e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Host \u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\uff1a\u5728IP/\u57df\u540d\u540e \u52a0healthy-check \u5982\u679c\u8fd4\u56de OK \u5219\u8868\u793a\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("a",{parentName:"li",href:"http://cdp.growingio.com/healthy-check"},"http://cdp.growingio.com/healthy-check")),(0,a.kt)("li",{parentName:"ul"},"web js sdk \u9ed8\u8ba4\u4e0d\u91c7\u96c6 localhost\u3001127.0.0.1 \u9875\u9762\u6570\u636e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aefSDK\uff0c \u5982\u679cJava SDK \u8fd0\u884c\u6a21\u5f0f\uff0ctest:\u4ec5\u8f93\u51fa\u6d88\u606f\u4f53\uff0c\u4e0d\u53d1\u9001\u6d88\u606f\uff0cproduction: \u53d1\u9001\u6d88\u606f\uff1b\u5982\u679cPHP SDK\uff0c\u521d\u59cb\u5316\u65f6 debug \u914d\u7f6e\u4e3a true \uff0c\u4ec5\u8f93\u51fa\u6d88\u606f\u4f53\uff0c\u4e0d\u53d1\u9001\u6d88\u606f\u3002")),(0,a.kt)("h3",{id:"4-\u8bbf\u95ee\u4e8b\u4ef6\u7684\u8ba1\u7b97\u53e3\u5f84\u662f\u4ec0\u4e48\u5404\u7aef\u7684session\u5468\u671f\u662f\u600e\u6837\u7684"},"4. \u8bbf\u95ee\u4e8b\u4ef6\u7684\u8ba1\u7b97\u53e3\u5f84\u662f\u4ec0\u4e48\uff0c\u5404\u7aef\u7684Session\u5468\u671f\u662f\u600e\u6837\u7684\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a")," Session \u7531\u5404\u7aefSDK\u7ef4\u62a4\nWeb\u7aef\uff1a\u9996\u6b21\u8bbf\u95ee\u65f6\u751f\u6210 session\uff0c\u5f53\u7528\u623730\u5206\u949f\u5185\u65e0\u64cd\u4f5c\u884c\u4e3a\uff0c\u4e4b\u540e\u6709\u64cd\u4f5c\u884c\u4e3a\uff0c\u5237\u65b0 session\u3002",(0,a.kt)("br",null),"\n\u79fb\u52a8\u7aef\uff1a\u51b7\u542f\u52a8\u65f6\u751f\u6210 session\uff0c\u5f53App\u8fdb\u5165\u540e\u53f030\u79d2\u540e\u518d\u6b21\u542f\u52a8\uff0c\u5237\u65b0session\u3002",(0,a.kt)("br",null),"\n\u5c0f\u7a0b\u5e8f\uff1a\u51b7\u542f\u52a8\u65f6\u751f\u6210 session\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u540e\u53f05\u5206\u949f\u540e\u518d\u6b21\u542f\u52a8\uff0c\u5237\u65b0session\u3002",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"5-\u9875\u9762\u6d4f\u89c8\u4e8b\u4ef6\u7684\u751f\u6210\u65f6\u673a\u53e3\u5f84\u662f\u4ec0\u4e48"},"5. \u9875\u9762\u6d4f\u89c8\u4e8b\u4ef6\u7684\u751f\u6210\u65f6\u673a\u53e3\u5f84\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"\u9875\u9762\u7684\u4e00\u6b21\u6d4f\u89c8\u884c\u4e3a\uff0c\u901a\u8fc7Page\u4e8b\u4ef6\u6765\u7edf\u8ba1\u7684"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H5\u3001Web\uff1a\u96c6\u6210\u4ee3\u7801\u4e2d\u7684gdp('send'), \u76d1\u542chistory\u53cahashtag"),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\uff1aonShow"),(0,a.kt)("li",{parentName:"ul"},"APP\uff1a\u5b89\u5353\uff1aonResume"),(0,a.kt)("li",{parentName:"ul"},"iOS\uff1aviewDidAppear")),(0,a.kt)("h3",{id:"6-\u91c7\u96c6\u6570\u636e\u63a5\u6536\u7684\u670d\u52a1\u5668\u5373host\u505c\u6389\u4e4b\u540e\u79fb\u52a8\u7aef\u91c7\u96c6\u5230\u7684\u6570\u636e\u4f1a\u5b58\u591a\u957f\u65f6\u95f4\u5462\u5176\u4ed6\u7aef\u7684\u6570\u636e\u662f\u5426\u76f4\u63a5\u5c31\u4e22\u6389\u4e86"},"6. \u91c7\u96c6\u6570\u636e\u63a5\u6536\u7684\u670d\u52a1\u5668(\u5373Host)\u505c\u6389\u4e4b\u540e\uff0c\u79fb\u52a8\u7aef\u91c7\u96c6\u5230\u7684\u6570\u636e\u4f1a\u5b58\u591a\u957f\u65f6\u95f4\u5462\u3002\u5176\u4ed6\u7aef\u7684\u6570\u636e\u662f\u5426\u76f4\u63a5\u5c31\u4e22\u6389\u4e86\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"\u5404\u7aefSDK\u4fa7\u5b58\u50a8\u65f6\u95f4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android 2.0/3.0 7\u5929"),(0,a.kt)("li",{parentName:"ul"},"iOS 3.0 7\u5929"),(0,a.kt)("li",{parentName:"ul"},"iOS 2.0 \u6301\u4e45\u5316\u5b58\u50a8\u4e0d\u505a\u5220\u9664"),(0,a.kt)("li",{parentName:"ul"},"Web \u5c0f\u7a0b\u5e8f \u6ca1\u6709\u6301\u4e45\u5316")),(0,a.kt)("h3",{id:"7-gio\u5e2e\u52a9\u6587\u6863\u6709\u82f1\u6587\u7248\u5417"},"7. GIO\u5e2e\u52a9\u6587\u6863\u6709\u82f1\u6587\u7248\u5417\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a")," \u76ee\u524d\u5e2e\u52a9\u6587\u6863\u8fd8\u672a\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u4ea7\u54c1\u82f1\u6587\u7248\u672c\u5df2\u7ecf\u5728 2.2 \u7248\u672c\u4e0a\u652f\u6301"),(0,a.kt)("h3",{id:"8-gio\u5404\u7aefsdk\u91c7\u96c6\u6570\u636e\u7684\u53d1\u9001\u6570\u636e\u7b56\u7565\u662f\u600e\u6837\u7684"},"8. GIO\u5404\u7aefSDK\u91c7\u96c6\u6570\u636e\u7684\u53d1\u9001\u6570\u636e\u7b56\u7565\u662f\u600e\u6837\u7684\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"\n\u53d1\u9001\u6570\u636e\u7b56\u7565\uff1a",(0,a.kt)("br",null),"\nWeB JS SDK: \u91c7\u96c6\u6570\u636e\u53d1\u9001\u7b56\u7565\u4e3a\u5b9e\u65f6\u4e0a\u62a5\uff0c\u5373\u4e8b\u4ef6\u751f\u6210\u5373\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u3002",(0,a.kt)("br",null),"\n\u5c0f\u7a0b\u5e8fSDK\uff1a\u91c7\u96c6\u6570\u636e\u53d1\u9001\u7b56\u7565\u91c7\u7528\u8282\u6d41\u6280\u672f\uff0c\u5373\u8bbe\u7f6e\u6267\u884c\u5468\u671f\u4e3a1\u79d2\uff0c\u53ea\u6709\u5728\u5927\u4e8e\u7b49\u4e8e\u6267\u884c\u5468\u671f\u65f6\u624d\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u6267\u884c\u5468\u671f\u5185\u8c03\u7528\u4e0d\u53d1\u9001\u3002",(0,a.kt)("br",null),"\niOS \u548cAndroid SDK\uff1a\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f415\u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u5927500\u6761\u4e8b\u4ef6\uff09\u3002",(0,a.kt)("br",null),"\n\u53d1\u9001\u5931\u8d25\u5904\u7406\u7b56\u7565\uff1a",(0,a.kt)("br",null),"\niOS \u548cAndroid\u5931\u8d25\u540e\u6570\u636e\u8fd8\u5728\u6570\u636e\u5e93\u4e2d\u4f1a\u518d\u6b21\u53d1\u9001\u8bf7\u6c42\uff1bweb \u548c\u5c0f\u7a0b\u5e8f\u4f1a\u4e00\u76f4\u91cd\u53d1\uff1b",(0,a.kt)("br",null),"\n\u670d\u52a1\u7aefSDK\uff0c\u8bf7\u6c42\u5931\u8d25\u540e\u6570\u636e\u76f4\u63a5\u4e22\u5f03\u3002"),(0,a.kt)("h3",{id:"9-\u57cb\u70b9\u548c\u65e0\u57cb\u70b9\u533a\u522b\u662f\u4ec0\u4e48\u4e3a\u4ec0\u4e48\u8981\u6709\u57cb\u70b9sdk\u548c\u65e0\u57cb\u70b9sdk"},"9. \u57cb\u70b9\u548c\u65e0\u57cb\u70b9\u533a\u522b\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u8981\u6709\u57cb\u70b9SDK\u548c\u65e0\u57cb\u70b9SDK\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u57cb\u70b9\u548c\u65e0\u57cb\u70b9\u662f\u4e1a\u754c\u5e38\u89c1\u7684\u4e24\u79cd\u6570\u636e\u91c7\u96c6\u65b9\u5f0f\uff1b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u91c7\u96c6\u5c5e\u4e8e\u4e3b\u89c2\u6570\u636e\u91c7\u96c6\uff0c\u91c7\u96c6\u7684\u8303\u56f4\u3001\u53e3\u5f84\u5177\u6709\u4e3b\u89c2\u6027\n\u4f18\u70b9\u662f\u6570\u636e\u8d28\u91cf\u7a33\u5b9a\uff0c\u9002\u5408\u7528\u4e8e\u6307\u6807\u957f\u671f\u76d1\u6d4b \uff08\u6570\u636e\u51c6\u786e\uff09\n\u7f3a\u70b9\u662f\u7531\u4e8e\u5b9e\u65bd\u8fc7\u7a0b\u4e2d\u7684\u4e3b\u89c2\u6027\uff0c\u7ecf\u5e38\u5bfc\u81f4\u6f0f\u57cb\u3001\u65f6\u673a\u4e0d\u5bf9\u3001\u53c2\u6570\u4e0d\u5bf9\u7b49\u56e0\u7d20\u5bfc\u81f4\u6570\u636e\u8d28\u91cf\u95ee\u9898\uff0c\u9700\u8981\u5927\u91cf\u7684\u6570\u636e\u7a3d\u6838\uff08\u4f53\u73b0\u5728\u6307\u6807\u68b3\u7406\u548c\u6570\u636e\u6821\u9a8c\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9\u91c7\u96c6\u5c5e\u4e8e\u5ba2\u89c2\u91c7\u96c6\uff0c\u91c7\u96c6\u7684\u8303\u56f4\u3001\u53e3\u5f84\u4e0d\u53d7\u4e3b\u89c2\u56e0\u7d20\u5f71\u54cd\n\u4f18\u70b9\u662f\u6570\u636e\u91c7\u96c6\u5168\u9762\uff0c\u65e0\u9700\u63d0\u524d\u8bbe\u8ba1\uff0c\u9002\u5408\u77ed\u671f\u6570\u636e\uff08\u5982\u6295\u653e\u9875\u3001\u6d3b\u52a8\u9875\uff09\u7684\u91c7\u96c6\u76d1\u6d4b\uff0c\u540e\u671f\u8fd0\u8425\u4e1a\u52a1\u4eba\u5458\u901a\u8fc7\u754c\u9762\u5708\u9009\u5b9a\u4e49\u5373\u53ef\u5206\u6790\u4f7f\u7528\uff0c\u5b9e\u65bd\u5de5\u4f5c\u91cf\u4f4e\uff0c\u4e5f\u56e0\u4e3a\u5ba2\u89c2\u6027\u9002\u5408\u7528\u4e8e\u505a\u673a\u5668\u5b66\u4e60\u7684\u884c\u4e3a\u7279\u5f81\u4f7f\u7528\n\u7f3a\u70b9\u662f\u6570\u636e\u4e0d\u53d7\u4e3b\u89c2\u56e0\u7d20\u63a7\u5236\uff0c\u4e0e\u5f00\u53d1\u6280\u672f\u6846\u67b6\u5173\u8fde\u6bd4\u8f83\u7d27\u5bc6\uff0c\u91c7\u96c6\u7684\u6570\u636e\u4ef7\u503c\u5bc6\u5ea6\u4f4e\uff08\u548c\u4e1a\u52a1\u76f8\u5173\u6027\u4f4e\uff1b\u76ee\u524d\u652f\u6301\u7684\u6709\u539f\u751f Android\u3001iOS\u3001\u5c0f\u7a0b\u5e8f\u3001Web\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK\u662f\u5305\u542b\u57cb\u70b9SDK\u5168\u90e8\u529f\u80fd\u7684\uff1b\u533a\u522b\u5728\u4e8e\u662f\u5426\u652f\u6301\u65e0\u57cb\u70b9\u6570\u636e\u91c7\u96c6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK\u9ed8\u8ba4\u4ec5\u81ea\u52a8\u91c7\u96c6\u9884\u5b9a\u4e49\u7684\u8bbf\u95ee\u91cf\u3001\u8bbf\u95ee\u5c5e\u6027\u6570\u636e\u3002\u884c\u4e3a\u6570\u636e\u3001\u4e1a\u52a1\u6570\u636e\u9700\u8981\u901a\u8fc7\u57cb\u70b9\u91c7\u96c6\u5b9e\u73b0\u3002\uff08\u4e8b\u4ef6\uff1aVISIT\u3001CUSTOM\u3001LOGIN_USER_ATTRIBUTES\u3001APP_CLOSED\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK\u662f\u5168\u91cf\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u6570\u636e\uff0c\u540c\u65f6\u5305\u542b\u57cb\u70b9SDK\uff1b\uff08\u4e8b\u4ef6\uff1aVISIT\u3001CUSTOM\u3001LOGIN_USER_ATTRIBUTES\u3001APP_CLOSED\u3001PAGE\u3001VIEW_CLICK\u3001FROM_SUBMIT\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK\u63a5\u5165\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5f00\u4eba\u5458\u53d1\u5f15\u5165SDK\uff0c\u5b8c\u6210\u521d\u59cb\u5316\uff0c\u5c31\u53ef\u4ee5\u5168\u91cf\u7684\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u6570\u636e\u3002\u9002\u7528\u4e8e\u5168\u91cf\u7684\uff0c\u521d\u671f\u7684\u5206\u6790\u6570\u636e\u91c7\u96c6\u3002\u540e\u671f\u6709\u81ea\u5df1\u7684\u4e00\u5957\u57cb\u70b9\u91c7\u96c6\u65b9\u6848\uff0c\u518d\u52a0\u5165\u57cb\u70b9\u4e5f\u662f\u652f\u6301\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK\u5177\u6709\u9488\u5bf9\u6027\u7684\u6570\u636e\u91c7\u96c6\uff0c\u9002\u5408\u6709\u4e00\u6574\u5957\u57cb\u70b9\u65b9\u6848\u4f53\u7cfb\u7684\u4e13\u4e1a\u5206\u6790\u3002\u8fd9\u6837\u91c7\u96c6\u7684\u6570\u636e\u66f4\u5e72\u51c0\u3001\u51c6\u786e\u3001\u5177\u6709\u5206\u6790\u7684\u9488\u5bf9\u6027\uff1b\u91c7\u96c6\u6570\u636e\u91cf\u76f8\u5bf9\u5c11\uff0c\u53ef\u51cf\u5c11\u670d\u52a1\u5668\u6210\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e9b\u4f7f\u7528\u7b2c\u4e09\u65b9\u6846\u67b6\u5f00\u53d1\u7684APP\uff0c\u7531\u4e8e\u6682\u4e0d\u652f\u6301\u65e0\u57cb\u70b9\u91c7\u96c6\uff0c\u539f\u751f\u90e8\u5206\u9700\u8981\u4f7f\u7528\u57cb\u70b9SDK\uff0c\u7b2c\u4e09\u65b9\u6846\u67b6\u4e2d\u4f7f\u7528\u5bf9\u5e94\u7684\u7b2c\u4e09\u65b9SDK\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9002\u914d\u63d2\u4ef6\uff0c\u652f\u6301\u7b2c\u4e09\u65b9\u6846\u67b6\u7684\u6570\u636e\u91c7\u96c6\u3002")),(0,a.kt)("h3",{id:"10-\u5ba2\u6237\u7aefsdk-deviceid-\u751f\u6210\u673a\u5236\u7b80\u8981\u903b\u8f91\u662f\u4ec0\u4e48"},"10. \u5ba2\u6237\u7aefSDK DeviceID \u751f\u6210\u673a\u5236\u7b80\u8981\u903b\u8f91\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iOS\uff1a IDFA > IDFV > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID"),(0,a.kt)("li",{parentName:"ul"},"Android\uff1aandroidId  > imei > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID "),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\uff1aOpenID > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID"),(0,a.kt)("li",{parentName:"ul"},"Web: \u968f\u673a\u8bbf\u95ee\u7528\u6237ID")),(0,a.kt)("p",null,"\u8bbf\u95ee\u7528\u6237ID \u7684\u751f\u6210\u65f6\u673a\u662f\u5728SDK\u521d\u59cb\u5316\u65f6\u3002",(0,a.kt)("br",null),"\niOS\u8bbe\u5907\u5982\u679c\u60f3\u8981\u4f7f\u7528IDFA\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff0c\u9700\u8981\u5728\u7528\u6237\u6388\u6743\u83b7\u53d6\u5230\u4e4b\u540e\u521d\u59cb\u5316SDK\uff1b\u5982\u679c\u62d2\u7edd\u6388\u6743\uff0ciOS \u6309\u7167\u4f18\u5148\u7ea7 IDFV > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID, \u751f\u6210\u8bbf\u95ee\u7528\u6237ID  DeviceID\uff1bKeychain\u5b58\u50a8\uff0c\u5220\u6389\u5e94\u7528\u540e\u518d\u6b21\u5b89\u88c5\u8fd8\u662f\u540c\u4e00\u4e2aDeviceID\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"NSString *deviceId;\nNSUUID *uuid = ((NSUUID * (*)(id, SEL))[sharedManager methodForSelector:advertisingIdentifierSelector])(\n        sharedManager, advertisingIdentifierSelector);\ndeviceId = [uuid UUIDString];\n\ndeviceId = [[[UIDevice currentDevice] identifierForVendor] UUIDString];\n\ndeviceId = [[NSUUID UUID] UUIDString];\n")),(0,a.kt)("p",null,"Android \u8bbe\u5907\u9996\u5148\u4f1a\u83b7\u53d6AndroidID\uff0c\u5982\u679cAndroidID \u4e3a\u7a7a\u6216\u4e3a\u201c9774d56d682e549c\u201d(\u5c71\u5be8\u673a\u6216\u5176\u4ed6\u8bbe\u5907)\uff0c\u4f1a\u901a\u8fc7\u7528\u6237\u6388\u6743\u83b7\u53d6IMEI\uff0c\u5982\u679cIMEI\u83b7\u53d6\u4e0d\u5230\uff0c\u4f1a\u968f\u673a\u8bbf\u95ee\u7528\u6237ID  \u4f5c\u4e3aDeviceID\u3002\u672c\u5730\u6587\u4ef6\u5b58\u50a8\uff0c\u5220\u6389\u5e94\u7528\u540e\u518d\u6b21\u6309\u7167\u903b\u8f91\u751f\u6210\u53ef\u80fd\u4f1a\u4e0d\u4e00\u6837\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Java"},'String deviceId = null;\n\nString adId = getAndroidId();\ndeviceId = UUID.nameUUIDFromBytes(adId.getBytes(Charset.forName("UTF-8"))).toString();\n        \nString imi = getImei();\ndeviceId = UUID.nameUUIDFromBytes(imi.getBytes(Charset.forName("UTF-8"))).toString();\n\ndeviceId = UUID.randomUUID().toString();\n')),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\uff1a\u5982\u679cSDK\u8bbe\u7f6e\u4e86\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f\uff0c\u5c0f\u7a0b\u5e8f\u6253\u5f00\u65f6\u8c03\u7528 wx.login \u83b7\u53d6openid\u6216unionId\uff0c\u4e14\u8c03\u7528 identify \u4e0a\u62a5openid\uff0c\u4f1a\u4f7f\u7528 openid \u4f5c\u4e3a DeviceID \uff0c\u5426\u5219\u4f1a\u81ea\u52a8\u751f\u6210 \u968f\u673a\u8bbf\u95ee\u7528\u6237ID \u4f5c\u4e3a DeviceID\u3002\u5b58\u50a8\u5728 storage \u91cc\u9762\uff0c\u5220\u9664\u5c0f\u7a0b\u5e8f\u518d\u6b21\u8fdb\u5165 DeviceID \u4f1a\u6539\u53d8\uff08DeviceID\u4e0d\u662f openid\u7684\u60c5\u51b5\u4e0b\uff09\u3002\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.3/initSettings#forcelogin"},"\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f")),(0,a.kt)("p",null,"Web: \u968f\u673a\u8bbf\u95ee\u7528\u6237ID  \u5b58\u50a8\u5728 localStorage \u4e2d\uff0c\u6c38\u4e45\u6709\u6548\u3002",(0,a.kt)("br",null),"\n\u8fd9\u6837\u590d\u6742\u903b\u8f91\u7684\u76ee\u7684\u662f\u5c3d\u91cf\u4f7f\u7528 DeviceID \u6807\u8bc6\u552f\u4e00\u4e00\u53f0\u8bbe\u5907\uff0c\u5c06\u540c\u4e00\u53f0\u8bbe\u5907\u4e0a\u7684\u8bbf\u95ee\u7528\u6237\u6807\u8bc6\u4e3a\u540c\u4e00\u4e2a\u7528\u6237\u3002"),(0,a.kt)("h3",{id:"11-\u79fb\u52a8\u7aef-sdk-20\u534730\u7248\u672csdk-\u4e0e-20sdk30sdk\u7684\u5173\u7cfb\u662f\u4ec0\u4e48"},"11. \u79fb\u52a8\u7aef SDK 2.0\u53473.0\u7248\u672cSDK \u4e0e 2.0SDK\u30013.0SDK\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:"),"\n2.0\u53473.0\u7248\u672cSDK autotracker-upgrade (\u4ec5\u65e0\u57cb\u70b9SDK\uff0c\u57cb\u70b9\u6682\u4e0d\u517c\u5bb9) \u662f\u5bf9 3.0 SDK API\u8fdb\u884c\u5c01\u88c5 \uff0c\u5b9e\u73b0  2.0 SDK API \u53ef\u4ee5\u8c03\u7528 3.0 SDK API\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"2update3",src:n(1773).Z,width:"632",height:"412"})),(0,a.kt)("p",null,"\u4f7f\u7528\uff1a\u96c6\u6210 2.0\u53473.0\u7248\u672cSDK + 3.0 SDK",(0,a.kt)("br",null),"\n\u6d4b\u91cf\u534f\u8bae\uff1a2.0\u53473.0\u7248\u672cSDK  \u6309\u71673.0\u7684\u6d4b\u91cf\u534f\u8bae\u53d1\u9001\u6570\u636e",(0,a.kt)("br",null),"\n\u8865\u5145\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs#%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81%E5%8A%9F%E8%83%BD%E7%9A%84%E7%89%88%E6%9C%AC%E4%B8%8E-sdk%E7%89%88%E6%9C%AC%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB"},"3.0 SDK \u7248\u672c\u4e0e CDP \u5e73\u53f0\u652f\u6301\u529f\u80fd\u5bf9\u5e94\u5173\u7cfb")),(0,a.kt)("h3",{id:"12-\u5ba2\u6237\u7aef-sdk-path-\u503c\u7684\u751f\u6210\u903b\u8f91\u662f\u4ec0\u4e48"},"12. \u5ba2\u6237\u7aef SDK path \u503c\u7684\u751f\u6210\u903b\u8f91\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web\uff1a \u5982\u679c\u8bbe\u7f6e hashtag \u4e3a true\u65f6\uff0chashtag\u4f1a\u4f5c\u4e3a path\u7684\u4e00\u90e8\u5206 ",(0,a.kt)("br",null),"\n\u5982URL\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://blog.growingio.com/posts/search?keywords=data"},"https://blog.growingio.com/posts/search?keywords=data"),(0,a.kt)("br",null),"\n\u5b57\u6bb5\u548c\u503c\uff1a domain: blog.growingio.com\uff1b",(0,a.kt)("br",null),"   path:/posts/search\uff1b ",(0,a.kt)("br",null),"  query: keywords=data"),(0,a.kt)("li",{parentName:"ul"},'\u5c0f\u7a0b\u5e8f\uff1a\n"path": "pages/index/index"\n\u903b\u8f91\uff1a\u4ece page\u76ee\u5f55 \u81f3\u663e\u793a\u9875\u9762\u7684\u76ee\u5f55\u5d4c\u5957\u8def\u5f84\u3002'),(0,a.kt)("li",{parentName:"ul"},'iOS\uff1a\n"path" : "/UITabBarController/UINavigationController',"[1]","/ViewController","[0]",'"',(0,a.kt)("br",null),"\n\u903b\u8f91\uff1a\u4ece\u6839 Controller\u5230\u5f53\u524d\u5c55\u793a Controller \u7684\u5d4c\u5957\u8def\u5f84\uff0c  ","[1]",":\u8868\u793a\u6709\u591a\u4e2a Controller \u65f6 \u7ed9Controller \u5206\u914d\u7684\u7f16\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},'Android\uff1a\n"path": "/NestedFragmentActivity/GreenFragment',"[fragment1]",'"',(0,a.kt)("br",null),"\n\u903b\u8f91\uff1a\u4ece\u6839Activity\u5230\u5f53\u524d\u5c55\u793a Fragment \u7684\u5d4c\u5957\u8def\u5f84\uff0c ","[fragment1]",":\u8868\u793a \u7ed9Fragment \u8bbe\u7f6e\u5206\u914d\u7684tag\n\u5185\u5d4cH5\u9875\u9762\uff1a\u5185\u5d4cH5 \u9875\u9762\u7684 path \u7684\u751f\u6210\u903b\u8f91\u548cWeb \u7684 path \u751f\u6210\u903b\u8f91\u76f8\u540c\u3002")),(0,a.kt)("h3",{id:"13sdk-\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u4f20\u8f93\u662f\u600e\u4e48\u5b9e\u73b0\u7684"},"13.SDK \u6570\u636e\u52a0\u5bc6\u538b\u7f29\u4f20\u8f93\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:"),"\n\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u4f20\u8f93\u662fSDK\u5728\u53d1\u9001\u6570\u636e\u8bf7\u6c42\u65f6\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u538b\u7f29\uff0c\u5728\u8bf7\u6c42\u5934\u4e2d\u8bbe\u7f6e\u538b\u7f29\u548c\u52a0\u5bc6\u6807\u8bb0\uff1b\u670d\u52a1\u7aef\u6536\u5230\u8bf7\u6c42\u540e\u6839\u636e\u8bf7\u6c42\u5934\u6807\u8bb0\u81ea\u52a8\u9009\u62e9\u5bf9\u5e94\u7684\u89e3\u5bc6\u548c\u89e3\u538b\u7f29\u65b9\u5f0f\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002",(0,a.kt)("br",null),"\n\u5bf9SDK \u65e5\u5fd7\u4e2d\u7684\u6570\u636e\u548c\u6570\u636e\u7aef\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u6ca1\u6709\u5f71\u54cd\u3002",(0,a.kt)("br",null),"\n\u4f7f\u7528\u6293\u5305\u5de5\u5177\uff0c\u770b\u5230\u7684\u6570\u636e\u5c06\u662f\u5bc6\u6587\u6570\u636e\u3002",(0,a.kt)("br",null),"\n\u6ce8\uff1a\u6570\u636e\u683c\u5f0f JSON \u548c Protobuf  \u90fd\u53ef\u52a0\u5bc6\u538b\u7f29",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u52a0\u5bc6\u7b97\u6cd5:")," VDS_XOR",(0,a.kt)("br",null),"\nxor_code stm\u768416\u8fdb\u5236\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u8282( xor_code = stm&0xff), \u5bf9\u538b\u7f29\u7684\u5185\u5bb9\u6309\u5b57\u8282XOR(xor_code)\n\u6570\u636e\u5904\u7406\u524d\u5904\u7406\u65b9\u5f0f\uff1aSendData = Encode(Crypt(Compress(Data)))",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u4f18\u52bf"),(0,a.kt)("br",null),"\n\u6570\u636e\u52a0\u5bc6\u589e\u5f3a\u4e00\u5b9a\u7684\u6570\u636e\u5b89\u5168\u6027\uff0c\u6570\u636e\u538b\u7f29\u53ef\u4ee5\u8282\u7701\u4e00\u90e8\u5206\u7528\u6237\u6d41\u91cf",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u52a3\u52bf"),(0,a.kt)("br",null),"\n\u4f1a\u589e\u52a0\u52a0\u5bc6\u538b\u7f29\u7684\u8ba1\u7b97\u5f00\u9500"))}u.isMDXComponent=!0},1773:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2update3-8485a0e30f6ca603c4b8bc99bc03860e.png"}}]);