(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4876],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7294),a=t(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),u="tabItem_1uMI",p="tabItemActive_2DSg";var l=function(e){var n,t=e.lazy,a=e.block,l=e.defaultValue,s=e.values,c=e.groupId,d=e.className,m=r.Children.toArray(e.children),g=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,f=o(),b=f.tabGroupChoices,k=f.setTabGroupChoices,y=(0,r.useState)(v),j=y[0],I=y[1],w=[];if(null!=c){var x=b[c];null!=x&&x!==j&&g.some((function(e){return e.value===x}))&&I(x)}var h=function(e){var n=e.currentTarget,t=w.indexOf(n),r=g[t].value;I(r),null!=c&&(k(c,r),setTimeout((function(){var e,t,r,a,o,i,u,l;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,l=i.innerWidth,t>=0&&o<=l&&a<=u&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},g.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":j===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:h,onClick:h},null!=t?t:n)}))),t?(0,r.cloneElement)(m.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},7849:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t(5064),u=t(8215),p=["components"],l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},s=void 0,c={unversionedId:"miniprogranm/base/gettingStarted",id:"miniprogranm/base/gettingStarted",isDocsHomePage:!1,title:"\u5982\u4f55\u96c6\u6210",description:"\u5c0f\u7a0b\u5e8f SDK \u652f\u6301 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f \u5e73\u53f0\uff0c\u540e\u7eed\u4f1a\u9010\u6b65\u652f\u6301\u5176\u4ed6\u5e73\u53f0\u3002\u5177\u5907\u4ee5\u4e0b\u529f\u80fd\u7279\u6027\uff1a",source:"@site/docs/miniprogranm/base/gettingStarted.md",sourceDirName:"miniprogranm/base",slug:"/miniprogranm/base/gettingStarted",permalink:"/growingio-sdk-docs/docs/miniprogranm/base/gettingStarted",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/miniprogranm/base/gettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u5185\u7f6e\u63d2\u4ef6",permalink:"/growingio-sdk-docs/docs/webjs/plugins"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs/docs/miniprogranm/base/configuration"}},d=[{value:"\u5c0f\u7a0b\u5e8fSDK\u96c6\u6210",id:"\u5c0f\u7a0b\u5e8fsdk\u96c6\u6210",children:[{value:"\u539f\u751f\u5f00\u53d1",id:"\u539f\u751f\u5f00\u53d1",children:[]},{value:"Taro",id:"taro",children:[]},{value:"uni-app",id:"uni-app",children:[]},{value:"mpvue",id:"mpvue",children:[]},{value:"WePY",id:"wepy",children:[]}]}],m={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c0f\u7a0b\u5e8f SDK \u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")," \u5e73\u53f0\uff0c\u540e\u7eed\u4f1a\u9010\u6b65\u652f\u6301\u5176\u4ed6\u5e73\u53f0\u3002\u5177\u5907\u4ee5\u4e0b\u529f\u80fd\u7279\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u63a7\u5236")),(0,o.kt)("h2",{id:"\u5c0f\u7a0b\u5e8fsdk\u96c6\u6210"},"\u5c0f\u7a0b\u5e8fSDK\u96c6\u6210"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7dSDK\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js"},"https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js")),(0,o.kt)("p",{parentName:"blockquote"},"\u653e\u5165\u5c0f\u7a0b\u5e8f\u76ee\u5f55\uff08\u4f8b\uff1a/src/utils/\u76ee\u5f55\u4e0b\uff0c\u4e0b\u6587\u4e2d\u5747\u4ee5\u6b64\u76ee\u5f55\u4e3a\u4f8b\uff09")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,o.kt)("h3",{id:"\u539f\u751f\u5f00\u53d1"},"\u539f\u751f\u5f00\u53d1"),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801\uff1a"),(0,o.kt)(i.Z,{groupId:"1",defaultValue:"\u539f\u751f",values:[{label:"\u539f\u751f",value:"\u539f\u751f"},{label:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"\u539f\u751f",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var gdp = require(\"utils/gio-minp.js\").default;\n// Config GrowingIO\n// \u53c2\u6570\u9700\u8981\u4eceCDP\u7f51\u7ad9\u4e0a\uff0c\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\n// YourProjectId eg: 0a1b4118dd954ec3bcc69da5138bdb96\n// YourServerHost eg: api.growingio.com \u4ec5\u9700\u586b\u5199\u5bf9\u5e94host\n// YourDatasourceId eg: 11223344aabbcc\ngdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(u.Z,{value:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var gdp = require(\"utils/gio-minp.js\").default;\ngdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    usePlugin: true,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\nconst App = global.GioApp;\n")))),(0,o.kt)("h3",{id:"taro"},"Taro"),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.jsx\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801"),(0,o.kt)(i.Z,{groupId:"2",defaultValue:"2.x",values:[{label:"Taro 2.x",value:"2.x"},{label:"Taro 3.x",value:"3.x"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"2.x",mdxType:"TabItem"},"\u5728\u6839\u76ee\u5f55main.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Taro from '@tarojs/taro';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(u.Z,{value:"3.x",mdxType:"TabItem"},(0,o.kt)("p",null,"1\u3001\u6dfb\u52a0npm\u5305 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-plugin-setname")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install babel-plugin-setname --save-dev\n")),(0,o.kt)("p",null,"2\u3001\u4fee\u6539babel\u914d\u7f6e\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    [\n      \"babel-plugin-setname\",\n      {\n        includes: [\"src\"],\n        callee: '__setname__',\n        package: '@gio/setname',\n        lower: false,\n        test: /^on[A-Z][a-zA-Z]+/\n      }\n    ]\n  ]\n}\n")),(0,o.kt)("p",null,"3\u3001\u5728\u6839\u76ee\u5f55main.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Taro from '@tarojs/taro';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")))),(0,o.kt)("h3",{id:"uni-app"},"uni-app"),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55main.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nimport App from './App.vue';\nApp.mpType = 'app';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")),(0,o.kt)("h3",{id:"mpvue"},"mpvue"),(0,o.kt)(i.Z,{groupId:"3",defaultValue:"mpvue",values:[{label:"mpvue",value:"mpvue"},{label:"mpvue+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"mpvue+\u7b2c\u4e09\u65b9\u63d2\u4ef6"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"mpvue",mdxType:"TabItem"},"\u5728\u6839\u76ee\u5f55main.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nimport App from './App.vue';\nApp.mpType = 'app';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(u.Z,{value:"mpvue+\u7b2c\u4e09\u65b9\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("p",null,"1\u3001\u6dfb\u52a0npm\u5305 ",(0,o.kt)("inlineCode",{parentName:"p"},"imports-loader")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install  imports-loader --save-dev\n")),(0,o.kt)("p",null,"2\u3001\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6 ",(0,o.kt)("strong",{parentName:"p"},"/src/utils/vue.js")," \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'imports-loader?global=>undefined,Page=>GioPage,App=>GioApp,Component=>GioComponent!mpvue'\nexport default Vue\n")),(0,o.kt)("p",null,"3\u3001\u4fee\u6539 ",(0,o.kt)("strong",{parentName:"p"},"/build/webpack.base.conf.js")," \u914d\u7f6e\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    resolve: {\n        alias: {\n            'vue': resolve('src/utils/vue'),\n        },\n    },\n    plugins: [\n        new webpack.ProvidePlugin({\n            GioPage: [resolve('src/utils/gio-minp/index.js'), 'GioPage'],\n            GioApp: [resolve('src/utils/gio-minp/index.js'), 'GioApp'],\n            GioComponent: [resolve('src/utils/gio-minp/index.js'), 'GioComponent']\n        }),\n    ]\n};\n")),(0,o.kt)("p",null,"4\u3001\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nimport Vue from 'vue'; // \u8fd9\u91ccvue\u5e94\u8be5\u6307\u5411\u7684\u662f /src/utils/vue.js\nimport App from './App.vue';\nApp.mpType = 'app';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    usePlugin: true,\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")))),(0,o.kt)("h3",{id:"wepy"},"WePY"),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.wpy\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801"),(0,o.kt)(i.Z,{groupId:"4",defaultValue:"1.x",values:[{label:"WePY 1.x",value:"1.x"},{label:"WePY 1.x+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"1.x+\u63d2\u4ef6"},{label:"WePY 2.x",value:"2.x"},{label:"WePY 2.x+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"2.x+\u63d2\u4ef6"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"1.x",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(u.Z,{value:"1.x+\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    usePlugin: true,\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(u.Z,{value:"2.x",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Wepy from '@wepy/core';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    wepy: Wepy,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,o.kt)(u.Z,{value:"2.x+\u63d2\u4ef6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Wepy from '@wepy/core';\nvar gdp = require(\"utils/gio-minp/index.js\").default;\ngdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'api.growingio.com',\n    usePlugin: true,\n    wepy: Wepy,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")))))}g.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);