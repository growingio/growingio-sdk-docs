"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),l=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:r,block:c,defaultValue:g,values:m,groupId:k,className:v}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===g?g:null!=(t=null!=g?g:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[T,O]=(0,o.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==T&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==T&&(x(t),O(a),null!=k&&w(k,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var o;const t=C.indexOf(e.currentTarget)-1;n=null!=(o=C[t])?o:C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:A,onFocus:E,onClick:E},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},2480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),r=n(5162);const l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},s=void 0,p={unversionedId:"giokit/android/integrate",id:"giokit/android/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u96c6\u6210 GioKit",source:"@site/docs/giokit/android/integrate.md",sourceDirName:"giokit/android",slug:"/giokit/android/integrate",permalink:"/growingio-sdk-docs/docs/giokit/android/integrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/android/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/android/version"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/growingio-sdk-docs/docs/giokit/ios"}},u={},d=[{value:"\u96c6\u6210 GioKit",id:"\u96c6\u6210-giokit",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",level:3}],c={toc:d};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u96c6\u6210-giokit"},"\u96c6\u6210 GioKit"),(0,o.kt)("p",null,"GioKit \u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/giokit-android"},"Github")," \u4e0a\uff0c\u6b22\u8fce star,fork\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Gradle\u63d2\u4ef6\u7248\u672c"),"\uff1a 3.2.1\u53ca\u4ee5\u4e0a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Android\u7cfb\u7edf\u7248\u672c"),"\uff1aAndroid 5.0 \u53ca\u4ee5\u4e0a, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("font",{color:"red"},"GioKit\u4ec5\u652f\u6301 AndroidX")),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u5728 ",(0,o.kt)("a",{parentName:"strong",href:"/docs/android"},"Android SDK")," \u57fa\u7840\u4e0a\u4f7f\u7528 GioKit"))),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728 project \u7ea7\u522b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"giokit-plugin"),"\u4f9d\u8d56\u548c maven \u4ed3\u5e93\u3002"),(0,o.kt)(i.Z,{groupId:"agp-version",defaultValue:"AGP",values:[{label:"\u4f9d\u8d56",value:"AGP"},{label:"AGP7\u4e0a\u4f9d\u8d56",value:"AGP7"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"AGP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n        \n    }\n    dependencies {\n        // GioKit plugin\n        classpath "com.growingio.giokit:giokit-plugin:1.2.0"\n    }\n}\n\nallprojects {\n    repositories {\n        // \u6dfb\u52a0maven\u4ed3\u5e93\n        mavenCentral()\n    }\n}\n'))),(0,o.kt)(r.Z,{value:"AGP7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n    //...\n    id 'com.growingio.gitkit' version \"1.2.0\" apply false //\u9488\u5bf9Cdp Sdk\n    id 'com.growingio.gitkit.saas' version \"1.2.0\" apply false  //\u9488\u5bf9SaaS Sdk\n    //\u4ee5\u4e0a\u4e8c\u8005\u6839\u636e\u76f8\u5e94\u7684 GrowingIO Android SDK \u9009\u62e9\u5bf9\u5e94\u7684\u63d2\u4ef6\uff0c\u8bf7\u4e0d\u8981\u4e00\u8d77\u4f7f\u7528\uff01\uff01\n}\n")))),(0,o.kt)("p",null,"\u5728 app \u7ea7\u522b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"com.growingio.giokit"),"\u63d2\u4ef6\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"giokit"),"\u4f9d\u8d56\u3002"),(0,o.kt)(i.Z,{groupId:"agp-version",defaultValue:"v3",values:[{label:"CDP SDK",value:"v3"},{label:"SAAS SDK",value:"saas"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"v3",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GrowingIO Android SDK 3.0\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u8bf7\u6dfb\u52a0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.growingio.giokit'\n\n// \u6216\u8005\u901a\u8fc7id\u4f9d\u8d56\nplugins {\n    //...\n    id 'com.growingio.gitkit'\n}\n"))),(0,o.kt)(r.Z,{value:"saas",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GrowingIO Android SDK 2.x \u7248\u672c\uff0c\u8bf7\u6dfb\u52a0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'com.growingio.giokit.saas'\n\n// \u6216\u8005\u901a\u8fc7id\u4f9d\u8d56\nplugins {\n    //...\n    id 'com.growingio.gitkit.saas'\n}\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'\ndependencies {\n    ...\n    // GioKit\n    debugImplementation "com.growingio.giokit:giokit:1.2.0"\n    releaseImplementation "com.growingio.giokit:giokit-no-op:1.2.0"\n}\n')),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u907f\u514d\u5728\u6b63\u5f0f\u73af\u5883\u4e0b\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u9519\u8bef\uff0c\u8bf7\u52a1\u5fc5\u53ea\u5728 Debug \u73af\u5883\u4e0b\u4f7f\u7528 GioKit \u5de5\u5177\u3002")),(0,o.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u8bf7\u5c06 GioKit \u7684\u521d\u59cb\u5316\u4ee3\u7801\u653e\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate"),"\u4e2d\u3002"),(0,o.kt)(i.Z,{groupId:"code-language",defaultValue:"kotlin",values:[{label:"java",value:"java"},{label:"kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        GioKit.with(this).build();\n    }\n}\n"))),(0,o.kt)(r.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        GioKit.with(this).build()\n    }\n}\n")))),(0,o.kt)("h3",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),(0,o.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u7528\u6237\u7684\u9700\u6c42\uff0c\u6211\u4eec\u5728 Giokit \u63d2\u4ef6\u4e2d\u6dfb\u52a0\u4e86\u591a\u9879\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'giokitExt {\n    debugMode false\n    enableRelease false\n    // \u7edf\u8ba1\u8be5\u57df\u503c\u4e0b\u6240\u6709\u57cb\u70b9\u4fe1\u606f\uff0c\u5982 com.growingio \u8868\u793a\u7edf\u8ba1 com.growingio \u5305\u540d\u4e0b\u7684\u57cb\u70b9\u4ee3\u7801\n    trackFinder {\n        domain = ["com.growingio.giokit.demo"]\n        // \u82e5\u7528\u6237\u81ea\u5df1\u5c01\u88c5\u4e86SDK customEvent \u65b9\u6cd5\uff0c\u53ef\u901a\u8fc7\u5728\u6b64\u8bbe\u7f6e\u6765\u67e5\u627e\u5c01\u88c5\u7c7b\u8c03\u7528\u7684\u4ee3\u7801\n        // className "com.growingio.giokit.demo.AutotrackerUtils"\n        // methodName "trackCustomEvent"\n    }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"debugMode \u4e3atrue\u65f6\uff0c\u9879\u76ee\u7f16\u8bd1\u7684\u65f6\u5019\u4f1a\u8f93\u51fa\u76f8\u5e94\u7684 Debug \u4fe1\u606f\uff1b"),(0,o.kt)("li",{parentName:"ol"},"enableRelease \u662f\u5426\u652f\u6301release\u6253\u5305\u3002giokit \u662f\u53ea\u63a8\u8350\u5728 debug \u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u82e5\u4e00\u5b9a\u8981\u5728release\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u5219\u9700\u8981\u6253\u5f00\u6b64\u5f00\u5173\u6765\u4f7f\u63d2\u4ef6\u751f\u6548\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u65b9\u4fbf\u7edf\u4e00\u67e5\u770b\u7528\u6237\u7684\u624b\u52a8\u57cb\u70b9\u4fe1\u606f\uff0c\u6211\u4eec\u901a\u8fc7 trackFinder \u914d\u7f6e\u6765\u67e5\u627e\u5728\u5e94\u7528\u4e2d\u624b\u52a8\u57cb\u70b9\u8c03\u7528\u7684\u4f4d\u7f6e\u3002\u9ed8\u8ba4\u67e5\u627e\u57df\u540d\u4e3a\u9879\u76ee\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationId"))))}g.isMDXComponent=!0}}]);