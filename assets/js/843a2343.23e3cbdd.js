"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=s(t),d=r,u=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return t?i.createElement(u,p(p({ref:n},m),{},{components:t})):i.createElement(u,p({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2,title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8"},p=void 0,o={unversionedId:"miniprogram/3.8/plugins/impressionTracking",id:"miniprogram/3.8/plugins/impressionTracking",title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8",description:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09",source:"@site/docs/miniprogram/3.8/plugins/impressionTracking.md",sourceDirName:"miniprogram/3.8/plugins",slug:"/miniprogram/3.8/plugins/impressionTracking",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins/impressionTracking",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/plugins/impressionTracking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8"},sidebar:"gioSidebar",previous:{title:"\u65e0\u57cb\u70b9",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins/eventAutoTracking"},next:{title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/plugins/compress"}},l={},s=[{value:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09",id:"\u7b80\u4ecbgioimpressiontracking",level:2},{value:"\u66dd\u5149\u903b\u8f91",id:"\u66dd\u5149\u903b\u8f91",level:3},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",level:4},{value:"npm \u96c6\u6210\u5f15\u5165",id:"npm-\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u4f20\u503c\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528 Object \u5bf9\u8c61\u6216 JSON \u5b57\u7b26\u4e32\u8d4b\u503c",id:"\u4f20\u503c\u65b9\u5f0f\u4e00\u4f7f\u7528-object-\u5bf9\u8c61\u6216-json-\u5b57\u7b26\u4e32\u8d4b\u503c",level:3},{value:"\u4f20\u503c\u65b9\u5f0f\u4e8c\uff1a\u76f4\u63a5\u624b\u52a8\u7f16\u5199 Object \u5b57\u7b26\u4e32",id:"\u4f20\u503c\u65b9\u5f0f\u4e8c\u76f4\u63a5\u624b\u52a8\u7f16\u5199-object-\u5b57\u7b26\u4e32",level:3},{value:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c",id:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u66dd\u5149\u4e8b\u4ef6",id:"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u66dd\u5149\u4e8b\u4ef6",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],m={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecbgioimpressiontracking"},"\u7b80\u4ecb\uff08gioImpressionTracking\uff09"),(0,r.kt)("p",null,"\u7528\u6237\u6807\u8bb0\u4e00\u4e2a\u5143\u7d20\u5e76\u63d0\u4f9b\u57cb\u70b9\u4e8b\u4ef6\uff0cSDK \u8d1f\u8d23\u76d1\u63a7\u6307\u5b9a\u5143\u7d20\uff0c\u5f53\u6b64\u5143\u7d20\u51fa\u73b0\u5728\u5c4f\u5e55\u53ef\u89c6\u533a\u57df\u4e2d\u65f6\u53d1\u9001\u7528\u6237\u914d\u7f6e\u7684\u57cb\u70b9\u4e8b\u4ef6\u3002\u56e0\u6b64\u60a8\u540c\u6837\u9700\u8981\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/commonlyApi#6%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track"},"\u57cb\u70b9\u4e8b\u4ef6"),"\u5728\u5e73\u53f0\u4e0a\u8fdb\u884c\u4e8b\u4ef6\u7c7b\u578b\u548c\u53d8\u91cf\u7684\u9884\u5b9a\u4e49\u3002"),(0,r.kt)("h3",{id:"\u66dd\u5149\u903b\u8f91"},"\u66dd\u5149\u903b\u8f91"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"always\uff1a"),"\u53ea\u8981\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u5c4f\u5e55\u4e0d\u53ef\u89c1\u533a\u57df\u5230\u53ef\u89c1\u533a\u57df"),"\u5373\u53ef\u8ba1\u4e3a\u4e00\u6b21\u66dd\u5149\u5e76\u4e0a\u62a5\u3002(\u9ed8\u8ba4\u503c)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"once\uff1a"),"\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u5c4f\u5e55\u4e0d\u53ef\u89c1\u533a\u57df\u5230\u53ef\u89c1\u533a\u57df"),"\u66dd\u5149\u53ea\u4e0a\u62a5\u4e00\u6b21\u3002"),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f(\u57fa\u7840\u5e93>=2.7.0)\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3001\u6296\u97f3\u5c0f\u7a0b\u5e8f\u3001QQ \u5c0f\u7a0b\u5e8f\u3001\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u5feb\u624b\u5c0f\u7a0b\u5e8f\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u5feb\u5e94\u7528\u4e0d\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,r.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,r.kt)("h4",{id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"},"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u63d2\u4ef6\u5305\u5e76\u590d\u5236\u81f3\u9879\u76ee\u4e2d\uff1a\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{size:"3"},(0,r.kt)("a",{parentName:"strong",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.17/plugins/gioImpressionTracking.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.17/plugins/gioImpressionTracking.js"))),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f15\u5165\u63d2\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import gioImpressionTracking from './utils/plugins/gioImpressionTracking';\n")),(0,r.kt)("h4",{id:"npm-\u96c6\u6210\u5f15\u5165"},"npm \u96c6\u6210\u5f15\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import gioImpressionTracking from 'gio-webjs-sdk-cdp/plugins/gioImpressionTracking';\n")),(0,r.kt)("h3",{id:"2\u6ce8\u518c"},"2\u3001\u6ce8\u518c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [gioImpressionTracking]);\ngdp('init', xxxx);\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001"),"\u5728\u9700\u8981\u6807\u8bb0\u7684\u5143\u7d20\u4e0a\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"growing_collect_imp"))," \u6837\u5f0f\u540d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001"),"\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"data-gio-imp-track"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"data-gio-imp-attrs"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"data-gio-imp-items")," \u5c5e\u6027\uff0c\u5e76\u5206\u522b\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," \u65b9\u6cd5\u4e2d\u7684\u4e09\u4e2a\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e\uff0c\u53c2\u6570\u89c4\u5219\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/commonlyApi#6%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track"},"\u57cb\u70b9\u4e8b\u4ef6"),"\u3002"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f\u4e00\u4f7f\u7528-object-\u5bf9\u8c61\u6216-json-\u5b57\u7b26\u4e32\u8d4b\u503c"},"\u4f20\u503c\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528 Object \u5bf9\u8c61\u6216 JSON \u5b57\u7b26\u4e32\u8d4b\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Page({\n  data: {\n    impAttrs: JSON.stringify({ type: 'hjh', name: 'yue' }),\n    impItems: { key: 'order_id', id: '12345' },\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<view\n  class="growing_collect_imp"\n  data-gio-imp-track="imp_picture_var"\n  data-gio-imp-attrs="{{ impAttrs }}"\n  data-gio-imp-items="{{ impItems }}"\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</view>\n')),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f\u4e8c\u76f4\u63a5\u624b\u52a8\u7f16\u5199-object-\u5b57\u7b26\u4e32"},"\u4f20\u503c\u65b9\u5f0f\u4e8c\uff1a\u76f4\u63a5\u624b\u52a8\u7f16\u5199 Object \u5b57\u7b26\u4e32"),(0,r.kt)("p",null,"\u63d0\u793a\uff1a\u90e8\u5206\u6846\u67b6\u5982 uniapp \u7f16\u8bd1\u65f6\u53ef\u80fd\u4f1a\u5c06\u5355\u5f15\u53f7\u7f16\u8bd1\u6210\u53cc\u5f15\u53f7\u5bfc\u81f4\u7f16\u8bd1\u5931\u8d25"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<view\n  class="growing_collect_imp"\n  data-gio-imp-track="imp_picture_var"\n  data-gio-imp-attrs=\'{ "type": "hjh", "name": "yue" }\'\n  data-gio-imp-items=\'{ "key": "order_id", "id": "12345" }\'\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</view>\n')),(0,r.kt)("p",null,"\u5bf9\u5e94\u4ea7\u751f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"CUSTOM"),"\u4e8b\u4ef6\u76f8\u5f53\u4e8e\uff1a \u2193\u2193\u2193"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp(\n  'track',\n  'imp_picture_var',\n  { type: 'hjh', name: 'yue' },\n  { key: 'order_id', id: '12345' }\n);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\u3001"),"\u5982\u679c\u60a8\u7684\u66dd\u5149\u4e8b\u4ef6\u53ea\u9700\u8981\u7edf\u8ba1\u4e00\u6b21\u6216\u89e6\u53d1\u8fc7\u4e8e\u9891\u7e41\u5bfc\u81f4\u66dd\u5149\u4e8b\u4ef6\u91cf\u8fc7\u5927\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},'data-gio-imp-type="once"'),"\u5e76\u8bbe\u7f6e\u552f\u4e00\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u8282\u70b9id"),"\uff0c\u6765\u4f7f\u5f97\u66dd\u5149\u903b\u8f91\u53d8\u4e3a\u5355\u6b21\u4e0a\u62a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<view\n  class="growing_collect_imp"\n  id="imp_1"\n  data-gio-imp-type="once"\n  data-gio-imp-track="imp_picture_var"\n  ...\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</view>\n')),(0,r.kt)("h2",{id:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c"},"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c"),(0,r.kt)("p",null,"\u5f53\u60a8\u9700\u8981\u6dfb\u52a0\u534a\u81ea\u52a8\u57cb\u70b9\u7684\u8282\u70b9\u662f\u52a8\u6001\u6e32\u67d3\u65f6\uff08\u4f8b\u5982\u6839\u636e\u63a5\u53e3\u6570\u636e\u6e32\u67d3\u4e0d\u540c\u7684\u5185\u5bb9\uff09\uff0cSDK \u53ef\u80fd\u4f1a\u56e0\u4e3a\u65e0\u6cd5\u611f\u77e5\u8282\u70b9\u6e32\u67d3\u65f6\u673a\u800c\u5931\u53bb\u5bf9\u6807\u8bb0\u8282\u70b9\u7684\u76d1\u542c\u3002\u6b64\u65f6\uff0c\u60a8\u9700\u8981\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"updateImpression")," \u624b\u52a8\u66f4\u65b0 SDK \u7684\u76d1\u542c\u6765\u4fdd\u8bc1\u60a8\u7684\u52a8\u6001\u6e32\u67d3\u8282\u70b9\u80fd\u591f\u88ab\u76d1\u542c\u5230\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { gdp } = global;\nPage({\n  data: {\n    impData: [],\n  },\n  onShow() {\n    // \u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2aPromise\u6765\u6a21\u62df\u8c03\u7528\u63a5\u53e3\n    const getData = new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({ name: 'Lily', age: 18 });\n      }, 3000);\n    });\n    getData.then((result) => {\n      this.setData({ impData: result }, () => {\n        // \u5728setData\u56de\u8c03\u4e2d\u8c03\u7528 updateImpression \u5373\u53ef\n        gdp('updateImpression');\n      });\n    });\n  },\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),"\u5982\u679c\u60a8\u662f\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u66f4\u65b0\u66dd\u5149\u76d1\u542c\uff0c\u8bf7\u4f20\u5165 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"this"))," \u5bf9\u8c61\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { gdp } = global;\nComponent({\n  lifetimes: {\n    attached: function(){\n      gdp('updateImpression', this);\n    }\n  }\n});\n")),(0,r.kt)("h2",{id:"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u66dd\u5149\u4e8b\u4ef6"},"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u66dd\u5149\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u7531\u4e8eSDK\u4ee5\u524d\u9ed8\u8ba4\u662f\u53ea\u53d6\u9875\u9762\u4e0a\u7684\u66dd\u5149\u8282\u70b9\u5e76\u81ea\u52a8\u53d1\u9001\u4e8b\u4ef6\uff0c\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u53ef\u80fd\u65e0\u6cd5\u89e6\u53d1\u3002\u5982\u679c\u60a8\u9700\u8981\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u66dd\u5149\u4e8b\u4ef6\uff0c\u8bf7\u5c06SDK\u5347\u7ea7\u81f3",(0,r.kt)("strong",{parentName:"p"},"3.8.17\u53ca\u4ee5\u4e0a\u7248\u672c"),"\uff0c\u540c\u65f6\u5347\u7ea7\u66dd\u5149\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u5e76\u4e14\u5728\u9875\u9762\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"growing_collect_imp_component"))," \u6837\u5f0f\u540d\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Page --\x3e\n<view>\n  <my-component class="growing_collect_imp_component"></my-component>\n</view>\n\n\x3c!-- Component --\x3e\n<view\n  class="growing_collect_imp"\n  data-gio-imp-track="imp_picture_var"\n  data-gio-imp-attrs=\'{ "type": "hjh", "name": "yue" }\'\n  data-gio-imp-items=\'{ "key": "order_id", "id": "12345" }\'\n>\n  \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u7684\u5143\u7d20\n</view>\n')),(0,r.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,r.kt)("p",null,"1\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"data-gio-imp-attrs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"data-gio-imp-items")," \u5141\u8bb8\u63a5\u53d7\u4e00\u4e2a Object \u6216\u8005 JSON.stringify \u540e\u7684 Object \u5b57\u7b26\u4e32\uff0cSDK \u4f1a\u81ea\u52a8\u5c1d\u8bd5\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u683c\u5f0f\u5316\u5931\u8d25\u65f6\u9ed8\u8ba4\u8fd4\u56de\u7a7a\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"2\u3001\u88ab\u6807\u8bb0\u7684\u8282\u70b9\u5fc5\u987b\u6709\u5b9e\u9645\u7684\u5927\u5c0f\uff0c\u4e00\u4e2a\u6ca1\u6709\u5185\u5bb9\u548c\u6837\u5f0f\u7684\u8282\u70b9\u6807\u8bb0\u53ef\u80fd\u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"3\u3001\u8bf7\u52ff\u5728\u540c\u4e00\u9875\u9762\u4e2d\u5927\u91cf\u6807\u8bb0\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\uff08\u5982\u5546\u54c1\u5217\u8868\uff09\uff0c\u53ef\u80fd\u4f1a\u4e25\u91cd\u5f71\u54cd\u9875\u9762\u6027\u80fd\u5bfc\u81f4\u5361\u987f\u3002"),(0,r.kt)("p",null,"4\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"data-gio-imp-type"),"\u914d\u7f6e\u9879 SDK \u7248\u672c>=3.8.5 \u652f\u6301\u3002"),(0,r.kt)("p",null,"5\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"updateImpression"),"\u65b9\u6cd5 SDK \u7248\u672c>=3.8.12 \u652f\u6301\u3002"),(0,r.kt)("p",null,"6\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".growing_collect_imp_component"),"\u6837\u5f0f\u540d\uff0c\u5373\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u66dd\u5149 SDK \u7248\u672c>=3.8.17 \u652f\u6301\u3002"))}c.isMDXComponent=!0}}]);