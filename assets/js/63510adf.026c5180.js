"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),b=u(a),m=r,k=b["".concat(o,".").concat(m)]||b[m]||s[m]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[b]="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),d=a(6775),o=a(1980),u=a(7392),p=a(12);function b(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function s(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??b(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,d.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=s(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=k({queryString:a,groupId:n}),[b,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),w=(()=>{const e=o??b;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{w&&d(w)}),[w]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),c(e)}),[u,c,l]),tabValues:l}}var w=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:d,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:b}=(0,i.o5)(),s=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==d&&(b(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:s},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":d===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=c(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function v(e){const t=(0,w.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},8971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>w,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const d={sidebar_position:1,title:"H5\u6df7\u5408\u6a21\u5757"},o=void 0,u={unversionedId:"ios/modules/Hybrid Module",id:"ios/modules/Hybrid Module",title:"H5\u6df7\u5408\u6a21\u5757",description:"APP \u5185\u5d4c H5 \u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5 \u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK",source:"@site/docs/ios/modules/Hybrid Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/Hybrid Module",permalink:"/growingio-sdk-docs/docs/ios/modules/Hybrid Module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/modules/Hybrid Module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"H5\u6df7\u5408\u6a21\u5757"},sidebar:"docSidebar",previous:{title:"\u6a21\u5757\u5217\u8868",permalink:"/growingio-sdk-docs/docs/ios/modules"},next:{title:"\u5708\u9009\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/WebCircle Module"}},p={},b=[{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK",id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:5},{value:"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)",id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:5},{value:"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)",id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:5},{value:"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165",id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:5},{value:"5.\u91cd\u7f6e Hybrid \u6ce8\u5165",id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:5},{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210-1",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e-1",level:3},{value:"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK",id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:5},{value:"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)",id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:5},{value:"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)",id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:5},{value:"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165",id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:5},{value:"5.\u91cd\u7f6e Hybrid \u6ce8\u5165",id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:5}],s=(m="ImageLoader",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const k={toc:b},c="wrapper";function w(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"APP \u5185\u5d4c H5 \u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5 \u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK"),(0,r.kt)("p",null,"\u82e5\u9700\u8981 H5 \u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0e APP \u4e2d GIO SDK \u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/plugins/hybridAdapter"},"Hybrid\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6")),(0,r.kt)("p",null,"\u5982\u679c APP \u96c6\u6210\u7684\u662f",(0,r.kt)("a",{parentName:"p",href:"/docs/ios/Introduce#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,r.kt)("strong",{parentName:"a"},"\u65e0\u57cb\u70b9 SDK")),"\uff0c \u4e0d\u9700\u8981\u505a\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u6ce8\u5165\u6865\u63a5\u4ee3\u7801\uff0c\u5b9e\u73b0\u6570\u636e\u6253\u901a\uff1b"),(0,r.kt)("p",null,"\u5982\u679c APP \u96c6\u6210\u7684\u662f",(0,r.kt)("a",{parentName:"p",href:"/docs/ios/Introduce#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,r.kt)("strong",{parentName:"a"},"\u57cb\u70b9 SDK")),"\uff0c\u5219\u9700\u8981\u60a8\u6dfb\u52a0 Hybrid \u4f9d\u8d56"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"))),(0,r.kt)("hr",null),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u6a21\u5757\u96c6\u6210"},"\u6a21\u5757\u96c6\u6210"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"li"},"GrowingModule_Hybrid")," Package")),(0,r.kt)(s,{path:"img/ios/add_package_hybrid",mdxType:"ImageLoader"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cHybrid \u5c06\u81ea\u52a8\u6ce8\u5165\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0c\u5982\u9700\u989d\u5916\u914d\u7f6e\uff0c\u53ef\u5728\u76ee\u6807\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"import GrowingModule_Hybrid"),"\uff0c\u5e76\u8c03\u7528\u4e0b\u5217\u914d\u7f6e\u63a5\u53e3")),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"Hybrid \u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u63a5\u53e3\uff1a"),(0,r.kt)("h4",{id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk"},"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"autoBridgeEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5bf9\u6240\u6709 webView \u81ea\u52a8\u6ce8\u5165 Hybrid SDK")))),(0,r.kt)("h5",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let hybrid = Hybrid.sharedInstance()\nhybrid.autoBridgeEnabled = false\n")),(0,r.kt)("h4",{id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f"},"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enableBridge(_ webView: WKWebView)"),(0,r.kt)("br",null),"\n\u5728 autoBridgeEnabled \u4e3a false \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webView")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WKWebView")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d webView \u5b9e\u4f8b")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let hybrid = Hybrid.sharedInstance()\nhybrid.enableBridge(webView)\n")),(0,r.kt)("h4",{id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f"},"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"disableBridge(_ webView: WKWebView)"),(0,r.kt)("br",null),"\n\u5728 autoBridgeEnabled \u4e3a true \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webView")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WKWebView")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d webView \u5b9e\u4f8b")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let hybrid = Hybrid.sharedInstance()\nhybrid.disableBridge(webView)\n")),(0,r.kt)("h4",{id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165"},"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isBridgeEnabled(_ webView: WKWebView)"),(0,r.kt)("br",null),"\n\u5224\u65ad\u5f53\u524d\u914d\u7f6e\u4e0b\uff0cwebView \u662f\u5426\u53ef\u6ce8\u5165"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webView")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WKWebView")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d webView \u5b9e\u4f8b")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let hybrid = Hybrid.sharedInstance()\nlet isBridgeEnabled = hybrid.isBridgeEnabled(webView)\n")),(0,r.kt)("h4",{id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165"},"5.\u91cd\u7f6e Hybrid \u6ce8\u5165"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resetBridgeSettings()"),(0,r.kt)("br",null),"\n\u91cd\u7f6e Hybrid \u6ce8\u5165\u914d\u7f6e\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"),(0,r.kt)("h5",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let hybrid = Hybrid.sharedInstance()\nhybrid.resetBridgeSettings()\n"))),(0,r.kt)(i.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u6a21\u5757\u96c6\u6210-1"},"\u6a21\u5757\u96c6\u6210"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingAnalytics/Hybrid'\n")),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pod update")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cHybrid \u5c06\u81ea\u52a8\u6ce8\u5165\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0c\u5982\u9700\u989d\u5916\u914d\u7f6e\uff0c\u53ef\u5728\u76ee\u6807\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},'#import "GrowingHybridModule.h"'),"\uff0c\u5e76\u8c03\u7528\u4e0b\u5217\u914d\u7f6e\u63a5\u53e3")),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e-1"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"Hybrid \u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u63a5\u53e3\uff1a"),(0,r.kt)("h4",{id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk-1"},"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"autoBridgeEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"YES")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5bf9\u6240\u6709 webView \u81ea\u52a8\u6ce8\u5165 Hybrid SDK")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[GrowingHybridModule sharedInstance].autoBridgeEnabled = NO;\n")),(0,r.kt)("h4",{id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f-1"},"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enableBridgeForWebView:"),(0,r.kt)("br",null),"\n\u5728 autoBridgeEnabled \u4e3a NO \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webView")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WKWebView")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d webView \u5b9e\u4f8b")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[GrowingHybridModule sharedInstance] enableBridgeForWebView:webView];\n")),(0,r.kt)("h4",{id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f-1"},"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"disableBridgeForWebView:"),(0,r.kt)("br",null),"\n\u5728 autoBridgeEnabled \u4e3a YES \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webView")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WKWebView")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d webView \u5b9e\u4f8b")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[GrowingHybridModule sharedInstance] disableBridgeForWebView:webView];\n")),(0,r.kt)("h4",{id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165-1"},"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isBridgeForWebViewEnabled:"),(0,r.kt)("br",null),"\n\u5224\u65ad\u5f53\u524d\u914d\u7f6e\u4e0b\uff0cwebView \u662f\u5426\u53ef\u6ce8\u5165"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webView")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WKWebView")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d webView \u5b9e\u4f8b")))),(0,r.kt)("h5",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"BOOL enabled = [[GrowingHybridModule sharedInstance] isBridgeForWebViewEnabled:webView];\n")),(0,r.kt)("h4",{id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165-1"},"5.\u91cd\u7f6e Hybrid \u6ce8\u5165"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resetBridgeSettings"),(0,r.kt)("br",null),"\n\u91cd\u7f6e Hybrid \u6ce8\u5165\u914d\u7f6e\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"),(0,r.kt)("h5",{id:"\u793a\u4f8b-9"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[GrowingHybridModule sharedInstance] resetBridgeSettings];\n")))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"1. H5 \u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0e APP \u4e2d GIO SDK \u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\u89c4\u5219\uff1a")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e24\u8005 accountId \u4e00\u81f4\u65f6\uff0cH5 \u4e0e APP \u6253\u901a\uff0c\u6b64\u65f6 H5 \u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u4ec5\u7531 APP \u4e2d GIO SDK \u53d1\u9001"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u8005 accountId \u4e0d\u4e00\u81f4\u65f6\uff0cH5 \u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u540c\u65f6\u7531 Web JS SDK \u548c APP \u4e2d GIO SDK \u53d1\u9001"),(0,r.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\u6253\u901a\u8bbe\u7f6e\u65f6\uff0cH5 \u9875\u9762\u8c03\u7528 setUserID\uff0ccleanUserID \u4f1a\u8c03\u7528 APP \u7684 setLoginUserID\uff0ccleanUserID\u3002")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"2. \u6253\u901a\u6210\u529f\u6548\u679c"),"\n\u5f53\u89e6\u53d1\u4e86\u6253\u901a\u89c4\u5219\uff0c\u5b9e\u73b0\u6253\u901a\u8bbe\u7f6e\u540e\uff0cH5 \u5185\u5d4c\u9875\u91c7\u96c6\u7684\u6570\u636e\u7ecf APP \u4e2d GIO SDK \u53d1\u9001\u6570\u636e\u3002\u4ee5\u4e0b\u5b57\u6bb5\u53d8\u5316\u5982\u4e0b\uff1a",(0,r.kt)("br",null),"\ndeviceId: \u4f7f\u7528\u539f\u751f App \u7684d eviceId",(0,r.kt)("br",null),"\nsessionId: \u4f7f\u7528\u539f\u751f App \u7684 sessionId",(0,r.kt)("br",null),"\ngioId: \u4f7f\u7528\u539f\u751f App \u7684 gioId ",(0,r.kt)("br",null),"\nuserId: \u4f7f\u7528\u539f\u751f App \u7684 userId",(0,r.kt)("br",null),"\nuserKey: \u4f7f\u7528\u539f\u751f App \u7684 userKey",(0,r.kt)("br",null),"\ndataSourceId: \u4f7f\u7528\u539f\u751f App \u7684 dataSourceId",(0,r.kt)("br",null),"\nplatform: \u4f7f\u7528\u539f\u751f App \u7684 platform",(0,r.kt)("br",null),"\ndomain: \u4f7f\u7528 H5 \u9875\u9762\u7684\u57df\u540d",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"\u7528\u6237\u884c\u4e3a\u4e0e\u91c7\u96c6\u6570\u636e\u63cf\u8ff0\uff1a\u7528\u6237\u70b9\u51fb APP \u5185\u5d4c H5 \u9875\u9762\uff0c\u7531 APP \u539f\u751f\u9875\u9762\u8fdb\u5165 H5 \u9875\u9762\uff0cH5 \u9875\u9762\u96c6\u6210\u7684\u91c7\u96c6 SDK \u4f1a\u628a\u91c7\u96c6\u7684\u6570\u636e\u8f6c\u53d1\u7ed9 APP \u96c6\u6210\u7684 SDK\uff0c\u518d\u8fdb\u884c\u4e0a\u62a5\uff1bH5 \u9875\u9762\u7684\u884c\u4e3a\u6570\u636e\u4e2d\u7684\u4ee5\u4e0a\u7528\u6237\u4fe1\u606f\u5b57\u6bb5\u4f1a\u7528 APP SDK \u91c7\u96c6\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5b9e\u73b0 H5 \u9875\u9762\u7528\u6237\u4e0e APP \u7528\u6237\u4fe1\u606f\u5173\u8054\u3002")))}w.isMDXComponent=!0}}]);