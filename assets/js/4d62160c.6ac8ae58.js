"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1028],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,g=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6775),u=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=g({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var f=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(d(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={sidebar_position:10,title:"\u6570\u636e\u8f6c\u53d1\u6a21\u5757"},u=void 0,s={unversionedId:"android/modules/adapter module",id:"android/modules/adapter module",title:"\u6570\u636e\u8f6c\u53d1\u6a21\u5757",description:"\u4e3a\u4e86\u65b9\u4fbf\u7ed9\u5df2\u7ecf\u96c6\u6210\u4e86\u5176\u4ed6\u7b2c\u4e09\u65b9\u5382\u5546\u6570\u636e\u91c7\u96c6SDK\u7684\u5ba2\u6237\u5feb\u901f\u8f6c\u5165\u6211\u4eec\u7684\u91c7\u96c6SDK\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u9488\u5bf9\u5404\u4e2a\u7b2c\u4e09\u65b9\u7684\u6570\u636e\u8f6c\u53d1\u670d\u52a1\u6765\u4f5c\u4e3a\u4e00\u4e2a\u8fc7\u5ea6\u7684\u65b9\u6848\u3002",source:"@site/docs/android/modules/adapter module.md",sourceDirName:"android/modules",slug:"/android/modules/adapter module",permalink:"/growingio-sdk-docs/docs/android/modules/adapter module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/adapter module.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u6570\u636e\u8f6c\u53d1\u6a21\u5757"},sidebar:"docSidebar",previous:{title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/apm module"},next:{title:"Flutter \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/flutter module"}},c={},d=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3}],m={toc:d},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7ed9\u5df2\u7ecf\u96c6\u6210\u4e86\u5176\u4ed6\u7b2c\u4e09\u65b9\u5382\u5546\u6570\u636e\u91c7\u96c6SDK\u7684\u5ba2\u6237\u5feb\u901f\u8f6c\u5165\u6211\u4eec\u7684\u91c7\u96c6SDK\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u9488\u5bf9\u5404\u4e2a\u7b2c\u4e09\u65b9\u7684\u6570\u636e\u8f6c\u53d1\u670d\u52a1\u6765\u4f5c\u4e3a\u4e00\u4e2a\u8fc7\u5ea6\u7684\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u652f\u6301 Google Analytics 3 \u548c Firebase Analytics \u4e24\u5bb6\u6570\u636e\u8f6c\u53d1\uff0c\u540e\u7eed\u4f1a\u7ee7\u7eed\u652f\u6301\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9002\u7528\u4e8e\u5e94\u7528\u4e2d\u5df2\u7ecf\u96c6\u6210 GA \u6216\u8005 FA \u5206\u6790SDK\u7684\u9879\u76ee\uff1b\n\u9700\u8981\u6dfb\u52a0 analytics-ga \u6216 analytics-fa \u6a21\u5757\u4f9d\u8d56\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"adapter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u53ea\u9002\u7528\u4e8e\u65e0\u57cb\u70b9SDK",(0,r.kt)("br",null),"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,r.kt)(o.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // \u652f\u6301 Firebase Analytics\n  implementation 'com.growingio.android:analytics-fa:4.0.0'\n\n  // \u652f\u6301 Google Analytics 3\n  implementation 'com.growingio.android:analytics-ga:4.0.0'\n}\n"))),(0,r.kt)(l.Z,{value:"bom",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:4.0.0')\n\n  implementation 'com.growingio.android:analytics-fa'\n  implementation 'com.growingio.android:analytics-ga'\n}\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6570\u636e\u8f6c\u53d1\u6a21\u5757\u4e0d\u4f1a\u968f\u7740SDK\u7248\u672c\u5347\u7ea7\uff0c\u53ea\u6709\u56fa\u5b9a\u7684\u7248\u672c\u53f7 ==4.0.0\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)(o.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u5c06\u6a21\u5757\u6ce8\u518c\u5230SDK\u4e2d \nGrowingAutotracker.startWithConfiguration(this,\n        new CdpAutotrackConfiguration("accountId", "urlScheme")\n        // ...\n        .addPreloadComponent(new GoogleAnalyticsLibraryModule())) //Google Analytics 3\n        // \u6216\u8005\n        .addPreloadComponent(new FirebaseAnalyticsLibraryModule())) //Firebase Analytics\n\n);\n'))),(0,r.kt)(l.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u5c06\u6a21\u5757\u6ce8\u518c\u5230SDK\u4e2d \nGrowingTracker.startWithConfiguration(this,\n        new CdpTrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(new GoogleAnalyticsLibraryModule())) //Google Analytics 3\n        // \u6216\u8005\n        .addPreloadComponent(new FirebaseAnalyticsLibraryModule())) //Firebase Analytics\n);\n')))),(0,r.kt)("p",null,"\u540c\u65f6\u9700\u8981\u5728\u65e0\u57cb\u70b9\u63d2\u4ef6\u914d\u7f6e\u91cc\u542f\u7528\u5bf9\u5e94\u7684\u8f6c\u53d1\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"growingAutotracker {\n    analyticsAdapter {\n        firebaseAnalytics true //Firebase Analytics\n        googleAnalytics true //Google Analytics 3\n    }\n}\n")))}g.isMDXComponent=!0}}]);