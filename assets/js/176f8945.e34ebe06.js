"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2074],{6926:(o,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var e=r(5893),i=r(1151);const d={sidebar_position:6,title:"\u4f9d\u8d56\u6e05\u5355BoM"},t=void 0,s={id:"android/PlatformBom",title:"\u4f9d\u8d56\u6e05\u5355BoM",description:"\u4f7f\u7528 GrowingIO Android BoM (\u4f9d\u8d56\u6e05\u5355)\uff0c\u53ef\u786e\u4fdd\u60a8\u7684\u5e94\u7528\u59cb\u7ec8\u4f7f\u7528 GrowingIO Android \u5e93\u7684\u517c\u5bb9\u7248\u672c\u3002",source:"@site/docs/android/PlatformBom.md",sourceDirName:"android",slug:"/android/PlatformBom",permalink:"/growingio-sdk-docs/docs/android/PlatformBom",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/PlatformBom.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u4f9d\u8d56\u6e05\u5355BoM"},sidebar:"docSidebar",previous:{title:"AGP \u63d2\u4ef6\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/android/AGP7"},next:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/growingio-sdk-docs/docs/android/upgrade"}},a={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2}];function l(o){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...o.components},{Details:r}=n;return r||function(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.p,{children:"\u4f7f\u7528 GrowingIO Android BoM (\u4f9d\u8d56\u6e05\u5355)\uff0c\u53ef\u786e\u4fdd\u60a8\u7684\u5e94\u7528\u59cb\u7ec8\u4f7f\u7528 GrowingIO Android \u5e93\u7684\u517c\u5bb9\u7248\u672c\u3002"}),"\n",(0,e.jsx)(n.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,e.jsx)(n.p,{children:"\u901a\u8fc7 GrowingIO Android BoM (\u4f9d\u8d56\u6e05\u5355)\uff0c\u53ef\u4ee5\u53ea\u9700\u6307\u5b9a\u4e00\u4e2a\u7248\u672c\uff08BoM \u7684\u7248\u672c\uff09\uff0c\u5373\u53ef\u7ba1\u7406\u6240\u6709 GrowingIO \u5e93\u7248\u672c\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u5728\u5e94\u7528\u4e2d\u4f7f\u7528 GrowingIO BoM \u65f6\uff0cBoM \u4f1a\u81ea\u52a8\u62c9\u53d6\u6620\u5c04\u5230 BoM \u7248\u672c\u7684\u5404\u4e2a\u5e93\u7248\u672c\u3002\u5176\u4e2d\u6bcf\u4e2a\u7248\u672c\u90fd\u5c06\u517c\u5bb9\u3002\u5728\u5e94\u7528\u4e2d\u66f4\u65b0 BoM \u7248\u672c\u65f6\uff0c\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u6240\u6709 GrowingIO \u5e93\u90fd\u5c06\u66f4\u65b0\u4e3a\u6620\u5c04\u5230\u8be5 BoM \u7248\u672c\u7684\u7248\u672c\u3002"}),"\n",(0,e.jsxs)(n.p,{children:["\u8be6\u7ec6\u4e86\u89e3 ",(0,e.jsx)(n.a,{href:"https://docs.gradle.org/4.6-rc-1/userguide/managing_transitive_dependencies.html#sec:bom_import",children:"BoM \u5e73\u53f0\u7684 Gradle \u652f\u6301"}),"\u3002"]}),"\n",(0,e.jsx)(n.p,{children:"\u4e0b\u9762\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528 GrowingIO Android BoM \u5728\u60a8\u7684\u6a21\u5757\uff08\u5e94\u7528\u7ea7\uff09Gradle \u6587\u4ef6\uff08\u901a\u5e38\u4e3a app/build.gradle\uff09\u4e2d\u58f0\u660e\u4f9d\u8d56\u9879\u3002\u4f7f\u7528 BoM \u65f6\uff0c\u60a8\u65e0\u9700\u5728\u4f9d\u8d56\u9879\u884c\u4e2d\u6307\u5b9a\u5355\u72ec\u7684\u5e93\u7248\u672c\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:4.3.2')\n\n  implementation 'com.growingio.android:tracker'\n  implementation 'com.growingio.android:autotracker'\n}\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5173\u4e8e\u4f7f\u7528 GrowingIO Android BoM \u7684\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u89e3\u7b54\uff1a"}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)("summary",{children:"\u5982\u4f55\u4f7f\u7528 BoM \u4e2d\u672a\u6307\u5b9a\u7684\u5e93\u7248\u672c\uff1f"}),(0,e.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u5e93\u7684\u4f9d\u8d56\u4e2d\u6307\u5b9a\u6240\u9700\u8981\u7684\u5e93\u7248\u672c\u53f7,\u5982\u4e0b\u3002\u4f46\u4e0d\u5efa\u8bae\u6307\u5b9aBoM\u4e2d\u7684\u7248\u672c\u53f7\u3002"}),(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:4.3.2')\n\n  implementation 'com.growingio.android:autotracker:4.3.2'\n}\n"})})]}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)("summary",{children:"BoM \u662f\u5426\u4f1a\u81ea\u52a8\u5c06\u6240\u6709 GrowingIO \u5e93\u6dfb\u52a0\u5230\u6211\u7684\u5e94\u7528\uff1f"}),(0,e.jsxs)(n.p,{children:["\u4e0d\u4f1a\u3002\u8981\u5728\u771f\u6b63\u6dfb\u52a0\u548c\u4f7f\u7528\u5bf9\u5e94\u5e93\u65f6\uff0c\u5fc5\u987b\u5728\u6a21\u5757\uff08\u5e94\u7528\u7ea7\uff09Gradle \u6587\u4ef6\uff08\u901a\u5e38\u4e3a ",(0,e.jsx)(n.code,{children:"app/build.gradle"}),"\uff09\u4e2d\u5c06\u6bcf\u4e2a\u5e93\u58f0\u660e\u4e3a\u5355\u72ec\u7684\u4f9d\u8d56\u9879\u884c\u3002\n\u4f7f\u7528 BoM \u53ef\u786e\u4fdd\u60a8\u5e94\u7528\u4e2d\u7684\u4efb\u4f55 GrowingIO \u5e93\u7248\u672c\u90fd\u517c\u5bb9\uff0c\u4f46 BoM \u5e76\u4e0d\u4f1a\u771f\u6b63\u5c06\u8fd9\u4e9b GrowingIO \u5e93\u6dfb\u52a0\u5230\u60a8\u7684\u5e94\u7528\u3002"]})]}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)("summary",{children:"\u53ef\u4ee5\u4f7f\u7528 BoM \u6dfb\u52a0\u4e0d\u662f\u6765\u81ea GrowingIO \u7684 Android \u5e93\u5417\uff1f"}),(0,e.jsx)(n.p,{children:"\u4e0d\u53ef\u4ee5\u3002GrowingIO Android BoM \u4ec5\u7ba1\u7406 GrowingIO \u5e93\u7684\u5e93\u7248\u672c\u3002"})]}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)("summary",{children:"\u4e3a\u4ec0\u4e48\u63a8\u8350\u4f7f\u7528 BoM \u6765\u7ba1\u7406 SDK \u7248\u672c\uff1f"}),(0,e.jsx)(n.p,{children:"\u867d\u7136\u6bcf\u4e2a GrowingIO \u5e93\u90fd\u5355\u72ec\u8fdb\u884c\u7248\u672c\u63a7\u5236\uff0c\u4f46\u8fd9\u4e9b\u5e93\u662f\u4e00\u8d77\u6784\u5efa\u7684\uff0c\u4ee5\u786e\u4fdd\u6bcf\u4e2a\u5e93\u7684\u6700\u65b0\u7248\u672c\u4e0e\u5176\u4ed6\u5e93\u517c\u5bb9\u3002"}),(0,e.jsx)(n.p,{children:"\u4f7f\u7528 BoM \u7ba1\u7406\u5e94\u7528\u7684 GrowingIO \u5e93\u7248\u672c\u540e\uff0c\u65e0\u9700\u8ddf\u8e2a\u54ea\u4e2a\u7248\u672c\u7684 GrowingIO \u5e93\u4e0e\u5176\u4ed6 GrowingIO \u5e93\u517c\u5bb9\u3002"})]}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)("summary",{children:"\u5e94\u7528\u4f7f\u7528\u7684 Gradle \u7248\u672c\u4f4e\u4e8e 5.0 \u8fd8\u53ef\u4ee5\u4f7f\u7528 BoM \u5417\uff1f"}),(0,e.jsx)(n.p,{children:"\u53ef\u4ee5\uff01\u5bf9\u4e8e Gradle 5.0 \u53ca\u66f4\u9ad8\u7248\u672c\uff0cBoM \u652f\u6301\u5c06\u81ea\u52a8\u542f\u7528\u3002\u4e0d\u8fc7\uff0c\u5bf9\u4e8e\u66f4\u65e9\u7248\u672c\u7684 Gradle\uff0c\u53ea\u9700\u542f\u7528 BoM \u529f\u80fd\u5e76\u91c7\u7528\u7565\u5fae\u4e0d\u540c\u7684\u65b9\u5f0f\u5bfc\u5165 BoM\u3002"}),(0,e.jsxs)(n.p,{children:["\u5728 ",(0,e.jsx)(n.code,{children:"settings.gradle"}),"  \u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0 ",(0,e.jsx)(n.code,{children:"enableFeaturePreview('IMPROVED_POM_SUPPORT')"}),"\u3002\n\u5728\u6a21\u5757\uff08\u5e94\u7528\u7ea7\uff09Gradle \u6587\u4ef6\uff08\u901a\u5e38\u4e3a ",(0,e.jsx)(n.code,{children:"app/build.gradle"}),"\uff09\u4e2d\uff0c\u50cf\u5bfc\u5165\u666e\u901a\u5e93\uff08\u4e0d\u5e26 platform \u4fee\u9970\u7b26\uff09\u4e00\u6837\u5bfc\u5165 BoM\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation 'com.growingio.android:autotracker-bom:4.3.2'\n\n  implementation 'com.growingio.android:autotracker'\n}\n"})})]}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)("summary",{children:"\u5982\u4f55\u62a5\u544a\u95ee\u9898\u6216\u63d0\u4f9b\u4e0e BoM \u6709\u5173\u7684\u53cd\u9988\uff1f"}),(0,e.jsxs)(n.p,{children:["\u8bf7\u8bbf\u95ee GitHub \u4e0a\u7684 ",(0,e.jsx)("a",{href:"https://github.com/growingio/growingio-sdk-android-autotracker",children:"GrowingIO Android SDK \u4ee3\u7801\u5e93"})]})]})]})}function m(o={}){const{wrapper:n}={...(0,i.a)(),...o.components};return n?(0,e.jsx)(n,{...o,children:(0,e.jsx)(l,{...o})}):l(o)}},1151:(o,n,r)=>{r.d(n,{Z:()=>s,a:()=>t});var e=r(7294);const i={},d=e.createContext(i);function t(o){const n=e.useContext(d);return e.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function s(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:t(o.components),e.createElement(d.Provider,{value:n},o.children)}}}]);