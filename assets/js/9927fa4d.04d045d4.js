"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7627],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),o=t(7294),r=t(6010),i=t(2389),l=t(7392),d=t(7094),p=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function s(e){var n;const{lazy:t,block:i,defaultValue:s,values:m,groupId:g,className:k}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,l.l)(b,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,d.U)(),[N,x]=(0,o.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&b.some((n=>n.value===e))&&x(e)}const I=e=>{const n=e.currentTarget,t=w.indexOf(n),a=b[t].value;a!==N&&(S(n),x(a),null!=g&&C(g,String(a)))},D=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>w.push(e),onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return o.createElement(s,(0,a.Z)({key:String(n)},e))}},1948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(7462),o=(t(7294),t(3905)),r=t(5488),i=t(5162);const l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},d=void 0,p={unversionedId:"android/Introduce",id:"android/Introduce",title:"\u5982\u4f55\u96c6\u6210",description:"\u8bf7\u53c2\u8003\u4e0b\u65b9\u6587\u6863\u6765\u96c6\u6210 GrowingIO \u65e0\u57cb\u70b9\u6216\u57cb\u70b9 SDK.",source:"@site/docs/android/Introduce.md",sourceDirName:"android",slug:"/android/Introduce",permalink:"/growingio-sdk-docs/docs/android/Introduce",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/Introduce.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/android/version"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/android/Configuration"}},c={},u=[{value:"\u96c6\u6210\u65e0\u57cb\u70b9SDK",id:"\u96c6\u6210\u65e0\u57cb\u70b9sdk",level:2},{value:"\u5982\u4f55\u4f9d\u8d56",id:"\u5982\u4f55\u4f9d\u8d56",level:3},{value:"\u6dfb\u52a0maven\u4ed3\u5e93",id:"\u6dfb\u52a0maven\u4ed3\u5e93",level:4},{value:"\u6dfb\u52a0\u63d2\u4ef6",id:"\u6dfb\u52a0\u63d2\u4ef6",level:4},{value:"\u6dfb\u52a0\u4ee3\u7801\u4f9d\u8d56",id:"\u6dfb\u52a0\u4ee3\u7801\u4f9d\u8d56",level:4},{value:"\u6dfb\u52a0URL Scheme",id:"\u6dfb\u52a0url-scheme",level:3},{value:"SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"sdk\u521d\u59cb\u5316\u914d\u7f6e",level:3},{value:"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 <code>Application</code> \u7684 <code>onCreate</code> \u4e2d\u3002\u4e3a\u4f7f App \u5408\u89c4\uff0c\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4",id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d\u4e3a\u4f7f-app-\u5408\u89c4\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4",level:4},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c",level:3},{value:"\u96c6\u6210\u57cb\u70b9SDK",id:"\u96c6\u6210\u57cb\u70b9sdk",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u6dfb\u52a0URLScheme",id:"\u6dfb\u52a0urlscheme",level:3},{value:"SDK\u521d\u59cb\u5316\u914d\u7f6e",id:"sdk\u521d\u59cb\u5316\u914d\u7f6e-1",level:3},{value:"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 <code>Application</code> \u7684 <code>onCreate</code> \u4e2d\u3002\u4e3a\u4f7f App \u5408\u89c4\uff0c\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4",id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d\u4e3a\u4f7f-app-\u5408\u89c4\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4-1",level:4},{value:"\u6df7\u6dc6",id:"\u6df7\u6dc6",level:3},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c-1",level:3}],s={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003\u4e0b\u65b9\u6587\u6863\u6765\u96c6\u6210 GrowingIO \u65e0\u57cb\u70b9\u6216\u57cb\u70b9 SDK."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u96c6\u6210\u65e0\u57cb\u70b9sdk"},"\u96c6\u6210\u65e0\u57cb\u70b9SDK"),(0,o.kt)("p",null,"\u65e0\u57cb\u70b9SDK\u80fd\u591f\u5728\u4e0d\u4fee\u6539\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8\u5e2e\u52a9\u5e94\u7528\u83b7\u53d6\u9875\u9762\u6d4f\u89c8\uff0c\u9875\u9762\u70b9\u51fb\u7b49\u57cb\u70b9\u4e8b\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u4f9d\u8d56"},"\u5982\u4f55\u4f9d\u8d56"),(0,o.kt)("h4",{id:"\u6dfb\u52a0maven\u4ed3\u5e93"},"\u6dfb\u52a0maven\u4ed3\u5e93"),(0,o.kt)("p",null,"\u5728 project \u7ea7\u522b\u7684build.gradle\u6587\u4ef6\u4e2d\u6dfb\u52a0Maven\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n    }\n}\n\nallprojects {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }\n    }\n}\n')),(0,o.kt)("h4",{id:"\u6dfb\u52a0\u63d2\u4ef6"},"\u6dfb\u52a0\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5728 project \u7ea7\u522b\u7684build.gradle\u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"\nbuildscript {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        //\u5982\u679c\u4f7f\u7528 SNAPSHOT \u7248\u672c\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u8be5\u4ed3\u5e93\u3002\n        maven { url \"https://s01.oss.sonatype.org/content/repositories/snapshots/\" }\n    }\n    dependencies {\n        //GrowingIO \u65e0\u57cb\u70b9 SDK plugin\n        classpath 'com.growingio.android:autotracker-gradle-plugin:3.4.2'\n    }\n}\n\n")),(0,o.kt)("p",null,"\u5728 app \u7ea7\u522b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"com.growingio.android.autotracker")," \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.android.application'\n//\u6dfb\u52a0 GrowingIO \u63d2\u4ef6\napply plugin: 'com.growingio.android.autotracker'\n\n...\n\n")),(0,o.kt)("admonition",{title:"\u5173\u4e8e\u63d2\u4ef6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u6700\u65b0\u53d1\u5e03\u7248\u672c\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-plugin/releases"},"Github Releases")),(0,o.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u5982\u4f55\u5728 Android Gradle Plugin 7 \u53ca\u5176\u66f4\u9ad8\u7248\u672c\u4f7f\u7528\u63d2\u4ef6\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/AGP7"},"SDK \u63d2\u4ef6\u8bf4\u660e"))),(0,o.kt)("h4",{id:"\u6dfb\u52a0\u4ee3\u7801\u4f9d\u8d56"},"\u6dfb\u52a0\u4ee3\u7801\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u9700\u8981\u7528\u5230\u7684\u5e94\u7528\u7ea7\u522b\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801\u4f9d\u8d56"),(0,o.kt)(r.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"common",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.android.application'\n\ndependencies {\n    implementation 'com.growingio.android:autotracker-cdp:3.4.3'\n}\n"))),(0,o.kt)(i.Z,{value:"bom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.android.application'\n\ndependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.4.3')\n\n  //GrowingIO \u65e0\u57cb\u70b9 SDK\n  implementation 'com.growingio.android:autotracker-cdp'\n}\n")))),(0,o.kt)("admonition",{title:"\u5173\u4e8e\u7248\u672c",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6700\u65b0\u7248\u672c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker/releases"},"Github Release"))),(0,o.kt)("h3",{id:"\u6dfb\u52a0url-scheme"},"\u6dfb\u52a0URL Scheme"),(0,o.kt)("p",null,"URL Scheme \u662f GrowingIO SDK \u4ece\u5916\u90e8\u5524\u9192\u5e94\u7528\u65f6\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u3002\u628a URL Scheme \u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u4f7f\u7528\u5708\u9009,",(0,o.kt)("a",{parentName:"p",href:"/docs/debugverify/mobiledebugger"},"Mobile Debugger")," \u53ca\u6df1\u5ea6\u94fe\u63a5\u7b49\u529f\u80fd\u65f6\u5524\u9192\u5e94\u7528\u3002\n\u5c06\u5e94\u7528\u7684 URLScheme \u548c\u5e94\u7528\u6743\u9650\u6dfb\u52a0\u5230\u60a8\u7684 AndroidManifest.xml \u4e2d\u7684 LAUNCHER Activity \u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.example.growingio.testdemo">\n\u200b\n    <uses-permission android:name="android.permission.INTERNET" />\n\n    <application\n        android:name=".YourApplication"\n        android:allowBackup="true"\n        android:icon="@mipmap/ic_launcher"\n        android:label="@string/app_name"\n        android:roundIcon="@mipmap/ic_launcher_round"\n        android:supportsRtl="true"\n        android:theme="@style/AppTheme">\n        <activity android:name=".LauncherActivity">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n            <intent-filter>\n                <data android:scheme="growing.\u60a8\u7684URL Scheme" />\n                <action android:name="android.intent.action.VIEW" />\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n        </activity>\n    </application>\n</manifest>\n')),(0,o.kt)("h3",{id:"sdk\u521d\u59cb\u5316\u914d\u7f6e"},"SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,o.kt)("h4",{id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d\u4e3a\u4f7f-app-\u5408\u89c4\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4"},"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 ",(0,o.kt)("inlineCode",{parentName:"h4"},"Application")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"h4"},"onCreate")," \u4e2d\u3002\u4e3a\u4f7f App \u5408\u89c4\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"h4",href:"/docs/compliance/androidCompliance#%E5%90%88%E8%A7%84%E6%AD%A5%E9%AA%A4"},"\u5408\u89c4\u6b65\u9aa4")),(0,o.kt)(r.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        // Config GrowingIO\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        CdpAutotrackConfiguration sConfiguration = new CdpAutotrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                .setDebugEnabled(BuildConfig.DEBUG);\n        GrowingAutotracker.startWithConfiguration(this,sConfiguration);\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n\n        // Config GrowingIO\n        // YourAccountId eg:0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg:growing.xxxxxxxxxxx \n        // YourServerHost eg:http://106.75.81.105:8080\n        // YourDatasourceId eg: 11223344aabbcc\n        val sConfiguration = CdpAutotrackConfiguration("Your AccountId", "Your URLScheme")\n            .setDataCollectionServerHost("Your ServerHost")\n            .setDataSourceId("Your DataSourceId")\n            .setDebugEnabled(BuildConfig.DEBUG)\n        GrowingAutotracker.startWithConfiguration(this, sConfiguration)\n    }\n}\n')))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"GrowingAutotracker.startWithConfiguration"),"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationContext")," \u5bf9\u8c61\u3002 ")),(0,o.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,o.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u8f93\u51fa\u4e86",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"!!! GrowingIO Tracker version: 3.4.2 !!!"),(0,o.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660eSDK\u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,o.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d\u6253\u5f00\u4e86Debug ",(0,o.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(true)")," \uff0c\u5219\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684log\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u5c31\u5b8c\u6210\u4e86\u65e0\u57cb\u70b9 SDK \u7684\u96c6\u6210\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u60a8\u53ef\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/giokit/android"},"GioKit \u8f85\u52a9\u63d2\u4ef6")," \u8fdb\u884c\u96c6\u6210\u9a8c\u8bc1\u3002"),(0,o.kt)("h2",{id:"\u96c6\u6210\u57cb\u70b9sdk"},"\u96c6\u6210\u57cb\u70b9SDK"),(0,o.kt)("p",null,"\u57cb\u70b9 SDK\u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\u548cAPP\u5173\u95ed\u4e8b\u4ef6\uff0c\u5176\u4ed6\u4e8b\u4ef6\u5747\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6\u3002\n\u57cb\u70b9\u76f8\u8f83\u4e8e\u65e0\u57cb\u70b9\u96c6\u6210\u6b65\u9aa4\u4f1a\u66f4\u7b80\u5355\uff0c\u4e5f\u4e0d\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u63d2\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u5728\u5e94\u7528\u7ea7\u522b\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u4e2d\u6dfb\u52a0tracker\u4f9d\u8d56\u5373\u53ef\u3002"),(0,o.kt)(r.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"common",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.android.application'\n\ndependencies {\n    //GrowingIO \u57cb\u70b9 SDK\n    implementation 'com.growingio.android:tracker-cdp:3.4.3'\n}\n"))),(0,o.kt)(i.Z,{value:"bom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.android.application'\n\ndependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.4.3')\n\n  //GrowingIO \u57cb\u70b9 SDK\n  implementation 'com.growingio.android:tracker-cdp'\n}\n")))),(0,o.kt)("h3",{id:"\u6dfb\u52a0urlscheme"},"\u6dfb\u52a0URLScheme"),(0,o.kt)("p",null,"\u4ee5\u4fbf\u5524\u9192App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.example.growingio.testdemo">\n\u200b\n    <uses-permission android:name="android.permission.INTERNET" />\n\n    <application\n        android:name=".YourApplication">\n        <activity android:name=".LauncherActivity">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n            <intent-filter>\n                <data android:scheme="growing.\u60a8\u7684URLScheme" />\n                <action android:name="android.intent.action.VIEW" />\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n            </intent-filter>\n            \x3c!--\u8bf7\u6dfb\u52a0\u8fd9\u91cc\u7684\u6574\u4e2a intent-filter \u533a\u5757\uff0c\u5e76\u786e\u4fdd\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a data \u5b57\u6bb5--\x3e\n        </activity>\n    </application>\n</manifest>\n')),(0,o.kt)("h3",{id:"sdk\u521d\u59cb\u5316\u914d\u7f6e-1"},"SDK\u521d\u59cb\u5316\u914d\u7f6e"),(0,o.kt)("h4",{id:"\u8bf7\u5c06-sdk-\u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165-application-\u7684-oncreate-\u4e2d\u4e3a\u4f7f-app-\u5408\u89c4\u8bf7\u53c2\u8003\u5408\u89c4\u6b65\u9aa4-1"},"\u8bf7\u5c06 SDK \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165 ",(0,o.kt)("inlineCode",{parentName:"h4"},"Application")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"h4"},"onCreate")," \u4e2d\u3002\u4e3a\u4f7f App \u5408\u89c4\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"h4",href:"/docs/compliance/androidCompliance#%E5%90%88%E8%A7%84%E6%AD%A5%E9%AA%A4"},"\u5408\u89c4\u6b65\u9aa4")),(0,o.kt)(r.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        // Config GrowingIO\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                .setDebugEnabled(BuildConfig.DEBUG);\n        GrowingTracker.startWithConfiguration(this, sConfiguration);\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        // Config GrowingIO\n        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n        // Your URLScheme eg: growing.xxxxxxxxxxx\n        // YourServerHost eg: https://api.growingio.com \u9700\u8981\u586b\u5199\u5b8c\u6574\u7684url\u5730\u5740\n        // YourDatasourceId eg: 11223344aabbcc\n        val sConfiguration: CdpTrackConfiguration =\n            CdpTrackConfiguration("Your AccountId", "Your URLScheme")\n                .setDataCollectionServerHost("Your ServerHost")\n                .setDataSourceId("Your DataSourceId")\n                .setDebugEnabled(BuildConfig.DEBUG)\n        GrowingTracker.startWithConfiguration(this, sConfiguration)\n    }\n}\n')))),(0,o.kt)("h3",{id:"\u6df7\u6dc6"},"\u6df7\u6dc6"),(0,o.kt)("p",null,"SDK\u4e2d\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u6df7\u6dc6\u89c4\u5219\uff0cR8 \u5728\u7f16\u8bd1\u9879\u76ee\u65f6\u4f1a\u81ea\u52a8\u5e94\u7528\u5176\u89c4\u5219\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6df7\u6dc6\u540e\u8fd8\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u5728\u60a8\u7684 proguard-rules.pro \u4e2d\u52a0\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"-keep class com.growingio.** {\n    *;\n}\n-dontwarn com.growingio.**\n")),(0,o.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c-1"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,o.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u8f93\u51fa\u4e86",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"!!! GrowingIO Tracker version: 3.4.2 !!!"),(0,o.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660eSDK\u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,o.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d\u6253\u5f00\u4e86Debug ",(0,o.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(true)")," \uff0c\u5219\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Logcat")," \u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684log\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u5c31\u5b8c\u6210\u4e86\u57cb\u70b9 SDK \u7684\u96c6\u6210\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u60a8\u53ef\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/giokit/android"},"GioKit \u8f85\u52a9\u63d2\u4ef6")," \u8fdb\u884c\u96c6\u6210\u9a8c\u8bc1\u3002"))}m.isMDXComponent=!0}}]);