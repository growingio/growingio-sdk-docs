"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6775),p=n(1980),s=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,s]=d({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),N=(()=>{const e=p??m;return k({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{N&&l(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var N=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(m(t),p(a))},k=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:c},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function E(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(E,(0,a.Z)({},e,t)))}function h(e){const t=(0,N.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:1,title:"Saas\u5347\u7ea7\u6307\u5357"},p=void 0,s={unversionedId:"miniprogram/upgrade/saas",id:"miniprogram/upgrade/saas",title:"Saas\u5347\u7ea7\u6307\u5357",description:"\u5e73\u53f0\u7248\u672c\u786e\u8ba4",source:"@site/docs/miniprogram/upgrade/saas.md",sourceDirName:"miniprogram/upgrade",slug:"/miniprogram/upgrade/saas",permalink:"/growingio-sdk-docs/docs/miniprogram/upgrade/saas",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/upgrade/saas.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Saas\u5347\u7ea7\u6307\u5357"},sidebar:"docSidebar",previous:{title:"SDK\u5347\u7ea7\u6307\u5357",permalink:"/growingio-sdk-docs/docs/miniprogram/upgrade"},next:{title:"CDP\u5347\u7ea7\u6307\u5357",permalink:"/growingio-sdk-docs/docs/miniprogram/upgrade/cdp"}},u={},m=[{value:"\u5e73\u53f0\u7248\u672c\u786e\u8ba4",id:"\u5e73\u53f0\u7248\u672c\u786e\u8ba4",level:2},{value:"SDK\u7248\u672c\u786e\u8ba4",id:"sdk\u7248\u672c\u786e\u8ba4",level:2},{value:"SDK\u5347\u7ea7",id:"sdk\u5347\u7ea7",level:2},{value:"1\u3001\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f",id:"1\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f",level:3},{value:"2\u3001\u4fee\u6539\u96c6\u6210\u4ee3\u7801",id:"2\u4fee\u6539\u96c6\u6210\u4ee3\u7801",level:3},{value:"3\u3001\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879",id:"3\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879",level:3},{value:"4\u3001\u68c0\u67e5api\u8c03\u7528",id:"4\u68c0\u67e5api\u8c03\u7528",level:3},{value:"5\u3001\u68c0\u67e5\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\uff08\u66dd\u5149\u4e8b\u4ef6\uff09",id:"5\u68c0\u67e5\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\u66dd\u5149\u4e8b\u4ef6",level:3},{value:"6\u3001\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",id:"6\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",level:3},{value:"7\u3001\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0",id:"7\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0",level:3},{value:"1\u3001\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f",id:"1\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f-1",level:3},{value:"2\u3001\u4fee\u6539\u96c6\u6210\u4ee3\u7801",id:"2\u4fee\u6539\u96c6\u6210\u4ee3\u7801-1",level:3},{value:"3\u3001\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879",id:"3\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879-1",level:3},{value:"4\u3001\u68c0\u67e5api\u8c03\u7528",id:"4\u68c0\u67e5api\u8c03\u7528-1",level:3},{value:"5\u3001\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",id:"5\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",level:3},{value:"6\u3001\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0",id:"6\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0",level:3}],c={toc:m},k="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5e73\u53f0\u7248\u672c\u786e\u8ba4"},"\u5e73\u53f0\u7248\u672c\u786e\u8ba4"),(0,r.kt)("p",null,"\u9996\u5148\u8bf7\u5148\u786e\u8ba4\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\uff0c\u5c0f\u7a0b\u5e8fSDK 4.0 ",(0,r.kt)("font",{size:"4",color:"#FC5F3A"},(0,r.kt)("b",null,"\u4ec5\u652f\u6301 4.2.0 \u53ca\u4ee5\u4e0a")),"\u7248\u672c\u7684\u5206\u6790\u4e91\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,r.kt)("strong",{parentName:"p"},"GrowingIO\u5b98\u7f51")," \uff0c\u5373\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"3.0-3.7.x \u7248\u672cSDK"),"\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,r.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4f46\u7248\u672c\u53f7\u4f4e\u4e8e4.2.0")," \uff0c\u5373\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"3.8 \u7248\u672cSDK"),"\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u8d2d\u4e70\u5347\u7ea7\u65b0\u4ea7\u54c1\u540e\u518d\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u662f ",(0,r.kt)("strong",{parentName:"p"},"4.0\u5e73\u53f0\uff0c\u4e14\u7248\u672c\u53f7\u5927\u4e8e\u7b49\u4e8e4.2.0")," \uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u53c2\u8003\u4e0b\u6587\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u4e0d\u5728\u4e0a\u8ff0\u8303\u56f4\u5185\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"sdk\u7248\u672c\u786e\u8ba4"},"SDK\u7248\u672c\u786e\u8ba4"),(0,r.kt)("p",null,"\u5982\u4f55\u786e\u8ba4\u60a8\u4f7f\u7528\u7684SDK\u7248\u672c\uff1f"),(0,r.kt)("p",null,"\u5728SDK\u6587\u4ef6\u4e2d\u5168\u5c40\u641c\u7d22",(0,r.kt)("inlineCode",{parentName:"p"},'sdkVer="'),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},'sdkVersion="'),"\uff0c\u67e5\u770b\u53cc\u5f15\u53f7\u540e\u9762\u7684\u7248\u672c\u53f7\u3002"),(0,r.kt)("h2",{id:"sdk\u5347\u7ea7"},"SDK\u5347\u7ea7"),(0,r.kt)("p",null,"\u8bf7\u9009\u62e9\u60a8\u5f53\u524d\u4f7f\u7528\u7684SDK\u7248\u672c\u67e5\u770b\u5347\u7ea7\u6b65\u9aa4\u3002"),(0,r.kt)(o.Z,{groupId:"1",defaultValue:"3.0-3.7.x\u7248\u672c",values:[{label:"3.0-3.7.x\u7248\u672c",value:"3.0-3.7.x\u7248\u672c"},{label:"3.8.x\u7248\u672c",value:"3.8.x\u7248\u672c"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"3.0-3.7.x\u7248\u672c",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4e0b\u9762\u5c06\u6b63\u5f0f\u4ecb\u7ecdSDK\u4ece3.0-3.7.x\u7248\u672c\u5347\u7ea7\u52304.0\u7248\u672c\u7684\u6b65\u9aa4\u3002"),(0,r.kt)("h3",{id:"1\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f"},"1\u3001\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f"),(0,r.kt)("p",null,"\u57284.0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u653e\u5f03\u4e86\u5bf9",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Wepy"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"mpvue"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"Chameleon")),"\u6846\u67b6\u7684\u652f\u6301\uff0c\u56e0\u4e3a\u4ed6\u4eec\u5df2\u7ecf\u8fc7\u65f6\u6216\u88ab\u5f00\u53d1\u8005\u653e\u5f03\u3002\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u4ee5\u4e0a\u6846\u67b6\uff0c\u8bf7\u5c1d\u8bd5\u8fc1\u79fb\u5c0f\u7a0b\u5e8f\u7684\u6846\u67b6\u3002"),(0,r.kt)("h3",{id:"2\u4fee\u6539\u96c6\u6210\u4ee3\u7801"},"2\u3001\u4fee\u6539\u96c6\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u4e0b\u8f7dSDK\u81f3\u672c\u5730\u9879\u76ee\u96c6\u6210\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases"},"\u524d\u5f80\u4e0b\u8f7d\u5730\u5740"),"\u4e0b\u8f7d4.0\u7248\u672cSDK\u5e76\u52a0\u8f7d\u81f3\u9879\u76ee\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u6846\u67b6\uff08uniapp\u3001taro\uff09\u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff0c\u53ef\u53c2\u8003\u4f7f\u7528\u4e0b\u8f7dSDK\u81f3\u672c\u5730\u9879\u76ee\u96c6\u6210\u6216\u4f7f\u7528\u6700\u65b0\u652f\u6301\u7684npm\u96c6\u6210\u65b9\u5f0f\u3002",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/integration/wechat"},"\u53c2\u8003\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"))),(0,r.kt)("p",null,"\xa0","\xa0","1\uff09\u5982\u679c\u60a8\u662f",(0,r.kt)("strong",{parentName:"p"},"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f"),"\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/integration/alipay"},"\u53c2\u8003\u6587\u6863"),"\u8fdb\u884c\u91cd\u65b0\u96c6\u6210\u3002\u6062\u590d\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"App({})"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Page({})"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Component({})"),"\u7684\u539f\u751f\u5199\u6cd5\u3002\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"App($global.trackApp({ ... }))\n// \u4fee\u6539\u56de\u539f\u59cb\u5199\u6cd5 \u2193\u2193\u2193\nApp({ ... });\n\u200b\n$global.GioPage({ ... });\n// \u4fee\u6539\u56de\u539f\u59cb\u5199\u6cd5 \u2193\u2193\u2193\nPage({ ... });\n\u200b\n$global.GioComponent({ ... });\n// \u4fee\u6539\u56de\u539f\u59cb\u5199\u6cd5 \u2193\u2193\u2193\nComponent({ ... });\n")),(0,r.kt)("p",null,"\xa0","\xa0","2\uff09\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"gioConfig"),"\u6587\u4ef6\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setConfig"),"\u521d\u59cb\u5316\u7684\u65b9\u5f0f\u4e0d\u518d\u88ab\u652f\u6301\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/integration/wechat"},"\u53c2\u8003\u6587\u6863"),"\u91cd\u65b0\u96c6\u6210\u3002"),(0,r.kt)("h3",{id:"3\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879"},"3\u3001\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u4ec5\u5217\u51fa\u9700\u8981\u6539\u52a8\u7684\u70b9\uff0c\u6ca1\u6709\u5217\u51fa\u7684\u521d\u59cb\u5316\u914d\u7f6e\u9879\u5373\u4e3a\u81ea\u52a8\u517c\u5bb9\u65e0\u9700\u66f4\u6539\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664\u914d\u7f6e\u9879",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"getLocation")),"\u3002\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u8c03\u6574\u83b7\u53d6\u4f4d\u7f6e\u4fe1\u606f\u7684\u6743\u9650\uff0c\u56e0\u6b64\u88ab\u5e9f\u5f03\u3002\u5982\u9700\u4e0a\u62a5\u4f4d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("inlineCode",{parentName:"li"},"setLocation"),"\u65b9\u6cd5\u3002",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/commonlyApi#8%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AEsetlocation"},"\u53c2\u8003\u6587\u6863")),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664\u914d\u7f6e\u9879",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"usePlugin")),"\u3002SDK\u4f1a\u81ea\u52a8\u8bc6\u522b\u63d2\u4ef6\u5185\u5bb9\uff0c\u56e0\u6b64\u88ab\u5e9f\u5f03\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664\u914d\u7f6e\u9879",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"comAsPage")),"\u3002SDK\u4f1a\u81ea\u52a8\u8bc6\u522bComponent\u5199\u7684\u9875\u9762\uff0c\u56e0\u6b64\u88ab\u5e9f\u5f03\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664\u914d\u7f6e\u9879",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"autotrack")),"\u3002\u65e0\u57cb\u70b9\u76f8\u5173\u903b\u8f91\u5df2\u6539\u9020\u62c6\u5206\u4e3a\u63d2\u4ef6\uff0c\u4e0d\u96c6\u6210\u63d2\u4ef6\u5373\u5173\u95ed\u65e0\u57cb\u70b9\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664\u914d\u7f6e\u9879",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"enableEventStore")),"\u3002\u4e3a\u4e86\u8001\u7248\u672cSDK\u9002\u914d\u5f39\u7a97\u903b\u8f91\u52a0\u7684\u914d\u7f6e\uff0c\u65b0\u7248\u5df2\u6539\u9020\u8be5\u6a21\u5757\uff0c\u56e0\u6b64\u88ab\u5e9f\u5f03\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"uniapp")),"\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\uff0c\u521d\u59cb\u5316\u914d\u7f6e\u9879\u5bf9\u5e94\u7684\u4f20\u53c2\u6709\u53d8\u5316\uff0c\u8bf7\u53c2\u8003\u96c6\u6210\u6587\u6863\u521d\u59cb\u5316\u90e8\u5206\u4fee\u6539\u5b9e\u4f8b\u4f20\u53c2\u3002(\u79fb\u9664\u914d\u7f6e\u9879",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"vue")),"\uff0c\u6539\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"uniVue"),")"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"taro")),"\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\uff0c\u521d\u59cb\u5316\u914d\u7f6e\u9879\u5bf9\u5e94\u7684\u4f20\u53c2\u6709\u53d8\u5316\uff0c\u8bf7\u53c2\u8003\u96c6\u6210\u6587\u6863\u521d\u59cb\u5316\u90e8\u5206\u4fee\u6539\u5b9e\u4f8b\u4f20\u53c2\u3002(\u4f8b\u5982taro3vue\u5f00\u53d1\u65f6\u9700\u540c\u65f6\u4f20\u53c2\u4e24\u4e2a\u5b9e\u4f8b)")),(0,r.kt)("p",null,"\u5176\u4ed6\u914d\u7f6e\u9879\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/initSettings"},"\u53c2\u8003\u6587\u6863"),"\u6309\u9700\u914d\u7f6e\u529f\u80fd\uff0c\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u662f\u5426\u9700\u8981\u5bf9\u5e94\u914d\u7f6e\u9879\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,r.kt)("h3",{id:"4\u68c0\u67e5api\u8c03\u7528"},"4\u3001\u68c0\u67e5api\u8c03\u7528"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u4ec5\u5217\u51fa\u9700\u8981\u6539\u52a8\u7684\u70b9\uff0c\u6ca1\u6709\u5217\u51fa\u7684api\u6216\u5185\u5bb9\u5373\u4e3a\u81ea\u52a8\u517c\u5bb9\u65e0\u9700\u66f4\u6539\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setConfig"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"config")),"\u65b9\u6cd5\u8c03\u7528\u3002SDK\u4ec5\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u548c\u521d\u59cb\u5316\u914d\u7f6e\u3002\u5982\u9700\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u52a8\u6001\u4fee\u6539\u914d\u7f6e\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"setOption")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/commonlyApi#%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE%E6%8E%A5%E5%8F%A3setoption"},"\u53c2\u8003\u6587\u6863"),"\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"getLocation")),"\u65b9\u6cd5\u8c03\u7528\u3002\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"setLocation"),"\u65b9\u6cd5",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/commonlyApi#8%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AEsetlocation"},"\u53c2\u8003\u6587\u6863"),"\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"collectImp")),"\u65b9\u6cd5\u8c03\u7528\u3002\u52a0\u8f7d\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6\u540e\uff0cSDK\u4f1a\u5728\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u65f6\u81ea\u52a8\u5b8c\u6210\u76d1\u542c\u6ce8\u518c\u7684\u64cd\u4f5c\uff0c\u65e0\u9700\u518d\u624b\u52a8\u6ce8\u518c\u3002\u5982\u9700\u4e3a\u52a8\u6001\u8282\u70b9\u6dfb\u52a0\uff0c\u8bf7",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/plugins/impressionTracking#%E6%89%8B%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%8D%8A%E8%87%AA%E5%8A%A8%E5%9F%8B%E7%82%B9%E7%9B%91%E5%90%AC"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setEvar")),"\u65b9\u6cd5\u8c03\u7528\u3002\u5982\u9700\u4f7f\u7528\u8f6c\u5316\u53d8\u91cf\uff0c\u8bf7\u5c06\u8f6c\u5316\u53d8\u91cf\u653e\u5728\u57cb\u70b9\u4e8b\u4ef6\u5c5e\u6027\uff08track\uff09\u4e2d\u8fdb\u884c\u4e0a\u62a5\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setPage")),"\u65b9\u6cd5\u8c03\u7528\u3002\u5982\u9700\u4f7f\u7528\u9875\u9762\u7ea7\u53d8\u91cf\uff0c\u8bf7\u5c06\u53d8\u91cf\u52a0\u5165\u9875\u9762\u53c2\u6570query\u4e2d\uff0c\u4f5c\u4e3a\u9875\u9762\u53c2\u6570\u7684\u4e00\u90e8\u5206\u4e0a\u62a5\uff0c\u5e73\u53f0\u4f1a\u81ea\u52a8\u89e3\u6790\u5904\u7406\u3002\u5982\u9700\u4f7f\u7528\u9875\u9762\u8bbf\u95ee\u53d8\u91cf\uff0c\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"setPageAttributes"),(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/commonlyApi#12%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%B1%9E%E6%80%A7setpageattributes"},"\u53c2\u8003\u6587\u6863"),"\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\u4e24\u8005\u7684\u533a\u522b:",(0,r.kt)("br",null),"\n","*"," \u4ee5\u5f80\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"setPage"),"\u5bf9\u5e94\u7684\u662f\u5f53\u524d\u9875\u9762\u6240\u6709\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u5c5e\u6027\uff1b\u5bf9\u5e94\u73b0\u5728\u7684\u6539\u52a8\u5219\u662f\u5c06\u53d8\u91cf\u653e\u5165\u9875\u9762\u53c2\u6570query\u4e2d\u7684\u65b9\u5f0f\uff0c\u6548\u679c\u4e00\u81f4\u3002",(0,r.kt)("br",null),"\n","*"," ",(0,r.kt)("inlineCode",{parentName:"p"},"setPageAttributes"),"\u5bf9\u5e94\u7684\u53ea\u6709\u9875\u9762\u8bbf\u95ee\u4e8b\u4ef6\u7684\u5c5e\u6027\uff0c\u5e76\u4e0d\u4f1a\u5bf9\u9875\u9762\u4e2d\u5176\u4ed6\u4e8b\u4ef6\u751f\u6548\u3002",(0,r.kt)("br",null),"\n","*"," \u5982\u679c\u60a8\u9700\u8981\u5bf9\u9875\u9762\u4e2d\u7684\u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u6dfb\u52a0\u5c5e\u6027\uff0c\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setGeneralProps"),(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/commonlyApi#10%E8%AE%BE%E7%BD%AE%E5%9F%8B%E7%82%B9%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7setgeneralprops"},"\u53c2\u8003\u6587\u6863"),"\u3002")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setVisitor")),"\u65b9\u6cd5\u8c03\u7528\u3002\u5982\u9700\u4f7f\u7528\u8bbf\u95ee\u7528\u6237\u53d8\u91cf\uff0c\u8bf7\u5c06\u8bbf\u95ee\u7528\u6237\u53d8\u91cf\u653e\u5728\u7528\u6237\u5c5e\u6027\uff08setUserAttributes\uff09\u4e2d\u8fdb\u884c\u4e0a\u62a5\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u66ff\u6362",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setUser")),"\u4e3a",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setUserAttributes")),"\uff0c\u8c03\u7528\u65b9\u5f0f\u4e0d\u53d8\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002")),(0,r.kt)("p",null,"\u5176\u4ed6api\u8c03\u7528\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/commonlyApi"},"\u53c2\u8003\u6587\u6863"),"\u4f7f\u7528\uff0c\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u662f\u5426\u9700\u8981\u8c03\u7528api\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,r.kt)("h3",{id:"5\u68c0\u67e5\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\u66dd\u5149\u4e8b\u4ef6"},"5\u3001\u68c0\u67e5\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\uff08\u66dd\u5149\u4e8b\u4ef6\uff09"),(0,r.kt)("p",null,"\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/plugins/impressionTracking"},"\u53c2\u8003\u6587\u6863"),"\u68c0\u67e5\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\u7684\u5b9a\u4e49\u65b9\u5f0f\u662f\u5426\u7b26\u5408\u65b0\u7248\u672c\u8981\u6c42\u3002",(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301JSON\u683c\u5f0f\u6570\u636e\u6216\u5355\u5b57\u6bb5\u5b9a\u4e49\u7684\u65b9\u5f0f"),"\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("h3",{id:"6\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"},"6\u3001\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\uff08track\uff09\u3001\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\uff08setUserAttributes\uff09\u3001\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\uff08\u66dd\u5149\u4e8b\u4ef6\uff09\u7684\u5c5e\u6027\u952e\u503c\u5bf9\uff0ckey\u548cvalue\u662f\u5426\u7b26\u5408\u9650\u5236\u6761\u4ef6",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/commonlyApi#object%E5%8F%82%E6%95%B0%E9%99%90%E5%88%B6"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u5982\u6709\u8d85\u51fa\u9650\u5236\u6216\u8d85\u51fa\u9650\u5236\u7684\u53ef\u80fd\uff0c\u8bf7\u8c03\u6574\u4e1a\u52a1\u903b\u8f91\u3002"),(0,r.kt)("h3",{id:"7\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0"},"7\u3001\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0"),(0,r.kt)("p",null,"\u4ece4.0\u7248\u672c\u5f00\u59cb\uff0c\u6240\u6709\u4e8b\u4ef6\u4e2d\u7684index\u5b57\u6bb5\u53d6\u503c\u5c06\u4ece ",(0,r.kt)("strong",{parentName:"p"},"1")," \u5f00\u59cb\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u5728\u5c0f\u7a0b\u5e8f\u5e94\u7528\u4e2d\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"data-index"),"\uff0c\u8bf7\u6ce8\u610f\u6392\u67e5\u4fee\u6539\u3002")),(0,r.kt)(i.Z,{value:"3.8.x\u7248\u672c",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4e0b\u9762\u5c06\u6b63\u5f0f\u4ecb\u7ecdSDK\u4ece3.8\u7248\u672c\u5347\u7ea7\u52304.0\u7248\u672c\u7684\u6b65\u9aa4\u3002"),(0,r.kt)("h3",{id:"1\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f-1"},"1\u3001\u786e\u8ba4\u5f00\u53d1\u65b9\u5f0f"),(0,r.kt)("p",null,"\u57284.0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u653e\u5f03\u4e86\u5bf9",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Wepy"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"mpvue"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"Chameleon"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"Remax")),"\u6846\u67b6\u7684\u652f\u6301\uff0c\u56e0\u4e3a\u4ed6\u4eec\u5df2\u7ecf\u8fc7\u65f6\u6216\u88ab\u5f00\u53d1\u8005\u653e\u5f03\u3002\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u4ee5\u4e0a\u6846\u67b6\uff0c\u8bf7\u5c1d\u8bd5\u8fc1\u79fb\u5c0f\u7a0b\u5e8f\u7684\u6846\u67b6\u3002"),(0,r.kt)("h3",{id:"2\u4fee\u6539\u96c6\u6210\u4ee3\u7801-1"},"2\u3001\u4fee\u6539\u96c6\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u6807\u51c6CDN\u96c6\u6210\u6216NPM\u96c6\u6210\u65b9\u5f0f\u8fdb\u884c\u96c6\u6210\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/integrate"},"\u96c6\u6210\u6587\u6863"),"\u91cd\u65b0\u96c6\u6210SDK\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u4e0b\u8f7dSDK\u81f3\u672c\u5730\u9879\u76ee\u96c6\u6210\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases"},"\u524d\u5f80\u4e0b\u8f7d\u5730\u5740"),"\u4e0b\u8f7d4.0\u7248\u672cSDK\u5e76\u52a0\u8f7d\u81f3\u9879\u76ee\u4e2d\u3002"),(0,r.kt)("h3",{id:"3\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879-1"},"3\u3001\u68c0\u67e5\u521d\u59cb\u5316\u914d\u7f6e\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5df2\u5e9f\u5f03\u7684\u914d\u7f6e\u9879\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"autotrack"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"compress"),"\u3002\u5982\u679c\u60a8\u60f3\u7981\u7528\u65e0\u57cb\u70b9\u4e8b\u4ef6\u548c\u6570\u636e\u52a0\u5bc6\uff0c\u8bf7",(0,r.kt)("strong",{parentName:"li"},"\u6309\u9700\u96c6\u6210SDK"),"\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u6ce8\u518c"),"\u5bf9\u5e94\u63d2\u4ef6\u5373\u53ef\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002")),(0,r.kt)("p",null,"\u5176\u4ed6\u914d\u7f6e\u9879\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/initSettings"},"\u53c2\u8003\u6587\u6863"),"\u6309\u9700\u914d\u7f6e\u529f\u80fd\uff0c\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u662f\u5426\u9700\u8981\u5bf9\u5e94\u914d\u7f6e\u9879\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,r.kt)("h3",{id:"4\u68c0\u67e5api\u8c03\u7528-1"},"4\u3001\u68c0\u67e5api\u8c03\u7528"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u4ec5\u5217\u51fa\u9700\u8981\u6539\u52a8\u7684\u70b9\uff0c\u6ca1\u6709\u5217\u51fa\u7684api\u6216\u5185\u5bb9\u5373\u4e3a\u81ea\u52a8\u517c\u5bb9\u65e0\u9700\u66f4\u6539\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setEvar")),"\u65b9\u6cd5\u8c03\u7528\u3002\u5982\u9700\u4f7f\u7528\u8f6c\u5316\u53d8\u91cf\uff0c\u8bf7\u5c06\u8f6c\u5316\u53d8\u91cf\u653e\u5728\u57cb\u70b9\u4e8b\u4ef6\u5c5e\u6027\uff08track\uff09\u4e2d\u8fdb\u884c\u4e0a\u62a5\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setPage")),"\u65b9\u6cd5\u8c03\u7528\u3002\u5982\u9700\u4f7f\u7528\u9875\u9762\u7ea7\u53d8\u91cf\uff0c\u8bf7\u5c06\u53d8\u91cf\u52a0\u5165\u9875\u9762\u53c2\u6570query\u4e2d\uff0c\u4f5c\u4e3a\u9875\u9762\u53c2\u6570\u7684\u4e00\u90e8\u5206\u4e0a\u62a5\uff0c\u5e73\u53f0\u4f1a\u81ea\u52a8\u89e3\u6790\u5904\u7406\u3002\u5982\u9700\u4f7f\u7528\u9875\u9762\u8bbf\u95ee\u53d8\u91cf\uff0c\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"setPageAttributes"),(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/commonlyApi#12%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%B1%9E%E6%80%A7setpageattributes"},"\u53c2\u8003\u6587\u6863"),"\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\u4e24\u8005\u7684\u533a\u522b:",(0,r.kt)("br",null),"\n","*"," \u4ee5\u5f80\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"setPage"),"\u5bf9\u5e94\u7684\u662f\u5f53\u524d\u9875\u9762\u6240\u6709\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u5c5e\u6027\uff1b\u5bf9\u5e94\u73b0\u5728\u7684\u6539\u52a8\u5219\u662f\u5c06\u53d8\u91cf\u653e\u5165\u9875\u9762\u53c2\u6570query\u4e2d\u7684\u65b9\u5f0f\uff0c\u6548\u679c\u4e00\u81f4\u3002",(0,r.kt)("br",null),"\n","*"," ",(0,r.kt)("inlineCode",{parentName:"p"},"setPageAttributes"),"\u5bf9\u5e94\u7684\u53ea\u6709\u9875\u9762\u8bbf\u95ee\u4e8b\u4ef6\u7684\u5c5e\u6027\uff0c\u5e76\u4e0d\u4f1a\u5bf9\u9875\u9762\u4e2d\u5176\u4ed6\u4e8b\u4ef6\u751f\u6548\u3002",(0,r.kt)("br",null),"\n","*"," \u5982\u679c\u60a8\u9700\u8981\u5bf9\u9875\u9762\u4e2d\u7684\u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u6dfb\u52a0\u5c5e\u6027\uff0c\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setGeneralProps"),(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/commonlyApi#10%E8%AE%BE%E7%BD%AE%E5%9F%8B%E7%82%B9%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7setgeneralprops"},"\u53c2\u8003\u6587\u6863"),"\u3002")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u79fb\u9664",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setVisitor")),"\u65b9\u6cd5\u8c03\u7528\u3002\u5982\u9700\u4f7f\u7528\u8bbf\u95ee\u7528\u6237\u53d8\u91cf\uff0c\u8bf7\u5c06\u8bbf\u95ee\u7528\u6237\u53d8\u91cf\u653e\u5728\u7528\u6237\u5c5e\u6027\uff08setUserAttributes\uff09\u4e2d\u8fdb\u884c\u4e0a\u62a5\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u66ff\u6362",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setUser")),"\u4e3a",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setUserAttributes")),"\uff0c\u8c03\u7528\u65b9\u5f0f\u4e0d\u53d8\u3002\u672a\u4f7f\u7528\u5219\u5ffd\u7565\u3002")),(0,r.kt)("p",null,"\u5176\u4ed6api\u8c03\u7528\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/commonlyApi"},"\u53c2\u8003\u6587\u6863"),"\u4f7f\u7528\uff0c\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u662f\u5426\u9700\u8981\u8c03\u7528api\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"),(0,r.kt)("h3",{id:"5\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"},"5\u3001\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\u548c\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u68c0\u67e5\u57cb\u70b9\u4e8b\u4ef6\uff08track\uff09\u3001\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\uff08setUserAttributes\uff09\u3001\u534a\u81ea\u52a8\u91c7\u96c6\u6d4f\u89c8\u4e8b\u4ef6\uff08\u66dd\u5149\u4e8b\u4ef6\uff09\u7684\u5c5e\u6027\u952e\u503c\u5bf9\uff0ckey\u548cvalue\u662f\u5426\u7b26\u5408\u9650\u5236\u6761\u4ef6",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/commonlyApi#object%E5%8F%82%E6%95%B0%E9%99%90%E5%88%B6"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u5982\u6709\u8d85\u51fa\u9650\u5236\u6216\u8d85\u51fa\u9650\u5236\u7684\u53ef\u80fd\uff0c\u8bf7\u8c03\u6574\u4e1a\u52a1\u903b\u8f91\u3002"),(0,r.kt)("h3",{id:"6\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0"},"6\u3001\u68c0\u67e5\u91c7\u96c6\u6807\u8bb0"),(0,r.kt)("p",null,"\u4ece4.0\u7248\u672c\u5f00\u59cb\uff0c\u6240\u6709\u4e8b\u4ef6\u4e2d\u7684index\u5b57\u6bb5\u53d6\u503c\u5c06\u4ece ",(0,r.kt)("strong",{parentName:"p"},"1")," \u5f00\u59cb\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u5728\u5c0f\u7a0b\u5e8f\u5e94\u7528\u4e2d\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"data-index"),"\uff0c\u8bf7\u6ce8\u610f\u6392\u67e5\u4fee\u6539\u3002"))))}d.isMDXComponent=!0}}]);