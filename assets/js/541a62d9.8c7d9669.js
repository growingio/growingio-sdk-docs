"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,title:"Android \u5e38\u89c1\u95ee\u9898"},i=void 0,l={unversionedId:"android",id:"android",title:"Android \u5e38\u89c1\u95ee\u9898",description:"1. \u96c6\u6210SDK\u540e\u672c\u5730\u8fd0\u884c\u6253\u5305\u6ca1\u95ee\u9898\uff0c\u7ebf\u4e0a\u81ea\u52a8\u5316\u6253\u5305\u53d1\u73b0SDK\u62a5\u9519\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",source:"@site/question/android.md",sourceDirName:".",slug:"/android",permalink:"/growingio-sdk-docs/question/android",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/question/android.md",tags:[],version:"current",lastUpdatedAt:1694088995,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Android \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"SDK \u5171\u6027\u95ee\u9898",permalink:"/growingio-sdk-docs/question/common"},next:{title:"iOS \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/ios"}},d={},s=[{value:"1. \u96c6\u6210SDK\u540e\u672c\u5730\u8fd0\u884c\u6253\u5305\u6ca1\u95ee\u9898\uff0c\u7ebf\u4e0a\u81ea\u52a8\u5316\u6253\u5305\u53d1\u73b0SDK\u62a5\u9519\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"1-\u96c6\u6210sdk\u540e\u672c\u5730\u8fd0\u884c\u6253\u5305\u6ca1\u95ee\u9898\u7ebf\u4e0a\u81ea\u52a8\u5316\u6253\u5305\u53d1\u73b0sdk\u62a5\u9519\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"2. \u5347\u7ea7SDK\u540e\u53d1\u73b0\u6709\u4e00\u90e8\u5206\u63a5\u53e3\u65e0\u6cd5\u4f7f\u7528\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"2-\u5347\u7ea7sdk\u540e\u53d1\u73b0\u6709\u4e00\u90e8\u5206\u63a5\u53e3\u65e0\u6cd5\u4f7f\u7528\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"4. Android \u8fd0\u884c\u62a5\u9519NoClassDefFoundError\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"4-android-\u8fd0\u884c\u62a5\u9519noclassdeffounderror\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"5. Android SDK \u83b7\u53d6\u8bbf\u95ee\u7528\u6237ID \u8fd4\u56de null\uff0c\u662f\u5728\u521d\u59cb\u5316\u4e4b\u540e\u83b7\u53d6\u7684\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0\uff1f",id:"5-android-sdk-\u83b7\u53d6\u8bbf\u95ee\u7528\u6237id-\u8fd4\u56de-null\u662f\u5728\u521d\u59cb\u5316\u4e4b\u540e\u83b7\u53d6\u7684\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0",level:3},{value:"6. Android SDK \u5305\u6587\u4ef6\u540c\u6b65\u62a5\u9519\uff0c\u6216\u62a5\u627e\u4e0d\u5230\u5305\u6587\u4ef6\uff0c\u5305\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"6-android-sdk-\u5305\u6587\u4ef6\u540c\u6b65\u62a5\u9519\u6216\u62a5\u627e\u4e0d\u5230\u5305\u6587\u4ef6\u5305\u6587\u4ef6\u4e0d\u5b58\u5728\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"7.Android \u6253\u5305\u7684\u95ee\u9898\uff0c Invalid opcode 169",id:"7android-\u6253\u5305\u7684\u95ee\u9898-invalid-opcode-169",level:3},{value:"8.\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"8\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\u4e3a\u4ec0\u4e48",level:3},{value:"9.\u4ec0\u4e48\u662f SNAPSHOT \u7248\u672c\uff1f",id:"9\u4ec0\u4e48\u662f-snapshot-\u7248\u672c",level:3},{value:"10.\u82e5minSdkTarget Android5.0\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86 <code>multidex</code>\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"10\u82e5minsdktarget-android50\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86-multidex\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"11. <code>autotracker-gradle-plugin</code>\u9ed8\u8ba4\u4f9d\u8d56\u7248\u672c\u662f\u591a\u5c11\uff1f\u5982\u4f55\u5728\u4f4e\u7248\u672c\u4e2d\u4f7f\u7528\uff1f",id:"11-autotracker-gradle-plugin\u9ed8\u8ba4\u4f9d\u8d56\u7248\u672c\u662f\u591a\u5c11\u5982\u4f55\u5728\u4f4e\u7248\u672c\u4e2d\u4f7f\u7528",level:3},{value:"12. APP\u5185\u5d4cH5\u9875\u9762\u9700\u8981\u4e0eAPP\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f",id:"12-app\u5185\u5d4ch5\u9875\u9762\u9700\u8981\u4e0eapp\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210sdk",level:3},{value:"13. SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f",id:"13-sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\u4ee5\u53cagdpr\u6b27\u76df\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b",level:3}],p=(u="ImageLoader",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const c={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u96c6\u6210sdk\u540e\u672c\u5730\u8fd0\u884c\u6253\u5305\u6ca1\u95ee\u9898\u7ebf\u4e0a\u81ea\u52a8\u5316\u6253\u5305\u53d1\u73b0sdk\u62a5\u9519\u8be5\u600e\u4e48\u5904\u7406"},"1. \u96c6\u6210SDK\u540e\u672c\u5730\u8fd0\u884c\u6253\u5305\u6ca1\u95ee\u9898\uff0c\u7ebf\u4e0a\u81ea\u52a8\u5316\u6253\u5305\u53d1\u73b0SDK\u62a5\u9519\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u9700\u8981\u6392\u67e5\u7ebf\u4e0a\u6253\u5305\u73af\u5883\u4e0e\u672c\u5730\u73af\u5883\u54ea\u91cc\u4e0d\u4e00\u81f4\uff0c\u5e76\u975eSDK \u7684\u95ee\u9898"),(0,o.kt)("h3",{id:"2-\u5347\u7ea7sdk\u540e\u53d1\u73b0\u6709\u4e00\u90e8\u5206\u63a5\u53e3\u65e0\u6cd5\u4f7f\u7528\u8be5\u600e\u4e48\u5904\u7406"},"2. \u5347\u7ea7SDK\u540e\u53d1\u73b0\u6709\u4e00\u90e8\u5206\u63a5\u53e3\u65e0\u6cd5\u4f7f\u7528\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker/releases"},"SDK Releases")," \u4e2d\u67e5\u770b\u63a5\u53e3\u53d8\u66f4\u8bb0\u5f55\u3002\n\u4e00\u822c\u63a5\u53e3\u4f1a\u5148\u5728\u5f53\u524d\u7248\u672c\u6807\u8bc6\u5e9f\u5f03\u63a5\u53e3/\u529f\u80fd\uff0c\u7136\u540e\u5c06\u5728\u4e0b\u4e00\u4e2a\u5927\u7248\u672c\u4e2d\u79fb\u9664\uff08\u59823.4.x\u4e2d\u6807\u8bc6@Deprecated\uff0c\u5728\u5347\u7ea7\u52303.5.x\u65f6\u76f8\u5173\u63a5\u53e3/\u529f\u80fd\u5c06\u88ab\u79fb\u9664\uff09"),(0,o.kt)("h3",{id:"4-android-\u8fd0\u884c\u62a5\u9519noclassdeffounderror\u8be5\u600e\u4e48\u5904\u7406"},"4. Android \u8fd0\u884c\u62a5\u9519NoClassDefFoundError\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:"),"\u786e\u8ba4\u624b\u52a8\u5b89\u88c5debug\u5305\u540e\u4f9d\u7136\u5d29\u6e83\u7684\u8bdd\uff0c\u9ebb\u70e6\u60a8\u6ce8\u91ca\u6240\u6709\u6df7\u6dc6\u4ee3\u7801\u518d\u8bd5\u4e00\u6b21\uff0c\u770b\u662f\u5426\u4f1a\u5d29\u6e83\u3002\n\u8ba9\u5ba2\u6237\u8bd5\u8bd5\u628a\u6df7\u6dc6\u4ee3\u7801\u90fd\u6ce8\u91ca\u8bd5\u8bd5\u3002\u7c7b\u627e\u4e0d\u5230\u4e00\u822c\u90fd\u662f\u672a\u6b63\u5e38\u6df7\u6dc6\u4ee3\u7801",(0,o.kt)("br",null),"\n\u5982\u679c\u4ee5\u4e0a\u529e\u6cd5\u8fd8\u672a\u89e3\u51b3\u53c2\u8003\u5982\u4e0b\uff1a",(0,o.kt)("br",null),"\n\u2460\u67e5\u770b\u521d\u59cb\u5316\u662f\u5426\u6b63\u786eonCreate()\u6dfb\u52a0\u7684\u987a\u5e8f\u662f\u5426\u6b63\u786e\uff0c\u4e00\u5b9a\u8981\u5148\u6267\u884csuper.onCreate();\u518d\u521d\u59cb\u5316GrowingIO\uff0c\u5728BaseApplication",(0,o.kt)("br",null),"\n\u2461\u68c0\u67e5debug\u6a21\u5f0f\u4e0b\u7c7b\u6bd4release\u591a\uff0c\u5206\u6210\u4e24\u4e2adex\u5305\u4e86",(0,o.kt)("br",null),"\n\u2462\u67e5\u770b\u624b\u673a\u7cfb\u7edf6.0\u9ed8\u8ba4\u652f\u6301multidex\u7684\uff0c4.4\u592a\u4f4e\u4e86\uff0c\u7ee7\u627f\u4e00\u4e0bMultiDexApplication\u5c31\u90fd\u53ef\u4ee5\u652f\u6301\u4e86"),(0,o.kt)("h3",{id:"5-android-sdk-\u83b7\u53d6\u8bbf\u95ee\u7528\u6237id-\u8fd4\u56de-null\u662f\u5728\u521d\u59cb\u5316\u4e4b\u540e\u83b7\u53d6\u7684\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0"},"5. Android SDK \u83b7\u53d6\u8bbf\u95ee\u7528\u6237ID \u8fd4\u56de null\uff0c\u662f\u5728\u521d\u59cb\u5316\u4e4b\u540e\u83b7\u53d6\u7684\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:"),"\n\u521d\u59cb\u5316\u5931\u8d25\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u6709\u4e2aEmptyGrowingIO,\u6b64\u65f6\u8c03\u7528\u5c31\u4f1a\u8fd4\u56denull\u3002\u770b\u4e0b\u521d\u59cb\u5316growing\u7684log\u65e5\u5fd7\uff0c\u5931\u8d25\u4f1a\u5728\u5728log\u4e2d\u8f93\u51fa\u6709\u5bf9\u5e94\u7684\u539f\u56e0\u3002\n\u5df2\u77e5\u7684\u5931\u8d25\u539f\u56e0\u6709\u5982\u4e0b\u4ee3\u7801\u5224\u65ad\uff1a",(0,o.kt)("br",null)),(0,o.kt)(p,{path:"img/question/androidiniterror",mdxType:"ImageLoader"}),(0,o.kt)("h3",{id:"6-android-sdk-\u5305\u6587\u4ef6\u540c\u6b65\u62a5\u9519\u6216\u62a5\u627e\u4e0d\u5230\u5305\u6587\u4ef6\u5305\u6587\u4ef6\u4e0d\u5b58\u5728\u8be5\u600e\u4e48\u5904\u7406"},"6. Android SDK \u5305\u6587\u4ef6\u540c\u6b65\u62a5\u9519\uff0c\u6216\u62a5\u627e\u4e0d\u5230\u5305\u6587\u4ef6\uff0c\u5305\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,o.kt)("p",null,"Could not HEAD. Received status code 400 from server: Bad Request",(0,o.kt)("br",null)),(0,o.kt)(p,{path:"img/question/BadRequest",mdxType:"ImageLoader"}),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u5728\u5f00\u53d1\u5de5\u5177\u4e2d\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c",(0,o.kt)("br",null)),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Preferences->Appearance & Behavior->System Settings->HTTP Proxy \u8bbe\u7f6e\u4e3a No proxy",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},"\u53bb\u6389\u9879\u76ee\u4e2d gradle.properties \u91cc\u7684\u4ee3\u7406\u914d\u7f6e\u4fe1\u606f",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},"\u53bb\u6389 .gradle/gradle.properties \u91cc\u7684\u4ee3\u7406\u914d\u7f6e\u4fe1\u606f",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u8bd5 sync")),(0,o.kt)("h3",{id:"7android-\u6253\u5305\u7684\u95ee\u9898-invalid-opcode-169"},"7.Android \u6253\u5305\u7684\u95ee\u9898\uff0c Invalid opcode 169"),(0,o.kt)("p",null,"\u63d0\u793a\uff1a",(0,o.kt)("br",null),"\n","[Autotrack.error]"," Unfortunately, an error has occurred while processing com/google/iot/protobuf/DescriptorProtos$UninterpretedOption. Please copy your build logs and the jar containing this class and visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.growingio.com"},"https://www.growingio.com"),", thanks!  Invalid opcode 169",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"A:"),"\u8fd9\u4e2a\u662fasm 7.0\u4e0a\u7684\u95ee\u9898\uff0c\u95ee\u9898\u6e90\u81ea\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.ow2.org/asm/asm/-/issues/317873"},"https://gitlab.ow2.org/asm/asm/-/issues/317873"),(0,o.kt)("br",null),"\n\u5ba2\u6237\u53ef\u4ee5\u5728\u7f16\u8bd1\u914d\u7f6e\u7684\u65f6\u5019 exclude \u8fd9\u4e2a\u5305 \u201ccom/google/iot\u201d",(0,o.kt)("br",null),"\nagp7.0\u4e4b\u540e\u4f7f\u7528\u4e86asm7.0\u7684\u5e93\uff0casm7.0\u5bf9java1.6\u7f16\u8bd1\u7684\u7c7b\u5904\u7406\u6709\u95ee\u9898\uff0c\u786e\u8ba4\u4e00\u4e0b\u8fd9\u4e2a\u7c7b\u6765\u81ea\u54ea\u4e2a\u5305\uff0c\u5982\u679c\u6ca1\u6709\u6ce8\u5165\u7684\u9700\u8981\u53ef\u4ee5exclude\u6389\u8fd9\u4e2apackage\u6216\u8005\u4e0d\u5904\u7406\u8fd9\u4e2a\u5f02\u5e38",(0,o.kt)("br",null),"\n./gradlew buildEnvironment \u53ef\u4ee5\u770b\u54ea\u4e2a\u63d2\u4ef6\u4f9d\u8d56\u4e86 asm7.0\u7684\u5e93",(0,o.kt)("br",null),"\n\u5982\u679c\u9700\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u4f9d\u8d56asm 7.2\u7684\u7248\u672c\u4fee\u590d",(0,o.kt)("br",null),"\n\u8fd9\u662fasm\u4e0a\u7684issue\u4ee5\u53ca\u4fee\u590d\u7684commit",(0,o.kt)("br",null),"\nissue: ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.ow2.org/asm/asm/-/issues/317873"},"https://gitlab.ow2.org/asm/asm/-/issues/317873"),(0,o.kt)("br",null),"\ncommit: ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.ow2.org/asm/asm/-/commit/c4241012de8e0502dfe98bd036ab469e622e06fc"},"https://gitlab.ow2.org/asm/asm/-/commit/c4241012de8e0502dfe98bd036ab469e622e06fc")),(0,o.kt)("h3",{id:"8\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\u4e3a\u4ec0\u4e48"},"8.\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u5bf9\u4e8eSDK\u521d\u59cb\u5316\u4e4b\u524d\uff0c\u6216\u8005\u5f00\u542f\u6570\u636e\u91c7\u96c6\u4e4b\u524d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u4e00\u6982\u4e22\u5f03\u3002"),(0,o.kt)("h3",{id:"9\u4ec0\u4e48\u662f-snapshot-\u7248\u672c"},"9.\u4ec0\u4e48\u662f SNAPSHOT \u7248\u672c\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u62e5\u6709\u8be5\u540e\u7f00\u7684SDK\u7248\u672c\u5c5e\u4e8e\u6d4b\u8bd5\u9636\u6bb5\u7684SDK\u5feb\u7167\u7248\u672c\uff0c\u5728\u5b8c\u6210\u6d4b\u8bd5\u540e\u4f1a\u5c06\u5176\u8f6c\u4e3a\u6b63\u5f0f\u7248\u672c\u3002\n\u82e5\u8981\u4f7f\u7528\u63d0\u524d\u4f7f\u7528\u8be5\u7248\u672c\uff0c\u8bf7\u5728 project \u7ea7\u522b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u4e0b\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u5305\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'//\u5982\u679c\u4f60\u7684\u7248\u672c\u4e3a xxx-SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u52a0\u5165\u8be5\u4ed3\u5e93\u3002\u4e0e mavenCentral() \u540c\u7ea7\nmaven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n')),(0,o.kt)("h3",{id:"10\u82e5minsdktarget-android50\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86-multidex\u8be5\u600e\u4e48\u5904\u7406"},"10.\u82e5minSdkTarget Android5.0\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"h3"},"multidex"),"\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u9700\u8981\u5728app\u7684build.gradle\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u5c06sdk\u4e2dcontentprovider\u6dfb\u52a0\u5230\u4e3bdex\u4e2d \u5177\u4f53\u914d\u7f6e\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.google.cn/studio/build/multidex?hl=zh_cn#multidexkeepfile-property"},"multiDexKeepFile \u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    buildTypes {\n        release {\n            multiDexKeepFile file('multidex-config.txt')\n            ...\n        }\n    }\n}\n")),(0,o.kt)("p",null,"\u5e76\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"multidex-config.txt")," \u4e2d\u589e\u52a0\u5982\u4e0b\u7c7b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"com/growingio/android/sdk/track/middleware/EventsContentProvider.class\ncom/growingio/android/sdk/track/middleware/EventsInfoTable.class\ncom/growingio/android/sdk/track/middleware/EventsSQLiteOpenHelper.class\n")),(0,o.kt)("h3",{id:"11-autotracker-gradle-plugin\u9ed8\u8ba4\u4f9d\u8d56\u7248\u672c\u662f\u591a\u5c11\u5982\u4f55\u5728\u4f4e\u7248\u672c\u4e2d\u4f7f\u7528"},"11. ",(0,o.kt)("inlineCode",{parentName:"h3"},"autotracker-gradle-plugin"),"\u9ed8\u8ba4\u4f9d\u8d56\u7248\u672c\u662f\u591a\u5c11\uff1f\u5982\u4f55\u5728\u4f4e\u7248\u672c\u4e2d\u4f7f\u7528\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"autotracker-gradle-plugin"),"\u9ed8\u8ba4\u652f\u6301\u4f4e\u7248\u672cAGP\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"com.android.tools.build:gradle:3.3.0"),", \u5982\u679c\u5e0c\u671b \u5728 gradle \u4f4e\u7248\u672c\u4e2d\u4f7f\u7528\u8be5\u4f9d\u8d56\u63d2\u4ef6\uff0c\u8bf7\u963b\u65ad\u63d2\u4ef6\u4e2dgradle\u7684\u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'// \u5728\u914d\u7f6e\u63d2\u4ef6\u4f9d\u8d56\u65f6, \u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u5f15\u5165\nclasspath("com.growingio.android:autotracker-gradle-plugin:3.3.5") {\n    transitive false\n} \n')),(0,o.kt)("h3",{id:"12-app\u5185\u5d4ch5\u9875\u9762\u9700\u8981\u4e0eapp\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210sdk"},"12. APP\u5185\u5d4cH5\u9875\u9762\u9700\u8981\u4e0eAPP\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u8be6\u7ec6\u8bf7\u53c2",(0,o.kt)("a",{parentName:"p",href:"/docs/android/modules/hybrid%20module"},"\u5185\u5d4ch5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e")),(0,o.kt)("h3",{id:"13-sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\u4ee5\u53cagdpr\u6b27\u76df\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"},"13. SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/compliance/androidCompliance"},"Android SDK\u5408\u89c4\u8bf4\u660e")))}m.isMDXComponent=!0}}]);