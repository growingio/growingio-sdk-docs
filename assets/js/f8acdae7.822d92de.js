"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,k=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(k,p(p({ref:t},m),{},{components:r})):n.createElement(k,p({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2,title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8"},p=void 0,o={unversionedId:"webjs/3.8/plugins/impressionTracking",id:"webjs/3.8/plugins/impressionTracking",title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8",description:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09",source:"@site/docs/webjs/3.8/plugins/impressionTracking.md",sourceDirName:"webjs/3.8/plugins",slug:"/webjs/3.8/plugins/impressionTracking",permalink:"/growingio-sdk-docs/docs/webjs/3.8/plugins/impressionTracking",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/3.8/plugins/impressionTracking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8"},sidebar:"gioSidebar",previous:{title:"\u65e0\u57cb\u70b9",permalink:"/growingio-sdk-docs/docs/webjs/3.8/plugins/eventAutoTracking"},next:{title:"\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a",permalink:"/growingio-sdk-docs/docs/webjs/3.8/plugins/embeddedAdapter"}},l={},s=[{value:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09",id:"\u7b80\u4ecbgioimpressiontracking",level:2},{value:"\u66dd\u5149\u903b\u8f91",id:"\u66dd\u5149\u903b\u8f91",level:3},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"CDN\u96c6\u6210\u5f15\u5165",id:"cdn\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u4f20\u503c\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528Object\u5bf9\u8c61\u6216JSON\u5b57\u7b26\u4e32\u8d4b\u503c\uff08\u63a8\u8350\uff09",id:"\u4f20\u503c\u65b9\u5f0f\u4e00\u4f7f\u7528object\u5bf9\u8c61\u6216json\u5b57\u7b26\u4e32\u8d4b\u503c\u63a8\u8350",level:3},{value:"\u4f20\u503c\u65b9\u5f0f\u4e8c\uff1a\u76f4\u63a5\u624b\u52a8\u7f16\u5199Object\u5b57\u7b26\u4e32",id:"\u4f20\u503c\u65b9\u5f0f\u4e8c\u76f4\u63a5\u624b\u52a8\u7f16\u5199object\u5b57\u7b26\u4e32",level:3},{value:"\u4f20\u503c\u65b9\u5f0f\u4e09\uff1a\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49",id:"\u4f20\u503c\u65b9\u5f0f\u4e09\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49",level:3},{value:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b",id:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecbgioimpressiontracking"},"\u7b80\u4ecb\uff08gioImpressionTracking\uff09"),(0,a.kt)("p",null,"\u7528\u6237\u6807\u8bb0\u4e00\u4e2a\u5143\u7d20\u5e76\u63d0\u4f9b\u57cb\u70b9\u4e8b\u4ef6\uff0cSDK \u8d1f\u8d23\u76d1\u63a7\u6307\u5b9a\u5143\u7d20\uff0c\u5f53\u6b64\u5143\u7d20\u51fa\u73b0\u5728\u5c4f\u5e55\u53ef\u89c6\u533a\u57df\u4e2d\u65f6\u53d1\u9001\u7528\u6237\u914d\u7f6e\u7684\u57cb\u70b9\u4e8b\u4ef6\u3002\u56e0\u6b64\u60a8\u540c\u6837\u9700\u8981\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#4%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track"},"\u57cb\u70b9\u4e8b\u4ef6"),"\u5728\u5e73\u53f0\u4e0a\u8fdb\u884c\u4e8b\u4ef6\u7c7b\u578b\u548c\u53d8\u91cf\u7684\u9884\u5b9a\u4e49\u3002"),(0,a.kt)("h3",{id:"\u66dd\u5149\u903b\u8f91"},"\u66dd\u5149\u903b\u8f91"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"always\uff1a"),"\u53ea\u8981\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u5c4f\u5e55\u4e0d\u53ef\u89c1\u533a\u57df\u5230\u53ef\u89c1\u533a\u57df"),"\u5373\u53ef\u8ba1\u4e3a\u4e00\u6b21\u66dd\u5149\u5e76\u4e0a\u62a5\u3002(\u9ed8\u8ba4\u503c)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"once\uff1a"),"\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u5c4f\u5e55\u4e0d\u53ef\u89c1\u533a\u57df\u5230\u53ef\u89c1\u533a\u57df"),"\u66dd\u5149\u53ea\u4e0a\u62a5\u4e00\u6b21\u3002"),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png",alt:"IE",width:"24px",height:"24px"})),(0,a.kt)("br",null),"InternetExplorer"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"Edge",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Edge"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Firefox"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Chrome"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Safari"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Opera"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("font",{color:"#FC5F3A"},"No")),(0,a.kt)("td",{parentName:"tr",align:null},"Edge >= 16"),(0,a.kt)("td",{parentName:"tr",align:null},">= 55"),(0,a.kt)("td",{parentName:"tr",align:null},">= 58"),(0,a.kt)("td",{parentName:"tr",align:null},">= 12.1"),(0,a.kt)("td",{parentName:"tr",align:null},">= 45")))),(0,a.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,a.kt)("p",null,"\u5168\u91cf\u96c6\u6210SDK\u65f6\u65e0\u9700\u518d\u6b21\u96c6\u6210\u63d2\u4ef6\u3002"),(0,a.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,a.kt)("h4",{id:"cdn\u96c6\u6210\u5f15\u5165"},"CDN\u96c6\u6210\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioImpressionTracking.js"><\/script>\n')),(0,a.kt)("h4",{id:"npm\u96c6\u6210\u5f15\u5165"},"npm\u96c6\u6210\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import gioImpressionTracking from "gio-webjs-sdk-cdp/plugins/gioImpressionTracking"\n')),(0,a.kt)("h3",{id:"2\u6ce8\u518c"},"2\u3001\u6ce8\u518c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [gioImpressionTracking]);\ngdp('init', xxxx);\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f\u4e00\u4f7f\u7528object\u5bf9\u8c61\u6216json\u5b57\u7b26\u4e32\u8d4b\u503c\u63a8\u8350"},"\u4f20\u503c\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528Object\u5bf9\u8c61\u6216JSON\u5b57\u7b26\u4e32\u8d4b\u503c\uff08\u63a8\u8350\uff09"),(0,a.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-track"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-attrs"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-items")," \u5c5e\u6027\uff0c\u5e76\u5206\u522b\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"track")," \u65b9\u6cd5\u4e2d\u7684\u4e09\u4e2a\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e\uff0c\u53c2\u6570\u89c4\u5219\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#4%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track"},"\u57cb\u70b9\u4e8b\u4ef6"),"\u3002\u4f20\u503c\u65f6\u8d4b\u503c\u4e00\u4e2aObject\u5bf9\u8c61\u6216\u4e00\u4e2aJSON\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var impAttrs = JSON.stringify({ type: 'hjh', name: 'yue' });\nvar impItems = { key: 'order_id', id: '12345' };\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<div\n  data-gio-imp-track="imp_picture_var"\n  data-gio-imp-attrs={impAttrs}\n  data-gio-imp-items={impItems}\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n')),(0,a.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f\u4e8c\u76f4\u63a5\u624b\u52a8\u7f16\u5199object\u5b57\u7b26\u4e32"},"\u4f20\u503c\u65b9\u5f0f\u4e8c\uff1a\u76f4\u63a5\u624b\u52a8\u7f16\u5199Object\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-track"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-attrs"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-items")," \u5c5e\u6027\uff0c\u5e76\u5206\u522b\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"track")," \u65b9\u6cd5\u4e2d\u7684\u4e09\u4e2a\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e\uff0c\u53c2\u6570\u89c4\u5219\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#4%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track"},"\u57cb\u70b9\u4e8b\u4ef6"),"\u3002\u4f20\u503c\u65f6\u8d4b\u503c\u4e00\u4e2a\u5408\u6cd5\u62fc\u63a5\u7684JSON\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var key = 'order_id';\nvar id = '12345';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<div\n  data-gio-imp-track="imp_picture_var"\n  data-gio-imp-attrs={`{ "type": "hjh", "name": "yue" }`}\n  data-gio-imp-items={`{ "key": "` + ${key} + `", "id": "` + ${id} + `" }`}\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u4e24\u79cd\u65b9\u5f0f\u5bf9\u5e94\u4ea7\u751f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"CUSTOM"),"\u4e8b\u4ef6\u76f8\u5f53\u4e8e\uff1a \u2193\u2193\u2193"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gdp('track', 'imp_picture_var', { type: 'hjh', name: 'yue' }, { key: 'order_id', id: '12345' });\n")),(0,a.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f\u4e09\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49"},"\u4f20\u503c\u65b9\u5f0f\u4e09\uff1a\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49"),(0,a.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-track"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-track-xxxxx")," \u5c5e\u6027\u3002\u5206\u522b\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"properties"),"\u5c5e\u6027\u8fdb\u884c\u5355\u4e2a\u5b9a\u4e49\u4f20\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div\n  data-gio-imp-track="imp_cat_var"\n  data-gio-track-name="cat_picture"\n  data-gio-track-time="20210601"\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n')),(0,a.kt)("p",null,"\u5bf9\u5e94\u4ea7\u751f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"CUSTOM"),"\u4e8b\u4ef6\u76f8\u5f53\u4e8e\uff1a \u2193\u2193\u2193"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gdp('track', 'imp_cat_var', { name: 'cat_picture', time: '20210601' });\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"),"\u8be5\u4f20\u503c\u65b9\u5f0f\u6240\u6709\u5355\u4e2a\u5b57\u6bb5\u90fd\u4f1a\u5f52\u5165",(0,a.kt)("inlineCode",{parentName:"strong"},"properties"),"\u5bf9\u8c61\u4e2d\uff0c\u4e0d\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"strong"},"items"),"\u5c5e\u6027\u4e0a\u62a5\u3002")),(0,a.kt)("h3",{id:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b"},"\u4fee\u6539\u66dd\u5149\u7c7b\u578b"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u66dd\u5149\u4e8b\u4ef6\u53ea\u9700\u8981\u7edf\u8ba1\u4e00\u6b21\u6216\u89e6\u53d1\u8fc7\u4e8e\u9891\u7e41\u5bfc\u81f4\u66dd\u5149\u4e8b\u4ef6\u91cf\u8fc7\u5927\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},'data-gio-imp-type="once"')),"s\u5e76\u8bbe\u7f6e\u552f\u4e00\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u8282\u70b9id"),"\uff0c\u6765\u4f7f\u5f97\u66dd\u5149\u903b\u8f91\u53d8\u4e3a\u5355\u6b21\u4e0a\u62a5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div\n  id="imp_1"\n  data-gio-imp-type="once"\n  data-gio-imp-track="imp_picture_var"\n  ...\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n')),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("p",null,"1\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-attrs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"data-gio-imp-items")," \u5141\u8bb8\u63a5\u53d7\u4e00\u4e2aObject\u6216\u8005JSON.stringify\u540e\u7684Object\u5b57\u7b26\u4e32\uff0cSDK\u4f1a\u81ea\u52a8\u5c1d\u8bd5\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u683c\u5f0f\u5316\u5931\u8d25\u65f6\u9ed8\u8ba4\u8fd4\u56de\u7a7a\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"2\u3001\u88ab\u6807\u8bb0\u7684\u8282\u70b9\u5fc5\u987b\u6709\u5b9e\u9645\u7684\u5927\u5c0f\uff0c\u4e00\u4e2a\u6ca1\u6709\u5185\u5bb9\u548c\u6837\u5f0f\u7684\u8282\u70b9\u6807\u8bb0\u53ef\u80fd\u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"3\u3001\u8bf7\u52ff\u5728\u540c\u4e00\u9875\u9762\u4e2d\u5927\u91cf\u6807\u8bb0\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\uff08\u5982\u5546\u54c1\u5217\u8868\uff09\uff0c\u53ef\u80fd\u4f1a\u4e25\u91cd\u5f71\u54cd\u9875\u9762\u6027\u80fd\u5bfc\u81f4\u5361\u987f\u3002"))}c.isMDXComponent=!0}}]);