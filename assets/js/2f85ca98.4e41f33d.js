"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7294),i=r(6010),o=r(3438),a=r(9960),l=r(3919),c=r(5999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a},a))}function u(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(f,{items:r.items,className:t})}function f(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},1951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),o=r(4996),a=r(2991),l=r(3438);const c={slug:"/giokit/android/",title:"\u529f\u80fd\u4ecb\u7ecd"},d=void 0,s={unversionedId:"giokit/android/index",id:"giokit/android/index",title:"\u529f\u80fd\u4ecb\u7ecd",description:"SDK \u81ea\u68c0",source:"@site/docs/giokit/android/index.md",sourceDirName:"giokit/android",slug:"/giokit/android/",permalink:"/growingio-sdk-docs/docs/giokit/android/",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/android/index.md",tags:[],version:"current",frontMatter:{slug:"/giokit/android/",title:"\u529f\u80fd\u4ecb\u7ecd"},sidebar:"docSidebar",previous:{title:"GioKit",permalink:"/growingio-sdk-docs/docs/giokit"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/android/version"}},p={},u=[{value:"SDK \u81ea\u68c0",id:"sdk-\u81ea\u68c0",level:3},{value:"SDK \u4fe1\u606f",id:"sdk-\u4fe1\u606f",level:3},{value:"\u4ee3\u7801\u57cb\u70b9\uff08\u4ec5 Android\uff09",id:"\u4ee3\u7801\u57cb\u70b9\u4ec5-android",level:3},{value:"\u4e8b\u4ef6\u5e93",id:"\u4e8b\u4ef6\u5e93",level:3},{value:"XPath\u8ffd\u8e2a",id:"xpath\u8ffd\u8e2a",level:3},{value:"\u7f51\u7edc\u8bb0\u5f55",id:"\u7f51\u7edc\u8bb0\u5f55",level:3},{value:"\u5b9e\u65f6\u4e8b\u4ef6",id:"\u5b9e\u65f6\u4e8b\u4ef6",level:3},{value:"\u9519\u8bef\u62a5\u544a",id:"\u9519\u8bef\u62a5\u544a",level:3},{value:"\u542f\u52a8\u8017\u65f6",id:"\u542f\u52a8\u8017\u65f6",level:3}],m=(k="ImageLoader",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var k;const g={toc:u},f="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"sdk-\u81ea\u68c0"},"SDK \u81ea\u68c0"),(0,i.kt)("p",null,"\u70b9\u51fb\u81ea\u68c0\u9875\u4e2d\u95f4\u7684\u6309\u94ae\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u68c0\u6d4b\u5f53\u524d SDK \u96c6\u6210\u72b6\u6001\uff0c\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u524d SDK \u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"SDK \u521d\u59cb\u5316\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u9879\u76eeID"),(0,i.kt)("li",{parentName:"ul"},"ServerHost"),(0,i.kt)("li",{parentName:"ul"},"URL Scheme \u914d\u7f6e\u7b49\u7b49")),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u82e5\u6807\u6ce8\u7ea2\u5b57\u5219\u8bf4\u660e\u8be5\u9879\u8bbe\u7f6e\u53ef\u80fd\u5728\u6b63\u5f0f\u73af\u5883\u4e0b\u4f1a\u6709\u9690\u60a3\u3002")),(0,i.kt)("center",null,(0,i.kt)("img",{alt:"SDK \u81ea\u68c0",src:(0,o.Z)("/img/giokit/android/checkself.gif")})),(0,i.kt)("h3",{id:"sdk-\u4fe1\u606f"},"SDK \u4fe1\u606f"),(0,i.kt)("p",null,"\u6536\u96c6\u4e86 SDK \u4ee5\u53ca\u5e94\u7528\u7684\u6240\u6709\u57fa\u672c\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\u5bf9\u6bd4\u6240\u914d\u7f6e\u5185\u5bb9\u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u5982\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8fd8\u53ef\u622a\u957f\u56fe\u53d1\u9001\u7ed9\u6280\u672f\u652f\u6301\u534f\u52a9\u6392\u67e5\u3002"),(0,i.kt)("center",null," ",(0,i.kt)("img",{alt:"SDK \u4fe1\u606f",src:(0,o.Z)("/img/giokit/android/sdkinfo.gif")})),(0,i.kt)("h3",{id:"\u4ee3\u7801\u57cb\u70b9\u4ec5-android"},"\u4ee3\u7801\u57cb\u70b9\uff08\u4ec5 Android\uff09"),(0,i.kt)("p",null,"\u5c55\u793a\u4e86 App \u4ee3\u7801\u4e2d\u6240\u6709\u7684\u624b\u52a8\u57cb\u70b9\u4f4d\u7f6e\uff0c\u4ee5 \u201c\u7c7b+\u65b9\u6cd5\u201d \u7684\u5217\u8868\u5f62\u5f0f\u5c55\u73b0\u3002"),(0,i.kt)("center",null,(0,i.kt)(m,{path:"img/giokit/android/sdkcode.jpg",mdxType:"ImageLoader"})),(0,i.kt)("h3",{id:"\u4e8b\u4ef6\u5e93"},"\u4e8b\u4ef6\u5e93"),(0,i.kt)("p",null,"\u4ee5\u5217\u8868\u5f62\u5f0f\u5c55\u793a\u81ea\u63d2\u4ef6\u542f\u7528\u540e\u6240\u6709\u7684\u57cb\u70b9\u6570\u636e\u53ca\u5176\u53d1\u9001\u72b6\u6001\uff0c\u70b9\u51fb\u5355\u6761\u6570\u636e\u53ef\u67e5\u770b\u6570\u636e\u8be6\u60c5\u3002\u6570\u636e\u683c\u5f0f\u8bf7\u79fb\u6b65",(0,i.kt)("a",{parentName:"p",href:"/docs/Measurement"},"\u6d4b\u91cf\u534f\u8bae"),"\u3002\u6570\u636e\u5173\u6ce8\u70b9\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/knowledge/debugverify#%E6%A0%A1%E9%AA%8C%E6%97%B6%E9%9C%80%E5%85%B3%E6%B3%A8%E5%AD%97%E6%AE%B5%E5%92%8C%E8%AF%B4%E6%98%8E"},"\u6821\u9a8c\u65f6\u9700\u5173\u6ce8\u5b57\u6bb5\u548c\u8bf4\u660e"),"\u3002\n\u540c\u65f6\u60a8\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165\u4e8b\u4ef6\u7c7b\u578b\u6765\u8fdb\u884c\u7b5b\u9009\uff0c\u53ef\u4ee5\u9009\u4e2d\u590d\u5236\u6570\u636e\u8be6\u60c5\u3002"),(0,i.kt)("center",null,(0,i.kt)("img",{alt:"\u57cb\u70b9\u6570\u636e",src:(0,o.Z)("/img/giokit/android/sdkdata.gif")})),(0,i.kt)("h3",{id:"xpath\u8ffd\u8e2a"},"XPath\u8ffd\u8e2a"),(0,i.kt)("p",null,"\u5f00\u542f\u8be5\u529f\u80fd\u540e\uff0c\u62d6\u52a8\u5706\u70b9\u5230\u5bf9\u5e94\u63a7\u4ef6\u4e0a\uff0c\u5373\u53ef\u663e\u793a\u8be5\u63a7\u4ef6\u7684 path \u8def\u5f84\uff0c\u4fbf\u4e8e\u5bf9\u7167\u5df2\u5708\u9009\u7684\u6307\u6807\u3002\u652f\u6301\u539f\u751f\u63a7\u4ef6\u53ca WebView\u3002"),(0,i.kt)("center",null,(0,i.kt)("img",{alt:"\u57cb\u70b9\u8ffd\u8e2a",src:(0,o.Z)("/img/giokit/android/sdktrack.gif")})),(0,i.kt)("h3",{id:"\u7f51\u7edc\u8bb0\u5f55"},"\u7f51\u7edc\u8bb0\u5f55"),(0,i.kt)("p",null,"\u8be5\u754c\u9762\u4f1a\u663e\u793a\u5e94\u7528",(0,i.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u671f\u95f4"),"\u4ea7\u751f\u7684\u6240\u6709\u7f51\u7edc\u8bf7\u6c42\uff0c\u5305\u62ec\u8bf7\u6c42\u6570\u91cf\uff0c\u8bf7\u6c42\u5927\u5c0f\u548c\u8bf7\u6c42\u9519\u8bef\u7684\u4e2a\u6570\u3002\u540c\u65f6\u5728\u8be6\u60c5\u9875\u5185\u53ef\u4ee5\u67e5\u770b\u4f7f\u7528\u4e86\u52a0\u5bc6\u5e93\u4e4b\u540e\u7684\u8bf7\u6c42\u6570\u636e\u3002"),(0,i.kt)("center",null," ",(0,i.kt)("img",{alt:"\u7f51\u7edc\u8bf7\u6c42",src:(0,o.Z)("/img/giokit/android/sdkhttp.gif")})),(0,i.kt)("h3",{id:"\u5b9e\u65f6\u4e8b\u4ef6"},"\u5b9e\u65f6\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u70b9\u51fb\u540e\u6253\u5f00\u5b9e\u65f6\u4e8b\u4ef6\u76d1\u63a7\uff0cApp \u4e2d\u89e6\u53d1\u7684\u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u5b9e\u65f6\u5c55\u793a\uff0c\u70b9\u51fb\u754c\u9762\u5f39\u51fa\u7684\u4e8b\u4ef6\u9875\u7b7e\u53ef\u8fdb\u5165\u4e8b\u4ef6\u5e93\u5217\u8868\u67e5\u770b\u5bf9\u5e94\u4e8b\u4ef6\u6570\u636e\u3002\u518d\u6b21\u70b9\u51fb\u5173\u95ed\u76d1\u63a7\u3002"),(0,i.kt)("h3",{id:"\u9519\u8bef\u62a5\u544a"},"\u9519\u8bef\u62a5\u544a"),(0,i.kt)("p",null,"\u8be5\u754c\u9762\u4f1a\u6355\u83b7\u5e94\u7528\u8fd0\u884c\u671f\u95f4\u53d1\u751f\u7684Java\u9519\u8bef\uff0c\u5305\u62ecANR\u9519\u8bef\u3002\u5728\u8be6\u60c5\u9875\u53ef\u4ee5\u67e5\u770b\u9519\u8bef\u7684\u5806\u6808\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"\u542f\u52a8\u8017\u65f6"},"\u542f\u52a8\u8017\u65f6"),(0,i.kt)("p",null,"\u542f\u52a8\u8017\u65f6\u754c\u9762\u4f1a\u7edf\u8ba1\u5e94\u7528\u6bcf\u4e2a\u754c\u9762\u6253\u5f00\u7684\u8017\u65f6\u65f6\u95f4\uff0c\u5305\u62ecapp\u51b7\u70ed\u542f\u52a8\u65f6\u95f4\uff0cActivity\u542f\u52a8\u65f6\u95f4\uff0cFragment\u542f\u52a8\u65f6\u95f4\u3002"),(0,i.kt)(a.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);