"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3130],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,N=c["".concat(d,".").concat(s)]||c[s]||k[s]||i;return n?a.createElement(N,l(l({ref:e},m),{},{components:n})):a.createElement(N,l({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(7294),r=n(9443);var i=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),o="tabItem_vU9c",d="tabItemActive_cw6a";var p=function(t){var e,n=t.lazy,r=t.block,p=t.defaultValue,m=t.values,k=t.groupId,c=t.className,s=a.Children.toArray(t.children),N=null!=m?m:s.map((function(t){return{value:t.props.value,label:t.props.label}})),g=null!=p?p:null==(e=s.find((function(t){return t.props.default})))?void 0:e.props.value,u=i(),f=u.tabGroupChoices,h=u.setTabGroupChoices,v=(0,a.useState)(g),b=v[0],C=v[1],y=[];if(null!=k){var w=f[k];null!=w&&w!==b&&N.some((function(t){return t.value===w}))&&C(w)}var S=function(t){var e=t.currentTarget,n=y.indexOf(e),a=N[n].value;C(a),null!=k&&(h(k,a),setTimeout((function(){var t,n,a,r,i,l,o,p;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,l=window,o=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(d),setTimeout((function(){return e.classList.remove(d)}),2e3))}),150))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=y.indexOf(t.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(t.target)-1;n=y[r]||y[y.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},c)},N.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===e}),key:e,ref:function(t){return y.push(t)},onKeyDown:D,onFocus:S,onClick:S},null!=n?n:e)}))),n?(0,a.cloneElement)(s.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},s.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},4042:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=(n(5064),n(8215),["components"]),o={sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},d=void 0,p={unversionedId:"ios/base/Configuration",id:"ios/base/Configuration",isDocsHomePage:!1,title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6eConfiguration,\u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a",source:"@site/docs/ios/base/Configuration.md",sourceDirName:"ios/base",slug:"/ios/base/Configuration",permalink:"/growingio-sdk-docs/docs/ios/base/Configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios/base/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"gioSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs/docs/ios/base/Getting_Started"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/ios/base/api"}},m=[{value:"\u914d\u7f6e\u8868\u683c",id:"\u914d\u7f6e\u8868\u683c",children:[]},{value:"\u8be6\u7ec6\u8bf4\u660e",id:"\u8be6\u7ec6\u8bf4\u660e",children:[]},{value:"\u5e38\u7528\u53ef\u9009\u6a21\u5757\u914d\u7f6e",id:"\u5e38\u7528\u53ef\u9009\u6a21\u5757\u914d\u7f6e",children:[{value:"1. <strong>\u7981\u7528IDFA</strong>",id:"1-\u7981\u7528idfa",children:[]},{value:"2. <strong>SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93</strong>",id:"2-sdk\u6570\u636e\u52a0\u5bc6\u4f20\u8f93",children:[]},{value:"3.<strong>\u5185\u5d4cH5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e</strong>",id:"3\u5185\u5d4ch5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e",children:[]}]}],k={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration"),",\u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u8868\u683c"},"\u914d\u7f6e\u8868\u683c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Config"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5176\u5b83"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7248\u672c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76eeID(AccountID)\uff0c\u6bcf\u4e2a\u5e94\u7528\u5bf9\u5e94\u552f\u4e00\u503c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataSourceId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684DataSourceId\uff0c\u552f\u4e00\u503c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataCollectionServerHost")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u90e8\u7f72\u540e\u7684 ServerHost"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debugEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NO")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370SDK log\uff0c\u629b\u51fa\u9519\u8bef\u5f02\u5e38\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u8bf7\u5173\u95ed"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellularDataLimit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataUploadInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sessionInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"30")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u5355\u4f4d\u79d2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dataCollectionEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"excludeEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u8fc7\u6ee4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("font",{color:"red"},">=3.2.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ignoreField")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("font",{color:"red"},">=3.2.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"impressionScale")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 ","[0-1]"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("font",{color:"red"},"\u65e0\u57cb\u70b9\u72ec\u6709")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"idMappingEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NO")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("font",{color:"red"},">=3.3.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"urlScheme")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NSString")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49 URL Scheme"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("font",{color:"red"},">=3.3.0"))))),(0,i.kt)("h3",{id:"\u8be6\u7ec6\u8bf4\u660e"},"\u8be6\u7ec6\u8bf4\u660e"),(0,i.kt)("h4",{id:"1-projectid-urlscheme-setdatasourceid-setdatacollectionserverhost"},"1. ",(0,i.kt)("strong",{parentName:"h4"},"projectId"),"\uff0c ",(0,i.kt)("strong",{parentName:"h4"},"urlScheme"),"\uff0c ",(0,i.kt)("strong",{parentName:"h4"},"setDataSourceId"),"\uff0c ",(0,i.kt)("strong",{parentName:"h4"},"setDataCollectionServerHost")),(0,i.kt)("p",null,"urlScheme \u662f SDK 3.3.0\u53ca\u5176\u4e4b\u540e\u5fc5\u4f20\u53c2\u6570\uff0c\u5176\u4ed6\u53c2\u6570\u4e3a\u5fc5\u4f20\u53c2\u6570\uff0c\u82e5\u4e0d\u6e05\u695a\u5177\u4f53\u6570\u503c\u8bf7\u8be2\u95ee\u76f8\u5173\u670d\u52a1\u7aef\u5bf9\u63a5\u7684\u5f00\u53d1\u540c\u4e8b\u3002"),(0,i.kt)("h4",{id:"2-debugenabled"},"2. ",(0,i.kt)("strong",{parentName:"h4"},"debugEnabled")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5f00\u542f\u540e\u4f1a\u8f93\u51faSDK Log \u65e5\u5fd7\u3002  "),(0,i.kt)("h4",{id:"3-cellulardatalimit"},"3. ",(0,i.kt)("strong",{parentName:"h4"},"cellularDataLimit")),(0,i.kt)("p",null,"\u4e3a\u6bcf\u65e5\u57284G/5G\u73af\u5883\u4e0b\u7684\u6d41\u91cf\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a10M\u3002WIFI\u73af\u5883\u4e0b\u5219\u4e0d\u8ba1\u6d41\u91cf\u3002"),(0,i.kt)("h4",{id:"4-datauploadinterval"},"4. ",(0,i.kt)("strong",{parentName:"h4"},"dataUploadInterval")),(0,i.kt)("p",null,"\u4e0a\u62a5\u95f4\u9694\uff0cGrowingIO SDK \u4f1a\u5148\u5c06\u4e8b\u4ef6\u5b58\u5165\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f415\u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u592750\u6761\u4e8b\u4ef6\uff09\u3002"),(0,i.kt)("h4",{id:"5-sessioninterval"},"5. ",(0,i.kt)("strong",{parentName:"h4"},"sessionInterval")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u6307\u5f53\u524d\u4f1a\u8bdd\u5728\u5e94\u7528\u8fdb\u5165\u540e\u53f0\u540e\u7684\u6700\u5927\u7559\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a30\u79d2\u3002\u53e6\u5916\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f1a\u8bdd\uff0c\u5982\u8bbe\u7f6e\u7528\u6237ID\u7b49\u6838\u5fc3\u4fe1\u606f\uff0c\u91cd\u65b0\u6253\u5f00\u6570\u636e\u6536\u96c6\u7b49\u3002"),(0,i.kt)("h4",{id:"6-datacollectionenabled"},"6. ",(0,i.kt)("strong",{parentName:"h4"},"dataCollectionEnabled")),(0,i.kt)("p",null,"\u6570\u636e\u6536\u96c6\uff0c\u5f53\u6570\u636e\u6536\u96c6\u5173\u95ed\u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u518d\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4e8b\u4ef6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,i.kt)("h4",{id:"7-excludeevent"},"7. ",(0,i.kt)("strong",{parentName:"h4"},"excludeEvent")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.2.1")),(0,i.kt)("p",null,"\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e8b\u4ef6\u4e0d\u4f1a\u8fdb\u884c\u8fc7\u6ee4\u3002\u4f46\u82e5\u4e0d\u60f3\u91c7\u96c6\u67d0\u4e9b\u4e8b\u4ef6\u53ef\u4ee5\u5728\u6b64\u8bbe\u7f6e\u3002\u4e8b\u4ef6\u7c7b\u578b\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Event/GrowingEventFilter.h"},"GrowingEventFilter")),(0,i.kt)("h4",{id:"8-ignorefield"},"8. ",(0,i.kt)("strong",{parentName:"h4"},"ignoreField")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.2.1")),(0,i.kt)("p",null,"\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4\uff0c\u4e8b\u4ef6\u5c5e\u6027\u6307\u4e0a\u62a5\u4e8b\u4ef6\u4e2d\u643a\u5e26\u7684\u5c5e\u6027\u53c2\u6570\u3002\u53ef\u8fc7\u6ee4\u4e8b\u4ef6\u5c5e\u6027\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Event/GrowingFieldsIgnore.h"},"GrowingFieldsIgnore")),(0,i.kt)("h4",{id:"9-impressionscale"},"9. ",(0,i.kt)("strong",{parentName:"h4"},"impressionScale")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u65e0\u57cb\u70b9SDK\u72ec\u6709")),(0,i.kt)("p",null,"\u66dd\u5149\u6bd4\u4f8b\uff0c\u4e0e\u66dd\u5149\u4e8b\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\u66dd\u5149\u6bd4\u4f8b\u662f\u6307\u5f53\u4e00\u4e2a\u66dd\u5149\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u65f6\u53ef\u89c1\u7684\u90e8\u5206\u5360\u636e\u81ea\u8eab\u5c3a\u5bf8\u7684\u6bd4\u4f8b\uff0c\u6bd4\u5982\u8bf4\u82e5\u8bbe\u4e3a0\u5219\u8868\u793a\u53ea\u8981\u51fa\u73b0\u5373\u4ea7\u751f\u66dd\u5149\u4e8b\u4ef6\uff0c\u82e5\u8bbe\u4e3a1\u5219\u8868\u793a\u8981\u6574\u4e2aView\u90fd\u51fa\u73b0\u5728\u5c4f\u5e55\u4e2d\u3002"),(0,i.kt)("h4",{id:"10-idmappingenabled"},"10. ",(0,i.kt)("strong",{parentName:"h4"},"idMappingEnabled")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.3.0")),(0,i.kt)("p",null,"\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\uff0c\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\uff0c\u9ed8\u8ba4\u4e0d\u652f\u6301\u3002\u4e0e API \u63a5\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"setLoginUserId:userKey:"),"\u5bf9\u5e94\uff0c\u5f00\u542f\u65f6\uff0cuserKey \u4f1a\u5728\u6bcf\u6b21\u4e0a\u62a5\u6570\u636e\u65f6\u643a\u5e26\uff1b\u5173\u95ed\u65f6\uff0c\u63a5\u53e3\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"setLoginUserId"),"\u4f5c\u7528\u76f8\u540c"),(0,i.kt)("h4",{id:"11-urlscheme"},"11. ",(0,i.kt)("strong",{parentName:"h4"},"urlScheme")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.3.0")),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49 URL Scheme\uff0c\u5982\u5b58\u5728\u591a\u73af\u5883\u914d\u7f6e\uff0c\u53ef\u57fa\u4e8e\u4e0d\u540c\u73af\u5883\u8fdb\u884c\u81ea\u5b9a\u4e49\uff0c\u9700\u540c\u65f6\u5728\u5de5\u7a0b\u4e2d\u6dfb\u52a0\u8be5",(0,i.kt)("a",{parentName:"p",href:"https://growingio.github.io/growingio-sdk-docs/docs/ios/base/Getting_Started#2-%E6%B7%BB%E5%8A%A0-url-scheme"},"URL Scheme")),(0,i.kt)("h2",{id:"\u5e38\u7528\u53ef\u9009\u6a21\u5757\u914d\u7f6e"},"\u5e38\u7528\u53ef\u9009\u6a21\u5757\u914d\u7f6e"),(0,i.kt)("h3",{id:"1-\u7981\u7528idfa"},"1. ",(0,i.kt)("strong",{parentName:"h3"},"\u7981\u7528IDFA")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u91c7\u96c6 SDK \u7248\u672c >=3.2.0"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6SDK\u7248\u672c\u4fdd\u6301\u4e00\u81f4")))),(0,i.kt)("p",null,"\u7981\u7528IDFA\uff0c\u4e14SDK\u4e2d\u4e0d\u4f1a\u518d\u6709\u76f8\u5173\u83b7\u53d6IDFA\u4ee3\u7801\u903b\u8f91"),(0,i.kt)("p",null,"\u5728\u60a8\u7684Podfile\u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics/DISABLE_IDFA'\n")),(0,i.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"pod update")),(0,i.kt)("p",null,"\u9879\u76ee\u4e2d\u65e0\u9700\u5176\u4ed6\u989d\u5916\u8bbe\u7f6e"),(0,i.kt)("h3",{id:"2-sdk\u6570\u636e\u52a0\u5bc6\u4f20\u8f93"},"2. ",(0,i.kt)("strong",{parentName:"h3"},"SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u91c7\u96c6 SDK \u7248\u672c >=3.3.0"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6SDK\u7248\u672c\u4fdd\u6301\u4e00\u81f4")))),(0,i.kt)("p",null,"\u542f\u7528\u6570\u636e\u52a0\u5bc6\uff0c\u9632\u6b62\u91c7\u96c6\u6570\u636e\u660e\u6587\u4f20\u8f93"),(0,i.kt)("p",null,"\u5728\u60a8\u7684Podfile\u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics/ENABLE_ENCRYPTION'\n")),(0,i.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"pod update")),(0,i.kt)("p",null,"\u9879\u76ee\u4e2d\u65e0\u9700\u5176\u4ed6\u989d\u5916\u8bbe\u7f6e"),(0,i.kt)("h3",{id:"3\u5185\u5d4ch5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e"},"3.",(0,i.kt)("strong",{parentName:"h3"},"\u5185\u5d4cH5\u9875\u9762\u6570\u636e\u91c7\u96c6\u914d\u7f6e")),(0,i.kt)("p",null,"APP \u5185\u5d4cH5\u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5\u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK"),(0,i.kt)("p",null,"\u82e5\u9700\u8981 H5\u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0eAPP \u4e2d GIO SDK\u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\uff0c\u8bf7\u53c2\u8003\u5185\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs/webjs/plugins#6-hybrid%E6%89%93%E9%80%9A%E6%8F%92%E4%BB%B6"},"Hybrid\u6253\u901a\u63d2\u4ef6"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679cAPP\u96c6\u6210\u7684\u662f",(0,i.kt)("a",{parentName:"p",href:"/docs/ios/base/Getting_Started#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,i.kt)("strong",{parentName:"a"},"\u65e0\u57cb\u70b9SDK")),"\uff0c \u4e0d\u9700\u8981\u505a\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u6ce8\u5165\u6865\u63a5\u4ee3\u7801\uff0c\u5b9e\u73b0\u6570\u636e\u6253\u901a\uff1b"),(0,i.kt)("p",null,"\u5982\u679cAPP\u96c6\u6210\u7684\u662f",(0,i.kt)("a",{parentName:"p",href:"/docs/ios/base/Getting_Started#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90"},(0,i.kt)("strong",{parentName:"a"},"\u57cb\u70b9SDK")),"\uff0c\u5219\u9700\u8981\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0 Hybrid \u4f9d\u8d56"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6SDK\u7248\u672c\u4fdd\u6301\u4e00\u81f4")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics/Hybrid'\n")),(0,i.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"pod update")),(0,i.kt)("p",null,"\u9879\u76ee\u4e2d\u65e0\u9700\u5176\u4ed6\u989d\u5916\u8bbe\u7f6e"))}c.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);