(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4001],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,m=s["".concat(l,".").concat(g)]||s[g]||u[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],d={sidebar_position:3,title:"\u5e38\u89c1\u95ee\u9898"},l=void 0,c={unversionedId:"android/question",id:"android/question",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"\u5173\u4e8e SNAPSHOT \u7248\u672c",source:"@site/docs/android/question.md",sourceDirName:"android",slug:"/android/question",permalink:"/growingio-sdk-docs/docs/android/question",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/android/question.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"gioSidebar",previous:{title:"\u4e8c\u6b21\u5f00\u53d1",permalink:"/growingio-sdk-docs/docs/android/develop/develop"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/ios/updateRecord"}},p=[{value:"\u5173\u4e8e SNAPSHOT \u7248\u672c",id:"\u5173\u4e8e-snapshot-\u7248\u672c",children:[]},{value:"\u82e5minSdkTarget Android5.0\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86 <code>multidex</code>",id:"\u82e5minsdktarget-android50\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86-multidex",children:[]},{value:"<code>autotracker-gradle-plugin</code>\u9ed8\u8ba4\u4f9d\u8d56",id:"autotracker-gradle-plugin\u9ed8\u8ba4\u4f9d\u8d56",children:[]},{value:"APP\u5185\u5d4cH5\u9875\u9762\u9700\u8981\u4e0eAPP\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f",id:"app\u5185\u5d4ch5\u9875\u9762\u9700\u8981\u4e0eapp\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210sdk\uff1f",children:[]},{value:"SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f",id:"sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u4ee5\u53cagdpr\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5173\u4e8e-snapshot-\u7248\u672c"},"\u5173\u4e8e SNAPSHOT \u7248\u672c"),(0,i.kt)("p",null,"\u62e5\u6709\u8be5\u540e\u7f00\u7684SDK\u7248\u672c\u5c5e\u4e8e\u6d4b\u8bd5\u9636\u6bb5\u7684SDK\u5feb\u7167\u7248\u672c\uff0c\u5728\u5b8c\u6210\u6d4b\u8bd5\u540e\u4f1a\u5c06\u5176\u8f6c\u4e3a\u6b63\u5f0f\u7248\u672c\u3002\n\u82e5\u8981\u4f7f\u7528\u63d0\u524d\u4f7f\u7528\u8be5\u7248\u672c\uff0c\u8bf7\u5728 project \u7ea7\u522b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u4e0b\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u5305\u4ed3\u5e93"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'//\u5982\u679c\u4f60\u7684\u7248\u672c\u4e3a xxx-SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u52a0\u5165\u8be5\u4ed3\u5e93\u3002\u4e0e mavenCentral() \u540c\u7ea7\nmaven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n')),(0,i.kt)("h3",{id:"\u82e5minsdktarget-android50\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86-multidex"},"\u82e5minSdkTarget Android5.0\u53ca\u4ee5\u4e0b\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"h3"},"multidex")),(0,i.kt)("p",null,"\u9700\u8981\u5728app\u7684build.gradle\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u5c06sdk\u4e2dcontentprovider\u6dfb\u52a0\u5230\u4e3bdex\u4e2d \u5177\u4f53\u914d\u7f6e\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.google.cn/studio/build/multidex?hl=zh_cn#multidexkeepfile-property"},"multiDexKeepFile \u5c5e\u6027")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    buildTypes {\n        release {\n            multiDexKeepFile file('multidex-config.txt')\n            ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\u5e76\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"multidex-config.txt")," \u4e2d\u589e\u52a0\u5982\u4e0b\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"com/growingio/android/sdk/track/middleware/EventsContentProvider.class\ncom/growingio/android/sdk/track/middleware/EventsInfoTable.class\ncom/growingio/android/sdk/track/middleware/EventsSQLiteOpenHelper.class\n")),(0,i.kt)("h3",{id:"autotracker-gradle-plugin\u9ed8\u8ba4\u4f9d\u8d56"},(0,i.kt)("inlineCode",{parentName:"h3"},"autotracker-gradle-plugin"),"\u9ed8\u8ba4\u4f9d\u8d56"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"autotracker-gradle-plugin"),"\u9ed8\u8ba4\u4f9d\u8d56\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"com.android.tools.build:gradle:3.3.0"),", \u5982\u679c\u5e0c\u671b \u5728 gradle \u4f4e\u7248\u672c\u4e2d\u4f7f\u7528\u8be5\u4f9d\u8d56\u63d2\u4ef6\uff0c\u8bf7\u963b\u65ad\u63d2\u4ef6\u4e2dgradle\u7684\u7248\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'// \u5728\u914d\u7f6e\u63d2\u4ef6\u4f9d\u8d56\u65f6, \u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u5f15\u5165\nclasspath("com.growingio.android:autotracker-gradle-plugin:3.2.0") {\n    transitive false\n} \n')),(0,i.kt)("h3",{id:"app\u5185\u5d4ch5\u9875\u9762\u9700\u8981\u4e0eapp\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210sdk\uff1f"},"APP\u5185\u5d4cH5\u9875\u9762\u9700\u8981\u4e0eAPP\u8bbf\u95ee\u7528\u6237\u6570\u636e\u6253\u901a\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f"),(0,i.kt)("p",null,"\u8be6\u7ec6\u8bf7\u53c2",(0,i.kt)("a",{parentName:"p",href:"/docs/android/base/Configuration#1-%E5%86%85%E5%B5%8Ch5%E9%A1%B5%E9%9D%A2%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E9%85%8D%E7%BD%AE"},"\u5185\u5d4ch5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e")),(0,i.kt)("h3",{id:"sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u4ee5\u53cagdpr\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f"},"SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\u548c\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u6761\u6b3e\u65f6\uff0c\u53ef\u4ee5\u5728 SDK \u521d\u59cb\u5316\u914d\u7f6e\u65f6\uff0c\u8c03\u7528\xa0setDataCollectionEnabled\xa0\u8bbe\u7f6e\u4e3a\xa0false\uff0c\u7981\u6b62\u6570\u636e\u91c7\u96c6\uff08\u4e0d\u83b7\u53d6\xa0AndroidId\uff0c\u4e0d\u83b7\u53d6\u4efb\u4f55\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4e0a\u62a5\u4efb\u4f55\u6570\u636e\uff09\uff1b",(0,i.kt)("br",null),"\n\u5176\u6b21\uff0c\u5f53\u7528\u6237\u540c\u610f\u9690\u79c1\u6761\u6b3e\u65f6\uff0c\u8c03\u7528GrowingAutotracker.get().setDataCollectionEnabled(true) \u5f00\u542f\u6570\u636e\u91c7\u96c6\uff1b",(0,i.kt)("br",null),"\n\u6700\u540e\uff0c\u5f53\u7528\u6237\u518d\u6b21\u8fdb\u5165app\u65f6\uff0c \u5982\u679c\u5df2\u540c\u610f\u9690\u79c1\u6761\u6b3e\uff0c\u5728 SDK \u521d\u59cb\u5316\u914d\u7f6e\u65f6\uff0c\u8c03\u7528\xa0dataCollectionEnabled\xa0\u8bbe\u7f6e\u4e3a\xa0true\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002"))}s.isMDXComponent=!0}}]);