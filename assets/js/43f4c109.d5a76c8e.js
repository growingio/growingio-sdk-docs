"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),p=n(7094),d=n(2466);const m="tabList__CuJ",k="tabItem_LNqP";function s(e){var t;const{lazy:n,block:l,defaultValue:s,values:u,groupId:c,className:g}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,p.U)(),[w,A]=(0,r.useState)(v),D=[],{blockElementScrollPositionUntilNextRender:L}=(0,d.o5)();if(null!=c){const e=y[c];null!=e&&e!==w&&f.some((t=>t.value===e))&&A(e)}const E=e=>{const t=e.currentTarget,n=D.indexOf(t),a=f[n].value;a!==w&&(L(t),A(a),null!=c&&b(c,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>D.push(e),onKeyDown:C,onClick:E},l,{className:(0,i.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},2127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:8,title:"\u5e7f\u544a\u6a21\u5757"},p=void 0,d={unversionedId:"android/modules/advert module",id:"android/modules/advert module",title:"\u5e7f\u544a\u6a21\u5757",description:"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5(DeepLink)\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9bApp\u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002",source:"@site/docs/android/modules/advert module.md",sourceDirName:"android/modules",slug:"/android/modules/advert module",permalink:"/growingio-sdk-docs/docs/android/modules/advert module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/advert module.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u5e7f\u544a\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"Debugger \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/debugger module"},next:{title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/apm module"}},m={},k=[{value:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e",id:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e",level:3},{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u4e3b\u52a8\u8c03\u7528DeepLink\u63a5\u53e3",id:"\u4e3b\u52a8\u8c03\u7528deeplink\u63a5\u53e3",level:3},{value:"\u9a8c\u8bc1\u60a8\u7684 App Links",id:"\u9a8c\u8bc1\u60a8\u7684-app-links",level:3},{value:"\u9a8c\u8bc1 Intent Filter \u914d\u7f6e",id:"\u9a8c\u8bc1-intent-filter-\u914d\u7f6e",level:4},{value:"\u6d4b\u8bd5 App Links \u5524\u8d77\u65b9\u5f0f",id:"\u6d4b\u8bd5-app-links-\u5524\u8d77\u65b9\u5f0f",level:4},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:4},{value:"\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d",id:"\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d",level:3}],s=(u="ImageLoader",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:k};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5(DeepLink)\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9bApp\u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002\n\u5728\u6df1\u5ea6\u94fe\u63a5\u6280\u672f\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App \u5e76\u8df3\u8f6c\u81f3\u6307\u5b9a\u9875\u9762\uff0c\u540c\u65f6\u6839\u636e\u6761\u4ef6\u5224\u65ad\u7528\u6237\u8df3\u8f6c\u8def\u5f84\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u5b89\u88c5 App \u65f6\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App\uff0c\u5f53\u7528\u6237\u672a\u5b89\u88c5 App \u65f6\u4f1a\u5f15\u5bfc\u7528\u6237\u4e0b\u8f7d App\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5e73\u53f0\u7248\u672c>=4.0\u652f\u6301\uff0c\u4ea7\u54c1\u4f7f\u7528\u6587\u6863\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/acquisition-analytics/acquisition-tracing/tracking-deeplink"},"\u6df1\u5ea6\u94fe\u63a5"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"\u83b7\u5ba2\u5206\u6790 -> \u4ea7\u54c1\u914d\u7f6e -> \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"),"\uff0c\u8fdb\u5165\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u9875\u9762"),(0,r.kt)(s,{path:"img/common/product_config_deeplink",mdxType:"ImageLoader"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u627e\u5230\u9700\u8981\u914d\u7f6e\u7684 Android \u5e94\u7528\uff0c\u70b9\u51fb\u66f4\u591a\u4fe1\u606f\uff0c\u67e5\u770b\u5f53\u524d\u5e94\u7528\u7684\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb App Links \u7f16\u8f91\u6309\u94ae\uff0c\u83b7\u53d6\u5e94\u7528 keyStore \u7b7e\u540d\u5e76\u586b\u5165\u8868\u5355\u4e2d"),(0,r.kt)(s,{path:"img/android/config_app_links",mdxType:"ImageLoader"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5982\u4f55\u83b7\u53d6\u5e94\u7528 keyStore \u7b7e\u540d"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u547d\u4ee4\u884c\u8fdb\u5165\u60a8\u7684\u8bc1\u4e66\u76ee\u5f55\uff0c\u4e00\u822c\u7b7e\u540d\u5206\u4e3a Debug keyStore \u548c Release keyStore\uff0c\u5f00\u53d1\u671f\u95f4\u5efa\u8bae\u5148\u914d\u7f6e\u4e3a Debug keyStore\uff0c\u4e0a\u7ebf\u524d",(0,r.kt)("strong",{parentName:"li"},"\u4e00\u5b9a\u8981\u66f4\u65b0\u4e3a Release keyStore")),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -list -v -keystore release.keystore\n"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u590d\u5236\u4ee3\u7801\u7247\u6bb5")," \u6309\u94ae\uff0c\u8fdb\u5165\u60a8\u7684\u5e94\u7528 manifest.xml \u6587\u4ef6\u4e2d\uff0c\u627e\u5230\u5165\u53e3 Activity \u5e76\u7c98\u8d34")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u793a\u4f8b\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n    android:name=".LauncherActivity"\n    android:launchMode="singleTop"\n    android:theme="@style/AppTheme">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n\n    \x3c!-- GrowingIO \u96c6\u6210\u914d\u7f6e\uff0c\u4f7f\u7528\u5708\u9009\u548c Debugger \u7b49\u529f\u80fd\u7528\u4f5c\u5524\u9192 APP--\x3e\n    <intent-filter>\n        <data android:scheme="growing.\u60a8\u7684URL Scheme" />\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n    </intent-filter>\n\n    \x3c!-- GrowingIO App Links \u914d\u7f6e\uff0c\u5e7f\u544a\u76d1\u6d4b\u7528\u9014\uff0cAPP \u7528\u6237\u70b9\u51fb\u5e7f\u544a\u76d1\u6d4b\u77ed\u94fe\u76f4\u63a5\u8df3\u8f6c APP--\x3e\n    <intent-filter android:autoVerify="true">\n      <action android:name="android.intent.action.VIEW" />\n      <category android:name="android.intent.category.DEFAULT" />\n      <category android:name="android.intent.category.BROWSABLE" />\n      <data\n        android:host="Your DeepLinkHost"\n        android:pathPattern="/k4rud.*"\n        android:scheme="https" />\n    </intent-filter>\n\n\n    <intent-filter android:autoVerify="true">\n      <action android:name="android.intent.action.VIEW" />\n      <category android:name="android.intent.category.DEFAULT" />\n      <category android:name="android.intent.category.BROWSABLE" />\n      <data\n        android:host="Your DeepLinkHost"\n        android:pathPattern="/k4r.*id.*"\n        android:scheme="https" />\n    </intent-filter>\n\n\n    <intent-filter android:autoVerify="true">\n      <action android:name="android.intent.action.VIEW" />\n      <category android:name="android.intent.category.DEFAULT" />\n      <category android:name="android.intent.category.BROWSABLE" />\n      <data\n        android:host="Your DeepLinkHost"\n        android:pathPattern="/k4r.*td.*"\n        android:scheme="https" />\n    </intent-filter>\n    \x3c!-- GrowingIO App Links \u914d\u7f6e\uff0c\u5e7f\u544a\u76d1\u6d4b\u7528\u9014\uff0cAPP \u7528\u6237\u70b9\u51fb\u5e7f\u544a\u76d1\u6d4b\u77ed\u94fe\u76f4\u63a5\u8df3\u8f6c APP--\x3e\n    \n</activity>\n'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GrowingIO \u6682\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49 App Links \u7684 host\uff0c\u8bf7\u4e0d\u8981\u4fee\u6539\u590d\u5236\u7684\u4ee3\u7801\u5757\u4e2d\u7684 host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5efa\u8bae\u4e0d\u8981\u5c1d\u8bd5\u4fee\u6539\u6216\u8005\u5408\u5e76 GrowingIO \u6240\u9700\u7684 Intent Filter\u3002 See: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking#adding-filters"},"Google \u5b98\u65b9\u89e3\u91ca"))))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4fdd\u5b58\uff0c\u786e\u8ba4\u4fee\u6539")),(0,r.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"advert"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"Activate")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"AdvertResult")),(0,r.kt)("td",{parentName:"tr",align:"left"},">=3.4.6")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,r.kt)(i.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:advert:3.4.7'\n}\n"))),(0,r.kt)(l.Z,{value:"bom",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.4.7')\n\n  implementation 'com.growingio.android:advert'\n}\n")))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"Advert \u5e7f\u544a\u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u8bbe\u7f6e\u6a21\u5757\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setReadClipBoardEnable")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDeepLinkHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5141\u8bb8\u8be5\u5730\u5740\u5411\u5e94\u7528\u53d1\u9001\u94fe\u63a5\u4fe1\u606f\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn"},"https://n.datayi.cn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDeepLinkCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"\u63a5\u53e3\u56de\u8c03")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AdvertConfig config = new AdvertConfig();\nconfig.setDeepLinkHost("Your DeepLinkHost")\n        .setReadClipBoardEnable(true)\n        .setDeepLinkCallback((params, error, appAwakePassedTime) -> {\n            // accept deeplink params\n        });\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)(i.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6, \u8c03\u7528\u65b9\u6cd5\u6ce8\u518c\u5e7f\u544a\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n                new CdpAutotrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new AdvertLibraryGioModule(), config));\n'))),(0,r.kt)(l.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u57cb\u70b9SDK\u65f6, \u8c03\u7528\u65b9\u6cd5\u6ce8\u518c\u5e7f\u544a\u6a21\u5757\nGrowingTracker.startWithConfiguration(this,\n                new CdpTrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new AdvertLibraryGioModule(), config));\n')))),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u8c03\u7528deeplink\u63a5\u53e3"},"\u4e3b\u52a8\u8c03\u7528DeepLink\u63a5\u53e3"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u624b\u52a8\u53d1\u9001DeepLink\u4e8b\u4ef6\uff0c\u8be5\u63a5\u53e3\u5e38\u7528\u4e8e\u5e94\u7528\u5185\u90e8\u5e7f\u544a\u83b7\u5ba2\u63a5\u6536\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"doDeepLinkByUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5URL\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn/k4wudMXn"},"https://n.datayi.cn/k4wudMXn"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().doDeepLinkByUrl("Your DeepLinkUrl", new DeepLinkCallback() {\n    @Override\n    public void onReceive(Map<String, String> params, int error, long appAwakePassedTime) {\n        // accept your params\n    }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'GrowingTracker.get().doDeepLinkByUrl("Your DeepLinkUrl", new DeepLinkCallback() {\n    @Override\n    public void onReceive(Map<String, String> params, int error, long appAwakePassedTime) {\n        // accept your params\n    }\n});\n')),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u60a8\u7684-app-links"},"\u9a8c\u8bc1\u60a8\u7684 App Links"),(0,r.kt)("h4",{id:"\u9a8c\u8bc1-intent-filter-\u914d\u7f6e"},"\u9a8c\u8bc1 Intent Filter \u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0c\u5b89\u88c5\u5728\u624b\u673a\u4e0a")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"adb shell dumpsys package d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u540e\u7684\u7ed3\u679c\u4e2d\uff0c\u67e5\u627e\u60a8\u5e94\u7528\u7684\u5305\u540d\uff0c\u5f53 Domains \u5df2\u7ecf\u51fa\u73b0\u4e0e\u4ee3\u7801\u7247\u6bb5\u4e2d host \u76f8\u540c\u7684\u5b57\u7b26\uff0c\u5219\u8bf4\u660e\u60a8\u7684 Intent Filter \u914d\u7f6e\u6b63\u786e\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Package: com.growingio.android.test    \nDomains: Your DeepLinkHost  \nStatus:  always\n")))),(0,r.kt)("h4",{id:"\u6d4b\u8bd5-app-links-\u5524\u8d77\u65b9\u5f0f"},"\u6d4b\u8bd5 App Links \u5524\u8d77\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5f53\u60a8\u7684\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5229\u7528\u6d4b\u8bd5\u8bbe\u5907\u6d4b\u8bd5\u5524\u8d77\u6548\u679c\uff0c\u6d4b\u8bd5\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u6761\u7528\u4e8e\u6d4b\u8bd5\u7684 DeepLink")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6d4b\u8bd5\u8bbe\u5907\u4e2d\u539f\u751f\u573a\u666f\u4e0b\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5982\uff1a\u77ed\u4fe1\u3001\u5907\u5fd8\u5f55\u7b49\u7b49\uff08\u4e0d\u8981\u76f4\u63a5\u5728\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u4e2d\u8fdb\u884c\u6d4b\u8bd5\uff0c\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u901a\u5e38\u5bf9 DeepLink \u8df3\u8f6c\u5b58\u5728\u9650\u5236\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u6d4b\u8bd5 DeepLink\uff0c\u5982\u679c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8f6c\u5230 App \u4e2d\uff0c\u8bf4\u660e\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App\uff0c\u4e3a\u6700\u7406\u60f3\u6d41\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u672a\u76f4\u63a5\u8df3\u8f6c\u5230 App \u4e2d\uff0c\u800c\u662f\u8df3\u5165\u4e0b\u8f7d\u5f15\u5bfc\u4e2d\u95f4\u9875\uff0c\u5e76\u4e14\u7cfb\u7edf\u5f39\u7a97\u8be2\u95ee\u662f\u5426\u8981\u5728\u5e94\u7528\u4e2d\u6253\u5f00\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android/modules/advert%20module#%E9%AA%8C%E8%AF%81-intent-filter-%E9%85%8D%E7%BD%AE"},"\u9a8c\u8bc1 Intent Filter \u914d\u7f6e")," \u67e5\u770b Status\uff0c\u5982\u679c\u72b6\u6001\u663e\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ask"),"\uff0c\u5e76\u4e14\u786e\u8ba4 App Links \u96c6\u6210\u6d41\u7a0b\u6b63\u786e\u65e0\u8bef\uff0c\u5219\u53ef\u80fd\u662f\u5f53\u524d\u6d4b\u8bd5\u8bbe\u5907\u673a\u578b\u5728 AppLinks \u9047\u5230\u6821\u9a8c\u95ee\u9898\uff0c\u5bf9\u4e8e\u8be5\u60c5\u51b5\u8bf7\u53c2\u8003\u4e0b\u65b9\u5e38\u89c1\u95ee\u9898\u8bf4\u660e"),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e Status \u72b6\u6001\u7684\u8bf4\u660e\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Status \u72b6\u6001"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ask"),(0,r.kt)("td",{parentName:"tr",align:"center"},"App Links \u6821\u9a8c\u5931\u8d25, \u6bcf\u6b21\u6253\u5f00\u8fde\u63a5\u8df3\u8f6c\u65f6\u4f1a\u5f39\u51fa\u4e00\u4e2a\u5bf9\u8bdd\u6846\uff0c \u63d0\u793a\u9009\u62e9\u6253\u5f00\u77ed\u94fe\u7684 App")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"always"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6821\u9a8c\u6210\u529f\uff0c\u7406\u60f3\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"never"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7528\u6237\u9009\u62e9\u4e0d\u518d\u6253\u5f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"always-ask"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u53ef\u5ffd\u7565\uff0c\u5c1a\u672a\u53d1\u73b0\u8fd9\u4e00\u4e2a\u51fa\u73b0, \u8ddf never \u4e00\u6837\u9700\u8981\u624b\u52a8\u5e72\u9884\u624d\u4f1a\u51fa\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"undefined"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5c1a\u672a\u6821\u9a8c\u5b8c\u6210\uff0c \u8bf7\u7a0d\u540e\u518d\u8bd5")))))),(0,r.kt)("h4",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"Q: ",(0,r.kt)("strong",{parentName:"p"},"\u591a\u6570\u5ba2\u6237\u53ef\u80fd\u4f1a\u5728\u9a8c\u8bc1\u73af\u8282\u5f97\u5230\u7684 Status \u4e3a ask\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462")),(0,r.kt)("p",null,"A: "),(0,r.kt)("p",null,"App Links \u7684\u5408\u6cd5\u6027\u662f\u7531\u7cfb\u7edf\u6821\u9a8c\uff0c\u4e0d\u540c\u7684\u624b\u673a\u7cfb\u7edf\u4f7f\u7528\u4e0d\u540c\u7684\u6821\u9a8c\u7ec4\u4ef6\uff0c\u5373\u4f7f\u662f\u4e00\u4e2a\u5382\u5546\u7684\u4e0d\u540c\u578b\u53f7\u624b\u673a\u90fd\u53ef\u80fd\u4f7f\u7528\u4e0d\u540c\u7684\u6821\u9a8c\u7ec4\u4ef6\u3002\n\u5982\u679c\u7cfb\u7edf\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"com.android.statementservice")," \u8fdb\u884c AppLinks \u7684\u6821\u9a8c\uff0c\u5728\u7f51\u7edc\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\u57fa\u672c\u90fd\u80fd\u987a\u5229\u901a\u8fc7\uff1b \u5982\u679c\u7cfb\u7edf\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.android.gms")," \u7ec4\u4ef6\u6821\u9a8c\uff0c\u56e0\u7f51\u7edc\u539f\u56e0\uff0c\u6821\u9a8c\u6709\u53ef\u80fd\u4e0d\u901a\u8fc7\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u534e\u4e3a mate \u7cfb\u5217\uff0cP \u7cfb\u5217\u4f7f\u7528\u7684\u90fd\u662f gms\uff0c\u4e5f\u5c31\u662f Status \u4f1a\u4e3a ask\u3002"),(0,r.kt)("p",null,"\u67e5\u770b\u81ea\u5df1\u624b\u673a\u662f\u4f7f\u7528\u54ea\u79cd\u7ec4\u4ef6\uff0c\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"adb shell dumpsys package i\n")),(0,r.kt)("p",null,"\u7efc\u4e0a\uff0cApp Links \u4e0d\u80fd\u987a\u5229\u901a\u8fc7\u7cfb\u7edf\u68c0\u9a8c\uff0c\u539f\u56e0\u6709\u4ee5\u4e0b\u53ef\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u56fd\u5185\u7f51\u7edc\u95ee\u9898\uff0c\u4f7f\u7528 gms \u7ec4\u4ef6\u6821\u9a8c\u7684\u624b\u673a\u9700\u8981\u8054\u901a Google \u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u60a8\u4ea7\u54c1\u914d\u7f6e\u95ee\u9898\uff0cGrowingIO \u586b\u5199\u7684\u7b7e\u540d\u548c\u624b\u673a\u4e0a\u8fd0\u884c\u7684 APP \u7b7e\u540d\u4e0d\u540c")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Status \u72b6\u6001\u4e3a ask \u4e0d\u4ee3\u8868\u5524\u8d77\u6d41\u7a0b\u6709\u95ee\u9898\uff0c\u5f53\u7528\u6237\u64cd\u4f5c\u5141\u8bb8\u540e\uff0c\u540e\u7eed\u5524\u8d77\u6d41\u7a0b\u4e2d\u5c06\u76f4\u63a5\u5524\u8d77\uff0c\u4e0d\u4f1a\u518d\u51fa\u73b0\u8be2\u95ee\u5f39\u7a97")),(0,r.kt)("h3",{id:"\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d"},"\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d"),(0,r.kt)("p",null,"GrowingIO \u63d0\u4f9b\u8df3\u8f6c\u5230\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d\u7684\u529f\u80fd\uff0c\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d\u4e3a\u817e\u8baf\u5e94\u7528\u5b9d\u4f53\u7cfb\u4e0b\u7684\u5fae\u4e0b\u8f7d\u94fe\u63a5\u3002\u4f7f\u7528\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d\uff0c\u5728\u5fae\u4fe1\u7b49\u817e\u8baf\u65d7\u4e0b\u8f6f\u4ef6\u4e2d\u5c06\u8f6c\u81f3\u5fae\u4e0b\u8f7d\u903b\u8f91"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wikinew.open.qq.com/?title=mobile/%E5%BA%94%E7%94%A8%E5%AE%9D%E5%BE%AE%E4%B8%8B%E8%BD%BD#/iwiki/870029633"},"\u817e\u8baf\u5fae\u4e0b\u8f7d\u4ecb\u7ecd")),(0,r.kt)(s,{path:"img/android/v_download",mdxType:"ImageLoader"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u786e\u8ba4\u5f00\u542f\u5e94\u7528\u5b9d\u5fae\u4e0b\u8f7d\u524d\uff0c\u8bf7\u786e\u8ba4\u60a8\u5df2\u7ecf\u8fbe\u5230\u817e\u8baf\u5fae\u4e0b\u8f7d\u670d\u52a1\u7684\u91cf\u7ea7\u6807\u51c6\uff0c\u5e76\u4e14\u5ba1\u6838\u901a\u8fc7\uff0c\u5426\u5219\u76f4\u63a5\u5f00\u542f\u5c06\u5bfc\u81f4\u7528\u6237\u4f7f\u7528\u4f53\u9a8c\u4e0b\u964d")))}g.isMDXComponent=!0}}]);