"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9401],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),a=n(6010),o=n(9960),i=n(3438),c="cardContainer_woeA",d="cardTitle_pNjP",l="cardDescription_qC_k",s=n(3919),u=n(5999);function m(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l),title:i},i))}function f(e){var t=e.item,n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,a=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:a,title:n.label,description:null==o?void 0:o.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{key:t,item:e}))})))}},595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5360),c=n(3438),d=["components"],l={slug:"/android",title:"Android SDK"},s=void 0,u={unversionedId:"android/index",id:"android/index",title:"Android SDK",description:"Android SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9SDK \u548c \u57cb\u70b9SDK \u4e24\u4e2a\u7248\u672c\uff1a",source:"@site/docs/android/index.md",sourceDirName:"android",slug:"/android",permalink:"/growingio-sdk-docs/docs/android",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/index.md",tags:[],version:"current",frontMatter:{slug:"/android",title:"Android SDK"},sidebar:"gioSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/docs/compliance/minpCompliance"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/android/version"}},m={},p=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:2},{value:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccount ID\u3001DataSource ID\u3001URL Scheme\u3001Host",id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570account-iddatasource-idurl-schemehost",level:3},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5}],f={toc:p};function g(e){var t=e.components,l=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Android SDK \u63d0\u4f9b\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/base/Introduce#%E9%9B%86%E6%88%90%E6%97%A0%E5%9F%8B%E7%82%B9sdk"},"\u65e0\u57cb\u70b9SDK")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/base/Introduce#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},"\u57cb\u70b9SDK")," \u4e24\u4e2a\u7248\u672c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK \u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6;"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK \u5177\u5907 \u57cb\u70b9SDK \u7684\u6240\u6709\u529f\u80fd\uff0c\u540c\u65f6\u5177\u5907\u81ea\u52a8\u91c7\u96c6\u57fa\u672c\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u5982\u9875\u9762\u8bbf\u95ee\uff0c\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002")),(0,o.kt)("p",null,"\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker"},"Github")," \u4e0a\uff0c\u6b22\u8fce star,fork \u4e00\u6ce2\u3002"),(0,o.kt)("h2",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,o.kt)("h3",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570account-iddatasource-idurl-schemehost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccount ID\u3001DataSource ID\u3001URL Scheme\u3001Host"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,o.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,o.kt)("br",null),"\nURL Scheme\uff1a \u662f GrowingIO SDK \u4ece\u5916\u90e8\u5524\u9192\u5e94\u7528\u65f6\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6",(0,o.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740",(0,o.kt)("br",null)),(0,o.kt)("p",{parentName:"div"},"Account ID\u3001DataSource ID\u3001URL Scheme \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301",(0,o.kt)("br",null),"\nHost \u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"))),(0,o.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:n(7224).Z,width:"1402",height:"382"})),(0,o.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:n(1215).Z,width:"2690",height:"1082"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Gradle\u63d2\u4ef6\u7248\u672c"),"\uff1a 3.2.1\u53ca\u4ee5\u4e0a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Android\u7cfb\u7edf\u7248\u672c"),"\uff1aAndroid 4.2\u53ca\u4ee5\u4e0a",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"\u6839\u636e\u9700\u8981\u9009\u62e9\u96c6\u6210"),"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/base/Introduce#%E9%9B%86%E6%88%90%E6%97%A0%E5%9F%8B%E7%82%B9sdk"},(0,o.kt)("font",{color:"red"},"\u65e0\u57cb\u70b9SDK")),"  \u6216  ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/base/Introduce#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},(0,o.kt)("font",{color:"red"},"\u57cb\u70b9SDK"))))),(0,o.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0},7224:function(e,t,n){t.Z=n.p+"assets/images/createapplication-241aaf42ded1927f70965a5c2968ad63.png"},1215:function(e,t,n){t.Z=n.p+"assets/images/showappdatasourceid-c07fdb45bb5e5bb67d7f721116bf91b8.png"}}]);