"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5161],{6870:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(5893),s=n(1151);const r={sidebar_position:2,title:"\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a"},o=void 0,c={id:"webjs/plugins/embeddedAdapter",title:"\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a",description:"\u7b80\u4ecb\uff08gioEmbeddedAdapter\uff09",source:"@site/docs/webjs/plugins/embeddedAdapter.md",sourceDirName:"webjs/plugins",slug:"/webjs/plugins/embeddedAdapter",permalink:"/growingio-sdk-docs/docs/webjs/plugins/embeddedAdapter",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/plugins/embeddedAdapter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a"},sidebar:"docSidebar",previous:{title:"\u65e0\u57cb\u70b9",permalink:"/growingio-sdk-docs/docs/webjs/plugins/eventAutoTracking"},next:{title:"App\u5185\u5d4c\u9875\u6253\u901a",permalink:"/growingio-sdk-docs/docs/webjs/plugins/hybridAdapter"}},t={},l=[{value:"\u7b80\u4ecb\uff08gioEmbeddedAdapter\uff09",id:"\u7b80\u4ecbgioembeddedadapter",level:2},{value:"\u6253\u901a\u903b\u8f91(\u89c4\u5219)",id:"\u6253\u901a\u903b\u8f91\u89c4\u5219",level:3},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"CDN\u96c6\u6210\u5f15\u5165",id:"cdn\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"3\u3001\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801",id:"3\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801",level:3},{value:"\u6253\u901a\u5f71\u54cd",id:"\u6253\u901a\u5f71\u54cd",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}];function a(e){const d={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.h2,{id:"\u7b80\u4ecbgioembeddedadapter",children:"\u7b80\u4ecb\uff08gioEmbeddedAdapter\uff09"}),"\n",(0,i.jsx)(d.p,{children:"\u5f53\u60a8\u7684H5\u9875\u9762\u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u4f7f\u7528\uff0c\u4e14\u6709\u9700\u8981\u6253\u901a\u7528\u6237\u4fe1\u606f\uff0c\u5c06H5\u8bbf\u95ee\u89c6\u4e3a\u5c0f\u7a0b\u5e8f\u8bbf\u95ee\u7684\u4e00\u90e8\u5206\uff0c\u5408\u5e76\u91c7\u96c6\u6570\u636e\u81f3\u5c0f\u7a0b\u5e8f\u9879\u76ee\u5206\u6790\u65f6\u4f7f\u7528\u7684\u63d2\u4ef6\u3002"}),"\n",(0,i.jsx)(d.h3,{id:"\u6253\u901a\u903b\u8f91\u89c4\u5219",children:"\u6253\u901a\u903b\u8f91(\u89c4\u5219)"}),"\n",(0,i.jsxs)(d.p,{children:["\u4e3a\u65b9\u4fbf\u63cf\u8ff0\uff0c\u4e0b\u6587\u4e2d\u6765\u81ea\u5c0f\u7a0b\u5e8fSDK",(0,i.jsx)(d.code,{children:"getGioInfo"}),"\u83b7\u53d6\u7684URL\u53c2\u6570\uff08\u53c2\u6570\u8be6\u60c5",(0,i.jsx)(d.a,{href:"/docs/miniprogram/commonlyApi#12%E4%B8%8Eh5%E6%89%93%E9%80%9A%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AEgetgioinfo",children:"\u53c2\u8003\u6587\u6863"}),"\uff09\u79f0 ",(0,i.jsx)(d.code,{children:"\u5c0f\u7a0b\u5e8f\u53c2\u6570"}),"\uff1bWebJS SDK\u521d\u59cb\u5316\u914d\u7f6e\u7684\u53c2\u6570 \u79f0 ",(0,i.jsx)(d.code,{children:"H5\u53c2\u6570"}),"\u3002"]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsxs)(d.strong,{children:["H5\u53c2\u6570\u7684",(0,i.jsx)(d.code,{children:"appId"}),"\u3001",(0,i.jsx)(d.code,{children:"accountId"}),"\u5206\u522b\u4e0e\u5c0f\u7a0b\u5e8f\u53c2\u6570\u7684\u503c(\u5c0f\u7a0b\u5e8f\u53c2\u6570\u4e2d\u79f0\u4e3a",(0,i.jsx)(d.code,{children:"gioappid"}),"\u3001",(0,i.jsx)(d.code,{children:"gioprojectid"}),")\u5bf9\u5e94\u4e00\u81f4\uff0c\u5373\u89c6\u4e3a\u6253\u901a\u6570\u636e\u3002"]})}),"\n",(0,i.jsx)(d.h2,{id:"\u96c6\u6210",children:"\u96c6\u6210"}),"\n",(0,i.jsx)(d.p,{children:"\u5168\u91cf\u96c6\u6210SDK\u65f6\u65e0\u9700\u518d\u6b21\u96c6\u6210\u6b64\u63d2\u4ef6\uff0c\u5df2\u5185\u7f6e\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u529f\u80fd\uff0c\u76f4\u63a5\u8fdb\u884c\u7b2c3\u6b65\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(d.h3,{id:"1\u5f15\u5165",children:"1\u3001\u5f15\u5165"}),"\n",(0,i.jsx)(d.h4,{id:"cdn\u96c6\u6210\u5f15\u5165",children:"CDN\u96c6\u6210\u5f15\u5165"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-html",children:'<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioEmbeddedAdapter.js"><\/script>\n'})}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.strong,{children:"\u63d0\u793a\uff1a"})," \u4e0a\u8ff0\u5730\u5740\u4e2d\u7684SDK\u63d2\u4ef6\u9ed8\u8ba4\u4f7f\u7528",(0,i.jsx)(d.code,{children:"umd"}),"\u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0c\u82e5\u60a8\u7684\u7ad9\u70b9\u9700\u8981\u4f7f\u7528",(0,i.jsx)(d.code,{children:"esm"}),"\u683c\u5f0f\u7684SDK\u63d2\u4ef6\uff1b\u6216\u8005\u5982\u679c\u60a8\u5e0c\u671b\u4e0d\u53d7 CDN\uff08\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff09\u5f71\u54cd\uff0c\u8bf7\u4e0b\u8f7d\u81f3\u672c\u5730\u96c6\u6210\uff0c\u5e76\u4fee\u6539\u5f15\u7528\u4e3a\u60a8\u672c\u5730\u9879\u76ee\u7684\u76f8\u5bf9\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["WebJS SDK \u63d2\u4ef6\u4e0b\u8f7d\uff1a",(0,i.jsx)(d.a,{href:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases",children:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases"})]}),"\n",(0,i.jsxs)(d.p,{children:["\u6ce8\u610fgithub\u4e0a\u7684SDK\u4ea7\u7269\u4e3a\u4e86\u65b9\u4fbf\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u9ed8\u8ba4\u662f",(0,i.jsx)(d.code,{children:"esm"}),"\u683c\u5f0f\uff0c\u5982\u9700\u5f15\u7528",(0,i.jsx)(d.code,{children:"umd"}),"\u683c\u5f0f\u7684SDK\uff0c\u8bf7\u5230\u5305\u5185\u540d\u4e3aumd\u7684\u6587\u4ef6\u5185\u67e5\u627e\u5f15\u7528\u3002"]}),"\n",(0,i.jsx)(d.h4,{id:"npm\u96c6\u6210\u5f15\u5165",children:"npm\u96c6\u6210\u5f15\u5165"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-js",children:'import gioEmbeddedAdapter from "gio-webjs-sdk/plugins/gioEmbeddedAdapter"\n'})}),"\n",(0,i.jsx)(d.h3,{id:"2\u6ce8\u518c",children:"2\u3001\u6ce8\u518c"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-js",children:"gdp('registerPlugins', [gioEmbeddedAdapter]);\ngdp('init', xxxx);\n"})}),"\n",(0,i.jsx)(d.h3,{id:"3\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801",children:"3\u3001\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801"}),"\n",(0,i.jsxs)(d.p,{children:["\u5728init\u65b9\u6cd5\u4e2d\u4f20\u5165",(0,i.jsxs)(d.strong,{children:["\u4e3b\u4f53\u5c0f\u7a0b\u5e8f\u7684 ",(0,i.jsx)(d.code,{children:"accountId"})," \u548c ",(0,i.jsx)(d.code,{children:"appId"})," \u5b57\u6bb5"]}),"\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-js",children:"gdp('init', 'your miniprogram accountId', 'your dataSourceId', {\n  appId: 'your miniprogram appId',\n  serverUrl: 'your server url',\n  version: 'your website version'\n});\n"})}),"\n",(0,i.jsx)(d.h2,{id:"\u6253\u901a\u5f71\u54cd",children:"\u6253\u901a\u5f71\u54cd"}),"\n",(0,i.jsxs)(d.p,{children:["1\u3001H5\u5185\u5d4c\u9875\u4e2d\u7684 ",(0,i.jsx)(d.code,{children:"setUserId\u3001clearUserId"})," \u65b9\u6cd5\u8c03\u7528\u5c06\u65e0\u6548\uff0c\u53ea\u80fd\u4f7f\u7528\u4ece\u5c0f\u7a0b\u5e8f\u7ee7\u627f\u6765\u7684\u767b\u5f55\u7528\u6237ID\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"2\u3001H5\u5185\u5d4c\u9875\u4e0a\u62a5\u4e8b\u4ef6\u5b57\u6bb5\u503c\u7684\u53d8\u5316\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-text",children:"deviceId     ->   \u5c0f\u7a0b\u5e8f\u7684 deviceId\nsessionId    ->   \u5c0f\u7a0b\u5e8f\u7684 sessionId\nuserId       ->   \u5c0f\u7a0b\u5e8f\u7684 userId\nuserKey      ->   \u5c0f\u7a0b\u5e8f\u7684 userKey\ndataSourceId ->   \u5c0f\u7a0b\u5e8f\u7684 dataSourceId\nplatform     ->   \u5c0f\u7a0b\u5e8f\u7684 platform\ndomain       ->   \u5c0f\u7a0b\u5e8f\u7684 appId\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u9664\u4e86\u4ee5\u4e0a\u5b57\u6bb5\uff0c\u5982\u679c\u5c0f\u7a0b\u5e8fSDK\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u4e86 ",(0,i.jsx)(d.code,{children:"extraParams"})," ",(0,i.jsx)(d.a,{href:"/docs/miniprogram/initSettings#extraparams",children:"\u53c2\u8003\u6587\u6863"})," \uff0c\u5176\u4e2d\u7684\u53c2\u6570\u4e5f\u4f1a\u5728H5\u5185\u5d4c\u9875\u4e8b\u4ef6\u4e2d\u8fdb\u884c\u4e0a\u62a5\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,i.jsxs)(d.p,{children:["1\u3001\u4f7f\u7528\u65f6\u786e\u4fdd\u76f8\u540c appId \u7684\u4e3b\u4f53\u5c0f\u7a0b\u5e8f\u5728 ",(0,i.jsx)(d.code,{children:"webview"})," \u7684 ",(0,i.jsx)(d.code,{children:"src"})," \u4e2d\u5df2\u62fc\u63a5 ",(0,i.jsx)(d.code,{children:"getGioInfo"})," \u7684\u5730\u5740\u53c2\u6570\u3002",(0,i.jsx)(d.a,{href:"/docs/miniprogram/commonlyApi#12%E4%B8%8Eh5%E6%89%93%E9%80%9A%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AEgetgioinfo",children:"\u53c2\u8003\u6587\u6863"})]}),"\n",(0,i.jsxs)(d.p,{children:["2\u3001\u6253\u901a\u65f6\u5c0f\u7a0b\u5e8f\u53c2\u6570\u4f1a\u643a\u5e26\u5c0f\u7a0b\u5e8f\u662f\u5426\u91c7\u96c6\u6570\u636e\u7684\u72b6\u6001\u3002\u56e0\u6b64\u5c0f\u7a0b\u5e8f\u7684\u6570\u636e\u91c7\u96c6\u5f00\u5173\u4e5f\u80fd ",(0,i.jsx)(d.strong,{children:"\u4e00\u6b21\u6027"})," \u5730\u63a7\u5236H5\u7684\u6570\u636e\u4e0a\u62a5\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"3\u3001\u6570\u636e\u6253\u901a\u540e\uff0cWebJS SDK\u4f1a\u81ea\u52a8\u65e0\u611f\u77e5\u5730\u5220\u9664\u5730\u5740\u53c2\u6570\u4e2d\u643a\u5e26\u7684Gio\u53c2\u6570\uff0c\u5982\u679c\u60a8\u9700\u8981\u5728H5\u9875\u9762\u4e2d\u83b7\u53d6Gio\u53c2\u6570\uff0c\u8bf7\u5728WebJS SDK\u521d\u59cb\u5316\u4e4b\u524d\u6216\u4ececookie\u4e2d\u83b7\u53d6\u3002"})]})}function p(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,d,n)=>{n.d(d,{Z:()=>c,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const d=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:d},e.children)}}}]);