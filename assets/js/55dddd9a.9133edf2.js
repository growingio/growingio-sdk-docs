"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=n,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(g,u(u({ref:t},c),{},{components:r})):a.createElement(g,u({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:r,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,u),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7462),n=r(7294),o=r(6010),u=r(2466),i=r(6775),l=r(1980),s=r(7392),c=r(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[u,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,s]=g({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=l??m;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var f=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,u.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(m(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:u}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},u,{className:(0,o.Z)("tabs__item",h.tabItem,u?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},3462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));r(4866),r(5162);const o={slug:"custom ios sdk",title:"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1 - iOS \u7bc7",authors:[{name:"CaicaiNo",title:"GrowingIO SDK Team",url:"https://github.com/CaicaiNo",image_url:"https://avatars.githubusercontent.com/u/17329515?v=4"},{name:"YoloMao",title:"GrowingIO SDK Team",url:"https://github.com/YoloMao",image_url:"https://avatars.githubusercontent.com/u/16042670?v=4"}],tags:["sdk","iOS","custom"]},u=void 0,i={permalink:"/growingio-sdk-docs/blog/custom ios sdk",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2022-10-13-custom ios sdk.md",source:"@site/blog/2022-10-13-custom ios sdk.md",title:"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1 - iOS \u7bc7",description:"--------------",date:"2022-10-13T00:00:00.000Z",formattedDate:"October 13, 2022",tags:[{label:"sdk",permalink:"/growingio-sdk-docs/blog/tags/sdk"},{label:"iOS",permalink:"/growingio-sdk-docs/blog/tags/i-os"},{label:"custom",permalink:"/growingio-sdk-docs/blog/tags/custom"}],readingTime:11.515,hasTruncateMarker:!0,authors:[{name:"CaicaiNo",title:"GrowingIO SDK Team",url:"https://github.com/CaicaiNo",image_url:"https://avatars.githubusercontent.com/u/17329515?v=4",imageURL:"https://avatars.githubusercontent.com/u/17329515?v=4"},{name:"YoloMao",title:"GrowingIO SDK Team",url:"https://github.com/YoloMao",image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",imageURL:"https://avatars.githubusercontent.com/u/16042670?v=4"}],frontMatter:{slug:"custom ios sdk",title:"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1 - iOS \u7bc7",authors:[{name:"CaicaiNo",title:"GrowingIO SDK Team",url:"https://github.com/CaicaiNo",image_url:"https://avatars.githubusercontent.com/u/17329515?v=4",imageURL:"https://avatars.githubusercontent.com/u/17329515?v=4"},{name:"YoloMao",title:"GrowingIO SDK Team",url:"https://github.com/YoloMao",image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",imageURL:"https://avatars.githubusercontent.com/u/16042670?v=4"}],tags:["sdk","iOS","custom"]},nextItem:{title:"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1 - Android \u7bc7",permalink:"/growingio-sdk-docs/blog/custom android sdk"}},l={authorsImageUrls:[void 0,void 0]},s=[{value:"SDK\u7ed3\u6784\u4ecb\u7ecd",id:"sdk\u7ed3\u6784\u4ecb\u7ecd",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sdk\u7ed3\u6784\u4ecb\u7ecd"},"SDK\u7ed3\u6784\u4ecb\u7ecd"),(0,n.kt)("p",null,"SDK \u53ef\u4ee5\u901a\u8fc7\u62c6\u5206\u6210\u6a21\u5757\u3001\u670d\u52a1\u5b9e\u73b0\u6a21\u5757\u5316\uff0c\u5728 GrowingIO \u7684 SDK \u4e2d\uff0c\u5df2\u7ecf\u6709\u591a\u4e2a\u6a21\u5757\u529f\u80fd\u5df2\u7ecf\u4ece\u4ee3\u7801\u4e2d\u5206\u79bb\u51fa\u6765\uff0c\u540e\u7eed\u5c06\u4f1a\u72ec\u7acb\u51fa\u66f4\u591a\u7684\u6a21\u5757\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingAnalytics.podspec"},"GrowingAnalytics.podspec")," \u6587\u4ef6\u4e2d\u5305\u542b\u4e86\u6240\u6709\u7684\u76f8\u5173\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);