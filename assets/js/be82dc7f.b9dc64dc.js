"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8168],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(6010),l="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),l=t(2389),i=t(7392),o=t(7094),u=t(2466),p=t(6010),c="tabList_uSqn",s="tabItem_LplD";function m(e){var n,t,l,m=e.lazy,d=e.block,f=e.defaultValue,v=e.values,k=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(n=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),O=w.tabGroupChoices,D=w.setTabGroupChoices,E=(0,a.useState)(N),C=E[0],T=E[1],S=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=O[k];null!=j&&j!==C&&h.some((function(e){return e.value===j}))&&T(j)}var P=function(e){var n=e.currentTarget,t=S.indexOf(n),r=h[t].value;r!==C&&(x(n),T(r),null!=k&&D(k,r))},K=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;t=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;t=S[a]||S[S.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,p.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},g)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return S.push(e)},onKeyDown:K,onFocus:P,onClick:P},l,{className:(0,p.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),m?(0,a.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},1343:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=(t(9877),t(2360),["components"]),o={slug:"/minprogram/3.8",title:"\u5c0f\u7a0b\u5e8f SDK\uff083.8\uff09"},u=void 0,p={unversionedId:"miniprogram/3.8/index",id:"miniprogram/3.8/index",title:"\u5c0f\u7a0b\u5e8f SDK\uff083.8\uff09",description:"Tips\uff1a3.8\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u201c\u65e7\u7248\u672c\u201d\u7279\u6307 3.8.0 \u4ee5\u4e0b\u7684\u65e7\u67b6\u6784\u7248\u672c\u3002",source:"@site/docs/miniprogram/3.8/index.md",sourceDirName:"miniprogram/3.8",slug:"/minprogram/3.8",permalink:"/growingio-sdk-docs/docs/minprogram/3.8",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/3.8/index.md",tags:[],version:"current",frontMatter:{slug:"/minprogram/3.8",title:"\u5c0f\u7a0b\u5e8f SDK\uff083.8\uff09"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/miniprogram/3.3/commonlyApi"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/miniprogram/3.8/version"}},c={},s=[{value:"\u4f7f\u7528\u524d\u987b\u77e5",id:"\u4f7f\u7528\u524d\u987b\u77e5",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0",id:"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"3.3\u4e0e3.8\u5bf9\u6bd4",id:"33\u4e0e38\u5bf9\u6bd4",level:2},{value:"3.3\u5347\u7ea7\u52303.8",id:"33\u5347\u7ea7\u523038",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Tips\uff1a3.8\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u201c\u65e7\u7248\u672c\u201d\u7279\u6307 ",(0,l.kt)("inlineCode",{parentName:"em"},"3.8.0")," \u4ee5\u4e0b\u7684\u65e7\u67b6\u6784\u7248\u672c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u524d\u987b\u77e5"},"\u4f7f\u7528\u524d\u987b\u77e5"),(0,l.kt)("p",null,"\u76ee\u524d\u5c0f\u7a0b\u5e8fSDK3.8\u8fd8\u5728\u516c\u6d4b\u9636\u6bb5\uff0c\u53d1\u5e03\u7684\u5747\u4e3aRC\u7248\u672c\uff0c\u5efa\u8bae\u5728\u6d4b\u8bd5\u73af\u5883\u5145\u5206\u6d4b\u8bd5\u5e76\u89c2\u5bdf\u4e00\u6bb5\u65f6\u95f4\u4f7f\u7528\uff0c\u8c28\u614e\u4e0a\u751f\u4ea7\u3002"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u5c0f\u7a0b\u5e8fSDK3.8\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"QQ\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u5feb\u5e94\u7528"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u5feb\u624b\u5c0f\u7a0b\u5e8f")," \u6b63\u5728\u6293\u7d27\u9002\u914d\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u53ef\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u548c\u63d2\u4ef6\u63a7\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u80fd\u529b\uff0c\u9664\u5feb\u5e94\u7528\u5916\uff0c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5747\u652f\u6301\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589euni-app vue3\u3001taro3 vue3\u3001remax\u7684\u652f\u6301\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e91\u51fd\u6570\u548c\u4e91\u5e94\u7528\u8f6c\u53d1\u65b9\u5f0f\u7684\u9002\u914d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u636e\u4f7f\u7528\u573a\u666f\u81ea\u7531\u642d\u914dSDK\u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5f00\u53d1\u3002\uff08\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u6682\u672a\u5f00\u653e\uff09")),(0,l.kt)("h2",{id:"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0"},"\u9009\u62e9\u5c0f\u7a0b\u5e8f\u5e73\u53f0"),(0,l.kt)("p",null,"\u76f8\u6bd4\u65e7\u7248\u672c\uff0c\u6211\u4eec\u4f9d\u636e\u4e0d\u540c\u7684\u5e73\u53f0\u6253\u5305\u4e86\u5e73\u53f0\u4e13\u7528\u7684SDK\uff08\u5373\u539f\u751f\u5f00\u53d1\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u53ea\u80fd\u4f7f\u7528\u5fae\u4fe1\u5c0f\u7a0b\u5e8fSDK\uff09\u7528\u6237\u53ef\u6839\u636e\u81ea\u8eab\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u6216\u5f00\u53d1\u6846\u67b6\u81ea\u7531\u9009\u62e9\u3002\u7531\u4e8e\u53ea\u6253\u5305\u4e86\u7279\u5b9a\u5e73\u53f0\u7684\u903b\u8f91\uff0c\u505a\u5230\u4e86\u7cbe\u7b80\u65e0\u5197\u4f59\uff0c\u5bf9SDK\u7684\u6574\u4f53\u5305\u5927\u5c0f\u63a7\u5236\u66f4\u7cbe\u51c6\u3002\u5f53\u7136\u6211\u4eec\u4e5f\u51c6\u5907\u4e86\u8282\u7ea6\u7406\u89e3\u6210\u672c\u7684\u5168\u91cf\u7248\u672c\u3002"),(0,l.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,l.kt)("p",null,"\u76f8\u6bd4\u65e7\u7248\u672c\uff0c\u6211\u4eec\u9002\u914d\u4e86\u66f4\u591a\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u548c\u6846\u67b6\uff0c\u8bf7\u5728\u5de6\u4fa7\u83dc\u5355\u680f\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u7aef\u8fdb\u884c\u96c6\u6210\u3002"),(0,l.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f97\u76ca\u4e8e\u65b0\u67b6\u6784\u7684SDK\uff0c\u6211\u4eec\u5c06\u529f\u80fd\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u4e86\u62c6\u5206\uff0c\u65e2\u964d\u4f4e\u4e86SDK\u5185\u90e8\u903b\u8f91\u7684\u8026\u5408\u7a0b\u5ea6\uff0c\u53c8\u5c3d\u53ef\u80fd\u51cf\u5c0f\u5bf9\u5c0f\u7a0b\u5e8f\u6574\u4f53\u5305\u5927\u5c0f\u589e\u91cf\u7684\u5f71\u54cd\u3002"),(0,l.kt)("p",null,"\u63d2\u4ef6\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u89c1",(0,l.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,l.kt)("h2",{id:"33\u4e0e38\u5bf9\u6bd4"},"3.3\u4e0e3.8\u5bf9\u6bd4"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u5feb\u901f\u7684\u5e2e\u52a9\u60a8\u7406\u89e3\u5c0f\u7a0b\u5e8fSDK3.8\u4e0e\u65e7\u7248\u672c\u7684\u533a\u522b\uff0c\u6211\u4eec\u4e3a\u60a8\u8be6\u7ec6\u7f57\u5217\u4e86\u4e24\u8005\u7684\u533a\u522b\u3002"),(0,l.kt)("p",null,"\u5bf9\u6bd4\u8be6\u60c5\u4ecb\u7ecd\u8bf7\u89c1",(0,l.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/contrast"},"3.3\u4e0e3.8\u5bf9\u6bd4")),(0,l.kt)("h2",{id:"33\u5347\u7ea7\u523038"},"3.3\u5347\u7ea7\u52303.8"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u539f\u5148\u4f7f\u75283.3\u7248\u672c\u7684\u7528\u6237\u5feb\u901f\u5347\u7ea7\u52303.8\uff0c\u6211\u4eec\u5355\u72ec\u4e3a\u60a8\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5feb\u901f\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u8be6\u60c5\u4ecb\u7ecd\u8bf7\u89c1",(0,l.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/upgrade"},"3.3\u5347\u7ea7\u52303.8")),(0,l.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("p",null,"\u7531\u4e8e\u76ee\u524d3.8\u7248\u672c\u8fd8\u5728\u516c\u6d4b\u9636\u6bb5\uff0c\u66f4\u65b0\u53ef\u80fd\u4f1a\u8f83\u4e3a\u9891\u7e41\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u4e863.8\u7248\u672c\uff0c\u8bf7\u6ce8\u610f\u5173\u6ce8\u66f4\u65b0\u4fe1\u606f\u53ca\u65f6\u5347\u7ea7\u3002"))}d.isMDXComponent=!0}}]);