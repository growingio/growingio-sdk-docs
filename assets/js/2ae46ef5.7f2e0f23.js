"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2287],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(d,".").concat(m)]||p[m]||s[m]||r;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),o=t(7294),r=t(2389),i=t(9443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=t(3810),c=t(6010),u="tabItem_vU9c";function s(e){var n,t,a,r=e.lazy,i=e.block,s=e.defaultValue,p=e.values,m=e.groupId,g=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:k.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,d.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(n=null!=s?s:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=k[0])?void 0:a.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,C=b.setTabGroupChoices,w=(0,o.useState)(f),x=w[0],S=w[1],D=[],y=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=N[m];null!=A&&A!==x&&v.some((function(e){return e.value===A}))&&S(A)}var I=function(e){var n=e.currentTarget,t=D.indexOf(n),a=v[t].value;a!==x&&(y(n),S(a),null!=m&&C(m,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;t=D[o]||D[D.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},g)},v.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":x===n}),key:n,ref:function(e){return D.push(e)},onKeyDown:T,onFocus:I,onClick:I},null!=t?t:n)}))),r?(0,o.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function p(e){var n=(0,r.Z)();return o.createElement(s,(0,a.Z)({key:String(n)},e))}},1769:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=t(6396),l=t(8215),d=["components"],c={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},u=void 0,s={unversionedId:"android/base/Getting Started",id:"android/base/Getting Started",title:"\u5982\u4f55\u96c6\u6210",description:"Android SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9SDK \u548c \u57cb\u70b9SDK \u4e24\u4e2a\u7248\u672c\uff1a",source:"@site/docs/android/base/Getting Started.md",sourceDirName:"android/base",slug:"/android/base/Getting Started",permalink:"/growingio-sdk-docs/docs/android/base/Getting Started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/android/base/Getting Started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/android/version"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/android/base/Configuration"}},p=[{value:"\u96c6\u6210\u65e0\u57cb\u70b9SDK",id:"\u96c6\u6210\u65e0\u57cb\u70b9sdk",children:[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",children:[],level:3},{value:"\u6dfb\u52a0URL Scheme",id:"\u6dfb\u52a0url-scheme",children:[],level:3},{value:"SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"sdk\u521d\u59cb\u5316\u914d\u7f6e",children:[{value:"\u83b7\u53d6 <code>AccountID</code>\u3001<code>DataSourceID</code>\u3001<code>Host</code>\u4fe1\u606f",id:"\u83b7\u53d6-accountiddatasourceidhost\u4fe1\u606f",children:[{value:"\u521b\u5efa",id:"\u521b\u5efa",children:[],level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",children:[],level:5}],level:4},{value:"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 <code>Application</code> \u7684 <code>onCreate</code> \u4e2d",id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d",children:[],level:4}],level:3},{value:"\u4ee3\u7801\u6df7\u6dc6",id:"\u4ee3\u7801\u6df7\u6dc6",children:[],level:3},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c",children:[],level:3}],level:2},{value:"\u96c6\u6210\u57cb\u70b9SDK",id:"\u96c6\u6210\u57cb\u70b9sdk",children:[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56-1",children:[],level:3},{value:"\u6dfb\u52a0URLScheme",id:"\u6dfb\u52a0urlscheme",children:[],level:3},{value:"SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"sdk\u521d\u59cb\u5316\u914d\u7f6e-1",children:[{value:"\u83b7\u53d6 <code>AccountID</code>\u3001<code>DataSourceID</code>\u3001<code>Host</code>\u4fe1\u606f",id:"\u83b7\u53d6-accountiddatasourceidhost\u4fe1\u606f-1",children:[{value:"\u521b\u5efa",id:"\u521b\u5efa-1",children:[],level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b-1",children:[],level:5}],level:4},{value:"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 <code>Application</code> \u7684 <code>onCreate</code> \u4e2d",id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d-1",children:[],level:4}],level:3},{value:"\u6df7\u6dc6",id:"\u6df7\u6dc6",children:[],level:3},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c-1",children:[],level:3}],level:2}],m={toc:p};function g(e){var n=e.components,c=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Android SDK \u63d0\u4f9b\u4e86 ",(0,r.kt)("font",{color:"red"},"\u65e0\u57cb\u70b9SDK")," \u548c ",(0,r.kt)("font",{color:"red"},"\u57cb\u70b9SDK")," \u4e24\u4e2a\u7248\u672c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK \u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6;"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK \u5177\u5907 \u57cb\u70b9SDK \u7684\u6240\u6709\u529f\u80fd\uff0c\u540c\u65f6\u5177\u5907\u81ea\u52a8\u91c7\u96c6\u57fa\u672c\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u5982\u9875\u9762\u8bbf\u95ee\uff0c\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002")),(0,r.kt)("p",null,"\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker"},"Github")," \u4e0a\uff0c\u6b22\u8fce star,fork \u4e00\u6ce2\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Gradle\u63d2\u4ef6\u7248\u672c"),"\uff1a 3.2.1\u53ca\u4ee5\u4e0a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Android\u7cfb\u7edf\u7248\u672c"),"\uff1aAndroid 4.2\u53ca\u4ee5\u4e0a",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u6839\u636e\u9700\u8981\u9009\u62e9\u96c6\u6210"),(0,r.kt)("font",{color:"red"}," \u65e0\u57cb\u70b9SDK "),"\u6216",(0,r.kt)("font",{color:"red"}," \u57cb\u70b9SDK ")))),(0,r.kt)("h2",{id:"\u96c6\u6210\u65e0\u57cb\u70b9sdk"},"\u96c6\u6210\u65e0\u57cb\u70b9SDK"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("p",null,"\u5728 project \u7ea7\u522b\u7684build.gradle\u6587\u4ef6\u4e2d\u6dfb\u52a0autotracker-gradle-plugin\u4f9d\u8d56\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"buildscript {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url \"https://s01.oss.sonatype.org/content/repositories/snapshots/\" }\n    }\n    dependencies {\n        \n        //GrowingIO \u65e0\u57cb\u70b9 SDK plugin\n        classpath 'com.growingio.android:autotracker-gradle-plugin:3.3.2'\n    }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u9879\u76ee\u4e2d\u4f7f\u7528\u7684Android Gradle\u63d2\u4ef6\u4e3a7.0\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u9700\u8981\u5728 project \u4e2d\u7684settings.gradle\u6587\u4ef6\u4e2d\u6dfb\u52a0Maven\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// \u5f53AGP\u7248\u672c\u4e3a7.0\u53ca\u4ee5\u4e0a\u6dfb\u52a0\ndependencyResolutionManagement {\n    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\uff0cAndroidStudio\u4f1a\u81ea\u52a8\u8bbe\u7f6e\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u4e0d\u9700\u8981\u91cd\u590d\u6dfb\u52a0\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n    }\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u9879\u76ee\u4e2d\u4f7f\u7528\u7684Android Gradle\u63d2\u4ef6\u4e3a4.2\u53ca\u4ee5\u4e0b\u7248\u672c\uff0c\u5219\u9700\u8981\u5728 project \u7ea7\u522b\u7684build.gradle\u6587\u4ef6\u4e2d\u6dfb\u52a0Maven\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// \u5f53AGP\u7248\u672c\u4e3a4.2\u53ca\u4ee5\u4e0b\u6dfb\u52a0\nallprojects {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n    }\n}\n')),(0,r.kt)("p",null,"\u5728 app\u53camodule \u7ea7\u522b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"com.growingio.android.autotracker")," \u63d2\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"autotracker"),"\u4f9d\u8d56\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.android.application'\n//\u6dfb\u52a0 GrowingIO \u63d2\u4ef6\napply plugin: 'com.growingio.android.autotracker'\n\n...\n\ndependencies {\n    ...\n    //GrowingIO \u65e0\u57cb\u70b9 SDK\n    implementation 'com.growingio.android:autotracker-cdp:3.3.2'\n}\n\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5173\u4e8e\u7248\u672c")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6700\u65b0\u7248\u672c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker/releases"},"Github Release")))),(0,r.kt)("h3",{id:"\u6dfb\u52a0url-scheme"},"\u6dfb\u52a0URL Scheme"),(0,r.kt)("p",null,"URL Scheme \u662f GrowingIO SDK \u4ece\u5916\u90e8\u5524\u9192\u5e94\u7528\u65f6\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u3002\u628a URL Scheme \u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/debug"},"\u5708\u9009"),",",(0,r.kt)("a",{parentName:"p",href:"/docs/debug"},"Mobile Debugger")," \u53ca",(0,r.kt)("a",{parentName:"p",href:"/docs/debug"},"\u6df1\u5ea6\u94fe\u63a5"),"\u7b49\u529f\u80fd\u65f6\u5524\u9192\u5e94\u7528\u3002\n\u5c06\u5e94\u7528\u7684 URLScheme \u548c\u5e94\u7528\u6743\u9650\u6dfb\u52a0\u5230\u60a8\u7684 AndroidManifest.xml \u4e2d\u7684 LAUNCHER Activity \u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.example.growingio.testdemo">\n\u200b\n    <uses-permission android:name="android.permission.INTERNET" />\n\n    <application\n        android:name=".YourApplication"\n        android:allowBackup="true"\n        android:icon="@mipmap/ic_launcher"\n        android:label="@string/app_name"\n        android:roundIcon="@mipmap/ic_launcher_round"\n        android:supportsRtl="true"\n        android:theme="@style/AppTheme">\n        <activity android:name=".LauncherActivity">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n            <intent-filter>\n                <data android:scheme="growing.\u60a8\u7684URL Scheme" />\n                <action android:name="android.intent.action.VIEW" />\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n        </activity>\n    </application>\n</manifest>\n')),(0,r.kt)("h3",{id:"sdk\u521d\u59cb\u5316\u914d\u7f6e"},"SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,r.kt)("h4",{id:"\u83b7\u53d6-accountiddatasourceidhost\u4fe1\u606f"},"\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h4"},"AccountID"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h4"},"DataSourceID"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h4"},"Host"),"\u4fe1\u606f"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"AccountID"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"DataSourceID"),"\u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Host"),"\u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406"))),(0,r.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:t(854).Z})),(0,r.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:t(2966).Z})),(0,r.kt)("h4",{id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d"},"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"h4"},"Application")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"h4"},"onCreate")," \u4e2d"),(0,r.kt)(i.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        // Config GrowingIO\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        CdpAutotrackConfiguration sConfiguration = new CdpAutotrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                .setDebugEnabled(BuildConfig.DEBUG);\n        GrowingAutotracker.startWithConfiguration(this,sConfiguration);\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n\n        // Config GrowingIO\n        // YourAccountId eg:0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg:growing.xxxxxxxxxxx \n        // YourServerHost eg:http://106.75.81.105:8080\n        // YourDatasourceId eg: 11223344aabbcc\n        val sConfiguration = CdpAutotrackConfiguration("Your AccountId", "Your URLScheme")\n            .setDataCollectionServerHost("Your ServerHost")\n            .setDataSourceId("Your DataSourceId")\n            .setDebugEnabled(BuildConfig.DEBUG)\n        GrowingAutotracker.startWithConfiguration(this, sConfiguration)\n    }\n}\n')))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd\u5c06\u4ee3\u7801\u6dfb\u52a0\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onCreate")," \u65b9\u6cd5\u4e2d\uff0c\u6dfb\u52a0\u5230\u5176\u4ed6\u65b9\u6cd5\u4e2d\u6216\u8005\u5ef6\u8fdf\u521d\u59cb\u5316\u53ef\u80fd\u4f1a\u5728\u67d0\u79cd\u6781\u7aef\u60c5\u51b5\u4e0b\u5bfc\u81f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u91cd\u5efa\u65f6\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"GrowingIO SDK")," \u672a\u521d\u59cb\u5316\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u5bfc\u81f4\u9875\u9762\u7684\u91c7\u96c6\u6570\u636e\u4e22\u5931\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GrowingAutotracker.startWithConfiguration"),"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationContext")," \u5bf9\u8c61\u3002 "))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5173\u4e8e\u9690\u79c1\u653f\u7b56")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u9700\u8981\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\u624d\u80fd\u8fdb\u884c\u6570\u636e\u7684\u6536\u96c6\uff0c\u8fd9\u91cc\u63a8\u8350\u7684\u505a\u6cd5\u662f\u5e94\u7528\u521d\u59cb\u5316\u65f6\u5148\u5173\u95ed\u6570\u636e\u6536\u96c6\uff0c\u4e4b\u540e\u7528\u6237\u540c\u610f\u540e\u518d\u91cd\u65b0\u6253\u5f00\u3002"))),(0,r.kt)(i.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        // Config GrowingIO\n        // \u53c2\u6570\u9700\u8981\u4eceCDP\u589e\u957f\u5e73\u53f0\u4e0a\uff0c\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        CdpAutotrackConfiguration sConfiguration = new CdpAutotrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                // \u521d\u59cb\u5316\u65f6\u5148\u5173\u95ed\u6570\u636e\u6536\u96c6\n                .setDataCollectionEnabled(false);\n        GrowingAutotracker.startWithConfiguration(this,sConfiguration);\n    }\n}\n\n// \u5f53\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u518d\u6253\u5f00\u6570\u636e\u6536\u96c6\nGrowingAutotracker.get().setDataCollectionEnabled(true);\n'))),(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        // Config GrowingIO\n        // \u53c2\u6570\u9700\u8981\u4eceCDP\u589e\u957f\u5e73\u53f0\u4e0a\uff0c\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406 \n        // YourAccountId eg:0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg:growing.xxxxxxxxxxx \n        // YourServerHost eg:http://106.75.81.105:8080\n        // YourDatasourceId eg: 11223344aabbcc\n        val sConfiguration = CdpAutotrackConfiguration("Your AccountId", "Your URLScheme")\n            .setDataCollectionServerHost("Your ServerHost")\n            .setDataSourceId("Your DataSourceId")\n            // \u521d\u59cb\u5316\u65f6\u5148\u5173\u95ed\u6570\u636e\u6536\u96c6\n            .setDataCollectionEnabled(false)\n        GrowingAutotracker.startWithConfiguration(this, sConfiguration)\n    }\n}\n\n// \u5f53\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u518d\u6253\u5f00\u6570\u636e\u6536\u96c6\nGrowingAutotracker.get().setDataCollectionEnabled(true)\n')))),(0,r.kt)("h3",{id:"\u4ee3\u7801\u6df7\u6dc6"},"\u4ee3\u7801\u6df7\u6dc6"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u542f\u7528\u4e86\u6df7\u6dc6\uff0c\u8bf7\u5728\u60a8\u7684 proguard-rules.pro \u4e2d\u52a0\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"-keep class * extends com.growingio.android.sdk.GeneratedGioModule\n-keep class * extends com.growingio.android.sdk.LibraryGioModule\n")),(0,r.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,r.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u8f93\u51fa\u4e86",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"!!! GrowingIO Tracker version: 3.3.0 !!!"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660eSDK\u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,r.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d\u6253\u5f00\u4e86Debug ",(0,r.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(true)")," \uff0c\u5219\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684log\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u65e0\u57cb\u70b9 SDK \u5c31\u5df2\u7ecf\u5b8c\u6210\u96c6\u6210\u6b65\u9aa4\u4e86\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210\u57cb\u70b9sdk"},"\u96c6\u6210\u57cb\u70b9SDK"),(0,r.kt)("p",null,"\u57cb\u70b9 SDK\u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\u548cAPP\u5173\u95ed\u4e8b\u4ef6\uff0c\u5176\u4ed6\u4e8b\u4ef6\u5747\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6\u3002\n\u57cb\u70b9\u76f8\u8f83\u4e8e\u65e0\u57cb\u70b9\u96c6\u6210\u6b65\u9aa4\u4f1a\u66f4\u7b80\u5355\uff0c\u4e5f\u4e0d\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u63d2\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56-1"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("p",null,"\u5728 project \u7ea7\u522b\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    mavenCentral()\n}\n")),(0,r.kt)("p",null,"\u5728 module \u7ea7\u522b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0tracker\u4f9d\u8d56\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n\n    //GrowingIO \u57cb\u70b9 SDK\n    implementation 'com.growingio.android:tracker-cdp:3.3.2'\n}\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0urlscheme"},"\u6dfb\u52a0URLScheme"),(0,r.kt)("p",null,"\u4ee5\u4fbf\u5524\u9192App"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.example.growingio.testdemo">\n\u200b\n    <uses-permission android:name="android.permission.INTERNET" />\n\n    <application\n        android:name=".YourApplication">\n        <activity android:name=".LauncherActivity">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n            <intent-filter>\n                <data android:scheme="growing.\u60a8\u7684URLScheme" />\n                <action android:name="android.intent.action.VIEW" />\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n        </activity>\n    </application>\n</manifest>\n')),(0,r.kt)("h3",{id:"sdk\u521d\u59cb\u5316\u914d\u7f6e-1"},"SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,r.kt)("h4",{id:"\u83b7\u53d6-accountiddatasourceidhost\u4fe1\u606f-1"},"\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h4"},"AccountID"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h4"},"DataSourceID"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h4"},"Host"),"\u4fe1\u606f"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"AccountID"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"DataSourceID"),"\u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Host"),"\u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406"))),(0,r.kt)("h5",{id:"\u521b\u5efa-1"},"\u521b\u5efa"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:t(854).Z})),(0,r.kt)("h5",{id:"\u67e5\u770b-1"},"\u67e5\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:t(2966).Z})),(0,r.kt)("h4",{id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d-1"},"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"h4"},"Application")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"h4"},"onCreate")," \u4e2d"),(0,r.kt)(i.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        // Config GrowingIO\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                .setDebugEnabled(BuildConfig.DEBUG);\n        GrowingTracker.startWithConfiguration(this, sConfiguration);\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        // Config GrowingIO\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        val sConfiguration: CdpTrackConfiguration =\n            CdpTrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                .setDebugEnabled(BuildConfig.DEBUG)\n        GrowingTracker.startWithConfiguration(this, sConfiguration)\n    }\n}\n')))),(0,r.kt)("h3",{id:"\u6df7\u6dc6"},"\u6df7\u6dc6"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u542f\u7528\u4e86\u6df7\u6dc6\uff0c\u8bf7\u5728\u60a8\u7684 proguard-rules.pro \u4e2d\u52a0\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"-keep class * extends com.growingio.android.sdk.GeneratedGioModule\n-keep class * extends com.growingio.android.sdk.LibraryGioModule\n")),(0,r.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c-1"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,r.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u8f93\u51fa\u4e86",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"!!! GrowingIO Tracker version: 3.3.0 !!!"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660eSDK\u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,r.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d\u6253\u5f00\u4e86Debug ",(0,r.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(true)")," \uff0c\u5219\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684log\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u65e0\u57cb\u70b9 SDK \u5c31\u5df2\u7ecf\u5b8c\u6210\u96c6\u6210\u6b65\u9aa4\u4e86\u3002"))}g.isMDXComponent=!0},854:function(e,n,t){n.Z=t.p+"assets/images/createapplication-241aaf42ded1927f70965a5c2968ad63.png"},2966:function(e,n,t){n.Z=t.p+"assets/images/showappdatasourceid-c07fdb45bb5e5bb67d7f721116bf91b8.png"}}]);