(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,g=k["".concat(d,".").concat(u)]||k[u]||c[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",d="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,m=e.values,c=e.groupId,k=e.className,u=a.Children.toArray(e.children),g=null!=m?m:u.map((function(e){return{value:e.props.value,label:e.props.label}})),s=null!=p?p:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,N=o(),f=N.tabGroupChoices,v=N.setTabGroupChoices,h=(0,a.useState)(s),b=h[0],y=h[1],C=[];if(null!=c){var w=f[c];null!=w&&w!==b&&g.some((function(e){return e.value===w}))&&y(w)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;y(a),null!=c&&(v(c,a),setTimeout((function(){var e,n,a,r,o,i,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:D,onClick:D},null!=n?n:t)}))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},6045:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return k},default:function(){return g}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(5064),l=n(8215),d=["components"],p={sidebar_position:2,title:"\u81ea\u5b9a\u4e49 SDK"},m=void 0,c={unversionedId:"android/develop/coutom sdk",id:"android/develop/coutom sdk",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49 SDK",description:"SDK \u53ef\u4ee5\u901a\u8fc7\u96c6\u6210\u4e0d\u540c\u7684\u6a21\u5757\u5b9e\u73b0\u529f\u80fd\u7684\u81ea\u5b9a\u4e49\uff0c\u5728 GrowingIO \u7684 SDK \u4e2d\uff0c\u5df2\u7ecf\u6709\u591a\u4e2a\u6a21\u5757\u529f\u80fd\u5df2\u7ecf\u4ece\u4ee3\u7801\u4e2d\u5206\u79bb\u51fa\u6765\uff0c\u540e\u7eed\u5c06\u4f1a\u72ec\u7acb\u51fa\u66f4\u591a\u7684\u6a21\u5757\u3002",source:"@site/docs/android/develop/coutom sdk.md",sourceDirName:"android/develop",slug:"/android/develop/coutom sdk",permalink:"/growingio-sdk-docs/docs/android/develop/coutom sdk",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/android/develop/coutom sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u81ea\u5b9a\u4e49 SDK"},sidebar:"gioSidebar",previous:{title:"\u524d\u8a00",permalink:"/growingio-sdk-docs/docs/android/develop/intro"},next:{title:"\u81ea\u5b9a\u4e49\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/develop/custom module"}},k=[{value:"\u5982\u4f55\u81ea\u5b9a\u4e49SDK",id:"\u5982\u4f55\u81ea\u5b9a\u4e49sdk",children:[{value:"1. \u9996\u5148\u96c6\u6210\u65e0\u57cb\u70b9",id:"1-\u9996\u5148\u96c6\u6210\u65e0\u57cb\u70b9",children:[]},{value:"2. \u96c6\u6210\u7f51\u7edc\u8bf7\u6c42\u548c\u6570\u636e\u8bf7\u6c42\u683c\u5f0fjson",id:"2-\u96c6\u6210\u7f51\u7edc\u8bf7\u6c42\u548c\u6570\u636e\u8bf7\u6c42\u683c\u5f0fjson",children:[]},{value:"3. \u6dfb\u52a0\u6ce8\u89e3\u89e3\u91ca\u5668",id:"3-\u6dfb\u52a0\u6ce8\u89e3\u89e3\u91ca\u5668",children:[]},{value:"4. \u4f7f\u7528\u6ce8\u89e3\u81ea\u5b9a\u4e49SDK\u7684\u5c5e\u6027",id:"4-\u4f7f\u7528\u6ce8\u89e3\u81ea\u5b9a\u4e49sdk\u7684\u5c5e\u6027",children:[]},{value:"5. \u5229\u7528 <code>@GIOTracker</code> \u5b9e\u73b0\u6ce8\u518c\u914d\u7f6e\u63a5\u53e3",id:"5-\u5229\u7528-giotracker-\u5b9e\u73b0\u6ce8\u518c\u914d\u7f6e\u63a5\u53e3",children:[]},{value:"6.\u521d\u59cb\u5316\u5e76\u8fd0\u884c",id:"6\u521d\u59cb\u5316\u5e76\u8fd0\u884c",children:[]}]}],u={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SDK \u53ef\u4ee5\u901a\u8fc7\u96c6\u6210\u4e0d\u540c\u7684\u6a21\u5757\u5b9e\u73b0\u529f\u80fd\u7684\u81ea\u5b9a\u4e49\uff0c\u5728 GrowingIO \u7684 SDK \u4e2d\uff0c\u5df2\u7ecf\u6709\u591a\u4e2a\u6a21\u5757\u529f\u80fd\u5df2\u7ecf\u4ece\u4ee3\u7801\u4e2d\u5206\u79bb\u51fa\u6765\uff0c\u540e\u7eed\u5c06\u4f1a\u72ec\u7acb\u51fa\u66f4\u591a\u7684\u6a21\u5757\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," \u5df2\u6709\u6a21\u5757\u529f\u80fd\u4e00\u89c8 ")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e"),(0,o.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u4f9d\u8d56"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u5e93-okhttp"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528okhttp\u8bf7\u6c42\u7f51\u7edc\uff0csdk\u9ed8\u8ba4\u7f51\u7edc\u6a21\u5757"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventUrl")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventResponse")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:okhttp3:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u5e93-urlconnnection"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528\u539f\u751f",(0,o.kt)("inlineCode",{parentName:"td"},"urlconnnection"),"\u8bf7\u6c42\u7f51\u7edc"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventUrl")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventResponse")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:urlconnection:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u5e93-volley"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528volley\u8bf7\u6c42\u7f51\u7edc"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventUrl")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventResponse")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:volley:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u52a0\u5bc6-encoder"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528 snappy \u52a0\u5bc6\u4e0a\u62a5\u7684\u4e8b\u4ef6\u6570\u636e,\u9700\u8981\u96c6\u6210\u751f\u6548"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventEncoder")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventEncoder")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:encoder:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u4f20\u8f93\u683c\u5f0f-json"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528json\u683c\u5f0f\u4e0a\u4f20\u4e8b\u4ef6\u6570\u636e\uff0csdk \u9ed8\u8ba4"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventData")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"EventStream")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:json:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u5907\u6807\u8bc6\u7b26-oaid"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u63d0\u4f9b\u91c7\u96c6 OAID \u7684\u80fd\u529b,\u9700\u8981\u96c6\u6210\u751f\u6548"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"OaidHelper")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:oaid:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5f02\u5e38\u4e0a\u62a5\u5de5\u5177-crash"),(0,o.kt)("td",{parentName:"tr",align:"center"},"sdk \u5f02\u5e38\u5d29\u6e83\u4e0a\u62a5\u7eb8 sentry\uff0c\u9700\u8981\u96c6\u6210\u751f\u6548"),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u65e0"),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u65e0"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:crash:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u57cb\u70b9\u5708\u9009-circler"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u57fa\u4e8e\u65e0\u57cb\u70b9\u7684\u5708\u9009\u63d2\u4ef6\uff0c\u9ed8\u8ba4\u96c6\u6210\u5728\u65e0\u57cb\u70b9SDK\u4e2d"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"Circler")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"WebService")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:circler:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u8c03\u8bd5-debugger"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u8c03\u8bd5Mobile Debugger\uff0c\u9ed8\u8ba4\u96c6\u6210\u5728\u57cb\u70b9SDK\u4e2d"),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"Debugger")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"WebService")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:debugger:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6df7\u5408\u5f00\u53d1\u6570\u636e\u6536\u96c6-hybrid"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u6df7\u5408\u5f00\u53d1\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u96c6\u6210\u5728\u57cb\u70b9SDK\u4e2d\uff0c\u9700\u8981\u624b\u52a8\u6ce8\u5165\uff08\u65e0\u57cb\u70b9\u4e2d\u81ea\u52a8\u6ce8\u5165\uff09"),(0,o.kt)("td",{parentName:"tr",align:"right"},"1. ",(0,o.kt)("inlineCode",{parentName:"td"},"HybridBridge")," ",(0,o.kt)("br",null)," 2. ",(0,o.kt)("inlineCode",{parentName:"td"},"HybridDom")),(0,o.kt)("td",{parentName:"tr",align:"right"},"1. ",(0,o.kt)("inlineCode",{parentName:"td"},"Boolean")," ",(0,o.kt)("br",null)," 2.",(0,o.kt)("inlineCode",{parentName:"td"},"HybridJson")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:hybird:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u591a\u5f00\u53d1\u4e2d..."),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"right"}),(0,o.kt)("td",{parentName:"tr",align:"right"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," \u6838\u5fc3\u5e93 ")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u4f9d\u8d56"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u57cb\u70b9 Library"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9\u6838\u5fc3\u5e93\uff0c\u5305\u542b\u6700\u57fa\u672c\u7684\u57cb\u70b9\u903b\u8f91"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:tracker-core:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u57cb\u70b9 Library"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u6838\u5fc3\u5e93\uff0c\u4f9d\u8d56\u4e8e\u57cb\u70b9\u6838\u5fc3\u5e93\uff0c\u5305\u542b\u65e0\u57cb\u70b9\u7684\u6ce8\u5165\u903b\u8f91"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:autotracker-core:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u6ce8\u89e3\u5e93"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u6ce8\u89e3\u58f0\u660e\uff0c\u901a\u8fc7\u6ce8\u89e3\u53ef\u4ee5\u81ea\u52a8\u751f\u6210 SDK \u7684\u521d\u59cb\u5316\u7c7b\u6765\u6ce8\u518c\u6240\u6709\u7684\u6a21\u5757\u548c\u805a\u5408\u6a21\u5757\u5185\u7684\u914d\u7f6e\u7c7b\u3002"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:annotation:3.3.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u89e3\u89e3\u6790\u5668"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4e0e\u4e0a\u9762\u6ce8\u89e3\u914d\u5408\u4f7f\u7528"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"com.growingio.android:compiler:3.3.0"))))),(0,o.kt)("p",null,"\u5177\u4f53\u7248\u672c\u8bf7\u5230 ",(0,o.kt)("a",{parentName:"p",href:"/docs"},"\u65b0\u529f\u80fd\u4ecb\u7ecd")," \u67e5\u9605"),(0,o.kt)("h2",{id:"\u5982\u4f55\u81ea\u5b9a\u4e49sdk"},"\u5982\u4f55\u81ea\u5b9a\u4e49SDK"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4ee5\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\u5e76\u96c6\u6210\u4e00\u4e2a\u81ea\u5b9a\u4e49 GrowingIO SDK \u4f5c\u4e3a\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\uff0c\u8981\u6c42\u662fSDK\u5177\u5907\u65e0\u57cb\u70b9\uff0c\u4f7f\u7528okhttp\u8bf7\u6c42\u6570\u636e\uff0c\u5e76\u4e0d\u9700\u8981\u5708\u9009\u548cdebugger\u8c03\u8bd5\u5de5\u5177\u3002"),(0,o.kt)("h3",{id:"1-\u9996\u5148\u96c6\u6210\u65e0\u57cb\u70b9"},"1. \u9996\u5148\u96c6\u6210\u65e0\u57cb\u70b9"),(0,o.kt)("p",null,"\u96c6\u6210\u65e0\u57cb\u70b9\u9700\u8981\u4e00\u4e2a gradle \u63d2\u4ef6\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"growingio-autotracker-core")," \u57fa\u7840\u5e93\u3002\n\u5728 project \u7ea7\u522b\u7684 build.gradle \u4e0b\u6dfb\u52a0\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    //...\n    repositories {\n        //...\n        mavenCentral()\n    }\n    dependencies {\n        //\u65e0\u57cb\u70b9\u6ce8\u5165\u63d2\u4ef6\n        classpath "com.growingio.android:autotracker-gradle-plugin:3.3.0"\n    }\n}\n')),(0,o.kt)("p",null,"\u5728 app \u7684 build.gradle \u4e0b\u6dfb\u52a0\u63d2\u4ef6\u548c\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n    //...\n    id 'com.growingio.android.autotracker'\n}\n\n//...\n\ndependencies {\n    //\u65e0\u57cb\u70b9\u57fa\u7840\u5e93\n    implementation 'com.growingio.android:autotracker-core:3.3.0'\n}\n\n")),(0,o.kt)("h3",{id:"2-\u96c6\u6210\u7f51\u7edc\u8bf7\u6c42\u548c\u6570\u636e\u8bf7\u6c42\u683c\u5f0fjson"},"2. \u96c6\u6210\u7f51\u7edc\u8bf7\u6c42\u548c\u6570\u636e\u8bf7\u6c42\u683c\u5f0fjson"),(0,o.kt)("p",null,"\u540c\u6837\u5728 app \u7684 build.gradle \u4e0b\u6dfb\u52a0\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    //\u65e0\u57cb\u70b9\u57fa\u7840\u5e93\n    implementation 'com.growingio.android:autotracker-core:3.3.0'\n\n    //\u6240\u9700\u7684\u6a21\u5757\n    implementation 'com.growingio.android:okhttp3:3.3.0'\n    implementation 'com.growingio.android:json:3.3.0'\n}\n")),(0,o.kt)("h3",{id:"3-\u6dfb\u52a0\u6ce8\u89e3\u89e3\u91ca\u5668"},"3. \u6dfb\u52a0\u6ce8\u89e3\u89e3\u91ca\u5668"),(0,o.kt)("p",null,"\u5728 app \u7684 build.gradle \u4e0b\u6dfb\u52a0\u6ce8\u89e3\u5e93\u548c\u6ce8\u89e3\u89e3\u91ca\u5668."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    //\u65e0\u57cb\u70b9\u57fa\u7840\u5e93\n    implementation 'com.growingio.android:autotracker-core:3.3.0'\n\n    //\u6240\u9700\u7684\u6a21\u5757\n    implementation 'com.growingio.android:okhttp3:3.3.0'\n    implementation 'com.growingio.android:json:3.3.0'\n\n    //\u6ce8\u89e3\u89e3\u6790\n    implementation 'com.growingio.android:annotation:3.3.0'\n    annotationProcessor 'com.growingio.android:compiler:3.3.0'\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"kapt")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u82e5\u4f7f\u7528kotlin\uff0c\u53ef\u4ee5\u901a\u8fc7 kapt \u6765\u4f9d\u8d56\u6ce8\u89e3\u5668"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"kapt 'com.growingio.android:compiler:3.3.0'")))),(0,o.kt)("h3",{id:"4-\u4f7f\u7528\u6ce8\u89e3\u81ea\u5b9a\u4e49sdk\u7684\u5c5e\u6027"},"4. \u4f7f\u7528\u6ce8\u89e3\u81ea\u5b9a\u4e49SDK\u7684\u5c5e\u6027"),(0,o.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"GrowingIODemoAppModule"),"\uff0c\u8be5\u7c7b\u7ee7\u627f\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"AppGioModule"),"\uff0c\u53ef\u4ee5\u7528\u6765\u6307\u5b9a\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u7684\u540d\u79f0\u3002"),(0,o.kt)(i.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")\npublic class GrowingIODemoAppModule extends AppGioModule {\n\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")\nclass GrowingIODemoAppModule : AppGioModule(){\n    \n}\n')))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GIOAppModule")," \u6ce8\u89e3\u4f1a\u6839\u636e\u8bbe\u7f6e\u7684\u540d\u79f0\u751f\u6210\u4e24\u4e2a\u7c7b\u4f5c\u4e3a\u5916\u90e8API\u8c03\u7528\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoTackerConfiguration")," \u914d\u7f6e\u7c7b\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoAutotracker")," \u8c03\u7528\u7c7b\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DemoTackerConfiguration \u7c7b\n\u8be5\u7c7b\u540d\u79f0\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"@GIOAppModule#configName")," \u51b3\u5b9a\u3002\n\u8be5\u7c7b\u4f1a\u83b7\u53d6\u6240\u6709\u6a21\u5757\u4e0b\u6240\u6709\u914d\u7f6e\u7c7b\u4fe1\u606f\uff08\u82e5\u6709\uff09\uff0c\u5e76\u5c06\u5b83\u4eec\u91cc\u9762\u7684\u6240\u6709\u65b9\u6cd5\u90fd\u6c47\u96c6\u5230\u672c\u8eab\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DemoAutotracker \u7c7b\n\u8be5\u7c7b\u540d\u79f0\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"@GIOAppModule#name")," \u51b3\u5b9a\u3002\n\u8be5\u7c7b\u4e3b\u8981\u7528\u6765\u63d0\u4f9bSDK\u521d\u59cb\u5316\u63a5\u53e3\uff0c\u603b\u5171\u63d0\u4f9b\u4e86\u4e24\u4e2a\u521d\u59cb\u5316\u65b9\u6cd5\uff0c \u4e00\u4e2a\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"startWithConfiguration(Application,DemoTackerConfiguration)"),",\u8be5\u65b9\u6cd5\u8981\u6c42\u4f20\u5165\u7528\u6237\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6210\u7684config\u5bf9\u8c61\uff1b\u53e6\u4e00\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"start(Application)"),",\u8be5\u65b9\u6cd5\u9700\u8981\u914d\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"@GIOTracker")," \u6ce8\u89e3\u4f7f\u7528\uff0c\u4f1a\u5728\u4e0b\u9762\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6config\u8fdb\u884c\u4ee3\u7801\u914d\u7f6e\uff1b\u4e24\u8005\u65b9\u6cd5\u6548\u679c\u4e00\u6837\uff0c\u90fd\u662f\u6574\u4e2a SDK \u521d\u59cb\u5316\u7684\u5165\u53e3\u3002"))),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoAutotracker.get()")," \u6765\u83b7\u53d6\u6574\u4e2a SDK \u5bf9\u5916\u7684\u5f00\u653e\u63a5\u53e3\u3002"),(0,o.kt)("h3",{id:"5-\u5229\u7528-giotracker-\u5b9e\u73b0\u6ce8\u518c\u914d\u7f6e\u63a5\u53e3"},"5. \u5229\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@GIOTracker")," \u5b9e\u73b0\u6ce8\u518c\u914d\u7f6e\u63a5\u53e3"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@GIOTracker")," \u5404\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"Class<?>"),(0,o.kt)("td",{parentName:"tr",align:null},"Tracker\u63a5\u53e3\u7c7b\u8def\u5f84")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"projectId"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"SDK\u521d\u59cb\u5316\u7684\u9879\u76eeid")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"urlScheme"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"SDK\u521d\u59cb\u5316\u7684urlScheme")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@GIOTracker")," \u5177\u5907\u4e24\u90e8\u5206\u529f\u80fd\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6307\u5b9a\u81ea\u5b9a\u4e49\u5f00\u653e\u63a5\u53e3"),(0,o.kt)("br",{parentName:"p"}),"\n","SDK \u9ed8\u8ba4\u63a5\u53e3\u7c7b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker.class")," \uff08\u65e0\u57cb\u70b9\u9700\u8981\u6307\u5b9a\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Autotracker.class"),"\uff09,\u82e5\u5f00\u53d1\u8005\u4e8c\u6b21\u5f00\u53d1\u65f6\u9700\u8981\u66f4\u591a\u5f00\u653e\u7684\u63a5\u53e3\u6765\u6ee1\u8db3\u9700\u6c42\uff0c\u5219\u53ef\u4ee5\u81ea\u5df1\u6dfb\u52a0\u7c7b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Customtracker")," \u5e76\u7ee7\u627f ",(0,o.kt)("inlineCode",{parentName:"p"},"Autotracker")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker"),",\u7136\u540e\u5c06\u65b0\u6dfb\u52a0\u7684\u7c7b\u914d\u7f6e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"@GIOTracker"),"\u7684path\u4e2d\u3002\n\u6700\u540e\u7684\u7ed3\u679c\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoAutotracker.get()"),"\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"Autotracker")," \u5b9e\u4f8b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7b80\u5316\u914d\u7f6e"),(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0a\u9762\u6709\u8bf4\u8fc7\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"DemoAutotracker.start(Application)")," \u65b9\u6cd5\u4f7f\u7528\u7684\u524d\u63d0\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"@GIOTracker")," \u5df2\u7ecf\u914d\u7f6e projectId \u548c urlScheme \u8fd9\u4e24\u4e2a\u521d\u59cb\u5316\u53c2\u6570\u3002"))),(0,o.kt)(i.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")\npublic class GrowingIODemoAppModule extends AppGioModule {\n    @GIOTracker(path = Autotracker.class, projectId = "<your projectid>", urlScheme = "<your urlscheme>")\n    public void config(DemoTackerConfiguration config) {\n        config.setChannel("demo")\n                .setProject("<your projectid>","<your urlscheme>")//\u82e5\u5728\u6ce8\u89e3\u4e0a\u58f0\u660e\u53ef\u4ee5\u7701\u7565\n                .setDataCollectionEnabled(true)\n                .setDebugEnabled(true);\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")\nclass GrowingIODemoAppModule : AppGioModule() {\n    @GIOTracker(\n        path = Autotracker::class,\n        projectId = "<your projectid>",\n        urlScheme = "<your urlscheme>"\n    )\n    fun config(config: DemoTackerConfiguration) {\n        config.setChannel("demo")\n            .setProject("<your projectid>", "<your urlscheme>") //\u82e5\u5728\u6ce8\u89e3\u4e0a\u58f0\u660e\u53ef\u4ee5\u7701\u7565\n            .setDataCollectionEnabled(true)\n            .setDebugEnabled(true)\n    }\n}\n')))),(0,o.kt)("h3",{id:"6\u521d\u59cb\u5316\u5e76\u8fd0\u884c"},"6.\u521d\u59cb\u5316\u5e76\u8fd0\u884c"),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ea\u8981\u5f88\u7b80\u5355\u7684\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate")," \u65b9\u6cd5\u4e2d\u521d\u59cb\u5316\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"DemoAutotracker.start(this)\n")),(0,o.kt)("p",null,"\u8fd0\u884c\u540e\uff0c\u6709\u8f93\u51fa SDK \u521d\u59cb\u5316\u6210\u529f\u7684log\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!\n!!! GrowingIO Tracker version: 3.3.0 !!!\n")),(0,o.kt)("p",null,"\u548c\u70b9\u51fb\u540e\u51fa\u73b0 click \u4e8b\u4ef6\u65e5\u5fd7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "eventType": "VIEW_CLICK",\n    \u2551   "timestamp": 1626847839398,\n    \u2551   ...\n    \u2551   "sdkVersion": "3.3.0",\n    \u2551   "path": "/MainActivity",\n    \u2551   "pageShowTimestamp": 1626839380613,\n    \u2551   "xpath": "/Page/LinearLayout[0]/FrameLayout[0]/ActionBarOverlayLayout[0]#decor_content_parent/ContentFrameLayout[0]/CoordinatorLayout[0]/FloatingActionButton[0]#fab",\n    \u2551   "index": -1\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u81ea\u5b9a\u4e49SDK\u96c6\u6210\u6210\u529f\u3002"))}g.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);