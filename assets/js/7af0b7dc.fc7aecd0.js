"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2590],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(6010),o="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(7294),o=t(2389),l=t(7392),i=t(7094),u=t(2466),d=t(6010),s="tabList_uSqn",p="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,m=e.block,g=e.defaultValue,f=e.values,k=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.l)(N,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(n=null!=g?g:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),P=w.tabGroupChoices,O=w.setTabGroupChoices,E=(0,a.useState)(y),A=E[0],x=E[1],C=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=P[k];null!=T&&T!==A&&N.some((function(e){return e.value===T}))&&x(T)}var D=function(e){var n=e.currentTarget,t=C.indexOf(n),r=N[t].value;r!==A&&(S(n),x(r),null!=k&&O(k,r))},G=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,d.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":m},v)},N.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,key:n,ref:function(e){return C.push(e)},onKeyDown:G,onFocus:D,onClick:D},o,{className:(0,d.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":A===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==A})}))))}function m(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},29:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=(t(9877),t(2360),["components"]),i={sidebar_position:4,title:"SDK\u63d2\u4ef6\u8bf4\u660e"},u=void 0,d={unversionedId:"android/base/AGP7",id:"android/base/AGP7",title:"SDK\u63d2\u4ef6\u8bf4\u660e",description:"SDK \u63d2\u4ef6\u7248\u672c\u8bb0\u5f55\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5",source:"@site/docs/android/base/AGP7.md",sourceDirName:"android/base",slug:"/android/base/AGP7",permalink:"/growingio-sdk-docs/docs/android/base/AGP7",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/base/AGP7.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SDK\u63d2\u4ef6\u8bf4\u660e"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/android/base/api"},next:{title:"\u4f9d\u8d56\u6e05\u5355",permalink:"/growingio-sdk-docs/docs/android/base/PlatformBom"}},s={},p=[{value:"\u5982\u4f55\u96c6\u6210",id:"\u5982\u4f55\u96c6\u6210",level:2},{value:"\u6dfb\u52a0 Maven \u4ed3\u5e93",id:"\u6dfb\u52a0-maven-\u4ed3\u5e93",level:3},{value:"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84",id:"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84",level:3},{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e",id:"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e",level:2}],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SDK \u63d2\u4ef6\u7248\u672c\u8bb0\u5f55\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Growingio Sdk Gradle Plugin \u5728V3.4.0\u91cd\u65b0\u5f00\u53d1\u540e\uff0c\u5b9e\u73b0\u4e86\u66f4\u591a\u7684\u529f\u80fd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9002\u914d AGP 8.0 Instrumentation API\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u517c\u5bb9 AGP4.2\u53ca\u5176\u66f4\u65e9\u7248\u672c\u7684 Transform API\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4f18\u5316\u63d2\u4ef6\u5bf9\u8131\u7cd6\u7684\u5904\u7406\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u517c\u5bb9 AGP 7.0 \u53ca\u5176\u4ee5\u4e0a pluginManagement \u7684\u4f9d\u8d56\u65b9\u5f0f\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u5355\u5143\u6d4b\u8bd5\u3002")),(0,o.kt)("p",null,"Github \u9879\u76ee\u5730\u5740\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-plugin"},"GrowingIO Android SDK Plugin"),"\uff0c\u6b22\u8fcestar\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u96c6\u6210"},"\u5982\u4f55\u96c6\u6210"),(0,o.kt)("p",null,"\u8fd9\u91cc\u53ea\u8bf4\u660e\u5728 Android Gradle\u63d2\u4ef6\u4e3a7.0\u53ca\u4ee5\u4e0a\u7248\u672c\u65f6\u7684\u96c6\u6210\u65b9\u5f0f\uff0c\u82e5\u662fAGP7\u4ee5\u4e0b\u5219\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/base/Introduce#%E6%B7%BB%E5%8A%A0%E6%8F%92%E4%BB%B6"},"\u63d2\u4ef6\u96c6\u6210")," \u96c6\u6210\u5373\u53ef"),(0,o.kt)("h3",{id:"\u6dfb\u52a0-maven-\u4ed3\u5e93"},"\u6dfb\u52a0 Maven \u4ed3\u5e93"),(0,o.kt)("p",null,"\u9700\u8981\u5728 project \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0Maven\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'// \u5f53AGP\u7248\u672c\u4e3a7.0\u53ca\u4ee5\u4e0a\u6dfb\u52a0\npluginManagement {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n        gradlePluginPortal()\n        google()\n      \n    }\n}\ndependencyResolutionManagement {\n    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n        google()\n    }\n}\n')),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84"},"\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84"),(0,o.kt)("p",null,"\u9700\u8981\u5728 project \u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u4e0b\u6dfb\u52a0 Growingio \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groony"},"plugins {\n    id 'com.android.application' version '7.2.0' apply false\n\n    \xb7\xb7\xb7\n    // \u6dfb\u52a0GrowingIO \u65e0\u57cb\u70b9 SDK \u63d2\u4ef6\n    id 'com.growingio.android.autotracker' version '3.4.0' apply false\n}\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528\u63d2\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5728 app \u7ea7\u522b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"com.growingio.android.autotracker")," \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n    id 'com.android.application'\n    id 'org.jetbrains.kotlin.android'\n    // \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9 SDK \u63d2\u4ef6\n    id 'com.growingio.android.autotracker'\n}\n...\n")),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e"},"\u63d2\u4ef6\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u63d2\u4ef6\u5728\u4e0d\u540c\u9879\u76ee\u73af\u5883\u4e0b\u80fd\u591f\u6b63\u5e38\u4f7f\u7528\uff0cGrowingio \u63d2\u4ef6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u914d\u7f6e\u3002\uff08\u975e\u5fc5\u9700\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4e0d\u7528\u6dfb\u52a0\uff09"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Extension"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"logEnabled")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7f16\u8bd1\u65f6\u662f\u5426\u8f93\u51falog\u65e5\u5fd7"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"includePackages")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Array<String>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u989d\u5916\u5305\u542b\u7f16\u8bd1\u7684\u5305\u540d"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"excludePackages")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Array<String>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8df3\u8fc7\u7f16\u8bd1\u7684\u5305\u540d"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"\u914d\u7f6e\u4ee3\u7801\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groony"},'plugins {\n    \xb7\xb7\xb7\n    // \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9 SDK \u63d2\u4ef6\n    id \'com.growingio.android.autotracker\'\n}\n\ngrowingAutotracker {\n    logEnabled false\n    includePackages "com.growingio.xxx1","com.growingio.xxx2"\n    excludePackages "com.cpacm.xxx1"\n}\n\n\ndependencies {\n  \xb7\xb7\xb7\n}\n')))}m.isMDXComponent=!0}}]);