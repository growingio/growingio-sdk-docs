"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6775),p=a(1980),d=a(7392),s=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,d]=k({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=p??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var f=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:p,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),n=d[a].value;n!==i&&(u(t),p(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},6723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:5,title:"\u5e7f\u544a\u6a21\u5757"},p=void 0,d={unversionedId:"ios/modules/Ads Module",id:"ios/modules/Ads Module",title:"\u5e7f\u544a\u6a21\u5757",description:"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5 (DeepLink)\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9b App \u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002 \u5728\u6df1\u5ea6\u94fe\u63a5\u6280\u672f\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App \u5e76\u8df3\u8f6c\u81f3\u6307\u5b9a\u9875\u9762\uff0c\u540c\u65f6\u6839\u636e\u6761\u4ef6\u5224\u65ad\u7528\u6237\u8df3\u8f6c\u8def\u5f84\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u5b89\u88c5 App \u65f6\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App\uff0c\u5f53\u7528\u6237\u672a\u5b89\u88c5 App \u65f6\u4f1a\u5f15\u5bfc\u7528\u6237\u4e0b\u8f7d App\u3002",source:"@site/docs/ios/modules/Ads Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/Ads Module",permalink:"/growingio-sdk-docs/docs/ios/modules/Ads Module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/modules/Ads Module.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5e7f\u544a\u6a21\u5757"},sidebar:"docSidebar",previous:{title:"\u66dd\u5149\u91c7\u96c6\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/ImpressionTrack Module"},next:{title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/APM Module"}},s={},u=[{value:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e",id:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e",level:3},{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"\u4e3b\u52a8\u89e6\u53d1 DeepLink",id:"\u4e3b\u52a8\u89e6\u53d1-deeplink",level:3},{value:"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790",id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790",level:3},{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210-1",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e-1",level:3},{value:"\u4e3b\u52a8\u89e6\u53d1 DeepLink",id:"\u4e3b\u52a8\u89e6\u53d1-deeplink-1",level:3},{value:"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790",id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790-1",level:3}],c=(m="ImageLoader",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const k={toc:u},g="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5 (DeepLink)\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9b App \u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002 \u5728\u6df1\u5ea6\u94fe\u63a5\u6280\u672f\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App \u5e76\u8df3\u8f6c\u81f3\u6307\u5b9a\u9875\u9762\uff0c\u540c\u65f6\u6839\u636e\u6761\u4ef6\u5224\u65ad\u7528\u6237\u8df3\u8f6c\u8def\u5f84\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u5b89\u88c5 App \u65f6\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App\uff0c\u5f53\u7528\u6237\u672a\u5b89\u88c5 App \u65f6\u4f1a\u5f15\u5bfc\u7528\u6237\u4e0b\u8f7d App\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5e73\u53f0\u7248\u672c >=4.0 \u652f\u6301\uff0c\u4ea7\u54c1\u4f7f\u7528\u6587\u6863\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/acquisition-analytics/acquisition-tracing/tracking-deeplink"},"\u6df1\u5ea6\u94fe\u63a5")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"\u83b7\u5ba2\u5206\u6790 -> \u4ea7\u54c1\u914d\u7f6e -> \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"),"\uff0c\u8fdb\u5165\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u9875\u9762"),(0,r.kt)(c,{path:"img/common/product_config_deeplink",mdxType:"ImageLoader"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u627e\u5230\u9700\u8981\u914d\u7f6e\u7684 iOS \u5e94\u7528\uff0c\u70b9\u51fb\u66f4\u591a\u4fe1\u606f\uff0c\u67e5\u770b\u5f53\u524d\u5e94\u7528\u7684\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb Universal Link \u7f16\u8f91\u6309\u94ae\uff0c\u83b7\u53d6 Team ID \u5e76\u586b\u5165\u8868\u5355\u4e2d"),(0,r.kt)(c,{path:"img/ios/config_universal_link",mdxType:"ImageLoader"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5982\u4f55\u83b7\u53d6 Team ID"),(0,r.kt)("p",null,"\u5728\u82f9\u679c\u5f00\u53d1\u8005\u7f51\u7ad9\u4e2d\u627e\u5230 Team ID \u4e0e Bundle ID"),(0,r.kt)(c,{path:"img/ios/config_team_id",mdxType:"ImageLoader"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u590d\u5236 Link")," \u6309\u94ae\uff0c\u5728\u60a8\u7684 Xcode \u9879\u76ee\u914d\u7f6e\u4e2d\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Associated Domains")," \u529f\u80fd\uff0c\u5e76\u5c06\u6240\u590d\u5236\u7684 Link \u6dfb\u52a0\u5230 Associated Domains \u5217\u8868\u4e2d"),(0,r.kt)(c,{path:"img/ios/associated_domains",mdxType:"ImageLoader"}),(0,r.kt)(c,{path:"img/ios/associated_domains2",mdxType:"ImageLoader"}))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u52fe\u9009",(0,r.kt)("strong",{parentName:"li"},"\u6211\u5df2\u5b8c\u6210 Xcode \u914d\u7f6e\uff0c\u5141\u8bb8 Universal Link \u8df3\u8f6c"),"\uff0c\u70b9\u51fb\u4fdd\u5b58")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u6a21\u5757\u96c6\u6210"},"\u6a21\u5757\u96c6\u6210"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"li"},"GrowingModule_Ads")," Package")),(0,r.kt)(c,{path:"img/ios/add_package_ads",mdxType:"ImageLoader"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 AppDelegate.swift \u4e2d\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"import GrowingModule_Ads"))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u76f8\u5173\u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readClipboardEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Bool")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn"},"https://n.datayi.cn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Closures")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let config = AutotrackConfig(accountId: "YourAccountId")\nconfig?.dataCollectionServerHost = "YourServerHost"\nconfig?.dataSourceId = "YourDatasourceId"\nconfig?.urlScheme = "YourURLScheme"\n\n// \u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f\nconfig?.readClipboardEnabled = true\n// \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\nconfig?.deepLinkHost = "Your DeepLinkHost"\n// \u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570\nconfig?.deepLinkCallback = { (params: [AnyHashable : Any]?,\n                              processTime: TimeInterval,\n                              error: Error?) -> Void in\n}\n\nAutotracker.start(config!, launchOptions: launchOptions)\n')),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u89e6\u53d1-deeplink"},"\u4e3b\u52a8\u89e6\u53d1 DeepLink"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u624b\u52a8\u53d1\u9001 DeepLink \u4e8b\u4ef6\uff0c\u8be5\u63a5\u53e3\u5e38\u7528\u4e8e\u5e94\u7528\u5185\u90e8\u5e7f\u544a\u83b7\u5ba2\u63a5\u6536"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"doDeeplink")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"URL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5URL\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn/k4wudMXn"},"https://n.datayi.cn/k4wudMXn"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let ads = Advertising.sharedInstance()\nlet callback = { (params: [AnyHashable : Any]?,\n                  processTime: TimeInterval,\n                  error: Error? ) -> Void in\n}\nads.doDeeplink(by: URL(string: "Your DeepLinkUrl")!, callback: callback)\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790"},"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790"),(0,r.kt)("p",null,"\u5982\u60a8\u9700\u8981\u4f7f\u7528 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790\uff0c\u5728 SDK \u521d\u59cb\u5316\u65f6\u6253\u5f00 ASAEnabled \u5f00\u5173\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let config = AutotrackConfig(accountId: "YourAccountId")\nconfig?.dataCollectionServerHost = "YourServerHost"\nconfig?.dataSourceId = "YourDatasourceId"\nconfig?.urlScheme = "YourURLScheme"\n\n// \u6253\u5f00 ASAEnabled \u5f00\u5173\nconfig?.ASAEnabled = true\n\nAutotracker.start(config!, launchOptions: launchOptions)\n')),(0,r.kt)("p",null,"\u5728 Target -> Build Phases -> Link Binary With Libraries\uff0c\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},"iAd.framework")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"AdServices.framework"),"\uff0c\u5e76\u8bbe\u7f6e AdServices.framework status \u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Optional")),(0,r.kt)(c,{path:"img/ios/adservices_framework",mdxType:"ImageLoader"})),(0,r.kt)(o.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u6a21\u5757\u96c6\u6210-1"},"\u6a21\u5757\u96c6\u6210"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Cocoapods \u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pod 'GrowingAnalytics/Ads'\n")),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pod update")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 AppDelegate.m \u4e2d\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},'#import "GrowingAdvertising.h"'))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e-1"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u76f8\u5173\u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readClipboardEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"YES")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn"},"https://n.datayi.cn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Block")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\nconfiguration.urlScheme = @"YourURLScheme";\n\n// \u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f\nconfiguration.readClipboardEnabled = YES;\n// \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\nconfiguration.deepLinkHost = @"Your DeepLinkHost";\n// \u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570\nconfiguration.deepLinkCallback = ^(NSDictionary * _Nullable params, \n                                   NSTimeInterval processTime, \n                                   NSError * _Nullable error) {\n};\n\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u89e6\u53d1-deeplink-1"},"\u4e3b\u52a8\u89e6\u53d1 DeepLink"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u624b\u52a8\u53d1\u9001 DeepLink \u4e8b\u4ef6\uff0c\u8be5\u63a5\u53e3\u5e38\u7528\u4e8e\u5e94\u7528\u5185\u90e8\u5e7f\u544a\u83b7\u5ba2\u63a5\u6536"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"doDeeplinkByUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSURL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5URL\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn/k4wudMXn"},"https://n.datayi.cn/k4wudMXn"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[GrowingAdvertising sharedInstance] doDeeplinkByUrl:[NSURL URLWithString:@"Your DeepLinkUrl"]\n                                            callback:^(NSDictionary * _Nullable params,\n                                                       NSTimeInterval processTime,\n                                                       NSError * _Nullable error) {\n        \n}];\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790-1"},"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790"),(0,r.kt)("p",null,"\u5982\u60a8\u9700\u8981\u4f7f\u7528 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790\uff0c\u5728 SDK \u521d\u59cb\u5316\u65f6\u6253\u5f00 ASAEnabled \u5f00\u5173\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\nconfiguration.urlScheme = @"YourURLScheme";\n\n// \u6253\u5f00 ASAEnabled \u5f00\u5173\nconfiguration.ASAEnabled = YES;\n\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,r.kt)("p",null,"\u5728 Target -> Build Phases -> Link Binary With Libraries\uff0c\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},"iAd.framework")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"AdServices.framework"),"\uff0c\u5e76\u8bbe\u7f6e AdServices.framework status \u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Optional")),(0,r.kt)(c,{path:"img/ios/adservices_framework",mdxType:"ImageLoader"}))))}f.isMDXComponent=!0}}]);