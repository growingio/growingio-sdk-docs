"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:6,title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898"},a=void 0,s={unversionedId:"other",id:"other",title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898",description:"1. \u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6SDK\u5173\u7cfb\u4e0e\u539f\u751f\u65e0\u57cb\u70b9SDK\u3001\u57cb\u70b9SDK\u8c03\u7528\u5173\u7cfb\u65f6\u600e\u6837\u7684\uff1f",source:"@site/question/other.md",sourceDirName:".",slug:"/other",permalink:"/growingio-sdk-docs/question/other",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/question/other.md",tags:[],version:"current",lastUpdatedAt:1678071861,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/minp"},next:{title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/server"}},l={},c=[{value:"1. \u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6SDK\u5173\u7cfb\u4e0e\u539f\u751f\u65e0\u57cb\u70b9SDK\u3001\u57cb\u70b9SDK\u8c03\u7528\u5173\u7cfb\u65f6\u600e\u6837\u7684\uff1f",id:"1-\u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6sdk\u5173\u7cfb\u4e0e\u539f\u751f\u65e0\u57cb\u70b9sdk\u57cb\u70b9sdk\u8c03\u7528\u5173\u7cfb\u65f6\u600e\u6837\u7684",level:3},{value:"Flutter",id:"flutter",level:2},{value:"1. flutter sdk \u4e0d\u662fnull safe\u6a21\u5f0f\u3002\u6211\u4eec\u4f1a\u8c03\u6574\u9002\u914d\u5417\uff1f",id:"1-flutter-sdk-\u4e0d\u662fnull-safe\u6a21\u5f0f\u6211\u4eec\u4f1a\u8c03\u6574\u9002\u914d\u5417",level:3},{value:"React Native",id:"react-native",level:2},{value:"1.  \u8bf7\u95eeRN\u548cReact\u6709\u533a\u522b\u5417\uff0c\u5ba2\u6237\u7684\u5c0f\u7a0b\u5e8f\u662fReact\u5199\u7684\uff0c\u9700\u8981\u96c6\u6210\u4ec0\u4e48sdk\u5462?",id:"1--\u8bf7\u95eern\u548creact\u6709\u533a\u522b\u5417\u5ba2\u6237\u7684\u5c0f\u7a0b\u5e8f\u662freact\u5199\u7684\u9700\u8981\u96c6\u6210\u4ec0\u4e48sdk\u5462",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6sdk\u5173\u7cfb\u4e0e\u539f\u751f\u65e0\u57cb\u70b9sdk\u57cb\u70b9sdk\u8c03\u7528\u5173\u7cfb\u65f6\u600e\u6837\u7684"},"1. \u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6SDK\u5173\u7cfb\u4e0e\u539f\u751f\u65e0\u57cb\u70b9SDK\u3001\u57cb\u70b9SDK\u8c03\u7528\u5173\u7cfb\u65f6\u600e\u6837\u7684\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:"),"\u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6SDK\u5b9e\u73b0\u4e2d\u6709\u6865\u63a5\u901a\u4fe1\u4ee3\u7801\uff0c\u5c06\u7b2c\u4e09\u65b9\u6846\u67b6SDK\u91c7\u96c6\u7684\u57cb\u70b9\u6570\u636e\u8f6c\u53d1\u81f3\u539f\u751f\u57cb\u70b9SDK\uff0c\u7531\u539f\u751f\u57cb\u70b9SDK \u4e0a\u62a5\u81f3\u91c7\u96c6\u670d\u52a1\u5668\u3002\n",(0,o.kt)("img",{alt:"other sdk with origin sdk",src:r(1912).Z,width:"1280",height:"625"})),(0,o.kt)("p",null,"\u7531\u4e8e\u76ee\u524d\u6865\u63a5\u901a\u4fe1\u4ee3\u7801\u4e2d\u8c03\u7528\u7684\u662f\u57cb\u70b9SDK\u7684 API\u8c03\u7528\u7c7b\u8c03\u7528\u5bf9\u5e94\u7684\u57cb\u70b9SDK API\uff0c\u6240\u4ee5APP \u53ea\u80fd\u96c6\u6210\u57cb\u70b9SDK\uff1b\u4f8b\u5982 \u7b2c\u4e09\u65b9\u6846\u67b6\u4e2d\u8c03\u7528 setLoginUserID\uff0c\u4f1a\u8c03\u7528\u539f\u751f\u57cb\u70b9SDK\u4e2d\u7684 setLoginUserID API\uff0c\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID\u4e5f\u4f1a\u5728\u539f\u751f\u57cb\u70b9SDK\u4e2d\u505a\u672c\u5730\u5b58\u50a8\uff1b\u5982\u679c\u539f\u751f\u4ee3\u7801\u4e2d\u8c03\u7528\u4e86setLoginUserID\uff0c\u5176\u540e\u89e6\u53d1\u7684\u7b2c\u4e09\u65b9\u6846\u67b6\u4e2d\u7684\u57cb\u70b9\u4e8b\u4ef6\u4e5f\u4f1a\u6709\u767b\u5f55\u7528\u6237ID\u5b57\u6bb5\u6570\u636e(\u7528\u6237\u591a\u8eab\u4efd\u6570\u636e\u540c\u7406)\uff1b\u5982\u679c\u7b2c\u4e09\u65b9\u6846\u67b6\u4ee3\u7801\u4e2d\u8c03\u7528\u4e86setLoginUserID\uff0c\u5176\u540e\u89e6\u53d1\u7684\u539f\u751f\u4ee3\u7801\u4e2d\u7684\u57cb\u70b9\u4e8b\u4ef6\u4e2d\u4e5f\u4f1a\u6709\u767b\u5f55\u7528\u6237ID\u5b57\u6bb5\u6570\u636e(\u7528\u6237\u591a\u8eab\u4efd\u6570\u636e\u540c\u7406)\u3002"),(0,o.kt)("p",null,"\u65e0\u57cb\u70b9SDK API\u8c03\u7528\u7c7b\uff1aAndroid\u3001iOS  API\u8c03\u7528\u7c7b\u4e3a GrowingAutotracker\uff1b\n\u57cb\u70b9SDK API\u8c03\u7528\u7c7b\uff1aAndroid\u3001iOS  API\u8c03\u7528\u7c7b\u4e3a GrowingTracker;\n\u5982\u679c\u5ba2\u6237\u9700\u8981APP\u96c6\u6210\u65e0\u57cb\u70b9SDK\uff0c\u540c\u65f6\u4e5f\u9700\u8981\u96c6\u6210\u7b2c\u4e09\u65b9\u6846\u67b6\u91c7\u96c6SDK\uff0c\u5219\u9700\u8981\u4fee\u6539\u7b2c\u4e09\u65b9\u6846\u67b6\u4e2d\u7684API\u8c03\u7528\u7c7b\uff1b\u5373\u5c06 GrowingTracker \u66ff\u6362\u4e3a GrowingAutotracker"),(0,o.kt)("h2",{id:"flutter"},"Flutter"),(0,o.kt)("h3",{id:"1-flutter-sdk-\u4e0d\u662fnull-safe\u6a21\u5f0f\u6211\u4eec\u4f1a\u8c03\u6574\u9002\u914d\u5417"},"1. flutter sdk \u4e0d\u662fnull safe\u6a21\u5f0f\u3002\u6211\u4eec\u4f1a\u8c03\u6574\u9002\u914d\u5417\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:"),"  flutter_growingio_track:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  git:\n    url: https://github.com/growingio/flutter-growingio-track.git\n    ref: 2.7.0\n")),(0,o.kt)("p",null,"\u4f9d\u8d56\u65b9\u5f0f\u6709\u6240\u6539\u53d8\uff0c\u4fee\u6539pub\u4f9d\u8d56\u4e3a 2.7.0 \u7248\u672c\u4ee5\u4e0a\uff0c\u9002\u914dnull safety\uff0c\u521d\u6b21 pub get \u9519\u8bef\u65f6\u8bf7\u5c06ref\u53d8\u66f4\u4e3amaster\u4ee5\u62c9\u53d6\u8fdc\u7aeftag\u66f4\u65b0\uff0c\u518d\u53d8\u4e3a2.7.0\u5373\u53ef"),(0,o.kt)("h2",{id:"react-native"},"React Native"),(0,o.kt)("h3",{id:"1--\u8bf7\u95eern\u548creact\u6709\u533a\u522b\u5417\u5ba2\u6237\u7684\u5c0f\u7a0b\u5e8f\u662freact\u5199\u7684\u9700\u8981\u96c6\u6210\u4ec0\u4e48sdk\u5462"},"1.  \u8bf7\u95eeRN\u548cReact\u6709\u533a\u522b\u5417\uff0c\u5ba2\u6237\u7684\u5c0f\u7a0b\u5e8f\u662fReact\u5199\u7684\uff0c\u9700\u8981\u96c6\u6210\u4ec0\u4e48sdk\u5462?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," RN\u662f\u5199app\u7528\u7684\uff0creact\u662f\u5199\u5c0f\u7a0b\u5e8f\u6216\u8005web\u7528\u7684\uff1b\u5c0f\u7a0b\u5e8f\u662fReact\u5199\u7684\u90a3\u8fd8\u662f\u5c0f\u7a0b\u5e8f\u7684sdk\uff1b\u5c0f\u7a0b\u5e8f\u4e0d\u7ba1\u662f\u539f\u751f\u8fd8\u662fvue\u8fd8\u662freact\uff0c\u5230\u6700\u540e\u8fd8\u662f\u8981\u7f16\u8bd1\u6210\u539f\u751f\u6765\u8fd0\u884c\u7684\uff0c\u6240\u4ee5\u5c0f\u7a0b\u5e8f\u4e0d\u7ba1\u7528\u4ec0\u4e48\u6846\u67b6\u6700\u540e\u8fd8\u662f\u7528\u5c0f\u7a0b\u5e8fsdk"))}p.isMDXComponent=!0},1912:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/otherSDK-originSDK-ca47309c2e9a031ecf640bebb8e940f7.png"}}]);