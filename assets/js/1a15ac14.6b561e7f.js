"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3845],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,g=s["".concat(c,".").concat(k)]||s[k]||u[k]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_vU9c",c="tabItemActive_cw6a";var p=37,d=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,s=e.groupId,k=e.className,g=o(),m=g.tabGroupChoices,N=g.setTabGroupChoices,v=(0,r.useState)(a),b=v[0],h=v[1],w=r.Children.toArray(e.children),y=[];if(null!=s){var f=m[s];null!=f&&f!==b&&u.some((function(e){return e.value===f}))&&h(f)}var E=function(e){var t=e.currentTarget,n=y.indexOf(t),r=u[n].value;h(r),null!=s&&(N(s,r),setTimeout((function(){var e,n,r,a,o,i,l,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case d:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case p:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:E,onClick:E},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},6123:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),l={sidebar_position:2,title:"\u81ea\u5b9a\u4e49 SDK"},c=void 0,p={unversionedId:"ios/develop/custom_sdk",id:"ios/develop/custom_sdk",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49 SDK",description:"--------------",source:"@site/docs/ios/develop/custom_sdk.md",sourceDirName:"ios/develop",slug:"/ios/develop/custom_sdk",permalink:"/growingio-sdk-docs/docs/ios/develop/custom_sdk",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios/develop/custom_sdk.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u81ea\u5b9a\u4e49 SDK"},sidebar:"gioSidebar",previous:{title:"\u524d\u8a00",permalink:"/growingio-sdk-docs/docs/ios/develop/intro"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/docs/ios/question"}},d=[{value:"SDK\u7ed3\u6784\u4ecb\u7ecd",id:"sdk\u7ed3\u6784\u4ecb\u7ecd",children:[{value:"<strong> \u6a21\u5757 </strong>",id:"-\u6a21\u5757-",children:[]},{value:"<strong> \u670d\u52a1 </strong>",id:"-\u670d\u52a1-",children:[]},{value:"<strong> \u6838\u5fc3\u5e93 </strong>",id:"-\u6838\u5fc3\u5e93-",children:[]},{value:"<strong> \u5916\u58f3 </strong>",id:"-\u5916\u58f3-",children:[]},{value:"<strong> \u914d\u7f6e\u9879 </strong>",id:"-\u914d\u7f6e\u9879-",children:[]}]},{value:"\u4e8c\u6b21\u5f00\u53d1",id:"\u4e8c\u6b21\u5f00\u53d1",children:[{value:"1. \u521b\u5efa\u4e00\u4e2a\u5916\u58f3",id:"1-\u521b\u5efa\u4e00\u4e2a\u5916\u58f3",children:[]},{value:"2. \u66ff\u6362Service",id:"2-\u66ff\u6362service",children:[]},{value:"3. \u6269\u5c55 Module",id:"3-\u6269\u5c55-module",children:[]}]}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sdk\u7ed3\u6784\u4ecb\u7ecd"},"SDK\u7ed3\u6784\u4ecb\u7ecd"),(0,o.kt)("p",null,"SDK \u53ef\u4ee5\u901a\u8fc7\u62c6\u5206\u6210 \u6a21\u5757\u3001\u670d\u52a1\u5b9e\u73b0\u6a21\u5757\u5316\uff0c\u5728 GrowingIO \u7684 SDK \u4e2d\uff0c\u5df2\u7ecf\u6709\u591a\u4e2a\u6a21\u5757\u529f\u80fd\u5df2\u7ecf\u4ece\u4ee3\u7801\u4e2d\u5206\u79bb\u51fa\u6765\uff0c\u540e\u7eed\u5c06\u4f1a\u72ec\u7acb\u51fa\u66f4\u591a\u7684\u6a21\u5757\uff0c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingAnalytics.podspec"},"GrowingAnalytics.podspec")," \u6587\u4ef6\u4e2d\u5305\u542b\u4e86\u6240\u6709\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"-\u6a21\u5757-"},(0,o.kt)("strong",{parentName:"h3"}," \u6a21\u5757 ")),(0,o.kt)("p",null,"\u5177\u6709\u5355\u72ec\u4e1a\u52a1\u529f\u80fd\u7684\u6a21\u5757\uff0c\u4f8b\u5982\u5708\u9009\uff0cMobile Debugger\u3002\u6a21\u5757\u9075\u5faa ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Core/GrowingModuleProtocol.h"},"\u6a21\u5757\u534f\u8bae")," \u4e14\u9700\u8981\u8fdb\u884c\u521d\u59cb\u5316\u64cd\u4f5c\uff0c\u5e76\u53ef\u80fd\u4f7f\u7528\u670d\u52a1\u3002Module \u53ef\u4ee5\u53bb\u9664\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u9009"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"MobileDebugger"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u8c03\u8bd5Mobile Debugger\uff0c\u9ed8\u8ba4\u96c6\u6210\u5728\u57cb\u70b9SDK\u4e2d"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"WebCircle"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u57fa\u4e8e\u65e0\u57cb\u70b9\u7684\u5708\u9009\u63d2\u4ef6\uff0c\u9ed8\u8ba4\u96c6\u6210\u5728\u65e0\u57cb\u70b9SDK\u4e2d"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Hybrid"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u6df7\u5408\u5f00\u53d1\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u96c6\u6210\u5728\u65e0\u57cb\u70b9SDK\u4e2d\uff08\u65e0\u57cb\u70b9\u4e2d\u81ea\u52a8\u6ce8\u5165\uff09\uff0c\u57cb\u70b9SDK\u9700\u8981\u624b\u52a8\u5bfc\u5165"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Protobuf"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528 protocol buffer \u683c\u5f0f\u4fdd\u5b58\u548c\u4e0a\u4f20\u4e8b\u4ef6\u6570\u636e\uff0c\u96c6\u6210\u5373\u751f\u6548\uff1b\u9ed8\u8ba4\u4e3a JSON \u683c\u5f0f\uff0c2 \u79cd\u683c\u5f0f\u4e92\u4e0d\u517c\u5bb9\uff0c\u8fc1\u79fb\u5c06\u5bfc\u81f4\u6570\u636e\u5e93\u5185\u672a\u4e0a\u4f20\u7684\u4e8b\u4ef6\u6570\u636e\u4e22\u5931"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u66f4\u591a\u5f00\u53d1\u4e2d..."),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("h3",{id:"-\u670d\u52a1-"},(0,o.kt)("strong",{parentName:"h3"}," \u670d\u52a1 ")),(0,o.kt)("p",null,"\u5177\u6709\u5355\u4e2a\u903b\u8f91\u5904\u7406\u7684\u5355\u5143\uff0c\u4f9bModule\u4f7f\u7528\uff0c\u53ef\u66ff\u6362\uff0c\u53ef\u53bb\u9664\u3002\u4f8b\u5982 \u7f51\u7edc\u53d1\u9001\u670d\u52a1\u3001\u52a0\u5bc6\u670d\u52a1\u3002\u5bf9\u5e94\u7684 Service Protocol \u534f\u8bae\u53ef\u4ee5\u53bb ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/tree/master/GrowingTrackerCore/Core/Services"},"Services")," \u4e0b\u67e5\u770b\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684Service\u670d\u52a1\u5e76\u66ff\u6362\u539f\u6709Service\u670d\u52a1\uff0c\u4f8b\u5982\u9009\u7528\u81ea\u5df1\u7684\u52a0\u5bc6\u670d\u52a1\u3002\u60a8\u4e0d\u5e94\u8be5\u53bb\u9664\u4efb\u610fService\uff0c\u9664\u975e\u60a8\u7684\u6a21\u5757\u548c\u6838\u5fc3\u5e93\u90fd\u6ca1\u6709\u4f7f\u7528\u8be5Service\u3002")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u9009"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Database"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u5e93\u670d\u52a1\uff0c\u5904\u7406\u4e8b\u4ef6\u6570\u636e"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Network"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u7edc\u53d1\u9001\u670d\u52a1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"WebSocket"),(0,o.kt)("td",{parentName:"tr",align:"center"},"websocket\u670d\u52a1\uff0c\u7528\u4e8e\u5708\u9009\u4ee5\u53caMobile Debugger"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Compression"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u538b\u7f29\u670d\u52a1\uff0c\u7528\u4e8e\u7f51\u7edc\u53d1\u9001\u65f6\u7684\u6570\u636e\u538b\u7f29(\u4e0eEncryption\u4e00\u8d77\u4f7f\u7528)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Encryption"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u52a0\u5bc6\u670d\u52a1\uff0c\u7528\u4e8e\u7f51\u7edc\u53d1\u9001\u65f6\u7684\u6570\u636e\u52a0\u5bc6 (\u4e0eCompression\u4e00\u8d77\u4f7f\u7528)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u66f4\u591a\u5f00\u53d1\u4e2d..."),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("h3",{id:"-\u6838\u5fc3\u5e93-"},(0,o.kt)("strong",{parentName:"h3"}," \u6838\u5fc3\u5e93 ")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u9009"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TrackerCore"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9\u6838\u5fc3\u5e93\uff0c\u5305\u542b\u6700\u57fa\u672c\u7684\u57cb\u70b9\u903b\u8f91\uff0c\u4ee5\u53caservice\u534f\u8bae\uff0c\u662f\u6700\u57fa\u7840\u7684\u6a21\u5757"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"AutotrackerCore"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u6838\u5fc3\u5e93\uff0c\u4f9d\u8d56\u4e8e\u57cb\u70b9\u6838\u5fc3\u5e93\uff0c\u5305\u542b\u65e0\u57cb\u70b9\u7684\u6ce8\u5165\u903b\u8f91"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426\uff08\u57cb\u70b9SDK\u65e0\u9700\u96c6\u6210\u6b64\u5e93\uff09")))),(0,o.kt)("h3",{id:"-\u5916\u58f3-"},(0,o.kt)("strong",{parentName:"h3"}," \u5916\u58f3 ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GrowingTracker")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"GrowingAutotracker")," \u5c5e\u4e8e\u5916\u58f3\u90e8\u5206\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u83dc\u7bee\uff0c\u91cc\u9762\u88c5\u4e86\u4ece\u5e02\u573a\u4e2d\u9009\u8d2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Module"),"\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," \uff0c\u5916\u58f3\u4e00\u822c\u53ea\u8981\u4e00\u4e2a\u5bf9\u5916\u63a5\u53e3\u7c7b\uff0c\u53ef\u4ee5\u81ea\u884c\u5b9a\u4e49\u63a5\u53e3\u5f00\u653e\u7a0b\u5ea6\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u9ad8\u5ea6\u5b9a\u5236\u5316SDK\uff0c\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u5916\u58f3\u7c7b\uff0c\u5e76\u5728spec\u914d\u7f6e\u4e2d\u9009\u62e9\u60a8\u9700\u8981\u4f9d\u8d56\u7684Module\u4ee5\u53caService\u3002")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u4f9d\u8d56"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Tracker"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9SDK"),(0,o.kt)("td",{parentName:"tr",align:"center"},"TrackerCore\u3001MobileDebugger\u3001Database\u3001Network\u3001Encryption\u3001Compression")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Autotracker"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9SDK"),(0,o.kt)("td",{parentName:"tr",align:"center"},"AutotrackerCore\u3001Hybrid\u3001MobileDebugger\u3001WebCircle\u3001Database\u3001Network\u3001Encryption\u3001Compression")))),(0,o.kt)("h3",{id:"-\u914d\u7f6e\u9879-"},(0,o.kt)("strong",{parentName:"h3"}," \u914d\u7f6e\u9879 ")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5e38\u7528\u7684\u53ef\u9009\u914d\u7f6e\uff0c\u589e\u52a0\u4e86\u914d\u7f6e\u9879\uff0c\u901a\u8fc7Pod\u5f15\u5165\u53ef\u4ee5\u5b9e\u73b0"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u7248\u672c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"DISABLE_IDFA"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u7981\u7528IDFA\uff0c\u4e14SDK\u4e2d\u4e0d\u4f1a\u518d\u6709\u76f8\u5173\u83b7\u53d6IDFA\u4ee3\u7801\u903b\u8f91"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("font",{color:"red"},">=3.2.0"))))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/base/Configuration#%E5%B8%B8%E7%94%A8%E5%8F%AF%E9%80%89%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE"},(0,o.kt)("strong",{parentName:"a"},"\u5e38\u7528\u53ef\u9009\u6a21\u5757\u914d\u7f6e"))))),(0,o.kt)("h2",{id:"\u4e8c\u6b21\u5f00\u53d1"},"\u4e8c\u6b21\u5f00\u53d1"),(0,o.kt)("h3",{id:"1-\u521b\u5efa\u4e00\u4e2a\u5916\u58f3"},"1. \u521b\u5efa\u4e00\u4e2a\u5916\u58f3"),(0,o.kt)("p",null,"\u56e0\u4e3a\u5916\u58f3\u56fa\u5b9a\u914d\u7f6e\u4e86 Module \u4ee5\u53ca Service\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u6211\u4eec\u7684\u5916\u58f3\uff0c\u624d\u80fd\u81ea\u5b9a\u4e49\u914d\u7f6eModule\u4ee5\u53caService ,\u4f7f\u7528 Cocoapods \u914d\u7f6e\u6700\u4e3a\u65b9\u4fbf\uff0c\u8fd9\u91cc\u4ee5\u4fee\u6539SDK\u7684Autotracker \u914d\u7f6e\u4e3a\u4f8b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9996\u5148\u81ea\u5b9a\u4e49\u5f00\u53d1\u5c31\u4e0d\u80fd\u4f7f\u7528 Cocoapods \u5e93\u4e0a\u7684 Autotracker \u7248\u672c\uff0c\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker"},"Github\u4ed3\u5e93")," \u4e0a\u4e0b\u8f7d\u6700\u65b0\u7684 Release\u5305 \uff08\u7248\u672c\u5927\u4e8e\u6216\u7b49\u4e8e3.2.1\uff09")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u89e3\u538b\u5230\u672c\u5730\uff0c\u7136\u540e\u5728\u539f\u5de5\u7a0b\u7684 podfile \u6587\u4ef6\u4e2d\u4fee\u6539\u4f9d\u8d56\u5173\u7cfb\u4e3a\u8def\u5f84\u4f9d\u8d56\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u539f\u6765\uff1a\npod 'GrowingAnalytics/Autotracker'\n\u4fee\u6539\u540e\uff1a\npod 'GrowingAnalytics/Autotracker', :path => './../growingio-sdk-ios-autotracker'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8def\u5f84\u8bf7\u8bbe\u7f6e\u4e3a\u76f8\u5bf9\u8def\u5f84\uff0c\u4f8b\u5982 ./../growingio-sdk-ios-autotracker")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539 GrowingAnalytics.podspec \u6587\u4ef6\u4e2d Autotracker \u7684\u914d\u7f6e\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.subspec 'Autotracker' do |autotracker|\n      autotracker.source_files = 'GrowingAutotracker/**/*{.h,.m,.c,.cpp,.mm}'\n      autotracker.dependency 'GrowingAnalytics/AutotrackerCore'\n      autotracker.dependency 'GrowingAnalytics/MobileDebugger'\n      autotracker.dependency 'GrowingAnalytics/WebCircle'\n      \n      autotracker.dependency 'GrowingAnalytics/Network'\n      autotracker.dependency 'GrowingAnalytics/Encryption'\n      autotracker.dependency 'GrowingAnalytics/Compression'\n  end\n")),(0,o.kt)("p",null,"\u4f8b\u5982\u9700\u8981\u53bb\u6389 WebCirle \u548c MobileDebugger \uff0c\u5219\u4fee\u6539\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.subspec 'Autotracker' do |autotracker|\n      autotracker.source_files = 'GrowingAutotracker/**/*{.h,.m,.c,.cpp,.mm}'\n      autotracker.dependency 'GrowingAnalytics/AutotrackerCore'\n      \n      autotracker.dependency 'GrowingAnalytics/Network'\n      autotracker.dependency 'GrowingAnalytics/Encryption'\n      autotracker.dependency 'GrowingAnalytics/Compression'\n  end\n")),(0,o.kt)("p",null,"\u5bf9\u4e8eAutoTracker\u4e2d\u7684 Service \uff0c\u4e0d\u5efa\u8bae\u53bb\u9664\uff0c\u5efa\u8bae\u66ff\u6362\uff0c\u4f8b\u5982Network \u8d1f\u8d23\u7f51\u7edc\uff0c\u5982\u679c\u53bb\u9664\u5c06\u65e0\u6cd5\u8fdb\u884c\u7f51\u7edc\u6570\u636e\u53d1\u9001\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7f51\u7edcService\u6765\u8fdb\u884c\u66ff\u6362\u539f\u6765\u56fa\u6709\u7684 Network \uff0c\u8fd9\u70b9\u540e\u7eed\u4f1a\u8fdb\u884c\u8bf4\u660e\u3002"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c pod install \uff0c\u6240\u4fee\u6539\u7684 Autotracker \u914d\u7f6e\u5373\u53ef\u751f\u6548\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autotracker\u4e2d\u53ea\u5305\u542b\u4e86\u4e00\u4e2aGrowingAutotracker\u7c7b\uff08Tracker\u540c\u7406\uff09\uff0c\u5982\u679c\u7528\u6237\u60f3\u5728\u5176\u57fa\u7840\u4e0a\u4fee\u6539\u6269\u5c55\uff0c\u8bf7\u53c2\u8003\u6216\u4f7f\u7528\u8fd9\u4e2a\u7c7b")),(0,o.kt)("h3",{id:"2-\u66ff\u6362service"},"2. \u66ff\u6362Service"),(0,o.kt)("p",null,"\u66ff\u6362 Service \u9002\u7528\u4e8e\u60f3\u66ff\u6362\u67d0\u4e2a\u903b\u8f91\u5355\u5143\u7684\u4ee3\u7801\uff0c\u4f8b\u5982 \u7f51\u7edc\u670d\u52a1\uff0c\u52a0\u5bc6 \u60f3\u4f7f\u7528\u81ea\u5df1\u7684\u3002"),(0,o.kt)("h4",{id:"21-\u5236\u4f5cservice"},"2.1 \u5236\u4f5cService"),(0,o.kt)("p",null,"Service\u5fc5\u5b9a\u7ee7\u627f\u5176\u5bf9\u5e94\u7684Protocol\uff0c\u4f8b\u5982 \u52a0\u5bc6Service \u5bf9\u5e94\u534f\u8bae\u4e3a GrowingEncryptionService\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"@protocol GrowingEncryptionService <GrowingBaseService>\n\n@optional\n\n/// event\u76f8\u5173\u6570\u636e\u5728\u4e0a\u4f20\u4e4b\u524d\u7684\u52a0\u5bc6\u5904\u7406\n/// @param data \u5c06\u8981\u52a0\u5bc6\u7684NSData\u5bf9\u8c61\n/// @param hint \u76d0\u503c\n- (NSData *_Nonnull)encryptEventData:(NSData *_Nonnull)data factor:(unsigned char)hint;\n\n/// \u672c\u5730\u6570\u636e\u5b58\u50a8\u52a0\u5bc6\uff08\u5982\u5f53\u5929\u5df2\u4f7f\u7528\u6570\u636e\u7f51\u7edc\u4e0a\u4f20\u7684\u6570\u636e\u91cf\u7b49\uff09\n/// @param data \u5c06\u8981\u52a0\u5bc6\u7684NSData\u5bf9\u8c61\n- (NSData *_Nonnull)encryptLocalData:(NSData *_Nonnull)data;\n\n/// \u672c\u5730\u6570\u636e\u5b58\u50a8\u89e3\u5bc6\uff08\u5982\u5f53\u5929\u5df2\u4f7f\u7528\u6570\u636e\u7f51\u7edc\u4e0a\u4f20\u7684\u6570\u636e\u91cf\u7b49\uff09\n/// @param data \u5c06\u8981\u89e3\u5bc6\u7684NSData\u5bf9\u8c61\n- (NSData *_Nonnull)decryptLocalData:(NSData *_Nonnull)data;\n\n@end\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7c7b\uff0c\u9075\u5faa GrowingEncryptionService \u534f\u8bae\uff0c\u5728\u5bf9\u5e94\u7684\u65b9\u6cd5\u4e2d\u5199\u60a8\u81ea\u5df1\u7684\u903b\u8f91\uff0c\u4f8b\u5982\u8fd9\u91cc\u5728CustomEncryptionClass\u4e2d\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"- (NSData *_Nonnull)encryptEventData:(NSData *_Nonnull)data factor:(unsigned char)hint {\n    NSMutableData *dataM = [[NSMutableData alloc] initWithLength:data.length];\n    // \u52a0\u5bc6\u903b\u8f91\u5904\u7406\u60a8\u7684\u6570\u636e\n    return dataM;\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u9700\u8981\u5c06 GrowingEncryptionService \u5bf9\u5e94\u7684\u5b9e\u73b0\u7c7bimplclass \u4fee\u6539\u4e3a\u60a8\u81ea\u5df1\u521b\u5efa\u7684\u7c7b\uff0c\u4f8b\u5982\u4e0a\u8ff0\u7684 CustomEncryptionClass \uff0c\u66ff\u6362\u65b9\u6848\u6709\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6ce8\u89e3 (\u63a8\u8350)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"GrowingService(GrowingEncryptionService, CustomEncryptionClass)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4ee3\u7801")),(0,o.kt)("p",null,"\u521d\u59cb\u5316SDK\u524d\u8c03\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingServiceManager sharedInstance] registerService:NSProtocolFromString(GrowingEncryptionService)\n                                                                 implClass:NSClassFromString(@"CustomEncryptionClass")];\n')),(0,o.kt)("p",null,"\u8fd9\u6837\uff0c\u52a0\u5bc6\u670d\u52a1\u5c31\u4f7f\u7528\u7684\u60a8\u81ea\u5df1\u7684\u4e86\uff0c\u4e0b\u9762\u6211\u4eec\u9700\u8981\u5c06\u4ee3\u7801\u5bfc\u5165\u3002"),(0,o.kt)("h4",{id:"22-\u66ff\u6362sevice"},"2.2 \u66ff\u6362Sevice"),(0,o.kt)("p",null,"\u53c2\u8003 Encryption \u7684\u914d\u7f6e\uff0c\u65b0\u589e\u4e00\u4e2a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"  s.subspec 'Encryption' do |service|\n      service.source_files = 'Services/Encryption/**/*{.h,.m,.c,.cpp,.mm}'\n      service.dependency 'GrowingAnalytics/TrackerCore'\n  end\n")),(0,o.kt)("p",null,"\u5e76\u5c06 2.1 \u521b\u5efa\u7684\u4ee3\u7801\u653e\u7f6e\u5bf9\u5e94\u7684 CustomEncryption \u76ee\u5f55\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"  s.subspec 'CustomEncryption' do |service|\n      service.source_files = 'Services/CustomEncryption/**/*{.h,.m,.c,.cpp,.mm}'\n      service.dependency 'GrowingAnalytics/TrackerCore'\n  end\n")),(0,o.kt)("p",null,"\u4fee\u6539 spec \u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"  s.subspec 'Autotracker' do |autotracker|\n      autotracker.source_files = 'GrowingAutotracker/**/*{.h,.m,.c,.cpp,.mm}'\n      autotracker.dependency 'GrowingAnalytics/AutotrackerCore'\n      autotracker.dependency 'GrowingAnalytics/MobileDebugger'\n      autotracker.dependency 'GrowingAnalytics/WebCircle'\n      \n      autotracker.dependency 'GrowingAnalytics/Network'\n      autotracker.dependency 'GrowingAnalytics/CustomEncryption' #\u539f\u4e3aEncryption\n      autotracker.dependency 'GrowingAnalytics/Compression'\n  end\n")),(0,o.kt)("p",null,"\u8fd9\u6837Autotracker\u5c31\u66ff\u6362\u4e86 Encryption \u7684\u670d\u52a1\u3002"),(0,o.kt)("h3",{id:"3-\u6269\u5c55-module"},"3. \u6269\u5c55 Module"),(0,o.kt)("p",null,"\u6269\u5c55 Module \u9002\u7528\u4e8e \u7528\u6237\u6709\u989d\u5916\u7684\u4e1a\u52a1\u9700\u6c42\u7684\u573a\u666f\uff0c\u8fd9\u91cc\u4e3e\u4f8b\u4e86\u51e0\u79cd\uff0c\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u6269\u5c55 Module \u8fdb\u884c\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SDK\u8fd0\u884c\u7684\u540c\u65f6\uff0c\u8fd8\u60f3\u5c06\u4e8b\u4ef6\u5199\u5165\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4e2d\u505a\u989d\u5916\u64cd\u4f5c"),(0,o.kt)("li",{parentName:"ol"},"SDK\u4e2d\u4e8b\u4ef6\u5c11\u4e86\uff0c\u60f3\u6dfb\u52a0\u81ea\u5df1\u7684\u989d\u5916\u4e8b\u4ef6")),(0,o.kt)("p",null,"\u4f46\u9700\u8981\u6ce8\u610f\u662f\u5355\u72ec\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u60a8\u9700\u8981\u5c06\u903b\u8f91\u5168\u90e8\u5c01\u88c5\u5728 Module \u4e2d\uff0cModule \u53ef\u662f\u4f7f\u7528 TrackerCore\u4e2d\u7684\u7c7b\uff0c\u4f46 TrackerCore \u4e0d\u5e94\u8be5\u4f9d\u8d56 Module \u4e2d\u7684\u7c7b\u3002"),(0,o.kt)("h4",{id:"31-\u793a\u4f8b-1"},"3.1 \u793a\u4f8b 1"),(0,o.kt)("p",null,"SDK\u8fd0\u884c\u7684\u540c\u65f6\uff0c\u8fd8\u60f3\u5c06\u4e8b\u4ef6\u5199\u5165\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4e2d\u505a\u989d\u5916\u64cd\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230GrowingEventManager\u4e8b\u4ef6\u53d1\u9001\u7684\u5165\u53e3 postEventBuidler: \uff0c\u53ef\u4ee5\u6dfb\u52a0\u62e6\u622a\u8005\u6765\u5904\u7406\u4e8b\u4ef6\u4fe1\u606f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"//\u62e6\u622a\u8005\u505a\u989d\u5916\u5904\u7406\n@protocol GrowingEventInterceptor <NSObject>\n@optional\n- (void)growingEventManagerChannels:(NSMutableArray<GrowingEventChannel *> *)channels;\n//\u4e8b\u4ef6\u88ab\u89e6\u53d1\n- (void)growingEventManagerEventTriggered:(NSString * _Nullable)eventType;\n//\u5728\u672a\u5b8c\u6210\u6784\u9020event\u524d\uff0c\u8fd4\u56debuilder\n- (void)growingEventManagerEventWillBuild:(GrowingBaseBuilder* _Nullable)builder;\n//\u5728\u5b8c\u6210\u6784\u9020event\u4e4b\u540e\uff0c\u8fd4\u56deevent\n- (void)growingEventManagerEventDidBuild:(GrowingBaseEvent* _Nullable)event;\n//\u9891\u6bb5\u4e8b\u4ef6\u7684\u7f51\u7edc\u8bf7\u6c42request\u5bf9\u8c61\n- (id<GrowingRequestProtocol>_Nullable)growingEventManagerRequestWithChannel:(GrowingEventChannel* _Nullable)channel;\n@end\n")),(0,o.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7c7b\uff0c\u6dfb\u52a0\u5230GrowingEventManager\u62e6\u622a\u8005\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/// \u6dfb\u52a0\u62e6\u622a\u8005 - \u6267\u884c\u987a\u5e8f\u4e0d\u4fdd\u8bc1\u6709\u5e8f\n/// @param interceptor \u62e6\u622a\u8005\n- (void)addInterceptor:(NSObject<GrowingEventInterceptor>* _Nonnull)interceptor;\n")),(0,o.kt)("p",null,"\u5373\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7406\u56de\u8c03\u83b7\u5f97\u4e8b\u4ef6\u4fe1\u606f\uff0c\u7136\u540e\u505a\u81ea\u5df1\u7684\u903b\u8f91\u5904\u7406\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Module\u7684\u5904\u7406")),(0,o.kt)("p",null,"module\u9700\u8981\u7ee7\u627f GrowingModuleProtocol \u534f\u8bae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#import <Foundation/Foundation.h>\n#import "GrowingModuleProtocol.h"\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface CustomEventModule : NSObject <GrowingModuleProtocol>\n\n@end\n\nNS_ASSUME_NONNULL_END\n')),(0,o.kt)("p",null,"\u540c\u65f6\u4f7f\u7528 GrowingMod \u6ce8\u518cModule\u5230SDK\u4e2d\uff0c\u5e76\u5b9e\u73b0growingModInit \u65b9\u6cd5\uff0c\u5728\u65b9\u6cd5\u4e2d\u5c06\u81ea\u5df1\u6dfb\u52a0\u5230GrowingEventManager\u62e6\u622a\u8005\u4e2d "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#import "CustomEventModule.h"\n#import "GrowingEventManager.h"\n\n\nGrowingMod(CustomEventModule)\n\n@implementation CustomEventModule\n\n- (void)growingModInit:(GrowingContext *)context {\n    [[GrowingEventManager sharedInstance] addInterceptor:self];\n}\n\n- (void)growingEventManagerEventDidBuild:(GrowingBaseEvent* _Nullable)event {\n    // do your work\n}\n\n@end\n')),(0,o.kt)("p",null,"\u8fd9\u6837Module\u5c31\u5b9e\u73b0\u4e86\u529f\u80fd\u3002"),(0,o.kt)("h4",{id:"32-\u793a\u4f8b-2"},"3.2 \u793a\u4f8b 2"),(0,o.kt)("p",null,"SDK\u4e2d\u4e8b\u4ef6\u5c11\u4e86\uff0c\u60f3\u6dfb\u52a0\u81ea\u5df1\u7684\u989d\u5916\u4e8b\u4ef6\uff0c\u8fd9\u90e8\u5206\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-advertising"},"https://github.com/growingio/growingio-sdk-ios-advertising")," "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148SDK\u4e2d\u7684\u4e8b\u4ef6\u5747\u7ee7\u627f\u81ea GrowingBaseEvent , \u60a8\u53ef\u4ee5\u7ee7\u627f\u8be5\u7c7b\u6216\u8005\u5176\u5b50\u7c7b\uff0c\u4f8b\u5982 GrowingActivateEvent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#import "GrowingReengageEvent.h"\n\nNS_ASSUME_NONNULL_BEGIN\n@class GrowingActivateBuilder;\n\n@interface GrowingActivateEvent : GrowingReengageEvent\n\n+ (GrowingActivateBuilder *_Nonnull)builder;\n\n@end\n\n@interface GrowingActivateBuilder : GrowingReengageBuilder\n\n- (GrowingActivateBuilder *_Nonnull (^)(NSDictionary *_Nonnull))setExtraParams;\n\n@end\n\nNS_ASSUME_NONNULL_END\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u53d1\u9001\u65f6\u673a\u7531\u7528\u6237\u81ea\u5b9a\uff0c\u518d\u8005\u5c31\u662f\u4e8b\u4ef6\u5982\u4f55\u53d1\u9001\uff0c\u5747\u4f7f\u7528 Builder \u65b9\u5f0f\u4f20\u5165")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"GrowingReengageBuilder *builder = GrowingReengageEvent.builder.setExtraParams(params);\n[self postEventBuidler:builder];\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e8b\u4ef6\u53d1\u9001\u5730\u5740\u9700\u8981\u81ea\u5b9a\u4e49\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/growingio/growingio-sdk-ios-advertising"},"https://github.com/growingio/growingio-sdk-ios-advertising")," \u4e2d\u7684\u5904\u7406")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/// \u7531\u4e8evst \u4ee5\u53ca reenage activate\uff0c\u53d1\u9001\u5730\u5740\u548c3.0\u4e0d\u4e00\u81f4\uff0c\u9700\u8981\u53e6\u521b\u5efa2\u4e2achannel\u6765\u53d1\u9001\n- (void)growingEventManagerChannels:(NSMutableArray<GrowingEventChannel *> *)channels {\n    [channels addObject:[GrowingEventChannel eventChannelWithEventTypes:@[@"vst"]\n                                                            urlTemplate:@"v3/%@/ios/pv?stm=%llu"\n                                                          isCustomEvent:NO]];\n    [channels addObject:[GrowingEventChannel eventChannelWithEventTypes:@[@"reengage",@"activate"]\n                                                             urlTemplate:@"app/%@/ios/ctvt"\n                                                           isCustomEvent:NO]];\n}\n')))}s.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);