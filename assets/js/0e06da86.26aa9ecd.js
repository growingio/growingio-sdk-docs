"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6624],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(l,".").concat(k)]||c[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:5,title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898"},l=void 0,u={unversionedId:"minp",id:"minp",title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898",description:"1.\u5c0f\u7a0b\u5e8fSDK\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6onError \u548c onShareAppMessage\uff0c\u662f\u6240\u6709\u7c7b\u578b\u5c0f\u7a0b\u5e8f\u90fd\u4f1a\u91c7\u96c6\u5417\uff0c\u8fd8\u662f\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff1f",source:"@site/question/minp.md",sourceDirName:".",slug:"/minp",permalink:"/growingio-sdk-docs/question/minp",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/question/minp.md",tags:[],version:"current",lastUpdatedAt:1654564832,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"Web JS \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/web-js"},next:{title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/question/other"}},s={},d=[{value:"1.\u5c0f\u7a0b\u5e8fSDK\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6onError \u548c onShareAppMessage\uff0c\u662f\u6240\u6709\u7c7b\u578b\u5c0f\u7a0b\u5e8f\u90fd\u4f1a\u91c7\u96c6\u5417\uff0c\u8fd8\u662f\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff1f",id:"1\u5c0f\u7a0b\u5e8fsdk\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6onerror-\u548c-onshareappmessage\u662f\u6240\u6709\u7c7b\u578b\u5c0f\u7a0b\u5e8f\u90fd\u4f1a\u91c7\u96c6\u5417\u8fd8\u662f\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",level:3},{value:"2.\u96c6\u6210SDK\u540e\uff0c\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f",id:"2\u96c6\u6210sdk\u540e\u63a5\u6536\u4e0d\u5230\u6570\u636e",level:3},{value:"3.\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\uff0c\u4ee5\u53ca GDPR \u8be5\u600e\u4e48\u8bbe\u7f6e\uff1f",id:"3\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\u4ee5\u53ca-gdpr-\u8be5\u600e\u4e48\u8bbe\u7f6e",level:3},{value:"4.\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5Page\u4e8b\u4ef6\uff1f",id:"4\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5page\u4e8b\u4ef6",level:3},{value:"5.\u521d\u59cb\u5316\u5f00\u542fforceLogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86\uff1f",id:"5\u521d\u59cb\u5316\u5f00\u542fforcelogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86",level:3},{value:"6. \u4e0d\u652f\u6301 mpvue \u548c WePY1.x \uff1f",id:"6-\u4e0d\u652f\u6301-mpvue-\u548c-wepy1x-",level:3},{value:"7. \u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e0a\u62a5\u4e8b\u4ef6\u65f6\u5e73\u53f0\u7c7b\u578b\u662f\u652f\u4ed8\u5b9d\uff1f",id:"7-\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e0a\u62a5\u4e8b\u4ef6\u65f6\u5e73\u53f0\u7c7b\u578b\u662f\u652f\u4ed8\u5b9d",level:3},{value:"8. \u65b0\u7248SDK\u652f\u6301\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3001\u5feb\u624b\u5c0f\u7a0b\u5e8f\u5417\uff1f",id:"8-\u65b0\u7248sdk\u652f\u6301\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5feb\u624b\u5c0f\u7a0b\u5e8f\u5417",level:3},{value:"9. \u6211\u4eec\u4f7f\u7528\u76843.3\u7248\u672cSDK\uff0c\u4e00\u5b9a\u8981\u5347\u7ea7\u5417\uff1f",id:"9-\u6211\u4eec\u4f7f\u7528\u768433\u7248\u672csdk\u4e00\u5b9a\u8981\u5347\u7ea7\u5417",level:3},{value:"10. \u5c0f\u7a0b\u5e8fSDK\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417\uff1f",id:"10-\u5c0f\u7a0b\u5e8fsdk\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417",level:3},{value:"11. \u4f7f\u7528\u4e863.8\u7248\u672c\u7684SDK\u4ee5\u540e\u8fd0\u8425SDK(\u5f39\u7a97\u3001\u8d44\u6e90\u4f4d)\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86\uff1f",id:"11-\u4f7f\u7528\u4e8638\u7248\u672c\u7684sdk\u4ee5\u540e\u8fd0\u8425sdk\u5f39\u7a97\u8d44\u6e90\u4f4d\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86",level:3},{value:"12. \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e\uff1f",id:"12-\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e",level:3},{value:"13. \u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e00\u81f4)\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e0d\u4e00\u81f4)\uff1f",id:"13-\u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e00\u81f4\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e0d\u4e00\u81f4",level:3},{value:"14. \u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appId\uff0c\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u8c03\u7528\u83b7\u53d6\u5230appId\u540e\u518d\u521d\u59cb\u5316SDK\uff1f",id:"14-\u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appid\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u8c03\u7528\u83b7\u53d6\u5230appid\u540e\u518d\u521d\u59cb\u5316sdk",level:3}],c={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1\u5c0f\u7a0b\u5e8fsdk\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6onerror-\u548c-onshareappmessage\u662f\u6240\u6709\u7c7b\u578b\u5c0f\u7a0b\u5e8f\u90fd\u4f1a\u91c7\u96c6\u5417\u8fd8\u662f\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},"1.\u5c0f\u7a0b\u5e8fSDK\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6onError \u548c onShareAppMessage\uff0c\u662f\u6240\u6709\u7c7b\u578b\u5c0f\u7a0b\u5e8f\u90fd\u4f1a\u91c7\u96c6\u5417\uff0c\u8fd8\u662f\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u9664\u7279\u6b8a\u8bf4\u660e\u7684\u9664\u5916\u90fd\u6709\uff0conError\u91c7\u96c6\u5c0f\u7a0b\u5e8f\u9519\u8bef\uff0conShareAppMessage\u8bbe\u7f6e\u5206\u4eab\u7ed9\u670b\u53cb\uff0c\u5728\u5f00\u542fonShareAppMessage\u7684\u57fa\u7840\u4e0a\u518d\u8bbe\u7f6eonShareTimeline\u5206\u4eab\u5230\u670b\u53cb\u5708\uff1bonShareTimeline\u4ec5\u5b89\u5353\u5fae\u4fe1\u652f\u6301"),(0,o.kt)("h3",{id:"2\u96c6\u6210sdk\u540e\u63a5\u6536\u4e0d\u5230\u6570\u636e"},"2.\u96c6\u6210SDK\u540e\uff0c\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u8bf7\u5c1d\u8bd5\u4ee5\u4e0b\u6392\u67e5\u65b9\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u68c0\u67e5host \u914d\u7f6e\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},"\u68c0\u67e5host\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee"),(0,o.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u662f\u5426\u5df2\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u540e\u53f0\u6dfb\u52a0\u8bf7\u6c42\u670d\u52a1\u5668\u57df\u540d"),(0,o.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u662f\u5426\u5173\u95ed dataCollect")),(0,o.kt)("h3",{id:"3\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\u4ee5\u53ca-gdpr-\u8be5\u600e\u4e48\u8bbe\u7f6e"},"3.\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\uff0c\u4ee5\u53ca GDPR \u8be5\u600e\u4e48\u8bbe\u7f6e\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/compliance/minpCompliance"},"\u5c0f\u7a0b\u5e8fSDK\u5408\u89c4\u8bf4\u660e")),(0,o.kt)("h3",{id:"4\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5page\u4e8b\u4ef6"},"4.\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5Page\u4e8b\u4ef6\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u8bf7\u68c0\u67e5\u5c0f\u7a0b\u5e8f\u5185\u662f\u5426\u6709\u91cd\u5199Page\u7684\u903b\u8f91\uff0c\u6216\u8005\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9\u7c7b\u4f3c\u5e26\u6709\u52a8\u6548\u7684Page\u63d2\u4ef6\u3002"),(0,o.kt)("h3",{id:"5\u521d\u59cb\u5316\u5f00\u542fforcelogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86"},"5.\u521d\u59cb\u5316\u5f00\u542fforceLogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u8bf7",(0,o.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/initSettings#forcelogin"},"\u53c2\u8003\u6587\u6863"),"\u6b63\u786e\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"6-\u4e0d\u652f\u6301-mpvue-\u548c-wepy1x-"},"6. \u4e0d\u652f\u6301 mpvue \u548c WePY1.x \uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," mpvue\u548cWePY1.x\u4e3a\u8fc7\u65f6\u6846\u67b6\uff0c\u4e0d\u518d\u652f\u6301\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mpvue\u5b98\u65b9\u5df2\u7ecf\u4e0d\u7ef4\u62a4\u4e24\u4e09\u5e74\u4e4b\u4e45\uff0c\u4e14\u4f9d\u7136\u5b58\u5728\u8f83\u591a\u7684\u5f00\u53d1\u95ee\u9898\uff0c\u6545\u6211\u4eec\u8ba4\u4e3a\u5b83\u5df2\u7ecf\u88ab\u653e\u5f03\uff0c\u8bf7\u5c1d\u8bd5\u5347\u7ea7\u5230\u5176\u4ed6\u6846\u67b6\u3002"),(0,o.kt)("li",{parentName:"ul"},"WePY2.x\u5df2\u7ecf\u51fa\u73b0\u8bb8\u4e45\uff0c\u4e14\u4f9d\u7136\u5b58\u5728\u8f83\u591a\u7684\u5f00\u53d1\u95ee\u9898\uff0c\u6545\u6211\u4eec\u5df2\u653e\u5f03\u5bf9WePY1.x\u7684\u652f\u6301\uff0c\u8bf7\u5c1d\u8bd5\u5347\u7ea7\u5230WePY2.0\u6216\u5176\u4ed6\u6846\u67b6\u3002")),(0,o.kt)("h3",{id:"7-\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e0a\u62a5\u4e8b\u4ef6\u65f6\u5e73\u53f0\u7c7b\u578b\u662f\u652f\u4ed8\u5b9d"},"7. \u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e0a\u62a5\u4e8b\u4ef6\u65f6\u5e73\u53f0\u7c7b\u578b\u662f\u652f\u4ed8\u5b9d\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u56e0\u4e3a\u963f\u91cc\u7cfb\u7684\u5c0f\u7a0b\u5e8f\u90fd\u662f\u4ee5\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684\u6846\u67b6\u4e3a\u5e95\u5c42\u903b\u8f91\uff0c\u57fa\u7840api\u90fd\u662f\u901a\u7528\u7684\u3002"),(0,o.kt)("h3",{id:"8-\u65b0\u7248sdk\u652f\u6301\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5feb\u624b\u5c0f\u7a0b\u5e8f\u5417"},"8. \u65b0\u7248SDK\u652f\u6301\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3001\u5feb\u624b\u5c0f\u7a0b\u5e8f\u5417\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u6211\u4eec\u7684\u5de5\u7a0b\u5e08\u6b63\u5728\u52a0\u7d27\u9002\u914d\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002"),(0,o.kt)("h3",{id:"9-\u6211\u4eec\u4f7f\u7528\u768433\u7248\u672csdk\u4e00\u5b9a\u8981\u5347\u7ea7\u5417"},"9. \u6211\u4eec\u4f7f\u7528\u76843.3\u7248\u672cSDK\uff0c\u4e00\u5b9a\u8981\u5347\u7ea7\u5417\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u5982\u679c\u60a8\u8ba4\u4e3a\u5f53\u524d\u7248\u672c\u5df2\u6ee1\u8db3\u9700\u6c42\u4e14\u6ca1\u6709\u5176\u4ed6Bug\uff0c\u53ef\u4ee5\u9009\u62e9\u4e0d\u5347\u7ea7\uff0c\u4f463.3\u7248\u672cSDK\u4e0d\u518d\u8fdb\u884c\u65b0\u529f\u80fd\u8fed\u4ee3\u3002"),(0,o.kt)("h3",{id:"10-\u5c0f\u7a0b\u5e8fsdk\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417"},"10. \u5c0f\u7a0b\u5e8fSDK\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u652f\u6301\u57cb\u70b9\uff0cSDK\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u6216\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5c0f\u90e8\u4ef6\u4e2d\u4f1a\u81ea\u52a8\u5207\u6362\u4e3a\u63d2\u4ef6\u6a21\u5f0f\uff0c\u5728\u63d2\u4ef6\u4e2d\u53d1\u9001VISIT\u4e8b\u4ef6\uff1b\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u53c2\u7684\u65b9\u5f0f\u5c06 gdp \u65b9\u6cd5\u4ece\u5c0f\u7a0b\u5e8f\u4f20\u5165\u8fdb\u884c\u57cb\u70b9\u3002"),(0,o.kt)("h3",{id:"11-\u4f7f\u7528\u4e8638\u7248\u672c\u7684sdk\u4ee5\u540e\u8fd0\u8425sdk\u5f39\u7a97\u8d44\u6e90\u4f4d\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86"},"11. \u4f7f\u7528\u4e863.8\u7248\u672c\u7684SDK\u4ee5\u540e\u8fd0\u8425SDK(\u5f39\u7a97\u3001\u8d44\u6e90\u4f4d)\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u65b0\u7248SDK\u67b6\u6784\u8c03\u6574\u5bfc\u81f4\u5b58\u53d6\u503c\u903b\u8f91\u4e0d\u540c\u5bfc\u81f4\u3002\u8bf7\u540c\u6b65\u5347\u7ea7\u8fd0\u8425SDK\u5373\u53ef\uff0c\u65e0\u9700\u505a\u5176\u4ed6\u4fee\u6539\u3002"),(0,o.kt)("h3",{id:"12-\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e"},"12. \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u8bf7\u68c0\u67e5\u662f\u5426\u4e3a\u5148\u53d1\u5e03\u540e\u6dfb\u52a0\u767d\u540d\u5355\uff0c\u6dfb\u52a0\u767d\u540d\u5355\u540e\u91cd\u65b0\u53d1\u5e03\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"13-\u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e00\u81f4\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e0d\u4e00\u81f4"},"13. \u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e00\u81f4)\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e0d\u4e00\u81f4)\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u8bf7\u68c0\u67e5\u7528\u6237\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u4e0b\u4e24\u79cd\u573a\u666f\u4f1a\u88abSDK\u89c6\u4e3a\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e24\u6b21\u8fdb\u5165\u573a\u666f\u503c\u4e0d\u4e00\u81f4(\u5373\u8fdb\u5165\u65b9\u5f0f\u4e0d\u540c)\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e24\u6b21\u8fdb\u5165\u573a\u666f\u503c\u4e00\u81f4\uff0c\u4f46\u95f4\u9694\u8d85\u8fc75\u5206\u949f\u3002")),(0,o.kt)("h3",{id:"14-\u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appid\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u8c03\u7528\u83b7\u53d6\u5230appid\u540e\u518d\u521d\u59cb\u5316sdk"},"14. \u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appId\uff0c\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u8c03\u7528\u83b7\u53d6\u5230appId\u540e\u518d\u521d\u59cb\u5316SDK\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u4e0d\u53ef\u4ee5\uff0cSDK\u521d\u59cb\u5316\u5fc5\u987b\u5728\u5c0f\u7a0b\u5e8f\u521d\u59cb\u5316\u52a0\u8f7d\u4e4b\u524d\uff0c\u5f85\u53ef\u4ee5\u63a5\u53e3\u8c03\u7528\u65f6\uff0c\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u521d\u59cb\u5316\u5b8c\u6210\uff1b\u5982\u679c\u60a8\u6709\u591a\u4e2a\u5c0f\u7a0b\u5e8fappId\u7528\u4e8e\u533a\u5206\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\uff0c\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u5224\u65ad\u7684\u65b9\u5f0f\u3002"))}k.isMDXComponent=!0}}]);