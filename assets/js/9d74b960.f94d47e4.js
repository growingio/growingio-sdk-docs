"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),i=n(2389),o=n(7556),l=n(6010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(k),D=N[0],O=N[1],I=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==D&&v.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var t=e.currentTarget,n=I.indexOf(t),r=v[n].value;r!==D&&(S(t),O(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function c(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},4964:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(9877),n(8215),["components"]),l={sidebar_position:2,title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"},u=void 0,s={unversionedId:"miniprogram/3.3/integration/alipay",id:"miniprogram/3.3/integration/alipay",title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",description:"\u96c6\u6210\u51c6\u5907",source:"@site/docs/miniprogram/3.3/integration/alipay.md",sourceDirName:"miniprogram/3.3/integration",slug:"/miniprogram/3.3/integration/alipay",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/integration/alipay",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.3/integration/alipay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/integration/wx"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/initSettings"}},c={},p=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:3},{value:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001 AppId\u3001Host",id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceid-appidhost",level:4},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u4e0b\u8f7dSDK",id:"\u4e0b\u8f7dsdk",level:3},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d",level:5},{value:"\u5f15\u5165SDK\uff0c\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801",id:"\u5f15\u5165sdk\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,i.kt)("h4",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceid-appidhost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001 AppId\u3001Host"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,i.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,i.kt)("br",null),"\nAppId\uff1a\u5c0f\u7a0b\u5e8f\u5e94\u7528ID",(0,i.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740",(0,i.kt)("br",null)),(0,i.kt)("p",{parentName:"div"},"Account ID\u3001DataSource ID\u3001AppId \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u83b7\u53d6\u6e90\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301",(0,i.kt)("br",null),"\nHost \u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"))),(0,i.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:n(7224).Z,width:"1402",height:"382"})),(0,i.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:n(585).Z,width:"2658",height:"1112"})),(0,i.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,i.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u7684\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,i.kt)("p",null,"\u96c6\u6210\u65b9\u5f0f\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,i.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,i.kt)("h3",{id:"\u4e0b\u8f7dsdk"},"\u4e0b\u8f7dSDK"),(0,i.kt)("a",{href:"https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js",download:"https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js"},"\u70b9\u51fb\u4e0b\u8f7dSDK"),"\uff0c\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5`utils/gio`\u76ee\u5f55\u4e3a\u4f8b\u3002",(0,i.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,i.kt)("h3",{id:"\u5f15\u5165sdk\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801"},"\u5f15\u5165SDK\uff0c\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nconst gdp = require('./utils/gio/sdk.js').default;\n\n\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    ...other settings\n});\n\n// \u4fee\u6539\u9879\u76ee\u4e2d\u7684App\u548cPage\uff0c\u5982\u4e0b\uff1a\n// App({})\u6539\u5199\u4e3a:\nApp($global.trackApp({ ... }))\n\n// \u6240\u6709\u7684Page({})\u6539\u5199\u4e3a\uff1a\n$global.GioPage({ ... })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,i.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.3/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,i.kt)("p",null,"\u7531\u4e8e\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,i.kt)("a",{parentName:"p",href:"https://opendocs.alipay.com/mini/008gq6"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5728\u300c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u4e2d\u5fc3-\u5c0f\u7a0b\u5e8f\u8be6\u60c5-\u8bbe\u7f6e-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u767d\u540d\u5355\u300d\u4e2d\u6dfb\u52a0request\u5408\u6cd5\u57df\u540d\u3002",(0,i.kt)("a",{parentName:"p",href:"https://open.alipay.com/mini/dev/list"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u4e2d\u5fc3")),(0,i.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,i.kt)("p",null,"\u8bf7\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"debugLog",src:n(9510).Z,width:"592",height:"757"})))}m.isMDXComponent=!0},7224:function(e,t,n){t.Z=n.p+"assets/images/createapplication-241aaf42ded1927f70965a5c2968ad63.png"},9510:function(e,t,n){t.Z=n.p+"assets/images/3.0_my_debug-a2420464a1e5204bd7548c6a1d8cf1e6.png"},585:function(e,t,n){t.Z=n.p+"assets/images/dataSourceInfo-90294a89a4fb03328256ce92f27172a0.png"}}]);