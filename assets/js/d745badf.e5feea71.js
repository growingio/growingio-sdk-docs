"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1899],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var r=t(7462),a=t(7294),o=t(6010),i=t(2466),p=t(6775),l=t(1980),s=t(7392),u=t(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,p.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,p]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,s]=g({queryString:t,groupId:r}),[m,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),v=(()=>{const e=l??m;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&p(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),k(e)}),[s,k,o]),tabValues:o}}var v=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:p,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),r=s[t].value;r!==p&&(m(n),l(r))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:p===n?0:-1,"aria-selected":p===n,key:n,ref:e=>u.push(e),onKeyDown:c,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":p===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function b(e){const n=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function N(e){const n=(0,v.Z)();return a.createElement(b,(0,r.Z)({key:String(n)},e))}},5974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),i=t(5162);const p={sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},l=void 0,s={unversionedId:"miniprogram/integration/wechat",id:"miniprogram/integration/wechat",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",description:"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/integration/wechat.md",sourceDirName:"miniprogram/integration",slug:"/miniprogram/integration/wechat",permalink:"/growingio-sdk-docs/docs/miniprogram/integration/wechat",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/integration/wechat.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},sidebar:"docSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/miniprogram/version"},next:{title:"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/integration/alipay"}},u={},m=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u96c6\u6210SDK",id:"\u96c6\u6210sdk",level:2},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk-1",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk-2",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210-1",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:4},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk-3",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-3",level:4},{value:"3\u3001\u5168\u5c40\u66ff\u6362\u65b9\u6cd5",id:"3\u5168\u5c40\u66ff\u6362\u65b9\u6cd5",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-3",level:4},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk-4",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-4",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-4",level:4},{value:"\u5165\u53e3\u6587\u4ef6",id:"\u5165\u53e3\u6587\u4ef6",level:5},{value:"\u9875\u9762\u6587\u4ef6",id:"\u9875\u9762\u6587\u4ef6",level:5},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-5",level:4},{value:"SDK\u529f\u80fd\u63d2\u4ef6\u6269\u5c55",id:"sdk\u529f\u80fd\u63d2\u4ef6\u6269\u5c55",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2}],d=(c="ImageLoader",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const g={toc:m},k="wrapper";function v(e){let{components:n,...t}=e;return(0,a.kt)(k,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u8de8\u5e73\u53f0\u6846\u67b6\u5f00\u53d1\u4e14\u6709\u591a\u7aef\uff08\u7279\u6307\u5c0f\u7a0b\u5e8f\uff0c\u5feb\u5e94\u7528\u3001App \u548c Web \u9664\u5916\uff09\u540c\u65f6\u9700\u8981\u96c6\u6210 SDK \u7684\u9700\u6c42\u65f6\uff0c\u53ea\u9700\u5728\u6846\u67b6\u4ee3\u7801\u4e2d\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002\u4f8b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 uni-app \u540c\u65f6\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\uff0c\u53ea\u9700\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002")),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,a.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,a.kt)("p",null,"3\u3001\u5728\u4e0b\u5217\u9009\u9879\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u7684 SDK \u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\u6216\u4f7f\u7528 npm \u7684\u65b9\u5f0f\u96c6\u6210\u3002"),(0,a.kt)("h2",{id:"\u96c6\u6210sdk"},"\u96c6\u6210SDK"),(0,a.kt)(o.Z,{groupId:"1",defaultValue:"\u539f\u751f",values:[{label:"\u539f\u751f",value:"\u539f\u751f"},{label:"uni-app",value:"uni-app"},{label:"Taro",value:"Taro"},{label:"MPX",value:"MPX"},{label:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",value:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"\u539f\u751f",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7d-sdk"},"1\u3001\u52a0\u8f7d SDK"),(0,a.kt)("p",null,"\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("p",null,"\u5fae\u4fe1\u539f\u751f SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/4.0.1/gio-wechat.js"},"https://assets.giocdn.com/sdk/minip/4.0.1/gio-wechat.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u5728 App \u5b9e\u4f8b\u4e4b\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport gdp from './utils/gio/gio-wechat.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url',\n    ...other settings\n});\n\nApp({ ... });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-wechat.js').default;\n"))),(0,a.kt)(i.Z,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7d-sdk-1"},"1\u3001\u52a0\u8f7d SDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("p",null,"uniapp \u6846\u67b6 SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/4.0.1/gio-uniapp.js"},"https://assets.giocdn.com/sdk/minip/4.0.1/gio-uniapp.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210"},"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 main.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"strong"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2 \u548c vue3 \u4e2d\u5206\u522b\u4e0e app \u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{groupId:"2",defaultValue:"uni-app(vue2)",values:[{label:"uni-app(vue2)",value:"uni-app(vue2)"},{label:"uni-app(vue3)",value:"uni-app(vue3)"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"uni-app(vue2)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/gio-uniapp';\n\nApp.mpType = 'app';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    uniVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst app = new Vue(App);\napp.$mount();\n\n"))),(0,a.kt)(i.Z,{value:"uni-app(vue3)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport App from './App.vue';\nimport { createApp } from 'vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/gio-uniapp';\n\nexport function createApp() {\n  // \u6ce8\u610fvue3\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\n  const app = createApp(App);\n\n  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n      version: 'your miniProgram version',\n      // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n      serverUrl: 'your server url'\n      uniVue: app,\n      ...other settings\n  });\n\n  return { app };\n}\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-uniapp.js').default;\n"))),(0,a.kt)(i.Z,{value:"Taro",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7d-sdk-2"},"1\u3001\u52a0\u8f7d SDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("p",null,"Taro \u6846\u67b6 SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/4.0.1/gio-taro.js"},"https://assets.giocdn.com/sdk/minip/4.0.1/gio-taro.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210-1"},"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"strong"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2 \u548c vue3 \u4e2d\u5206\u522b\u4e0e app \u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09\u3002\u4f7f\u7528 vue \u5f00\u53d1\u65f6",(0,a.kt)("inlineCode",{parentName:"strong"},"taro"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"taroVue"),"\u90fd\u8981\u4f20\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{groupId:"3",defaultValue:"Taro2",values:[{label:"Taro2(React)",value:"Taro2"},{label:"Taro3(React)",value:"Taro3(react)"},{label:"Taro3(vue2)",value:"Taro3(vue2)"},{label:"Taro3(vue3)",value:"Taro3(vue3)"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Taro2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"))),(0,a.kt)(i.Z,{value:"Taro3(react)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport React, { Component } from 'react';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/gio-taro';\n\nconst taroRuntime = require('@tarojs/runtime');\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    taro: taroRuntime,\n    ...other settings\n});\n\nclass App extends Component { ... }\nexport default App;\n"))),(0,a.kt)(i.Z,{value:"Taro3(vue2)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taro: Taro,\n    taroVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n"))),(0,a.kt)(i.Z,{value:"Taro3(vue3)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport { createApp } from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/gio-taro';\n\nconst taroRuntime = require('@tarojs/runtime');\n\n// \u6ce8\u610fvue3\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\nconst App = createApp({ ... });\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taro: taroRuntime,\n    taroVue: App,\n    ...other settings\n});\n\nexport default App;\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-taro.js').default;\n"))),(0,a.kt)(i.Z,{value:"MPX",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7d-sdk-3"},"1\u3001\u52a0\u8f7d SDK"),(0,a.kt)("p",null,"\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("p",null,"\u5fae\u4fe1\u539f\u751f SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/4.0.1/gio-wechat.js"},"https://assets.giocdn.com/sdk/minip/4.0.1/gio-wechat.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-3"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u5728 App \u5b9e\u4f8b\u4e4b\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("h4",{id:"3\u5168\u5c40\u66ff\u6362\u65b9\u6cd5"},"3\u3001\u5168\u5c40\u66ff\u6362\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5168\u5c40\u66ff\u6362 MPX\u7684",(0,a.kt)("inlineCode",{parentName:"strong"},"createApp"),"\u65b9\u6cd5\u4e3a",(0,a.kt)("inlineCode",{parentName:"strong"},"GioApp"),"\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"createPage"),"\u65b9\u6cd5\u4e3a",(0,a.kt)("inlineCode",{parentName:"strong"},"GioPage"),"\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"createComponent"),"\u65b9\u6cd5\u4e3a",(0,a.kt)("inlineCode",{parentName:"strong"},"GioComponent"),"\u3002")),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-3"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport gdp, { GioApp } from './utils/gio/gio-wechat.js';\nimport mpx from '@mpxjs/core';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url',\n    ...other settings\n});\n\n// \u4fee\u6539mpx\u7684 createApp \u65b9\u6cd5\u4e3a GioApp \u2193\u2193\u2193\nGioApp({ ... });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// page.js\nimport gdp, { GioPage } from '../utils/wechat';\n\n// \u4fee\u6539mpx\u7684 createPage \u65b9\u6cd5\u4e3a GioPage \u2193\u2193\u2193\nGioPage({\n  data: {...},\n  onShow() {\n    gdp('xxx', xxx);\n    ...\n  },\n  ...\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// component.js\nimport gdp, { GioComponent } from '../utils/wechat';\n\n// \u4fee\u6539mpx\u7684 createComponent \u65b9\u6cd5\u4e3a GioComponent \u2193\u2193\u2193\nGioComponent({\n  data: {...},\n  onShow() {\n    gdp('xxx', xxx);\n    ...\n  },\n  ...\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-wechat.js').default;\n"))),(0,a.kt)(i.Z,{value:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7d-sdk-4"},"1\u3001\u52a0\u8f7d SDK"),(0,a.kt)("p",null,"\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("p",null,"\u5fae\u4fe1\u539f\u751f SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/4.0.1/gio-wechat.js"},"https://assets.giocdn.com/sdk/minip/4.0.1/gio-wechat.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-4"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u5728 App \u5b9e\u4f8b\u4e4b\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"4",color:"#FC5F3A"},"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-4"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{groupId:"4",defaultValue:"\u9875\u9762\u5e94\u7528\u578b\u63d2\u4ef6",values:[{label:"\u9875\u9762\u5e94\u7528\u578b\u63d2\u4ef6",value:"\u9875\u9762\u5e94\u7528\u578b\u63d2\u4ef6"},{label:"\u7ec4\u4ef6\u578b\u63d2\u4ef6",value:"\u7ec4\u4ef6\u578b\u63d2\u4ef6"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"\u9875\u9762\u5e94\u7528\u578b\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("p",null,"\u9875\u9762\u5e94\u7528\u578b\u63d2\u4ef6\u53ef\u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u96c6\u6210\uff0c\u4f46\u7531\u4e8e\u5176\u8fd0\u884c\u9650\u5236\u7684\u7279\u6b8a\u6027\uff0c\u9700\u8981\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GioPage"),"\u6765\u8fd0\u884c\u9875\u9762\u3002"),(0,a.kt)("h5",{id:"\u5165\u53e3\u6587\u4ef6"},"\u5165\u53e3\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport gdp from './utils/gio/gio-wechat.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram plugin version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    ...other settings\n});\n\nmodule.exports = { ... };\n")),(0,a.kt)("h5",{id:"\u9875\u9762\u6587\u4ef6"},"\u9875\u9762\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// page/xxx.js\nimport gdp, { GioPage } from '../../utils/gio/gio-wechat.js';\n\nGioPage({\n  data: {},\n  onShow() {\n    gdp('xxx', xxx);\n  }\n});\n"))),(0,a.kt)(i.Z,{value:"\u7ec4\u4ef6\u578b\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("p",null,"  \u7ec4\u4ef6\u578b\u63d2\u4ef6\u56e0\u5176\u53ea\u6709\u4e00\u4e2aComponent\u7ec4\u4ef6\uff0c\u76f4\u63a5\u96c6\u6210\u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-5"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// myComponent.js\nimport gdp from './utils/gio/gio-wechat.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram plugin version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    ...other settings\n});\n\nComponent({ ... });\n")))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u66f4\u591a\u521d\u59cb\u5316\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"strong",href:"/docs/miniprogram/initSettings"},"\u521d\u59cb\u5316\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b")),(0,a.kt)("h2",{id:"sdk\u529f\u80fd\u63d2\u4ef6\u6269\u5c55"},"SDK\u529f\u80fd\u63d2\u4ef6\u6269\u5c55"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u96c6\u6210 SDK \u65f6\uff0cSDK \u4ec5\u5185\u7f6e\u57cb\u70b9\u529f\u80fd\uff0c\u5982\u60a8\u9700\u8981\u6269\u5c55\u5176\u4ed6\u529f\u80fd\u65f6\uff0c\u9700\u8981\u96c6\u6210\u5e76\u6ce8\u518c\u5bf9\u5e94\u63d2\u4ef6\u65b9\u53ef\u6fc0\u6d3b\u5bf9\u5e94\u529f\u80fd\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u5404\u4e2a\u63d2\u4ef6\u7684\u4ecb\u7ecd\u548c\u96c6\u6210\u65b9\u5f0f\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,a.kt)(d,{path:"img/miniprogram/plugin_debug",mdxType:"ImageLoader"}),(0,a.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d Console \u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770b SDK \u4e0a\u62a5\u7684 log \u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)(d,{path:"img/miniprogram/wx_debug",mdxType:"ImageLoader"}),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("p",null,"\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost")," \u5728\u300c\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u5f00\u53d1-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0\u4e3a request \u5408\u6cd5\u57df\u540d\u3002",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u540e\u53f0")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5c0f\u7a0b\u5e8f\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u53d1\u5e03\u4ee3\u7801\uff0c\u5728\u53d1\u5e03\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u8c03\u7528\u63a5\u53e3\u5728 requestdomain \u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost"),"\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Mini_Program_Basic_Info/Server_Address_Configuration.html"},"\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u7b2c\u4e09\u65b9\u8bf4\u660e"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"),"\u8bf7\u5728\u6b63\u5f0f\u751f\u4ea7\u73af\u5883\u53d1\u5e03\u524d\u5b8c\u6210\u767d\u540d\u5355\u7684\u6dfb\u52a0\uff0c\u672a\u6dfb\u52a0\u767d\u540d\u5355\u53ef\u80fd\u4f1a\u51fa\u73b0 SDK \u65e0\u6cd5\u4e0a\u62a5\u6570\u636e\u7684\u60c5\u51b5\u3002")))}v.isMDXComponent=!0}}]);