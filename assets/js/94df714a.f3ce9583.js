"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8562],{9466:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var i=s(5893),d=s(1151);const c={sidebar_position:7,title:"\u591a\u5b9e\u4f8b"},l=void 0,r={id:"webjs/plugins/multipleInstances",title:"\u591a\u5b9e\u4f8b",description:"\u7b80\u4ecb\uff08gioMultipleInstances\uff09",source:"@site/docs/webjs/plugins/multipleInstances.md",sourceDirName:"webjs/plugins",slug:"/webjs/plugins/multipleInstances",permalink:"/growingio-sdk-docs/docs/webjs/plugins/multipleInstances",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/plugins/multipleInstances.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u591a\u5b9e\u4f8b"},sidebar:"docSidebar",previous:{title:"A/B\u6d4b\u8bd5",permalink:"/growingio-sdk-docs/docs/webjs/plugins/abtest"},next:{title:"\u6027\u80fd\u76d1\u63a7",permalink:"/growingio-sdk-docs/docs/webjs/plugins/performance"}},o={},t=[{value:"\u7b80\u4ecb\uff08gioMultipleInstances\uff09",id:"\u7b80\u4ecbgiomultipleinstances",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"CDN\u96c6\u6210\u5f15\u5165",id:"cdn\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"3\u3001\u4f7f\u7528",id:"3\u4f7f\u7528",level:3},{value:"4\u3001\u57cb\u70b9\u3001\u57cb\u70b9\u8ba1\u65f6\u3001\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1",id:"4\u57cb\u70b9\u57cb\u70b9\u8ba1\u65f6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1",level:3},{value:"\u57cb\u70b9\u3001\u57cb\u70b9\u8ba1\u65f6\u591a\u53d1",id:"\u57cb\u70b9\u57cb\u70b9\u8ba1\u65f6\u591a\u53d1",level:4},{value:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1",id:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1",level:4},{value:"\u591a\u5b9e\u4f8b\u89c4\u5219",id:"\u591a\u5b9e\u4f8b\u89c4\u5219",level:2},{value:"1\u3001\u521d\u59cb\u5316\u914d\u7f6e\u9879",id:"1\u521d\u59cb\u5316\u914d\u7f6e\u9879",level:3},{value:"2\u3001\u8bbe\u5907id\uff08\u533f\u540d\u7528\u6237Id\uff09",id:"2\u8bbe\u5907id\u533f\u540d\u7528\u6237id",level:3},{value:"3\u3001\u7528\u6237\u4fe1\u606f",id:"3\u7528\u6237\u4fe1\u606f",level:3},{value:"4\u3001api\u8c03\u7528",id:"4api\u8c03\u7528",level:3},{value:"5\u3001SDK\u63d2\u4ef6\u76f8\u5173",id:"5sdk\u63d2\u4ef6\u76f8\u5173",level:3},{value:"6\u3001\u5176\u4ed6\u89c4\u5219",id:"6\u5176\u4ed6\u89c4\u5219",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u7b80\u4ecbgiomultipleinstances",children:"\u7b80\u4ecb\uff08gioMultipleInstances\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u60a8\u7684web\u9875\u9762\u9700\u8981\u4f7f\u7528\u4e24\u5957\u4e0d\u540c\u91c7\u96c6\u65b9\u6848\u903b\u8f91\u548c\u6570\u636e\u53cc\u53d1\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u591a\u5b9e\u4f8b\u7684\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u96c6\u6210",children:"\u96c6\u6210"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)("font",{color:"#FC5F3A",children:"\u6ce8\u610f\uff1a"}),"SDK\u7248\u672c\u5927\u4e8e\u7b49\u4e8e 4.1.2 \u652f\u6301\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"1\u5f15\u5165",children:"1\u3001\u5f15\u5165"}),"\n",(0,i.jsx)(n.h4,{id:"cdn\u96c6\u6210\u5f15\u5165",children:"CDN\u96c6\u6210\u5f15\u5165"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioMultipleInstances.js"><\/script>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"npm\u96c6\u6210\u5f15\u5165",children:"npm\u96c6\u6210\u5f15\u5165"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import gioMultipleInstances from "gio-webjs-sdk/plugins/gioMultipleInstances"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2\u6ce8\u518c",children:"2\u3001\u6ce8\u518c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"gdp('registerPlugins', [gioMultipleInstances]);\ngdp('init', xxx);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3\u4f7f\u7528",children:"3\u3001\u4f7f\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// \u521d\u59cb\u5316\u4e3b\u5b9e\u4f8b\ngdp('init', accountId1, datasourceId1, {\n  ...\u4e3b\u5b9e\u4f8b\u914d\u7f6e\u9879,\n});\n\n// \u521d\u59cb\u5316\u5b50\u5b9e\u4f8b\ngdp('g1.init', accountId2, datasourceId2, {\n  ...\u5b50\u5b9e\u4f8b\u914d\u7f6e\u9879,\n});\n\n// \u4e3b\u5b9e\u4f8b\u8c03\u7528api\ngdp('setUserId', xxx);\ngdp('track', xxx, xxx);\n\n// \u5b50\u5b9e\u4f8b\u8c03\u7528api\ngdp('g1.setUserId', xxx);\ngdp('g1.track', xxx, xxx);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4\u57cb\u70b9\u57cb\u70b9\u8ba1\u65f6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1",children:"4\u3001\u57cb\u70b9\u3001\u57cb\u70b9\u8ba1\u65f6\u3001\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1"}),"\n",(0,i.jsx)(n.h4,{id:"\u57cb\u70b9\u57cb\u70b9\u8ba1\u65f6\u591a\u53d1",children:"\u57cb\u70b9\u3001\u57cb\u70b9\u8ba1\u65f6\u591a\u53d1"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5c06\u57cb\u70b9\u4e8b\u4ef6\u53d1\u9001\u7ed9\u4e00\u4e2a\u6216\u591a\u4e2a\u5b9e\u4f8b\u3002\u4f8b\u5982\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u8bf4\u660e\u4e86\u5982\u4f55\u5c06\u67d0\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\u53d1\u9001\u7ed9\u591a\u4e2a\u5b9e\u4f8b\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"&&sendTo"})," \u4e3aSDK\u9884\u5b9a\u4e49\u5224\u65ad\u4e13\u7528\u5c5e\u6027\u503c\uff0c\u60a8\u5728\u57cb\u70b9\u65f6\u8bf7\u6ce8\u610f\u4e0d\u8981\u4f7f\u7528\u540c\u540d\u7684\u5b57\u6bb5\u3002\u5e76\u4e14\u5b83\u5728\u5b9e\u9645\u4e0a\u62a5\u65f6\u4e0d\u4f1a\u643a\u5e26\u5165\u5e93\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// \u6b64\u5904\u793a\u4f8b\u5df2\u521d\u59cb\u5316\u4e86\u9ed8\u8ba4\u7684g0\u3001g2\u548cg3\u4e24\u4e2a\u5b9e\u4f8b\ngdp('init', 'xxx','xxx', { ... });\ngdp('g2.init', 'xx2','xx2', { ... });\ngdp('g3.init', 'xx3','xx3', { ... });\n\n\ngdp('track', 'sign_in', {\n  userId: '0114523',\n  userName: 'ZhangSan',\n  city: 'HangZhou',\n  &&sendTo: ['g2', 'g3']\n});\n\ngdp('trackTimerEnd', 'timerId', {\n  userId: '0114523',\n  userName: 'ZhangSan',\n  city: 'HangZhou',\n  &&sendTo: ['g2', 'g3']\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u5df2\u7ecf\u6b63\u786e\u521d\u59cb\u5316\u4e863\u4e2a\u5b9e\u4f8b\uff0c\u57cb\u70b9\u4ee3\u7801\u4f1a\u5c06\u8be5\u57cb\u70b9\u4e8b\u4ef6\u53d1\u9001\u7ed9 ",(0,i.jsx)(n.code,{children:"g0"})," \u5e76\u540c\u65f6\u5206\u522b\u590d\u5236\u53d1\u9001\u7ed9 ",(0,i.jsx)(n.code,{children:"g2"}),"\u548c",(0,i.jsx)(n.code,{children:"g3"})," \u4e24\u4e2a\u5b9e\u4f8b\u3002\u4f1a\u53d1\u9001\u7ed9",(0,i.jsx)(n.code,{children:"g0"}),"\u7684\u539f\u56e0\u662f\uff0c",(0,i.jsx)(n.code,{children:"track"})," \u7684\u8c03\u7528\u7b49\u540c\u4e8e ",(0,i.jsx)(n.code,{children:"g0.track"}),"\uff08\u53c2\u8003\u4e0b\u6587\u591a\u5b9e\u4f8b\u89c4\u5219\uff09\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\u4f7f\u7528\u7684\u903b\u8f91\u662f\uff0c\u8c03\u7528\u7684\u5b9e\u4f8b\u4f1a\u88ab\u53d1\u9001\uff0c\u540c\u65f6\u590d\u5236\u53d1\u9001\u7ed9",(0,i.jsx)(n.code,{children:"&&senTo"}),"\u6307\u5b9a\u7684\u5b9e\u4f8b\u3002\u8c03\u7528\u548c\u6307\u5b9a\u590d\u5236\u7684\u5b9e\u4f8b\u540d\u4e3a\u540c\u4e00\u4e2a\u65f6\uff0c\u53ea\u53d1\u9001\u4e00\u6b21\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u590d\u5236\u53d1\u9001\u57cb\u70b9\u65f6\uff0c\u53ea\u4f1a\u5b8c\u5168\u590d\u5236\u4e8b\u4ef6\u540d\u548c\u4e8b\u4ef6\u5c5e\u6027\uff0c\u901a\u7528\u5b57\u6bb5\u4f8b\u5982session\u3001userId\u7b49\uff0c\u8fd8\u662f\u6307\u5b9a\u5b9e\u4f8b\u81ea\u8eab\u7684\u503c\u3002\u5e76\u4e14",(0,i.jsx)(n.strong,{children:"\u4e0d\u4f1a\u5e26\u4e0a"}),"\u6307\u5b9a\u5b9e\u4f8b\u7684\u57cb\u70b9\u901a\u7528\u5c5e\u6027\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1",children:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5c06\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\u53d1\u9001\u7ed9\u4e00\u4e2a\u6216\u591a\u4e2a\u5b9e\u4f8b\u3002\u4f8b\u5982\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u8bf4\u660e\u4e86\u5982\u4f55\u5c06\u67d0\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\u53d1\u9001\u7ed9\u591a\u4e2a\u5b9e\u4f8b\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"data-gio-imp-sendto"})," \u81ea\u5b9a\u4e49\u5c5e\u6027\u6807\u8bb0\u6307\u5b9a\u5f53\u524d\u8282\u70b9\u7684\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u53d1\u9001\u7684\u76ee\u6807\u5b9e\u4f8b\uff0c\u5b9e\u4f8b\u5b57\u7b26\u4e32\u5207\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// \u6b64\u5904\u793a\u4f8b\u5df2\u521d\u59cb\u5316\u4e86\u9ed8\u8ba4\u7684g0\u3001g2\u548cg3\u4e24\u4e2a\u5b9e\u4f8b\ngdp('init', 'xxx','xxx', { ... });\ngdp('g2.init', 'xx2','xx2', { ... });\ngdp('g3.init', 'xx3','xx3', { ... });\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div\n  id="imp_11"\n  data-gio-imp-track="imp_cat_var"\n  data-gio-track-name="cat_picture"\n  data-gio-track-time="20210601"\n  data-gio-imp-sendto="g2,g3"\n>\n  \u8fd9\u662f\u4e00\u4e2a\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u7684\u8282\u70b9\n</div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u5df2\u7ecf\u6b63\u786e\u521d\u59cb\u5316\u4e863\u4e2a\u5b9e\u4f8b\uff0c\u57cb\u70b9\u4ee3\u7801\u4f1a\u5c06\u8be5\u57cb\u70b9\u4e8b\u4ef6\u53d1\u9001\u7ed9 ",(0,i.jsx)(n.code,{children:"g0"})," \u5e76\u540c\u65f6\u5206\u522b\u590d\u5236\u53d1\u9001\u7ed9 ",(0,i.jsx)(n.code,{children:"g2"}),"\u548c",(0,i.jsx)(n.code,{children:"g3"})," \u4e24\u4e2a\u5b9e\u4f8b\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\u4f7f\u7528\u7684\u903b\u8f91\u662f\uff0c\u4e3b\u5b9e\u4f8b\u4f1a\u88ab\u53d1\u9001\uff0c\u540c\u65f6\u590d\u5236\u53d1\u9001\u7ed9",(0,i.jsx)(n.code,{children:"data-gio-imp-sendto"}),"\u6307\u5b9a\u7684\u5b9e\u4f8b\u3002\u4e3b\u5b9e\u4f8b\u548c\u6307\u5b9a\u590d\u5236\u7684\u5b9e\u4f8b\u540d\u4e3a\u540c\u4e00\u4e2a\u65f6\uff0c\u53ea\u53d1\u9001\u4e00\u6b21\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u590d\u5236\u53d1\u9001\u57cb\u70b9\u65f6\uff0c\u53ea\u4f1a\u5b8c\u5168\u590d\u5236\u4e8b\u4ef6\u540d\u548c\u4e8b\u4ef6\u5c5e\u6027\uff0c\u901a\u7528\u5b57\u6bb5\u4f8b\u5982session\u3001userId\u7b49\uff0c\u8fd8\u662f\u6307\u5b9a\u5b9e\u4f8b\u81ea\u8eab\u7684\u503c\u3002\u5e76\u4e14",(0,i.jsx)(n.strong,{children:"\u4e0d\u4f1a\u5e26\u4e0a"}),"\u6307\u5b9a\u5b9e\u4f8b\u7684\u57cb\u70b9\u901a\u7528\u5c5e\u6027\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u591a\u5b9e\u4f8b\u89c4\u5219",children:"\u591a\u5b9e\u4f8b\u89c4\u5219"}),"\n",(0,i.jsx)(n.h3,{id:"1\u521d\u59cb\u5316\u914d\u7f6e\u9879",children:"1\u3001\u521d\u59cb\u5316\u914d\u7f6e\u9879"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cookieDomain"}),"\u3001",(0,i.jsx)(n.code,{children:"debug"}),"\u3001",(0,i.jsx)(n.code,{children:"forceLogin"}),"\u3001",(0,i.jsx)(n.code,{children:"hashtag"}),"\u3001",(0,i.jsx)(n.code,{children:"originalSource"}),"\u3001",(0,i.jsx)(n.code,{children:"performance"})," \u548c ",(0,i.jsx)(n.code,{children:"storageType"})," \u914d\u7f6e\u9879",(0,i.jsx)(n.strong,{children:"\u4ec5\u4e3b\u5b9e\u4f8b\u8bbe\u503c\u751f\u6548"}),"\uff0c\u5373\u5b50\u5b9e\u4f8b\u7684\u8868\u73b0\u4e0e\u4e3b\u5b9e\u4f8b\u76f8\u540c\u3002\u56e0\u6b64\u60a8\u65e0\u6cd5\u4e3a\u5b50\u5b9e\u4f8b\u5355\u72ec\u8bbe\u7f6e\u8fd9\u4e9b\u914d\u7f6e\u9879"]}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4e86\u4ee5\u4e0a\u51e0\u4e2a\u521d\u59cb\u5316\u914d\u7f6e\u9879\u5b50\u5b9e\u4f8b\u65e0\u6cd5\u4f7f\u7528\u4ee5\u5916\uff0c\u5176\u4ed6\u521d\u59cb\u5316\u914d\u7f6e\u9879\u5747\u53ef\u5355\u72ec\u4e3a\u5b50\u5b9e\u4f8b\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u591a\u5b9e\u4f8b\u80fd\u529b\u65f6\uff0c\u5efa\u8bae\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"storageType"})," \u4e3alocalstorage\uff0c\u907f\u514d\u56e0\u5b57\u6bb5\u8fc7\u591a\u8fc7\u957f\u5bfc\u81f4cookie\u8d85\u9650\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u8bbe\u5907id\u533f\u540d\u7528\u6237id",children:"2\u3001\u8bbe\u5907id\uff08\u533f\u540d\u7528\u6237Id\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3b\u5b9e\u4f8b\u4e0e\u5b50\u5b9e\u4f8b\u5171\u4eab\u540c\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"deviceId"}),"\u3002\u56e0\u6b64\uff0c",(0,i.jsx)(n.code,{children:"forceLogin"})," \u914d\u7f6e\u9879",(0,i.jsx)(n.strong,{children:"\u4ec5\u4e3b\u5b9e\u4f8b\u8bbe\u503c\u751f\u6548"}),"\uff0c\u5f53\u4e14\u4ec5\u5f53\u4e3b\u5b9e\u4f8b\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"identify"})," \u540e\uff0c\u6240\u6709\u5b9e\u4f8b\u624d\u4f1a\u5f00\u59cb\u53d1\u6570\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u7528\u6237\u4fe1\u606f",children:"3\u3001\u7528\u6237\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff081\uff09"})," \u4e3b\u5b9e\u4f8b\u4e0e\u5b50\u5b9e\u4f8b\u7684\u7528\u6237\u4fe1\u606f\uff08userId\u3001userKey\u3001sessionId\uff09\u4e92\u76f8\u9694\u79bb\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff082\uff09"})," \u7528\u6237\u5c5e\u6027\u4e0d\u652f\u6301\u591a\u5b9e\u4f8b\u590d\u5236\u53d1\u9001\uff0c\u4ecd\u7136\u9700\u8981\u5355\u72ec\u8c03\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"4api\u8c03\u7528",children:"4\u3001api\u8c03\u7528"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getPlugins"}),"\u3001",(0,i.jsx)(n.code,{children:"getDeviceId"}),"\u3001",(0,i.jsx)(n.code,{children:"updateImpression"})," \u8fd93\u4e2aapi\u65e0\u9700\uff08\u65e0\u6cd5\uff09\u6307\u5b9a\u5b9e\u4f8b\uff0c\u56e0\u4e3a\u4ed6\u4eec\u662f\u5168\u5c40api\u3002\u5176\u4ed6\u672a\u5217\u51fa\u7684api\u90fd\u53ef\u4ee5\u6307\u5b9a\u5b9e\u4f8b\u8fdb\u884c\u8c03\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"5sdk\u63d2\u4ef6\u76f8\u5173",children:"5\u3001SDK\u63d2\u4ef6\u76f8\u5173"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff081\uff09"})," \u6b63\u5e38web\u7ad9\u70b9\u4e2d\u7684\u65e0\u57cb\u70b9\u4e8b\u4ef6",(0,i.jsx)(n.strong,{children:"\u4ec5\u4e3b\u5b9e\u4f8b"}),"\u4f1a\u4e0a\u62a5\uff0c\u5176\u4ed6\u5b50\u5b9e\u4f8b\u4e0d\u4f1a\u4e0a\u62a5\uff08\u65e0\u8bba\u662f\u5426\u5f00\u542f\u65e0\u57cb\u70b9\uff09\uff0c\u60a8\u4f7f\u7528Web\u5708\u9009\u65f6\uff0c\u8bf7\u5bf9\u4e3b\u5b9e\u4f8b\u8fdb\u884c\u5708\u9009\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff082\uff09"})," \u540c\u65f6\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u5185\u5d4c\u9875\u6253\u901a\u6216App\u5185\u5d4c\u9875\u6253\u901a\u65f6\uff0c",(0,i.jsx)(n.strong,{children:"\u4e3b\u5b9e\u4f8b\u548c\u6253\u901a\u7684\u5b9e\u4f8b"}),"\u90fd\u4f1a\u4e0a\u62a5\u65e0\u57cb\u70b9\u4e8b\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff083\uff09"})," \u6240\u6709\u5b9e\u4f8b\u5728\u914d\u7f6e\u9879\u6b63\u786e\u7684\u60c5\u51b5\u4e0b\uff0c\u5747\u53ef\u4ee5\u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u548c\u79fb\u52a8\u7aef\u6253\u901a\u7684\u5b9e\u4f8b\u3002\u591a\u4e2a\u5b9e\u4f8b\u914d\u7f6e\u503c\u4e00\u81f4\u65f6\uff0c\u5148\u521d\u59cb\u5316\u5b8c\u6210\u7684\u5b9e\u4f8b\u6253\u901a\u3002\u6362\u8a00\u4e4b\uff0c\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\u53ef\u4ee5\u4e0e\u914d\u7f6e\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u6216\u79fb\u52a8\u7aef\u6253\u901a\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff084\uff09"})," \u4e0e\u5c0f\u7a0b\u5e8f\u6253\u901a\u65f6\uff0c\u5982\u679c\u6253\u901a\u7684\u662f\u540e\u521d\u59cb\u5316\u5b8c\u6210\u7684\u5b50\u5b9e\u4f8b\uff0c\u5219\u53ef\u80fd\u4f1a\u9020\u6210\u4e3b\u5b9e\u4f8b\u524d\u540e\u4e8b\u4ef6deviceId\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\uff08\u56e0\u4e3a\u5b9e\u4f8b\u5171\u4eabdeviceId\uff0c\u4e0e\u5c0f\u7a0b\u5e8f\u6253\u901a\u540e\u4f1a\u4fee\u6539\u4e3a\u5c0f\u7a0b\u5e8f\u7684deviceId\uff09\u3002\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236\u521d\u59cb\u5316\u987a\u5e8f\uff08\u5148\u521d\u59cb\u5316\u6253\u901a\u7684\u5b9e\u4f8b\uff09\u6216 \u5148\u521d\u59cb\u5316\u4e0d\u6253\u901a\u7684\u4e3b\u5b9e\u4f8b\u5f00\u542fforceLogin\uff0c\u7b49\u540e\u521d\u59cb\u5316\u5b8c\u6210\u7684\u5b50\u5b9e\u4f8b\u6253\u901a\u540e\u8c03\u7528 identify \u8bbe\u4e3a\u5c0f\u7a0b\u5e8f\u7684deviceId \u5373\u53ef\u89e3\u51b3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u901a\u7684\u5b9e\u4f8b\u521d\u59cb\u5316\u5b8c\u6210\u5373\u53ef\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"localstorage -> value -> giou"})," \u83b7\u53d6\u5c0f\u7a0b\u5e8f\u7684deviceId\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"6\u5176\u4ed6\u89c4\u5219",children:"6\u3001\u5176\u4ed6\u89c4\u5219"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff081\uff09"})," \u540c\u4e00\u522b\u540d\u7684\u5b9e\u4f8b\u4ec5\u80fd\u521d\u59cb\u5316\u4e00\u6b21\u3002\u672a\u96c6\u6210\u672c\u63d2\u4ef6\u65f6\uff0c\u521d\u59cb\u5316\u5b50\u5b9e\u4f8b\u4f1a\u5931\u8d25\uff0c\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5b9e\u4f8b\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff082\uff09"})," \u5982\u679c\u60a8\u6309\u9ed8\u8ba4\u65b9\u5f0f\u8c03\u7528api\uff0c\u5219\u9ed8\u8ba4\u8c03\u7528\u7684\u5b9e\u9645\u662f",(0,i.jsx)(n.code,{children:"g0"}),"\u5b9e\u4f8b\uff0c\u4e3a\u4e86\u4fdd\u6301\u8c03\u7528\u65b9\u5f0f\u5411\u4e0b\u517c\u5bb9\u3002\u5373\u9ed8\u8ba4\u4e0d\u6dfb\u52a0\u522b\u540d\u65f6\u8c03\u7528api\uff0c\u5b9e\u9645\u4e0a\u662f\u5728\u4f7f\u7528",(0,i.jsx)(n.code,{children:"g0"}),"\u8fd9\u4e2a\u522b\u540d\u7684\u5b9e\u4f8b\u3002\u5373\u5b8c\u5168\u517c\u5bb9\u539f\u6765\u6ca1\u6709\u4f7f\u7528\u591a\u5b9e\u4f8b\u65f6\u7684api\u8c03\u7528\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"gdp('init', accountId, datasourceId, { ...\u5b9e\u4f8b\u521d\u59cb\u5316\u914d\u7f6e\u9879 });\n// \u7b49\u540c\u4e8e\u2193\u2193\u2193\ngdp('g0.init', accountId, datasourceId, { ...\u5b9e\u4f8b\u521d\u59cb\u5316\u914d\u7f6e\u9879 });\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff083\uff09"})," SDK\u4e0d\u533a\u5206\u662f\u5426\u4f7f\u7528\u4e86\u522b\u540d\u6765\u4f5c\u4e3a\u8fa8\u522b\u4e3b\u5b9e\u4f8b\u7684\u6761\u4ef6\uff0c\u800c\u662f",(0,i.jsx)(n.strong,{children:"\u7b2c\u4e00\u4e2a\u521d\u59cb\u5316\u5b8c\u6210"}),"\u7684\u5b9e\u4f8b\u5c31\u4f1a\u88ab\u8ba4\u4e3a\u662f\u4e3b\u5b9e\u4f8b\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"gdp('g1.init', accountId, datasourceId, { ...\u5b9e\u4f8b\u521d\u59cb\u5316\u914d\u7f6e\u9879 });\ngdp('init', accountId, datasourceId, { ...\u5b9e\u4f8b\u521d\u59cb\u5316\u914d\u7f6e\u9879 });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5148\u521d\u59cb\u5316\u522b\u540d\u4e3a",(0,i.jsx)(n.code,{children:"g1"}),"\u7684\u5b9e\u4f8b\uff0c\u540e\u521d\u59cb\u5316\u6ca1\u6709\u522b\u540d\u7684\u5b9e\u4f8b\uff0c\u5219\u4e3b\u5b9e\u4f8b\u4e3a",(0,i.jsx)(n.code,{children:"g1"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uff084\uff09"})," \u672c\u63d2\u4ef6\u4e3a\u72ec\u7acb\u63d2\u4ef6\uff0c\u96c6\u6210\u5168\u91cf(full)\u7248\u672c\u7684SDK\u65f6\uff0c\u4e0d\u5305\u542b\u672c\u63d2\u4ef6\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u591a\u5b9e\u4f8b\u65f6\uff0c\u4e0d\u8bba\u662f\u5426\u96c6\u6210\u4e86\u5168\u91cf\u7248\u672c\u7684SDK\uff0c\u90fd\u8981\u6ce8\u518c\u672c\u63d2\u4ef6\u4ee5\u6fc0\u6d3b\u591a\u5b9e\u4f8b\u7684\u80fd\u529b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u57cb\u70b9\u3001\u57cb\u70b9\u8ba1\u65f6\u3001\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u591a\u53d1\u4e4b\u524d\uff0c\u60a8\u4ecd\u7136\u9700\u8981\u5728\u5e73\u53f0\u4e2d\u6bcf\u4e2a\u5b9e\u4f8b\u7684\u9879\u76ee\u6570\u636e\u6e90\u4e2d\u914d\u7f6e\u4e8b\u4ef6\u4ee5\u53ca\u4e8b\u4ef6\u5c5e\u6027\u3002",(0,i.jsx)(n.a,{href:"/knowledge/basicknowledge/trackEventUse",children:"\u57cb\u70b9\u4f7f\u7528\u89c4\u8303"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var i=s(7294);const d={},c=i.createContext(d);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);