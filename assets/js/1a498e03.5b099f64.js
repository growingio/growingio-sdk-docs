"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,g=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),d=a(7094),p=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:a,block:o,defaultValue:u,values:s,groupId:g,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=s??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,d.U)(),[T,C]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==T&&N.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,a=w.indexOf(t),n=N[a].value;n!==T&&(O(t),C(n),null!=g&&h(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function s(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},8984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={sidebar_position:9,title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757"},d=void 0,p={unversionedId:"android/modules/apm module",id:"android/modules/apm module",title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",description:"APM (Application Performance Management) \u5373\u5e94\u7528\u6027\u80fd\u7ba1\u7406\uff0c\u5c5e\u4e8eIT\u8fd0\u7ef4\u7ba1\u7406\uff08ITOM)\u8303\u7574\u3002\u4e3b\u8981\u662f\u9488\u5bf9\u4f01\u4e1a\u5173\u952e\u4e1a\u52a1\u7684IT\u5e94\u7528\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u7684\u76d1\u6d4b\u3001\u4f18\u5316\uff0c\u63d0\u9ad8\u4f01\u4e1aIT\u5e94\u7528\u7684\u53ef\u9760\u6027\u548c\u8d28\u91cf\uff0c\u4fdd\u8bc1\u7528\u6237\u5f97\u5230\u826f\u597d\u7684\u670d\u52a1\uff0c\u964d\u4f4eIT\u603b\u62e5\u6709\u6210\u672c(TCO)\u3002",source:"@site/docs/android/modules/apm module.md",sourceDirName:"android/modules",slug:"/android/modules/apm module",permalink:"/growingio-sdk-docs/docs/android/modules/apm module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/apm module.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"\u5e7f\u544a\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/advert module"},next:{title:"\u6570\u636e\u8f6c\u53d1\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/adapter module"}},m={},c=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"APM\u6027\u80fd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"apm\u6027\u80fd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"APM (Application Performance Management) \u5373\u5e94\u7528\u6027\u80fd\u7ba1\u7406\uff0c\u5c5e\u4e8eIT\u8fd0\u7ef4\u7ba1\u7406\uff08ITOM)\u8303\u7574\u3002\u4e3b\u8981\u662f\u9488\u5bf9\u4f01\u4e1a\u5173\u952e\u4e1a\u52a1\u7684IT\u5e94\u7528\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u7684\u76d1\u6d4b\u3001\u4f18\u5316\uff0c\u63d0\u9ad8\u4f01\u4e1aIT\u5e94\u7528\u7684\u53ef\u9760\u6027\u548c\u8d28\u91cf\uff0c\u4fdd\u8bc1\u7528\u6237\u5f97\u5230\u826f\u597d\u7684\u670d\u52a1\uff0c\u964d\u4f4eIT\u603b\u62e5\u6709\u6210\u672c(TCO)\u3002"),(0,r.kt)("p",null,"\u5e94\u7528\u6027\u80fd\u5206\u6790\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u9488\u5bf9\u5e94\u7528\u670d\u52a1\u7684\u54c1\u8d28\u3001\u6027\u80fd\u4ee5\u53ca\u81ea\u5b9a\u4e49\u57cb\u70b9\u7684 APM \u670d\u52a1\u3002\u57fa\u4e8e\u57cb\u70b9\u4e8b\u4ef6\u5b9a\u4e49\u53ca\u6d77\u91cf\u6570\u636e\u7684\u805a\u5408\u5206\u6790\uff0cGIO\u53ef\u5e2e\u52a9\u5ba2\u6237\u53d1\u73b0\u591a\u7c7b\u5f02\u5e38\u95ee\u9898\uff0c\u5e76\u53ca\u65f6\u62a5\u8b66\uff0c\u505a\u5206\u914d\u5904\u7406\uff0c\u540c\u65f6\u5e73\u53f0\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5f52\u56e0\u80fd\u529b\uff0c\u5305\u62ec\u4e14\u4e0d\u9650\u4e8e\u5f02\u5e38\u5206\u6790\u3001\u4e8b\u4ef6\u5206\u6790\u3001\u81ea\u5b9a\u4e49\u4e0a\u62a5\u3001\u65e5\u5fd7\u67e5\u8be2\u7b49\uff0c\u7ed3\u5408\u7075\u6d3b\u7684\u62a5\u8868\u80fd\u529b\u53ef\u4e86\u89e3\u5404\u7c7b\u6307\u6807\u7684\u8d8b\u52bf\u53d8\u5316\u3002"),(0,r.kt)("p",null,"GrowingIO \u6027\u80fd\u76d1\u63a7\u6a21\u5757\u76ee\u524d\u63d0\u4f9b\u4e86 App \u5d29\u6e83\u5206\u6790\uff0c\u5e94\u7528\u542f\u52a8\u65f6\u95f4\uff0c\u9875\u9762\u542f\u52a8\u65f6\u95f4\u5206\u6790\u7684\u529f\u80fd\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u6d4b\u8bd5\u4e2d\uff0c\u9884\u8ba1\u5c06\u5728SDK 3.4.5 \u7248\u672c\u4e0a\u7ebf\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"EventApm")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"Void")),(0,r.kt)("td",{parentName:"tr",align:"left"},">=3.4.5")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,r.kt)(l.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:apm:3.4.5'\n}\n"))),(0,r.kt)(o.Z,{value:"bom",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.4.5')\n\n  implementation 'com.growingio.android:apm'\n}\n")))),(0,r.kt)("h3",{id:"apm\u6027\u80fd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"APM\u6027\u80fd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setActivityLifecycleTracing")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u76d1\u6d4b ",(0,r.kt)("inlineCode",{parentName:"td"},"Activity")," \u754c\u9762\u7684\u542f\u52a8\u65f6\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setFragmentXLifecycleTracing")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u76d1\u6d4b ",(0,r.kt)("inlineCode",{parentName:"td"},"androidx.fragment.app.Fragment")," \u754c\u9762\u7684\u542f\u52a8\u65f6\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setFragmentSupportLifecycleTracing")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u76d1\u6d4b ",(0,r.kt)("inlineCode",{parentName:"td"},"android.support.v4.app.Fragment")," \u754c\u9762\u7684\u542f\u52a8\u65f6\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setFragmentSystemLifecycleTracing")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u76d1\u6d4b ",(0,r.kt)("inlineCode",{parentName:"td"},"android.app.Fragment")," \u754c\u9762\u7684\u542f\u52a8\u65f6\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setUncaughtException")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u6355\u83b7 Java \u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setPrintUncaughtException")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5728log\u4e2d\u6253\u5370\u6355\u83b7\u7684 Java \u5f02\u5e38")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ApmConfig config = new ApmConfig();\nconfig.setActivityLifecycleTracing(true)\n        .setFragmentXLifecycleTracing(true)\n        .setFragmentSupportLifecycleTracing(false)\n        .setFragmentSystemLifecycleTracing(false)\n        .setUncaughtException(true)\n        .setPrintUncaughtException(false);\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)(l.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u5c06 APM \u6a21\u5757\u4e0e\u914d\u7f6e\u6ce8\u518c\u5230SDK\u4e2d \nGrowingAutotracker.startWithConfiguration(this,\n        new CdpAutotrackConfiguration("accountId", "urlScheme")\n        // ...\n        .addPreloadComponent(new ApmLibraryGioModule(), config)\n\n);\n'))),(0,r.kt)(o.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u5c06 APM \u6a21\u5757\u4e0e\u914d\u7f6e\u6ce8\u518c\u5230SDK\u4e2d \nGrowingTracker.startWithConfiguration(this,\n        new CdpTrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(new ApmLibraryGioModule(), config)\n);\n')))),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\u4f1a\u901a\u8fc7 Custom \u4e8b\u4ef6\u53d1\u9001\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "dataSourceId": "939c0b26233d3ed1",\n    \u2551   "eventType": "CUSTOM",\n    \u2551   // ...\n    \u2551   "attributes": {\n    \u2551     "page_load_duration": "60",\n    \u2551     "warm_reboot_time": "60",\n    \u2551     "page_name": "MainActivity",\n    \u2551     "warm_reboot": "true"\n    \u2551   },\n    \u2551   "eventName": "AppLaunchTime"\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')))}s.isMDXComponent=!0}}]);