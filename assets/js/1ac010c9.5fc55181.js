(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[475],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7178:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],c={id:"home",sidebar_position:1,title:"\u65b0\u529f\u80fd\u4ecb\u7ecd",slug:"/"},l=void 0,p={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"\u65b0\u529f\u80fd\u4ecb\u7ecd",description:"V3.2.0",source:"@site/docs/What's New.md",sourceDirName:".",slug:"/",permalink:"/growingio-sdk-docs/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/What's New.md",version:"current",sidebarPosition:1,frontMatter:{id:"home",sidebar_position:1,title:"\u65b0\u529f\u80fd\u4ecb\u7ecd",slug:"/"},sidebar:"gioSidebar",next:{title:"SDK \u7b80\u4ecb",permalink:"/growingio-sdk-docs/docs/SDK OVERVIEW"}},s=[{value:"V3.2.0",id:"v320",children:[]},{value:"V3.1.0",id:"v310",children:[]},{value:"\u4ea7\u54c1\u6982\u8ff0",id:"\u4ea7\u54c1\u6982\u8ff0",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"v320"},"V3.2.0"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"ID-MAPPING")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"SDK \u4e2d\u589e\u52a0\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"setLoginUserId(\u7528\u6237\u7c7b\u578b, \u7528\u6237ID)")," ,\u652f\u6301\u8bbe\u7f6e\u7528\u6237ID\u7684\u7c7b\u578b, \u5b58\u50a8\u65b9\u5f0f\u4e0e\u7528\u6237ID\u4fdd\u6301\u4e00\u81f4, \u7528\u6237\u7c7b\u578b\u9ed8\u8ba4\u4e3a\u7a7a\u3002"),(0,a.kt)("p",{parentName:"div"},"\u5177\u4f53\u63a5\u53e3\u8bf7\u5230\u5404\u4e2a\u5e73\u53f0\u7684SDK\u67e5\u9605\u3002"))),(0,a.kt)("h3",{id:"v310"},"V3.1.0"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"SDK\u6a21\u5757\u5316")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u5df2\u6709\u7684\u6a21\u5757\u7ec4\u5408\u81ea\u5b9a\u4e49SDK,\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5df2\u6709\u7684\u6a21\u5757\u534f\u8bae\u6765\u8fdb\u884c\u81ea\u5b9a\u4e49\u6a21\u5757\u7684\u5f00\u53d1\u3002\n\u5df2\u6709\u6a21\u5757\u5305\u542b\uff1a"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bf7\u6c42\u6846\u67b6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6570\u636e\u4f20\u8f93\u683c\u5f0f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u52a0\u5bc6\u65b9\u5f0f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Web \u81ea\u52a8\u57cb\u70b9\uff1b"),(0,a.kt)("li",{parentName:"ul"},"SDK\u5d29\u6e83\u4e0a\u62a5\u673a\u5236\uff1b"),(0,a.kt)("li",{parentName:"ul"},"App\u5708\u9009\u529f\u80fd\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Mobile Debugger \u529f\u80fd\uff1b")),(0,a.kt)("p",{parentName:"div"},"\u66f4\u591a\u8be6\u60c5\u8bf7\u5230 ",(0,a.kt)("a",{parentName:"p",href:"/docs/"},"\u6a21\u5757\u5316")," \u67e5\u9605"))),(0,a.kt)("h3",{id:"\u4ea7\u54c1\u6982\u8ff0"},"\u4ea7\u54c1\u6982\u8ff0"),(0,a.kt)("p",null,"GrowingIO \uff08\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\uff09\u662f\u57fa\u4e8e\u7528\u6237\u884c\u4e3a\u6570\u636e\u7684\u589e\u957f\u5e73\u53f0\uff0c\u56fd\u5185\u9886\u5148\u7684\u6570\u636e\u8fd0\u8425\u89e3\u51b3\u65b9\u6848\u4f9b\u5e94\u5546\u3002\u4e3a\u4ea7\u54c1\u3001\u8fd0\u8425\u3001\u5e02\u573a\u3001\u6570\u636e\u56e2\u961f\u53ca\u7ba1\u7406\u8005\u7b49\uff0c\u63d0\u4f9b\u5ba2\u6237\u6570\u636e\u5e73\u53f0\u3001  \u4ea7\u54c1\u5206\u6790\u3001\u83b7\u5ba2\u5206\u6790\uff0c\u667a\u80fd\u8fd0\u8425\u7b49\u4ea7\u54c1\u548c\u54a8\u8be2\u670d\u52a1\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5728\u6570\u636e\u5316\u5347\u7ea7\u7684\u8def\u4e0a\uff0c\u63d0\u5347\u6570\u636e\u9a71\u52a8\u80fd\u529b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u589e\u957f\u3002"),(0,a.kt)("p",null,"GrowingIO \u4e13\u6ce8\u4e8e\u96f6\u552e\u3001\u7535\u5546\u3001\u91d1\u878d\u3001\u9152\u65c5\u822a\u53f8\u3001\u6559\u80b2\u3001\u5185\u5bb9\u793e\u533a\u3001B2B\u7b49\u884c\u4e1a\uff0c\u6210\u7acb\u4ee5\u6765\uff0c\u670d\u52a1\u4e0a\u5343\u5bb6\u4f01\u4e1a\u7ea7\u5ba2\u6237\uff0c\u83b7\u5f97\u8fea\u5965\u3001\u5b89\u8e0f\u3001\u559c\u8336\u3001\u62db\u5546\u4ec1\u548c\u4eba\u5bff\u3001\u4e0a\u6c7d\u96c6\u56e2\u3001\u4e1c\u822a\u3001\u6625\u822a\u3001\u9996\u65c5\u5982\u5bb6\u3001\u964c\u964c\u3001\u6ef4\u6ef4\u3001\u7231\u5947\u827a\u3001\u65b0\u4e1c\u65b9\u7b49\u5ba2\u6237\u7684\u9752\u7750\u3002"),(0,a.kt)("p",null,"GrowingIO \u5e2e\u52a9\u5ba2\u6237\u63d0\u5347\u6570\u636e\u9a71\u52a8\u80fd\u529b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u589e\u957f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.growingio.com/.gitbook/assets/-LGNxeGABUADKiTWTaEM-LIEN5IgjD_lm1zFG-YX-LIEN8O7RZ9ipiI48vpk45_4_conversion_1_.gif",alt:"slogan"})))}m.isMDXComponent=!0}}]);