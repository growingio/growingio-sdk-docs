"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8469],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(4996),d=["components"],l={sidebar_position:2,title:"\u529f\u80fd\u4ecb\u7ecd"},c=void 0,s={unversionedId:"giokit/android/feature",id:"giokit/android/feature",title:"\u529f\u80fd\u4ecb\u7ecd",description:"SDK \u81ea\u68c0",source:"@site/docs/giokit/android/feature.md",sourceDirName:"giokit/android",slug:"/giokit/android/feature",permalink:"/growingio-sdk-docs/docs/giokit/android/feature",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/android/feature.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u529f\u80fd\u4ecb\u7ecd"},sidebar:"gioSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs/docs/giokit/android/integrate"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/ios/version"}},u={},p=[{value:"SDK \u81ea\u68c0",id:"sdk-\u81ea\u68c0",level:3},{value:"SDK \u4fe1\u606f",id:"sdk-\u4fe1\u606f",level:3},{value:"\u4ee3\u7801\u57cb\u70b9\uff08\u4ec5 Android\uff09",id:"\u4ee3\u7801\u57cb\u70b9\u4ec5-android",level:3},{value:"\u4e8b\u4ef6\u5e93",id:"\u4e8b\u4ef6\u5e93",level:3},{value:"XPath\u8ffd\u8e2a",id:"xpath\u8ffd\u8e2a",level:3},{value:"\u7f51\u7edc\u8bb0\u5f55",id:"\u7f51\u7edc\u8bb0\u5f55",level:3}],m={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"sdk-\u81ea\u68c0"},"SDK \u81ea\u68c0"),(0,o.kt)("p",null,"\u70b9\u51fb\u81ea\u68c0\u9875\u4e2d\u95f4\u7684\u6309\u94ae\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u68c0\u6d4b\u5f53\u524d SDK \u96c6\u6210\u72b6\u6001\uff0c\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53\u524d SDK \u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},"SDK \u521d\u59cb\u5316\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},"\u9879\u76eeID"),(0,o.kt)("li",{parentName:"ul"},"ServerHost"),(0,o.kt)("li",{parentName:"ul"},"URL Scheme \u914d\u7f6e\u7b49\u7b49")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u82e5\u6807\u6ce8\u7ea2\u5b57\u5219\u8bf4\u660e\u8be5\u9879\u8bbe\u7f6e\u53ef\u80fd\u5728\u6b63\u5f0f\u73af\u5883\u4e0b\u4f1a\u6709\u9690\u60a3\u3002"))),(0,o.kt)("img",{alt:"SDK \u81ea\u68c0",src:(0,a.Z)("/img/giokit/android/checkself.gif")}),(0,o.kt)("h3",{id:"sdk-\u4fe1\u606f"},"SDK \u4fe1\u606f"),(0,o.kt)("p",null,"\u6536\u96c6\u4e86 SDK \u4ee5\u53ca\u5e94\u7528\u7684\u6240\u6709\u57fa\u672c\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\u5bf9\u6bd4\u6240\u914d\u7f6e\u5185\u5bb9\u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u5982\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8fd8\u53ef\u622a\u957f\u56fe\u53d1\u9001\u7ed9\u6280\u672f\u652f\u6301\u534f\u52a9\u6392\u67e5\u3002"),(0,o.kt)("img",{alt:"SDK \u4fe1\u606f",src:(0,a.Z)("/img/giokit/android/sdkinfo.gif")}),(0,o.kt)("h3",{id:"\u4ee3\u7801\u57cb\u70b9\u4ec5-android"},"\u4ee3\u7801\u57cb\u70b9\uff08\u4ec5 Android\uff09"),(0,o.kt)("p",null,"\u5c55\u793a\u4e86 App \u4ee3\u7801\u4e2d\u6240\u6709\u7684\u624b\u52a8\u57cb\u70b9\u4f4d\u7f6e\uff0c\u4ee5 \u201c\u7c7b+\u65b9\u6cd5\u201d \u7684\u5217\u8868\u5f62\u5f0f\u5c55\u73b0\u3002"),(0,o.kt)("img",{alt:"\u4ee3\u7801\u57cb\u70b9",src:(0,a.Z)("/img/giokit/android/sdkcode.jpg")}),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u5e93"},"\u4e8b\u4ef6\u5e93"),(0,o.kt)("p",null,"\u4ee5\u5217\u8868\u5f62\u5f0f\u5c55\u793a\u81ea\u63d2\u4ef6\u542f\u7528\u540e\u6240\u6709\u7684\u57cb\u70b9\u6570\u636e\u53ca\u5176\u53d1\u9001\u72b6\u6001\uff0c\u70b9\u51fb\u5355\u6761\u6570\u636e\u53ef\u67e5\u770b\u6570\u636e\u8be6\u60c5\u3002\u6570\u636e\u683c\u5f0f\u8bf7\u79fb\u6b65",(0,o.kt)("a",{parentName:"p",href:"/docs/Measurement%20Protocol"},"\u6d4b\u91cf\u534f\u8bae"),"\u3002\n\u540c\u65f6\u60a8\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165\u4e8b\u4ef6\u7c7b\u578b\u6765\u8fdb\u884c\u7b5b\u9009\uff0c\u53ef\u4ee5\u9009\u4e2d\u590d\u5236\u6570\u636e\u8be6\u60c5\u3002"),(0,o.kt)("img",{alt:"\u57cb\u70b9\u6570\u636e",src:(0,a.Z)("/img/giokit/android/sdkdata.gif")}),(0,o.kt)("h3",{id:"xpath\u8ffd\u8e2a"},"XPath\u8ffd\u8e2a"),(0,o.kt)("p",null,"\u5f00\u542f\u8be5\u529f\u80fd\u540e\uff0c\u62d6\u52a8\u5706\u70b9\u5230\u5bf9\u5e94\u63a7\u4ef6\u4e0a\uff0c\u5373\u53ef\u663e\u793a\u8be5\u63a7\u4ef6\u7684 path \u8def\u5f84\uff0c\u4fbf\u4e8e\u5bf9\u7167\u5df2\u5708\u9009\u7684\u6307\u6807\u3002\u652f\u6301\u539f\u751f\u63a7\u4ef6\u53ca WebView\u3002"),(0,o.kt)("img",{alt:"\u57cb\u70b9\u8ffd\u8e2a",src:(0,a.Z)("/img/giokit/android/sdktrack.gif")}),(0,o.kt)("h3",{id:"\u7f51\u7edc\u8bb0\u5f55"},"\u7f51\u7edc\u8bb0\u5f55"),(0,o.kt)("p",null,"\u8be5\u754c\u9762\u4f1a\u663e\u793a\u5e94\u7528",(0,o.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u671f\u95f4"),"\u4ea7\u751f\u7684\u6240\u6709\u7f51\u7edc\u8bf7\u6c42\uff0c\u5305\u62ec\u8bf7\u6c42\u6570\u91cf\uff0c\u8bf7\u6c42\u5927\u5c0f\u548c\u8bf7\u6c42\u9519\u8bef\u7684\u4e2a\u6570\u3002\u540c\u65f6\u5728\u8be6\u60c5\u9875\u5185\u53ef\u4ee5\u67e5\u770b\u4f7f\u7528\u4e86\u52a0\u5bc6\u5e93\u4e4b\u540e\u7684\u8bf7\u6c42\u6570\u636e\u3002"),(0,o.kt)("img",{alt:"\u7f51\u7edc\u8bf7\u6c42",src:(0,a.Z)("/img/giokit/android/sdkhttp.gif")}))}g.isMDXComponent=!0}}]);