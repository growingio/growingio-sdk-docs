"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6775),u=r(1980),c=r(7392),s=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var g=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==i&&(d(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},2535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={sidebar_position:6,title:"\u5708\u9009\u6a21\u5757"},u=void 0,c={unversionedId:"android/modules/circler module",id:"android/modules/circler module",title:"\u5708\u9009\u6a21\u5757",description:"\u5708\u9009\uff0c\u662f\u5229\u7528GrowingIO\u8fdb\u884c\u65e0\u57cb\u70b9\u6570\u636e\u5206\u6790\u4e4b\u524d\u7684\u6570\u636e\u5b9a\u4e49\u8fc7\u7a0b\u3002\u60a8\u9700\u8981\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u5c06\u9700\u8981\u5206\u6790\u7684\u5173\u952e\u4e8b\u4ef6\u901a\u8fc7\u53ef\u89c6\u5316\u5730\u65b9\u5f0f\u5728\u60a8\u7684\u4ea7\u54c1\u754c\u9762\u4e2d\u5b9a\u4e49\u51fa\u6765\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u5c31\u662f\u5708\u9009\u3002",source:"@site/docs/android/modules/circler module.md",sourceDirName:"android/modules",slug:"/android/modules/circler module",permalink:"/growingio-sdk-docs/docs/android/modules/circler module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/circler module.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u5708\u9009\u6a21\u5757"},sidebar:"docSidebar",previous:{title:"OAID \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/oaid module"},next:{title:"Debugger \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/debugger module"}},s={},d=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3}],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5708\u9009\uff0c\u662f\u5229\u7528GrowingIO\u8fdb\u884c\u65e0\u57cb\u70b9\u6570\u636e\u5206\u6790\u4e4b\u524d\u7684\u6570\u636e\u5b9a\u4e49\u8fc7\u7a0b\u3002\u60a8\u9700\u8981\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u5c06\u9700\u8981\u5206\u6790\u7684\u5173\u952e\u4e8b\u4ef6\u901a\u8fc7\u53ef\u89c6\u5316\u5730\u65b9\u5f0f\u5728\u60a8\u7684\u4ea7\u54c1\u754c\u9762\u4e2d\u5b9a\u4e49\u51fa\u6765\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u5c31\u662f\u5708\u9009\u3002"),(0,a.kt)("p",null,"\u5708\u9009\u7684\u6559\u7a0b\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/user-behavior-analytics/data-management/data-management/auto-track/app-data-definition"},"\u4ea7\u54c1\u6559\u7a0b-\u65e0\u57cb\u70b9\u4e8b\u4ef6")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u96c6\u6210\u65e0\u57cb\u70b9SDK\u65f6\uff0c\u5708\u9009\u6a21\u5757\u4f1a\u9ed8\u8ba4\u96c6\u6210\u5230SDK\u4e2d\uff0c\u4e14\u53ea\u5728\u65e0\u57cb\u70b9SDK\u4e2d\u6709\u6548\uff0c\u4e0d\u652f\u6301\u57cb\u70b9SDK\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u82e5\u4e0d\u60f3\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u96c6\u6210\u5708\u9009\u6a21\u5757\uff0c\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/blog/custom%20android%20sdk"},"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1"),"\uff0c\u81ea\u5b9a\u4e49SDK\u6a21\u5757\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"circler"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u81ea\u52a8\u96c6\u6210"),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Circler")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"WebService")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,a.kt)(o.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"common",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:circler:4.0.0'\n}\n"))),(0,a.kt)(l.Z,{value:"bom",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:4.0.0')\n\n  implementation 'com.growingio.android:circler'\n}\n")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u9700\u8981\u5728 \u201d\u6570\u636e\u7ba1\u7406 > \u65e0\u57cb\u70b9\u4e8b\u4ef6\u201d \u4e2d\u70b9\u51fb \u201c\u65b0\u5efa\u65e0\u57cb\u70b9\u4e8b\u4ef6 > {App\u5e94\u7528}\u201d \u8fdb\u5165App\u5524\u9192\u9875\u9762\u3002\n\u540e\u7eed\u64cd\u4f5c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/user-behavior-analytics/data-management/data-management/auto-track/app-data-definition"},"APP\u7aef\u6570\u636e\u5b9a\u4e49")," \u5373\u53ef\u3002"))}f.isMDXComponent=!0}}]);