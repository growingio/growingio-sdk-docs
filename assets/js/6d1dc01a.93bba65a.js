"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5598],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(n),g=a,s=k["".concat(d,".").concat(g)]||k[g]||c[g]||i;return n?r.createElement(s,o(o({ref:e},m),{},{components:n})):r.createElement(s,o({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},927:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"home",sidebar_position:1,title:"SDK \u7b80\u4ecb",slug:"/"},d=void 0,p={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"SDK \u7b80\u4ecb",description:"--------------",source:"@site/docs/SDK OVERVIEW.md",sourceDirName:".",slug:"/",permalink:"/growingio-sdk-docs/docs/",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/SDK OVERVIEW.md",version:"current",sidebarPosition:1,frontMatter:{id:"home",sidebar_position:1,title:"SDK \u7b80\u4ecb",slug:"/"},sidebar:"gioSidebar",next:{title:"\u4ea7\u54c1\u77e5\u8bc6",permalink:"/growingio-sdk-docs/docs/basicknowledge/productionInfo"}},m=[{value:"\u4ea7\u54c1\u6982\u8ff0",id:"\u4ea7\u54c1\u6982\u8ff0",children:[]},{value:"SDK \u7b80\u4ecb",id:"sdk-\u7b80\u4ecb",children:[{value:"JS SDK",id:"js-sdk",children:[]},{value:"\u79fb\u52a8\u7aef SDK",id:"\u79fb\u52a8\u7aef-sdk",children:[]},{value:"\u4f7f\u7528\u6d41\u7a0b",id:"\u4f7f\u7528\u6d41\u7a0b",children:[]},{value:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e SDK\u7248\u672c\u5bf9\u5e94\u5173\u7cfb",id:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e-sdk\u7248\u672c\u5bf9\u5e94\u5173\u7cfb",children:[]}]}],c={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4ea7\u54c1\u6982\u8ff0"},"\u4ea7\u54c1\u6982\u8ff0"),(0,i.kt)("p",null,"GrowingIO \uff08\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\uff09\u662f\u57fa\u4e8e\u7528\u6237\u884c\u4e3a\u6570\u636e\u7684\u589e\u957f\u5e73\u53f0\uff0c\u56fd\u5185\u9886\u5148\u7684\u6570\u636e\u8fd0\u8425\u89e3\u51b3\u65b9\u6848\u4f9b\u5e94\u5546\u3002\u4e3a\u4ea7\u54c1\u3001\u8fd0\u8425\u3001\u5e02\u573a\u3001\u6570\u636e\u56e2\u961f\u53ca\u7ba1\u7406\u8005\u7b49\uff0c\u63d0\u4f9b\u5ba2\u6237\u6570\u636e\u5e73\u53f0\u3001  \u4ea7\u54c1\u5206\u6790\u3001\u83b7\u5ba2\u5206\u6790\uff0c\u667a\u80fd\u8fd0\u8425\u7b49\u4ea7\u54c1\u548c\u54a8\u8be2\u670d\u52a1\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5728\u6570\u636e\u5316\u5347\u7ea7\u7684\u8def\u4e0a\uff0c\u63d0\u5347\u6570\u636e\u9a71\u52a8\u80fd\u529b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u589e\u957f\u3002"),(0,i.kt)("p",null,"GrowingIO \u4e13\u6ce8\u4e8e\u96f6\u552e\u3001\u7535\u5546\u3001\u91d1\u878d\u3001\u9152\u65c5\u822a\u53f8\u3001\u6559\u80b2\u3001\u5185\u5bb9\u793e\u533a\u3001B2B\u7b49\u884c\u4e1a\uff0c\u6210\u7acb\u4ee5\u6765\uff0c\u670d\u52a1\u4e0a\u5343\u5bb6\u4f01\u4e1a\u7ea7\u5ba2\u6237\uff0c\u83b7\u5f97\u8fea\u5965\u3001\u5b89\u8e0f\u3001\u559c\u8336\u3001\u62db\u5546\u4ec1\u548c\u4eba\u5bff\u3001\u4e0a\u6c7d\u96c6\u56e2\u3001\u4e1c\u822a\u3001\u6625\u822a\u3001\u9996\u65c5\u5982\u5bb6\u3001\u964c\u964c\u3001\u6ef4\u6ef4\u3001\u7231\u5947\u827a\u3001\u65b0\u4e1c\u65b9\u7b49\u5ba2\u6237\u7684\u9752\u7750\u3002"),(0,i.kt)("p",null,"GrowingIO \u5e2e\u52a9\u5ba2\u6237\u63d0\u5347\u6570\u636e\u9a71\u52a8\u80fd\u529b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u589e\u957f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.growingio.com/.gitbook/assets/-LGNxeGABUADKiTWTaEM-LIEN5IgjD_lm1zFG-YX-LIEN8O7RZ9ipiI48vpk45_4_conversion_1_.gif",alt:"slogan"})),(0,i.kt)("h2",{id:"sdk-\u7b80\u4ecb"},"SDK \u7b80\u4ecb"),(0,i.kt)("p",null,"SDK \u5305\u62ec Web js\u5e73\u53f0\u548c\u79fb\u52a8\u7aef\u4e0aAndroid\uff0ciOS\u4e24\u4e2a\u5e73\u53f0\uff0c\u4ee5\u53ca\u4f17\u591a\u7684\u7b2c\u4e09\u65b9\u6df7\u5408\u5f00\u53d1\u6846\u67b6\u3002  "),(0,i.kt)("h3",{id:"js-sdk"},"JS SDK"),(0,i.kt)("p",null,"GrowingIO Web JS SDK \u662f\u8fd0\u884c\u4e8e\u7f51\u9875\u7684\u4e00\u6bb5 Javascript \u4ee3\u7801\uff0c\u57fa\u4e8e\u65e0\u57cb\u70b9\u6280\u672f\u91c7\u96c6\u7f51\u7ad9\u6570\u636e\uff0c\u540c\u65f6 GrowingIO Web JS SDK \u4e5f\u63d0\u4f9b\u4e30\u5bcc\u7684\u63a5\u53e3\u4ee5\u652f\u6301\u57cb\u70b9\u3002\u91c7\u96c6\u5230\u7684\u6570\u636e\u5c06\u88ab\u4f20\u8f93\u5e76\u5b58\u50a8\u5728 GrowingIO \u7684\u4e91\u7aef\u670d\u52a1\u5668\u4e0a\u3002GrowingIO \u901a\u8fc7\u4f7f\u7528\u8fd9\u4e9b\u6570\u636e\u6765\u5206\u6790\u5ba2\u6237\u7f51\u7ad9\u7684\u7528\u6237\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u751f\u6210\u7f51\u7ad9\u4f7f\u7528\u62a5\u544a\uff0c\u63d0\u4f9b\u8ddf\u7528\u6237\u884c\u4e3a\u6570\u636e\u5206\u6790\u76f8\u5173\u7684\u670d\u52a1\u3002"),(0,i.kt)("p",null,"GrowingIO Web JS SDK \u4f1a\u5728\u7f51\u7ad9\u7528\u6237\u52a0\u8f7d\u7f51\u9875\u540e\u81ea\u52a8\u542f\u52a8\uff0c\u5e76\u6536\u96c6\u7528\u6237\u7684\u884c\u4e3a\u6570\u636e\uff0c\u5efa\u8bae\u5c06 GrowingIO \u63d0\u4f9b\u7684\u8ddf\u8e2a\u4ee3\u7801\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"<head> </head>")," \u4e4b\u95f4\u3002JS SDK \u91c7\u7528\u5f02\u6b65\u65b9\u5f0f\u52a0\u8f7d\uff0c\u4e0d\u4f1a\u5f71\u54cd\u7f51\u7ad9\u81ea\u8eab\u7684\u52a0\u8f7d\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u76ee\u524d SDK \u4e3b\u8981\u91c7\u96c6\u4e09\u7c7b\u6570\u636e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8bbf\u95ee\u6570\u636e"),":\u7f51\u7ad9\u8bbf\u5ba2\u5728\u4f55\u65f6\u4f55\u5730\u8bbf\u95ee\u4e86\u54ea\u4e2a\u7f51\u9875\uff0c\u6536\u96c6\u4fe1\u606f\u5305\u62ec\u57df\u540d\u3001\u9875\u9762\u8def\u5f84\u3001\u6d4f\u89c8\u5668\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u5c4f\u5e55\u5206\u8fa8\u7387\u3001\u8bbf\u95ee\u6765\u6e90\u3001\u7528\u6237\u552f\u4e00\u6807\u8bc6 ID\u3001\u8bbf\u95ee\u552f\u4e00\u6807\u8bc6 ID\u3001\u8bbf\u95ee\u65f6\u95f4\u3001\u9875\u9762\u6807\u9898\u7b49\u3002\u5982\u679c\u5ba2\u6237\u96c6\u6210\u65f6\u8bbe\u7f6e\u4e86\u81ea\u5b9a\u4e49\u7ef4\u5ea6\uff0c\u4e5f\u4f1a\u4e00\u5e76\u6536\u96c6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u884c\u4e3a\u6570\u636e"),":\u7528\u6237\u5728\u7f51\u7ad9\u4e0a\u7684\u4ea4\u4e92\u884c\u4e3a\uff0c\u6bd4\u5982\u70b9\u51fb\u94fe\u63a5\u3001\u63d0\u4ea4\u8868\u5355\u3001\u4fee\u6539\u9009\u62e9\uff0c\u90fd\u4f1a\u88ab\u81ea\u52a8\u91c7\u96c6\u3002\u91c7\u96c6\u5185\u5bb9\u5305\u62ec\u4ea4\u4e92\u884c\u4e3a\u7c7b\u578b\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u9875\u9762\u4fe1\u606f\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u6807\u8bb0 ID\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u8d85\u94fe\u63a5\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u4f4d\u7f6e\u4fe1\u606f\u7b49\u3002GrowingIO \u4e0d\u91c7\u96c6\u4efb\u4f55\u7528\u6237\u5728\u6587\u672c\u6846\u4e2d\u8f93\u5165\u7684\u5bc6\u7801\u7b49\u4e2a\u4eba\u9690\u79c1\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5143\u7d20\u6d4f\u89c8\u6570\u636e"),":\u5f53\u7528\u6237\u8bbf\u95ee\u7f51\u7ad9\u65f6\uff0c\u7528\u6237\u6d4f\u89c8\u7684\u5185\u5bb9\u5373\u9875\u9762\u51fa\u73b0\u7684\u5143\u7d20\uff0c\u4f1a\u88ab\u81ea\u52a8\u91c7\u96c6\uff0c\u5305\u62ec\u5185\u5bb9\u6240\u5728\u7684\u9875\u9762\u4fe1\u606f\u3001\u5143\u7d20\u7684\u6807\u8bb0 ID\u3001\u6587\u672c\u5185\u5bb9\u3001\u8d85\u94fe\u63a5\u3001\u4f4d\u7f6e\u4fe1\u606f\u3002")),(0,i.kt)("h3",{id:"\u79fb\u52a8\u7aef-sdk"},"\u79fb\u52a8\u7aef SDK"),(0,i.kt)("p",null,"\u79fb\u52a8\u7aefSDK\u9700\u8981\u5728\u5e94\u7528\u6253\u5305\u65f6\uff0c\u88ab\u52a0\u8f7d\u5728\u60a8\u7684\u5e94\u7528\u5f53\u4e2d\u3002GrowingIO\u7684\u300c\u79fb\u52a8\u7aefSDK\u300d\u4f1a\u968f\u7740\u5ba2\u6237\u5e94\u7528\u7684\u542f\u52a8\u800c\u81ea\u52a8\u5f00\u59cb\u8fdb\u884c\u7528\u6237\u884c\u4e3a\u6570\u636e\u3002\u5f53\u7528\u6237\u5173\u95ed\u5e94\u7528\u65f6\uff0cSDK\u4f1a\u968f\u7740\u5ba2\u6237\u5e94\u7528\u7684\u5173\u95ed\u800c\u5173\u95ed\uff0c\u4e0d\u4f1a\u5728\u540e\u53f0\u505a\u4efb\u4f55\u989d\u5916\u52a8\u4f5c\u3002"),(0,i.kt)("h4",{id:"\u65f6\u95f4\u5ef6\u8fdf"},"\u65f6\u95f4\u5ef6\u8fdf"),(0,i.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u6ce8\u91cdSDK\u7684\u7a33\u5b9a\u6027\uff0c\u6bcf\u4e2a\u7248\u672c\u7684SDK\u6211\u4eec\u90fd\u4f1a\u8fdb\u884c\u5927\u91cf\u7684\u7a33\u5b9a\u6027\u6d4b\u8bd5\uff0c\u4ee5\u786e\u4fdd\u60a8\u7684\u5e94\u7528\u4e00\u5982\u65e2\u5f80\u7684\u7a33\u5b9a\u3002\u4ece\u76ee\u524d\u5ba2\u6237\u96c6\u6210SDK\u7684\u7ed3\u679c\u6765\u770b\uff0c\u5e94\u7528\u7684\u5d29\u6e83\u7387\u6ca1\u6709\u56e0\u4e3a\u96c6\u6210\u800c\u63d0\u9ad8\u3002"),(0,i.kt)("h4",{id:"\u79fb\u52a8\u7aefsdk\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b"},"\u79fb\u52a8\u7aefSDK\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,"\u4e0e\u300cJS SDK\u300d\u4e00\u6837\uff0c\u79fb\u52a8\u7aefSDK\u4e3b\u8981\u91c7\u96c6\u4e09\u7c7b\u6570\u636e\uff1a\u8bbf\u95ee\u6570\u636e\uff0c\u5185\u5bb9\u6570\u636e\uff0c\u884c\u4e3a\u6570\u636e\u3002\u5e76\u4e14\uff0c\u4e0d\u91c7\u96c6\u5e94\u7528\u6587\u672c\u6846\u91cc\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u4e0d\u4f1a\u4e3b\u52a8\u8bb0\u5f55\u666e\u901a\u7528\u6237\u586b\u5199\u7684\u8d26\u6237/\u7535\u8bdd/\u94f6\u884c\u5361\u7b49\u9690\u79c1\u4fe1\u606f\uff0c\u5728\u91c7\u96c6\u73af\u8282\u4fdd\u8bc1\u5b89\u5168\u3002"),(0,i.kt)("h4",{id:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9"},"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6846\u67b6"),(0,i.kt)("th",{parentName:"tr",align:"center"},"SDK\u7c7b\u522b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"App\u9002\u914d\u7684\u7cfb\u7edf\u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:"right"},"\u6846\u67b6\u7248\u672c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u539f\u751fAndroid"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u539f\u751fiOS"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"React Native"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0.46-0.56\u30010.59.9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Flutter"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Cordova"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Weex"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0.16.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"API Cloud"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"APP Can"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-")))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8d2d\u4e70 CDP \u4ea7\u54c1;"),(0,i.kt)("li",{parentName:"ol"},"\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"li"},"AccountId"),",",(0,i.kt)("inlineCode",{parentName:"li"},"UrlScheme"),",",(0,i.kt)("inlineCode",{parentName:"li"},"ServerHost")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"DataSourceId"),";"),(0,i.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u96c6\u6210;")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8e CDP \u4ea7\u54c1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"GrowingIO CDP \u4ea7\u54c1\u662f\u96c6",(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u6570\u636e\u5206\u6790\u548c\u5ba2\u6237\u7aef\u81ea\u52a8\u57cb\u70b9\u4e00\u4f53\u5316"),"\u7684\u4ea7\u54c1\u670d\u52a1\u3002"))),(0,i.kt)("h3",{id:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e-sdk\u7248\u672c\u5bf9\u5e94\u5173\u7cfb"},"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e SDK\u7248\u672c\u5bf9\u5e94\u5173\u7cfb"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5e73\u53f0\u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u529f\u80fd"),(0,i.kt)("th",{parentName:"tr",align:"center"},"SDK\u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"OP-13.6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"OP-14.3.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5168\u91cf context \u5b57\u6bb5\u4f20\u8f93,\u670d\u52a1\u7aef\u901a\u7528\u7ef4\u5ea6\u62c6\u89e3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.2.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"OP-2.0.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301 user_key,IDMapping"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.3.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u91c7\u96c6\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u529f\u80fd\u4ea7\u54c1\u9700\u8981\u5347\u7ea7\u5230 14.3.0 \u4e4b\u540e\uff0c Android SDK 3.3.0\u4e4b\u540e\uff0c iOS  SDK 3.3.0\u4e4b\u540e"))))}k.isMDXComponent=!0}}]);