"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),u=r(7094),p=r(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:r,block:o,defaultValue:m,values:d,groupId:v,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[w,O]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=v){const e=y[v];null!=e&&e!==w&&k.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,r=E.indexOf(t),n=k[r].value;n!==w&&(D(t),O(n),null!=v&&N(v,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:T,onClick:C},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},1343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const l={slug:"/miniprogram/3.8",title:"\u5c0f\u7a0b\u5e8f SDK\uff083.8\uff09"},o=void 0,i={unversionedId:"miniprogram/3.8/index",id:"miniprogram/3.8/index",title:"\u5c0f\u7a0b\u5e8f SDK\uff083.8\uff09",description:"Tips\uff1a3.8\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u201c\u65e7\u7248\u672c\u201d\u7279\u6307 3.8.0 \u4ee5\u4e0b\u7684\u65e7\u67b6\u6784\u7248\u672c\u3002",source:"@site/docs/miniprogram/3.8/index.md",sourceDirName:"miniprogram/3.8",slug:"/miniprogram/3.8",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/index.md",tags:[],version:"current",frontMatter:{slug:"/miniprogram/3.8",title:"\u5c0f\u7a0b\u5e8f SDK\uff083.8\uff09"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/commonlyApi"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/version"}},u={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0",id:"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"3.3\u4e0e3.8\u5bf9\u6bd4",id:"33\u4e0e38\u5bf9\u6bd4",level:2},{value:"3.3\u5347\u7ea7\u52303.8",id:"33\u5347\u7ea7\u523038",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Tips\uff1a3.8\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u201c\u65e7\u7248\u672c\u201d\u7279\u6307 ",(0,a.kt)("inlineCode",{parentName:"em"},"3.8.0")," \u4ee5\u4e0b\u7684\u65e7\u67b6\u6784\u7248\u672c\u3002"))),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8fSDK 3.8 \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"QQ\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u5feb\u624b\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u5feb\u5e94\u7528"),"\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u53ef\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u548c\u63d2\u4ef6\u63a7\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u80fd\u529b\uff0c\u9664\u5feb\u5e94\u7528\u5916\uff0c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5747\u652f\u6301\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u5feb\u624b\u5c0f\u7a0b\u5e8f\u7684\u9002\u914d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589euni-app vue3\u3001taro3 vue3\u3001remax\u7684\u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e91\u51fd\u6570\u548c\u4e91\u5e94\u7528\u8f6c\u53d1\u65b9\u5f0f\u7684\u9002\u914d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u636e\u4f7f\u7528\u573a\u666f\u81ea\u7531\u642d\u914dSDK\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5f00\u53d1\u3002\uff08\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u6682\u672a\u5f00\u653e\uff09")),(0,a.kt)("h2",{id:"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0"},"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0"),(0,a.kt)("p",null,"\u76f8\u6bd4\u65e7\u7248\u672c\uff0c\u6211\u4eec\u4f9d\u636e\u4e0d\u540c\u7684\u5e73\u53f0\u6253\u5305\u4e86\u5e73\u53f0\u4e13\u7528\u7684SDK\uff08\u5373\u539f\u751f\u5f00\u53d1\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u53ea\u80fd\u4f7f\u7528\u5fae\u4fe1\u5c0f\u7a0b\u5e8fSDK\uff09\u7528\u6237\u53ef\u6839\u636e\u81ea\u8eab\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u6216\u5f00\u53d1\u6846\u67b6\u81ea\u7531\u9009\u62e9\u3002\u7531\u4e8e\u53ea\u6253\u5305\u4e86\u7279\u5b9a\u5e73\u53f0\u7684\u903b\u8f91\uff0c\u505a\u5230\u4e86\u7cbe\u7b80\u65e0\u5197\u4f59\uff0c\u5bf9SDK\u7684\u6574\u4f53\u5305\u5927\u5c0f\u63a7\u5236\u66f4\u5408\u7406\u3002"),(0,a.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,a.kt)("p",null,"\u76f8\u6bd4\u65e7\u7248\u672c\uff0c\u6211\u4eec\u9002\u914d\u4e86\u66f4\u591a\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u548c\u6846\u67b6\uff0c\u8bf7\u5728\u5de6\u4fa7\u83dc\u5355\u680f\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u7aef\u8fdb\u884c\u96c6\u6210\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f97\u76ca\u4e8e\u65b0\u67b6\u6784\u7684SDK\uff0c\u6211\u4eec\u5c06\u529f\u80fd\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u4e86\u62c6\u5206\uff0c\u65e2\u964d\u4f4e\u4e86SDK\u5185\u90e8\u903b\u8f91\u7684\u8026\u5408\u7a0b\u5ea6\uff0c\u53c8\u5c3d\u53ef\u80fd\u51cf\u5c0f\u5bf9\u5c0f\u7a0b\u5e8f\u6574\u4f53\u5305\u5927\u5c0f\u589e\u91cf\u7684\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"33\u4e0e38\u5bf9\u6bd4"},"3.3\u4e0e3.8\u5bf9\u6bd4"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u5feb\u901f\u7684\u5e2e\u52a9\u60a8\u7406\u89e3\u5c0f\u7a0b\u5e8fSDK3.8\u4e0e\u65e7\u7248\u672c\u7684\u533a\u522b\uff0c\u6211\u4eec\u4e3a\u60a8\u8be6\u7ec6\u7f57\u5217\u4e86\u4e24\u8005\u7684\u533a\u522b\u3002"),(0,a.kt)("p",null,"\u5bf9\u6bd4\u8be6\u60c5\u4ecb\u7ecd\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/contrast"},"3.3\u4e0e3.8\u5bf9\u6bd4")),(0,a.kt)("h2",{id:"33\u5347\u7ea7\u523038"},"3.3\u5347\u7ea7\u52303.8"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u539f\u5148\u4f7f\u75283.3\u7248\u672c\u7684\u7528\u6237\u5feb\u901f\u5347\u7ea7\u52303.8\uff0c\u6211\u4eec\u5355\u72ec\u4e3a\u60a8\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5feb\u901f\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u8be6\u60c5\u4ecb\u7ecd\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/upgrade"},"3.3\u5347\u7ea7\u52303.8")))}c.isMDXComponent=!0}}]);