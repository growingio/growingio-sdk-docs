"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4449],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,v=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(v,i(i({ref:n},s),{},{components:t})):a.createElement(v,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),o=t(2389),i=t(7392),l=t(7094),u=t(2466),p=t(6010),s="tabList_uSqn",d="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,m=e.block,v=e.defaultValue,g=e.values,f=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.l)(y,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===v?v:null!=(n=null!=v?v:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=h[0])?void 0:o.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),I=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,r.useState)(w),j=T[0],D=T[1],O=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=I[f];null!=A&&A!==j&&y.some((function(e){return e.value===A}))&&D(A)}var Z=function(e){var n=e.currentTarget,t=O.indexOf(n),a=y[t].value;a!==j&&(S(n),D(a),null!=f&&x(f,a))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},k)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:Z,onClick:Z},o,{className:(0,p.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function m(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},6168:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(9877),l=t(2360),u=["components"],p={sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},s=void 0,d={unversionedId:"miniprogram/3.3/integration/wx",id:"miniprogram/3.3/integration/wx",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",description:"\u96c6\u6210\u51c6\u5907",source:"@site/docs/miniprogram/3.3/integration/wx.md",sourceDirName:"miniprogram/3.3/integration",slug:"/miniprogram/3.3/integration/wx",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/integration/wx",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.3/integration/wx.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/version"},next:{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/integration/alipay"}},c={},m=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:3},{value:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001AppId\u3001Host",id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidappidhost",level:4},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u4e0b\u8f7dSDK",id:"\u4e0b\u8f7dsdk",level:3},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d",level:5},{value:"\u539f\u751f\u5f00\u53d1",id:"\u539f\u751f\u5f00\u53d1",level:3},{value:"Taro",id:"taro",level:3},{value:"uni-app",id:"uni-app",level:3},{value:"WePY",id:"wepy",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2}],v={toc:m};function g(e){var n=e.components,p=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},v,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,o.kt)("h4",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidappidhost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001AppId\u3001Host"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,o.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,o.kt)("br",null),"\nAppId\uff1a\u5c0f\u7a0b\u5e8f\u5e94\u7528ID",(0,o.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u975e\u5e73\u53f0\u5730\u5740",(0,o.kt)("br",null)),(0,o.kt)("p",{parentName:"div"},"AccountID\u3001DataSourceID\u3001AppId \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"))),(0,o.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:t(7224).Z,width:"1402",height:"382"})),(0,o.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:t(585).Z,width:"2658",height:"1112"})),(0,o.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,o.kt)("p",null,"\u96c6\u6210\u65b9\u5f0f\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,o.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u4f7f\u7528\u6709GrowingIO \u5c0f\u7a0b\u5e8f\u8fd0\u8425SDK\uff0c \u4e14\u96c6\u6210\u672c\u6587\u6863\u4e2d\u7684SDK\u7248\u672c >=3.3.2\uff0c\u8bf7\u5728\u521d\u59cb\u5316SDK\u65f6\uff0c\u589e\u52a0\u914d\u7f6e\u9879 ",(0,o.kt)("inlineCode",{parentName:"p"},"enableEventStore: true")))),(0,o.kt)("h3",{id:"\u4e0b\u8f7dsdk"},"\u4e0b\u8f7dSDK"),(0,o.kt)("a",{href:"https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js",download:"https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js"},"\u70b9\u51fb\u4e0b\u8f7dSDK"),"\uff0c\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5`utils/gio`\u76ee\u5f55\u4e3a\u4f8b\u3002",(0,o.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,o.kt)("h3",{id:"\u539f\u751f\u5f00\u53d1"},"\u539f\u751f\u5f00\u53d1"),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801\uff1a"),(0,o.kt)(i.Z,{groupId:"1",defaultValue:"\u539f\u751f",values:[{label:"\u539f\u751f",value:"\u539f\u751f"},{label:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u539f\u751f",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(l.Z,{value:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    usePlugin: true,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\nconst App = global.GioApp;\n")))),(0,o.kt)("h3",{id:"taro"},"Taro"),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.jsx\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801"),(0,o.kt)(i.Z,{groupId:"2",defaultValue:"2.x",values:[{label:"Taro2(React)",value:"2.x"},{label:"Taro3(React)",value:"3.x"},{label:"Taro3(vue2)",value:"3.x(vue2)"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"2.x",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"))),(0,o.kt)(l.Z,{value:"3.x",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install babel-plugin-setname --save\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// babel.config.js\nmodule.exports = {\n  plugins: [\n    [\n      "babel-plugin-setname",\n      {\n        includes: ["src"],\n        lower: false,\n      }\n    ]\n  ]\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport React, { Component } from 'react';\nimport Taro from '@tarojs/taro';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n\nclass App extends Component { ... }\nexport default App;\n"))),(0,o.kt)(l.Z,{value:"3.x(vue2)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n")))),(0,o.kt)("h3",{id:"uni-app"},"uni-app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\nApp.mpType = 'app';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")),(0,o.kt)("h3",{id:"wepy"},"WePY"),(0,o.kt)(i.Z,{groupId:"4",defaultValue:"1.x",values:[{label:"WePY 1.x",value:"1.x"},{label:"WePY 1.x+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"1.x+\u63d2\u4ef6"},{label:"WePY 2.x",value:"2.x"},{label:"WePY 2.x+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"2.x+\u63d2\u4ef6"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"1.x",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Vue from 'vue';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(l.Z,{value:"1.x+\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Vue from 'vue';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    usePlugin: true,\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(l.Z,{value:"2.x",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Wepy from '@wepy/core';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    wepy: Wepy,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(l.Z,{value:"2.x+\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Wepy from '@wepy/core';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    usePlugin: true,\n    wepy: Wepy,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,o.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.3/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,o.kt)("p",null,"\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://your serverHost")," \u5728\u300c\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u5f00\u53d1-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0\u4e3arequest\u5408\u6cd5\u57df\u540d\u3002",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u540e\u53f0")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u5c0f\u7a0b\u5e8f\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u53d1\u5e03\u4ee3\u7801\uff0c\u5728\u53d1\u5e03\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u8c03\u7528\u63a5\u53e3\u5728requestdomain\u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"https://your serverHost"),"\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Mini_Program_Basic_Info/Server_Address_Configuration.html"},"\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u7b2c\u4e09\u65b9\u8bf4\u660e"),"\u3002"))),(0,o.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,o.kt)("p",null,"\u8bf7\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debugLog",src:t(2198).Z,width:"674",height:"745"})))}g.isMDXComponent=!0},7224:function(e,n,t){n.Z=t.p+"assets/images/createapplication-241aaf42ded1927f70965a5c2968ad63.png"},2198:function(e,n,t){n.Z=t.p+"assets/images/3.0_wx_debug-72e19a76adc3ebe67f2ee51af965b6d6.png"},585:function(e,n,t){n.Z=t.p+"assets/images/dataSourceInfo-90294a89a4fb03328256ce92f27172a0.png"}}]);