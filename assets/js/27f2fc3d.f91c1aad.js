"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4321],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7462),r=t(7294),o=t(6010),i=t(2389),p=t(7392),l=t(7094),s=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:c,groupId:g,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,p.l)(b,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.U)(),[T,j]=(0,r.useState)(h),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==T&&b.some((n=>n.value===e))&&j(e)}const C=e=>{const n=e.currentTarget,t=I.indexOf(n),a=b[t].value;a!==T&&(w(n),j(a),null!=g&&N(g,String(a)))},A=e=>{var n;let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>I.push(e),onKeyDown:A,onClick:C},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function c(e){const n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},8506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),o=t(5488),i=t(5162);const p={sidebar_position:3,title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"},l=void 0,s={unversionedId:"miniprogram/3.8/integration/baidu",id:"miniprogram/3.8/integration/baidu",title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",description:"\u5bf9\u4e8e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/3.8/integration/baidu.md",sourceDirName:"miniprogram/3.8/integration",slug:"/miniprogram/3.8/integration/baidu",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/baidu",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/integration/baidu.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/alipay"},next:{title:"\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/bytedance"}},u={},m=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-1",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-2",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-1",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:5},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk-3",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-2",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-2",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-3",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-3",level:5},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2}],d={toc:m};function c(e){let{components:n,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u4e8e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u8de8\u5e73\u53f0\u6846\u67b6\u5f00\u53d1\u4e14\u6709\u591a\u7aef\uff08\u7279\u6307\u5c0f\u7a0b\u5e8f\uff0c\u5feb\u5e94\u7528\u3001App\u548cWeb\u9664\u5916\uff09\u540c\u65f6\u9700\u8981\u96c6\u6210SDK\u7684\u9700\u6c42\u65f6\uff0c\u53ea\u9700\u5728\u6846\u67b6\u4ee3\u7801\u4e2d\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002\u4f8b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528uni-app\u540c\u65f6\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\uff0c\u53ea\u9700\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,r.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,r.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,r.kt)("p",null,"3\u3001\u5728\u4e0b\u5217\u9009\u9879\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u7684SDK\u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\u6216\u4f7f\u7528npm\u7684\u65b9\u5f0f\u96c6\u6210\u3002\u4e0b\u6587\u4e2d\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548cSDK\u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,r.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u5728 app.js/main.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u3002\u6dfb\u52a0\u4f4d\u7f6e\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,r.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,r.kt)(o.Z,{groupId:"1",defaultValue:"Native\u539f\u751f",values:[{label:"Native\u539f\u751f",value:"Native\u539f\u751f"},{label:"uni-app",value:"uni-app"},{label:"Taro",value:"Taro"},{label:"Chameleon",value:"Chameleon"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Native\u539f\u751f",mdxType:"TabItem"},(0,r.kt)("h4",{id:"1\u52a0\u8f7dsdk"},"1\u3001\u52a0\u8f7dSDK"),(0,r.kt)("p",null,"\u767e\u5ea6\u539f\u751fSDK\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-baidu.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-baidu.js"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,r.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"},"2\u3001\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,r.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport gdp from './utils/gio/gio-baidu.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'your serverHost',\n    ...other settings\n});\n\nApp({ ... });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-baidu.js').default;\n"))),(0,r.kt)(i.Z,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("h4",{id:"1\u52a0\u8f7dsdk-1"},"1\u3001\u52a0\u8f7dSDK"),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,r.kt)("p",null,"uniapp\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-uniapp.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-uniapp.js"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,r.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1"},"2\u3001\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2\u548cvue3\u4e2d\u5206\u522b\u4e0eapp\u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09"),(0,r.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(o.Z,{groupId:"2",defaultValue:"uni-app(vue2)",values:[{label:"uni-app(vue2)",value:"uni-app(vue2)"},{label:"uni-app(vue3)",value:"uni-app(vue3)"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"uni-app(vue2)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-uniapp';\n\nApp.mpType = 'app';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'your serverHost',\n    uniVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst app = new Vue(App);\napp.$mount();\n\n"))),(0,r.kt)(i.Z,{value:"uni-app(vue3)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport App from './App.vue';\nimport { createApp } from 'vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-uniapp';\n\nexport function createApp() {\n  // \u6ce8\u610fvue3\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\n  const app = createApp(App);\n\n  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n      version: 'miniProgram version',\n      host: 'your serverHost',\n      uniVue: app,\n      ...other settings\n  });\n\n  return { app };\n}\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-uniapp.js').default;\n"))),(0,r.kt)(i.Z,{value:"Taro",mdxType:"TabItem"},(0,r.kt)("h4",{id:"1\u52a0\u8f7dsdk-2"},"1\u3001\u52a0\u8f7dSDK"),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,r.kt)("p",null,"Taro\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-taro.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-taro.js"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-1"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,r.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2"},"2\u3001\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2\u548cvue3\u4e2d\u5206\u522b\u4e0eapp\u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09\u3002\u4f7f\u7528vue\u5f00\u53d1\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"taro"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"taroVue"),"\u90fd\u8981\u4f20\u3002"),(0,r.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(o.Z,{groupId:"3",defaultValue:"Taro2",values:[{label:"Taro2",value:"Taro2"},{label:"Taro3(react)",value:"Taro3(react)"},{label:"Taro3(vue2)",value:"Taro3(vue2)"},{label:"Taro3(vue3)",value:"Taro3(vue3)"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Taro2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'your serverHost',\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"))),(0,r.kt)(i.Z,{value:"Taro3(react)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"npm i babel-plugin-setname --save\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// babel.config.js\nmodule.exports = {\n  presets: [['taro', { framework: 'react' }]],\n  plugins: [\n    [\n      'babel-plugin-setname', {\n        includes: ['src'],\n        lower: false, // \u4ecetaro2\u5347\u7ea7\u81f33\u65f6\u8bf7\u4fee\u6539\u4e3atrue\n      }\n    ]\n  ]\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport React, { Component } from 'react';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'your serverHost',\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nexport default App;\n"))),(0,r.kt)(i.Z,{value:"Taro3(vue2)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'your serverHost',\n    taro: Taro, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taroVue: Vue, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n"))),(0,r.kt)(i.Z,{value:"Taro3(vue3)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport { createApp } from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taro';\n\n// \u6ce8\u610fvue3\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\nconst App = createApp({ ... });\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    taro: Taro, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taroVue: App, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    ...other settings\n});\n\nexport default App;\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-taro.js').default;\n"))),(0,r.kt)(i.Z,{value:"Chameleon",mdxType:"TabItem"},(0,r.kt)("h4",{id:"1\u52a0\u8f7dsdk-3"},"1\u3001\u52a0\u8f7dSDK"),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-2"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,r.kt)("p",null,"Chameleon\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-chameleon.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.10/gio-chameleon.js"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm\u96c6\u6210-2"},"\u65b9\u5f0f\u4e8c\uff1anpm\u96c6\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,r.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-3"},"2\u3001\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,r.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-3"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.cml\nimport Cml from 'chameleon-runtime';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-chameleon.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-chameleon';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    cml: Cml\n    ...other settings\n});\n\nclass App { ... }\n\nexport default new App();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-chameleon.js').default;\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,r.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.8/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,r.kt)("p",null,"\u96c6\u6210SDK\u65f6\uff0cSDK\u4ec5\u5185\u7f6e\u57cb\u70b9\u529f\u80fd\uff0c\u5982\u60a8\u9700\u8981\u6269\u5c55\u5176\u4ed6\u529f\u80fd\u65f6\uff0c\u9700\u8981\u96c6\u6210\u5e76\u6ce8\u518c\u5bf9\u5e94\u63d2\u4ef6\u65b9\u53ef\u6fc0\u6d3b\u5bf9\u5e94\u529f\u80fd\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5404\u4e2a\u63d2\u4ef6\u7684\u4ecb\u7ecd\u548c\u96c6\u6210\u65b9\u5f0f\u8bf7\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,r.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debugLog",src:t(8321).Z,width:"637",height:"218"})),(0,r.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,r.kt)("p",null,"\u8bf7\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"debugLog",src:t(7284).Z,width:"704",height:"881"})),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,r.kt)("p",null,"\u7531\u4e8e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,r.kt)("a",{parentName:"p",href:"https://smartprogram.baidu.com/docs/develop/api/net/net_rule/"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5728\u300c\u667a\u80fd\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u8bbe\u7f6e-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0request\u5408\u6cd5\u57df\u540d\u3002",(0,r.kt)("a",{parentName:"p",href:"https://smartprogram.baidu.com/developer/index.html"},"\u667a\u80fd\u5c0f\u7a0b\u5e8f\u540e\u53f0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u5728\u6b63\u5f0f\u751f\u4ea7\u73af\u5883\u53d1\u5e03\u524d\u5b8c\u6210\u767d\u540d\u5355\u7684\u6dfb\u52a0\uff0c\u4e0a\u7ebf\u540e\u518d\u6dfb\u52a0\u767d\u540d\u5355\u53ef\u80fd\u4f1a\u51fa\u73b0SDK\u65e0\u6cd5\u4e0a\u62a5\u6570\u636e\u7684\u60c5\u51b5\u3002\u91cd\u65b0\u53d1\u5e03\u5c0f\u7a0b\u5e8f\u5373\u53ef\u89e3\u51b3\u3002")))}c.isMDXComponent=!0},8321:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/plugin_debug-16a7798aa53b78920aed1712e321b6e4.png"},7284:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/swan_debug-b272be93d0d2fd5ce3c527f65a8c5cc3.png"}}]);