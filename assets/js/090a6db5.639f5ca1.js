"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4982],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7294),i=t(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(6010),l="tabItem_vU9c",p="tabItemActive_cw6a";var c=37,s=39;var d=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,d=e.values,m=e.groupId,u=e.className,k=r(),g=k.tabGroupChoices,h=k.setTabGroupChoices,v=(0,a.useState)(i),N=v[0],f=v[1],A=a.Children.toArray(e.children),S=[];if(null!=m){var w=g[m];null!=w&&w!==N&&d.some((function(e){return e.value===w}))&&f(w)}var b=function(e){var n=e.currentTarget,t=S.indexOf(n),a=d[t].value;f(a),null!=m&&(h(m,a),setTimeout((function(){var e,t,a,i,r,o,l,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,t>=0&&r<=c&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},D=function(e){var n,t;switch(e.keyCode){case s:var a=S.indexOf(e.target)+1;t=S[a]||S[0];break;case c:var i=S.indexOf(e.target)-1;t=S[i]||S[S.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},u)},d.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===n}),key:n,ref:function(e){return S.push(e)},onKeyDown:D,onFocus:b,onClick:b},t)}))),n?(0,a.cloneElement)(A.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},A.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},7397:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=(t(5064),t(8215),["components"]),l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},p=void 0,c={unversionedId:"ios/base/Getting_Started",id:"ios/base/Getting_Started",isDocsHomePage:!1,title:"\u5982\u4f55\u96c6\u6210",description:"--------------",source:"@site/docs/ios/base/Getting_Started.md",sourceDirName:"ios/base",slug:"/ios/base/Getting_Started",permalink:"/growingio-sdk-docs/docs/ios/base/Getting_Started",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/base/Getting_Started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/ios/version"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/ios/base/Configuration"}},s=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",children:[]},{value:"\u65e0\u57cb\u70b9SDK\u96c6\u6210",id:"\u65e0\u57cb\u70b9sdk\u96c6\u6210",children:[{value:"Cocoapods\u96c6\u6210",id:"cocoapods\u96c6\u6210",children:[]},{value:"\u6dfb\u52a0 URL Scheme",id:"\u6dfb\u52a0-url-scheme",children:[]},{value:"SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"sdk\u521d\u59cb\u5316\u914d\u7f6e",children:[]},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c",children:[]}]},{value:"\u57cb\u70b9SDK\u96c6\u6210",id:"\u57cb\u70b9sdk\u96c6\u6210",children:[{value:"Cocoapods\u96c6\u6210",id:"cocoapods\u96c6\u6210-1",children:[]},{value:"\u6dfb\u52a0 URL Scheme",id:"\u6dfb\u52a0-url-scheme-1",children:[]},{value:"SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"sdk\u521d\u59cb\u5316\u914d\u7f6e-1",children:[]},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c-1",children:[]}]},{value:"App Store\u63d0\u4ea4\u5e94\u7528\u6ce8\u610f\u4e8b\u9879",id:"app-store\u63d0\u4ea4\u5e94\u7528\u6ce8\u610f\u4e8b\u9879",children:[{value:"\u5173\u4e8e IDFA \u6743\u9650\u83b7\u53d6",id:"\u5173\u4e8e-idfa-\u6743\u9650\u83b7\u53d6",children:[]},{value:"\u5173\u4e8e\u4f7f\u7528 IDFA \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID",id:"\u5173\u4e8e\u4f7f\u7528-idfa-\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237id",children:[]}]}],d={toc:s};function m(e){var n=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"iOS SDK \u63d0\u4f9b\u4e86 ",(0,r.kt)("font",{color:"red"}," \u65e0\u57cb\u70b9SDK "),"\u6216",(0,r.kt)("font",{color:"red"}," \u57cb\u70b9SDK "),"  \u4e24\u4e2a\u7248\u672c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK \u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6;"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK \u5177\u5907 \u57cb\u70b9SDK \u7684\u6240\u6709\u529f\u80fd\uff0c\u540c\u65f6\u5177\u5907\u81ea\u52a8\u91c7\u96c6\u57fa\u672c\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u5982\u9875\u9762\u8bbf\u95ee\uff0c\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002")),(0,r.kt)("p",null,"\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u6258\u7ba1\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker-cdp"},"Github")),(0,r.kt)("p",null,"\u6b22\u8fce star,fork \u4e00\u6ce2\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u73af\u5883:")," ",(0,r.kt)("br",null),"\nXcode 9.0 \u53ca\u4ee5\u4e0a",(0,r.kt)("br",{parentName:"p"}),"\n","iOS 8.0 \u53ca\u4ee5\u4e0a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u6839\u636e\u9700\u8981\u9009\u62e9\u96c6\u6210"),(0,r.kt)("font",{color:"red"}," \u65e0\u57cb\u70b9SDK "),"\u6216",(0,r.kt)("font",{color:"red"}," \u57cb\u70b9SDK ")))),(0,r.kt)("h3",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,r.kt)("h4",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570account-iddatasource-idurl-schemehost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccount ID\u3001DataSource ID\u3001URL Scheme\u3001Host"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,r.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,r.kt)("br",null),"\nURL Scheme\uff1a \u662f GrowingIO SDK \u4ece\u5916\u90e8\u5524\u9192\u5e94\u7528\u65f6\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6",(0,r.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"div"},"Account ID\u3001DataSource ID\u3001URL Scheme \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u83b7\u53d6\u6e90\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301",(0,r.kt)("br",null),"\nHost \u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"))),(0,r.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:t(6745).Z})),(0,r.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:t(8910).Z})),(0,r.kt)("h2",{id:"\u65e0\u57cb\u70b9sdk\u96c6\u6210"},"\u65e0\u57cb\u70b9SDK\u96c6\u6210"),(0,r.kt)("h3",{id:"cocoapods\u96c6\u6210"},"Cocoapods\u96c6\u6210"),(0,r.kt)("p",null,"\u5728\u60a8\u7684Podfile\u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics-cdp/Autotracker'\n")),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\n\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pod update")),(0,r.kt)("h3",{id:"\u6dfb\u52a0-url-scheme"},"\u6dfb\u52a0 URL Scheme"),(0,r.kt)("p",null,"URL Scheme \u662f\u60a8\u5728 GrowingIO \u5e73\u53f0\u521b\u5efa\u5e94\u7528\u65f6\u751f\u6210\u7684\u8be5\u5e94\u7528\u7684\u552f\u4e00\u6807\u8bc6\u3002\u628a URL Scheme \u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u4f7f\u7528Mobile Debug\u7b49\u529f\u80fd\u65f6\u5524\u9192\u60a8\u7684\u5e94\u7528\u3002  "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9700\u8981\u5728GrowingIO\u7f51\u7ad9\u4e0a\u5148\u521b\u5efa\u60a8\u7684App\u5e94\u7528\uff0c\u83b7\u53d6 URL Scheme"))),(0,r.kt)("p",null,"\u9009\u62e9\u5de5\u7a0b \u2192 Target  \u2192 Info  \u2192 URL Types \u2192 \u70b9\u51fb \u2795  \u2192 \u6dfb\u52a0\u60a8\u7684 URL Scheme \u5373\u53ef\n",(0,r.kt)("img",{src:t(1265).Z})),(0,r.kt)("h3",{id:"sdk\u521d\u59cb\u5316\u914d\u7f6e"},"SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,r.kt)("h4",{id:"\u5bfc\u5165\u5934\u6587\u4ef6growingautotrackerh\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684appdelegate-\u7684-applicationdidfinishlaunchingwithoptions-\u65b9\u6cd5\u4e2d\u4e3a\u4f7f-app-\u5408\u89c4\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4"},"\u5bfc\u5165\u5934\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"h4"},'"GrowingAutotracker.h"'),"\uff0c\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684",(0,r.kt)("inlineCode",{parentName:"h4"},"AppDelegate")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"h4"},"application:didFinishLaunchingWithOptions:")," \u65b9\u6cd5\u4e2d\u3002\u4e3a\u4f7f App \u5408\u89c4\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"h4",href:"/docs/compliance/iosCompliance#%E5%90%88%E8%A7%84%E6%AD%A5%E9%AA%A4"},"\u5408\u89c4\u6b65\u9aa4")),(0,r.kt)("p",null,"   \u4ee3\u7801\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#import "GrowingAutotracker.h"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Config GrowingIO\n// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n// YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n// YourDatasourceId eg: 11223344aabbcc\nGrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,r.kt)("h4",{id:"\u5728appdelegatem\u6587\u4ef6\u4e2d\u5b9e\u73b0-url-scheme-\u8df3\u8f6c\u4ee5\u53cadeeplink\u8df3\u8f6c\u7684\u4ee3\u7406\u65b9\u6cd5"},"\u5728appDelegate.m\u6587\u4ef6\u4e2d\u5b9e\u73b0 URL Scheme \u8df3\u8f6c\u4ee5\u53caDeepLink\u8df3\u8f6c\u7684\u4ee3\u7406\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// URL Scheme\u8df3\u8f6c\n- (BOOL)application:(UIApplication *)application\n            openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication\n         annotation:(id)annotation {\n\n    return NO;\n}\n\n// universal Link\u6267\u884c\n- (BOOL) application:(UIApplication *)application\ncontinueUserActivity:(NSUserActivity *)userActivity\n  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {\n    return YES;\n}\n")),(0,r.kt)("h4",{id:"\u82e5\u4f7f\u7528\u4e86ios-13\u7684-uiscene\u8bf7\u5728\u60a8\u6307\u5b9a\u7684scenedelegate\u4e2d\u8bbe\u7f6e\u5982\u4e0b"},"\u82e5\u4f7f\u7528\u4e86iOS 13\u7684 UIScene\uff0c\u8bf7\u5728\u60a8\u6307\u5b9a\u7684SceneDelegate\u4e2d\u8bbe\u7f6e\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {\n}\n\n- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u4ee3\u7406\u65b9\u6cd5\u7a7a\u5b9e\u73b0\u5373\u53ef\uff0cSDK\u4f1a\u81ea\u52a8\u52a0\u5165\u5904\u7406\u4ee3\u7801"))),(0,r.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,r.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5\u65e5\u5fd7\u4e2d\u8f93\u51fa\u4e86",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: 3.3.0"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660eSDK\u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,r.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"debugEnabled")," \u8bbe\u7f6e\u4e3aYES\uff0c\u6253\u5f00\u4e86Debug\uff0c\u5219\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684log\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u5c31\u5b8c\u6210\u4e86\u65e0\u57cb\u70b9 SDK \u7684\u96c6\u6210\u3002"),(0,r.kt)("h2",{id:"\u57cb\u70b9sdk\u96c6\u6210"},"\u57cb\u70b9SDK\u96c6\u6210"),(0,r.kt)("p",null,"\u57cb\u70b9 SDK\u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\u548cAPP\u5173\u95ed\u4e8b\u4ef6\uff0c\u5176\u4ed6\u4e8b\u4ef6\u5747\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"cocoapods\u96c6\u6210-1"},"Cocoapods\u96c6\u6210"),(0,r.kt)("p",null,"\u5728\u60a8\u7684Podfile\u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics-cdp/Tracker'\n")),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\n\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pod update")),(0,r.kt)("h3",{id:"\u6dfb\u52a0-url-scheme-1"},"\u6dfb\u52a0 URL Scheme"),(0,r.kt)("p",null,"URL Scheme \u662f\u60a8\u5728 GrowingIO \u5e73\u53f0\u521b\u5efa\u5e94\u7528\u65f6\u751f\u6210\u7684\u8be5\u5e94\u7528\u7684\u552f\u4e00\u6807\u8bc6\u3002\u628a URL Scheme \u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u4f7f\u7528Mobile Debug\u7b49\u529f\u80fd\u65f6\u5524\u9192\u60a8\u7684\u5e94\u7528\u3002  "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60a8\u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u5148\u521b\u5efa\u60a8\u7684App\u5e94\u7528\uff0c\u83b7\u53d6 URL Scheme"))),(0,r.kt)("p",null,"\u9009\u62e9\u5de5\u7a0b -> Target -> Info -> URL Types -> \u6dfb\u52a0\u60a8\u7684 URL Scheme \u5373\u53ef"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1265).Z})),(0,r.kt)("h3",{id:"sdk\u521d\u59cb\u5316\u914d\u7f6e-1"},"SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,r.kt)("h4",{id:"\u5bfc\u5165\u5934\u6587\u4ef6growingtrackerh\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684appdelegate-\u7684-applicationdidfinishlaunchingwithoptions-\u65b9\u6cd5\u4e2d\u4e3a\u4f7f-app-\u5408\u89c4\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4"},"\u5bfc\u5165\u5934\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"h4"},'"GrowingTracker.h"'),"\uff0c\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684",(0,r.kt)("inlineCode",{parentName:"h4"},"AppDelegate")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"h4"},"application:didFinishLaunchingWithOptions:")," \u65b9\u6cd5\u4e2d\u3002\u4e3a\u4f7f App \u5408\u89c4\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"h4",href:"/docs/compliance/iosCompliance#%E5%90%88%E8%A7%84%E6%AD%A5%E9%AA%A4"},"\u5408\u89c4\u6b65\u9aa4")),(0,r.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#import "GrowingTracker.h"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Config GrowingIO\n// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n// YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n// YourDatasourceId eg: 11223344aabbcc\nGrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithProjectId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n[GrowingTracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,r.kt)("h4",{id:"\u5728appdelegatem\u6587\u4ef6\u4e2d\u5b9e\u73b0-url-scheme-\u8df3\u8f6c\u4ee5\u53cadeeplink\u8df3\u8f6c\u7684\u4ee3\u7406\u65b9\u6cd5-1"},"\u5728appDelegate.m\u6587\u4ef6\u4e2d\u5b9e\u73b0 URL Scheme \u8df3\u8f6c\u4ee5\u53caDeepLink\u8df3\u8f6c\u7684\u4ee3\u7406\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// URL Scheme\u8df3\u8f6c\n- (BOOL)application:(UIApplication *)application\n            openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication\n         annotation:(id)annotation {\n\n    return NO;\n}\n\n// universal Link\u6267\u884c\n- (BOOL) application:(UIApplication *)application\ncontinueUserActivity:(NSUserActivity *)userActivity\n  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {\n    return YES;\n}\n")),(0,r.kt)("h4",{id:"\u82e5\u4f7f\u7528\u4e86ios-13\u7684-uiscene\u8bf7\u5728\u60a8\u6307\u5b9a\u7684scenedelegate\u4e2d\u8bbe\u7f6e\u5982\u4e0b-1"},"\u82e5\u4f7f\u7528\u4e86iOS 13\u7684 UIScene\uff0c\u8bf7\u5728\u60a8\u6307\u5b9a\u7684SceneDelegate\u4e2d\u8bbe\u7f6e\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {\n}\n\n- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u4ee3\u7406\u65b9\u6cd5\u7a7a\u5b9e\u73b0\u5373\u53ef\uff0cSDK\u4f1a\u81ea\u52a8\u52a0\u5165\u5904\u7406\u4ee3\u7801"))),(0,r.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c-1"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,r.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5\u65e5\u5fd7\u4e2d\u8f93\u51fa\u4e86",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: 3.3.0"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660eSDK\u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,r.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"debugEnabled")," \u8bbe\u7f6e\u4e3aYES\uff0c\u6253\u5f00\u4e86Debug\uff0c\u5219\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684log\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u5c31\u5b8c\u6210\u4e86\u57cb\u70b9 SDK \u7684\u96c6\u6210\u3002"),(0,r.kt)("h2",{id:"app-store\u63d0\u4ea4\u5e94\u7528\u6ce8\u610f\u4e8b\u9879"},"App Store\u63d0\u4ea4\u5e94\u7528\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6dfb\u52a0\u4e86\u5e93",(0,r.kt)("inlineCode",{parentName:"p"},"AdSupport.framework"),", GrowingIO\u5219\u4f1a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\uff0c\u6240\u4ee5\u5728\u5411 App Store \u63d0\u4ea4\u5e94\u7528\u65f6\uff0c\u9700\u8981\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u95ee\u9898 Does this app use the Advertising Identifier (IDFA)\uff0c\u9009\u62e9 YES\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u9009\u9879Attribute this app installation to a previously served advertisement\uff0c\u6253\u52fe\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u9009\u9879Attribute an action taken within this app to a previously served advertisement\uff0c\u6253\u52fe\u3002"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Q: \u4e3a\u4ec0\u4e48 GrowingIO SDK \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"? ",(0,r.kt)("br",null),"\nA: GrowingIO \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u6765\u505a\u6765\u6e90\u7ba1\u7406\u6fc0\u6d3b\u8bbe\u5907\u7684\u7cbe\u786e\u5339\u914d\uff0c\u8ba9\u60a8\u66f4\u597d\u7684\u8861\u91cf\u5e7f\u544a\u6548\u679c\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\uff0c\u53ef\u4ee5\u9009\u62e9\u4e0d\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"AdSupport.framework")))),(0,r.kt)("h3",{id:"\u5173\u4e8e-idfa-\u6743\u9650\u83b7\u53d6"},"\u5173\u4e8e IDFA \u6743\u9650\u83b7\u53d6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8eiOS 14\u4e4b\u524d\uff0c\u60a8\u65e0\u9700\u4e3b\u52a8\u83b7\u53d6 \u5e7f\u544a\u6807\u8bc6",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA"),"\u7684\u6743\u9650")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8eiOS 14\u4e4b\u540e\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u65b9\u6cd5\u6765\u5f00\u542f\u60a8\u7684 \u5e7f\u544a\u6807\u8bc6",(0,r.kt)("inlineCode",{parentName:"p"},"IDFA")," \u7684\u6743\u9650"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"2021 \u5e74 4 \u6708 27 \u65e5\uff0ciOS 14.5 \u6b63\u5f0f\u53d1\u5e03\uff0c\u65b0\u7248\u672c\u7684 iOS \u6700\u4e3b\u8981\u53d8\u5316\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"div"},"\u81ea iOS14.5\u3001iPadOS 14.5 \u548c tvOS 14.5 \u5f00\u59cb\uff0c\u6240\u6709 App \u90fd\u5fc5\u987b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppTrackingTransparency")," \u6846\u67b6\u6765\u5f81\u5f97\u7528\u6237\u7684\u8bb8\u53ef\uff0c\u624d\u80fd\u5bf9\u5176\u8fdb\u884c\u8ddf\u8e2a\u6216\u8bbf\u95ee\u5176\u8bbe\u5907\u7684\u5e7f\u544a\u6807\u8bc6\u7b26\u3002"),(0,r.kt)("p",{parentName:"div"},"And starting with iOS 14.5, iPadOS 14.5, and tvOS 14.5, you\u2019ll be required to ask users for their permission to track them across apps and websites owned by other companies."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plist \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"NSUserTrackingUsageDescription"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"<key>NSUserTrackingUsageDescription</key>\n<string>GrowingIO\u6d4b\u8bd5demo \u9700\u8981\u4f7f\u7528\u60a8\u7684\u5e7f\u544a\u6807\u8bc6\u4fe1\u606f\u4ee5\u7528\u4e8e\u6570\u636e\u8ffd\u8e2a\u5206\u6790</string> //\u63cf\u8ff0\u5185\u5bb9\u8bf7\u6839\u636eApp\u4fee\u6539\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6846\u67b6 ",(0,r.kt)("inlineCode",{parentName:"p"},"#import <AppTrackingTransparency/AppTrackingTransparency.h>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8c03\u7528\u83b7\u53d6\u6743\u9650\u4ee3\u7801"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"\n- (void)applicationDidBecomeActive:(UIApplication *)application {\n  // \u8c03\u7528AppTrackingTransparency\u76f8\u5173\u5b9e\u73b0\u8bf7\u5728ApplicationDidBecomeActive\u4e4b\u540e\uff0c\u9002\u914diOS 15\n  // \u53c2\u8003: https://developer.apple.com/forums/thread/690607?answerId=688798022#688798022\n  if (@available(iOS 14, *)) {\n     // iOS14\u53ca\u4ee5\u4e0a\u7248\u672c\u9700\u8981\u5148\u8bf7\u6c42\u6743\u9650\n     [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {\n         switch (status) {\n             case ATTrackingManagerAuthorizationStatusDenied:\n                 //\u7528\u6237\u62d2\u7edd\u5411App\u6388\u6743\n                 break;\n             case ATTrackingManagerAuthorizationStatusAuthorized:\n                 //\u7528\u6237\u540c\u610f\u5411App\u6388\u6743\n                 break;\n             case ATTrackingManagerAuthorizationStatusNotDetermined:\n                 //\u7528\u6237\u672a\u505a\u9009\u62e9\u6216\u672a\u5f39\u7a97\n                 break;\n             case ATTrackingManagerAuthorizationStatusRestricted:\n                 //\u7528\u6237\u5728\u7cfb\u7edf\u7ea7\u522b\u5f00\u542f\u4e86\u9650\u5236\u5e7f\u544a\u8ffd\u8e2a\n                 break;\n             default:\n                 break;\n         }\n     }];\n }\n}\n")),(0,r.kt)("h3",{id:"\u5173\u4e8e\u4f7f\u7528-idfa-\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237id"},"\u5173\u4e8e\u4f7f\u7528 IDFA \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID"),(0,r.kt)("p",null,"GrowingIO SDK \u4f7f\u7528 \u8bbf\u95ee\u7528\u6237ID \u6807\u8bc6\u8bbf\u95ee\u7528\u6237 \uff0c\u5176\u503c\u4f7f\u7528 IDFA \u3001IDFV \u6216 \u968f\u673a\u5b57\u7b26\u4e32 \uff0c\u4e09\u8005\u7684\u4f18\u5148\u7ea7\u4e3a IDFA > IDFV > \u968f\u673a\u5b57\u7b26\u4e32 \uff0c\u4f8b\u5982\uff1a\u5982\u679c\u83b7\u53d6\u4e0d\u5230 IDFA\uff0cSDK \u4f1a\u4f7f\u7528 IDFV \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\u3002"),(0,r.kt)("p",null,"\u8bbf\u95ee\u7528\u6237ID\u751f\u6210\u65f6\u673a\u662f\u5728 SDK \u7b2c\u4e00\u6b21\u521d\u59cb\u5316\u65f6\uff0c\u751f\u6210\u4e4b\u540e\u4f1a\u88ab\u5b58\u50a8\u5728 Keychain \u4e2d\uff0c\u5982\u679c Keychain \u6570\u636e\u4e00\u76f4\u5b58\u5728\uff0c\u5219\u8bbf\u95ee\u7528\u6237ID\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528 IDFA \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff0c\u5219\u9700\u8981\u5728\u8bf7\u6c42\u83b7\u53d6 IDFA \u6743\u9650\u4e4b\u540e\u518d\u521d\u59cb\u5316SDK\u3002\u5982\u679c\u7528\u6237\u4e0d\u5141\u8bb8\u5e7f\u544a\u8ddf\u8e2a\uff0c\u5219\u4f1a\u6309\u7167 IDFV > \u968f\u673a\u5b57\u7b26\u4e32 \u7684\u903b\u8f91\u751f\u6210\u8bbf\u95ee\u7528\u6237ID\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"- (void)applicationDidBecomeActive:(UIApplication *)application {\n  // \u8c03\u7528AppTrackingTransparency\u76f8\u5173\u5b9e\u73b0\u8bf7\u5728ApplicationDidBecomeActive\u4e4b\u540e\uff0c\u9002\u914diOS 15\n  // \u53c2\u8003: https://developer.apple.com/forums/thread/690607?answerId=688798022#688798022\n  if (@available(iOS 14, *)) {\n    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {\n      // \u521d\u59cb\u5316 GrowingIO SDK\n    }];\n  } else {\n    // \u521d\u59cb\u5316 GrowingIO SDK\n  }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 IDFA \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff0c\u540c\u65f6\u4e3a\u4f7f App \u5408\u89c4\uff0c\u5219\u7b2c\u4e00\u6b21SDK\u521d\u59cb\u5316\u5e94\u8be5\u5728 \u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u548c\u83b7\u53d6 IDFA \u6743\u9650\u4e4b\u540e\u3002\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/compliance/iosCompliance#%E5%90%88%E8%A7%84%E6%AD%A5%E9%AA%A4"},"\u5408\u89c4\u6b65\u9aa4")))))}m.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})},6745:function(e,n,t){n.Z=t.p+"assets/images/createapplication-241aaf42ded1927f70965a5c2968ad63.png"},1265:function(e,n,t){n.Z=t.p+"assets/images/iOS_Setting_URLScheme-da6bcdeb331b919334489a6b9e295ecc.png"},8910:function(e,n,t){n.Z=t.p+"assets/images/showappdatasourceid-c07fdb45bb5e5bb67d7f721116bf91b8.png"}}]);