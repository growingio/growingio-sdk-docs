"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,v=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(v,l(l({ref:t},s),{},{components:a})):n.createElement(v,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),d=a(7094),u=a(2466);const s="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:m,groupId:v,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,d.U)(),[N,T]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=y[v];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==N&&(E(t),T(n),null!=v&&w(v,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:C},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},2127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_position:8,title:"\u5e7f\u544a\u6a21\u5757"},d=void 0,u={unversionedId:"android/modules/advert module",id:"android/modules/advert module",title:"\u5e7f\u544a\u6a21\u5757",description:"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9bApp\u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002",source:"@site/docs/android/modules/advert module.md",sourceDirName:"android/modules",slug:"/android/modules/advert module",permalink:"/growingio-sdk-docs/docs/android/modules/advert module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/advert module.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u5e7f\u544a\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"Debugger \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/debugger module"},next:{title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/apm module"}},s={},c=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u53d1\u9001\u6fc0\u6d3b\u4e8b\u4ef6",id:"\u53d1\u9001\u6fc0\u6d3b\u4e8b\u4ef6",level:4}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9bApp\u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6df1\u5ea6\u94fe\u63a5\u529f\u80fd\uff0c\u5c06\u5728SDK 3.4.4 \u7248\u672c\u4e0a\u7ebf\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"advert"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"Activate")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"AdvertResult")),(0,r.kt)("td",{parentName:"tr",align:"left"},">=3.4.3")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,r.kt)(o.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:advert:3.4.4'\n}\n"))),(0,r.kt)(l.Z,{value:"bom",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.4.4')\n\n  implementation 'com.growingio.android:advert'\n}\n")))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)(o.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6, \u8c03\u7528\u65b9\u6cd5\u6ce8\u518c\u5e7f\u544a\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n                new CdpAutotrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new AdvertLibraryGioModule()));\n'))),(0,r.kt)(l.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u57cb\u70b9SDK\u65f6, \u8c03\u7528\u65b9\u6cd5\u6ce8\u518c\u5e7f\u544a\u6a21\u5757\nGrowingTracker.startWithConfiguration(this,\n                new CdpTrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new AdvertLibraryGioModule()));\n')))),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h4",{id:"\u53d1\u9001\u6fc0\u6d3b\u4e8b\u4ef6"},"\u53d1\u9001\u6fc0\u6d3b\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5f53\u5e94\u7528\u5b89\u88c5\u540e\u7b2c\u4e00\u6b21\u6253\u5f00\u5c06\u4f1a\u53d1\u9001\u6fc0\u6d3b\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "dataSourceId": "939c0b26233d3ed1",\n    \u2551   "eventType": "ACTIVATE",\n    \u2551   // ....\n    \u2551   "sdkVersion": "3.4.3",\n    \u2551   "attributes": {\n    \u2551     "userAgent": "Dalvik/2.1.0 (Linux; U; Android 11; M2007J17C Build/RKQ1.200826.002)"\n    \u2551   },\n    \u2551   "oaid": "6052643e41307986",\n    \u2551   "androidId": "14410697e822c2b0"\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')))}m.isMDXComponent=!0}}]);