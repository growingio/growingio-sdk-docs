"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=n(6010),a="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),i=n(7294),a=n(2389),o=n(7392),l=n(7094),u=n(2466),s=n(6010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var t,n,a,d=e.lazy,m=e.block,g=e.defaultValue,f=e.values,k=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(t=null!=g?g:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),O=w.tabGroupChoices,E=w.setTabGroupChoices,C=(0,i.useState)(N),j=C[0],D=C[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=O[k];null!=S&&S!==j&&b.some((function(e){return e.value===S}))&&D(S)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==j&&(P(t),D(r),null!=k&&E(k,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:x,onClick:x},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),d?(0,i.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,a.Z)();return i.createElement(d,(0,r.Z)({key:String(t)},e))}},6319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=(n(9877),n(2360),["components"]),l={sidebar_position:7,title:"\u5feb\u624b\u5c0f\u7a0b\u5e8f"},u=void 0,s={unversionedId:"miniprogram/3.8/integration/kuaishou",id:"miniprogram/3.8/integration/kuaishou",title:"\u5feb\u624b\u5c0f\u7a0b\u5e8f",description:"\u76ee\u524d\u5feb\u624b\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/3.8/integration/kuaishou.md",sourceDirName:"miniprogram/3.8/integration",slug:"/miniprogram/3.8/integration/kuaishou",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/kuaishou",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/integration/kuaishou.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u5feb\u624b\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/taobao"},next:{title:"\u5feb\u5e94\u7528",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/quickapp"}},p={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",level:3},{value:"1\u3001\u52a0\u8f7dSDK",id:"1\u52a0\u8f7dsdk",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:5},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:3},{value:"1\u3001\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6",id:"1\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6",level:4},{value:"2\u3001\u8c03\u7528<code>registerPlugins</code>\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6",id:"2\u8c03\u7528registerplugins\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:5},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76ee\u524d\u5feb\u624b\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,a.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,a.kt)("p",null,"3\u3001\u4e0b\u8f7dSDK\u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4e3a\u4f8b(\u76ee\u5f55\u548cSDK\u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"},"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u3002\u6dfb\u52a0\u4f4d\u7f6e\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,a.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,a.kt)("h4",{id:"1\u52a0\u8f7dsdk"},"1\u3001\u52a0\u8f7dSDK"),(0,a.kt)("p",null,"\u5feb\u624b\u539f\u751fSDK\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0/gio-kuaishou.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0/gio-kuaishou.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728App\u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport gdp from './utils/gio/gio-kuaishou.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    ...other settings\n});\n\nApp({ ... });\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.8/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u539f\u6709SDK\u529f\u80fd\uff08\u9ed8\u8ba4\u4ec5\u6709\u57cb\u70b9\u529f\u80fd\uff09\u4e0a\u6dfb\u52a0\u989d\u5916\u7684\u529f\u80fd\uff0c\u53ef\u4f7f\u7528\u63d2\u4ef6\u5e76\u6309\u9700\u8fdb\u884c\u6269\u5c55\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u6587\u4ef6\u8bf4\u660e\u53c2\u8003\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h4",{id:"1\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6"},"1\u3001\u5f15\u5165\u63d2\u4ef6\u6587\u4ef6"),(0,a.kt)("p",null,"\u63d2\u4ef6\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0/plugins.zip"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0/plugins.zip"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("p",null,"\u4e0b\u8f7d\u529f\u80fd\u63d2\u4ef6\uff0c\u89e3\u538b\u653e\u5165 plugins \u76ee\u5f55\u4e2d\uff0c\u5e76\u5728app.js/main.js\u4e2d\u5f15\u5165\u3002"),(0,a.kt)("h4",{id:"2\u8c03\u7528registerplugins\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6"},"2\u3001\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"registerPlugins"),"\u65b9\u6cd5\u6ce8\u518c\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728init\u8bed\u53e5\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"registerPlugins"),"\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import gioImpressionTracking from './utils/plugins/gioImpressionTracking';\nimport gioCompress from './utils/plugins/gioCompress';\n\n...\n// \u5728init\u8bed\u53e5\u524d\u8c03\u7528`registerPlugins`\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002\ngdp('registerPlugins', [gioImpressionTracking, gioCompress]);\ngdp('init', xxxxx);\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"debugLog",src:n(8321).Z,width:"637",height:"218"})),(0,a.kt)("h3",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"debugLog",src:n(3573).Z,width:"727",height:"992"})),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("p",null,"\u7531\u4e8e\u5feb\u624b\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,a.kt)("a",{parentName:"p",href:"https://mp.kuaishou.com/docs/introduction/develop.html#%E6%9C%8D%E5%8A%A1%E5%9F%9F%E5%90%8D%E9%85%8D%E7%BD%AE"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost")," \u5728\u300c\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u5f00\u53d1-\u5f00\u53d1\u8005\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0\u4e3arequest\u5408\u6cd5\u57df\u540d\u3002",(0,a.kt)("a",{parentName:"p",href:"https://mp.kuaishou.com/"},"\u5c0f\u7a0b\u5e8f\u540e\u53f0")))}m.isMDXComponent=!0},3573:function(e,t,n){t.Z=n.p+"assets/images/kuaishou_debug-2a29b52852ff63c77b097d16347e783f.jpg"},8321:function(e,t,n){t.Z=n.p+"assets/images/plugin_debug-16a7798aa53b78920aed1712e321b6e4.png"}}]);