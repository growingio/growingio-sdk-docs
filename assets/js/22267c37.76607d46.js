"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7462),a=t(7294),o=t(6010),i=t(2389),l=t(7392),s=t(7094),p=t(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,t;const{lazy:i,block:m,defaultValue:c,values:g,groupId:k,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,l.l)(h,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===c?c:null!=(n=null!=c?c:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:C}=(0,s.U)(),[w,j]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==w&&h.some((n=>n.value===e))&&j(e)}const I=e=>{const n=e.currentTarget,t=O.indexOf(n),r=h[t].value;r!==w&&(T(n),j(r),null!=k&&C(k,String(r)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=O.indexOf(e.currentTarget)+1;t=null!=(r=O[n])?r:O[0];break}case"ArrowLeft":{var a;const n=O.indexOf(e.currentTarget)-1;t=null!=(a=O[n])?a:O[O.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},h.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>O.push(e),onKeyDown:S,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function c(e){const n=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},6847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));t(5488),t(5162);const o={sidebar_position:6,title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"},i=void 0,l={unversionedId:"miniprogram/3.8/integration/taobao",id:"miniprogram/3.8/integration/taobao",title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f",description:"\u76ee\u524d\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/3.8/integration/taobao.md",sourceDirName:"miniprogram/3.8/integration",slug:"/miniprogram/3.8/integration/taobao",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/taobao",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/integration/taobao.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"QQ\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/qq"},next:{title:"\u5feb\u624b\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/kuaishou"}},s={},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",level:3},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:5},{value:"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210",id:"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210",level:3},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:3},{value:"1\u3001\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6",id:"1\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-1",level:5},{value:"2\u3001\u8c03\u7528<code>registerPlugins</code>\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6",id:"2\u8c03\u7528registerplugins\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:5},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:3},{value:"1\uff09\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5",id:"1\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5",level:4},{value:"2\uff09\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5",id:"2\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5",level:4},{value:"\u4e91\u51fd\u6570\u4e0a\u62a5",id:"\u4e91\u51fd\u6570\u4e0a\u62a5",level:3},{value:"\u5176\u4ed6\u4fe1\u606f",id:"\u5176\u4ed6\u4fe1\u606f",level:3}],u={toc:p};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76ee\u524d\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,a.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,a.kt)("p",null,"3\u3001\u4e0b\u8f7dSDK\u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4e3a\u4f8b(\u76ee\u5f55\u548cSDK\u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"},"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u3002\u6dfb\u52a0\u4f4d\u7f6e\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,a.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"\u6dd8\u5b9d\u539f\u751fSDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.7/gio-taobao.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.7/gio-taobao.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taobao.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taobao';\n\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    tbConfig: { ... },\n    ...other settings\n});\n\nApp({ ... });\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"strong"},"tbConfig")," \u4e3a\u5fc5\u586b\u9879\uff0c\u8be6\u60c5\u8bf7",(0,a.kt)("a",{parentName:"strong",href:"/docs/miniprogram/3.8/initSettings#tbconfig"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.8/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,a.kt)("h3",{id:"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210"},"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u53c2\u8003\u5c0f\u7a0b\u5e8f\u96c6\u6210\u5728\u6307\u5b9a\u7684\u5c0f\u90e8\u4ef6Component\u7ec4\u4ef6\u7684js\u4e2d\u96c6\u6210\u5373\u53ef\u3002SDK\u521d\u59cb\u5316\u65f6\u4f1a\u81ea\u52a8\u5207\u6362\u4e3a\u63d2\u4ef6\u6a21\u5f0f\uff0c\u5c06\u5f53\u524dComponent\u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u5e94\u7528\u53d1\u9001VISIT\u4e8b\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// myComponent.js\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    tbConfig: { ... },\n    ...other settings\n});\n\nComponent({ ... });\n")),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u539f\u6709SDK\u529f\u80fd\uff08\u9ed8\u8ba4\u4ec5\u6709\u57cb\u70b9\u529f\u80fd\uff09\u4e0a\u6dfb\u52a0\u989d\u5916\u7684\u529f\u80fd\uff0c\u53ef\u4f7f\u7528\u63d2\u4ef6\u5e76\u6309\u9700\u8fdb\u884c\u6269\u5c55\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u6587\u4ef6\u8bf4\u660e\u53c2\u8003\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h4",{id:"1\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6"},"1\u3001\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"\u63d2\u4ef6\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.7/plugins.zip"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.7/plugins.zip"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("p",null,"\u4e0b\u8f7d\u529f\u80fd\u63d2\u4ef6\uff0c\u89e3\u538b\u653e\u5165 plugins \u76ee\u5f55\u4e2d\uff0c\u5e76\u5728app.js/main.js\u4e2d\u5f15\u5165\u3002"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-1"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("p",null,"\u76f4\u63a5\u4eceSDK\u4e3b\u4f53npm\u5305\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u76ee\u5f55\u5f15\u5165\u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"2\u8c03\u7528registerplugins\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6"},"2\u3001\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"registerPlugins"),"\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728init\u8bed\u53e5\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"registerPlugins"),"\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gioImpressionTracking from './utils/plugins/gioImpressionTracking';\nimport gioCompress from './utils/plugins/gioCompress';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gioImpressionTracking from 'gio-miniprogram-sdk-cdp/plugins/gioImpressionTracking';\nimport gioCompress from 'gio-miniprogram-sdk-cdp/plugins/gioCompress';\n\n\n...\n// \u5728init\u8bed\u53e5\u524d\u8c03\u7528`registerPlugins`\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002\ngdp('registerPlugins', [gioImpressionTracking, gioCompress]);\ngdp('init', xxxxx);\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"debugLog",src:t(8321).Z,width:"637",height:"218"})),(0,a.kt)("h3",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"debugLog",src:t(6423).Z,width:"949",height:"886"})),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("h4",{id:"1\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5"},"1\uff09\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5"),(0,a.kt)("p",null,"\u7531\u4e8e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5bf9\u4f7f\u7528\u4e91\u51fd\u6570\u5bf9\u5916\u4e0a\u62a5\u7684\u65b9\u5f0f\u8981\u6c42\u4e25\u683c\uff0c\u56e0\u6b64\u9700\u8981\u5177\u4f53\u57df\u540d\u548c\u5b57\u6bb5\u9700\u8981\u4e0e\u6211\u4eec\u6c9f\u901a\u786e\u8ba4\u540e\u7531\u5f00\u53d1\u4e3b\u4f53\u7533\u8bf7\u767d\u540d\u5355 ",(0,a.kt)("a",{parentName:"p",href:"https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e0d\u8981\u8f7b\u6613\u5c1d\u8bd5\u7533\u8bf7\uff01\u4f1a\u6d6a\u8d39\u60a8\u7684\u7533\u8bf7\u8d44\u6e90\uff01\u8bf7\u4e0e\u6211\u4eec\u5145\u5206\u6c9f\u901a\u9700\u6c42\u540e\u518d\u5b9e\u8df5\u3002")),(0,a.kt)("h4",{id:"2\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5"},"2\uff09\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5"),(0,a.kt)("p",null,"\u65e0\u9700\u7533\u8bf7\u767d\u540d\u5355\u3002",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u8bf7\u4e0e\u6211\u4eec\u5145\u5206\u6c9f\u901a\u9700\u6c42\u540e\u518d\u5b9e\u8df5\u3002")),(0,a.kt)("h3",{id:"\u4e91\u51fd\u6570\u4e0a\u62a5"},"\u4e91\u51fd\u6570\u4e0a\u62a5"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7ed9\u51fa\u4e91\u51fd\u6570\u4e0a\u62a5\u5728\u4ee3\u7801\u4e2d\u7684\u8c03\u7528\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// 1\u3001server\u76ee\u5f55\u4e2d\u521b\u5efa\u81ea\u5b9a\u4e49\u4e91\u51fd\u6570\u3002\u6ce8\u610f\u8be5\u4e91\u51fd\u6570\u540d\u79f0\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u586b\u5199cloudFuncName\u3002\n\n// 2\u3001index.js\n// \u6ce8\u610f\u8fd9\u91cc\u7684 main \u4e3a\u793a\u4f8b\uff0c\u540d\u79f0\u8bf7\u81ea\u884c\u786e\u5b9a\uff0c\u8be5\u540d\u79f0\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u586b\u5199cloudFuncHandler\u3002\nexports.main = async (context) => {\n  const { domain, path, params, body } = context.data;\n  const result = await context.cloud.httpApi.invoke({\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json;charset=UTF-8' },\n    domain: context.env === 'online' ? domain : 'your test host',\n    path,\n    params,\n    body: body\n  });\n  return { success: true, msg: result };\n};\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u4fe1\u606f"},"\u5176\u4ed6\u4fe1\u606f"),(0,a.kt)("p",null,"\u7531\u4e8e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5e95\u5c42\u4f7f\u7528\u7684\u662f\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u4ee3\u7801\uff0c\u6240\u4ee5\u5728SDK\u8bc6\u522b\u4e0a\u53ef\u80fd\u4f1a\u88ab\u8bc6\u522b\u4e3a\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u3002"))}d.isMDXComponent=!0},8321:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin_debug-16a7798aa53b78920aed1712e321b6e4.png"},6423:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/taobao_debug-d38df79f21df31cab8d1dae6ee42518e.png"}}]);