"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6910],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},g="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=l(i),c=o,u=g["".concat(d,".").concat(c)]||g[c]||k[c]||r;return i?n.createElement(u,a(a({ref:t},m),{},{components:i})):n.createElement(u,a({ref:t},m))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[g]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<r;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7714:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=i(7462),o=(i(7294),i(3905));i(4996);const r={slug:"/giokit/web",title:"\u529f\u80fd\u4ecb\u7ecd"},a=void 0,p={unversionedId:"giokit/web/index",id:"giokit/web/index",title:"\u529f\u80fd\u4ecb\u7ecd",description:"\u7b80\u4ecb",source:"@site/docs/giokit/web/index.md",sourceDirName:"giokit/web",slug:"/giokit/web",permalink:"/growingio-sdk-docs/docs/giokit/web",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/web/index.md",tags:[],version:"current",frontMatter:{slug:"/giokit/web",title:"\u529f\u80fd\u4ecb\u7ecd"},sidebar:"docSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs/docs/giokit/ios/integrate"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/web/version"}},d={},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:3},{value:"\u7f51\u7edc\u8bf7\u6c42",id:"\u7f51\u7edc\u8bf7\u6c42",level:3},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",level:3},{value:"\u9875\u9762\u548c\u8bbe\u5907",id:"\u9875\u9762\u548c\u8bbe\u5907",level:3},{value:"\u4e8b\u4ef6\u8c03\u8bd5",id:"\u4e8b\u4ef6\u8c03\u8bd5",level:3},{value:"\u4e8b\u4ef6\u6a21\u62df",id:"\u4e8b\u4ef6\u6a21\u62df",level:3},{value:"\u5feb\u901f\u521d\u59cb\u5316",id:"\u5feb\u901f\u521d\u59cb\u5316",level:3},{value:"\u8fd0\u884c\u72b6\u6001",id:"\u8fd0\u884c\u72b6\u6001",level:3}],m=(g="ImageLoader",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var g;const k={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"WebJS GioKit \u5177\u6709\u517c\u5bb9\u6027\u5f3a\u3001\u529f\u80fd\u4e30\u5bcc\u3001\u754c\u9762\u7f8e\u89c2\u3001\u4f7f\u7528\u7b80\u5355\u7b49\u4f18\u70b9\uff0c\u65e0\u9700\u4f9d\u8d56\u5176\u4ed6\u73af\u5883\uff0c\u53ef\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"VConsole"),"\u7b49\u5176\u4ed6\u8c03\u8bd5\u5de5\u5177\u540c\u65f6\u4f7f\u7528\u3002\u4e3b\u8981\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u7f51\u7edc\u8bf7\u6c42"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u5b58\u50a8"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u9875\u9762\u548c\u8bbe\u5907"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e8b\u4ef6\u8c03\u8bd5"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e8b\u4ef6\u6a21\u62df"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u5feb\u901f\u521d\u59cb\u5316"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u72b6\u6001")," 8 \u5927\u6a21\u5757\u529f\u80fd\u3002\u540e\u7eed\u4f1a\u6301\u7eed\u8fed\u4ee3\u5e76\u65b0\u589e\u5176\u4ed6\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\u3002"),(0,o.kt)("p",null,"GioKit \u540c\u65f6\u9002\u914d PC \u7aef\u548c\u79fb\u52a8\u7aef\u3002"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"WebJS GioKit \u6682\u4ec5\u652f\u6301 3.8.0 \u4ee5\u4e0a\u7248\u672c\u7684 SDK\uff0c\u5176\u4ed6\u7248\u672c SDK \u63a5\u5165\u53ef\u80fd\u4f1a\u9047\u5230\u65e0\u6cd5\u4f7f\u7528\u6216 SDK \u62a5\u9519\u7684\u95ee\u9898\u3002")),(0,o.kt)(m,{path:"img/giokit/web/pc-overview",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-overview",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,o.kt)("h3",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Gio"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Log"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Info"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Warn"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," \u7ea7\u522b\u7684\u65e5\u5fd7\u8f93\u51fa\uff0c\u63d0\u4f9b\u624b\u52a8\u6267\u884c JS \u547d\u4ee4\u884c\u3001\u641c\u7d22\u3001\u6e05\u7a7a\u529f\u80fd\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-log",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-log",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u7f51\u7edc\u8bf7\u6c42"},"\u7f51\u7edc\u8bf7\u6c42"),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Fetch")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"sendBeacon")," \u8bf7\u6c42\u5185\u5bb9\uff0c\u5176\u4e2d Gio \u7684\u4e0a\u62a5\u8bf7\u6c42\u4f7f\u7528\u6a59\u8272",(0,o.kt)("inlineCode",{parentName:"p"},"G"),"\u6807\u5fd7\u8fdb\u884c\u7a81\u51fa\u6807\u8bb0\u4ee5\u65b9\u4fbf\u533a\u5206\u3002\u8bf7\u6c42\u72b6\u6001\u5b9e\u65f6\u66f4\u65b0\uff0c\u4f7f\u7528\u4e0d\u540c\u989c\u8272\u6807\u8bb0\u8bf7\u6c42\u65f6\u957f\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-network",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-network",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u5b58\u50a8"},"\u5b58\u50a8"),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookies"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"LocalStorage")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"SessionStorage")," \u6570\u636e\u5185\u5bb9\uff0c\u63d0\u4f9b \u65b0\u589e\u3001\u7f16\u8f91\u3001\u5220\u9664\u3001\u641c\u7d22 \u529f\u80fd\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-storage",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-storage",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u9875\u9762\u548c\u8bbe\u5907"},"\u9875\u9762\u548c\u8bbe\u5907"),(0,o.kt)("p",null,"\u67e5\u770b\u5f53\u524d\u9875\u9762\u5728\u6d4f\u89c8\u5668\u548c Gio SDK \u89e3\u6790\u4e0b\u7684\u9875\u9762\u6570\u636e\uff1b\u67e5\u770b\u8bbe\u5907\u3001\u6d4f\u89c8\u5668\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-system",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-system",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u8c03\u8bd5"},"\u4e8b\u4ef6\u8c03\u8bd5"),(0,o.kt)("p",null,"Gio \u4e8b\u4ef6\u5b9e\u65f6\u76d1\u63a7\uff0c\u4e0d\u7528\u6253\u5f00\u9762\u677f\u5373\u53ef\u611f\u77e5 Gio \u4e8b\u4ef6\u7684\u4ea7\u751f\u3002\u53ef\u5feb\u901f\u67e5\u770b\u4e0a\u62a5\u4e8b\u4ef6\u8be6\u60c5\uff0c\u6781\u5927\u5730\u65b9\u4fbf\u4e8b\u4ef6\u7684\u6821\u9a8c\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-monitor",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-monitor",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(m,{path:"img/giokit/web/pc-debug",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-debug",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u6a21\u62df"},"\u4e8b\u4ef6\u6a21\u62df"),(0,o.kt)("p",null,"\u901a\u8fc7\u53ef\u89c6\u5316\u5de5\u5177\u672c\u5730\u6a21\u62df\u9884\u89c8\u4e00\u4e2a\u6307\u5b9a\u7c7b\u578b\u4e8b\u4ef6\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-mockevent",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-mockevent",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u5feb\u901f\u521d\u59cb\u5316"},"\u5feb\u901f\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u901a\u8fc7\u53ef\u89c6\u5316\u8868\u5355\u5feb\u901f\u751f\u6210\u9002\u5408\u60a8\u4e1a\u52a1\u573a\u666f\u9700\u8981\u7684\u529f\u80fd\u6027\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u6781\u5927\u5730\u964d\u4f4e\u5f00\u53d1\u8005\u7684\u7406\u89e3\u4e0a\u624b\u96be\u5ea6\u548c\u4ee3\u7801\u51fa\u9519\u6982\u7387\uff0c\u5feb\u901f\u5b8c\u6210 SDK \u7684\u63a5\u5165\uff0c\u63d0\u9ad8\u6548\u7387\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-quickinit",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-quickinit",height:"50%",width:"30%",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"\u8fd0\u884c\u72b6\u6001"},"\u8fd0\u884c\u72b6\u6001"),(0,o.kt)("p",null,"\u53ef\u5168\u9762\u5feb\u901f\u5730\u4e86\u89e3\u5f53\u524d SDK \u7684\u96c6\u6210\u548c\u8fd0\u884c\u72b6\u6001\uff0c\u5e2e\u52a9\u5feb\u901f\u5b9a\u4f4d\u57fa\u7840\u95ee\u9898\u3002"),(0,o.kt)(m,{path:"img/giokit/web/pc-status",width:"65%",mdxType:"ImageLoader"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,o.kt)(m,{path:"img/giokit/web/n-status",height:"50%",width:"30%",mdxType:"ImageLoader"}))}u.isMDXComponent=!0}}]);