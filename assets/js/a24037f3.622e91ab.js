"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Web JS SDK \u5408\u89c4\u8bf4\u660e"},a=void 0,l={unversionedId:"compliance/webCompliance",id:"compliance/webCompliance",title:"Web JS SDK \u5408\u89c4\u8bf4\u660e",description:"\u6536\u96c6\u7684\u6570\u636e",source:"@site/docs/compliance/webCompliance.md",sourceDirName:"compliance",slug:"/compliance/webCompliance",permalink:"/growingio-sdk-docs/docs/compliance/webCompliance",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/compliance/webCompliance.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Web JS SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"gioSidebar",previous:{title:"iOS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/iosCompliance"},next:{title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/minpCompliance"}},c={},p=[{value:"\u6536\u96c6\u7684\u6570\u636e",id:"\u6536\u96c6\u7684\u6570\u636e",level:2},{value:"\u5173\u4e8eCookie",id:"\u5173\u4e8ecookie",level:3},{value:"\u5173\u4e8e IP \u5730\u5740",id:"\u5173\u4e8e-ip-\u5730\u5740",level:3},{value:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",level:2},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"GDPR",id:"gdpr",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6536\u96c6\u7684\u6570\u636e"},"\u6536\u96c6\u7684\u6570\u636e"),(0,r.kt)("p",null,"\u6309\u7167 GDPR \u7684\u754c\u5b9a\uff0cGrowingIO \u5c5e\u4e8e\u6570\u636e\u5904\u7406\u65b9\uff0c\u8fd9\u662f\u56e0\u4e3a GrowingIO \u4f1a\u6309\u7167\u5ba2\u6237\u7684\u6307\u793a\u4ee3\u8868\u5ba2\u6237\u6536\u96c6\u548c\u5904\u7406\u6570\u636e\u3002\u6211\u4eec\u7684\u5ba2\u6237\u5219\u662f\u6570\u636e\u63a7\u5236\u65b9\uff0c\u4ed6\u4eec\u62e5\u6709\u6240\u6709\u76f8\u5173\u6743\u5229\uff0c\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u968f\u65f6\u63a7\u5236\u662f\u5426\u5f00\u542f\u6570\u636e\u6536\u96c6\u548c\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u6536\u96c6\u4fe1\u606f\u662f\u4e3a\u4e86\u60a8\u7684\u7f51\u7ad9\u5411\u6240\u6709\u7528\u6237\u63d0\u4f9b\u66f4\u597d\u7684\u670d\u52a1\u3002GrowingIO Web JS SDK \u5c06\u4f1a\u6536\u96c6\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u4fe1\u606f\uff0c\u7f51\u7edc\u4fe1\u606f\u3002\u4f7f\u7528 Cookie \u6765\u5b58\u50a8 SDK \u81ea\u52a8\u751f\u6210\u7684\u8bbf\u95ee\u7528\u6237ID\u3002"),(0,r.kt)("h3",{id:"\u5173\u4e8ecookie"},"\u5173\u4e8eCookie"),(0,r.kt)("p",null,"GrowingIO Web JS SDK\u4e3b\u8981\u4f7f\u7528 Cookie \u6765\u5b58\u50a8SDK \u81ea\u52a8\u751f\u6210\u7684\u8bbf\u95ee\u7528\u6237ID\uff08\u7528\u4e8e\u6807\u8bb0\u8bbf\u95ee\u7528\u6237\uff09\uff1b\u4e0d\u83b7\u53d6\u5ba2\u6237\u7f51\u7ad9Cookie\u4e2d\u5185\u5bb9\u3002\u7528\u6237\u53ef\u4ee5\u505c\u7528 Cookie \u6216\u5220\u9664\u4efb\u4f55\u5355\u4e2a Cookie \u8bb0\u5f55\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u81ea SDK\u7248\u672c 3.3.10\u8d77\uff0c SDK \u652f\u6301\u4e86 Cookie \u52a0\u5bc6\u529f\u80fd\uff0c\u5bf9 Cookie \u8fdb\u884c\u6df1\u5c42\u52a0\u5bc6\uff0c\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u6027\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 SDK 3.3.10\u53ca\u4e4b\u540e\u7248\u672c\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6240\u6709\u9875\u9762\u7684 SDK \u5fc5\u987b\u662f\u6700\u65b0\u7248\u672c\uff1b\u5426\u5219\u5982\u679c\u67d0\u4e9b\u9875\u9762\u4f7f\u7528 Cookie \u52a0\u5bc6\u529f\u80fd\uff0c\u90a3\u4e48 Cookie \u5c31\u662f\u52a0\u5bc6\u7684\uff0c\u4e00\u65e6\u4e2a\u522b\u9875\u9762\u4f7f\u7528\u662f\u4f4e\u7248\u672c SDK \uff0c\u6ca1\u6709\u5bf9\u5e94\u7684\u89e3\u5bc6\u529f\u80fd\uff0c\u90fd\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u89e3\u6790 Cookie \uff0c\u4ece\u800c\u9020\u6210\u4ea7\u751f\u65b0\u7528\u6237\uff0c\u51fa\u73b0\u6570\u636e\u5f02\u5e38\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"\u5173\u4e8e-ip-\u5730\u5740"},"\u5173\u4e8e IP \u5730\u5740"),(0,r.kt)("p",null,"GrowingIO\u4f7f\u7528 IP \u5730\u5740\u6765\u5206\u6790\u8bbf\u95ee\u8005\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u786e\u4fdd\u6b64\u670d\u52a1\u548c\u6211\u4eec\u5ba2\u6237\u7684\u5b89\u5168\u3002\u5ba2\u6237\u53ef\u4ee5\u91c7\u53d6 IP \u63a9\u76d6\u505a\u6cd5\uff0c\u4ee5\u4fbf GrowingIO \u4ec5\u4f7f\u7528\u6240\u6536\u96c6\u7684 IP \u5730\u5740\u7684\u4e00\u90e8\u5206\uff0c\u800c\u4e0d\u4f7f\u7528\u5b8c\u6574\u7684 IP \u5730\u5740\u3002\u6b64\u5916\uff0c\u5ba2\u6237\u4e5f\u53ef\u4ee5\u81ea\u7531\u4f7f\u7528\u6211\u4eec\u7684 IP \u66ff\u6362\u529f\u80fd\u6765\u66ff\u6362 IP \u5730\u5740\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"},"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u53d1\u9001\u6570\u636e\u662f\u660e\u6587\uff0c\u53ef\u901a\u8fc7\u5c06 compress \u8bbe\u7f6e\u4e3a true \u5f00\u542f\u6570\u636e\u538b\u7f29\uff0c\u4e00\u65b9\u9762\u4fdd\u8bc1\u6570\u636e\u4e0d\u80fd\u88ab\u76f4\u63a5\u67e5\u770b\uff0c\u589e\u5f3a\u4e86\u6570\u636e\u7684\u5b89\u5168\u6027\u3002\u53e6\u4e00\u65b9\u9762\u53ef\u4ee5\u8282\u7701\u7528\u6237\u7684\u6d41\u91cf\u3002\n\u4f7f\u7528\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/3.3/initSettings#compress"},"SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93 compress"),"\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"},"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"),(0,r.kt)("p",null,"Web JS SDK\u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u91c7\u7528\u5b9e\u65f6\u53d1\u9001\u7684\u7b56\u7565\uff0c\u56e0\u6b64\u884c\u4e3a\u6570\u636e\u6ca1\u6709\u505a\u7f13\u5b58\u5b58\u50a8\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u5408\u89c4\u6b65\u9aa4"},"\u5408\u89c4\u6b65\u9aa4"),(0,r.kt)("h3",{id:"gdpr"},"GDPR"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84"},"\u200bGeneral Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"),"\u200b"),(0,r.kt)("p",null,"GrowingIO \u4f5c\u4e3a\u6570\u636e\u5904\u7406\u65b9\uff0c\u4e3a\u7b26\u5408 GDPR\uff0c Web JS SDK \u63d0\u4f9b\u8bbe\u7f6e\u63a5\u53e3\uff0c\u53ef\u5728\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\u65f6\uff0c\u521d\u59cb\u5316\u65f6\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"dataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \uff0c\u7981\u6b62\u6570\u636e\u91c7\u96c6\u3002",(0,r.kt)("br",null),"\u5728\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setDataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002",(0,r.kt)("br",null),"\u5728\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u521d\u59cb\u5316\u65f6\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"dataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u7528\u6237\u662f\u5426\u540c\u610f\u9690\u79c1\u534f\u8bae boolean \u7c7b\u578b\nvar isAgreePolicy = <\u7528\u6237\u662f\u5426\u540c\u610f\u9690\u79c1\u534f\u8bae>\ngdp('init', 'your accountId', 'your dataSourceId', {\n  host: 'your apiServerHost',\n  version: '1.0.0',\n  dataCollect: isAgreePolicy,\n  debug: true  // \u6253\u5f00debug\u8c03\u8bd5\u80fd\u529b\n});\ngdp('send');\n\n// \u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\u65f6\uff0c\u5f39\u51fa\u9690\u79c1\u534f\u8bae\u5f39\u6846\uff0c\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\ngdp('setDataCollect', true);\n")))}s.isMDXComponent=!0}}]);