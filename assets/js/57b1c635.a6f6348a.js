"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,k=p["".concat(d,".").concat(c)]||p[c]||s[c]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6775),d=a(1980),u=a(7392),m=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function s(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=s(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,u]=k({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=d??p;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:i,selectValue:d,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),s=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==i&&(p(t),d(n))},c=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:s},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},8546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:11,title:"A/B\u5206\u7ec4\u5b9e\u9a8c"},d=void 0,u={unversionedId:"android/modules/abtest module",id:"android/modules/abtest module",title:"A/B\u5206\u7ec4\u5b9e\u9a8c",description:"\u5206\u6790\u4e91A/B\u5b9e\u9a8c\u4ea7\u54c1\u80fd\u529b\uff0cSDK\u4fa7\u914d\u5408\u63d0\u4f9bA/B Test SDK\u3002\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fdb\u884cA/B\u6d4b\u8bd5\uff0c\u9a8c\u8bc1\u4e0d\u540c\u7248\u672c\u7684\u529f\u80fd\u6548\u679c\u3002",source:"@site/docs/android/modules/abtest module.md",sourceDirName:"android/modules",slug:"/android/modules/abtest module",permalink:"/growingio-sdk-docs/docs/android/modules/abtest module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/abtest module.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"A/B\u5206\u7ec4\u5b9e\u9a8c"},sidebar:"docSidebar",previous:{title:"Flutter \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/flutter module"},next:{title:"\u7cfb\u7edf\u4fe1\u606f\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/platform module"}},m={},p=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u901a\u8fc7\u63a5\u53e3\u83b7\u53d6 A/B \u5206\u7ec4\u5b9e\u9a8c",id:"\u901a\u8fc7\u63a5\u53e3\u83b7\u53d6-ab-\u5206\u7ec4\u5b9e\u9a8c",level:3},{value:"ABTestCallback \u56de\u8c03",id:"abtestcallback-\u56de\u8c03",level:3}],s=(c="ImageLoader",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const k={toc:p},g="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5206\u6790\u4e91A/B\u5b9e\u9a8c\u4ea7\u54c1\u80fd\u529b\uff0cSDK\u4fa7\u914d\u5408\u63d0\u4f9bA/B Test SDK\u3002\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fdb\u884cA/B\u6d4b\u8bd5\uff0c\u9a8c\u8bc1\u4e0d\u540c\u7248\u672c\u7684\u529f\u80fd\u6548\u679c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"abtest"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"ABTest")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"ABExperiment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,r.kt)(l.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:abtest:4.0.0'\n}\n"))),(0,r.kt)(o.Z,{value:"bom",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:4.0.0')\n\n  implementation 'com.growingio.android:abtest'\n}\n")))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"A/B\u5206\u7ec4\u5b9e\u9a8c\u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u8bbe\u7f6e\u6a21\u5757\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setAbTestServerHost"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"https://ab.growingio.com")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6eAB\u5206\u6d41\u670d\u52a1\u8bf7\u6c42\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setAbTestExpired"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"long")," , ",(0,r.kt)("em",{parentName:"td"},"TimeUnit")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"5\u5206")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7528\u4e8e\u8bbe\u7f6e\u5b9e\u9a8c\u7ed3\u679c\u7684\u7f13\u5b58\u65f6\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setAbTestTimeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"long")," , ",(0,r.kt)("em",{parentName:"td"},"TimeUnit")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"5\u79d2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6eAB\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ABTestConfig config = ABTestConfig();\nconfig.setAbTestServerHost("https://ab.growingio.com");\nconfig.setAbTestExpired(5, TimeUnit.MINUTES);\nconfig.setAbTestTimeout(5,TimeUnit.SECONDS);\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)(l.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6, \u8c03\u7528\u65b9\u6cd5\u6ce8\u518cA/B\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n                new AutotrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new ABTestLibraryGioModule(), config));\n'))),(0,r.kt)(o.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u57cb\u70b9SDK\u65f6, \u8c03\u7528\u65b9\u6cd5\u6ce8\u518cA/B\u6a21\u5757\nGrowingTracker.startWithConfiguration(this,\n                new TrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new ABTestLibraryGioModule(), config));\n')))),(0,r.kt)("h3",{id:"\u901a\u8fc7\u63a5\u53e3\u83b7\u53d6-ab-\u5206\u7ec4\u5b9e\u9a8c"},"\u901a\u8fc7\u63a5\u53e3\u83b7\u53d6 A/B \u5206\u7ec4\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u901a\u8fc7\u4f20\u5165\u5b9e\u9a8c\u5c42Id\u83b7\u53d6\u5177\u4f53\u7684A/B\u5206\u7ec4\u5b9e\u9a8c\u6570\u636e\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"getAbTest")," \u8be5\u63a5\u53e3\u9ed8\u8ba4\u4f18\u5148\u83b7\u53d6\u5728\u7f13\u5b58\u671f\u95f4\u7684\u5b9e\u9a8c\u7ec4\u6570\u636e\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"getAbTestImmediately")," \u8be5\u63a5\u53e3\u4f1a\u7acb\u5373\u5411\u670d\u52a1\u7aef\u8bf7\u6c42\u5b9e\u9a8c\u7ec4\u6570\u636e\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"layerId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9e\u9a8c\u5c42ID,\u7528\u4e8e\u5411\u670d\u52a1\u7aef\u8bf7\u6c42\u5b9e\u9a8c\u7ec4\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"abTestCallback"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"ABTestCallback")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u56de\u8c03\uff0c\u5b9e\u9a8c\u7ec4\u6570\u636e\u5c06\u4f1a\u5728\u8be5\u56de\u8c03\u4e2d\u8fd4\u56de")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"GrowingAutotracker.get().getAbTest(layerId,\n    object : ABTestCallback {\n        override fun onABExperimentReceived(experiment: ABExperiment, dataType: Int) {\n            \n        }\n\n        override fun onABExperimentFailed(error: Exception) {\n        }\n    },\n)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"GrowingTracker.get().getAbTest(layerId,\n    object : ABTestCallback {\n        override fun onABExperimentReceived(experiment: ABExperiment, dataType: Int) {\n            \n        }\n\n        override fun onABExperimentFailed(error: Exception) {\n        }\n    },\n)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u5982\u4f55\u83b7\u53d6layerId(\u5b9e\u9a8c\u5c42ID)"),(0,r.kt)(s,{path:"img/common/get_abtesting_layer_id",mdxType:"ImageLoader"})),(0,r.kt)("h3",{id:"abtestcallback-\u56de\u8c03"},"ABTestCallback \u56de\u8c03"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"onABExperimentReceived(ABExperiment experiment, int dataType)")," \u5b9e\u9a8c\u8fd4\u56de\u6570\u636e\u548c\u6570\u636e\u6765\u6e90\u7684\u56de\u8c03\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"onABExperimentFailed(Exception error)")," \u83b7\u53d6\u5b9e\u9a8c\u6570\u636e\u5931\u8d25\u7684\u56de\u8c03\u65b9\u6cd5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ABExperiment")," \u4e3a\u5b9e\u9a8c\u8fd4\u56de\u6570\u636e\uff0c\u5404\u4e2a\u5c5e\u6027\u503c\u5982\u4e0b\u8868\u6240\u793a\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"layerId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u51fa\u8bf7\u6c42\u7684\u5b9e\u9a8c\u5c42ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"strategyId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u4e1a\u52a1\u547d\u4e2d\u7684\u5206\u7ec4ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"experimentId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u4e1a\u52a1\u547d\u4e2d\u7684\u5b9e\u9a8cID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variables"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Map<String, String>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9e\u9a8c\u6570\u636e\u53d8\u91cf")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"dataType")," \u8868\u793a\u6570\u636e\u6765\u6e90\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ABTEST_CACHE = 0")," \u8868\u793a\u5b9e\u9a8c\u6570\u636e\u6765\u6e90\u81ea\u672a\u8fc7\u671f\u7684\u7f13\u5b58\u4e2d\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ABTEST_HTTP = 1")," \u8868\u793a\u5b9e\u9a8c\u6570\u636e\u6765\u6e90\u81ea\u6700\u65b0\u7684\u670d\u52a1\u7aef\u8bf7\u6c42\u8fd4\u56de\u6570\u636e\u4e2d\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ABTEST_EXPIRED = 2")," \u8868\u793a\u5b9e\u9a8c\u6570\u636e\u6765\u6e90\u81ea\u8fc7\u671f\u7684\u7f13\u5b58\u4e2d\uff08\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u66f4\u65b0\u5931\u8d25\uff0c\u8fc7\u671f\u6570\u636e\u4f7f\u7528\u4e00\u6b21\u540e\u4f1a\u81ea\u52a8\u6e05\u9664\uff09\u3002")))}b.isMDXComponent=!0}}]);