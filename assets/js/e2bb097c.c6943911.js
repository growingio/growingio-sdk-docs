"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6954],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),s=o,g=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9699:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={sidebar_position:7,title:"3.3\u5347\u7ea7\u52303.8"},l=void 0,u={unversionedId:"miniprogram/3.8/upgrade",id:"miniprogram/3.8/upgrade",title:"3.3\u5347\u7ea7\u52303.8",description:"\u672c\u6587\u8bb2\u4ecb\u7ecd\u5982\u4f55\u4ece3.3\u7248\u672c\u7684SDK\u65e0\u7f1d\u5347\u7ea7\u52303.8\u7248\u672c\u3002\u8bf7\u786e\u8ba4\u60a8\u4f7f\u7528\u7684\u7248\u672c\u4e3a3.3.0\u4ee5\u4e0a\uff0c\u5982\u679c\u60a8\u4e3a2.x\u7248\u672c\u4e14\u6709\u5347\u7ea7\u9700\u8981\uff0c\u8bf7\u5148\u8054\u7cfb\u60a8\u7684\u9879\u76ee\u7ecf\u7406\u3002",source:"@site/docs/miniprogram/3.8/upgrade.md",sourceDirName:"miniprogram/3.8",slug:"/miniprogram/3.8/upgrade",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/upgrade",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/upgrade.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"3.3\u5347\u7ea7\u52303.8"},sidebar:"gioSidebar",previous:{title:"3.3\u4e0e3.8\u5bf9\u6bd4",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/contrast"},next:{title:"\u7b2c\u4e09\u65b9 SDK",permalink:"/growingio-sdk-docs/docs/other"}},c={},m=[{value:"\u5728\u5347\u7ea7\u4e4b\u524d\uff0c\u8bf7\u5145\u5206\u9605\u8bfb3.8\u7248\u672c\u7684\u6587\u6863\u5185\u5bb9\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c",id:"\u5728\u5347\u7ea7\u4e4b\u524d\u8bf7\u5145\u5206\u9605\u8bfb38\u7248\u672c\u7684\u6587\u6863\u5185\u5bb9\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c",level:4},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u9875\u9762",id:"\u9875\u9762",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u5efa\u8bae\u6027\u4fee\u6539",id:"\u5efa\u8bae\u6027\u4fee\u6539",level:3}],d={toc:m};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u8bb2\u4ecb\u7ecd\u5982\u4f55\u4ece3.3\u7248\u672c\u7684SDK\u65e0\u7f1d\u5347\u7ea7\u52303.8\u7248\u672c\u3002\u8bf7\u786e\u8ba4\u60a8\u4f7f\u7528\u7684\u7248\u672c\u4e3a3.3.0\u4ee5\u4e0a\uff0c\u5982\u679c\u60a8\u4e3a2.x\u7248\u672c\u4e14\u6709\u5347\u7ea7\u9700\u8981\uff0c\u8bf7\u5148\u8054\u7cfb\u60a8\u7684\u9879\u76ee\u7ecf\u7406\u3002"),(0,a.kt)("h4",{id:"\u5728\u5347\u7ea7\u4e4b\u524d\u8bf7\u5145\u5206\u9605\u8bfb38\u7248\u672c\u7684\u6587\u6863\u5185\u5bb9\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c"},"\u5728\u5347\u7ea7\u4e4b\u524d\uff0c\u8bf7\u5145\u5206\u9605\u8bfb3.8\u7248\u672c\u7684\u6587\u6863\u5185\u5bb9\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"1\u3001\u4e0b\u8f7d\u6700\u65b0\u7248\u5bf9\u5e94\u6846\u67b6\u7684SDK\u5e76\u66ff\u6362\uff0c\u8bf7\u53c2\u8003\u96c6\u6210\u6587\u6863\u9009\u62e9\u6b63\u786e\u7684\u5f00\u53d1\u65b9\u5f0f\u4e0b\u8f7d\u3002"),(0,a.kt)("p",null,"2\u3001\u627e\u5230\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u4fee\u6539\u5f15\u7528\u65b9\u5f0f\u3002\u5982\u679c\u60a8\u60f3\u4fdd\u7559\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u8df3\u8fc7\u672c\u6b65\u9aa4\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const gdp = require('./utils/gio/sdk.js').default;\n//          \u4fee\u6539\u4e3a \u2193\u2193\u2193\nimport gdp from './utils/gio/sdk.js';\n")),(0,a.kt)("p",null,"3\u3001\u68c0\u67e5\u521d\u59cb\u5316\u65b9\u5f0f\uff0c\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setConfig")," \u65b9\u6cd5\u521d\u59cb\u5316\uff0c\u8bf7\u53c2\u8003\u96c6\u6210\u6587\u6863\u91cd\u65b0\u96c6\u6210\uff1b\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," \u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u5219\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"4\u3001\u68c0\u67e5\u914d\u7f6e\u9879\uff0c\u79fb\u9664",(0,a.kt)("inlineCode",{parentName:"p"},"usePlugin"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"enableEventStore"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"getLocation"),"\uff08\u542bautoGet\u548ctype\uff09\u914d\u7f6e\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"5\u3001\u68c0\u67e5\u914d\u7f6e\u9879\uff0c\u5982\u679c\u60a8\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"uni-app vue2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"taro3 vue2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WePY"),"\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\uff0c\u8bf7\u79fb\u9664 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"vue"))," \u914d\u7f6e\uff0c\u5e76\u53c2\u8003\u96c6\u6210\u6587\u6863\u6dfb\u52a0\u5bf9\u5e94\u7684\u5b9e\u4f8b\u53c2\u6570\u3002\u5982\u679c\u4e0d\u662f\u5219\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    // vue: Vue,  \u79fb\u9664\u6b64\u914d\u7f6e\n    uniVue: Vue, // \u65b0\u589e\u6b64\u914d\u7f6e\n    ...other settings\n});\n")),(0,a.kt)("h3",{id:"\u9875\u9762"},"\u9875\u9762"),(0,a.kt)("p",null,"1\uff09\u5982\u679c\u60a8\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u6216\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u8bf7\u6062\u590d\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"App({})"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Page({})"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Component({})"),"\u7684\u539f\u751f\u5199\u6cd5\u3002\u5982\u679c\u4e0d\u662f\u5219\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$global.GioApp({ ... });\n// \u4fee\u6539\u56de\u539f\u59cb\u5199\u6cd5 \u2193\u2193\u2193\nApp({ ... });\n\n$global.GioPage({ ... });\n// \u4fee\u6539\u56de\u539f\u59cb\u5199\u6cd5 \u2193\u2193\u2193\nPage({ ... });\n\n$global.GioComponent({ ... });\n// \u4fee\u6539\u56de\u539f\u59cb\u5199\u6cd5 \u2193\u2193\u2193\nComponent({ ... });\n")),(0,a.kt)("p",null,"2\uff09\u68c0\u67e5\u9875\u9762\u4e2d\u662f\u5426\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getLocation"),"\u65b9\u6cd5\uff0c\u5b58\u5728\u5219",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/commonlyApi#6%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AEsetlocation"},"\u53c2\u8003\u6587\u6863"),"\u4fee\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"setLocation"),"\u3002\u5982\u679c\u6ca1\u6709\u5219\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,a.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"1\uff09\u5982\u679c\u60a8\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"gioGlobal"),"\u4e2d\u7684\u5185\u5bb9\uff0c\u8bf7\u5c1d\u8bd5\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"global\uff08\u652f\u4ed8\u5b9d\u548c\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u662f $global\uff09"),"\u4e2d\u91cd\u65b0\u83b7\u53d6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"gioGlobal"),"\u5df2\u7ecf\u88ab\u5f03\u7528\u3002"),(0,a.kt)("p",null,"2\uff09\u5982\u679c\u60a8\u57283.3\u7248\u672c\u5c31\u5f00\u542f\u5e76\u4f7f\u7528\u4e86 \u65e0\u57cb\u70b9 \u548c \u52a0\u5bc6 \u529f\u80fd\uff0c\u8bf7\u5728\u5347\u7ea7\u81f3 3.8 \u7248\u672c\u65f6\uff0c\u6ce8\u518c\u5bf9\u5e94\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/integration/wechat#%E6%8F%92%E4%BB%B6%E6%89%A9%E5%B1%95"},"\u63d2\u4ef6\u6269\u5c55"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6\u4ecb\u7ecd"),"\u3002"),(0,a.kt)("h3",{id:"\u5efa\u8bae\u6027\u4fee\u6539"},"\u5efa\u8bae\u6027\u4fee\u6539"),(0,a.kt)("p",null,"1\u3001\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u65e7\u7248",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/commonlyApi#%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE%E6%8E%A5%E5%8F%A3"},"\u52a8\u6001\u914d\u7f6e\u63a5\u53e3"),"\u7684\u8c03\u7528\u65b9\u5f0f\uff0c\u5efa\u8bae\u6309\u65b0\u7248\u4f7f\u7528\u65b9\u5f0f\u8fdb\u884c\u4fee\u6539\u3002"),(0,a.kt)("p",null,"2\u3001\u5728<3.8\u7684\u65e7\u7248\u672c\u4e2d\uff0c\u53ef\u80fd\u60a8\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"gdp"))," \u65b9\u6cd5\u662f\u9700\u8981\u60a8\u901a\u8fc7\u624b\u52a8\u6302\u8f7d\u5728\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"globalData"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"vue"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"gioGlobal"),"\u6b64\u7c7b\u5168\u5c40\u5bf9\u8c61\u540e\u518d\u53d6\u51fa\u3002\u4ece3.8\u7684\u7248\u672c\u5f00\u59cb\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u9875\u9762\u4e2d\u4ece ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"global\uff08\u652f\u4ed8\u5b9d\u548c\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u662f $global\uff09")),"\u5bf9\u8c61\u4e2d\u53d6\u51fa\uff0c\u4ece\u800c\u514d\u53bb\u4e86\u7e41\u6742\u7684\u5b58\u53d6\u503c\u6d41\u7a0b\u3002\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { gdp } = global;\nPage({ ... });\n")))}s.isMDXComponent=!0}}]);