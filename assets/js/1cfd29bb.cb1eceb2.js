"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},a=void 0,s={unversionedId:"giokit/web/integrate",id:"giokit/web/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/giokit/web/integrate.md",sourceDirName:"giokit/web",slug:"/giokit/web/integrate",permalink:"/growingio-sdk-docs/docs/giokit/web/integrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/web/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/web/version"},next:{title:"\u5ba2\u6237\u7aefSDK2.x\u5347\u7ea73.x\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/SDK2.xupgrade3.x"}},p={},l=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5f00\u59cb\u96c6\u6210",id:"\u5f00\u59cb\u96c6\u6210",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"WebJS GioKit \u4ec5\u652f\u6301 3.8.0 \u4ee5\u4e0a\u7248\u672c\u7684 SDK\uff0c\u5176\u4ed6\u7248\u672c SDK \u63a5\u5165\u53ef\u80fd\u4f1a\u9047\u5230\u65e0\u6cd5\u4f7f\u7528\u6216 SDK \u62a5\u9519\u7684\u95ee\u9898\u3002")),(0,i.kt)("p",null,"\u8bf7\u9996\u5148\u786e\u8ba4\u60a8\u7684\u91c7\u96c6 SDK \u7248\u672c\uff0c\u9700>=3.8.0\uff08\u6b63\u5f0f\u7248\uff0c\u975e RC \u7248\uff09\u624d\u80fd\u652f\u6301\u3002\u5982\u60a8\u96c6\u6210\u4f4e\u7248\u672c\u7684 SDK\uff0c\u5f3a\u70c8\u5efa\u8bae\u60a8\u5bf9 SDK \u5347\u7ea7\uff0c\u540e\u7eed WebJS SDK \u53ea\u4f1a\u5728 3.8 \u7248\u672c\u8fdb\u884c\u529f\u80fd\u8fed\u4ee3\uff0c3.3 \u7248\u672c\u4ec5\u9650\u91cd\u5927\u95ee\u9898\u4fee\u590d\u3002"),(0,i.kt)("h2",{id:"\u5f00\u59cb\u96c6\u6210"},"\u5f00\u59cb\u96c6\u6210"),(0,i.kt)("p",null,"\u590d\u5236\u4ee5\u4e0b\u811a\u672c\uff0c\u5e76\u5c06\u5176\u7c98\u8d34\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"<head></head>")," \u6807\u7b7e\u7684",(0,i.kt)("b",null," \u9876\u90e8 "),"\uff0c\u5b9e\u4f8b\u5316\u5373\u53ef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://assets.giocdn.com/sdk/webjs/giokit.min.js"><\/script>\n<script type="text/javascript">\n  var gioKit = new GioKit();\n<\/script>\n')),(0,i.kt)("p",null,"\u96c6\u6210\u540e\u5728\u7ad9\u70b9\u9875\u9762\u53f3\u4e0b\u89d2\u51fa\u73b0\u5706\u5f62\u6a59\u8272",(0,i.kt)("inlineCode",{parentName:"p"},"G"),"\u56fe\u6807\u5373\u8bf4\u660e\u96c6\u6210\u6210\u529f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\uff09GioKit \u5e94\u5c3d\u65e9\u5b8c\u6210\u96c6\u6210\u5e76\u5b9e\u4f8b\u5316\uff0c\u8bf7\u5c06\u91c7\u96c6 SDK \u7684\u96c6\u6210\u4ee3\u7801\u7f6e\u4e8e GioKit \u5b9e\u4f8b\u5316\u8bed\u53e5\u4e4b\u540e\u3002\u5426\u5219\u53ef\u80fd\u65e0\u6cd5\u5728 GioKit \u65e5\u5fd7\u4e2d\u67e5\u770b\u5230 SDK \u7684\u521d\u59cb\u5316\u4fe1\u606f\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3\uff09GioKit \u9ed8\u8ba4\u4f7f\u7528 umd \u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0ces \u683c\u5f0f\u6682\u4e0d\u652f\u6301\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\uff09\u5982\u679c\u60a8\u5e0c\u671b\u4e0d\u53d7 CDN\uff08\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff09\u5f71\u54cd\uff0c\u8bf7\u4e0b\u8f7d\u81f3\u672c\u5730\u96c6\u6210\uff0c\u5e76\u4fee\u6539\u4e0a\u8ff0\u96c6\u6210\u4ee3\u7801\u4e2d\u7684 CDN \u5730\u5740\u4e3a\u60a8\u672c\u5730\u7684\u76f8\u5bf9\u5730\u5740\u3002")),(0,i.kt)("p",null,"WebJS GioKit \u4e0b\u8f7d\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/webjs/giokit.min.js"},"https://assets.giocdn.com/sdk/webjs/giokit.min.js")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,i.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("p",null,"WebJS GioKit\u53ea\u662f\u8f85\u52a9\u60a8\u5f00\u53d1\u548c\u9ad8\u6548\u5f00\u53d1\u6821\u9a8c\u57cb\u70b9\u7b49Gio\u4e8b\u4ef6\u7684\u5de5\u5177\uff0c\u8bf7\u5728\u6b63\u5f0f\u4e0a\u7ebf\u65f6\u79fb\u9664\u5b83\uff01"))}d.isMDXComponent=!0}}]);