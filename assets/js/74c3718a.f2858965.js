"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6990],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,v=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(v,r(r({ref:t},d),{},{components:n})):a.createElement(v,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),s="tabItem_vU9c",l="tabItemActive_cw6a";var c=37,d=39;var p=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,m=e.groupId,u=e.className,v=o(),g=v.tabGroupChoices,f=v.setTabGroupChoices,k=(0,a.useState)(i),h=k[0],N=k[1],w=a.Children.toArray(e.children),b=[];if(null!=m){var y=g[m];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&N(y)}var O=function(e){var t=e.currentTarget,n=b.indexOf(t),a=p[n].value;N(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,i,o,r,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,c=r.innerWidth,n>=0&&o<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case d:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case c:var i=b.indexOf(e.target)-1;n=b[i]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8516:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=(n(5064),n(8215),["components"]),s={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},l=void 0,c={unversionedId:"giokit/ios/integrate",id:"giokit/ios/integrate",isDocsHomePage:!1,title:"\u5982\u4f55\u96c6\u6210",description:"\u96c6\u6210 GioKit",source:"@site/docs/giokit/ios/integrate.md",sourceDirName:"giokit/ios",slug:"/giokit/ios/integrate",permalink:"/growingio-sdk-docs/docs/giokit/ios/integrate",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/ios/integrate.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/ios/version"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/growingio-sdk-docs/docs/giokit/ios/feature"}},d=[{value:"\u96c6\u6210 GioKit",id:"\u96c6\u6210-giokit",children:[{value:"1. Cocoapods \u96c6\u6210",id:"1-cocoapods-\u96c6\u6210",children:[]},{value:"2. \u521d\u59cb\u5316",id:"2-\u521d\u59cb\u5316",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u96c6\u6210-giokit"},"\u96c6\u6210 GioKit"),(0,o.kt)("p",null,"GioKit \u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-toolskit"},"Github")," \u4e0a\uff0c\u6b22\u8fce star, fork \u4e00\u6ce2\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u73af\u5883"),"\n",(0,o.kt)("strong",{parentName:"p"},"Xcode 9.0 \u53ca\u4ee5\u4e0a"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"iOS 9.0 \u53ca\u4ee5\u4e0a"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u5728 ",(0,o.kt)("a",{parentName:"strong",href:"/docs/ios/base/Getting_Started"},"iOS SDK")," \u57fa\u7840\u4e0a\u4f7f\u7528 GioKit")))),(0,o.kt)("h3",{id:"1-cocoapods-\u96c6\u6210"},"1. Cocoapods \u96c6\u6210"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Podfile")," \u4e2d\u6dfb\u52a0\u4f9d\u8d56\u5e93"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"GrowingIO iOS SDK \u7248\u672c\u5728 ",(0,o.kt)("strong",{parentName:"p"},"3.2.1 \u53ca\u4ee5\u4e0a"),", \u8bf7\u6dfb\u52a0"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit', :configurations => ['Debug']\n")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"GrowingIO iOS SDK \u7248\u672c\u5728 ",(0,o.kt)("strong",{parentName:"p"},"3.2.0 \u53ca\u4ee5\u4e0b"),"\uff0c\u8bf7\u6dfb\u52a0\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit/SDK30202', :configurations => ['Debug']\n")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"GrowingIO iOS SDK \u7248\u672c\u662f ",(0,o.kt)("strong",{parentName:"p"},"2.x"),"\uff0c\u8bf7\u6dfb\u52a0\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit/SDK2nd', :configurations => ['Debug']\n")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u6839\u636e\u76f8\u5e94\u7684 GrowingIO iOS SDK \u9009\u62e9\u5bf9\u5e94\u7684\u4f9d\u8d56\uff0c\u8bf7\u4e0d\u8981\u4e00\u8d77\u4f7f\u7528\uff01\uff01"))),(0,o.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\n\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"pod update")),(0,o.kt)("h3",{id:"2-\u521d\u59cb\u5316"},"2. \u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u5728\u60a8\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate"),"\u5bfc\u5165 GrowingToolsKit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objective-c"},"#ifdef DEBUG\n#import <GrowingToolsKit/GrowingToolsKit.h>\n#endif\n")),(0,o.kt)("p",null,"\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:"),"\u65b9\u6cd5\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objective-c"},"#ifdef DEBUG\n    [GrowingToolsKit start];\n#endif\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u907f\u514d\u5728\u6b63\u5f0f\u73af\u5883\u4e0b\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u9519\u8bef\uff0c\u8bf7\u52a1\u5fc5\u53ea\u5728 Debug \u73af\u5883\u4e0b\u4f7f\u7528 GioKit \u5de5\u5177\u3002"))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);