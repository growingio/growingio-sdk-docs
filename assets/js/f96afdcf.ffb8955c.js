"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7213],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),s=r,g=m["".concat(d,".").concat(s)]||m[s]||k[s]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},479:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:2,title:"React Native SDK"},d=void 0,p={unversionedId:"other/React Native",id:"other/React Native",title:"React Native SDK",description:"\u9488\u5bf9\u4e8eSDK 3.0 \u4e0a\u7684 RN \u63d2\u4ef6\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u57cb\u70b9sdk\u3002",source:"@site/docs/other/React Native.md",sourceDirName:"other",slug:"/other/React Native",permalink:"/growingio-sdk-docs/docs/other/React Native",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/other/React Native.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"React Native SDK"},sidebar:"gioSidebar",previous:{title:"Flutter SDK",permalink:"/growingio-sdk-docs/docs/other/Flutter SDK"},next:{title:"JAVA SDK",permalink:"/growingio-sdk-docs/docs/server/Java SDK"}},c={},k=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"React Native SDK\u96c6\u6210",id:"react-native-sdk\u96c6\u6210",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u81ea\u52a8\u5b89\u88c5",id:"\u81ea\u52a8\u5b89\u88c5",level:4},{value:"\u4f7f\u7528\u672c\u5730\u6a21\u5757\u5b89\u88c5 (\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539)",id:"\u4f7f\u7528\u672c\u5730\u6a21\u5757\u5b89\u88c5-\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539",level:5},{value:"\u624b\u52a8\u5b89\u88c5",id:"\u624b\u52a8\u5b89\u88c5",level:4},{value:"iOS",id:"ios",level:5},{value:"Android",id:"android",level:5},{value:"\u5f15\u5165\u5230\u6587\u4ef6",id:"\u5f15\u5165\u5230\u6587\u4ef6",level:3},{value:"API\u8bf4\u660e",id:"api\u8bf4\u660e",level:2},{value:"1. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID",id:"1-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:4},{value:"2. \u6e05\u9664\u767b\u5f55\u7528\u6237ID",id:"2-\u6e05\u9664\u767b\u5f55\u7528\u6237id",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:4},{value:"3. \u8bbe\u7f6e\u7528\u6237\u5730\u7406\u4f4d\u7f6e",id:"3-\u8bbe\u7f6e\u7528\u6237\u5730\u7406\u4f4d\u7f6e",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:4},{value:"4. \u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",id:"4-\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:4},{value:"5. \u83b7\u53d6\u8bbe\u5907ID",id:"5-\u83b7\u53d6\u8bbe\u5907id",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:4},{value:"6. \u6570\u636e\u91c7\u96c6\u5f00\u5173",id:"6-\u6570\u636e\u91c7\u96c6\u5f00\u5173",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-2",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:4},{value:"7. \u57cb\u70b9\u4e8b\u4ef6",id:"7-\u57cb\u70b9\u4e8b\u4ef6",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-3",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-6",level:4},{value:"8. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",id:"8-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-4",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-7",level:4}],m={toc:k};function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9488\u5bf9\u4e8eSDK 3.0 \u4e0a\u7684 RN \u63d2\u4ef6\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u57cb\u70b9sdk\u3002"),(0,i.kt)("p",null,"\u6e90\u7801\u6258\u7ba1\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/growingio/react-native-growingio-sdk-tracker-plugin"},"growingio/react-native-growingio-sdk-tracker-plugin")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u786e\u4fdd\u539f\u751f\u5de5\u7a0b\u4e2d\u5df2\u7ecf\u6dfb\u52a0",(0,i.kt)("strong",{parentName:"p"},"\u539f\u751f\u57cb\u70b9SDK"),", \u5982\u679c\u6ca1\u6709, \u8bf7\u79fb\u6b65\u81f3\u539f\u751f\u7aef\u57cb\u70b9SDK\u96c6\u6210\u6587\u6863: ",(0,i.kt)("a",{parentName:"p",href:"/docs/android/base/Getting%20Started#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},(0,i.kt)("strong",{parentName:"a"},"Android \u57cb\u70b9SDK")),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/ios/base/Getting_Started#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,i.kt)("strong",{parentName:"a"},"iOS \u57cb\u70b9SDK"))))),(0,i.kt)("h2",{id:"react-native-sdk\u96c6\u6210"},"React Native SDK\u96c6\u6210"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ npm install react-native-growing-tracker@1.0.1-cdp --save")),(0,i.kt)("h4",{id:"\u81ea\u52a8\u5b89\u88c5"},"\u81ea\u52a8\u5b89\u88c5"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"React Native 0.6.0\u7248\u672c\u53ca\u5176\u4ee5\u4e0a\u53ef\u4ee5\u8df3\u8fc7\u8be5\u6b65\u9aa4"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ react-native link react-native-growing-tracker")),(0,i.kt)("h5",{id:"\u4f7f\u7528\u672c\u5730\u6a21\u5757\u5b89\u88c5-\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539"},"\u4f7f\u7528\u672c\u5730\u6a21\u5757\u5b89\u88c5 (\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"git clone \u63d2\u4ef6\u4ed3\u5e93")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:growingio/react-native-growingio-sdk-tracker-plugin.git\ngit checkout cdp\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u7684package.json\u4e2d\u6dfb\u52a0\u5bf9\u5e94\u6a21\u5757")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    ...\n    "react-native-growing-tracker": "file:path/react-native-growingio-sdk-tracker-plugin"\n},\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u4f9d\u8d56")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c\u9879\u76ee")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"react-native run-ios\nreact-native run-android\n")),(0,i.kt)("h4",{id:"\u624b\u52a8\u5b89\u88c5"},"\u624b\u52a8\u5b89\u88c5"),(0,i.kt)("h5",{id:"ios"},"iOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6253\u5f00Xcode\uff0c\u5728\u60a8\u7684\u5de5\u7a0b\u76ee\u5f55\u4e2d\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"Libraries")," \u279c ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Files to [your project's name]")),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," \u279c react-native-growingio-tracker \u279c ",(0,i.kt)("inlineCode",{parentName:"li"},"RNGrowingTracker.xcodeproj")),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u60a8\u7684\u76ee\u6807\u9879\u76ee\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"Build Phases")," \u279c ",(0,i.kt)("inlineCode",{parentName:"li"},"Link Binary With Libraries"),"\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"libRNGrowingTracker.a")," "),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u9879\u76ee (",(0,i.kt)("inlineCode",{parentName:"li"},"Cmd+R"),")")),(0,i.kt)("h5",{id:"android"},"Android"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6253\u5f00\u60a8\u7684\u9996\u9875Activity ",(0,i.kt)("inlineCode",{parentName:"li"},"android/app/src/main/java/[...]/MainActivity.java"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u5305\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},"com.reactnativegrowingtracker.GrowingTrackerPackage;")),(0,i.kt)("li",{parentName:"ul"},"\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"getPackages()")," \u65b9\u6cd5\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"new GrowingTrackerPackage()")," ")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5f15\u5165Android Native\u5de5\u7a0b ",(0,i.kt)("inlineCode",{parentName:"li"},"android/settings.gradle"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"include ':reactnativegrowingtracker'\nproject(':reactnativegrowingtracker').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-growing-tracker//android')\n"))),(0,i.kt)("li",{parentName:"ol"},"\u5728app\u4e2d\u6dfb\u52a0Android Native\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"implementation project(':reactnativegrowingtracker')\n")))),(0,i.kt)("h3",{id:"\u5f15\u5165\u5230\u6587\u4ef6"},"\u5f15\u5165\u5230\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import GrowingTracker from 'react-native-growing-tracker';\n\n// TODO: What to do with the module?\nGrowingTracker;\n")),(0,i.kt)("h2",{id:"api\u8bf4\u660e"},"API\u8bf4\u660e"),(0,i.kt)("h3",{id:"1-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id"},"1. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"setLoginUserId")," \uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"userId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u6807\u8bc6")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.setLoginUserId('loginUserId');\n")),(0,i.kt)("h3",{id:"2-\u6e05\u9664\u767b\u5f55\u7528\u6237id"},"2. \u6e05\u9664\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanLoginUserId"),"\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID"),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.cleanLoginUserId();\n")),(0,i.kt)("h3",{id:"3-\u8bbe\u7f6e\u7528\u6237\u5730\u7406\u4f4d\u7f6e"},"3. \u8bbe\u7f6e\u7528\u6237\u5730\u7406\u4f4d\u7f6e"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u57fa\u4e8eWGS-84\u5750\u6807"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"latitude"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u8bbe\u7f6e\u7eac\u5ea6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"longitude"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u8bbe\u7f6e\u7ecf\u5ea6")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.setLocation(100.0, 100.0);\n")),(0,i.kt)("h3",{id:"4-\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"},"4. \u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"),(0,i.kt)("p",null,"\u6e05\u9664\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e"),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.cleanLocation();\n")),(0,i.kt)("h3",{id:"5-\u83b7\u53d6\u8bbe\u5907id"},"5. \u83b7\u53d6\u8bbe\u5907ID"),(0,i.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907ID\uff0c\u53c8\u79f0\u4e3a\u533f\u540d\u7528\u6237ID\uff0cSDK \u81ea\u52a8\u751f\u6210\u7528\u6765\u5b9a\u4e49\u552f\u4e00\u8bbe\u5907"),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.getDeviceId().then(setDeviceId);\n")),(0,i.kt)("h3",{id:"6-\u6570\u636e\u91c7\u96c6\u5f00\u5173"},"6. \u6570\u636e\u91c7\u96c6\u5f00\u5173"),(0,i.kt)("p",null,"\u6253\u5f00\u6216\u5173\u95ed\u6570\u636e\u91c7\u96c6"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"enabled"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u91c7\u96c6\u6570\u636e")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.setDataCollectionEnabled(true);\n")),(0,i.kt)("h3",{id:"7-\u57cb\u70b9\u4e8b\u4ef6"},"7. \u57cb\u70b9\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\uff1b\u6ce8\u610f\uff1a\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728CDP\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027\uff1b",(0,i.kt)("br",null),"\n\u5982\u679c\u4e8b\u4ef6\u5c5e\u6027\u9700\u5173\u8054\u7ef4\u5ea6\u8868\uff0c\u8bf7\u5728\u4e8b\u4ef6\u5c5e\u6027\u4e0b\u5173\u8054\u7ef4\u5ea6\u8868\uff08 CDP\u5e73\u53f0\u7248\u672c>= 2.1 \uff09\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-3"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u5c5e\u6027\u4fe1\u606f\uff1b\u5f53\u4e8b\u4ef6\u5c5e\u6027\u5173\u8054\u6709\u7ef4\u5ea6\u8868\u65f6\uff0c\u5c5e\u6027\u503c\u4e3a\u5bf9\u5e94\u7684\u7ef4\u5ea6\u8868\u6a21\u578bID(\u8bb0\u5f55ID)\uff08\u53ef\u9009\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"itemKey"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bKey\uff08\u53ef\u9009\uff0c\u4e0eitemId\u53c2\u6570\u4e00\u8d77\u4f20\u5165\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"itemId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bID \uff08\u53ef\u9009\uff0c\u4e0eitemKey\u53c2\u6570\u4e00\u8d77\u4f20\u5165")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-6"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.trackCustomEvent('trackCustomEvent(string)');\nGrowingTracker.trackCustomEvent('trackCustomEvent(string)', {\n   key1: 'value1',\n   key2: 'value2',\n});\nGrowingTracker.trackCustomEvent(\n   'trackCustomEvent(string)',\n   null,\n   'itemKey',\n   'itemId'\n);\nGrowingTracker.trackCustomEvent(\n   'trackCustomEvent(string)',\n   {\n     key1: 'value1',\n     key2: 'value2',\n   },\n   'itemKey',\n   'itemId'\n);\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,i.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u57cb\u70b9\u4e8b\u4ef6\u793a\u4f8b")))),(0,i.kt)("h3",{id:"8-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"},"8. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"),(0,i.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-4"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefine"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u767b\u5f55\u7528\u6237\u5c5e\u6027")))),(0,i.kt)("h4",{id:"\u4ee3\u7801\u793a\u4f8b-7"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"GrowingTracker.setLoginUserAttributes({\n    key1: 'value1',\n    key2: 'value2',\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,i.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\u793a\u4f8b")))))}s.isMDXComponent=!0}}]);