"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[579],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4,title:"Web JS \u5e38\u89c1\u95ee\u9898"},l=void 0,c={unversionedId:"web-js",id:"web-js",title:"Web JS \u5e38\u89c1\u95ee\u9898",description:"1. H5\u9875\u9762\u5728 \u5b98\u7f51\u3001\u5c0f\u7a0b\u5e8f\u3001APP \u4e2d\u4f7f\u7528\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f",source:"@site/question/web-js.md",sourceDirName:".",slug:"/web-js",permalink:"/growingio-sdk-docs/question/web-js",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/question/web-js.md",tags:[],version:"current",lastUpdatedAt:1648873953,formattedLastUpdatedAt:"4/2/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Web JS \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"iOS \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/ios"},next:{title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/minp"}},p={},d=[{value:"1. H5\u9875\u9762\u5728 \u5b98\u7f51\u3001\u5c0f\u7a0b\u5e8f\u3001APP \u4e2d\u4f7f\u7528\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f",id:"1-h5\u9875\u9762\u5728-\u5b98\u7f51\u5c0f\u7a0b\u5e8fapp-\u4e2d\u4f7f\u7528\u8be5\u600e\u4e48\u96c6\u6210sdk",level:3},{value:"3. \u8de8\u57df\u95ee\u9898 has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present",id:"3-\u8de8\u57df\u95ee\u9898-has-been-blocked-by-cors-policy-no-access-control-allow-origin-header-is-present",level:3},{value:"4. Web JS SDK \u96c6\u6210\u6b63\u786e\uff0c\u4e0d\u4e0a\u62a5\u6570\u636e\uff0c\u4e0d\u8f93\u51fa\u65e5\u5fd7\uff0cconsole \u4e2d\u8f93\u5165 vds \u770b\u4e0d\u5230SDK\u96c6\u6210\u4fe1\u606f\uff0c\u8be5\u600e\u4e48\u6392\u67e5\uff1f",id:"4-web-js-sdk-\u96c6\u6210\u6b63\u786e\u4e0d\u4e0a\u62a5\u6570\u636e\u4e0d\u8f93\u51fa\u65e5\u5fd7console-\u4e2d\u8f93\u5165-vds-\u770b\u4e0d\u5230sdk\u96c6\u6210\u4fe1\u606f\u8be5\u600e\u4e48\u6392\u67e5",level:3},{value:"5. dataCollect \u8bbe\u7f6e false \u4e4b\u540e\uff0c\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"5-datacollect-\u8bbe\u7f6e-false-\u4e4b\u540e\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5\u4e3a\u4ec0\u4e48",level:3},{value:"6.JS SDK\u653e\u5728 head \u6807\u7b7e\u4e2d\uff0c\u5982\u679c\u62a5\u9519\uff0c\u4f1a\u4e0d\u4f1a\u5f71\u54cd\u9875\u9762\u52a0\u8f7d\u3001\u4ea7\u54c1\u7684\u4f7f\u7528\uff1f\u4ee5\u53ca\u662f\u5426\u53ef\u4ee5\u4e0d\u653e\u5728 head \u6807\u7b7e\u4e2d\uff1f",id:"6js-sdk\u653e\u5728-head-\u6807\u7b7e\u4e2d\u5982\u679c\u62a5\u9519\u4f1a\u4e0d\u4f1a\u5f71\u54cd\u9875\u9762\u52a0\u8f7d\u4ea7\u54c1\u7684\u4f7f\u7528\u4ee5\u53ca\u662f\u5426\u53ef\u4ee5\u4e0d\u653e\u5728-head-\u6807\u7b7e\u4e2d",level:3},{value:"7. \u7528\u6237\u4fe1\u606f\u4fdd\u62a4\uff0c\u4ee5\u53ca GDPR \u8be5\u600e\u4e48\u8bbe\u7f6e\uff1f",id:"7-\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\u4ee5\u53ca-gdpr-\u8be5\u600e\u4e48\u8bbe\u7f6e",level:3}],u={toc:d};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-h5\u9875\u9762\u5728-\u5b98\u7f51\u5c0f\u7a0b\u5e8fapp-\u4e2d\u4f7f\u7528\u8be5\u600e\u4e48\u96c6\u6210sdk"},"1. H5\u9875\u9762\u5728 \u5b98\u7f51\u3001\u5c0f\u7a0b\u5e8f\u3001APP \u4e2d\u4f7f\u7528\u8be5\u600e\u4e48\u96c6\u6210SDK\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H5 \u9875\u9762\u96c6\u6210 Web JS SDK"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e0e\u539f\u751fApp\u6253\u901a\u8bbf\u95ee\u7528\u6237\u6570\u636e\uff1a ",(0,a.kt)("a",{parentName:"li",href:"/docs/webjs/plugins#6-hybrid%E6%89%93%E9%80%9A%E6%8F%92%E4%BB%B6"},"Hybrid\u6253\u901a\u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e0e\u5c0f\u7a0b\u5e8f\u6253\u901a\u8bbf\u95ee\u7528\u6237\u6570\u636e\uff1a",(0,a.kt)("a",{parentName:"li",href:"/docs/webjs/plugins#7-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%86%85%E5%B5%8C%E9%A1%B5%E6%89%93%E9%80%9A%E6%8F%92%E4%BB%B6"},"\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6"))),(0,a.kt)("h3",{id:"3-\u8de8\u57df\u95ee\u9898-has-been-blocked-by-cors-policy-no-access-control-allow-origin-header-is-present"},"3. \u8de8\u57df\u95ee\u9898 has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u9700\u8981\u5ba2\u6237\u670d\u52a1\u7aef\u5728Nginx\u6dfb\u52a0\u8bf7\u6c42\u5934"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"add_header Access-Control-Allow-Origin *;\nadd_header Access-Control-Allow-Credentials: true;\n")),(0,a.kt)("h3",{id:"4-web-js-sdk-\u96c6\u6210\u6b63\u786e\u4e0d\u4e0a\u62a5\u6570\u636e\u4e0d\u8f93\u51fa\u65e5\u5fd7console-\u4e2d\u8f93\u5165-vds-\u770b\u4e0d\u5230sdk\u96c6\u6210\u4fe1\u606f\u8be5\u600e\u4e48\u6392\u67e5"},"4. Web JS SDK \u96c6\u6210\u6b63\u786e\uff0c\u4e0d\u4e0a\u62a5\u6570\u636e\uff0c\u4e0d\u8f93\u51fa\u65e5\u5fd7\uff0cconsole \u4e2d\u8f93\u5165 vds \u770b\u4e0d\u5230SDK\u96c6\u6210\u4fe1\u606f\uff0c\u8be5\u600e\u4e48\u6392\u67e5\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:"),"Web JS SDK \u8d44\u6e90\u6587\u4ef6\u6ca1\u52a0\u8f7d\u4e0a\u5bfc\u81f4\uff0c\u53ef\u80fd\u4f1a\u4e0e\u9ed8\u5199\u8d44\u6e90\u6587\u4ef6\u51b2\u7a81\u3002\u4f8b\u5982require.js\u3002\u5904\u7406\u529e\u6cd5\uff1aJS\u8d44\u6e90\u4e0d\u4f7f\u7528SDK\u96c6\u6210\u4e2d\u7684\u51fd\u6570\u5f15\u5165\uff0c\u91c7\u7528 src\u65b9\u5f0f\u5f15\u5165\uff0c\u653e\u5728require.js \u8fdb\u5165\u4e4b\u524d\uff0c\u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<script src='https://assets.giocdn.com/sdk/cdp/gio.js'><\/script>\n<script type='text/javascript'>\ngdp(init,......);\ngdp('send');\n<\/script>\n")),(0,a.kt)("h3",{id:"5-datacollect-\u8bbe\u7f6e-false-\u4e4b\u540e\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5\u4e3a\u4ec0\u4e48"},"5. dataCollect \u8bbe\u7f6e false \u4e4b\u540e\uff0c\u53d1\u73b0\u4e8b\u4ef6\u6570\u636e\u4e0d\u4e0a\u62a5\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"SDK\u5173\u95ed\u6570\u636e\u91c7\u96c6 dataCollect \u8bbe\u7f6e false \u65f6\uff0c\u6240\u6709\u4e8b\u4ef6\u90fd\u4e0d\u91c7\u96c6\u3002\u53ea\u6709\u5f00\u542f\u4e86\u6570\u636e\u91c7\u96c6 dataCollect \u4e3a ture \u65f6\uff0c\u4e8b\u4ef6\u6570\u636e\u624d\u4f1a\u91c7\u96c6\u4e0a\u62a5"),(0,a.kt)("h3",{id:"6js-sdk\u653e\u5728-head-\u6807\u7b7e\u4e2d\u5982\u679c\u62a5\u9519\u4f1a\u4e0d\u4f1a\u5f71\u54cd\u9875\u9762\u52a0\u8f7d\u4ea7\u54c1\u7684\u4f7f\u7528\u4ee5\u53ca\u662f\u5426\u53ef\u4ee5\u4e0d\u653e\u5728-head-\u6807\u7b7e\u4e2d"},"6.JS SDK\u653e\u5728 head \u6807\u7b7e\u4e2d\uff0c\u5982\u679c\u62a5\u9519\uff0c\u4f1a\u4e0d\u4f1a\u5f71\u54cd\u9875\u9762\u52a0\u8f7d\u3001\u4ea7\u54c1\u7684\u4f7f\u7528\uff1f\u4ee5\u53ca\u662f\u5426\u53ef\u4ee5\u4e0d\u653e\u5728 head \u6807\u7b7e\u4e2d\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"\u7ecf\u5b9e\u9645\u6d4b\u8bd5\u548c\u7edf\u8ba1\uff0cSDK\u7a33\u5b9a\u6027\u8fbe\u5230\u5e94\u7528\u7ea7\u8981\u6c42\uff0c\u51fa\u73b0\u62a5\u9519\u7684\u51e0\u7387\u5f88\u4f4e\uff0c\u5373\u4f7f\u5c0f\u6982\u7387\u51fa\u73b0\u62a5\u9519\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u9875\u9762\u52a0\u8f7d\u548c\u7528\u6237\u4ea7\u54c1\u4f7f\u7528\uff1b\u4e3a\u4e86\u786e\u4fdd\u6570\u636e\u91c7\u96c6\u7684\u5b8c\u6574\u6027\u548c\u51c6\u786e\u6027\u5efa\u8baeSDK \u653e\u5728 head \u6807\u7b7e\u4e2d\uff0c\u5982\u679c\u653e\u5728\u5176\u4ed6\u4f4d\u7f6e\uff0c\u4f1a\u5b58\u5728\u6570\u636e\u4e22\u5931\u7684\u6982\u7387"),(0,a.kt)("h3",{id:"7-\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\u4ee5\u53ca-gdpr-\u8be5\u600e\u4e48\u8bbe\u7f6e"},"7. \u7528\u6237\u4fe1\u606f\u4fdd\u62a4\uff0c\u4ee5\u53ca GDPR \u8be5\u600e\u4e48\u8bbe\u7f6e\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A\uff1a"),"\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/compliance/webCompliance"},"Web JS SDK\u5408\u89c4\u8bf4\u660e")))}b.isMDXComponent=!0}}]);