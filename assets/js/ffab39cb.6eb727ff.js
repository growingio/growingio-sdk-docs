"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6829],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7462),a=t(7294),o=t(2389),i=t(7556),p=t(6010),s="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,l=e.block,c=e.defaultValue,d=e.values,m=e.groupId,g=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,T=b.setTabGroupChoices,j=(0,a.useState)(h),N=j[0],I=j[1],x=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=y[m];null!=A&&A!==N&&v.some((function(e){return e.value===A}))&&I(A)}var O=function(e){var n=e.currentTarget,t=x.indexOf(n),r=v[t].value;r!==N&&(w(n),I(r),null!=m&&T(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},g)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:O,onClick:O},o,{className:(0,p.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function l(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},5381:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(9877),p=t(8215),s=["components"],u={sidebar_position:4,title:"\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f"},l=void 0,c={unversionedId:"miniprogram/3.8/integration/bytedance",id:"miniprogram/3.8/integration/bytedance",title:"\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f",description:"\u5bf9\u4e8e\u5b57\u8282\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/3.8/integration/bytedance.md",sourceDirName:"miniprogram/3.8/integration",slug:"/miniprogram/3.8/integration/bytedance",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/bytedance",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/integration/bytedance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/baidu"},next:{title:"QQ\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/integration/qq"}},d={},m=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:3},{value:"\u5b57\u8282\u539f\u751fSDK\u4e0b\u8f7d\uff1ahttps://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-bytedance.js",id:"\u5b57\u8282\u539f\u751fsdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-bytedancejs",level:4},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d",level:5},{value:"uni-app\u6846\u67b6SDK\u4e0b\u8f7d\uff1ahttps://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-uniapp.js",id:"uni-app\u6846\u67b6sdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-uniappjs",level:4},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-1",level:5},{value:"Taro\u6846\u67b6SDK\u4e0b\u8f7d\uff1ahttps://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-taro.js",id:"taro\u6846\u67b6sdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-tarojs",level:4},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-2",level:5},{value:"Remax\u6846\u67b6SDK\u4e0b\u8f7d\uff1ahttps://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-remax.js",id:"remax\u6846\u67b6sdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-remaxjs",level:4},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-3",level:5},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:3},{value:"\u63d2\u4ef6\u4e0b\u8f7d\uff1ahttps://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/plugins.zip",id:"\u63d2\u4ef6\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1pluginszip",level:4},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-4",level:5},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:3}],g={toc:m};function k(e){var n=e.components,u=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5b57\u8282\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u8de8\u5e73\u53f0\u6846\u67b6\u5f00\u53d1\u4e14\u6709\u591a\u7aef\uff08\u7279\u6307\u5c0f\u7a0b\u5e8f\uff0c\u5feb\u5e94\u7528\u3001App\u548cWeb\u9664\u5916\uff09\u540c\u65f6\u9700\u8981\u96c6\u6210SDK\u7684\u9700\u6c42\u65f6\uff0c\u53ea\u9700\u5728\u6846\u67b6\u4ee3\u7801\u4e2d\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002\u4f8b\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528uni-app\u540c\u65f6\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u53ea\u9700\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002")),(0,o.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"1\u3001\u5728Gio\u5e73\u53f0\u4e2d\u65b0\u5efa\u9879\u76ee\u5e76\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,o.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,o.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,o.kt)("p",null,"3\u3001\u5728\u4e0b\u5217\u9009\u9879\u4e2d\u9009\u62e9\u6b63\u786e\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u7684SDK\u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4e3a\u4f8b(\u76ee\u5f55\u548cSDK\u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,o.kt)("h3",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,o.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u5728 app.js/main.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u3002\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002"),(0,o.kt)(i.Z,{groupId:"1",defaultValue:"Native\u539f\u751f",values:[{label:"Native\u539f\u751f",value:"Native\u539f\u751f"},{label:"uni-app",value:"uni-app"},{label:"Taro",value:"Taro"},{label:"Remax",value:"Remax"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"Native\u539f\u751f",mdxType:"TabItem"},(0,o.kt)("h4",{id:"\u5b57\u8282\u539f\u751fsdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-bytedancejs"},"\u5b57\u8282\u539f\u751fSDK\u4e0b\u8f7d\uff1a",(0,o.kt)("a",{parentName:"h4",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-bytedance.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-bytedance.js")),(0,o.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    ...other settings\n});\n\nApp({ ... });\n"))),(0,o.kt)(p.Z,{value:"uni-app",mdxType:"TabItem"},(0,o.kt)("h4",{id:"uni-app\u6846\u67b6sdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-uniappjs"},"uni-app\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,o.kt)("a",{parentName:"h4",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-uniapp.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-uniapp.js")),(0,o.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-1"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,o.kt)(i.Z,{groupId:"2",defaultValue:"uni-app(vue2)",values:[{label:"uni-app(vue2)",value:"uni-app(vue2)"},{label:"uni-app(vue3)",value:"uni-app(vue3)"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"uni-app(vue2)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\nimport gdp from './utils/gio/sdk.js';\n\nApp.mpType = 'app';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    uniVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst app = new Vue(App);\napp.$mount();\n\n"))),(0,o.kt)(p.Z,{value:"uni-app(vue3)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport App from './App.vue';\nimport { createApp } from 'vue';\nimport gdp from './utils/gio/sdk.js';\n\nexport function createApp() {\n  // \u6ce8\u610fvue3\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\n  const app = createApp(App);\n\n  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n      version: 'miniProgram version',\n      host: 'api.growingio.com',\n      uniVue: app,\n      ...other settings\n  });\n\n  return { app };\n}\n"))))),(0,o.kt)(p.Z,{value:"Taro",mdxType:"TabItem"},(0,o.kt)("h4",{id:"taro\u6846\u67b6sdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-tarojs"},"Taro\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,o.kt)("a",{parentName:"h4",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-taro.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-taro.js")),(0,o.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,o.kt)(i.Z,{groupId:"3",defaultValue:"Taro2",values:[{label:"Taro2",value:"Taro2"},{label:"Taro3(react)",value:"Taro3(react)"},{label:"Taro3(vue2)",value:"Taro3(vue2)"},{label:"Taro3(vue3)",value:"Taro3(vue3)"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"Taro2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"))),(0,o.kt)(p.Z,{value:"Taro3(react)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport React, { Component } from 'react';\nimport Taro from '@tarojs/taro';\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nexport default App;\n"))),(0,o.kt)(p.Z,{value:"Taro3(vue2)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    taro: Taro, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taroVue: Vue, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n"))),(0,o.kt)(p.Z,{value:"Taro3(vue3)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport { createApp } from 'vue';\nimport Taro from '@tarojs/taro';\nimport gdp from './utils/gio/sdk.js';\n\n// \u6ce8\u610fvue3\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\nconst App = createApp({ ... });\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    taro: Taro, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taroVue: App, // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    ...other settings\n});\n\nexport default App;\n"))))),(0,o.kt)(p.Z,{value:"Remax",mdxType:"TabItem"},(0,o.kt)("h4",{id:"remax\u6846\u67b6sdk\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1gio-remaxjs"},"Remax\u6846\u67b6SDK\u4e0b\u8f7d\uff1a",(0,o.kt)("a",{parentName:"h4",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-remax.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-remax.js")),(0,o.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-3"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport * as remax from 'remax';\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'api.growingio.com',\n    remax: remax,\n    ...other settings\n});\n\nconst App = (props) => props.children;\n\nexport default App;\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002 const gdp = require('./utils/gio/sdk.js).default;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,o.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.8/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,o.kt)("h3",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u539f\u6709SDK\u529f\u80fd\uff08\u9ed8\u8ba4\u4ec5\u6709\u57cb\u70b9\u529f\u80fd\uff09\u4e0a\u6dfb\u52a0\u989d\u5916\u7684\u529f\u80fd\uff0c\u53ef\u4e0b\u8f7d\u63d2\u4ef6\u5305\u5e76\u6309\u9700\u8fdb\u884c\u6269\u5c55\u3002"),(0,o.kt)("h4",{id:"\u63d2\u4ef6\u4e0b\u8f7dhttpsassetsgiocdncomsdkminipcdp380-rc1pluginszip"},"\u63d2\u4ef6\u4e0b\u8f7d\uff1a",(0,o.kt)("a",{parentName:"h4",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/plugins.zip"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/plugins.zip")),(0,o.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d-4"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,o.kt)("p",null,"\u63d2\u4ef6\u6587\u4ef6\u8bf4\u660e\u53c2\u8003\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6")),(0,o.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u6269\u5c55\u7684\u6b65\u9aa4\u4e3a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1\u3001\u4e0b\u8f7d\u529f\u80fd\u63d2\u4ef6\uff0c\u89e3\u538b\u653e\u5165 plugins \u76ee\u5f55\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"2\u3001\u5728app.js/main.js\u4e2d\u5f15\u5165\u3002"),(0,o.kt)("li",{parentName:"ul"},"3\u3001\u5728init\u8bed\u53e5\u524d\u8c03\u7528\u65b9\u6cd5\u6309\u6570\u7ec4\u5f62\u5f0f\u4f20\u503c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import gioImpressionTracking from './utils/plugins/gioImpressionTracking';\nimport gioCompress from './utils/plugins/gioCompress';\n\n...\n\ngdp('registerPlugins', [gioImpressionTracking, gioCompress]);\ngdp('init', xxxxx);\n")),(0,o.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debugLog",src:t(8321).Z,width:"637",height:"218"})),(0,o.kt)("h3",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,o.kt)("p",null,"\u8bf7\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"debugLog",src:t(4735).Z,width:"649",height:"885"})),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,o.kt)("p",null,"\u7531\u4e8e\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,o.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/other/network-request-reference/"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5728\u300c\u5b57\u8282\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5e73\u53f0-\u5f00\u53d1\u7ba1\u7406-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0request\u5408\u6cd5\u57df\u540d\u3002",(0,o.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/"},"\u5b57\u8282\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5e73\u53f0")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u5728\u6b63\u5f0f\u751f\u4ea7\u73af\u5883\u53d1\u5e03\u524d\u5b8c\u6210\u767d\u540d\u5355\u7684\u6dfb\u52a0\uff0c\u4e0a\u7ebf\u540e\u518d\u6dfb\u52a0\u767d\u540d\u5355\u53ef\u80fd\u4f1a\u51fa\u73b0SDK\u65e0\u6cd5\u4e0a\u62a5\u6570\u636e\u7684\u60c5\u51b5\u3002\u91cd\u65b0\u53d1\u5e03\u5c0f\u7a0b\u5e8f\u5373\u53ef\u89e3\u51b3\u3002")))}k.isMDXComponent=!0},4735:function(e,n,t){n.Z=t.p+"assets/images/bytedance_debug-5c0a7e4465c882f90606f6393d6a6904.png"},8321:function(e,n,t){n.Z=t.p+"assets/images/plugin_debug-16a7798aa53b78920aed1712e321b6e4.png"}}]);