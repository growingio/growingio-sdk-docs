"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5894],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),a=r(6010),o=r(3438),l=r(9960),i=r(3919),s=r(5999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:r}=e;return n.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",p.cardContainer)},r)}function u(e){let{href:t,icon:r,title:o,description:l}=e;return n.createElement(c,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p.cardTitle),title:o},r," ",o),l&&n.createElement("p",{className:(0,a.Z)("text--truncate",p.cardDescription),title:l},l))}function m(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const l=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(2991),l=r(3438);const i={slug:"/webjs",title:"WebJS SDK"},s=void 0,p={unversionedId:"index/webjs",id:"index/webjs",title:"WebJS SDK",description:"\u7b80\u4ecb",source:"@site/docs/index/webjs.md",sourceDirName:"index",slug:"/webjs",permalink:"/growingio-sdk-docs/docs/webjs",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/index/webjs.md",tags:[],version:"current",frontMatter:{slug:"/webjs",title:"WebJS SDK"},sidebar:"docSidebar",previous:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/growingio-sdk-docs/docs/ios/Upgrade"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/webjs/version"}},c={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5e73\u53f0\u517c\u5bb9\u6027",id:"\u5e73\u53f0\u517c\u5bb9\u6027",level:2},{value:"Saas",id:"saas",level:3},{value:"CDP(OP)\u79c1\u6709\u90e8\u7f72",id:"cdpop\u79c1\u6709\u90e8\u7f72",level:3},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2},{value:"\u5347\u7ea7\u6307\u5357",id:"\u5347\u7ea7\u6307\u5357",level:2}],m={toc:u},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"GrowingIO WebJS SDK \u652f\u6301 IE11 \u6d4f\u89c8\u5668\u3001360 \u6d4f\u89c8\u5668\u3001\u8c37\u6b4c\u6d4f\u89c8\u5668\u3001\u641c\u72d7\u6d4f\u89c8\u5668\u3001\u706b\u72d0\u6d4f\u89c8\u5668\u3001QQ \u6d4f\u89c8\u5668\u3001Safari \u6d4f\u89c8\u5668\u3001Maxthon\u3001Mobile \u7aef\u6d4f\u89c8\u5668\uff0c\u5e76\u4e14\u5168\u9762\u652f\u6301 H5\uff0c\u8986\u76d6\u5e02\u9762\u4e0a\u4e3b\u6d41\u7684\u6d4f\u89c8\u5668\u3002\u53ea\u8981\u5728 layout \u6587\u4ef6\u91cc\u9762\u52a0\u5165\u51e0\u884c\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u96c6\u6210 GrowingIO \u7684 JS SDK\uff0c\u53ef\u4ee5\u91c7\u96c6\u7528\u6237\u7684\u884c\u4e3a\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5f53 SDK \u52a0\u8f7d\u540e\uff0c\u4f1a\u81ea\u52a8\u5f00\u59cb\u91c7\u96c6\u4ee5\u4e0b\u4e09\u7c7b\u6570\u636e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7528\u6237\u8bbf\u95ee\u6570\u636e\uff1a")," \u7f51\u7ad9\u8bbf\u5ba2\u5728\u4f55\u65f6\u4f55\u5730\u8bbf\u95ee\u4e86\u54ea\u4e2a\u7f51\u9875\uff0c\u6536\u96c6\u5305\u62ec\u57df\u540d\u3001\u9875\u9762\u8def\u5f84\u3001\u6d4f\u89c8\u5668\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u5c4f\u5e55\u5206\u8fa8\u7387\u3001\u8bbf\u95ee\u6765\u6e90\u3001\u7528\u6237\u552f\u4e00\u6807\u8bc6 ID\u3001\u8bbf\u95ee\u552f\u4e00\u6807\u8bc6 ID\u3001\u8bbf\u95ee\u65f6\u95f4\u3001\u9875\u9762\u6807\u9898\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u884c\u4e3a\u6570\u636e\uff1a"),"\u7528\u6237\u5728\u7f51\u7ad9\u4e0a\u7684\u4ea4\u4e92\u884c\u4e3a\uff0c\u6bd4\u5982\u70b9\u51fb\u94fe\u63a5\u3001\u4fee\u6539\u9009\u62e9\uff0c\u90fd\u4f1a\u88ab\u81ea\u52a8\u91c7\u96c6\uff0c\u5185\u5bb9\u5305\u62ec\u4ea4\u4e92\u5143\u7d20\u7684\u9875\u9762\u4fe1\u606f\u3001\u4ea4\u4e92\u884c\u4e3a\u7c7b\u578b\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u6807\u8bb0 ID\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u5185\u5bb9\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u8d85\u94fe\u63a5\u3001\u4ea4\u4e92\u5143\u7d20\u7684\u4f4d\u7f6e\u4fe1\u606f\u3002SDK \u4e0d\u91c7\u96c6\u9664\u641c\u7d22\u6846\u5916\u4efb\u4f55\u7528\u6237\u5728\u8868\u5355\u91cc\u8f93\u5165\u7684\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5185\u5bb9\u6570\u636e\uff1a"),"\u5f53\u7528\u6237\u8bbf\u95ee\u7f51\u7ad9\u65f6\uff0c\u7528\u6237\u770b\u5230\u7684\u5185\u5bb9\u5373\u9875\u9762\u51fa\u73b0\u7684\u5143\u7d20\uff0c\u4f1a\u88ab\u81ea\u52a8\u91c7\u96c6\uff0c\u5305\u62ec\u5185\u5bb9\u6240\u5728\u7684\u9875\u9762\u4fe1\u606f\u3001\u5143\u7d20\u7684\u6807\u8bb0 ID\u3001\u6587\u672c\u5185\u5bb9\u3001\u8d85\u94fe\u63a5\u3001\u4f4d\u7f6e\u4fe1\u606f\u3002")),(0,a.kt)("p",null,"\u5173\u4e8e\u66f4\u8be6\u7ec6\u7684\u76f8\u5173\u5b9e\u73b0\u3001\u65e0\u57cb\u70b9\u4ee5\u53ca\u4e00\u4e9b\u5b9e\u8df5\u7684\u6848\u4f8b\uff0c\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/encyclopedia"},"\u5c0f\u767e\u79d1"),"\u3002"),(0,a.kt)("h2",{id:"\u5e73\u53f0\u517c\u5bb9\u6027"},"\u5e73\u53f0\u517c\u5bb9\u6027"),(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u7531\u4e8e4.x\u7248\u672c\u7684SDK\u8c03\u6574\u4e86\u65e0\u57cb\u70b9\u903b\u8f91\u548c\u4e0a\u62a5\u6570\u636e\u7684\u6d4b\u91cf\u534f\u8bae\uff0c\u56e0\u6b644.x\u7248\u672c\u7684SDK\u8981\u6c42\u5e73\u53f0\u7248\u672c\u6700\u4f4e4.2.0\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4f4e\u4e8e4.2.0\uff0c\u8bf7\u4f7f\u7528\u5bf9\u5e94\u7248\u672c\u7684SDK\u3002\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u6570\u636e\u65e0\u6cd5\u4e0a\u62a5\u6216\u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"saas"},"Saas"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u662f ",(0,a.kt)("strong",{parentName:"p"},"GrowingIO\u5b98\u7f51")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"2.x \u7248\u672cSDK"),"\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4f46\u7248\u672c\u53f7\u4f4e\u4e8e4.2.0")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"3.0.x-3.8.x \u7248\u672cSDK"),"\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4e14\u7248\u672c\u53f7\u5927\u4e8e\u7b49\u4e8e4.2.0")," \uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u53c2\u8003\u672c\u6587\u6863\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4e0d\u5728\u4e0a\u8ff0\u8303\u56f4\u5185\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,a.kt)("h3",{id:"cdpop\u79c1\u6709\u90e8\u7f72"},"CDP(OP)\u79c1\u6709\u90e8\u7f72"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"13.6\u7248\u672c")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"0.6.x-1.2 \u7248\u672cSDK"),"\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"2.0-2.11.x \u6216 4.0-4.2.0\u4ee5\u4e0b\uff08\u4e0d\u542b\uff09")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"3.0-3.8.x \u7248\u672cSDK"),"\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4e14\u7248\u672c\u53f7\u9ad8\u4e8e\u7b49\u4e8e4.2.0")," \uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u53c2\u8003\u672c\u6587\u6863\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4e0d\u5728\u4e0a\u8ff0\u8303\u56f4\u5185\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png",alt:"IE",width:"24px",height:"24px"})),(0,a.kt)("br",null),"InternetExplorer"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"Edge",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Edge"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Firefox"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Chrome"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Safari"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Opera"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Electron"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},">= 15"),(0,a.kt)("td",{parentName:"tr",align:null},">= 54"),(0,a.kt)("td",{parentName:"tr",align:null},">= 51"),(0,a.kt)("td",{parentName:"tr",align:null},">= 10"),(0,a.kt)("td",{parentName:"tr",align:null},">= 38"),(0,a.kt)("td",{parentName:"tr",align:null},">= 10")))),(0,a.kt)("h2",{id:"\u5347\u7ea7\u6307\u5357"},"\u5347\u7ea7\u6307\u5357"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u539f\u5148\u4f7f\u7528\u5404\u4e2a\u4f4e\u7248\u672c\u7684\u7528\u6237\u5feb\u901f\u5347\u7ea7\u52304.0\uff0c\u6211\u4eec\u5355\u72ec\u4e3a\u60a8\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5feb\u901f\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u8be6\u60c5\u4ecb\u7ecd\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/upgrade"},"\u5347\u7ea7\u6307\u5357")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(o.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);