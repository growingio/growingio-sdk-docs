"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,title:"A/B\u6d4b\u8bd5"},i=void 0,o={unversionedId:"webjs/plugins/abtest",id:"webjs/plugins/abtest",title:"A/B\u6d4b\u8bd5",description:"\u7b80\u4ecb\uff08gioABTest\uff09",source:"@site/docs/webjs/plugins/abtest.md",sourceDirName:"webjs/plugins",slug:"/webjs/plugins/abtest",permalink:"/growingio-sdk-docs/docs/webjs/plugins/abtest",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/plugins/abtest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"A/B\u6d4b\u8bd5"},sidebar:"docSidebar",previous:{title:"\u63d2\u4ef6",permalink:"/growingio-sdk-docs/docs/webjs/plugins"},next:{title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29",permalink:"/growingio-sdk-docs/docs/webjs/plugins/compress"}},s={},p=[{value:"\u7b80\u4ecb\uff08gioABTest\uff09",id:"\u7b80\u4ecbgioabtest",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"CDN\u96c6\u6210\u5f15\u5165",id:"cdn\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u51c6\u5907\u914d\u7f6e\u9879",id:"2\u51c6\u5907\u914d\u7f6e\u9879",level:3},{value:"3\u3001\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u9879\u5e76\u6ce8\u518c",id:"3\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u9879\u5e76\u6ce8\u518c",level:3},{value:"4\u3001api\u8c03\u7528",id:"4api\u8c03\u7528",level:3}],d=(u="ImageLoader",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const c={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecbgioabtest"},"\u7b80\u4ecb\uff08gioABTest\uff09"),(0,a.kt)("p",null,"\u7528\u4e8eA/B\u6d4b\u8bd5\u529f\u80fd\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,a.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,a.kt)("h4",{id:"cdn\u96c6\u6210\u5f15\u5165"},"CDN\u96c6\u6210\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioABTest.js"><\/script>\n')),(0,a.kt)("h4",{id:"npm\u96c6\u6210\u5f15\u5165"},"npm\u96c6\u6210\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import gioABTest from "gio-webjs-sdk/plugins/gioABTest"\n')),(0,a.kt)("h3",{id:"2\u51c6\u5907\u914d\u7f6e\u9879"},"2\u3001\u51c6\u5907\u914d\u7f6e\u9879"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u5b57\u6bb5\u540d")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u53c2\u6570\u7c7b\u578b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"abServerUrl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0cABTest \u5206\u6d41\u670d\u52a1\u7684\u8bf7\u6c42\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"requestInterval")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u8bf7\u6c42\u95f4\u9694")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"requestTimeout")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1000")),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u8bf7\u6c42\u8d85\u65f6\u65f6\u957f")))),(0,a.kt)("h3",{id:"3\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u9879\u5e76\u6ce8\u518c"},"3\u3001\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u9879\u5e76\u6ce8\u518c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [{ ...gioABTest, options: { abServerUrl: 'server url' }}]);\ngdp('init', xxxx);\n")),(0,a.kt)("h3",{id:"4api\u8c03\u7528"},"4\u3001api\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gdp('getABTest', \u5b9e\u9a8c\u5c42Id, (result: any) => {\n  console.log(result);\n});\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u5982\u4f55\u83b7\u53d6layerId(\u5b9e\u9a8c\u5c42ID)"),(0,a.kt)(d,{path:"img/common/get_abtesting_layer_id",mdxType:"ImageLoader"})))}g.isMDXComponent=!0}}]);