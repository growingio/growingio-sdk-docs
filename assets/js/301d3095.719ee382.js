"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(7294),a=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(7462),a=t(7294),r=t(6010),i=t(2389),l=t(7392),s=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:g,groupId:m,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=g??k.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),b=(0,l.l)(w,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==v&&!w.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:M}=(0,s.U)(),[A,P]=(0,a.useState)(v),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=h[m];null!=e&&e!==A&&w.some((n=>n.value===e))&&P(e)}const C=e=>{const n=e.currentTarget,t=y.indexOf(n),o=w[t].value;o!==A&&(N(n),P(o),null!=m&&M(m,String(o)))},G=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;t=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;t=y[n]??y[y.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},f)},w.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,key:n,ref:e=>y.push(e),onKeyDown:G,onFocus:C,onClick:C},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":A===n})}),t??n)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==A})))))}function g(e){const n=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(n)},e))}},2838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=t(7462),a=(t(7294),t(3905)),r=t(5488),i=t(5162);const l={sidebar_position:6,title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757"},s=void 0,c={unversionedId:"ios/modules/APM Module",id:"ios/modules/APM Module",title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",description:"APM (Application Performance Management) \u5373\u5e94\u7528\u6027\u80fd\u7ba1\u7406\uff0c\u5c5e\u4e8e IT \u8fd0\u7ef4\u7ba1\u7406 (ITOM) \u8303\u7574\u3002\u4e3b\u8981\u662f\u9488\u5bf9\u4f01\u4e1a\u5173\u952e\u4e1a\u52a1\u7684IT\u5e94\u7528\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u7684\u76d1\u6d4b\u3001\u4f18\u5316\uff0c\u63d0\u9ad8\u4f01\u4e1a IT \u5e94\u7528\u7684\u53ef\u9760\u6027\u548c\u8d28\u91cf\uff0c\u4fdd\u8bc1\u7528\u6237\u5f97\u5230\u826f\u597d\u7684\u670d\u52a1\uff0c\u964d\u4f4e IT \u603b\u62e5\u6709\u6210\u672c (TCO)\u3002",source:"@site/docs/ios/modules/APM Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/APM Module",permalink:"/growingio-sdk-docs/docs/ios/modules/APM Module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/modules/APM Module.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"\u5e7f\u544a\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/Advert Module"},next:{title:"Web JS SDK",permalink:"/growingio-sdk-docs/docs/webjs"}},u={},p=[{value:"\u96c6\u6210 APM",id:"\u96c6\u6210-apm",level:4},{value:"\u521d\u59cb\u5316 GrowingAPM",id:"\u521d\u59cb\u5316-growingapm",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:4},{value:"\u521d\u59cb\u5316 GrowingAPM",id:"\u521d\u59cb\u5316-growingapm-1",level:4}],d={toc:p};function g(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APM (Application Performance Management) \u5373\u5e94\u7528\u6027\u80fd\u7ba1\u7406\uff0c\u5c5e\u4e8e IT \u8fd0\u7ef4\u7ba1\u7406 (ITOM) \u8303\u7574\u3002\u4e3b\u8981\u662f\u9488\u5bf9\u4f01\u4e1a\u5173\u952e\u4e1a\u52a1\u7684IT\u5e94\u7528\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u7684\u76d1\u6d4b\u3001\u4f18\u5316\uff0c\u63d0\u9ad8\u4f01\u4e1a IT \u5e94\u7528\u7684\u53ef\u9760\u6027\u548c\u8d28\u91cf\uff0c\u4fdd\u8bc1\u7528\u6237\u5f97\u5230\u826f\u597d\u7684\u670d\u52a1\uff0c\u964d\u4f4e IT \u603b\u62e5\u6709\u6210\u672c (TCO)\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u6027\u80fd\u5206\u6790\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u9488\u5bf9\u5e94\u7528\u670d\u52a1\u7684\u54c1\u8d28\u3001\u6027\u80fd\u4ee5\u53ca\u81ea\u5b9a\u4e49\u57cb\u70b9\u7684 APM \u670d\u52a1\u3002\u57fa\u4e8e\u57cb\u70b9\u4e8b\u4ef6\u5b9a\u4e49\u53ca\u6d77\u91cf\u6570\u636e\u7684\u805a\u5408\u5206\u6790\uff0cGIO \u53ef\u5e2e\u52a9\u5ba2\u6237\u53d1\u73b0\u591a\u7c7b\u5f02\u5e38\u95ee\u9898\uff0c\u5e76\u53ca\u65f6\u62a5\u8b66\uff0c\u505a\u5206\u914d\u5904\u7406\uff0c\u540c\u65f6\u5e73\u53f0\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5f52\u56e0\u80fd\u529b\uff0c\u5305\u62ec\u4e14\u4e0d\u9650\u4e8e\u5f02\u5e38\u5206\u6790\u3001\u4e8b\u4ef6\u5206\u6790\u3001\u81ea\u5b9a\u4e49\u4e0a\u62a5\u3001\u65e5\u5fd7\u67e5\u8be2\u7b49\uff0c\u7ed3\u5408\u7075\u6d3b\u7684\u62a5\u8868\u80fd\u529b\u53ef\u4e86\u89e3\u5404\u7c7b\u6307\u6807\u7684\u8d8b\u52bf\u53d8\u5316\u3002"),(0,a.kt)("p",null,"GrowingIO \u6027\u80fd\u76d1\u63a7\u6a21\u5757\u76ee\u524d\u63d0\u4f9b\u4e86 App \u5d29\u6e83\u5206\u6790\uff0c\u5e94\u7528\u542f\u52a8\u65f6\u95f4\uff0c\u9875\u9762\u542f\u52a8\u65f6\u95f4\u5206\u6790\u7684\u529f\u80fd\u3002"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u91c7\u96c6 SDK \u7248\u672c >=3.4.5"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"))),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,a.kt)("h4",{id:"\u96c6\u6210-apm"},"\u96c6\u6210 APM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u96c6\u6210 APM \u6a21\u5757")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pod 'GrowingAnalytics/APM'\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u96c6\u6210 GrowingAPM")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pod 'GrowingAPM'\n")),(0,a.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update")),(0,a.kt)("h4",{id:"\u521d\u59cb\u5316-growingapm"},"\u521d\u59cb\u5316 GrowingAPM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 main.m \u4e2d\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},'#import "GrowingAPMModule.h"'),"\uff0c\u5e76\u5728 main \u51fd\u6570\u4e2d\u6dfb\u52a0\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"int main(int argc, char * argv[]) {\n    // GrowingAPM Setup\n    [GrowingAPM setupMonitors:GrowingAPMMonitorsCrash | GrowingAPMMonitorsUserInterface appDelegateClass:[AppDelegate class]];\n    NSString * appDelegateClassName;\n    @autoreleasepool {\n        // Setup code that might create autoreleased objects goes here.\n        appDelegateClassName = NSStringFromClass([AppDelegate class]);\n    }\n    return UIApplicationMain(argc, argv, nil, appDelegateClassName);\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728 AppDelegate.m \u4e2d\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},'#import "GrowingAPMModule.h"'),"\uff0c\u5e76\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," \u4e2d\u521d\u59cb\u5316 GrowingAnalytics SDK \u7684\u540c\u65f6\uff0c\u5bfc\u5165 GrowingAPMConfig \u914d\u7f6e:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n\n// \u6dfb\u52a0 GrowingAPM \u521d\u59cb\u5316\u914d\u7f6e\nGrowingAPMConfig *config = GrowingAPMConfig.config;\n// \u6839\u636e\u60a8\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\nconfig.monitors = GrowingAPMMonitorsCrash | GrowingAPMMonitorsUserInterface;\nconfiguration.APMConfig = config;\n\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,a.kt)("h4",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u60a8\u4ec5\u9700\u8981\u90e8\u5206 APM \u76d1\u63a7\u529f\u80fd\uff0c\u53ef\u6309\u9700\u96c6\u6210\u5bf9\u5e94\u7684 GrowingAPM \u5b50\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# GrowingAnalytics/APM \u6a21\u5757\npod 'GrowingAnalytics/APM'\n\n# \u6309\u7167\u6240\u9700 GrowingAPM \u5b50\u6a21\u5757\u81ea\u7531\u7ec4\u5408\npod 'GrowingAPM/UIMonitor'\npod 'GrowingAPM/CrashMonitor'\n# ...\n"))),(0,a.kt)(i.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",mdxType:"TabItem"},(0,a.kt)("p",null,"\u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"p"},"GrowingModule_APM")," Package"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"add Package",src:t(5623).Z,width:"400",height:"460"})),(0,a.kt)("h4",{id:"\u521d\u59cb\u5316-growingapm-1"},"\u521d\u59cb\u5316 GrowingAPM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"main.swift")," \u4e2d\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"import GrowingModule_APM"),"\uff0c\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"GrowingAPM.setupMonitors([.crash, .userInterface], appDelegateClass: AppDelegate.self)\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"AppDelegate.swift")," \u4e2d\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"import GrowingModule_APM"),"\uff0c\u5e76\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," \u4e2d\u521d\u59cb\u5316 GrowingAnalytics SDK \u7684\u540c\u65f6\uff0c\u5bfc\u5165 GrowingAPMConfig \u914d\u7f6e:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let config = GrowingAutotrackConfiguration(projectId: "YourAccountId")\nconfig?.dataCollectionServerHost = "YourServerHost"\nconfig?.dataSourceId = "YourDatasourceId"\n\n// \u6dfb\u52a0 GrowingAPM \u521d\u59cb\u5316\u914d\u7f6e\nlet apmconfig = GrowingAPMConfig()\n// \u6839\u636e\u60a8\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\napmconfig.monitors = [.crash, .userInterface]\nconfig?.apmConfig = apmconfig\n\nGrowingAutotracker.start(with: config!, launchOptions: launchOptions ?? [:])\n')))))}g.isMDXComponent=!0},5623:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/add_package_apm-f2f0f8fff59006c171db664e089f0025.png"}}]);