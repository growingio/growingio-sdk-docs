"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:m,groupId:b,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:P}=(0,s.U)(),[E,w]=(0,a.useState)(v),D=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=h[b];null!=e&&e!==E&&g.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=D.indexOf(t),r=g[n].value;r!==E&&(N(t),w(r),null!=b&&P(b,String(r)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>D.push(e),onKeyDown:A,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},8971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:1,title:"H5\u6df7\u5408\u6a21\u5757"},s=void 0,u={unversionedId:"ios/modules/Hybrid Module",id:"ios/modules/Hybrid Module",title:"H5\u6df7\u5408\u6a21\u5757",description:"APP \u5185\u5d4c H5 \u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5 \u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK",source:"@site/docs/ios/modules/Hybrid Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/Hybrid Module",permalink:"/growingio-sdk-docs/docs/ios/modules/Hybrid Module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/modules/Hybrid Module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"H5\u6df7\u5408\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"\u6a21\u5757\u5217\u8868",permalink:"/growingio-sdk-docs/docs/ios/modules"},next:{title:"Protobuf \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/Protobuf Module"}},d={},p=[],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APP \u5185\u5d4c H5 \u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5 \u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK"),(0,a.kt)("p",null,"\u82e5\u9700\u8981 H5 \u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0e APP \u4e2d GIO SDK \u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("br",null),"\nWebJS 3.3\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/3.3/integrate#app%E5%86%85%E5%B5%8Ch5%E9%A1%B5%E9%9D%A2%E4%BD%BF%E7%94%A8%E9%9B%86%E6%88%90"},"APP\u5185\u5d4cH5\u9875\u9762\u4f7f\u7528\u96c6\u6210"),(0,a.kt)("br",null),"\nWebJS 3.8\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/plugins#hybrid%E5%86%85%E5%B5%8C%E9%A1%B5%E6%89%93%E9%80%9A%E6%8F%92%E4%BB%B6giohybridadapter"},"Hybrid\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6")),(0,a.kt)("p",null,"\u5982\u679c APP \u96c6\u6210\u7684\u662f",(0,a.kt)("a",{parentName:"p",href:"/docs/ios/Introduce#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,a.kt)("strong",{parentName:"a"},"\u65e0\u57cb\u70b9 SDK")),"\uff0c \u4e0d\u9700\u8981\u505a\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u6ce8\u5165\u6865\u63a5\u4ee3\u7801\uff0c\u5b9e\u73b0\u6570\u636e\u6253\u901a\uff1b"),(0,a.kt)("p",null,"\u5982\u679c APP \u96c6\u6210\u7684\u662f",(0,a.kt)("a",{parentName:"p",href:"/docs/ios/Introduce#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,a.kt)("strong",{parentName:"a"},"\u57cb\u70b9 SDK")),"\uff0c\u5219\u9700\u8981\u60a8\u6dfb\u52a0 Hybrid \u4f9d\u8d56"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics/Hybrid'\n")),(0,a.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update"))),(0,a.kt)(l.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",mdxType:"TabItem"},(0,a.kt)("p",null,"\u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"p"},"GrowingModule_Hybrid")," Package"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"add Package",src:n(8323).Z,width:"400",height:"460"})))),(0,a.kt)("p",null,"\u9879\u76ee\u4e2d\u65e0\u9700\u5176\u4ed6\u989d\u5916\u8bbe\u7f6e"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"1. H5\u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0eAPP \u4e2d GIO SDK\u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\u89c4\u5219\uff1a")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e24\u8005 accountId \u4e00\u81f4\u65f6\uff0cH5\u4e0eAPP\u6253\u901a\uff0c\u6b64\u65f6H5\u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u4ec5\u7531 APP \u4e2d GIO SDK \u53d1\u9001"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u8005 accountId \u4e0d\u4e00\u81f4\u65f6\uff0cH5\u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u540c\u65f6\u7531 Web JS SDK \u548c APP \u4e2d GIO SDK\u53d1\u9001\n\u6ee1\u8db3\u6253\u901a\u8bbe\u7f6e\u65f6\uff0cH5 \u9875\u9762\u8c03\u7528 setUserID\uff0ccleanUserID \u4f1a\u8c03\u7528 APP \u7684 setLoginUserID\uff0ccleanUserID\u3002\n",(0,a.kt)("strong",{parentName:"li"},"2. \u6253\u901a\u6210\u529f\u6548\u679c"))),(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u89e6\u53d1\u4e86\u6253\u901a\u89c4\u5219\uff0c\u5b9e\u73b0\u6253\u901a\u8bbe\u7f6e\u540e\uff0ch5\u5185\u5d4c\u9875\u91c7\u96c6\u7684\u6570\u636e\u7ecf APP \u4e2d GIO SDK\u53d1\u9001\u6570\u636e\u3002\u4ee5\u4e0b\u5b57\u6bb5\u53d8\u5316\u5982\u4e0b\uff1a",(0,a.kt)("br",null),"\ndeviceId: \u4f7f\u7528\u539f\u751fApp\u7684deviceId",(0,a.kt)("br",null),"\nsessionId: \u4f7f\u7528\u539f\u751fApp\u7684sessionId",(0,a.kt)("br",null),"\ngioId: \u4f7f\u7528\u539f\u751fApp\u7684gioId ",(0,a.kt)("br",null),"\nuserId: \u4f7f\u7528\u539f\u751fApp\u7684userId",(0,a.kt)("br",null),"\nuserKey: \u4f7f\u7528\u539f\u751fApp\u7684userKey",(0,a.kt)("br",null),"\ndataSourceId: \u4f7f\u7528\u539f\u751fApp\u7684dataSourceId",(0,a.kt)("br",null),"\nplatform: \u4f7f\u7528\u539f\u751fApp\u7684platform",(0,a.kt)("br",null),"\ndomain: \u4f7f\u7528H5\u9875\u9762\u7684\u57df\u540d",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"admonition"},"\u7528\u6237\u884c\u4e3a\u4e0e\u91c7\u96c6\u6570\u636e\u63cf\u8ff0\uff1a\u7528\u6237\u70b9\u51fbAPP\u5185\u5d4cH5\u9875\u9762\uff0c\u7531APP\u539f\u751f\u9875\u9762\u8fdb\u5165H5\u9875\u9762\uff0cH5\u9875\u9762\u96c6\u6210\u7684\u91c7\u96c6SDK\u4f1a\u628a\u91c7\u96c6\u7684\u6570\u636e\u8f6c\u53d1\u7ed9APP\u96c6\u6210\u7684SDK\uff0c\u518d\u8fdb\u884c\u4e0a\u62a5\uff1bH5\u9875\u9762\u7684\u884c\u4e3a\u6570\u636e\u4e2d\u7684\u4ee5\u4e0a\u7528\u6237\u4fe1\u606f\u5b57\u6bb5\u4f1a\u7528APP SDK \u91c7\u96c6\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5b9e\u73b0H5\u9875\u9762\u7528\u6237\u4e0eAPP\u7528\u6237\u4fe1\u606f\u5173\u8054\u3002")))}m.isMDXComponent=!0},8323:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add_package_hybrid-8135e1b717273d55c84636898ffee3af.png"}}]);