"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),i=n(6775),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:r}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==i&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(f,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},8190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={title:"\u5982\u4f55\u96c6\u6210",sidebar_position:1},s=void 0,u={unversionedId:"webjs/integrate",id:"webjs/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u5f53\u7528\u6237\u52a0\u8f7d\u9875\u9762\u7684\u65f6\u5019\uff0c\u4f1a\u5f02\u6b65\u52a0\u8f7d WebJS SDK\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u7528\u6237\u7684\u52a0\u8f7d\u901f\u5ea6\uff0c\u6240\u4ee5\u4e00\u822c\u5efa\u8bae\u628a\u8fd9\u6bb5\u4ee3\u7801\u52a0\u5165\u5230 ` \u4e2d\u7684\u6700\u4e0b\u9762\uff0c\u8fd9\u6837\u80fd\u6700\u5927\u9650\u5ea6\u7684\u4fdd\u8bc1\u6570\u636e\u91c7\u96c6\u7684\u5b8c\u6574\u6027\u3002\u5982\u679c\u6709\u9650\u5236\u53ea\u80fd\u52a0\u5165\u5230 ` \u7684\u6700\u4e0b\u9762\uff0c\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u8fd9\u6837\u6f5c\u5728\u53ef\u80fd\u4f1a\u4e22\u5931\u6389\u90a3\u4e9b\u4e00\u52a0\u8f7d\u9875\u9762\u5c31\u7acb\u523b\u5173\u95ed\u7684\u6570\u636e\u3002",source:"@site/docs/webjs/integrate.md",sourceDirName:"webjs",slug:"/webjs/integrate",permalink:"/growingio-sdk-docs/docs/webjs/integrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u96c6\u6210",sidebar_position:1},sidebar:"docSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/webjs/version"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/webjs/initSettings"}},p={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"Web \u7ad9\u70b9 / H5 \u4e2d\u96c6\u6210",id:"web-\u7ad9\u70b9--h5-\u4e2d\u96c6\u6210",level:2},{value:"\u624b\u52a8\u96c6\u6210",id:"\u624b\u52a8\u96c6\u6210",level:3},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879-1",level:4},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:2},{value:"\u5728\u5fae\u4fe1\u516c\u4f17\u53f7H5\u4e2d\u96c6\u6210",id:"\u5728\u5fae\u4fe1\u516c\u4f17\u53f7h5\u4e2d\u96c6\u6210",level:2},{value:"\u5728 APP \u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210",id:"\u5728-app-\u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210",level:2},{value:"\u5728\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210",id:"\u5728\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210",level:2},{value:"\u5728Electron\u5e94\u7528\u4e2d\u96c6\u6210\u548c\u672c\u5730\u8c03\u8bd5",id:"\u5728electron\u5e94\u7528\u4e2d\u96c6\u6210\u548c\u672c\u5730\u8c03\u8bd5",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2},{value:"\u4f7f\u7528 GioKit \u6821\u9a8c\u4e8b\u4ef6\uff08\u63a8\u8350\uff09",id:"\u4f7f\u7528-giokit-\u6821\u9a8c\u4e8b\u4ef6\u63a8\u8350",level:3},{value:"\u4f7f\u7528 debug \u5728 Log \u4e2d\u6821\u9a8c",id:"\u4f7f\u7528-debug-\u5728-log-\u4e2d\u6821\u9a8c",level:3}],d={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u7528\u6237\u52a0\u8f7d\u9875\u9762\u7684\u65f6\u5019\uff0c\u4f1a\u5f02\u6b65\u52a0\u8f7d WebJS SDK\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u7528\u6237\u7684\u52a0\u8f7d\u901f\u5ea6\uff0c\u6240\u4ee5\u4e00\u822c\u5efa\u8bae\u628a\u8fd9\u6bb5\u4ee3\u7801\u52a0\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"<head></head>")," \u4e2d\u7684\u6700\u4e0b\u9762\uff0c\u8fd9\u6837\u80fd\u6700\u5927\u9650\u5ea6\u7684\u4fdd\u8bc1\u6570\u636e\u91c7\u96c6\u7684\u5b8c\u6574\u6027\u3002\u5982\u679c\u6709\u9650\u5236\u53ea\u80fd\u52a0\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"<body></body>")," \u7684\u6700\u4e0b\u9762\uff0c\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u8fd9\u6837\u6f5c\u5728\u53ef\u80fd\u4f1a\u4e22\u5931\u6389\u90a3\u4e9b\u4e00\u52a0\u8f7d\u9875\u9762\u5c31\u7acb\u523b\u5173\u95ed\u7684\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u5efa\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,a.kt)("p",null,"2\u3001\u5728\u4e0b\u5217\u9009\u9879\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u96c6\u6210\u65b9\u5f0f\uff0c\u5e76\u6839\u636e\u793a\u4f8b\u8fdb\u884c\u96c6\u6210\u3002"),(0,a.kt)("h2",{id:"web-\u7ad9\u70b9--h5-\u4e2d\u96c6\u6210"},"Web \u7ad9\u70b9 / H5 \u4e2d\u96c6\u6210"),(0,a.kt)("h3",{id:"\u624b\u52a8\u96c6\u6210"},"\u624b\u52a8\u96c6\u6210"),(0,a.kt)("p",null,"\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86 CDN \u548c npm \u4e24\u79cd\u4e0d\u540c\u7684\u96c6\u6210\u65b9\u5f0f\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u548c\u9700\u8981\u9009\u62e9\u96c6\u6210\u65b9\u5f0f\u3002",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{groupId:"1",defaultValue:"CDN",values:[{label:"CDN \u96c6\u6210",value:"CDN"},{label:"npm \u96c6\u6210",value:"npm"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CDN",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece CDN\uff08\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff09\u52a0\u8f7d Gio WebJS SDK\uff0c\u53ca\u65f6\u83b7\u53d6\u6700\u65b0\u7684\u66f4\u65b0\u3002")),(0,a.kt)(l.Z,{groupId:"2",defaultValue:"\u5168\u91cf\u5f15\u5165",values:[{label:"\u6309\u9700\u5f15\u5165",value:"\u6309\u9700\u5f15\u5165"},{label:"\u5168\u91cf\u5f15\u5165",value:"\u5168\u91cf\u5f15\u5165"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"\u6309\u9700\u5f15\u5165",mdxType:"TabItem"},(0,a.kt)("p",null,"\u6309\u9700\u5f15\u5165\u96c6\u6210\uff0c\u57fa\u7840 SDK ",(0,a.kt)("font",{size:"4",color:"#FC5F3A"},(0,a.kt)("b",null,"\u53ea\u5305\u542b\u57cb\u70b9\u529f\u80fd")),"\uff0c\u5176\u4ed6\u529f\u80fd\u9700\u8981\u96c6\u6210\u63d2\u4ef6\uff0c\u5c0f\u5de7\u529f\u80fd\u7b80\u5355\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u65e0\u5197\u4f59\u5185\u5bb9\uff0cSDK \u8f83\u5c0f\uff0c\u7ea6 38-40KB \uff0c\u52a0\u8f7d\u901f\u5ea6\u5feb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u7406\u89e3\u6210\u672c\u7565\u9ad8\uff0c\u96c6\u6210\u7a0d\u590d\u6742\u3002")),(0,a.kt)("p",null,"\u590d\u5236\u4ee5\u4e0b\u811a\u672c\uff0c\u5e76\u5c06\u5176\u7c98\u8d34\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"<head></head>")," \u6807\u7b7e\u7684\u5e95\u90e8\uff0c\u5e76\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u4e2d\u5bf9\u5e94\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- GrowingIO Analytics WebJS SDK version 4 --\x3e\n\x3c!-- Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com --\x3e\n<script type=\"text/javascript\">\n  !(function (e, n, t, s, c) {\n    var o;\n    e[s] =\n      e[s] ||\n      function () {\n        (e[s].q = e[s].q || []).push(arguments);\n      };\n    (c = c || 'vds'),\n      (e._gio_local_vds = c),\n      (e[c] = null !== (o = e[c]) && void 0 !== o ? o : {}),\n      (e[c].namespace = s);\n    var d = n.createElement('script');\n    var i = n.getElementsByTagName('script')[0];\n    (d.async = !0), (d.src = t), i.parentNode.insertBefore(d, i);\n  })(window, document, 'https://assets.giocdn.com/sdk/webjs/gdp.js', 'gdp');\n\n  gdp('init', 'your accountId', 'your dataSourceId', {\n    version: 'your website version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url',\n    ...other settings\n  });\n<\/script>\n"))),(0,a.kt)(o.Z,{value:"\u5168\u91cf\u5f15\u5165",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5168\u91cf\u5f15\u5165\u96c6\u6210\uff0cSDK \u5c06",(0,a.kt)("font",{size:"4",color:"#FC5F3A"},(0,a.kt)("b",null,"\u5305\u542b \u9664\u4e86\u591a\u5b9e\u4f8b\u548c\u6027\u80fd\u76d1\u63a7\u4e4b\u5916 \u7684\u5176\u4ed6\u6240\u6709\u529f\u80fd")),"\uff0c\u529f\u80fd\u5168\u8986\u76d6\uff0c\u7b80\u5355\u5feb\u901f\u96c6\u6210\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u590d\u6742\u5ea6\u4f4e\uff0c\u7406\u89e3\u6210\u672c\u4f4e\uff0c\u5feb\u901f\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1aSDK \u8f83\u5927\uff0c\u7ea6 75-80KB \uff0c\u53ef\u80fd\u4f1a\u62d6\u6162\u52a0\u8f7d\u901f\u5ea6\u3002")),(0,a.kt)("p",null,"\u590d\u5236\u4ee5\u4e0b\u811a\u672c\uff0c\u5e76\u5c06\u5176\u7c98\u8d34\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"<head></head>")," \u6807\u7b7e\u7684\u5e95\u90e8\uff0c\u5e76\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u4e2d\u5bf9\u5e94\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- GrowingIO Analytics WebJS SDK version 4 --\x3e\n\x3c!-- Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com --\x3e\n<script type=\"text/javascript\">\n  !(function (e, n, t, s, c) {\n    var o;\n    e[s] =\n      e[s] ||\n      function () {\n        (e[s].q = e[s].q || []).push(arguments);\n      };\n    (c = c || 'vds'),\n      (e._gio_local_vds = c),\n      (e[c] = null !== (o = e[c]) && void 0 !== o ? o : {}),\n      (e[c].namespace = s);\n    var d = n.createElement('script');\n    var i = n.getElementsByTagName('script')[0];\n    (d.async = !0), (d.src = t), i.parentNode.insertBefore(d, i);\n  })(window, document, 'https://assets.giocdn.com/sdk/webjs/gdp-full.js', 'gdp');\n\n  gdp('init', 'your accountId', 'your dataSourceId', {\n    version: 'your website version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url',\n    ...other settings\n  });\n<\/script>\n")))),(0,a.kt)("h4",{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"},"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\uff09"),(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u65b9\u6cd5\u5176\u4ed6\u914d\u7f6e\u9879\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/initSettings"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\uff09"),"SDK \u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"es5"),"\u7248\u672c\u8fdb\u884c\u6253\u5305\uff0c\u76f4\u63a5\u652f\u6301 ",(0,a.kt)("strong",{parentName:"p"},"IE11")," \u7b49\u4e0d\u517c\u5bb9 es6 \u7684\u65e7\u7248\u6d4f\u89c8\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3\uff09"),"SDK \u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"umd"),"\u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0c\u82e5\u60a8\u7684\u7ad9\u70b9\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"esm"),"\u683c\u5f0f\u7684 SDK\uff0c\u8bf7\u4fee\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gdp.es.js"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"gdp-full.es.js"),"\u5373\u53ef\u5f15\u7528 es \u683c\u5f0f\u7684 SDK\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4\uff09"),"\u5982\u679c\u60a8\u5e0c\u671b\u4e0d\u53d7 CDN\uff08\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff09\u5f71\u54cd\uff0c\u8bf7\u4e0b\u8f7d SDK \u81f3\u672c\u5730\u96c6\u6210\uff0c\u5e76\u4fee\u6539\u4e0a\u8ff0\u96c6\u6210\u4ee3\u7801\u4e2d\u7684 SDK CDN \u5730\u5740\u4e3a\u60a8\u672c\u5730\u7684\u76f8\u5bf9\u5730\u5740\u3002"),(0,a.kt)("p",null,"WebJS SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases"},"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases"))),(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u4f7f\u7528 npm \u4ee5\u53ca webpack \u6216 Vite\u3001Rollup \u4e00\u7c7b\u7684\u6253\u5305\u5de5\u5177\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u6765\u6dfb\u52a0\u548c\u4f7f\u7528 Gio WebJS SDK\u3002")),(0,a.kt)(l.Z,{groupId:"3",defaultValue:"\u5168\u91cf\u5f15\u5165",values:[{label:"\u6309\u9700\u5f15\u5165",value:"\u6309\u9700\u5f15\u5165"},{label:"\u5168\u91cf\u5f15\u5165",value:"\u5168\u91cf\u5f15\u5165"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"\u6309\u9700\u5f15\u5165",mdxType:"TabItem"},(0,a.kt)("p",null,"\u6309\u9700\u5f15\u5165\u96c6\u6210\uff0c\u57fa\u7840 SDK ",(0,a.kt)("font",{size:"4",color:"#FC5F3A"},(0,a.kt)("b",null,"\u53ea\u5305\u542b\u57cb\u70b9\u529f\u80fd")),"\uff0c\u5176\u4ed6\u529f\u80fd\u9700\u8981\u6ce8\u518c\u63d2\u4ef6\uff0c\u5c0f\u5de7\u529f\u80fd\u7b80\u5355\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1aSDK \u8f83\u5c0f\uff0c\u7ea6 38-40KB \uff0c\u52a0\u8f7d\u901f\u5ea6\u5feb\uff0c\u6709\u6548\u63a7\u5236\u6253\u5305\u4ea7\u7269\u5927\u5c0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u7406\u89e3\u6210\u672c\u7565\u9ad8\uff0c\u96c6\u6210\u7a0d\u590d\u6742\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\u3001\u8fd0\u884c\u547d\u4ee4\u5b89\u88c5\u6700\u65b0\u7684 SDK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-webjs-sdk --save\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\u3001\u5728\u5165\u53e3\u6587\u4ef6\uff08\u4f8b\u5982\uff1aapp.js\u3001index.js\uff09\u4ee3\u7801\u4e2d\u5f15\u7528\u5e76\u5f00\u59cb\u521d\u59cb\u5316\u4f7f\u7528 SDK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import gdp from 'gio-webjs-sdk';\n\n/**\n * GrowingIO Analytics WebJS SDK version 4\n * Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com\n */\ngdp('init', 'your accountId', 'your dataSourceId', {\n  version: 'your website version',\n  // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n  serverUrl: 'your server url',\n  ...other settings\n});\n"))),(0,a.kt)(o.Z,{value:"\u5168\u91cf\u5f15\u5165",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5168\u91cf\u5f15\u5165\u96c6\u6210\uff0cSDK \u5c06",(0,a.kt)("font",{size:"4",color:"#FC5F3A"},(0,a.kt)("b",null,"\u5305\u542b \u9664\u4e86\u591a\u5b9e\u4f8b\u548c\u6027\u80fd\u76d1\u63a7\u4e4b\u5916 \u7684\u5176\u4ed6\u6240\u6709\u529f\u80fd")),"\uff0c\u529f\u80fd\u5168\u8986\u76d6\uff0c\u7b80\u5355\u5feb\u901f\u96c6\u6210\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u590d\u6742\u5ea6\u4f4e\uff0c\u7406\u89e3\u6210\u672c\u4f4e\uff0c\u5feb\u901f\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1aSDK \u8f83\u5927\uff0c\u7ea6 75-80KB \uff0c\u4f1a\u589e\u52a0\u6253\u5305\u4ea7\u7269\u7684\u5927\u5c0f\uff0c\u53ef\u80fd\u4f1a\u62d6\u6162\u52a0\u8f7d\u901f\u5ea6\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\u3001\u8fd0\u884c\u547d\u4ee4\u5b89\u88c5\u6700\u65b0\u7684 SDK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-webjs-sdk --save\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\u3001\u5728\u5165\u53e3\u6587\u4ef6\uff08\u4f8b\u5982\uff1aapp.js\u3001index.js\uff09\u4ee3\u7801\u4e2d\u5f15\u7528\u5e76\u5f00\u59cb\u521d\u59cb\u5316\u4f7f\u7528 SDK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import gdp from 'gio-webjs-sdk/gdp-full';\n\n/**\n * GrowingIO Analytics WebJS SDK version 4\n * Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com\n */\ngdp('init', 'your accountId', 'your dataSourceId', {\n  version: 'your website version',\n  // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n  serverUrl: 'your server url',\n  ...other settings\n});\n")))),(0,a.kt)("h4",{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879-1"},"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\uff09"),(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u65b9\u6cd5\u5176\u4ed6\u914d\u7f6e\u9879\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/initSettings"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\uff09"),"SDK ",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4f7f\u7528 esm")," \u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0c\u82e5\u60a8\u7684\u7ad9\u70b9\u9700\u8981\u4f7f\u7528 umd \u683c\u5f0f\u7684 SDK\uff0c\u8bf7\u4fee\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gio-webjs-sdk/gdp.umd.js"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"gio-webjs-sdk/gdp-full.umd.js"),"\uff09\u5373\u53ef\u5f15\u7528 umd \u683c\u5f0f\u7684 SDK\u3002"))),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,a.kt)("p",null,"\u5168\u91cf\u96c6\u6210 SDK \u65f6\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"\u9664\u6027\u80fd\u76d1\u63a7\u4e4b\u5916")," \u7684\u5176\u4ed6\u6240\u6709\u63d2\u4ef6\u5185\u7f6e\u6253\u5305\uff0c\u5982\u60a8\u9700\u8981\u4f7f\u7528\u6027\u80fd\u76d1\u63a7\u8bf7\u96c6\u6210\u5e76\u6ce8\u518c\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u6309\u9700\u96c6\u6210 SDK \u65f6\uff0cSDK \u4ec5\u5185\u7f6e\u57cb\u70b9\u529f\u80fd\uff0c\u5982\u60a8\u9700\u8981\u6269\u5c55\u5176\u4ed6\u529f\u80fd\u65f6\uff0c\u9700\u8981\u96c6\u6210\u5e76\u6ce8\u518c\u5bf9\u5e94\u63d2\u4ef6\u65b9\u53ef\u6fc0\u6d3b\u5bf9\u5e94\u529f\u80fd\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5404\u4e2a\u63d2\u4ef6\u7684\u4ecb\u7ecd\u548c\u96c6\u6210\u65b9\u5f0f\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/plugins"},"\u529f\u80fd\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"\u5728\u5fae\u4fe1\u516c\u4f17\u53f7h5\u4e2d\u96c6\u6210"},"\u5728\u5fae\u4fe1\u516c\u4f17\u53f7H5\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u5728\u5fae\u4fe1\u516c\u4f17\u53f7H5\u4e2d\u96c6\u6210\u65f6\uff0c\u57fa\u672c\u4e0eWeb\u7ad9\u70b9\u4e00\u81f4\u3002\u4f46\u7531\u4e8e\u5176\u5fae\u4fe1\u751f\u6001\u7684\u7279\u6b8a\u6027\uff0c\u56e0\u6b64\u9700\u8981\u60a8\u5728\u521d\u59cb\u5316\u65f6\u989d\u5916\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"appId")," \u5b57\u6bb5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * GrowingIO Analytics WebJS SDK version 4\n * Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com\n */\ngdp('init', 'your accountId', 'your dataSourceId', 'your appId', {\n  version: 'your website version',\n  // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n  serverUrl: 'your server url',\n  ...other settings\n});\n")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u60a8\u6709\u8bbf\u95ee\u7528\u6237Id\u9700\u66ff\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"openId/unionId")," \u7684\u9700\u6c42\uff0c\u8bf7\u5728\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"forceLogin: true")),"\u7684\u914d\u7f6e\u9879\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\uff0c\u8bf7",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/initSettings#forcelogin"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5728-app-\u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210"},"\u5728 APP \u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u5168\u91cf\u96c6\u6210 SDK \u65f6\uff0c\u53c2\u8003 Web \u7ad9\u70b9\u96c6\u6210\u5373\u53ef\uff0c\u65e0\u9700\u505a\u989d\u5916\u64cd\u4f5c\uff0c\u5df2\u5185\u7f6e App \u5185\u5d4c\u9875\u6253\u901a\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6309\u9700\u96c6\u6210 SDK \u65f6\uff0c\u9700\u5728 Web \u7ad9\u70b9\u96c6\u6210\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u6ce8\u518c\u6dfb\u52a0 App \u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6\u3002",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/plugins/hybridAdapter"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("h2",{id:"\u5728\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210"},"\u5728\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u9762\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u5982\u679c\u671f\u671b\u5185\u5d4c\u9875\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7ad9\u70b9\u8fd0\u884c\u548c\u4e0a\u62a5\u6570\u636e\uff0c\u76f4\u63a5\u6309Web/H5\u7684\u65b9\u5f0f\u96c6\u6210\u5373\u53ef\uff0c\u65e0\u9700\u5176\u4ed6\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u671f\u671b\u5185\u5d4c\u9875\u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u8fd0\u884c\u548c\u4e0a\u62a5\u6570\u636e\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("p",null,"\u5168\u91cf\u96c6\u6210 SDK \u65f6\uff0c\u9700\u5728 Web \u7ad9\u70b9\u96c6\u6210\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u4fee\u6539\u521d\u59cb\u5316\u914d\u7f6e\u5373\u53ef\uff0c\u65e0\u9700\u518d\u6b21\u96c6\u6210\u63d2\u4ef6\uff0c\u5df2\u5185\u7f6e\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u529f\u80fd\u3002",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/plugins/embeddedAdapter"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,"\u6309\u9700\u96c6\u6210 SDK \u65f6\uff0c\u9700\u5728 Web \u7ad9\u70b9\u96c6\u6210\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u6ce8\u518c\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6\u5e76\u4fee\u6539\u521d\u59cb\u5316\u914d\u7f6e\u3002",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/plugins/embeddedAdapter"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("h2",{id:"\u5728electron\u5e94\u7528\u4e2d\u96c6\u6210\u548c\u672c\u5730\u8c03\u8bd5"},"\u5728Electron\u5e94\u7528\u4e2d\u96c6\u6210\u548c\u672c\u5730\u8c03\u8bd5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWebJS SDK \u4e0d\u652f\u6301\u5728\u672c\u5730\u534f\u8bae\u4e2d\u96c6\u6210\uff0c\u82e5\u60a8\u671f\u671b\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"file"),"\u4e2d\u8c03\u8bd5\u4f7f\u7528 SDK\uff0c\u6216\u8005\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Electron"),"\u9879\u76ee\u4e2d\u96c6\u6210\uff0c\u8bf7\u5728\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," \u8bed\u53e5\u524d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window._gr_ignore_local_rule = true;\ngdp('init', xxx, xxx);\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("h3",{id:"\u4f7f\u7528-giokit-\u6821\u9a8c\u4e8b\u4ef6\u63a8\u8350"},"\u4f7f\u7528 GioKit \u6821\u9a8c\u4e8b\u4ef6\uff08\u63a8\u8350\uff09"),(0,a.kt)("p",null,"\u4f7f\u7528 WebJS GioKit \u7684\u4e8b\u4ef6\u8c03\u8bd5\u548c\u5b9e\u65f6\u76d1\u63a7\u529f\u80fd\uff0c\u6e05\u6670\u5c55\u793a\u89e6\u53d1\u65f6\u673a\u548c\u4e0a\u62a5\u7684\u4e8b\u4ef6\uff0c\u901a\u8fc7\u67e5\u770b\u4e8b\u4ef6\u5185\u5bb9\u5feb\u901f\u68c0\u9a8c\u548c\u6392\u67e5\u57cb\u70b9\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u72ec\u7acb\u6a21\u5757\u907f\u514d\u5728\u5927\u91cf\u7684\u63a7\u5236\u53f0 Log \u4e2d\u5927\u6d77\u635e\u9488\u5f0f\u5730\u67e5\u627e\u4e8b\u4ef6\uff0c\u8282\u7ea6\u65f6\u95f4\u63d0\u9ad8\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u81ea\u52a8\u9002\u914d\u79fb\u52a8\u7aef\uff0c\u6446\u8131 H5 \u9875\u9762\u65e0\u6cd5\u4f7f\u7528\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/giokit/web"},"\u4f7f\u7528 GioKit \u53c2\u8003\u6587\u6863")),(0,a.kt)("h3",{id:"\u4f7f\u7528-debug-\u5728-log-\u4e2d\u6821\u9a8c"},"\u4f7f\u7528 debug \u5728 Log \u4e2d\u6821\u9a8c"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u4ee3\u7801\u65f6\uff0c\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"debug: true"),"\u6253\u5f00 SDK \u65e5\u5fd7\uff0c\u5728\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u4e2d\u67e5\u770b Log \u65e5\u5fd7\u8fdb\u884c\u6821\u9a8c\u3002"))}g.isMDXComponent=!0}}]);