"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),i=r(6775),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var g=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},8469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162);const l={slug:"/miniprogram",title:"\u5c0f\u7a0b\u5e8f SDK"},o=void 0,i={unversionedId:"index/miniprogram",id:"index/miniprogram",title:"\u5c0f\u7a0b\u5e8f SDK",description:"\u7b80\u4ecb",source:"@site/docs/index/miniprogram.md",sourceDirName:"index",slug:"/miniprogram",permalink:"/growingio-sdk-docs/docs/miniprogram",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/index/miniprogram.md",tags:[],version:"current",frontMatter:{slug:"/miniprogram",title:"\u5c0f\u7a0b\u5e8f SDK"},sidebar:"docSidebar",previous:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/growingio-sdk-docs/docs/webjs/encyclopedia/advancedFeatures"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/miniprogram/version"}},u={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"\u5e73\u53f0\u517c\u5bb9\u6027",id:"\u5e73\u53f0\u517c\u5bb9\u6027",level:2},{value:"Saas",id:"saas",level:3},{value:"CDP(OP)\u79c1\u6709\u90e8\u7f72",id:"cdpop\u79c1\u6709\u90e8\u7f72",level:3},{value:"\u5347\u7ea7\u6307\u5357",id:"\u5347\u7ea7\u6307\u5357",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8fSDK 4.0 \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"QQ\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u5feb\u624b\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u5feb\u5e94\u7528"),"\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u53ef\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u63d2\u4ef6\u63a7\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u80fd\u529b\uff0c\u9664\u5feb\u5e94\u7528\u5916\uff0c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5747\u652f\u6301\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u636e\u4f7f\u7528\u573a\u666f\u81ea\u7531\u642d\u914dSDK\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5f00\u53d1\u3002")),(0,a.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,a.kt)("p",null,"\u76f8\u6bd4\u65e7\u7248\u672c\uff0c\u6211\u4eec\u9002\u914d\u4e86\u66f4\u591a\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u548c\u6846\u67b6\uff0c\u8bf7\u5728\u5de6\u4fa7\u83dc\u5355\u680f\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u7aef\u8fdb\u884c\u96c6\u6210\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f97\u76ca\u4e8e\u65b0\u67b6\u6784\u7684SDK\uff0c\u6211\u4eec\u5c06\u529f\u80fd\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u4e86\u62c6\u5206\uff0c\u65e2\u964d\u4f4e\u4e86SDK\u5185\u90e8\u903b\u8f91\u7684\u8026\u5408\u7a0b\u5ea6\uff0c\u53c8\u5c3d\u53ef\u80fd\u51cf\u5c0f\u5bf9\u5c0f\u7a0b\u5e8f\u6574\u4f53\u5305\u5927\u5c0f\u589e\u91cf\u7684\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"\u5e73\u53f0\u517c\u5bb9\u6027"},"\u5e73\u53f0\u517c\u5bb9\u6027"),(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u7531\u4e8e4.x\u7248\u672c\u7684SDK\u8c03\u6574\u4e86\u65e0\u57cb\u70b9\u903b\u8f91\u548c\u4e0a\u62a5\u6570\u636e\u7684\u6d4b\u91cf\u534f\u8bae\uff0c\u56e0\u6b644.x\u7248\u672c\u7684SDK\u8981\u6c42\u5e73\u53f0\u7248\u672c\u6700\u4f4e4.2.0\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4f4e\u4e8e4.2.0\uff0c\u8bf7\u4f7f\u7528\u5bf9\u5e94\u7248\u672c\u7684SDK\u3002\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u6570\u636e\u65e0\u6cd5\u4e0a\u62a5\u6216\u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"saas"},"Saas"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"GrowingIO\u5b98\u7f51")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"3.0-3.7.x \u7248\u672cSDK"),"\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4f46\u7248\u672c\u53f7\u4f4e\u4e8e4.2.0")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"3.8 \u7248\u672cSDK"),"\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4e14\u7248\u672c\u53f7\u5927\u4e8e\u7b49\u4e8e4.2.0")," \uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u53c2\u8003\u672c\u6587\u6863\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4e0d\u5728\u4e0a\u8ff0\u8303\u56f4\u5185\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,a.kt)("h3",{id:"cdpop\u79c1\u6709\u90e8\u7f72"},"CDP(OP)\u79c1\u6709\u90e8\u7f72"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684OP\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"13.6\u7248\u672c")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"0.6.x-1.2 \u7248\u672cSDK"),"\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684OP\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"2.0-2.11.x \u6216 4.0-4.2.0\u4ee5\u4e0b\uff08\u4e0d\u542b\uff09")," \uff0c\u5373\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"3.0-3.8.x \u7248\u672cSDK"),"\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4e14\u7248\u672c\u53f7\u9ad8\u4e8e\u7b49\u4e8e4.2.0")," \uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u53c2\u8003\u672c\u6587\u6863\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4e0d\u5728\u4e0a\u8ff0\u8303\u56f4\u5185\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u5347\u7ea7\u6307\u5357"},"\u5347\u7ea7\u6307\u5357"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u539f\u5148\u4f7f\u7528\u5404\u4e2a\u7248\u672c\u7684\u7528\u6237\u5feb\u901f\u5347\u7ea7\u52304.0\uff0c\u6211\u4eec\u5355\u72ec\u4e3a\u60a8\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5feb\u901f\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u8be6\u60c5\u4ecb\u7ecd\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/upgrade"},"\u5347\u7ea7\u6307\u5357")))}d.isMDXComponent=!0}}]);