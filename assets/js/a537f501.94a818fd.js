"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8695],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,c=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_vU9c",p="tabItemActive_cw6a";var d=function(e){var t,n=e.lazy,r=e.block,d=e.defaultValue,k=e.values,s=e.groupId,m=e.className,u=a.Children.toArray(e.children),c=null!=k?k:u.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=d?d:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,N=l(),f=N.tabGroupChoices,h=N.setTabGroupChoices,b=(0,a.useState)(g),v=b[0],w=b[1],I=[];if(null!=s){var y=f[s];null!=y&&y!==v&&c.some((function(e){return e.value===y}))&&w(y)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),a=c[n].value;w(a),null!=s&&(h(s,a),setTimeout((function(){var e,n,a,r,l,i,o,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,d=i.innerWidth,n>=0&&l<=d&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.target)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.target)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},9649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return k},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),o={sidebar_position:3,title:"\u6570\u636e\u91c7\u96c6API"},p=void 0,d={unversionedId:"ios/base/api",id:"ios/base/api",isDocsHomePage:!1,title:"\u6570\u636e\u91c7\u96c6API",description:"1. \u6570\u636e\u91c7\u96c6\u5f00\u5173",source:"@site/docs/ios/base/api.md",sourceDirName:"ios/base",slug:"/ios/base/api",permalink:"/growingio-sdk-docs/docs/ios/base/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios/base/api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u6570\u636e\u91c7\u96c6API"},sidebar:"gioSidebar",previous:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/ios/base/Configuration"},next:{title:"\u524d\u8a00",permalink:"/growingio-sdk-docs/docs/ios/develop/intro"}},k=[{value:"1. \u6570\u636e\u91c7\u96c6\u5f00\u5173",id:"1-\u6570\u636e\u91c7\u96c6\u5f00\u5173",children:[]},{value:"2. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID",id:"2-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id",children:[]},{value:"3. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237Id\u4ee5\u53ca\u7528\u6237Key",id:"3-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id\u4ee5\u53ca\u7528\u6237key",children:[]},{value:"4. \u6e05\u9664\u767b\u5f55\u7528\u6237ID",id:"4-\u6e05\u9664\u767b\u5f55\u7528\u6237id",children:[]},{value:"5. \u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",id:"5-\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",children:[]},{value:"6. \u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",id:"6-\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e",children:[]},{value:"7. \u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6",id:"7-\u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6",children:[]},{value:"8. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",id:"8-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027",children:[]},{value:"9. \u83b7\u53d6\u8bbe\u5907ID",id:"9-\u83b7\u53d6\u8bbe\u5907id",children:[]},{value:"10. \u8bbe\u7f6e\u9875\u9762\u522b\u540d",id:"10-\u8bbe\u7f6e\u9875\u9762\u522b\u540d",children:[]},{value:"11. \u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762",id:"11-\u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762",children:[]},{value:"12. \u8bbe\u7f6e\u5ffd\u7565\u7684View",id:"12-\u8bbe\u7f6e\u5ffd\u7565\u7684view",children:[]},{value:"13.\u8bbe\u7f6e\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6",id:"13\u8bbe\u7f6e\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6",children:[]},{value:"14.\u505c\u6b62\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6",id:"14\u505c\u6b62\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6",children:[]},{value:"15.\u8bbe\u7f6eView\u552f\u4e00Tag",id:"15\u8bbe\u7f6eview\u552f\u4e00tag",children:[]}],s={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u6570\u636e\u91c7\u96c6\u5f00\u5173"},"1. \u6570\u636e\u91c7\u96c6\u5f00\u5173"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataCollectionEnabled"),(0,l.kt)("br",null),"\n\u6253\u5f00\u6216\u5173\u95ed\u6570\u636e\u91c7\u96c6"),(0,l.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"enabled")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"YES"),"\u6253\u5f00\u6570\u636e\u91c7\u96c6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"NO"),"\u5173\u95ed\u6570\u636e\u91c7\u96c6\uff0c\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"YES"))))),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingAutotracker sharedInstance] setDataCollectionEnabled:YES];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingTracker sharedInstance] setDataCollectionEnabled:YES];\n")),(0,l.kt)("h3",{id:"2-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id"},"2. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setLoginUserId"),(0,l.kt)("br",null),"\n\u5f53\u7528\u6237\u767b\u5f55\u4e4b\u540e\u8c03\u7528\uff0c\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684App\u6bcf\u6b21\u7528\u6237\u5347\u7ea7\u7248\u672c\u65f6\u65e0\u9700\u91cd\u65b0\u767b\u5f55\u7684\u8bdd\uff0c\u4e3a\u9632\u6b62\u7528\u6237\u672c\u5730\u7f13\u5b58\u88ab\u6e05\u9664\u5bfc\u81f4\u7684\u65e0\u6cd5\u88ab\u8bc6\u522b\u4e3a\u767b\u5f55\u7528\u6237\uff0c\u5efa\u8bae\u5728\u7528\u6237\u6bcf\u6b21\u5347\u7ea7App\u7248\u672c\u540e\u521d\u6b21\u8bbf\u95ee\u65f6\u91cd\u65b0\u8c03\u7528setLoginUserId\u65b9\u6cd5"),(0,l.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-1"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"userId")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u957f\u5ea6\u9650\u5236\u5927\u4e8e0\u4e14\u5c0f\u4e8e\u7b49\u4e8e1000\uff0c\u5982\u679c\u5927\u4e8e\u957f\u5ea61000\u5c06\u53ea\u622a\u53d6\u524d1000\u957f\u5ea6")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingAutotracker sharedInstance] setLoginUserId:@"112333445"];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingTracker sharedInstance] setLoginUserId:@"112333445"];\n')),(0,l.kt)("h3",{id:"3-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id\u4ee5\u53ca\u7528\u6237key"},"3. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237Id\u4ee5\u53ca\u7528\u6237Key"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setLoginUserId:userKey:"),(0,l.kt)("br",null),"\n\u9002\u7528\u4e8e ID-MAPPING,\u53ef\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"userId")," \u7684\u7c7b\u578b\uff0c\u5b58\u50a8\u65b9\u5f0f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"userId")," \u4fdd\u6301\u4e00\u81f4\uff0cuserKey \u9ed8\u8ba4\u4e3a null"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u652f\u6301 ID-MAPPING SDK\u7248\u672c >=3.3.0\n",(0,l.kt)("strong",{parentName:"p"},"\u9700\u5728\u521d\u59cb\u5316 SDK \u65f6\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"strong"},"configuration.idMappingEnabled = YES"))))),(0,l.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingAutotracker sharedInstance] setLoginUserId:@"123" userKey:@"number"];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingTracker sharedInstance] setLoginUserId:@"123" userKey:@"number"];\n')),(0,l.kt)("h3",{id:"4-\u6e05\u9664\u767b\u5f55\u7528\u6237id"},"4. \u6e05\u9664\u767b\u5f55\u7528\u6237ID"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cleanLoginUserId"),(0,l.kt)("br",null),"\n\u5f53\u7528\u6237\u767b\u51fa\u4e4b\u540e\u8c03\u7528\uff0c\u6e05\u9664\u5df2\u7ecf\u8bbe\u7f6e\u7684\u767b\u5f55\u7528\u6237ID\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingAutotracker sharedInstance] cleanLoginUserId];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingTracker sharedInstance] cleanLoginUserId];\n")),(0,l.kt)("h3",{id:"5-\u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"},"5. \u8bbe\u7f6e\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setLocation"),(0,l.kt)("br",null),"\n\u8bbe\u7f6e\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u57fa\u4e8eWGS-84\u5750\u6807"),(0,l.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-2"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"latitude")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5730\u7406\u5750\u6807\u70b9\u7eac\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"longitude")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5730\u7406\u5750\u6807\u70b9\u7ecf\u5ea6")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingAutotracker sharedInstance] setLocation:39.9 longitude:116.36];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingTracker sharedInstance] setLocation:39.9 longitude:116.36];\n")),(0,l.kt)("h3",{id:"6-\u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"},"6. \u6e05\u9664\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cleanLocation"),(0,l.kt)("br",null),"\n\u6e05\u9664\u7528\u6237\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e"),(0,l.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingAutotracker sharedInstance] cleanLocation];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingTracker sharedInstance] cleanLocation];\n")),(0,l.kt)("h3",{id:"7-\u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6"},"7. \u8bbe\u7f6e\u57cb\u70b9\u4e8b\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"trackCustomEvent"),(0,l.kt)("br",null),"\n\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\u3002\u5728\u6dfb\u52a0\u6240\u9700\u8981\u53d1\u9001\u7684\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728\u4e8b\u4ef6\u7ba1\u7406\u7528\u6237\u754c\u9762\u914d\u7f6e\u4e8b\u4ef6\u4ee5\u53ca\u4e8b\u4ef6\u5c5e\u6027\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-3"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"eventName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSDictionary<NSString, NSString>")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u4f34\u968f\u7684\u7ef4\u5ea6\u4fe1\u606f\uff08\u53ef\u9009\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"itemKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bKey\uff08\u53ef\u9009\uff0c\u4e0eitemId\u53c2\u6570\u4e00\u8d77\u4f20\u5165\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"itemId")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53d1\u751f\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bID \uff08\u53ef\u9009\uff0c\u4e0eitemKey\u53c2\u6570\u4e00\u8d77\u4f20\u5165\uff09")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingAutotracker sharedInstance] trackCustomEvent:@"resourceItemTest"];\n[[GrowingAutotracker sharedInstance] trackCustomEvent:@"resourceItemTest" withAttributes:@{@"property": @"value"}];\n[[GrowingAutotracker sharedInstance] trackCustomEvent:@"resourceItemTest" itemKey:@"testKey" itemId:@"testid"];\n[[GrowingAutotracker sharedInstance] trackCustomEvent:@"resourceItemTest" itemKey:@"testkey" itemId:@"testid" withAttributes:@{@"ok":@"false"}];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingTracker sharedInstance] trackCustomEvent:@"resourceItemTest"];\n[[GrowingTracker sharedInstance] trackCustomEvent:@"resourceItemTest" withAttributes:@{@"property": @"value"}];\n[[GrowingTracker sharedInstance] trackCustomEvent:@"resourceItemTest" itemKey:@"testKey" itemId:@"testid"];\n[[GrowingTracker sharedInstance] trackCustomEvent:@"resourceItemTest" itemKey:@"testkey" itemId:@"testid" withAttributes:@{@"ok":@"false"}];\n')),(0,l.kt)("h3",{id:"8-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"},"8. \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setLoginUserAttributes"),(0,l.kt)("br",null),"\n\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e-4"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSDictionary<NSString, NSString>")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5c5e\u6027\u4fe1\u606f")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingAutotracker sharedInstance] setLoginUserAttributes:@{@"fff":@"xxx"}];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[[GrowingTracker sharedInstance] setLoginUserAttributes:@{@"fff":@"xxx"}];\n')),(0,l.kt)("h3",{id:"9-\u83b7\u53d6\u8bbe\u5907id"},"9. \u83b7\u53d6\u8bbe\u5907ID"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDeviceId"),(0,l.kt)("br",null),"\n\u83b7\u53d6\u8bbe\u5907id\uff0c\u53c8\u79f0\u4e3a\u533f\u540d\u7528\u6237id\uff0cSDK \u81ea\u52a8\u751f\u6210\u7528\u6765\u5b9a\u4e49\u552f\u4e00\u8bbe\u5907\u3002\n\u5982\u679c\u6ca1\u6709\u521d\u59cb\u5316SDK \u6216\u8005\u5173\u95ed\u91c7\u96c6\u5f00\u5173\u53ef\u80fd\u8fd4\u56de\u503c\u4e3anil\uff0c\u4e14\u53ef\u80fd\u6709IO\u64cd\u4f5c\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingAutotracker sharedInstance] getDeviceId];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[[GrowingTracker sharedInstance] getDeviceId];\n")),(0,l.kt)("h3",{id:"10-\u8bbe\u7f6e\u9875\u9762\u522b\u540d"},"10. \u8bbe\u7f6e\u9875\u9762\u522b\u540d"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"growingPageAlias"),(0,l.kt)("br",null),"\n\u7ed9\u9875\u9762\u8bbe\u7f6e\u4e00\u4e2a\u522b\u540d\u3002"),(0,l.kt)("h4",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,l.kt)("p",null,"UIViewController\u5206\u7c7b\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u8bbe\u7f6e\u9700\u8981\u5728viewDidAppear\u6267\u884c\u4e4b\u524d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"growingPageAlias")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u522b\u540d")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-9"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'- (void)viewDidLoad {\n  [super viewDidLoad];\n  ...\n  self.growingPageAlias = @"xxxx";\n  ...\n}\n')),(0,l.kt)("h3",{id:"11-\u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762"},"11. \u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"growingPageIgnorePolicy"),(0,l.kt)("br",null),"\n\u88ab\u8bbe\u7f6e\u5ffd\u7565\u7684\u9875\u9762\uff0c\u4e0d\u518d\u89e6\u53d1\u65e0\u57cb\u70b9\u7684page\u4e8b\u4ef6\u3002"),(0,l.kt)("h4",{id:"\u5c5e\u6027\u8bf4\u660e-1"},"\u5c5e\u6027\u8bf4\u660e"),(0,l.kt)("p",null,"UIViewController\u5206\u7c7b\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u8bbe\u7f6e\u9700\u8981\u5728viewDidAppear\u6267\u884c\u4e4b\u524d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"growingPageIgnorePolicy")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnorePolicy")),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. ",(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnoreSelf")," \u53ea\u5ffd\u7565\u81ea\u5df1",(0,l.kt)("br",null)," 2. ",(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnoreChildren")," \u53ea\u5ffd\u7565\u8be5\u9875\u9762\u7684\u5b50\u9875\u9762",(0,l.kt)("br",null)," 3. ",(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnoreAll")," \u5ffd\u7565\u6240\u6709\uff0c\u5305\u62ec\u81ea\u5df1\u548c\u8be5\u9875\u9762\u7684\u5b50\u9875\u9762")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-10"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"- (void)viewDidLoad {\n  [super viewDidLoad];\n  ...\n  self.growingPageIgnorePolicy = GrowingIgnoreChildren;\n  ...\n}\n")),(0,l.kt)("h3",{id:"12-\u8bbe\u7f6e\u5ffd\u7565\u7684view"},"12. \u8bbe\u7f6e\u5ffd\u7565\u7684View"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"growingViewIgnorePolicy"),(0,l.kt)("br",null),"\n\u88ab\u8bbe\u7f6e\u5ffd\u7565\u7684VIew\uff0c\u4e0d\u518d\u89e6\u53d1\u70b9\u51fb\u3001\u66dd\u5149\u7b49\u4efb\u4f55\u4e8b\u4ef6\uff0c\u88ab\u5ffd\u7565\u7684WebView\u4e5f\u4e0d\u4f1a\u91c7\u96c6Hybrid\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("h4",{id:"\u5c5e\u6027\u8bf4\u660e-2"},"\u5c5e\u6027\u8bf4\u660e"),(0,l.kt)("p",null,"UIView \u5206\u7c7b\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u8bbe\u7f6e\u9700\u8981\u5728viewDidAppear\u6267\u884c\u4e4b\u524d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"growingViewIgnorePolicy")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnorePolicy")),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. ",(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnoreSelf")," \u53ea\u5ffd\u7565\u81ea\u5df1",(0,l.kt)("br",null)," 2. ",(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnoreChildren")," \u53ea\u5ffd\u7565\u8be5\u9875\u9762\u7684\u5b50\u9875\u9762",(0,l.kt)("br",null)," 3. ",(0,l.kt)("inlineCode",{parentName:"td"},"GrowingIgnoreAll")," \u5ffd\u7565\u6240\u6709\uff0c\u5305\u62ec\u81ea\u5df1\u548c\u8be5\u9875\u9762\u7684\u5b50\u9875\u9762")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-11"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"view.growingViewIgnorePolicy = GrowingIgnoreSelf;\n")),(0,l.kt)("h3",{id:"13\u8bbe\u7f6e\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6"},"13.\u8bbe\u7f6e\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"growingTrackImpression"),(0,l.kt)("br",null),"\n\u5f53\u88ab\u8bbe\u7f6e\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u5185\u65f6\u5c06\u89e6\u53d1\u66dd\u5149\u4e8b\u4ef6"),(0,l.kt)("h4",{id:"\u65b9\u6cd5\u8bf4\u660e"},"\u65b9\u6cd5\u8bf4\u660e"),(0,l.kt)("p",null,"UIView\u5206\u7c7b\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"eventName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u66dd\u5149\u7684\u4e8b\u4ef6\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSDictionary<NSString, NSString>")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u66dd\u5149\u7684\u4e8b\u4ef6\u5c5e\u6027")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-12"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'[self.view growingTrackImpression:@"xxxx" attributes:@{@"111":@"222"}];\n')),(0,l.kt)("h3",{id:"14\u505c\u6b62\u91c7\u96c6view\u7684\u66dd\u5149\u4e8b\u4ef6"},"14.\u505c\u6b62\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"growingStopTrackImpression"),(0,l.kt)("br",null),"\n\u505c\u6b62\u91c7\u96c6View\u7684\u66dd\u5149\u4e8b\u4ef6"),(0,l.kt)("h4",{id:"\u65b9\u6cd5\u8bf4\u660e-1"},"\u65b9\u6cd5\u8bf4\u660e"),(0,l.kt)("p",null,"UIView\u5206\u7c7b\u65b9\u6cd5"),(0,l.kt)("h4",{id:"\u793a\u4f8b-13"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"[self.view growingStopTrackImpression];\n")),(0,l.kt)("h3",{id:"15\u8bbe\u7f6eview\u552f\u4e00tag"},"15.\u8bbe\u7f6eView\u552f\u4e00Tag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"growingUniqueTag"),(0,l.kt)("br",null),"\n\u7ed9View\u8bbe\u7f6e\u552f\u4e00\u7684Tag\uff0c\u65b9\u4fbf\u70b9\u51fb\u7b49\u4e8b\u4ef6\u786e\u5b9a\u552f\u4e00\u7684View\uff0c\u4e00\u822c\u7528\u4e8e\u52a8\u6001\u5e03\u5c40\u7684\u573a\u666f"),(0,l.kt)("h4",{id:"\u5c5e\u6027\u8bf4\u660e-3"},"\u5c5e\u6027\u8bf4\u660e"),(0,l.kt)("p",null," UIView \u5206\u7c7b\u58f0\u660e\u7684\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"growingUniqueTag")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8bbe\u7f6e\u7684Tag")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-14"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u57cb\u70b9SDK\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'self.view.growingUniqueTag = @"\u6211\u662f\u4e00\u4e2a\u7279\u522b\u7684view";\n')))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);