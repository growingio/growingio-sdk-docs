"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7294),o=r(6010),i=r(3438),a=r(9960),c=r(3919),d=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},2365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=r(7462),o=(r(7294),r(3905)),i=r(2991),a=r(3438);const c={slug:"/android",title:"Android SDK"},d=void 0,s={unversionedId:"index/android",id:"index/android",title:"Android SDK",description:"Android SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9SDK \u548c \u57cb\u70b9SDK \u4e24\u4e2a\u7248\u672c\uff1a",source:"@site/docs/index/android.md",sourceDirName:"index",slug:"/android",permalink:"/growingio-sdk-docs/docs/android",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/index/android.md",tags:[],version:"current",frontMatter:{slug:"/android",title:"Android SDK"},sidebar:"docSidebar",previous:{title:"SDK \u7b80\u4ecb",permalink:"/growingio-sdk-docs/docs/"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/android/version"}},l={},m=[{value:"SDK DEMO",id:"sdk-demo",level:3}],p={toc:m},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Android SDK \u63d0\u4f9b\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/Introduce#%E9%9B%86%E6%88%90%E6%97%A0%E5%9F%8B%E7%82%B9sdk"},"\u65e0\u57cb\u70b9SDK")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/Introduce#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},"\u57cb\u70b9SDK")," \u4e24\u4e2a\u7248\u672c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57cb\u70b9SDK \u53ea\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u540c\u5b66\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 API \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6;"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9SDK \u5177\u5907 \u57cb\u70b9SDK \u7684\u6240\u6709\u529f\u80fd\uff0c\u540c\u65f6\u5177\u5907\u81ea\u52a8\u91c7\u96c6\u57fa\u672c\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u5982\u9875\u9762\u8bbf\u95ee\uff0c\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002")),(0,o.kt)("admonition",{title:"\u5f00\u6e90\u4fe1\u606f",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u65e0\u57cb\u70b9SDK\uff08\u5305\u62ec\u57cb\u70b9 SDK\uff09\u4ee3\u7801\u5df2\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker"},"Github")," \u4e0a\u5f00\u6e90\uff0c\u53ef\u4ee5\u8be6\u7ec6\u67e5\u770b\u4ee3\u7801\u5b9e\u73b0\u7ec6\u8282\uff0c\u6b22\u8fce star, fork\u3002")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Gradle\u63d2\u4ef6\u7248\u672c"),"\uff1a 3.2.1\u53ca\u4ee5\u4e0a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Android\u7cfb\u7edf\u7248\u672c"),"\uff1aAndroid 4.2\u53ca\u4ee5\u4e0a",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"\u6839\u636e\u9700\u8981\u9009\u62e9\u96c6\u6210"),"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/Introduce#%E9%9B%86%E6%88%90%E6%97%A0%E5%9F%8B%E7%82%B9sdk"},(0,o.kt)("font",{color:"red"},"\u65e0\u57cb\u70b9SDK")),"  \u6216  ",(0,o.kt)("a",{parentName:"p",href:"/docs/android/Introduce#%E9%9B%86%E6%88%90%E5%9F%8B%E7%82%B9sdk"},(0,o.kt)("font",{color:"red"},"\u57cb\u70b9SDK")))),(0,o.kt)("h3",{id:"sdk-demo"},"SDK DEMO"),(0,o.kt)("p",null,"\u4ece 4.0 \u7248\u672c\u5f00\u59cb\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-demo"},"Android SDK Demo")," \u5c06\u540c\u6b65\u66f4\u65b0\u3002\u8be5App\u662f\u4e3a\u4e86\u8ba9\u5f00\u53d1\u8005\u80fd\u591f\u7b80\u5355\u5feb\u901f\u4e0a\u624bGrowingIO SDK\u800c\u53c2\u8003\u4f7f\u7528\u7684Demo\uff0c\u91cc\u9762\u57fa\u672c\u8986\u76d6\u4e86SDK\u4e2d\u5e38\u7528\u7684\u529f\u80fd\u4ecb\u7ecd\uff0c\u6b22\u8fce\u4f53\u9a8c\u4f7f\u7528\u3002"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/feature.jpg",width:"24.5%",alt:"feature"}),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/ui.jpg",width:"24.5%",alt:"ui"}),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/logcat.jpg",width:"24.5%",alt:"feature"}),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/detail.jpg",width:"24.5%",alt:"feature"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);