"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,v=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?o.createElement(v,d(d({ref:t},c),{},{components:r})):o.createElement(v,d({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,d=new Array(i);d[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,d[1]=a;for(var p=2;p<i;p++)d[p]=r[p];return o.createElement.apply(null,d)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,title:"\u4e8c\u6b21\u5f00\u53d1"},d=void 0,a={unversionedId:"android/develop/custom_develop",id:"android/develop/custom_develop",title:"\u4e8c\u6b21\u5f00\u53d1",description:"\u5982\u679c\u719f\u6089\u4e86\u81ea\u5b9a\u4e49SDK\u548c\u81ea\u5b9a\u4e49\u6a21\u5757\u540e\u57fa\u672c\u4e0a\u5c31\u80fd\u5728\u8fd9\u4e9b\u57fa\u7840\u4e0a\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\uff0c\u4e0b\u9762\u7f57\u5217\u4e86\u4e00\u4e9b\u4f7f\u7528SDK\u7684\u573a\u666f\uff0c\u5e76\u7ed9\u51fa\u4e86\u63a8\u8350\u7684\u505a\u6cd5\u3002",source:"@site/docs/android/develop/custom_develop.md",sourceDirName:"android/develop",slug:"/android/develop/custom_develop",permalink:"/growingio-sdk-docs/docs/android/develop/custom_develop",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/develop/custom_develop.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4e8c\u6b21\u5f00\u53d1"},sidebar:"gioSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/develop/custom module"},next:{title:"iOS SDK",permalink:"/growingio-sdk-docs/docs/ios"}},l={},p=[{value:"\u4e0d\u719f\u6089Android\u5f00\u53d1\u6216\u53ea\u60f3\u5feb\u901f\u96c6\u6210",id:"\u4e0d\u719f\u6089android\u5f00\u53d1\u6216\u53ea\u60f3\u5feb\u901f\u96c6\u6210",level:4},{value:"\u60f3\u8981\u96c6\u6210\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\uff0c\u5982\u6570\u636e\u52a0\u5bc6",id:"\u60f3\u8981\u96c6\u6210\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\u5982\u6570\u636e\u52a0\u5bc6",level:4},{value:"\u60f3\u8981App\u7ebf\u4e0a\u73af\u5883\u53bb\u9664SDK\u8c03\u8bd5\u5de5\u5177",id:"\u60f3\u8981app\u7ebf\u4e0a\u73af\u5883\u53bb\u9664sdk\u8c03\u8bd5\u5de5\u5177",level:4},{value:"\u4e0d\u60f3\u8981\u67d0\u4e9b\u6846\u67b6\u60f3\u8981\u63a5\u5165\u81ea\u5df1\u7684\u6846\u67b6\uff0c\u5982\u7f51\u7edc\u6846\u67b6",id:"\u4e0d\u60f3\u8981\u67d0\u4e9b\u6846\u67b6\u60f3\u8981\u63a5\u5165\u81ea\u5df1\u7684\u6846\u67b6\u5982\u7f51\u7edc\u6846\u67b6",level:4},{value:"\u5728\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8de8\u5e94\u7528\u5e73\u53f0\u4e0a\u4f7f\u7528",id:"\u5728\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8de8\u5e94\u7528\u5e73\u53f0\u4e0a\u4f7f\u7528",level:4}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5982\u679c\u719f\u6089\u4e86\u81ea\u5b9a\u4e49SDK\u548c\u81ea\u5b9a\u4e49\u6a21\u5757\u540e\u57fa\u672c\u4e0a\u5c31\u80fd\u5728\u8fd9\u4e9b\u57fa\u7840\u4e0a\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\uff0c\u4e0b\u9762\u7f57\u5217\u4e86\u4e00\u4e9b\u4f7f\u7528SDK\u7684\u573a\u666f\uff0c\u5e76\u7ed9\u51fa\u4e86\u63a8\u8350\u7684\u505a\u6cd5\u3002"),(0,n.kt)("h4",{id:"\u4e0d\u719f\u6089android\u5f00\u53d1\u6216\u53ea\u60f3\u5feb\u901f\u96c6\u6210"},"\u4e0d\u719f\u6089Android\u5f00\u53d1\u6216\u53ea\u60f3\u5feb\u901f\u96c6\u6210"),(0,n.kt)("p",null,"\u90a3\u4e48\u76f4\u63a5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/android"},"\u5982\u4f55\u96c6\u6210"),"\uff0c\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u9ed8\u8ba4\u7684SDK\u96c6\u6210\u5373\u53ef\u3002"),(0,n.kt)("h4",{id:"\u60f3\u8981\u96c6\u6210\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\u5982\u6570\u636e\u52a0\u5bc6"},"\u60f3\u8981\u96c6\u6210\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\uff0c\u5982\u6570\u636e\u52a0\u5bc6"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7API\u63a5\u53e3\u624b\u52a8\u6ce8\u518c\u5df2\u6709\u7684\u529f\u80fd\u6a21\u5757\u6216\u81ea\u5df1\u6839\u636e\u6a21\u5757\u7684\u6570\u636e\u5b9a\u4e49\u6765\u81ea\u5df1\u5b9e\u73b0\u60f3\u8981\u7684\u529f\u80fd\u3002"),(0,n.kt)("h4",{id:"\u60f3\u8981app\u7ebf\u4e0a\u73af\u5883\u53bb\u9664sdk\u8c03\u8bd5\u5de5\u5177"},"\u60f3\u8981App\u7ebf\u4e0a\u73af\u5883\u53bb\u9664SDK\u8c03\u8bd5\u5de5\u5177"),(0,n.kt)("p",null,"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/android/develop/coutom%20sdk"},"\u81ea\u5b9a\u4e49SDK"),"\uff0c\u6839\u636e\u9700\u8981\u96c6\u6210SDK\u3002\n\u53e6\u5916\u53ef\u4ee5\u5355\u72ec\u7ed9\u8fd0\u8425\u7684\u540c\u4e8b\u6253\u4e00\u4e2a\u5e26\u6709SDK\u8c03\u8bd5\u5de5\u5177\uff08\u5708\u9009\u548cMobile Debugger\uff09\u7684\u72ec\u7acbApp\u3002"),(0,n.kt)("h4",{id:"\u4e0d\u60f3\u8981\u67d0\u4e9b\u6846\u67b6\u60f3\u8981\u63a5\u5165\u81ea\u5df1\u7684\u6846\u67b6\u5982\u7f51\u7edc\u6846\u67b6"},"\u4e0d\u60f3\u8981\u67d0\u4e9b\u6846\u67b6\u60f3\u8981\u63a5\u5165\u81ea\u5df1\u7684\u6846\u67b6\uff0c\u5982\u7f51\u7edc\u6846\u67b6"),(0,n.kt)("p",null,"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/android/develop/custom%20module"},"\u81ea\u5b9a\u4e49\u6a21\u5757"),"\uff0c\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757\u6765\u5b8c\u6210\u81ea\u5df1\u7684\u529f\u80fd\u5c01\u88c5\u3002"),(0,n.kt)("h4",{id:"\u5728\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8de8\u5e94\u7528\u5e73\u53f0\u4e0a\u4f7f\u7528"},"\u5728\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8de8\u5e94\u7528\u5e73\u53f0\u4e0a\u4f7f\u7528"),(0,n.kt)("p",null,"\u4e00\u822c\u6211\u4eec\u4f1a\u5c3d\u91cf\u63d0\u4f9b\u5e38\u89c1\u7684\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u96c6\u6210\u65b9\u6848\uff0c\u82e5\u6ca1\u6709\u5219\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/android/develop/coutom%20sdk"},"\u81ea\u5b9a\u4e49SDK"),"\u6765\u5c01\u88c5\u81ea\u5df1\u9700\u8981\u7684SDK\u529f\u80fd\u3002"))}s.isMDXComponent=!0}}]);