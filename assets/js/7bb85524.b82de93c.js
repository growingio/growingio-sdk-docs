(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2966],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return u}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),g=d(a),u=n,s=g["".concat(o,".").concat(u)]||g[u]||m[u]||l;return a?r.createElement(s,p(p({ref:e},k),{},{components:a})):r.createElement(s,p({ref:e},k))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5586:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return k},default:function(){return g}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),p=["components"],i={sidebar_position:2,title:"PHP SDK"},o=void 0,d={unversionedId:"server/PHP SDK",id:"server/PHP SDK",isDocsHomePage:!1,title:"PHP SDK",description:"GrowingIO\u63d0\u4f9b\u5728Server\u7aef\u90e8\u7f72\u7684PHP SDK,\u4ece\u800c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u4e8b\u4ef6\u4e0a\u62a5\u7b49\u64cd\u4f5c\u3002",source:"@site/docs/server/PHP SDK.md",sourceDirName:"server",slug:"/server/PHP SDK",permalink:"/growingio-sdk-docs/docs/server/PHP SDK",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/server/PHP SDK.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PHP SDK"},sidebar:"gioSidebar",previous:{title:"JAVA SDK",permalink:"/growingio-sdk-docs/docs/server/Java SDK"},next:{title:"\u63d2\u4ef6\u7b80\u4ecb",permalink:"/growingio-sdk-docs/docs/giokit/intro"}},k=[{value:"\u96c6\u6210 &amp; \u5b89\u88c5",id:"\u96c6\u6210--\u5b89\u88c5",children:[]},{value:"\u521d\u59cb\u5316\u914d\u7f6e",id:"\u521d\u59cb\u5316\u914d\u7f6e",children:[]},{value:"\u6570\u636e\u91c7\u96c6API",id:"\u6570\u636e\u91c7\u96c6api",children:[]},{value:"\u96c6\u6210\u793a\u4f8b",id:"\u96c6\u6210\u793a\u4f8b",children:[]},{value:"\u7a0b\u5e8f\u6d4b\u8bd5",id:"\u7a0b\u5e8f\u6d4b\u8bd5",children:[{value:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",id:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",children:[]},{value:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",id:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",children:[]},{value:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",id:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",children:[]}]}],m={toc:k};function g(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GrowingIO\u63d0\u4f9b\u5728Server\u7aef\u90e8\u7f72\u7684PHP SDK,\u4ece\u800c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u4e8b\u4ef6\u4e0a\u62a5\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u6e90\u7801\u6258\u7ba1\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-php-sdk"},"growingio/growingio-php-sdk")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"php \u7248\u672c => 5.5")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u96c6\u6210--\u5b89\u88c5"},"\u96c6\u6210 & \u5b89\u88c5"),(0,l.kt)("p",null,"php sdk\u5df2\u7ecf\u53d1\u5e03\u5728",(0,l.kt)("a",{parentName:"p",href:"https://packagist.org/packages/phpmailer/phpmailer"},"Packagist"),", \u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer"),"\u8fdb\u884c\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-composer"},'"growingio/php-sdk": "dev-op"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse com\\growingio\\GrowingIO;\n//Load Composer's autoloader\nrequire 'vendor/autoload.php';\n")),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4f7f\u7528Composer, \u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u6e90\u4ee3\u7801\u5230php\u914d\u7f6e\u4e2d\u6307\u5b9a\u7684include_path\u76ee\u5f55\u4e2d, \u5e76\u624b\u52a8\u52a0\u8f7d\u7c7b\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse com\\growingio\\GrowingIO;\n\ninclude_once 'path/src/GrowingIO.php'; // path\u4e3a\u5bf9\u5e94\u8def\u5f84\n")),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316\u914d\u7f6e"},"\u521d\u59cb\u5316\u914d\u7f6e"),(0,l.kt)("h6",{id:"\u521d\u59cb\u5316\u53c2\u6570"},"\u521d\u59cb\u5316\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accountID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee ID,\u89c1\u6570\u636e\u6e90\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"host"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6536\u96c6\u670d\u52a1\u57df\u540d,\u8bf7\u53c2\u8003\u8fd0\u7ef4\u624b\u518c\u6216\u8054\u7cfb\u6280\u672f\u652f\u6301\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dataSourceId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90 ID,\u89c1\u6570\u636e\u6e90\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"props"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570")))),(0,l.kt)("h6",{id:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570"},"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"debug"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"debug \u6a21\u5f0f, \u6b64\u6a21\u5f0f\u4ec5\u6253\u5370\u65e5\u5fd7, \u4e0d\u53d1\u9001\u6570\u636e")))),(0,l.kt)("h6",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$accountID = '1234567887654321';\n$host = 'https://localhost.com';\n$dataSourceId = '12345678';\n$props = array('debug' => true);\n\n$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u91c7\u96c6api"},"\u6570\u636e\u91c7\u96c6API"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1","."," \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6")),(0,l.kt)("h6",{id:"\u63a5\u53e3\u529f\u80fd"},"\u63a5\u53e3\u529f\u80fd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\u3002\u5728\u6dfb\u52a0\u6240\u9700\u8981\u53d1\u9001\u7684\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d,\u9700\u8981\u5728\u4e8b\u4ef6\u7ba1\u7406\u7528\u6237\u754c\u9762\u914d\u7f6e\u4e8b\u4ef6\u4ee5\u53ca\u4e8b\u4ef6\u5c5e\u6027")),(0,l.kt)("h6",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"loginUserId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u7528\u6237id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"eventKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d, \u4e8b\u4ef6\u6807\u8bc6\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6,\u6240\u4f34\u968f\u7684\u7ef4\u5ea6\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"key"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u65f6\u5173\u8054\u7684\u7269\u54c1\u6a21\u578bkey")))),(0,l.kt)("h6",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->track(\n    'loginUserId',\n    'eventName',\n    array('attrKey' => 'attrValue'),\n    'itemId',\n    'itemKey'\n);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2","."," \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027")),(0,l.kt)("h6",{id:"\u63a5\u53e3\u529f\u80fd-1"},"\u63a5\u53e3\u529f\u80fd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027,\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790")),(0,l.kt)("h6",{id:"\u8bf7\u6c42\u53c2\u6570-1"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"loginUserId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u7528\u6237id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c5e\u6027\u4fe1\u606f")))),(0,l.kt)("h6",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->setUserAttributes(\n    'loginUserId', \n    array('gender' => 'male')\n);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3","."," \u8bbe\u7f6e\u7269\u54c1\u6a21\u578b")),(0,l.kt)("h6",{id:"\u63a5\u53e3\u529f\u80fd-2"},"\u63a5\u53e3\u529f\u80fd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0a\u4f20\u7269\u54c1\u6a21\u578b")),(0,l.kt)("h6",{id:"\u8bf7\u6c42\u53c2\u6570-2"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"itemId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578bid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"itemKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578bkey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u54c1\u6a21\u578b\u5c5e\u6027\u4fe1\u606f")))),(0,l.kt)("h6",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n")),(0,l.kt)("h3",{id:"\u96c6\u6210\u793a\u4f8b"},"\u96c6\u6210\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse com\\growingio\\GrowingIO;\n\ninclude_once 'path/src/GrowingIO.php'; // path\u4e3a\u5bf9\u5e94\u8def\u5f84\n\n// \u8bf7\u5728\u60a8\u8c03\u8bd5\u524d,\u5c06accountID\u4fee\u6539\u4e3a\u60a8\u7684\u9879\u76eeAccountID\n// \u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u9700\u8981\u63d0\u524d\u5728GrowingIO\u4ea7\u54c1\u4e2d\u8fdb\u884c\u5b9a\u4e49\n// \u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u7684\u5c5e\u6027\u4e5f\u9700\u8981\u63d0\u524d\u5728GrowingIO\u4ea7\u54c1\u4e2d\u8fdb\u884c\u5b9a\u4e49\n$accountID = '1234567887654321';\n$host = 'https://localhost.com';\n$dataSourceId = '12345678';\n$props = array('debug' => true);\n$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);\n\n// \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6\n$gio->track(\n    'loginUserId',\n    'eventName',\n    array('attrKey' => 'attrValue'),\n    'itemId',\n    'itemKey'\n);\n\n// \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u5c5e\u6027\n$gio->setUserAttributes(\n    'loginUserId', \n    array('gender' => 'male')\n);\n\n// \u8bbe\u7f6e\u7269\u54c1\u6a21\u578b\n$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n")),(0,l.kt)("h2",{id:"\u7a0b\u5e8f\u6d4b\u8bd5"},"\u7a0b\u5e8f\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8bf7\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u8fdb\u884c\u57cb\u70b9\u6570\u636e\u7684\u5f00\u53d1\u8054\u8c03\u3002"),(0,l.kt)("h3",{id:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e"},"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e"),(0,l.kt)("p",null,"\u5728GrowingIO\u3010\u6570\u636e\u3011>\u3010\u6570\u636e\u7ba1\u7406\u3011\u4e2d\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u53ca\u4e8b\u4ef6\u5c5e\u6027/\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u5982\u56fe\u6240\u793a\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jYpHFW7WpKIaXRTx1%2Fimage.png?alt=media&token=a2dae343-1204-4d36-ad08-9c7099016b11",alt:"custom data"})),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e"},"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684PHP\u9879\u76ee\u4e2d\u96c6\u6210\u589e\u52a0GrowingIO PHP SDK\u7684\u4f9d\u8d56\uff08\u9996\u6b21\u96c6\u6210\u9700\u8981\uff09"),(0,l.kt)("li",{parentName:"ol"},"SDK\u521d\u59cb\u5316\u914d\u7f6e\u4e2ddebug \u914d\u7f6e\u4e3a true"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684PHP\u9879\u76ee\u4e2d\u627e\u5230\u5408\u9002\u7684\u57cb\u70b9\u4f4d\u7f6e\uff0c\u8c03\u7528\u57cb\u70b9\u4e8b\u4ef6API/\u767b\u5f55\u7528\u6237\u5c5e\u6027API\u4e0a\u4f20\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u8f93\u51fa\u7684\u65e5\u5fd7\u4e2d\u67e5\u627e\u662f\u5426\u5305\u542b\u671f\u671b\u4e8b\u4ef6\u5185\u5bb9")),(0,l.kt)("h3",{id:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e"},"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539SDK\u521d\u59cb\u5316\u65f6 debug \u914d\u7f6e\u4e3a false \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5e76\u89e6\u53d1\u57cb\u70b9\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u7ebf\u67e5\u8be2GrowingIO\u6570\u636e\u5e93\uff0c\u786e\u8ba4\u6570\u636e\u4e0a\u4f20\u6210\u529f")))}g.isMDXComponent=!0}}]);