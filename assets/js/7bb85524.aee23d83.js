"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2966],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=d(a),s=r,c=g["".concat(o,".").concat(s)]||g[s]||k[s]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2993:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:2,title:"PHP SDK"},o=void 0,d={unversionedId:"server/PHP SDK",id:"server/PHP SDK",isDocsHomePage:!1,title:"PHP SDK",description:"GrowingIO\u63d0\u4f9b\u5728Server\u7aef\u90e8\u7f72\u7684PHP SDK,\u4ece\u800c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u4e8b\u4ef6\u4e0a\u62a5\u7b49\u64cd\u4f5c\u3002",source:"@site/docs/server/PHP SDK.md",sourceDirName:"server",slug:"/server/PHP SDK",permalink:"/growingio-sdk-docs/docs/server/PHP SDK",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/server/PHP SDK.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PHP SDK"},sidebar:"gioSidebar",previous:{title:"JAVA SDK",permalink:"/growingio-sdk-docs/docs/server/Java SDK"},next:{title:"Python SDK",permalink:"/growingio-sdk-docs/docs/server/Python SDK"}},m=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",children:[]},{value:"\u96c6\u6210 &amp; \u5b89\u88c5",id:"\u96c6\u6210--\u5b89\u88c5",children:[]},{value:"\u521d\u59cb\u5316\u914d\u7f6e",id:"\u521d\u59cb\u5316\u914d\u7f6e",children:[]},{value:"API\u8bf4\u660e",id:"api\u8bf4\u660e",children:[{value:"\u57cb\u70b9\u4e8b\u4ef6",id:"\u57cb\u70b9\u4e8b\u4ef6",children:[]},{value:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",id:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",children:[]},{value:"\u7269\u54c1\u6a21\u578b(CDP\u5e73\u53f0\u7248\u672c&lt;2.1)",id:"\u7269\u54c1\u6a21\u578bcdp\u5e73\u53f0\u7248\u672c21",children:[]},{value:"\u7ef4\u5ea6\u8868(CDP\u5e73\u53f0\u7248\u672c&gt;=2.1)",id:"\u7ef4\u5ea6\u8868cdp\u5e73\u53f0\u7248\u672c21",children:[]}]},{value:"\u96c6\u6210\u793a\u4f8b",id:"\u96c6\u6210\u793a\u4f8b",children:[]},{value:"\u7a0b\u5e8f\u6d4b\u8bd5",id:"\u7a0b\u5e8f\u6d4b\u8bd5",children:[{value:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",id:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",children:[]},{value:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",id:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",children:[]},{value:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",id:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"Q:\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f",id:"q\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",children:[]},{value:"Q:\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f",id:"q\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e",children:[]}]}],k={toc:m};function g(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GrowingIO\u63d0\u4f9b\u5728Server\u7aef\u90e8\u7f72\u7684PHP SDK,\u4ece\u800c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u4e8b\u4ef6\u4e0a\u62a5\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u6e90\u7801\u6258\u7ba1\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-php-sdk"},"growingio/growingio-php-sdk")),(0,l.kt)("blockquote",null,(0,l.kt)("h2",{parentName:"blockquote",id:"php-\u7248\u672c--55"},"php \u7248\u672c => 5.5")),(0,l.kt)("h3",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,l.kt)("h4",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidhost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001Host"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,l.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,l.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"div"},"AccountID\u3001DataSourceID \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u83b7\u53d6\u6e90\uff0c\u6216\u4ece\u5df2\u77e5\u5e94\u7528\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301",(0,l.kt)("br",null),"\nHost \u9700\u8981\u670d\u52a1\u7aef\u90e8\u7f72\uff0c\u5982\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"))),(0,l.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u65b0\u5efa\u6570\u636e\u6e90",src:a(6745).Z})),(0,l.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u67e5\u770b\u6570\u636e\u6e90",src:a(1827).Z})),(0,l.kt)("h3",{id:"\u96c6\u6210--\u5b89\u88c5"},"\u96c6\u6210 & \u5b89\u88c5"),(0,l.kt)("p",null,"php sdk\u5df2\u7ecf\u53d1\u5e03\u5728",(0,l.kt)("a",{parentName:"p",href:"https://packagist.org/packages/growingio/php-sdk"},"Packagist"),", \u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer"),"\u8fdb\u884c\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-composer"},'"growingio/php-sdk": "1.0.1"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse com\\growingio\\GrowingIO;\n//Load Composer's autoloader\nrequire 'vendor/autoload.php';\n")),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4f7f\u7528Composer, \u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u6e90\u4ee3\u7801\u5230php\u914d\u7f6e\u4e2d\u6307\u5b9a\u7684include_path\u76ee\u5f55\u4e2d, \u5e76\u624b\u52a8\u52a0\u8f7d\u7c7b\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse com\\growingio\\GrowingIO;\n\ninclude_once 'path/src/GrowingIO.php'; // path\u4e3a\u5bf9\u5e94\u8def\u5f84\n")),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316\u914d\u7f6e"},"\u521d\u59cb\u5316\u914d\u7f6e"),(0,l.kt)("h6",{id:"\u521d\u59cb\u5316\u53c2\u6570"},"\u521d\u59cb\u5316\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accountID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee ID,\u89c1\u6570\u636e\u6e90\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"host"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6536\u96c6\u670d\u52a1\u57df\u540d,\u8bf7\u53c2\u8003\u8fd0\u7ef4\u624b\u518c\u6216\u8054\u7cfb\u6280\u672f\u652f\u6301\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dataSourceId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90 ID,\u89c1\u6570\u636e\u6e90\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"props"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570")))),(0,l.kt)("h6",{id:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570"},"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"debug"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"debug \u6a21\u5f0f, \u6b64\u6a21\u5f0f\u4ec5\u6253\u5370\u65e5\u5fd7, \u4e0d\u53d1\u9001\u6570\u636e")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$accountID = '1234567887654321';\n$host = 'https://localhost.com';\n$dataSourceId = '12345678';\n$props = array('debug' => true);\n\n$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);\n")),(0,l.kt)("h2",{id:"api\u8bf4\u660e"},"API\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u57cb\u70b9\u4e8b\u4ef6"},"\u57cb\u70b9\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\u3002\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728CDP\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"loginUserKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u7528\u6237Key\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"loginUserId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u7528\u6237ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"eventKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u57cb\u70b9\u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6,\u6240\u4f34\u968f\u7684\u7ef4\u5ea6\u4fe1\u606f")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->trackCustomEvent($gio->getCustomEventFactory('loginUserId', 'eventName')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('attrKey1' => 'attrValue1', 'attrKey2' => 'attrValue2'))\n    ->create());\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,l.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u57cb\u70b9\u4e8b\u4ef6\u793a\u4f8b")))),(0,l.kt)("h3",{id:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"},"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u6bd4\u5982\u5e74\u9f84\u3001\u6027\u522b\u3001\u4f1a\u5458\u7b49\u7ea7\u7b49\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790",(0,l.kt)("br",null),"\n\u5728\u6dfb\u52a0\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728CDP\u5e73\u53f0\u7528\u6237\u7ba1\u7406\u754c\u9762\u4e2d\u521b\u5efa\u7528\u6237\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"loginUserKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u7528\u6237Key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"loginUserId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u7528\u6237ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c5e\u6027\u4fe1\u606f")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->setUserAttributesEvent($gio->getUserAttributesFactory('loginUserId')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('gender' => 'male', 'age' => '18'))\n    ->create());\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,l.kt)("a",{parentName:"p",href:"/docs/basicknowledge/trackEventUse#%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B"},"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\u793a\u4f8b")))),(0,l.kt)("h3",{id:"\u7269\u54c1\u6a21\u578bcdp\u5e73\u53f0\u7248\u672c21"},"\u7269\u54c1\u6a21\u578b(CDP\u5e73\u53f0\u7248\u672c<2.1)"),(0,l.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u7269\u54c1\u6a21\u578b\u3002\u5728\u6dfb\u52a0\u6240\u9700\u8981\u53d1\u9001\u7684\u7269\u54c1\u6a21\u578b\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728\u7269\u54c1\u7ba1\u7406\u754c\u9762\u4e2d\u521b\u5efa\u5bf9\u5e94\u7269\u54c1\u53ca\u5176\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"itemId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578bid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"itemKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578bkey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578b\u5c5e\u6027\u4fe1\u606f")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n")),(0,l.kt)("h3",{id:"\u7ef4\u5ea6\u8868cdp\u5e73\u53f0\u7248\u672c21"},"\u7ef4\u5ea6\u8868(CDP\u5e73\u53f0\u7248\u672c>=2.1)"),(0,l.kt)("p",null,"\u4e0a\u4f20\u4e00\u4e2a\u7ef4\u5ea6\u8868\u8bb0\u5f55\u3002\u5728\u6dfb\u52a0\u6240\u9700\u8981\u4e0a\u4f20\u7ef4\u5ea6\u8868\u8bb0\u5f55\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728\u7ef4\u5ea6\u8868\u7ba1\u7406\u754c\u9762\u4e2d\u521b\u5efa\u5bf9\u5e94\u7ef4\u5ea6\u8868\u53ca\u5176\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"itemId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578bid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"itemKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578bkey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578b\u5c5e\u6027\u4fe1\u606f")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n")),(0,l.kt)("h2",{id:"\u96c6\u6210\u793a\u4f8b"},"\u96c6\u6210\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse com\\growingio\\GrowingIO;\n\ninclude_once 'path/src/GrowingIO.php'; // path\u4e3a\u5bf9\u5e94\u8def\u5f84\n\n// \u8bf7\u5728\u60a8\u8c03\u8bd5\u524d,\u5c06accountID\u4fee\u6539\u4e3a\u60a8\u7684\u9879\u76eeAccountID\n// \u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u9700\u8981\u63d0\u524d\u5728GrowingIO\u4ea7\u54c1\u4e2d\u8fdb\u884c\u5b9a\u4e49\n// \u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u7684\u5c5e\u6027\u4e5f\u9700\u8981\u63d0\u524d\u5728GrowingIO\u4ea7\u54c1\u4e2d\u8fdb\u884c\u5b9a\u4e49\n$accountID = '1234567887654321';\n$host = 'https://localhost.com';\n$dataSourceId = '12345678';\n$props = array('debug' => true);\n$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);\n\n// \u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n$gio->trackCustomEvent($gio->getCustomEventFactory('loginUserId', 'eventName')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('attrKey1' => 'attrValue1', 'attrKey2' => 'attrValue2'))\n    ->create()\n);\n\n// \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u53d8\u91cf\n$gio->setUserAttributesEvent($gio->getUserAttributesFactory('loginUserId')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('gender' => 'male', 'age' => '18'))\n    ->create());\n\n// \u8bbe\u7f6e\u7269\u54c1\u6a21\u578b\n$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n")),(0,l.kt)("h2",{id:"\u7a0b\u5e8f\u6d4b\u8bd5"},"\u7a0b\u5e8f\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8bf7\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u8fdb\u884c\u57cb\u70b9\u6570\u636e\u7684\u5f00\u53d1\u8054\u8c03\u3002"),(0,l.kt)("h3",{id:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e"},"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e"),(0,l.kt)("p",null,"\u5728GrowingIO\u3010\u6570\u636e\u3011>\u3010\u6570\u636e\u7ba1\u7406\u3011\u4e2d\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u53ca\u4e8b\u4ef6\u5c5e\u6027/\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u5982\u56fe\u6240\u793a\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jYpHFW7WpKIaXRTx1%2Fimage.png?alt=media&token=a2dae343-1204-4d36-ad08-9c7099016b11",alt:"custom data"})),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e"},"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684PHP\u9879\u76ee\u4e2d\u96c6\u6210\u589e\u52a0GrowingIO PHP SDK\u7684\u4f9d\u8d56\uff08\u9996\u6b21\u96c6\u6210\u9700\u8981\uff09"),(0,l.kt)("li",{parentName:"ol"},"SDK\u521d\u59cb\u5316\u914d\u7f6e\u4e2ddebug \u914d\u7f6e\u4e3a true"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684PHP\u9879\u76ee\u4e2d\u627e\u5230\u5408\u9002\u7684\u57cb\u70b9\u4f4d\u7f6e\uff0c\u8c03\u7528\u57cb\u70b9\u4e8b\u4ef6API/\u767b\u5f55\u7528\u6237\u5c5e\u6027API\u4e0a\u4f20\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u8f93\u51fa\u7684\u65e5\u5fd7\u4e2d\u67e5\u627e\u662f\u5426\u5305\u542b\u671f\u671b\u4e8b\u4ef6\u5185\u5bb9")),(0,l.kt)("h3",{id:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e"},"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539SDK\u521d\u59cb\u5316\u65f6 debug \u914d\u7f6e\u4e3a false \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5e76\u89e6\u53d1\u57cb\u70b9\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u7ebf\u67e5\u8be2GrowingIO\u6570\u636e\u5e93\uff0c\u786e\u8ba4\u6570\u636e\u4e0a\u4f20\u6210\u529f")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"q\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f"},"Q:\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A"),":\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\uff0c\u914d\u7f6e\u989d\u5916\u7684\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"$props = array('debug' => true)"),"\u3002"),(0,l.kt)("h3",{id:"q\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e"},"Q:\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A"),":\u521d\u59cb\u5316\u65f6\u914d\u7f6e\u4e86\u989d\u5916\u53c2\u6570 debug \u4e3a true\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6b64\u6a21\u5f0f\u4ec5\u6253\u5370\u65e5\u5fd7\uff0c\u4e0d\u53d1\u9001\u6570\u636e"),"\uff1b\u9700\u8981\u8bbe\u7f6e\u4e3a false\u6216\u4e0d\u8bbe\u7f6e\uff0c\u624d\u4f1a\u5411\u91c7\u96c6\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u3002"))}g.isMDXComponent=!0},6745:function(t,e,a){e.Z=a.p+"assets/images/createapplication-241aaf42ded1927f70965a5c2968ad63.png"},1827:function(t,e,a){e.Z=a.p+"assets/images/showServerDataSourceID-860f667568b940da4146c00db52f28b9.png"}}]);