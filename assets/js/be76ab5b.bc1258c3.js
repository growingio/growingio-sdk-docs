"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6775),d=n(1980),p=n(7392),u=n(12);function s(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,p]=g({queryString:n,groupId:a}),[s,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=d??s;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var f=n(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:d,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(s(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const l={sidebar_position:5,title:"AGP \u63d2\u4ef6\u8bf4\u660e"},i=void 0,o={unversionedId:"android/AGP7",id:"android/AGP7",title:"AGP \u63d2\u4ef6\u8bf4\u660e",description:"Android Gradle Plugin \u9ad8\u7248\u672c\u8bf4\u660e\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5",source:"@site/docs/android/AGP7.md",sourceDirName:"android",slug:"/android/AGP7",permalink:"/growingio-sdk-docs/docs/android/AGP7",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/AGP7.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"AGP \u63d2\u4ef6\u8bf4\u660e"},sidebar:"docSidebar",previous:{title:"Flutter \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/flutter module"},next:{title:"\u4f9d\u8d56\u6e05\u5355BoM",permalink:"/growingio-sdk-docs/docs/android/PlatformBom"}},d={},p=[{value:"\u5982\u4f55\u96c6\u6210",id:"\u5982\u4f55\u96c6\u6210",level:2},{value:"\u6dfb\u52a0 Maven \u4ed3\u5e93",id:"\u6dfb\u52a0-maven-\u4ed3\u5e93",level:3},{value:"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84",id:"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84",level:3},{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e",id:"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e",level:2},{value:"Giokit \u914d\u7f6e",id:"giokit-\u914d\u7f6e",level:3}],u={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Android Gradle Plugin \u9ad8\u7248\u672c\u8bf4\u660e\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Growingio Sdk Gradle Plugin 4.0 \u5177\u6709\u4ee5\u4e0b\u7684\u529f\u80fd\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d AGP 8.0 Instrumentation API\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u517c\u5bb9 AGP4.2\u53ca\u5176\u66f4\u65e9\u7248\u672c\u7684 Transform API\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u63d2\u4ef6\u4e2d\u53ef\u4ee5\u914d\u7f6e\u96c6\u6210Giokit;")),(0,r.kt)("admonition",{title:"\u5f00\u6e90\u4fe1\u606f",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Github \u9879\u76ee\u5730\u5740\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-plugin"},"GrowingIO Android SDK Plugin"),"\uff0c\u6b22\u8fce star, fork\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u96c6\u6210"},"\u5982\u4f55\u96c6\u6210"),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ea\u8bf4\u660e\u5728 Android Gradle\u63d2\u4ef6\u4e3a7.0\u53ca\u4ee5\u4e0a\u7248\u672c\u65f6\u7684\u96c6\u6210\u65b9\u5f0f\uff0c\u82e5\u662fAGP7\u4ee5\u4e0b\u5219\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android/Introduce#%E6%B7%BB%E5%8A%A0%E6%8F%92%E4%BB%B6"},"\u63d2\u4ef6\u96c6\u6210")," \u96c6\u6210\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"\u6dfb\u52a0-maven-\u4ed3\u5e93"},"\u6dfb\u52a0 Maven \u4ed3\u5e93"),(0,r.kt)("p",null,"\u9700\u8981\u5728 project \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0Maven\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// \u5f53AGP\u7248\u672c\u4e3a7.0\u53ca\u4ee5\u4e0a\u6dfb\u52a0\npluginManagement {\n    repositories {\n        // \u6dfb\u52a0gradle\u4ed3\u5e93\n        gradlePluginPortal()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n        google()\n      \n    }\n}\ndependencyResolutionManagement {\n    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)\n    repositories {\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n        mavenCentral()\n        google()\n    }\n}\n')),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84"},"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84"),(0,r.kt)("p",null,"\u9700\u8981\u5728 project \u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u4e0b\u6dfb\u52a0 Growingio \u63d2\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groony"},"plugins {\n    id 'com.android.application' version '7.2.0' apply false\n\n    \xb7\xb7\xb7\n    // \u6dfb\u52a0GrowingIO \u65e0\u57cb\u70b9 SDK \u63d2\u4ef6\n    id 'com.growingio.android.autotracker' version '4.0.0' apply false\n}\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u63d2\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728 app \u7ea7\u522b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"com.growingio.android.autotracker")," \u63d2\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n    id 'com.android.application'\n    id 'org.jetbrains.kotlin.android'\n    // \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9 SDK \u63d2\u4ef6\n    id 'com.growingio.android.autotracker'\n}\n...\n")),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e"},"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u63d2\u4ef6\u5728\u4e0d\u540c\u9879\u76ee\u73af\u5883\u4e0b\u80fd\u591f\u6b63\u5e38\u4f7f\u7528\uff0cGrowingio \u63d2\u4ef6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u914d\u7f6e\u3002\uff08\u975e\u5fc5\u9700\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4e0d\u7528\u6dfb\u52a0\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Extension"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7f16\u8bd1\u65f6\u662f\u5426\u8f93\u51falog\u65e5\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"skipDependencyCheck"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7f16\u8bd1\u65f6\u68c0\u6d4b\u5f53\u524dproject\u662f\u5426\u914d\u7f6eSDK\u4f9d\u8d56\uff08\u6a21\u5757\u4e2d\u4f9d\u8d56\u65f6\u914d\u7f6e\u4e3atrue\uff09"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"includePackages"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Array<String",">")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u989d\u5916\u5305\u542b\u7f16\u8bd1\u7684\u5305\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"excludePackages"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Array<String",">")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8df3\u8fc7\u7f16\u8bd1\u7684\u5305\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"giokit"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"GiokitExtension")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u7528\u6765\u914d\u7f6e\u662f\u5426\u5f15\u5165 Giokit"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u914d\u7f6e\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groony"},'plugins {\n    \xb7\xb7\xb7\n    // \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9 SDK \u63d2\u4ef6\n    id \'com.growingio.android.autotracker\'\n}\n\ngrowingAutotracker {\n    logEnabled false\n    includePackages "com.growingio.xxx1","com.growingio.xxx2"\n    excludePackages "com.cpacm.xxx1"\n    giokit {\n        //...\n    }\n}\n\n\ndependencies {\n  \xb7\xb7\xb7\n}\n')),(0,r.kt)("h3",{id:"giokit-\u914d\u7f6e"},"Giokit \u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Extension"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u6dfb\u52a0 Giokit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"trackerFinderEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u627eApp\u4e0b\u8c03\u7528App\u57cb\u70b9\u63a5\u53e3\u7684\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"trackerFinderDomain"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Array<String",">")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a\u5e94\u7528 ApplicationId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u627e\u7684\u8303\u56f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"trackerCalledMethod"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Array<String",">")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3aSDK\u76f8\u5e94\u63a5\u53e3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u67e5\u627e\u7684\u7c7b\u548c\u65b9\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"autoAttachEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"GioKit \u662f\u5426\u81ea\u52a8\u4f9d\u9644\u5728Activity\u4e0a\uff0c\u82e5\u8bbe\u4e3afalse\uff0c\u9700\u8981\u81ea\u884c\u8c03\u7528api\u6253\u5f00GioKit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"releaseEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u8bf7\u4e0d\u8981\u6253\u5f00"),"\uff0c\u5426\u5219\u4f1a\u5728 Release \u6253\u5305\u4e2d\u5305\u542b GioKit \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"autoInstallVersion"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2.0.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u52a8\u4f9d\u8d56\u7684GioKit\u7248\u672c\u53f7")))),(0,r.kt)("p",null,"\u73b0\u5728SDK\u4e0d\u7528\u518d\u989d\u5916\u5f15\u5165 Giokit\uff0c\u53ea\u9700\u8981\u5728\u63d2\u4ef6\u4e2d\u5f00\u542f\u5373\u53ef\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'growingAutotracker {\n    logEnabled true\n    giokit {\n        enabled false  //\u5f00\u542f\u5219\u53ef\u5f15\u5165 GioKit\n        trackerFinderEnabled true\n        trackerFinderDomain "com.xxxx.yourapplication"\n        trackerCalledMethod "com.growingio.android.tracker#trackCumtomEvent"\n        autoAttachEnabled true\n        releaseEnabled false\n        autoInstallVersion "2.0.0"\n    }\n}\n')))}c.isMDXComponent=!0}}]);