(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4982],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=p(n),N=r,u=k["".concat(d,".").concat(N)]||k[N]||m[N]||i;return n?a.createElement(u,l(l({ref:e},c),{},{components:n})):a.createElement(u,l({ref:e},c))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8215:function(t,e,n){"use strict";var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var a=n(7294),r=n(9443);var i=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),o="tabItem_1uMI",d="tabItemActive_2DSg";var p=37,c=39;var m=function(t){var e=t.lazy,n=t.block,r=t.defaultValue,m=t.values,k=t.groupId,N=t.className,u=i(),g=u.tabGroupChoices,s=u.setTabGroupChoices,f=(0,a.useState)(r),b=f[0],S=f[1],C=a.Children.toArray(t.children),h=[];if(null!=k){var v=g[k];null!=v&&v!==b&&m.some((function(t){return t.value===v}))&&S(v)}var y=function(t){var e=t.currentTarget,n=h.indexOf(e),a=m[n].value;S(a),null!=k&&(s(k,a),setTimeout((function(){var t,n,a,r,i,l,o,p;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,l=window,o=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(d),setTimeout((function(){return e.classList.remove(d)}),2e3))}),150))},O=function(t){var e,n;switch(t.keyCode){case c:var a=h.indexOf(t.target)+1;n=h[a]||h[0];break;case p:var r=h.indexOf(t.target)-1;n=h[r]||h[h.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},N)},m.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===e}),key:e,ref:function(t){return h.push(t)},onKeyDown:O,onFocus:y,onClick:y},n)}))),e?(0,a.cloneElement)(C.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},C.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},9443:function(t,e,n){"use strict";var a=(0,n(7294).createContext)(void 0);e.Z=a},5636:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=(n(5064),n(8215),["components"]),o={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},d=void 0,p={unversionedId:"ios/base/Getting_Started",id:"ios/base/Getting_Started",isDocsHomePage:!1,title:"\u5982\u4f55\u96c6\u6210",description:"iOS SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9 \u548c \u57cb\u70b9 \u4e24\u4e2aSDK\u7248\u672c\uff1a",source:"@site/docs/ios/base/Getting_Started.md",sourceDirName:"ios/base",slug:"/ios/base/Getting_Started",permalink:"/growingio-sdk-docs/docs/ios/base/Getting_Started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios/base/Getting_Started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/docs/android/question"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/ios/base/Configuration"}},c=[{value:"\u65e0\u57cb\u70b9SDK\u96c6\u6210",id:"\u65e0\u57cb\u70b9sdk\u96c6\u6210",children:[]},{value:"1. Cocoapods\u96c6\u6210",id:"1-cocoapods\u96c6\u6210",children:[]},{value:"2. \u6dfb\u52a0 URL Scheme",id:"2-\u6dfb\u52a0-url-scheme",children:[]},{value:"3. SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"3-sdk\u521d\u59cb\u5316\u914d\u7f6e",children:[]},{value:"4. SDK \u521d\u59cb\u5316\u914d\u7f6e\u9879",id:"4-sdk-\u521d\u59cb\u5316\u914d\u7f6e\u9879",children:[]},{value:"\u57cb\u70b9SDK\u96c6\u6210",id:"\u57cb\u70b9sdk\u96c6\u6210",children:[]},{value:"1. Cocoapods\u96c6\u6210",id:"1-cocoapods\u96c6\u6210-1",children:[]},{value:"2. \u6dfb\u52a0 URL Scheme",id:"2-\u6dfb\u52a0-url-scheme-1",children:[]},{value:"3. SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"3-sdk\u521d\u59cb\u5316\u914d\u7f6e-1",children:[]},{value:"4. SDK \u521d\u59cb\u5316\u914d\u7f6e\u9879",id:"4-sdk-\u521d\u59cb\u5316\u914d\u7f6e\u9879-1",children:[]}],m={toc:c};function k(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"iOS SDK \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u65e0\u57cb\u70b9")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u57cb\u70b9")," \u4e24\u4e2aSDK\u7248\u672c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57cb\u70b9 SDK \u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6;"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9 SDK \u5177\u5907\u57cb\u70b9 SDK \u7684\u6240\u6709\u529f\u80fd\uff0c\u540c\u65f6\u5177\u5907\u81ea\u52a8\u91c7\u96c6\u57fa\u672c\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u5982\u9875\u9762\u8bbf\u95ee\uff0c\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002")),(0,i.kt)("p",null,"\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker"},"Github")," ",(0,i.kt)("br",null),"\nCDP\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u6258\u7ba1\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker-cdp"},"Github")),(0,i.kt)("p",null,"\u6b22\u8fce star,fork \u4e00\u6ce2\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u73af\u5883")," ",(0,i.kt)("br",null),"\nXcode 9.0 \u53ca\u4ee5\u4e0a",(0,i.kt)("br",{parentName:"p"}),"\n","iOS 8.0 \u53ca\u4ee5\u4e0a")),(0,i.kt)("h3",{id:"\u65e0\u57cb\u70b9sdk\u96c6\u6210"},"\u65e0\u57cb\u70b9SDK\u96c6\u6210"),(0,i.kt)("h3",{id:"1-cocoapods\u96c6\u6210"},"1. Cocoapods\u96c6\u6210"),(0,i.kt)("p",null,"\u5728\u4f60\u7684Podfile\u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics-cdp/Autotracker'\n")),(0,i.kt)("h3",{id:"2-\u6dfb\u52a0-url-scheme"},"2. \u6dfb\u52a0 URL Scheme"),(0,i.kt)("p",null,"URL Scheme \u662f\u60a8\u5728 GrowingIO \u5e73\u53f0\u521b\u5efa\u5e94\u7528\u65f6\u751f\u6210\u7684\u8be5\u5e94\u7528\u7684\u552f\u4e00\u6807\u8bc6\u3002\u628a URL Scheme \u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u4f7f\u7528Mobile Debug\u7b49\u529f\u80fd\u65f6\u5524\u9192\u60a8\u7684\u5e94\u7528\u3002  "),(0,i.kt)("p",null,"\u9009\u62e9\u5de5\u7a0b \u2192 Target  \u2192 Info  \u2192 URL Types  \u2192 \u6dfb\u52a0\u60a8\u7684Url Scheme \u5373\u53ef"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," \u4f60\u9700\u8981\u5728GrowingIO\u7f51\u7ad9\u4e0a\u5148\u521b\u5efa\u4f60\u7684App\u5e94\u7528\uff0c\u83b7\u53d6Url Scheme")),(0,i.kt)("h3",{id:"3-sdk\u521d\u59cb\u5316\u914d\u7f6e"},"3. SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u5934\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"li"},'"GrowingAutotracker.h"'),"\uff0c\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"AppDelegate")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," \u65b9\u6cd5\u4e2d",(0,i.kt)("br",{parentName:"li"}),"\u4ee3\u7801\u793a\u4f8b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Config GrowingIO\n// \u53c2\u6570\u9700\u8981\u4eceGrowingIO\u7f51\u7ad9\u4e0a\uff0c\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6 \n// YourProjectId eg:0a1b4118dd954ec3bcc69da5138bdb96\n// YourServerHost eg:http://106.75.81.105:8080\n// YourDatasourceId eg: 11223344aabbcc\nGrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourProjectId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728appDelegate.m\u6587\u4ef6\u4e2d\u5b9e\u73b0urlSchme\u8df3\u8f6c\u4ee5\u53caDeepLink\u8df3\u8f6c\u7684\u4ee3\u7406\u65b9\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// url scheme\u8df3\u8f6c\n- (BOOL)application:(UIApplication *)application\n            openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication\n         annotation:(id)annotation {\n\n    return NO;\n}\n\n// universal Link\u6267\u884c\n- (BOOL) application:(UIApplication *)application\ncontinueUserActivity:(NSUserActivity *)userActivity\n  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {\n    return YES;\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u82e5\u4f7f\u7528\u4e86iOS 13\u7684 UIScene\uff0c\u8bf7\u5728\u4f60\u6307\u5b9a\u7684SceneDelegate\u4e2d\u8bbe\u7f6e\u5982\u4e0b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {\n}\n\n- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u4ee3\u7406\u65b9\u6cd5\u7a7a\u5b9e\u73b0\u5373\u53ef\uff0cSDK\u4f1a\u81ea\u52a8\u52a0\u5165\u5904\u7406\u4ee3\u7801")),(0,i.kt)("h3",{id:"4-sdk-\u521d\u59cb\u5316\u914d\u7f6e\u9879"},"4. SDK \u521d\u59cb\u5316\u914d\u7f6e\u9879"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"API"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b98\u7f51\u7684\u4e2d\u60a8\u7684\u9879\u76eeID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"urlScheme")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b98\u7f51\u7684\u4e2d\u60a8\u7684\u76f8\u5e94APP\u7684UrlScheme")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataSourceId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b98\u7f51\u7684\u4e2d\u60a8\u7684\u76f8\u5e94APP\u7684DataSourceId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataCollectionServerHost")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u90e8\u7f72\u670d\u52a1\u7684\u540e\u7aefHost")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uploadExceptionEnable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6SDK\u5185\u90e8\u5f02\u5e38\u4e0a\u62a5\u670d\u52a1\u7aef")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debugEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NO")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370SDK log\uff0c\u629b\u51fa\u9519\u8bef\u5f02\u5e38\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u52a1\u5fc5\u5173\u95ed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellularDataLimit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataUploadInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sessionInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"30")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u6b21\u8bbf\u95ee\u4f1a\u8bdd\u7684\u6700\u5927\u65f6\u957f\uff0c\u5355\u4f4d\u79d2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataCollectionEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"impressionScale")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 ","[0-1]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"excludeEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8fc7\u6ee4\u7684\u4e8b\u4ef6\u7c7b\u578b\u8ba1\u7b97\u7684\u63a9\u7801\u503c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ignoreField")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u4e2d\u9700\u8981\u8fc7\u6ee4\u7684\u5c5e\u6027\u8ba1\u7b97\u7684\u63a9\u7801\u503c")))),(0,i.kt)("h3",{id:"\u57cb\u70b9sdk\u96c6\u6210"},"\u57cb\u70b9SDK\u96c6\u6210"),(0,i.kt)("p",null,"\u57cb\u70b9 SDK\u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\u548cAPP\u5173\u95ed\u4e8b\u4ef6\uff0c\u5176\u4ed6\u4e8b\u4ef6\u5747\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,i.kt)("h3",{id:"1-cocoapods\u96c6\u6210-1"},"1. Cocoapods\u96c6\u6210"),(0,i.kt)("p",null,"\u5728\u4f60\u7684Podfile\u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics-cdp/Tracker'\n")),(0,i.kt)("h3",{id:"2-\u6dfb\u52a0-url-scheme-1"},"2. \u6dfb\u52a0 URL Scheme"),(0,i.kt)("p",null,"URL Scheme \u662f\u60a8\u5728 GrowingIO \u5e73\u53f0\u521b\u5efa\u5e94\u7528\u65f6\u751f\u6210\u7684\u8be5\u5e94\u7528\u7684\u552f\u4e00\u6807\u8bc6\u3002\u628a URL Scheme \u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u4f7f\u7528Mobile Debug\u7b49\u529f\u80fd\u65f6\u5524\u9192\u60a8\u7684\u5e94\u7528\u3002  "),(0,i.kt)("p",null,"\u9009\u62e9\u5de5\u7a0b -> Target -> Info -> URL Types -> \u6dfb\u52a0\u60a8\u7684Url Scheme \u5373\u53ef"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," \u4f60\u9700\u8981\u5728GrowingIO\u7f51\u7ad9\u4e0a\u5148\u521b\u5efa\u4f60\u7684App\u5e94\u7528\uff0c\u83b7\u53d6Url Scheme")),(0,i.kt)("h3",{id:"3-sdk\u521d\u59cb\u5316\u914d\u7f6e-1"},"3. SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u5934\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"li"},'"GrowingTracker.h"'),"\uff0c\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"AppDelegate")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," \u65b9\u6cd5\u4e2d",(0,i.kt)("br",{parentName:"li"}),"\u4ee3\u7801\u793a\u4f8b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Config GrowingIO\n// \u53c2\u6570\u9700\u8981\u4eceGrowingIO\u7f51\u7ad9\u4e0a\uff0c\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6 \n// YourProjectId eg:0a1b4118dd954ec3bcc69da5138bdb96\n// YourServerHost eg:http://106.75.81.105:8080\n// YourDatasourceId eg: 11223344aabbcc\nGrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithProjectId:@"YourProjectId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n[GrowingTracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728appDelegate.m\u6587\u4ef6\u4e2d\u5b9e\u73b0urlSchme\u8df3\u8f6c\u4ee5\u53caDeepLink\u8df3\u8f6c\u7684\u4ee3\u7406\u65b9\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// url scheme\u8df3\u8f6c\n- (BOOL)application:(UIApplication *)application\n            openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication\n         annotation:(id)annotation {\n\n    return NO;\n}\n\n// universal Link\u6267\u884c\n- (BOOL) application:(UIApplication *)application\ncontinueUserActivity:(NSUserActivity *)userActivity\n  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {\n    return YES;\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u82e5\u4f7f\u7528\u4e86iOS 13\u7684 UIScene\uff0c\u8bf7\u5728\u4f60\u6307\u5b9a\u7684SceneDelegate\u4e2d\u8bbe\u7f6e\u5982\u4e0b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {\n}\n\n- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u4ee3\u7406\u65b9\u6cd5\u7a7a\u5b9e\u73b0\u5373\u53ef\uff0cSDK\u4f1a\u81ea\u52a8\u52a0\u5165\u5904\u7406\u4ee3\u7801")),(0,i.kt)("h3",{id:"4-sdk-\u521d\u59cb\u5316\u914d\u7f6e\u9879-1"},"4. SDK \u521d\u59cb\u5316\u914d\u7f6e\u9879"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"API"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b98\u7f51\u7684\u4e2d\u60a8\u7684\u9879\u76eeID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"urlScheme")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b98\u7f51\u7684\u4e2d\u60a8\u7684\u76f8\u5e94APP\u7684UrlScheme")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataSourceId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b98\u7f51\u7684\u4e2d\u60a8\u7684\u76f8\u5e94APP\u7684DataSourceId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataCollectionServerHost")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u90e8\u7f72\u670d\u52a1\u7684\u540e\u7aefHost")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uploadExceptionEnable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6SDK\u5185\u90e8\u5f02\u5e38\u4e0a\u62a5\u670d\u52a1\u7aef")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debugEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NO")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370SDK log\uff0c\u629b\u51fa\u9519\u8bef\u5f02\u5e38\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u52a1\u5fc5\u5173\u95ed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellularDataLimit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataUploadInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sessionInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"30")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u6b21\u8bbf\u95ee\u4f1a\u8bdd\u7684\u6700\u5927\u65f6\u957f\uff0c\u5355\u4f4d\u79d2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataCollectionEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"excludeEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8fc7\u6ee4\u7684\u4e8b\u4ef6\u7c7b\u578b\u8ba1\u7b97\u7684\u63a9\u7801\u503c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ignoreField")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u4e2d\u9700\u8981\u8fc7\u6ee4\u7684\u5c5e\u6027\u8ba1\u7b97\u7684\u63a9\u7801\u503c")))))}k.isMDXComponent=!0},6010:function(t,e,n){"use strict";function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);