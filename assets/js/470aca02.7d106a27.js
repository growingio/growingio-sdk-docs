(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9093],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),g=p(a),c=r,u=g["".concat(d,".").concat(c)]||g[c]||m[c]||i;return a?n.createElement(u,l(l({ref:t},k),{},{components:a})):n.createElement(u,l({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),r=a(9443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",d="tabItemActive_2DSg";var p=37,k=39;var m=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,m=e.values,g=e.groupId,c=e.className,u=i(),s=u.tabGroupChoices,N=u.setTabGroupChoices,b=(0,n.useState)(r),f=b[0],h=b[1],w=n.Children.toArray(e.children),v=[];if(null!=g){var C=s[g];null!=C&&C!==f&&m.some((function(e){return e.value===C}))&&h(C)}var y=function(e){var t=e.currentTarget,a=v.indexOf(t),n=m[a].value;h(n),null!=g&&(N(g,n),setTimeout((function(){var e,a,n,r,i,l,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},I=function(e){var t,a;switch(e.keyCode){case k:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case p:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:I,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},228:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return k},metadata:function(){return m},toc:function(){return g},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=a(5064),o=a(8215),d=["components"],p={sidebar_position:3,title:"\u6570\u636e\u91c7\u96c6API"},k=void 0,m={unversionedId:"android/base/api",id:"android/base/api",isDocsHomePage:!1,title:"\u6570\u636e\u91c7\u96c6API",description:"\u901a\u8fc7 GrowingAutotracker \u7c7b\u53ef\u4ee5\u8c03\u7528 SDK \u4e2d\u6240\u6709\u5f00\u653e\u7684API\uff0c\u901a\u8fc7\u8fd9\u4e9bAPI\u53ef\u4ee5\u8fdb\u884c\u66f4\u6539\u914d\u7f6e\uff0c\u8bbe\u7f6e\u53c2\u6570\u7b49\u64cd\u4f5c\u3002",source:"@site/docs/android/base/api.md",sourceDirName:"android/base",slug:"/android/base/api",permalink:"/growingio-sdk-docs/docs/android/base/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/android/base/api.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u6570\u636e\u91c7\u96c6API"},sidebar:"gioSidebar",previous:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/android/base/Configuration"},next:{title:"SDK\u8c03\u8bd5",permalink:"/growingio-sdk-docs/docs/android/base/debug"}},g=[{value:"1. \u6570\u636e\u91c7\u96c6\u5f00\u5173 <code>setDataCollectionEnabled</code>",id:"1-\u6570\u636e\u91c7\u96c6\u5f00\u5173-setdatacollectionenabled",children:[]},{value:"2. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID <code>setLoginUserId</code>",id:"2-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id-setloginuserid",children:[]},{value:"3. \u6e05\u9664\u767b\u5f55\u7528\u6237ID  <code>cleanLoginUserId</code>",id:"3-\u6e05\u9664\u767b\u5f55\u7528\u6237id--cleanloginuserid",children:[]},{value:"4. \u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e <code>setLocation</code>",id:"4-\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e-setlocation",children:[]},{value:"5. \u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e <code>cleanLocation</code>",id:"5-\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e-cleanlocation",children:[]},{value:"6. \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e8b\u4ef6 <code>trackCustomEvent</code>",id:"6-\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e8b\u4ef6-trackcustomevent",children:[]},{value:"7. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u53d8\u91cf <code>setLoginUserAttributes</code>",id:"7-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u53d8\u91cf-setloginuserattributes",children:[]},{value:"8. \u83b7\u53d6\u8bbe\u5907ID <code>getDeviceId</code>",id:"8-\u83b7\u53d6\u8bbe\u5907id-getdeviceid",children:[]},{value:"9. \u8bbe\u7f6e\u9875\u9762\u522b\u540d <code>setPageAlias</code>, <code>setPageAliasX</code>",id:"9-\u8bbe\u7f6e\u9875\u9762\u522b\u540d-setpagealias-setpagealiasx",children:[]},{value:"10. \u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762 <code>ignorePage</code>,<code>ignorePageX</code>",id:"10-\u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762-ignorepageignorepagex",children:[]},{value:"11. \u8bbe\u7f6e\u5ffd\u7565\u7684View <code>ignoreView</code>",id:"11-\u8bbe\u7f6e\u5ffd\u7565\u7684view-ignoreview",children:[]},{value:"12 \u8bbe\u7f6e\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6 <code>trackViewImpression</code>",id:"12-\u8bbe\u7f6e\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6-trackviewimpression",children:[]},{value:"13 \u505c\u6b62\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6 <code>stopTrackViewImpression</code>",id:"13-\u505c\u6b62\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6-stoptrackviewimpression",children:[]},{value:"14 \u8bbe\u7f6eView\u552f\u4e00Tag <code>setUniqueTag</code>",id:"14-\u8bbe\u7f6eview\u552f\u4e00tag-setuniquetag",children:[]},{value:"15 Webview\u57cb\u70b9 <code>bridgeWebView</code>",id:"15-webview\u57cb\u70b9-bridgewebview",children:[]},{value:"16 \u6ce8\u518c\u6a21\u5757\u7ec4\u4ef6 <code>registerComponent</code>",id:"16-\u6ce8\u518c\u6a21\u5757\u7ec4\u4ef6-registercomponent",children:[]}],c={toc:g};function u(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"GrowingAutotracker")," \u7c7b\u53ef\u4ee5\u8c03\u7528 SDK \u4e2d\u6240\u6709\u5f00\u653e\u7684API\uff0c\u901a\u8fc7\u8fd9\u4e9bAPI\u53ef\u4ee5\u8fdb\u884c\u66f4\u6539\u914d\u7f6e\uff0c\u8bbe\u7f6e\u53c2\u6570\u7b49\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().setDataCollectionEnabled(true)\nGrowingAutotracker.get().setLoginUserId("userId")\nGrowingAutotracker.get().setLoginUserId("zhangshan","username")\nGrowingAutotracker.get().cleanLoginUserId()\nGrowingAutotracker.get().setLocation(20.11,20.11)\nGrowingAutotracker.get().cleanLocation()\nGrowingAutotracker.get().trackCustomEvent("registerSuccess")\nGrowingAutotracker.get().setLoginUserAttributes(new HashMap<>())\nGrowingAutotracker.get().setVisitorAttributes(new HashMap<>())\nGrowingAutotracker.get().getDeviceId()\nGrowingAutotracker.get().setPageAliasX(new androidx.fragment.app.Fragment(),"TestFragment")\nGrowingAutotracker.get().ignorePageX(new androidx.fragment.app.Fragment(),IgnorePolicy.IGNORE_SELF)\nGrowingAutotracker.get().setPageAlias(new android.app.Fragment(),"TestFragment")\nGrowingAutotracker.get().ignorePage(new android.app.Fragment(),IgnorePolicy.IGNORE_SELF)\nGrowingAutotracker.get().ignoreView(view,IgnorePolicy.IGNORE_SELF)\nGrowingAutotracker.get().trackViewImpression(view,"buttonShowed")\nGrowingAutotracker.get().stopTrackViewImpression(view)\nGrowingAutotracker.get().setUniqueTag(button, "homeTabButton")\nGrowingAutotracker.get().bridgeWebView(webview)\n\nGrowingAutotracker.get().registerComponent(module)\n')),(0,i.kt)("h3",{id:"1-\u6570\u636e\u91c7\u96c6\u5f00\u5173-setdatacollectionenabled"},"1. \u6570\u636e\u91c7\u96c6\u5f00\u5173 ",(0,i.kt)("inlineCode",{parentName:"h3"},"setDataCollectionEnabled")),(0,i.kt)("p",null,"\u6253\u5f00\u6216\u5173\u95ed\u6570\u636e\u91c7\u96c6"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"),"\u6253\u5f00\u6570\u636e\u91c7\u96c6\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"\u5173\u95ed\u6570\u636e\u91c7\u96c6")))),(0,i.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().setDataCollectionEnabled(true)\n")),(0,i.kt)("h3",{id:"2-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id-setloginuserid"},"2. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID ",(0,i.kt)("inlineCode",{parentName:"h3"},"setLoginUserId")),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setLoginUserId")," API\uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u957f\u5ea6\u9650\u5236\u5927\u4e8e0\u4e14\u5c0f\u4e8e\u7b49\u4e8e1000\uff0c\u5982\u679c\u5927\u4e8e\u957f\u5ea61000\u5c06\u53ea\u622a\u53d6\u524d1000\u957f\u5ea6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9002\u7528\u4e8eID-MAPPING,\u53ef\u9009\u586b")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().setLoginUserId("\u5f20\u4e09")\nGrowingAutotracker.get().setLoginUserId("111011101101","phone")\n')),(0,i.kt)("h3",{id:"3-\u6e05\u9664\u767b\u5f55\u7528\u6237id--cleanloginuserid"},"3. \u6e05\u9664\u767b\u5f55\u7528\u6237ID  ",(0,i.kt)("inlineCode",{parentName:"h3"},"cleanLoginUserId")),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"cleanLoginUserId"),"\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().cleanLoginUserId()\n")),(0,i.kt)("h3",{id:"4-\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e-setlocation"},"4. \u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"h3"},"setLocation")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u57fa\u4e8eWGS-84\u5750\u6807"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"latitude")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"double")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5730\u7406\u5750\u6807\u70b9\u7eac\u5ea6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"longitude")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"double")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5730\u7406\u5750\u6807\u70b9\u7ecf\u5ea6")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().setLocation(39.9, 116.3)\n")),(0,i.kt)("h3",{id:"5-\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e-cleanlocation"},"5. \u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"h3"},"cleanLocation")),(0,i.kt)("p",null,"\u6e05\u9664\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e"),(0,i.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().cleanLocation()\n")),(0,i.kt)("h3",{id:"6-\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e8b\u4ef6-trackcustomevent"},"6. \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e8b\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"h3"},"trackCustomEvent")),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002\u5728\u6dfb\u52a0\u6240\u9700\u8981\u53d1\u9001\u7684\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728\u4e8b\u4ef6\u7ba1\u7406\u7528\u6237\u754c\u9762\u914d\u7f6e\u4e8b\u4ef6\u4ee5\u53ca\u4e8b\u4ef6\u7ea7\u53d8\u91cf\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-3"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map<String, String>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u7ef4\u5ea6\u4fe1\u606f\uff08\u53ef\u9009\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bKey\uff08\u53ef\u9009\uff0c\u4e0eitemId\u53c2\u6570\u4e00\u8d77\u4f20\u5165\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bID\uff08\u53ef\u9009\uff0c\u4e0eitemKey\u53c2\u6570\u4e00\u8d77\u4f20\u5165\uff09")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,i.kt)(l.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().trackCustomEvent("registerSuccess");\n\nMap<String, String> map = new HashMap<>();\nmap.put("name", "June");\nmap.put("age", "12");\nGrowingAutotracker.get().trackCustomEvent("registerSuccess", map);\nGrowingAutotracker.get().trackCustomEvent("registerSuccess", map, "key", "id");\n'))),(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'GrowingAutotracker.get().trackCustomEvent("registerSuccess")\n\nval map: MutableMap<String, String> = HashMap()\nmap["name"] = "June"\nmap["age"] = "12"\nGrowingAutotracker.get().trackCustomEvent("registerSuccess", map)\nGrowingAutotracker.get().trackCustomEvent("registerSuccess", map, "key", "id")\n')))),(0,i.kt)("h3",{id:"7-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u53d8\u91cf-setloginuserattributes"},"7. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"h3"},"setLoginUserAttributes")),(0,i.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u7528\u6237\u5c5e\u6027\u53d8\u91cf\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-4"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map<String, String>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5c5e\u6027\u4fe1\u606f")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,i.kt)(l.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> map = new HashMap<>();\nmap.put("gender", "male");\nmap.put("age", "12");\nGrowingAutotracker.get().setLoginUserAttributes(map);\n'))),(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val map: MutableMap<String, String> = HashMap()\nmap["gender"] = "male"\nmap["age"] = "12"\nGrowingAutotracker.get().setLoginUserAttributes(map)\n')))),(0,i.kt)("h3",{id:"8-\u83b7\u53d6\u8bbe\u5907id-getdeviceid"},"8. \u83b7\u53d6\u8bbe\u5907ID ",(0,i.kt)("inlineCode",{parentName:"h3"},"getDeviceId")),(0,i.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907id\uff0c\u53c8\u79f0\u4e3a\u533f\u540d\u7528\u6237id\uff0cSDK \u81ea\u52a8\u751f\u6210\u7528\u6765\u5b9a\u4e49\u552f\u4e00\u8bbe\u5907\u3002\n\u5982\u679c\u6ca1\u6709\u521d\u59cb\u5316SDK \u6216\u8005\u5173\u95ed\u91c7\u96c6\u5f00\u5173\u53ef\u80fd\u8fd4\u56de\u503c\u4e3anull\uff0c\u4e14\u53ef\u80fd\u6709IO\u64cd\u4f5c\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingTracker.get().getDeviceId()\n")),(0,i.kt)("h3",{id:"9-\u8bbe\u7f6e\u9875\u9762\u522b\u540d-setpagealias-setpagealiasx"},"9. \u8bbe\u7f6e\u9875\u9762\u522b\u540d ",(0,i.kt)("inlineCode",{parentName:"h3"},"setPageAlias"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"setPageAliasX")),(0,i.kt)("p",null,"\u7ed9\u9875\u9762\u8bbe\u7f6e\u4e00\u4e2a\u522b\u540d\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u6c49\u5b57\u3001\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf\u7684\u7ec4\u5408\u3002\u4e3a\u67e5\u770b\u6570\u636e\u65b9\u4fbf\uff0c\u8bf7\u5c3d\u91cf\u5bf9 iOS \u548c\u5b89\u5353\u7684\u540c\u529f\u80fd\u9875\u9762\u53d6\u4e0d\u540c\u7684\u540d\u79f0\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-5"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"page")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Activity / Fragment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8bbe\u7f6e\u522b\u540d\u7684\u9875\u9762\u5bf9\u8c61\uff0c\u5fc5\u987b\u5728",(0,i.kt)("inlineCode",{parentName:"td"},"onCreate"),"\u751f\u547d\u5468\u671f\u4e2d\u8c03\u7528")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"alias")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u522b\u540d")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().setPageAlias(mActivity, "home")\n')),(0,i.kt)("h3",{id:"10-\u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762-ignorepageignorepagex"},"10. \u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762 ",(0,i.kt)("inlineCode",{parentName:"h3"},"ignorePage"),",",(0,i.kt)("inlineCode",{parentName:"h3"},"ignorePageX")),(0,i.kt)("p",null,"\u88ab\u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762\uff0c\u4e0d\u518d\u89e6\u53d1\u65e0\u57cb\u70b9\u7684page\u4e8b\u4ef6\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-6"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"page")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Activity / Fragment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u5ffd\u7565\u7684\u9875\u9762\u5bf9\u8c61\uff0c\u5efa\u8bae\u5728",(0,i.kt)("inlineCode",{parentName:"td"},"onCreate"),"\u751f\u547d\u5468\u671f\u4e2d\u8c03\u7528")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"policy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"IgnorePolicy")),(0,i.kt)("td",{parentName:"tr",align:"left"},"1. ",(0,i.kt)("inlineCode",{parentName:"td"},"IGNORE_SELF")," \u53ea\u5ffd\u7565\u81ea\u5df1 ",(0,i.kt)("br",null),"2. ",(0,i.kt)("inlineCode",{parentName:"td"},"IGNORE_CHILD")," \u53ea\u5ffd\u7565\u8be5\u9875\u9762\u7684\u5b50\u9875\u9762 ",(0,i.kt)("br",null),"3. ",(0,i.kt)("inlineCode",{parentName:"td"},"IGNORE_ALL")," \u5ffd\u7565\u6240\u6709\uff0c\u5305\u62ec\u81ea\u5df1\u548c\u8be5\u9875\u9762\u7684\u5b50\u9875\u9762")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-9"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().ignorePage(mActivity, IgnorePolicy.IGNORE_ALL)\n")),(0,i.kt)("h3",{id:"11-\u8bbe\u7f6e\u5ffd\u7565\u7684view-ignoreview"},"11. \u8bbe\u7f6e\u5ffd\u7565\u7684View ",(0,i.kt)("inlineCode",{parentName:"h3"},"ignoreView")),(0,i.kt)("p",null,"\u88ab\u8bbe\u7f6e\u5ffd\u7565\u7684VIew\uff0c\u4e0d\u518d\u89e6\u53d1\u70b9\u51fb\u3001\u66dd\u5149\u7b49\u4efb\u4f55\u4e8b\u4ef6\uff0c\u88ab\u5ffd\u7565\u7684WebView\u4e5f\u4e0d\u4f1a\u91c7\u96c6Hybrid\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-7"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"view")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"View")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u5ffd\u7565\u7684View\u5bf9\u8c61")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"policy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"IgnorePolicy")),(0,i.kt)("td",{parentName:"tr",align:"left"},"1. ",(0,i.kt)("inlineCode",{parentName:"td"},"IGNORE_SELF")," \u53ea\u5ffd\u7565\u81ea\u5df1 ",(0,i.kt)("br",null),"2. ",(0,i.kt)("inlineCode",{parentName:"td"},"IGNORE_CHILD")," \u53ea\u5ffd\u7565\u8be5View\u7684\u5b50View ",(0,i.kt)("br",null),"3. ",(0,i.kt)("inlineCode",{parentName:"td"},"IGNORE_ALL")," \u5ffd\u7565\u6240\u6709\uff0c\u5305\u62ec\u81ea\u5df1\u548c\u8be5View\u7684\u5b50View")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-10"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().ignoreView(view, IgnorePolicy.IGNORE_SELF)\n")),(0,i.kt)("h3",{id:"12-\u8bbe\u7f6e\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6-trackviewimpression"},"12 \u8bbe\u7f6e\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"h3"},"trackViewImpression")),(0,i.kt)("p",null,"\u5f53\u88ab\u8bbe\u7f6e\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u5185\u65f6\u5c06\u89e6\u53d1\u66dd\u5149\u4e8b\u4ef6"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-8"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"view")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"View")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u91c7\u96c6\u66dd\u5149\u4e8b\u4ef6\u7684View\u5bf9\u8c61")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"impressionEventName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u66dd\u5149\u7684\u4e8b\u4ef6\u540d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map<String, String>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u66dd\u5149\u7684\u4e8b\u4ef6\u5c5e\u6027")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-11"},"\u793a\u4f8b"),(0,i.kt)(l.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().trackViewImpression(view, "buttonShowed");\n\nMap<String, String> map = new HashMap<>();\nmap.put("color", "red");\nmap.put("name", "home");\nGrowingAutotracker.get().trackViewImpression(view, "buttonShowed", map);\n'))),(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'GrowingAutotracker.get().trackViewImpression(view, "buttonShowed")\nval map: MutableMap<String, String> = HashMap()\nmap["gender"] = "male"\nmap["age"] = "12"\nGrowingAutotracker.get().trackViewImpression(view, "buttonShowed", map)\n')))),(0,i.kt)("h3",{id:"13-\u505c\u6b62\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6-stoptrackviewimpression"},"13 \u505c\u6b62\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"h3"},"stopTrackViewImpression")),(0,i.kt)("p",null,"\u505c\u6b62\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-9"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"trackedView")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"View")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u505c\u6b62\u91c7\u96c6\u66dd\u5149\u4e8b\u4ef6\u7684View\u5bf9\u8c61")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-12"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().stopTrackViewImpression(trackedView)\n")),(0,i.kt)("h3",{id:"14-\u8bbe\u7f6eview\u552f\u4e00tag-setuniquetag"},"14 \u8bbe\u7f6eView\u552f\u4e00Tag ",(0,i.kt)("inlineCode",{parentName:"h3"},"setUniqueTag")),(0,i.kt)("p",null,"\u7ed9View\u8bbe\u7f6e\u552f\u4e00\u7684Tag\uff0c\u65b9\u4fbf\u70b9\u51fb\u7b49\u4e8b\u4ef6\u786e\u5b9a\u552f\u4e00\u7684View\uff0c\u4e00\u822c\u7528\u4e8e\u52a8\u6001\u5e03\u5c40\u7684\u573a\u666f"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-10"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"view")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"View")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8bbe\u7f6e\u552f\u4e00Tag\u7684View\u5bf9\u8c61")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tag")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8bbe\u7f6e\u7684Tag")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-13"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.get().setUniqueTag(button, "homeTabButton")\n')),(0,i.kt)("h3",{id:"15-webview\u57cb\u70b9-bridgewebview"},"15 Webview\u57cb\u70b9 ",(0,i.kt)("inlineCode",{parentName:"h3"},"bridgeWebView")),(0,i.kt)("p",null,"\u624b\u52a8\u6ce8\u5165js\u5230webview,\u7528\u6765\u6536\u96c6webview\u4e2d\u7684\u6570\u636e"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-11"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"view")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"View")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"webview"),"\u3001",(0,i.kt)("inlineCode",{parentName:"td"},"ucwebview"),"\u548c",(0,i.kt)("inlineCode",{parentName:"td"},"x5webview"))))),(0,i.kt)("h4",{id:"\u793a\u4f8b-14"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().bridgeWebView(webview)\n")),(0,i.kt)("h3",{id:"16-\u6ce8\u518c\u6a21\u5757\u7ec4\u4ef6-registercomponent"},"16 \u6ce8\u518c\u6a21\u5757\u7ec4\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"h3"},"registerComponent")),(0,i.kt)("p",null,"\u53ef\u901a\u8fc7\u8be5\u65b9\u6cd5\u624b\u52a8\u6ce8\u518cSDK\u9700\u8981\u7684\u53ef\u914d\u7f6e\u6a21\u5757\u7ec4\u4ef6"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-12"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"module")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LibraryGioModule")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757")))),(0,i.kt)("h4",{id:"\u793a\u4f8b-15"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GrowingAutotracker.get().registerComponent(module)\n")))}u.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);