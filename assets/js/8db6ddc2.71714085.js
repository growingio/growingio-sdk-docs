"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4235],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,c=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(c,i(i({ref:n},m),{},{components:t})):r.createElement(c,i({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(7462),a=t(7294),o=t(6010),i=t(2389),p=t(7392),l=t(7094),s=t(2466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:g,groupId:c,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=g??v.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,p.l)(h,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,l.U)(),[j,T]=(0,a.useState)(N),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=c){const e=b[c];null!=e&&e!==j&&h.some((n=>n.value===e))&&T(e)}const C=e=>{const n=e.currentTarget,t=I.indexOf(n),r=h[t].value;r!==j&&(w(n),T(r),null!=c&&y(c,String(r)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},h.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>I.push(e),onKeyDown:x,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":j===n})}),t??n)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function g(e){const n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),o=t(5488),i=t(5162);const p={sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},l=void 0,s={unversionedId:"miniprogram/3.8/integration/wechat",id:"miniprogram/3.8/integration/wechat",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",description:"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/3.8/integration/wechat.md",sourceDirName:"miniprogram/3.8/integration",slug:"/miniprogram/3.8/integration/wechat",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/wechat",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/integration/wechat.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/version"},next:{title:"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/alipay"}},m={},u=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",level:3},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-1",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-2",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-1",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-3",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-2",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-2",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-3",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-3",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-4",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-3",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-3",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-4",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-4",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-5",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-4",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-4",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-5",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-5",level:5},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:3},{value:"1\u3001\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6",id:"1\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-5",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-5",level:5},{value:"2\u3001\u8c03\u7528<code>registerPlugins</code>\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6",id:"2\u8c03\u7528registerplugins\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-6",level:5},{value:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u4e2d\u96c6\u6210",id:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u4e2d\u96c6\u6210",level:3},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:3}],d={toc:u};function g(e){let{components:n,...p}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u8de8\u5e73\u53f0\u6846\u67b6\u5f00\u53d1\u4e14\u6709\u591a\u7aef\uff08\u7279\u6307\u5c0f\u7a0b\u5e8f\uff0c\u5feb\u5e94\u7528\u3001App\u548cWeb\u9664\u5916\uff09\u540c\u65f6\u9700\u8981\u96c6\u6210SDK\u7684\u9700\u6c42\u65f6\uff0c\u53ea\u9700\u5728\u6846\u67b6\u4ee3\u7801\u4e2d\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002\u4f8b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528uni-app\u540c\u65f6\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\uff0c\u53ea\u9700\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002")),(0,a.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,a.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,a.kt)("p",null,"3\u3001\u5728\u4e0b\u5217\u9009\u9879\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u7684SDK\u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\u6216\u4f7f\u7528npm\u7684\u65b9\u5f0f\u96c6\u6210\u3002\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548cSDK\u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"},"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u5728 app.js/main.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u3002\u6dfb\u52a0\u4f4d\u7f6e\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,a.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,a.kt)(o.Z,{groupId:"1",defaultValue:"Native\u539f\u751f",values:[{label:"Native\u539f\u751f",value:"Native\u539f\u751f"},{label:"uni-app",value:"uni-app"},{label:"Taro",value:"Taro"},{label:"Chameleon",value:"Chameleon"},{label:"WePY2",value:"WePY2"},{label:"Remax",value:"Remax"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Native\u539f\u751f",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("p",null,"\u5fae\u4fe1\u539f\u751fSDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-wechat.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-wechat.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport gdp from './utils/gio/gio-wechat.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    ...other settings\n});\n\nApp({ ... });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-wechat.js').default;\n"))),(0,a.kt)(i.Z,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk-1"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"uniapp\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-uniapp.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-uniapp.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2\u548cvue3\u4e2d\u5206\u522b\u4e0eapp\u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{groupId:"2",defaultValue:"uni-app(vue2)",values:[{label:"uni-app(vue2)",value:"uni-app(vue2)"},{label:"uni-app(vue3)",value:"uni-app(vue3)"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"uni-app(vue2)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-uniapp';\n\nApp.mpType = 'app';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    uniVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst app = new Vue(App);\napp.$mount();\n\n"))),(0,a.kt)(i.Z,{value:"uni-app(vue3)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport App from './App.vue';\nimport { createApp } from 'vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-uniapp';\n\nexport function createApp() {\n  // \u6ce8\u610fvue3\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\n  const app = createApp(App);\n\n  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n      version: 'miniProgram version',\n      host: 'Your ServerHost',\n      uniVue: app,\n      ...other settings\n  });\n\n  return { app };\n}\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-uniapp.js').default;\n"))),(0,a.kt)(i.Z,{value:"Taro",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk-2"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"Taro\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-taro.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-taro.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-1"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2\u548cvue3\u4e2d\u5206\u522b\u4e0eapp\u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09\u3002\u4f7f\u7528vue\u5f00\u53d1\u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"taro"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"taroVue"),"\u90fd\u8981\u4f20\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{groupId:"3",defaultValue:"Taro2",values:[{label:"Taro2(React)",value:"Taro2"},{label:"Taro3(React)",value:"Taro3(react)"},{label:"Taro3(vue2)",value:"Taro3(vue2)"},{label:"Taro3(vue3)",value:"Taro3(vue3)"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Taro2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"))),(0,a.kt)(i.Z,{value:"Taro3(react)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"npm i babel-plugin-setname --save\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// babel.config.js\nmodule.exports = {\n  presets: [['taro', { framework: 'react' }]],\n  plugins: [\n    [\n      'babel-plugin-setname', {\n        includes: ['src'],\n        lower: false, // \u4ecetaro2\u5347\u7ea7\u81f33\u65f6\u8bf7\u4fee\u6539\u4e3atrue\n      }\n    ]\n  ]\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport React, { Component } from 'react';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nexport default App;\n"))),(0,a.kt)(i.Z,{value:"Taro3(vue2)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    taro: Taro, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taroVue: Vue, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n"))),(0,a.kt)(i.Z,{value:"Taro3(vue3)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport { createApp } from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\n// \u6ce8\u610fvue3\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\nconst App = createApp({ ... });\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    taro: Taro, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taroVue: App, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    ...other settings\n});\n\nexport default App;\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-taro.js').default;\n"))),(0,a.kt)(i.Z,{value:"Chameleon",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk-3"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-2"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"Chameleon\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-chameleon.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-chameleon.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-2"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-3"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-3"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.cml\nimport Cml from 'chameleon-runtime';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-chameleon.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-chameleon';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    cml: Cml\n    ...other settings\n});\n\nclass App { ... }\n\nexport default new App();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-chameleon.js').default;\n"))),(0,a.kt)(i.Z,{value:"WePY2",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk-4"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-3"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"WePY2\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-wepy.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-wepy.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-3"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-4"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-4"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport wepy from 'wepy';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-wepy.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-wepy';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    wepy: wepy,\n    ...other settings\n});\n\nwepy.app({ ... });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-wepy.js').default;\n"))),(0,a.kt)(i.Z,{value:"Remax",mdxType:"TabItem"},(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk-5"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-4"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"Remax\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-remax.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/gio-remax.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-4"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-5"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-5"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport * as remax from 'remax';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-remax.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-remax';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    remax: remax,\n    ...other settings\n});\n\nconst App = (props) => props.children;\n\nexport default App;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-remax.js').default;\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.8/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u539f\u6709SDK\u529f\u80fd\uff08\u9ed8\u8ba4\u4ec5\u6709\u57cb\u70b9\u529f\u80fd\uff09\u4e0a\u6dfb\u52a0\u989d\u5916\u7684\u529f\u80fd\uff0c\u53ef\u4f7f\u7528\u63d2\u4ef6\u5e76\u6309\u9700\u8fdb\u884c\u6269\u5c55\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u6587\u4ef6\u8bf4\u660e\u53c2\u8003\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h4",{id:"1\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6"},"1\u3001\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-5"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"\u63d2\u4ef6\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/plugins.zip"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.8/plugins.zip"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("p",null,"\u4e0b\u8f7d\u529f\u80fd\u63d2\u4ef6\uff0c\u89e3\u538b\u653e\u5165 plugins \u76ee\u5f55\u4e2d\uff0c\u5e76\u5728app.js/main.js\u4e2d\u5f15\u5165\u3002"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-5"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,a.kt)("p",null,"\u76f4\u63a5\u4eceSDK\u4e3b\u4f53npm\u5305\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u76ee\u5f55\u5f15\u5165\u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"2\u8c03\u7528registerplugins\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6"},"2\u3001\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"registerPlugins"),"\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728init\u8bed\u53e5\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"registerPlugins"),"\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-6"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gioImpressionTracking from './utils/plugins/gioImpressionTracking';\nimport gioCompress from './utils/plugins/gioCompress';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gioImpressionTracking from 'gio-miniprogram-sdk-cdp/plugins/gioImpressionTracking';\nimport gioCompress from 'gio-miniprogram-sdk-cdp/plugins/gioCompress';\n\n...\n// \u5728init\u8bed\u53e5\u524d\u8c03\u7528`registerPlugins`\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002\ngdp('registerPlugins', [gioImpressionTracking, gioCompress]);\ngdp('init', xxxxx);\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"debugLog",src:t(8321).Z,width:"637",height:"218"})),(0,a.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u4e2d\u96c6\u6210"},"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/introduction/plugin.html"},"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),"\u4e2d\u96c6\u6210SDK\u53c2\u8003\u5c0f\u7a0b\u5e8f\u96c6\u6210\uff0c\u5728\u6307\u5b9a\u7684\u63d2\u4ef6 Component \u7ec4\u4ef6\u7684 js \u4e2d\u96c6\u6210\u5373\u53ef\u3002SDK \u521d\u59cb\u5316\u65f6\u4f1a\u81ea\u52a8\u5207\u6362\u4e3a\u63d2\u4ef6\u6a21\u5f0f\uff0c\u5c06\u5f53\u524d Component \u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u5e94\u7528\u53d1\u9001VISIT\u4e8b\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// myComponent.js\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    ...other settings\n});\n\nComponent({ ... });\n")),(0,a.kt)("h3",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"debugLog",src:t(1619).Z,width:"799",height:"949"})),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("p",null,"\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost")," \u5728\u300c\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u5f00\u53d1-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0\u4e3arequest\u5408\u6cd5\u57df\u540d\u3002",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u540e\u53f0")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5c0f\u7a0b\u5e8f\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u53d1\u5e03\u4ee3\u7801\uff0c\u5728\u53d1\u5e03\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u8c03\u7528\u63a5\u53e3\u5728requestdomain\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost"),"\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Mini_Program_Basic_Info/Server_Address_Configuration.html"},"\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u7b2c\u4e09\u65b9\u8bf4\u660e"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u5728\u6b63\u5f0f\u751f\u4ea7\u73af\u5883\u53d1\u5e03\u524d\u5b8c\u6210\u767d\u540d\u5355\u7684\u6dfb\u52a0\uff0c\u4e0a\u7ebf\u540e\u518d\u6dfb\u52a0\u767d\u540d\u5355\u53ef\u80fd\u4f1a\u51fa\u73b0SDK\u65e0\u6cd5\u4e0a\u62a5\u6570\u636e\u7684\u60c5\u51b5\u3002\u91cd\u65b0\u53d1\u5e03\u5c0f\u7a0b\u5e8f\u5373\u53ef\u89e3\u51b3\u3002")))}g.isMDXComponent=!0},8321:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin_debug-16a7798aa53b78920aed1712e321b6e4.png"},1619:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/wx_debug-a9fc5a6d928e712a8fe1b4f3223805bf.png"}}]);