"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2322],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8190:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:3,title:"\u5e38\u89c1\u95ee\u9898"},l=void 0,s={unversionedId:"ios/question",id:"ios/question",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"--------------",source:"@site/docs/ios/question.md",sourceDirName:"ios",slug:"/ios/question",permalink:"/growingio-sdk-docs/docs/ios/question",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/question.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"gioSidebar",previous:{title:"\u81ea\u5b9a\u4e49 SDK",permalink:"/growingio-sdk-docs/docs/ios/develop/custom_sdk"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/webjs/version"}},d=[{value:"Cocoapods\u95ee\u9898",id:"cocoapods\u95ee\u9898",children:[]},{value:"\u5982\u4f55\u7981\u7528GrowingIO iOS SDK \u8c03\u7528\u83b7\u53d6 IDFA \u76f8\u5173\u4ee3\u7801\uff1f",id:"\u5982\u4f55\u7981\u7528growingio-ios-sdk-\u8c03\u7528\u83b7\u53d6-idfa-\u76f8\u5173\u4ee3\u7801",children:[]},{value:"\u96c6\u6210SDK\u540e\uff0c\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f",id:"\u96c6\u6210sdk\u540e\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e",children:[]},{value:"SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f",id:"sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u4ee5\u53cagdpr\u6b27\u76df\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cocoapods\u95ee\u9898"},"Cocoapods\u95ee\u9898"),(0,i.kt)("h4",{id:"pod-installupdate\u66f4\u65b0\u6162\u89e3\u51b3\u529e\u6cd5"},"pod install/update\u66f4\u65b0\u6162\u89e3\u51b3\u529e\u6cd5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod repo remove master\npod repo add master https://gitee.com/mirrors/CocoaPods-Specs.git\npod repo update\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u79d1\u5b66\u4e0a\u7f51")),(0,i.kt)("h3",{id:"\u5982\u4f55\u7981\u7528growingio-ios-sdk-\u8c03\u7528\u83b7\u53d6-idfa-\u76f8\u5173\u4ee3\u7801"},"\u5982\u4f55\u7981\u7528GrowingIO iOS SDK \u8c03\u7528\u83b7\u53d6 IDFA \u76f8\u5173\u4ee3\u7801\uff1f"),(0,i.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a\u4e09\u65b9\u76d1\u6d4b\u673a\u6784\u626b\u63cfAPP\u6216APP\u4e0a\u67b6\u53d1\u73b0 GIO SDK \u6709\u8c03\u7528\u6709\u83b7\u53d6IDFA \u76f8\u5173\u4ee3\u7801\uff0c\u4e14APP\u4e2d\u53c8\u6ca1\u6709\u4f7f   \u7528IDFA\u65f6\uff08\u6b64\u65f6IDFA\u4e0d\u4f1a\u88ab\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff09"),(0,i.kt)("p",null,"\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ios/develop/custom_sdk#%E9%85%8D%E7%BD%AE%E9%A1%B9"},"\u81ea\u5b9a\u4e49SDK")," \u5728pod\u6587\u4ef6\u4e2d\u6dfb\u52a0 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics/DISABLE_IDFA'\n")),(0,i.kt)("h3",{id:"\u96c6\u6210sdk\u540e\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e"},"\u96c6\u6210SDK\u540e\uff0c\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dataCollectionServerHost\u3001accountId \u3001dataSoueceId \u914d\u7f6e\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u7f51\u7edc\u73af\u5883\u662f\u5426\u53ef\u8bbf\u95ee")),(0,i.kt)("h3",{id:"sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u4ee5\u53cagdpr\u6b27\u76df\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"},"SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u6761\u6b3e\u65f6\uff0c\u53ef\u4ee5\u5728 SDK \u521d\u59cb\u5316\u914d\u7f6e\u65f6\uff0c\u8c03\u7528\xa0dataCollectionEnabled\xa0\u8bbe\u7f6e\u4e3a\xa0NO\uff0c\u7981\u6b62\u6570\u636e\u91c7\u96c6;",(0,i.kt)("br",null),"\n\u5176\u6b21\uff0c\u5f53\u7528\u6237\u540c\u610f\u9690\u79c1\u6761\u6b3e\u65f6\uff0c\u8c03\u7528\xa0[","[GrowingAutotracker sharedInstance]"," setDataCollectionEnabled:YES]\xa0\u5f00\u542f\u6570\u636e\u91c7\u96c6\uff1b",(0,i.kt)("br",null),"\n\u6700\u540e\uff0c\u5f53\u7528\u6237\u518d\u6b21\u8fdb\u5165app\u65f6\uff0c \u5982\u679c\u7528\u6237\u5df2\u540c\u610f\u9690\u79c1\u6761\u6b3e\uff0c\u5728 SDK \u521d\u59cb\u5316\u914d\u7f6e\u65f6\uff0c\u8c03\u7528\xa0dataCollectionEnabled\xa0\u8bbe\u7f6e\u4e3a\xa0YES\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"\u82e5App \u9700\u901a\u8fc7\u7b2c\u4e09\u65b9\u5b89\u5168\u68c0\u6d4b\uff0c\u5efa\u8bae\u5728\u9690\u79c1\u653f\u7b56\u6388\u6743\u6210\u529f\u4e4b\u540e\uff0c\u518d\u521d\u59cb\u5316 GrowingIO SDK"),"\u3002"))}u.isMDXComponent=!0}}]);