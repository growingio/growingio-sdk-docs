"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3816],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),a=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=a(t),g=i,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var a=2;a<o;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3606:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return c}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],p={title:"\u81ea\u5b9a\u4e49SDK",sidebar_position:2},s=void 0,a={unversionedId:"webjs/develop/custom_sdk",id:"webjs/develop/custom_sdk",title:"\u81ea\u5b9a\u4e49SDK",description:"\u5728Web JS SDK\u4e2d\u53ef\u4ee5\u6839\u636e\u6240\u9700\uff0c\u81ea\u5b9a\u4e49SDK\u62e5\u6709\u7684\u529f\u80fd\u3002",source:"@site/docs/webjs/develop/custom_sdk.md",sourceDirName:"webjs/develop",slug:"/webjs/develop/custom_sdk",permalink:"/growingio-sdk-docs/docs/webjs/develop/custom_sdk",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/develop/custom_sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u81ea\u5b9a\u4e49SDK",sidebar_position:2},sidebar:"gioSidebar",previous:{title:"\u524d\u8a00",permalink:"/growingio-sdk-docs/docs/webjs/develop/intro"},next:{title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",permalink:"/growingio-sdk-docs/docs/webjs/develop/plugin_dev"}},u={},c=[{value:"Web JS SDK\u5185\u90e8\u903b\u8f91",id:"web-js-sdk\u5185\u90e8\u903b\u8f91",level:2},{value:"\u6309\u9700\u8f7d\u5165\u529f\u80fd",id:"\u6309\u9700\u8f7d\u5165\u529f\u80fd",level:2},{value:"\u514b\u9686sdk\u4ed3\u5e93\u5230\u672c\u5730",id:"\u514b\u9686sdk\u4ed3\u5e93\u5230\u672c\u5730",level:4},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:4},{value:"\u4fee\u6539\u5165\u53e3\u6587\u4ef6",id:"\u4fee\u6539\u5165\u53e3\u6587\u4ef6",level:4},{value:"\u53d1\u5e03\u4f7f\u7528",id:"\u53d1\u5e03\u4f7f\u7528",level:4},{value:"\u62d3\u5c55\u529f\u80fd",id:"\u62d3\u5c55\u529f\u80fd",level:2}],d={toc:c};function g(e){var n=e.components,p=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728Web JS SDK\u4e2d\u53ef\u4ee5\u6839\u636e\u6240\u9700\uff0c\u81ea\u5b9a\u4e49SDK\u62e5\u6709\u7684\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"web-js-sdk\u5185\u90e8\u903b\u8f91"},"Web JS SDK\u5185\u90e8\u903b\u8f91"),(0,o.kt)("p",null,"\u65b0\u7248\u672c\u7684Web JS SDK\u5bf9\u6574\u4e2a\u5185\u90e8\u7ed3\u6784\u8fdb\u884c\u4e86\u91cd\u65b0\u5212\u5206\uff0c\u6574\u4f53\u7ed3\u6784\u53d8\u5f97\u66f4\u52a0\u6e05\u6670\u660e\u6717\u3002\u540c\u65f6\u5f15\u5165\u4e86\u63d2\u4ef6\u7684\u8bbe\u8ba1\uff0c\u4e5f\u4f7f\u5176\u6269\u5c55\u6027\u66f4\u5f3a\u3002\u5185\u90e8\u67b6\u6784\u56fe\u5982\u4e0b\u3002\n",(0,o.kt)("img",{loading:"lazy",alt:"Web JS SDK\u67b6\u6784\u56fe",src:t(2992).Z,width:"1558",height:"1108"})),(0,o.kt)("p",null,"\u56fe\u4e2d\u6240\u793a\u7684\u57fa\u7840\u7ec4\u4ef6\u548c\u5de5\u5177\u7ec4\u4ef6\u662f\u6838\u5fc3\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u66ff\u6362\u3002\u5982\u9700\u6269\u5c55\u65b0\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u529f\u80fd\u63d2\u4ef6\u7684\u65b0\u5f0f\u5b9e\u73b0\u3002\u63d2\u4ef6\u662f\u7a7f\u63d2\u5728SDK\u7684\u521d\u59cb\u5316\u4e0e\u4e8b\u4ef6\u6d41\u4e2d\u7684\u3002\u4e8b\u4ef6\u6d41\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u5728sdk\u6838\u5fc3\u7ec4\u4ef6\u4e2d\u7684\u4f20\u9012\u8fc7\u7a0b\uff0c\u6309\u7167\u6d88\u606f\u7684\u53d1\u51fa\uff0c\u4e8b\u4ef6\u7684\u5408\u6210\uff0c\u6570\u636e\u7684\u538b\u7f29\uff0c\u8bf7\u6c42\u7684\u53d1\u9001\u51e0\u4e2a\u8fc7\u7a0b\u4f20\u9012\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Web SDK Plugin",src:t(9087).Z,width:"1538",height:"580"})),(0,o.kt)("h2",{id:"\u6309\u9700\u8f7d\u5165\u529f\u80fd"},"\u6309\u9700\u8f7d\u5165\u529f\u80fd"),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"/docs/webjs/plugins"},"\u5185\u7f6e\u63d2\u4ef6\u8bf4\u660e"),"\u53ef\u4e86\u89e3\u6240\u6709\u5185\u7f6e\u63d2\u4ef6\u529f\u80fd\u3002\u5728\u4e0a\u56fe\u4e2d\u5217\u4e3e\u7684\u529f\u80fd\u63d2\u4ef6\u90fd\u662f\u53ef\u9009\u7ec4\u5408\u7684\uff0c\u6bd4\u5982\u60a8\u7684SDK\u4e0d\u4f1a\u5728Hybrid\u4e2d\u4f7f\u7528\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u9009\u62e9\u628aHybrid\u76f8\u5173\u7684\u6253\u901a\u63d2\u4ef6\u548cHybrid\u5708\u9009\u63d2\u4ef6\u90fd\u7ed9\u5220\u6389\uff0c\u4e3a\u60a8\u91cd\u65b0\u6253\u5305\u4e00\u4e2asdk\u3002"),(0,o.kt)("p",null,"\u8981\u5982\u4f55\u505a\u624d\u80fd\u5b9e\u73b0\u53bb\u9664Hybrid\u76f8\u5173\u529f\u80fd\u5462\u3002\u9996\u5148\u4f60\u8981\u4eceGithub\u4e0a\u5c06Web JS SDK\u514b\u9686\u4e0b\u6765\uff0c\u5728\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\u5373\u53ef\u3002"),(0,o.kt)("h4",{id:"\u514b\u9686sdk\u4ed3\u5e93\u5230\u672c\u5730"},"\u514b\u9686sdk\u4ed3\u5e93\u5230\u672c\u5730"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/growingio/growingio-sdk-web-autotracker.git\n")),(0,o.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn \n")),(0,o.kt)("h4",{id:"\u4fee\u6539\u5165\u53e3\u6587\u4ef6"},"\u4fee\u6539\u5165\u53e3\u6587\u4ef6"),(0,o.kt)("p",null,"\u6253\u5305\u5165\u53e3\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"cdp.ts"),"\u6587\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0bsdk\u4f1a\u5bfc\u5165\u6240\u6709\u529f\u80fd\u6a21\u5757\u3002\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5f15\u5165\u542f\u7528\u7684\u63d2\u4ef6\nimport '@/plugins/common-plugin';\nimport '@/plugins/sequence-plugin';\nimport '@/plugins/custom-track-plugin';\nimport '@/plugins/embed-plugin';\nimport '@/plugins/spa-page-plugin';\nimport '@/plugins/action-track-plugin';\nimport '@/plugins/hybrid-plugin';       \nimport '@/plugins/web-circle-plugin';\nimport '@/plugins/hybrid-circle-plugin';\nimport '@/plugins/marketing-plugin';\n\n// \u53d7\u51fd\u6570\u6267\u884c\u987a\u5e8f\u7684\u5f71\u54cd \u5165\u53e3\u5fc5\u987b\u653e\u5728\u6700\u540e\u5bfc\u5165\nexport { default } from './entry';\n")),(0,o.kt)("p",null,"\u8981\u5b9e\u73b0\u53bb\u9664Hybrid\u76f8\u5173\u529f\u80fd\u53ea\u9700\u8981\u5220\u9664Hybrid\u76f8\u5173\u7684\u5bfc\u5165\uff0c\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build"),"\u91cd\u65b0\u6253\u5305\u5373\u53ef\u3002\u8fd9\u65f6\u5165\u53e3\u6587\u4ef6\u5e94\u8be5\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5f15\u5165\u542f\u7528\u7684\u63d2\u4ef6\nimport '@/plugins/common-plugin';\nimport '@/plugins/sequence-plugin';\nimport '@/plugins/custom-track-plugin';\nimport '@/plugins/embed-plugin';\nimport '@/plugins/spa-page-plugin';\nimport '@/plugins/action-track-plugin';\nimport '@/plugins/web-circle-plugin';\nimport '@/plugins/marketing-plugin';\n\n// \u53d7\u51fd\u6570\u6267\u884c\u987a\u5e8f\u7684\u5f71\u54cd \u5165\u53e3\u5fc5\u987b\u653e\u5728\u6700\u540e\u5bfc\u5165\nexport { default } from './entry';\n")),(0,o.kt)("h4",{id:"\u53d1\u5e03\u4f7f\u7528"},"\u53d1\u5e03\u4f7f\u7528"),(0,o.kt)("p",null,"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build"),"\u7684\u6253\u5305\u547d\u4ee4\u540e\uff0c\u4f1a\u5728dist\u76ee\u5f55\u4e0b\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"cdp.js"),"\u6587\u4ef6\uff0c\u60a8\u53ea\u9700\u8981\u5c06\u8be5\u6587\u4ef6\u90e8\u7f72\u5230cdn\u4e0a\uff0c\u66ff\u6362\u5230",(0,o.kt)("a",{parentName:"p",href:"/docs/webjs/base/getting_started#web%E4%BD%BF%E7%94%A8%E9%9B%86%E6%88%90"},"\u96c6\u6210\u65f6\u7684JS \u8d44\u6e90\u5730\u5740"),"\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"\u62d3\u5c55\u529f\u80fd"},"\u62d3\u5c55\u529f\u80fd"),(0,o.kt)("p",null,"\u63d2\u4ef6\u7684\u65b9\u5f0f\u4e0d\u4ec5\u4ec5\u662f\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86\u968f\u673a\u7ec4\u5408\u7684\u80fd\u529b\uff0c\u66f4\u591a\u7684\u662f\u63d0\u4f9b\u4e86\u529f\u80fd\u6269\u5c55\u7684\u80fd\u529b\u3002\u5982\u679c\u60a8\u89c9\u5f97\u9ed8\u8ba4\u63d2\u4ef6\u5e76\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u529f\u80fd\u9700\u6c42\uff0c\u90a3\u5c31\u53ef\u4ee5\u6839\u636e",(0,o.kt)("a",{parentName:"p",href:"/docs/webjs/develop/plugin_dev"},"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357"),"\u6765\u81ea\u5b9a\u63d2\u4ef6\u4ee5\u6269\u5c55\u65b0\u529f\u80fd\u3002"))}g.isMDXComponent=!0},2992:function(e,n,t){n.Z=t.p+"assets/images/web-sdk-design-31d25b04128a9176fd3ba774a008dba5.png"},9087:function(e,n,t){n.Z=t.p+"assets/images/web-sdk-plugin-flow-371354d74e0be605eed88e96d9526218.png"}}]);