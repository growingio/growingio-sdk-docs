"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2571],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:7,title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898"},s=void 0,c={unversionedId:"server",id:"server",title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898",description:"1. \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\uff0c\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\uff0c\u662f\u54ea\u91cc\u7684\u95ee\u9898\uff1f",source:"@site/question/server.md",sourceDirName:".",slug:"/server",permalink:"/growingio-sdk-docs/question/server",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/question/server.md",tags:[],version:"current",lastUpdatedAt:1659410612,formattedLastUpdatedAt:"8/2/2022",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/other"}},p={},u=[{value:"1. \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\uff0c\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\uff0c\u662f\u54ea\u91cc\u7684\u95ee\u9898\uff1f",id:"1-\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\u662f\u54ea\u91cc\u7684\u95ee\u9898",level:3},{value:"2. \u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519\uff1aPKIX path validation failed: java.security.cert.CertPathValidatorException:",id:"2-\u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519pkix-path-validation-failed-javasecuritycertcertpathvalidatorexception",level:3},{value:"3. JAVA SDK\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8bef\uff0cjs\u7aef \u548c iOS\u7aef \u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\uff0c\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20\uff0chttps://uatcollect.gmcc.net/healthy-check \u4e5fOK\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"3-java-sdk\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8befjs\u7aef-\u548c-ios\u7aef-\u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20httpsuatcollectgmccnethealthy-check-\u4e5fok\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"Java SDK",id:"java-sdk",level:2},{value:"1. \u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a:\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\uff0c\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898?",id:"1-\u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898",level:3},{value:"2. \u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\uff0c\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230 jar\u5305\uff1f",id:"2-\u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230-jar\u5305",level:3},{value:"3.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f",id:"3\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",level:3},{value:"4.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f",id:"4\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e",level:3},{value:"PHP",id:"php",level:2},{value:"1.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f",id:"1\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",level:3},{value:"2.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f",id:"2\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e",level:3}],d={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\u662f\u54ea\u91cc\u7684\u95ee\u9898"},"1. \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\uff0c\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\uff0c\u662f\u54ea\u91cc\u7684\u95ee\u9898\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u670d\u52a1\u7aefSDK \u5f00\u542f\u65e5\u5fd7\u6a21\u5f0f\u65f6\uff0c\u4e0d\u5411\u670d\u52a1\u7aef\u53d1\u9001\u6570\u636e\u3002\u9700\u8981\u5173\u95ed\u65e5\u5fd7\u6a21\u5f0f\u3002"),(0,a.kt)("h3",{id:"2-\u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519pkix-path-validation-failed-javasecuritycertcertpathvalidatorexception"},"2. \u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519\uff1aPKIX path validation failed: java.security.cert.CertPathValidatorException:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," validty check fail\n\u6570\u636e\u9a8c\u8bc1\u9519\u8bef\uff0c\u68c0\u67e5ssl\u8bc1\u4e66\u662f\u5426\u8fc7\u671f\uff0c\u91cd\u65b0\u914d\u7f6e\u8bc1\u4e66\uff0c\u6216\u8005\u91cd\u542fnginx"),(0,a.kt)("h3",{id:"3-java-sdk\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8befjs\u7aef-\u548c-ios\u7aef-\u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20httpsuatcollectgmccnethealthy-check-\u4e5fok\u8be5\u600e\u4e48\u5904\u7406"},"3. JAVA SDK\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8bef\uff0cjs\u7aef \u548c iOS\u7aef \u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\uff0c\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20\uff0c",(0,a.kt)("a",{parentName:"h3",href:"https://uatcollect.gmcc.net/healthy-check"},"https://uatcollect.gmcc.net/healthy-check")," \u4e5fOK\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u53ef\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.myssl.cn/tools/check-server-cert.html"},"https://www.myssl.cn/tools/check-server-cert.html")," \u68c0\u67e5\u4e2d\u95f4\u8bc1\u4e66\u662f\u5426\u5b8c\u6574\n\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.ssllabs.com/ssltest/analyze.html"},"https://www.ssllabs.com/ssltest/analyze.html"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://myssl.com/ssl.html"},"https://myssl.com/ssl.html")," \u5bf9 https\u8fdb\u884c\u6df1\u5ea6\u68c0\u67e5"),(0,a.kt)("h2",{id:"java-sdk"},"Java SDK"),(0,a.kt)("h3",{id:"1-\u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898"},"1. \u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a:\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\uff0c\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898?"),(0,a.kt)("p",null,"Failed to connect xxxxxx, cause connect timed out\n",(0,a.kt)("img",{alt:"Failed to connect",src:n(9843).Z,width:"1920",height:"887"}),"\n",(0,a.kt)("strong",{parentName:"p"},"A:")," \u89e3\u51b3\u65b9\u6cd5\uff1a\u5220\u9664\u6216\u6ce8\u91ca \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u9ed8\u8ba4\u914d\u7f6eproxy\u8bbe\u7f6e"),(0,a.kt)("h3",{id:"2-\u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230-jar\u5305"},"2. \u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\uff0c\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230 jar\u5305\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u9700\u8981\u5728pom \u548c settings.xml \u4e2d\u6dfb\u52a0\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<id>oss.sonatype.org-snapshot</id>\n<url>https://oss.sonatype.org/content/repositories/snapshots</url> \n")),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u8def\u5f84\u4e0b\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn-U clean compile -DskipTtests")),(0,a.kt)("h3",{id:"3\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f"},"3.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),"\uff1a\u9700\u8981\u5728gio.properties\u914d\u7f6e\u6587\u4ef6\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"run.mode"),"\u5b9a\u4e49\u4e3atest\uff0c\u624d\u80fd\u5728\u8f93\u51fa\u65e5\u5fd7\u3002\n\u4e5f\u53ef\u901a\u8fc7\u5728gio.properties\u4e2d\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"logger.implementation=io.growing.sdk.java.logger.GioLoggerImpl"),"\n\u5b9e\u73b0\u4e00\u4e2a\u65e5\u5fd7\u6253\u5370\u7684\u7c7b\uff0c\u4e5f\u53ef\u8f93\u5165\u65e5\u5fd7"),(0,a.kt)("h3",{id:"4\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e"},"4.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),":\u9700\u8981\u5728gio.properties\u914d\u7f6e\u6587\u4ef6\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"run.mode"),"\u5b9a\u4e49\u4e3aproduction\uff0c\u624d\u4f1a\u5411\u91c7\u96c6\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"php"},"PHP"),(0,a.kt)("h3",{id:"1\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f"},"1.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),":\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\uff0c\u914d\u7f6e\u989d\u5916\u7684\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"$props = array('debug' => true)"),"\u3002"),(0,a.kt)("h3",{id:"2\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e"},"2.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),":\u521d\u59cb\u5316\u65f6\u914d\u7f6e\u4e86\u989d\u5916\u53c2\u6570 debug \u4e3a true\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6b64\u6a21\u5f0f\u4ec5\u6253\u5370\u65e5\u5fd7\uff0c\u4e0d\u53d1\u9001\u6570\u636e"),"\uff1b\u9700\u8981\u8bbe\u7f6e\u4e3a false\u6216\u4e0d\u8bbe\u7f6e\uff0c\u624d\u4f1a\u5411\u91c7\u96c6\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u3002"))}m.isMDXComponent=!0},9843:function(e,t,n){t.Z=n.p+"assets/images/failedtoconnect-4d1f655d24f88fdf81ea2ab7e579fb69.png"}}]);