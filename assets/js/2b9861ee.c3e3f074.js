"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),d=a(6775),o=a(1980),p=a(7392),s=a(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,d.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,p]=c({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),N=(()=>{const e=o??m;return k({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&d(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),g(e)}),[p,g,l]),tabValues:l}}var N=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:d,selectValue:o,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),n=p[a].value;n!==d&&(m(t),o(n))},k=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,key:t,ref:e=>s.push(e),onKeyDown:k,onClick:u},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":d===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,N.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},9343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const l={sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},i=void 0,d={unversionedId:"android/Configuration",id:"android/Configuration",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e Configuration, \u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a",source:"@site/docs/android/Configuration.md",sourceDirName:"android",slug:"/android/Configuration",permalink:"/growingio-sdk-docs/docs/android/Configuration",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"docSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs/docs/android/Introduce"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/android/api"}},o={},p=[{value:"\u914d\u7f6e\u8868\u683c",id:"\u914d\u7f6e\u8868\u683c",level:2},{value:"\u901a\u7528\u914d\u7f6e",id:"\u901a\u7528\u914d\u7f6e",level:3},{value:"\u65e0\u57cb\u70b9\u914d\u7f6e",id:"\u65e0\u57cb\u70b9\u914d\u7f6e",level:3},{value:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e",id:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e",level:2},{value:"1. SDK\u5fc5\u9700\u53c2\u6570",id:"1-sdk\u5fc5\u9700\u53c2\u6570",level:3},{value:"2. setChannel",id:"2-setchannel",level:3},{value:"3. setDebugEnabled",id:"3-setdebugenabled",level:3},{value:"4. setCellularDataLimit",id:"4-setcellulardatalimit",level:3},{value:"5. setDataUploadInterval",id:"5-setdatauploadinterval",level:3},{value:"6. setSessionInterval",id:"6-setsessioninterval",level:3},{value:"7. setDataCollectionEnabled",id:"7-setdatacollectionenabled",level:3},{value:"8. setEventFilterInterceptor",id:"8-seteventfilterinterceptor",level:3},{value:"9. setImeiEnabled",id:"9-setimeienabled",level:3},{value:"10. setAndroidIdEnabled",id:"10-setandroididenabled",level:3},{value:"11. setRequireAppProcessesEnabled",id:"11-setrequireappprocessesenabled",level:3},{value:"12. setIdMappingEnabled",id:"12-setidmappingenabled",level:3},{value:"13. addPreloadComponent",id:"13-addpreloadcomponent",level:3},{value:"14. setRequestTimeout",id:"14-setrequesttimeout",level:3},{value:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e",id:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e",level:2},{value:"1. setImpressionScale",id:"1-setimpressionscale",level:3},{value:"2. setWebViewBridgeEnabled",id:"2-setwebviewbridgeenabled",level:3},{value:"3. downgrade",id:"3-downgrade",level:3}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),", \u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8868\u683c"},"\u914d\u7f6e\u8868\u683c"),(0,r.kt)("h3",{id:"\u901a\u7528\u914d\u7f6e"},"\u901a\u7528\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"accountId")," ",(0,r.kt)("a",{parentName:"td",href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"\u662f")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"null"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76eeID\uff0c\u6bcf\u4e2a\u5e94\u7528\u5bf9\u5e94\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"urlScheme")," ",(0,r.kt)("a",{parentName:"td",href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"\u662f")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"null"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684URLScheme\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"setDataSourceId")," ",(0,r.kt)("a",{parentName:"td",href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"\u662f")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"null"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684DataSourceId\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setDataCollectionServerHost ",(0,r.kt)("a",{parentName:"td",href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u65b0saas\u5730\u5740"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6536\u6570\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setChannel ",(0,r.kt)("a",{parentName:"td",href:"#2-setchannel"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setDebugEnabled ",(0,r.kt)("a",{parentName:"td",href:"#3-setdebugenabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370 Log \u548c\u9519\u8bef\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u8bf7\u5173\u95ed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setCellularDataLimit ",(0,r.kt)("a",{parentName:"td",href:"#4-setcellulardatalimit"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setDataUploadInterval ",(0,r.kt)("a",{parentName:"td",href:"#5-setdatauploadinterval"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setSessionInterval ",(0,r.kt)("a",{parentName:"td",href:"#6-setsessioninterval"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setImeiEnabled ",(0,r.kt)("a",{parentName:"td",href:"#8-setimeienabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6Imei\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e0d\u91c7\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setDataCollectionEnabled ",(0,r.kt)("a",{parentName:"td",href:"#7-setdatacollectionenabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setEventFilterInterceptor ",(0,r.kt)("a",{parentName:"td",href:"#8-seteventfilterinterceptor"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"EventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"\u4e0d\u62e6\u622a")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u4e8b\u4ef6\u8fc7\u6ee4,\u8fc7\u6ee4\u4e8b\u4ef6\u7c7b\u578b\u548c\u4e8b\u4ef6\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setIdMappingEnabled ",(0,r.kt)("a",{parentName:"td",href:"#12-setidmappingenabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setRequireAppProcessesEnabled ",(0,r.kt)("a",{parentName:"td",href:"#11-setrequireappprocessesenabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDK \u662f\u5426\u80fd\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0bID"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setAndroidIdEnabled ",(0,r.kt)("a",{parentName:"td",href:"#10-setandroididenabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDK \u662f\u5426\u80fd\u83b7\u53d6 AndroidId"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"addPreloadComponent ",(0,r.kt)("a",{parentName:"td",href:"#13-addpreloadcomponent"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"LibraryGioModule"),",",(0,r.kt)("br",null),"[",(0,r.kt)("em",{parentName:"td"},"Configurable"),"]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u518c\u81ea\u5b9a\u4e49/\u9884\u5b9a\u4e49\u6a21\u5757\u53ca\u5176\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setRequestTimeout ",(0,r.kt)("a",{parentName:"td",href:"#14-setrequesttimeout"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"int"),",",(0,r.kt)("em",{parentName:"td"},"TimeUnit")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"30s")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u6570\u636e\u53d1\u9001\u8d85\u65f6\u8bbe\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u65e0\u57cb\u70b9\u914d\u7f6e"},"\u65e0\u57cb\u70b9\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setImpressionScale ",(0,r.kt)("a",{parentName:"td",href:"#1-setimpressionscale"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 ","[0-1]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setWebViewBridgeEnabled ",(0,r.kt)("a",{parentName:"td",href:"#2-setwebviewbridgeenabled"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5168\u91cf\u91c7\u96c6 hybrid \u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"downgrade ",(0,r.kt)("a",{parentName:"td",href:"#3-downgrade"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6062\u590d\u65e7\u7248\u672c\u65e0\u57cb\u70b9\u4e0a\u62a5\u903b\u8f91"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e"},"\u901a\u7528\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("h3",{id:"1-sdk\u5fc5\u9700\u53c2\u6570"},"1. SDK\u5fc5\u9700\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"accountId\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"urlScheme\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"setDataSourceId\uff0c"),"\n\u8fd9\u4e09\u4e2a\u53c2\u6570\u4e3a\u7528\u6237\u5fc5\u987b\u8981\u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u82e5\u4e0d\u6e05\u695a\u5177\u4f53\u6570\u503c\u8bf7\u8be2\u95ee\u76f8\u5173\u670d\u52a1\u7aef\u5bf9\u63a5\u7684\u5f00\u53d1\u540c\u4e8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"setDataCollectionServerHost")," \u9ed8\u8ba4\u57df\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"napi.growingio.com"),"\uff0c\u82e5\u662fOP\u5ba2\u6237\uff0c\u9700\u8981\u8bbe\u7f6e\u81ea\u5df1\u7684ServerHost\u3002"),(0,r.kt)("h3",{id:"2-setchannel"},"2. setChannel"),(0,r.kt)("p",null,"\u5bf9\u5e94\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053\u5b57\u6bb5\uff0c\u82e5\u8bbe\u7f6e\u4e86\u503c\u5219\u4f1a\u5728\u6bcf\u4e2a\u4e8b\u4ef6\u4e0a\u62a5\u4e2d\u542b\u6709\u6e20\u9053\u4fe1\u606f\u3002\n\u6bd4\u5982\u5728\u521d\u59cb\u5316\u4e2d\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},'.setChannel("Google")'),",\u5219\u4f1a\u5728\u4e0a\u62a5\u4fe1\u606f\u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"appChannel")," \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "platform": "Android",\n    \u2551   "appChannel": "Google",\n    \u2551   "screenHeight": 1920,\n    \u2551   "screenWidth": 1080,\n    \u2551   ...\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')),(0,r.kt)("h3",{id:"3-setdebugenabled"},"3. setDebugEnabled"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5f00\u542f\u540e\u4f1a\u8f93\u51fa SDK Log \u65e5\u5fd7\u3002\n\u5efa\u8bae\u505a\u6cd5\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(BuildConfig.DEBUG)")," \u8fd9\u6837\u65e2\u80fd\u4fdd\u8bc1Debug\u65f6\u80fd\u591f\u6253\u5370\u65e5\u5fd7\uff0c\u6b63\u5f0f\u53d1\u5e03\u65f6\u4e5f\u80fd\u5173\u95ed\u65e5\u5fd7\uff1b"),(0,r.kt)("h3",{id:"4-setcellulardatalimit"},"4. setCellularDataLimit"),(0,r.kt)("p",null,"\u4e3a\u6bcf\u65e5\u57284G\u73af\u5883\u4e0b\u7684\u6d41\u91cf\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a10M\u3002WIFI\u73af\u5883\u4e0b\u5219\u4e0d\u8ba1\u6d41\u91cf\u3002"),(0,r.kt)("h3",{id:"5-setdatauploadinterval"},"5. setDataUploadInterval"),(0,r.kt)("p",null,"\u4e0a\u62a5\u95f4\u9694\u3002GrowingIO SDK \u4f1a\u5148\u5c06\u4e8b\u4ef6\u5b58\u5165\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f415\u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u592750\u6761\u4e8b\u4ef6\uff09\u3002"),(0,r.kt)("h3",{id:"6-setsessioninterval"},"6. setSessionInterval"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\u3002\u6307\u5f53\u524d\u4f1a\u8bdd\u5728\u5e94\u7528\u8fdb\u5165\u540e\u53f0\u540e\u7684\u6700\u5927\u7559\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a30\u79d2\u3002\u53e6\u5916\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f1a\u8bdd\uff0c\u5982\u8bbe\u7f6e\u7528\u6237ID\u7b49\u6838\u5fc3\u4fe1\u606f\uff0c\u91cd\u65b0\u6253\u5f00\u6570\u636e\u6536\u96c6\u7b49\u3002"),(0,r.kt)("h3",{id:"7-setdatacollectionenabled"},"7. setDataCollectionEnabled"),(0,r.kt)("p",null,"\u6570\u636e\u6536\u96c6\u3002\u5f53\u6570\u636e\u6536\u96c6\u5173\u95ed\u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u518d\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4e8b\u4ef6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"8-seteventfilterinterceptor"},"8. setEventFilterInterceptor"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u8be5\u63a5\u53e3\u9700\u8981\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u62e6\u622a\u5668\u7528\u4e8e\u4e8b\u4ef6\u62e6\u622a\u7684\u81ea\u5b9a\u4e49\u5316\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u4e8b\u4ef6\u62e6\u622a\u5668\u65f6\u8bf7\u6ce8\u610f\u4f7f\u7528\uff0c\u4e0d\u8981\u8fc7\u6ee4\u6389\u91cd\u8981\u4fe1\u606f\uff0c\u9632\u6b62\u6570\u636e\u91c7\u96c6\u4fe1\u606f\u4e22\u5931\u6216\u8005\u5c11\u91c7\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u58f0\u660e\u4e00\u4e2a\u4e8b\u4ef6\u8fc7\u6ee4\u5668\uff0c\u7ee7\u627f `DefaultEventFilterInterceptor` \u6216 `EventFilterInterceptor`\nclass CustomEventFilterInterceptor implements EventFilterInterceptor {\n\n    // \u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u6765\u8fc7\u6ee4\u4e8b\u4ef6\uff0c\u8fd4\u56de false \u8868\u793a\u62e6\u622a\uff0c\u8fd4\u56de true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u62e6\u622a\u4e8b\u4ef6\u7c7b\u578b\u4e3a \u201cPAGE\u201d \u7684\u4e8b\u4ef6\n    @Override\n    public boolean filterEventType(String eventType) {\n        if (FilterEventType.PAGE.equals(eventType)) return false;\n        return true;\n    }\n\n    // \u8fc7\u6ee4\u4e8b\u4ef6\u57fa\u7840\u5c5e\u6027\uff0c\u5c5e\u6027\u8bbe\u7f6e false \u8868\u793a\u62e6\u622a\uff0c\u8bbe\u7f6e true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u4e8b\u4ef6\u4e2d\u4e0d\u518d\u5305\u542b\u5c4f\u5e55\u5bbd\u9ad8\u7684\u5c5e\u6027\u3002\n    @Override\n    public Map<String, Boolean> filterEventField(String type, Map<String, Boolean> fieldArea) {\n        fieldArea.put(BaseField.SCREEN_HEIGHT, false);\n        fieldArea.put(BaseField.SCREEN_WIDTH, false);\n        return fieldArea;\n    }\n\n    // \u9488\u5bf9\u65e0\u57cb\u70b9\u7684\u9875\u9762\u4e8b\u4ef6\u7684\u8def\u5f84\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u9875\u9762\u4e8b\u4ef6\u4e2d\u7684\u8def\u5f84\u5305\u542b \u201cTestActivity\u201d \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventPath(String path) {\n        return !path.contains("TestActivity");\n    }\n\n    // \u9488\u5bf9\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u540d\u79f0\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u4e2d\u540d\u79f0\u4e3a "test" \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventName(String eventName) {\n        return !"test".equals(eventName);\n    }\n}\n')),(0,r.kt)("p",null,"\u4e4b\u540e\u518d\u8c03\u7528\u8be5\u63a5\u53e3\u8bbe\u7f6e\u62e6\u622a\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'GrowingTracker.startWithConfiguration(this,\n    new AutotrackConfiguration("accountId", "urlScheme")\n        ...\n       .setEventFilterInterceptor(new CustomEventFilterInterceptor())\n);\n')),(0,r.kt)("h3",{id:"9-setimeienabled"},"9. setImeiEnabled"),(0,r.kt)("p",null,"\u662f\u5426\u91c7\u96c6Imei\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e0d\u91c7\u96c6\uff0c\u4e14Android 10\u53ca\u4ee5\u4e0a\u5df2\u4e0d\u518d\u652f\u6301 Imei \u7684\u83b7\u53d6\u3002"),(0,r.kt)("h3",{id:"10-setandroididenabled"},"10. setAndroidIdEnabled"),(0,r.kt)("p",null,"\u662f\u5426\u83b7\u53d6AndroidId\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e0d\u83b7\u53d6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u6253\u5f00"),"\uff0c\u53ef\u4ee5\u5e2e\u52a9\u66f4\u51c6\u786e\u7684\u5339\u914d\u5e7f\u544a\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"11-setrequireappprocessesenabled"},"11. setRequireAppProcessesEnabled"),(0,r.kt)("p",null,"SDK \u662f\u5426\u80fd\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0bID\u3002\u9ed8\u8ba4\u4e0d\u83b7\u53d6\uff0c\u5728\u5e94\u7528\u6709\u591a\u8fdb\u7a0b\u7684\u573a\u666f\u4e0b",(0,r.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u6253\u5f00"),"\u3002"),(0,r.kt)("h3",{id:"12-setidmappingenabled"},"12. setIdMappingEnabled"),(0,r.kt)("p",null,"\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u9ed8\u8ba4\u4e0d\u652f\u6301\u3002\n\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u4e0e API \u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId(String userId, String userKey)"),"\u5bf9\u5e94, \u5f00\u542f\u65f6, userKey\u4f1a\u5728\u6bcf\u6b21\u4e0a\u62a5\u6570\u636e\u65f6\u643a\u5e26, \u5173\u95ed\u65f6, \u63a5\u53e3\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId(String userId)"),"\u4f5c\u7528\u76f8\u540c"),(0,r.kt)("h3",{id:"13-addpreloadcomponent"},"13. addPreloadComponent"),(0,r.kt)("p",null,"\u6ce8\u518c\u529f\u80fd\u6a21\u5757\uff0c\u4e3a Growingio SDK \u6dfb\u52a0\u66f4\u591a\u7684\u989d\u5916\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u53ef\u4ee5\u6ce8\u518c\u5bf9\u5e94\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n        new AutotrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>, <\u6a21\u5757\u914d\u7f6e>)\n        // \u6216\u8005\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>)\n\n);\n')),(0,r.kt)("p",null,"\u6a21\u5757\u5217\u8868\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android/modules"},"\u529f\u80fd\u6a21\u5757\u4e00\u89c8")),(0,r.kt)("h3",{id:"14-setrequesttimeout"},"14. setRequestTimeout"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u957f\uff0c\u9ed8\u8ba430s\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.startWithConfiguration(this,\n        new AutotrackConfiguration("accountId", "urlScheme")\n        // \u8bbe\u7f6e\u7f51\u7edc\u8bf7\u6c42\u8d85\u65f6\n        .setRequestTimeout(30,TimeUnit.SECONDS)\n        // \u6216\u8005\u5728\u4f7f\u7528okHttp\u8bf7\u6c42\u5e93\u65f6\uff0c\u53ef\u4ee5\u8be6\u7ec6\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\n        .setRequestDetailTimeout(10, 10, 10, TimeUnit.SECONDS)\n\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u4f7f\u7528\u9ed8\u8ba4 Okhttp \u8bf7\u6c42\u5e93\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequestDetailTimeout(10, 10, 10, TimeUnit.SECONDS)")," \u63a5\u53e3\uff0c\u5176\u503c\u5206\u522b\u5bf9\u5e94 Okhttp \u7f51\u7edc\u5e93\u7684\u8bf7\u6c42\u8d85\u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"connectTimeout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"readTimeout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"writeTimeout"))),(0,r.kt)("h2",{id:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e"},"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("h3",{id:"1-setimpressionscale"},"1. setImpressionScale"),(0,r.kt)("p",null,"\u66dd\u5149\u6bd4\u4f8b\u3002\u4e0e\u66dd\u5149\u4e8b\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\u66dd\u5149\u6bd4\u4f8b\u662f\u6307\u5f53\u4e00\u4e2a\u66dd\u5149\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u65f6\u53ef\u89c1\u7684\u90e8\u5206\u5360\u636e\u81ea\u8eab\u5c3a\u5bf8\u7684\u6bd4\u4f8b\uff0c\u6bd4\u5982\u8bf4\u82e5\u8bbe\u4e3a 0 \u5219\u8868\u793a\u53ea\u8981\u51fa\u73b0\u5373\u4ea7\u751f\u66dd\u5149\u4e8b\u4ef6\uff0c\u82e5\u8bbe\u4e3a1\u5219\u8868\u793a\u8981\u6574\u4e2aView\u90fd\u51fa\u73b0\u5728\u5c4f\u5e55\u4e2d\u3002"),(0,r.kt)("h3",{id:"2-setwebviewbridgeenabled"},"2. setWebViewBridgeEnabled"),(0,r.kt)("p",null,"\u662f\u5426\u5168\u91cf\u91c7\u96c6 hybrid \u6570\u636e\uff08\u9ed8\u8ba4\u4e3a true\uff09"),(0,r.kt)("p",null,"\u65e0\u57cb\u70b9\u9ed8\u8ba4\u4f1a\u91c7\u96c6\u5bf9\u5e94 webview \u7684 hybrid \u4e8b\u4ef6\uff0c\u8bbe\u7f6e\u4e3a false\uff0c\u53ef\u4ee5\u5173\u95ed\u91c7\u96c6 hybrid \u6570\u636e\u3002",(0,r.kt)("br",null),"\n\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u91c7\u96c6\u5355\u4e2a webview \u7684 hybrid \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u65f6 API \u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"bridgeWebView(View webView)"),"\u5f00\u542f\u91c7\u96c6\u3002"),(0,r.kt)("h3",{id:"3-downgrade"},"3. downgrade"),(0,r.kt)("p",null,"\u8c03\u7528\u8be5\u65b9\u6cd5\u540e\uff0c\u6240\u6709\u7684\u65e0\u57cb\u70b9\u5c06\u4ee5\u65e7\u7248\u672c\u7684\u65e0\u57cb\u70b9\u903b\u8f91\u4e0a\u62a5\u6570\u636e\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"))}u.isMDXComponent=!0}}]);