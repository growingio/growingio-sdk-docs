"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1021],{2193:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(5893),d=i(1151);const r={sidebar_position:5,title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898"},l=void 0,o={id:"question/minp",title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898",description:"1.\u5c0f\u7a0b\u5e8fSDK\u7684\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6\u90fd\u6709\u54ea\u4e9b\uff1f",source:"@site/docs/question/minp.md",sourceDirName:"question",slug:"/question/minp",permalink:"/growingio-sdk-docs/docs/question/minp",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/question/minp.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5c0f\u7a0b\u5e8f \u5e38\u89c1\u95ee\u9898"},sidebar:"questionSidebar",previous:{title:"Web JS \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/docs/question/web-js"},next:{title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs/docs/question/other"}},t={},c=[{value:"1.\u5c0f\u7a0b\u5e8fSDK\u7684\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6\u90fd\u6709\u54ea\u4e9b\uff1f",id:"1\u5c0f\u7a0b\u5e8fsdk\u7684\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6\u90fd\u6709\u54ea\u4e9b",level:3},{value:"2.\u96c6\u6210SDK\u540e\uff0c\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f",id:"2\u96c6\u6210sdk\u540e\u63a5\u6536\u4e0d\u5230\u6570\u636e",level:3},{value:"3.\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\uff0c\u4ee5\u53ca GDPR \u8be5\u600e\u4e48\u8bbe\u7f6e\uff1f",id:"3\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\u4ee5\u53ca-gdpr-\u8be5\u600e\u4e48\u8bbe\u7f6e",level:3},{value:"4.\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5Page\u4e8b\u4ef6\uff1f",id:"4\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5page\u4e8b\u4ef6",level:3},{value:"5.\u521d\u59cb\u5316\u5f00\u542fforceLogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86\uff1f",id:"5\u521d\u59cb\u5316\u5f00\u542fforcelogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86",level:3},{value:"6. \u4e0d\u652f\u6301 mpvue \u548c WePY \uff1f",id:"6-\u4e0d\u652f\u6301-mpvue-\u548c-wepy-",level:3},{value:"7. \u5c0f\u7a0b\u5e8fSDK\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417\uff1f",id:"7-\u5c0f\u7a0b\u5e8fsdk\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417",level:3},{value:"8. \u4f7f\u7528\u4e863.8\u7248\u672c\u7684SDK\u4ee5\u540e\u8fd0\u8425SDK(\u5f39\u7a97\u3001\u8d44\u6e90\u4f4d)\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86\uff1f",id:"8-\u4f7f\u7528\u4e8638\u7248\u672c\u7684sdk\u4ee5\u540e\u8fd0\u8425sdk\u5f39\u7a97\u8d44\u6e90\u4f4d\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86",level:3},{value:"9. \u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e\uff1f",id:"9-\u963f\u91cc\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e",level:3},{value:"10. \u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e00\u81f4)\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e0d\u4e00\u81f4)\uff1f",id:"10-\u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e00\u81f4\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e0d\u4e00\u81f4",level:3},{value:"11. \u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appId\u6216\u5176\u4ed6\u914d\u7f6e\u9879\uff0c\u662f\u5426\u53ef\u4ee5\u5728\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e2d\u6216\u63a5\u53e3\u8c03\u7528\u540e\u83b7\u53d6\u5230appId\u540e\u518d\u521d\u59cb\u5316SDK\uff1f",id:"11-\u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appid\u6216\u5176\u4ed6\u914d\u7f6e\u9879\u662f\u5426\u53ef\u4ee5\u5728\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e2d\u6216\u63a5\u53e3\u8c03\u7528\u540e\u83b7\u53d6\u5230appid\u540e\u518d\u521d\u59cb\u5316sdk",level:3}];function p(e){const n={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"1\u5c0f\u7a0b\u5e8fsdk\u7684\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6\u90fd\u6709\u54ea\u4e9b",children:"1.\u5c0f\u7a0b\u5e8fSDK\u7684\u9884\u5b9a\u4e49\u57cb\u70b9\u4e8b\u4ef6\u90fd\u6709\u54ea\u4e9b\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," onShareAppMessage\u8bbe\u7f6e\u8f6c\u53d1\u5206\u4eab\u7ed9\u670b\u53cb\uff0conShareTimeline\u5206\u4eab\u5230\u670b\u53cb\u5708\uff0conAddToFavorites\u6dfb\u52a0\u6536\u85cf\u3002\u5177\u4f53\u652f\u6301\u60c5\u51b5\u8bf7\u53c2\u8003\u5404\u4e2a\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"2\u96c6\u6210sdk\u540e\u63a5\u6536\u4e0d\u5230\u6570\u636e",children:"2.\u96c6\u6210SDK\u540e\uff0c\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u8bf7\u5c1d\u8bd5\u4ee5\u4e0b\u6392\u67e5\u65b9\u5f0f\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5 serverUrl \u914d\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5\u662f\u5426\u5df2\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u540e\u53f0\u6dfb\u52a0\u8bf7\u6c42\u670d\u52a1\u5668\u57df\u540d\u767d\u540d\u5355"}),"\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5\u662f\u5426\u5173\u95ed dataCollect"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\u4ee5\u53ca-gdpr-\u8be5\u600e\u4e48\u8bbe\u7f6e",children:"3.\u7528\u6237\u4fe1\u606f\u4fdd\u62a4\uff0c\u4ee5\u53ca GDPR \u8be5\u600e\u4e48\u8bbe\u7f6e\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u53c2\u8003",(0,s.jsx)(n.a,{href:"/knowledge/compliance/minpCompliance",children:"\u5c0f\u7a0b\u5e8fSDK\u5408\u89c4\u8bf4\u660e"})]}),"\n",(0,s.jsx)(n.h3,{id:"4\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5page\u4e8b\u4ef6",children:"4.\u5c0f\u7a0b\u5e8f\u4e0d\u4e0a\u62a5Page\u4e8b\u4ef6\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u8bf7\u68c0\u67e5\u5c0f\u7a0b\u5e8f\u5185\u662f\u5426\u6709\u91cd\u5199Page\u7684\u903b\u8f91\uff0c\u6216\u8005\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9\u7c7b\u4f3c\u5e26\u6709\u52a8\u6548\u7684Page\u63d2\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"5\u521d\u59cb\u5316\u5f00\u542fforcelogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86",children:"5.\u521d\u59cb\u5316\u5f00\u542fforceLogin\u4ee5\u540e\u4e0d\u4e0a\u62a5\u4efb\u4f55\u4e8b\u4ef6\u4e86\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u8bf7",(0,s.jsx)(n.a,{href:"/docs/miniprogram/initSettings#forcelogin",children:"\u53c2\u8003\u6587\u6863"}),"\u6b63\u786e\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"6-\u4e0d\u652f\u6301-mpvue-\u548c-wepy-",children:"6. \u4e0d\u652f\u6301 mpvue \u548c WePY \uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," mpvue\u548cWePY\u4e3a\u8fc7\u65f6\u6846\u67b6\uff0c\u95ee\u9898\u8f83\u591a\uff0c\u4e0d\u518d\u652f\u6301\uff0c\u5efa\u8bae\u5347\u7ea7\u4e3auniapp\u6216\u5176\u4ed6\u652f\u6301\u7684\u6846\u67b6\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"7-\u5c0f\u7a0b\u5e8fsdk\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417",children:"7. \u5c0f\u7a0b\u5e8fSDK\u652f\u6301\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7684\u6570\u636e\u91c7\u96c6\u5417\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u652f\u6301\u57cb\u70b9\uff0cSDK\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u6216\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5c0f\u90e8\u4ef6\u4e2d\u4f1a\u81ea\u52a8\u5207\u6362\u4e3a\u63d2\u4ef6\u6a21\u5f0f\uff0c\u5728\u63d2\u4ef6\u4e2d\u53d1\u9001VISIT\u4e8b\u4ef6\uff1b\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u53c2\u7684\u65b9\u5f0f\u5c06 gdp \u65b9\u6cd5\u4ece\u5c0f\u7a0b\u5e8f\u4f20\u5165\u8fdb\u884c\u57cb\u70b9\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"8-\u4f7f\u7528\u4e8638\u7248\u672c\u7684sdk\u4ee5\u540e\u8fd0\u8425sdk\u5f39\u7a97\u8d44\u6e90\u4f4d\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86",children:"8. \u4f7f\u7528\u4e863.8\u7248\u672c\u7684SDK\u4ee5\u540e\u8fd0\u8425SDK(\u5f39\u7a97\u3001\u8d44\u6e90\u4f4d)\u7ec4\u4ef6\u62a5\u9519\u6216\u65e0\u6cd5\u4f7f\u7528\u4e86\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u65b0\u7248SDK\u67b6\u6784\u8c03\u6574\u5bfc\u81f4\u5b58\u53d6\u503c\u903b\u8f91\u4e0d\u540c\u5bfc\u81f4\u3002\u8bf7\u540c\u6b65\u5347\u7ea7\u8fd0\u8425SDK\u5373\u53ef\uff0c\u65e0\u9700\u505a\u5176\u4ed6\u4fee\u6539\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"9-\u963f\u91cc\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e",children:"9. \u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u5df2\u6dfb\u52a0\u767d\u540d\u5355\u53d1\u5e03\u540e\u4ecd\u6536\u4e0d\u5230\u6570\u636e\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u8bf7\u68c0\u67e5\u662f\u5426\u4e3a\u5148\u53d1\u5e03\u540e\u6dfb\u52a0\u767d\u540d\u5355\uff0c\u6dfb\u52a0\u767d\u540d\u5355\u540e\u91cd\u65b0\u53d1\u5e03\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"10-\u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e00\u81f4\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee\u5373\u8bbf\u95ee\u7528\u6237id\u4e0d\u4e00\u81f4",children:"10. \u4e3a\u4f55\u5c0f\u7a0b\u5e8f\u6302\u8d77\u540e\u518d\u8fdb\u5165\u6709\u65f6\u662f\u540c\u4e00\u6b21\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e00\u81f4)\u6709\u65f6\u53c8\u4f1a\u662f\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee(\u5373\u8bbf\u95ee\u7528\u6237Id\u4e0d\u4e00\u81f4)\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u8bf7\u68c0\u67e5\u7528\u6237\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u4e0b\u4e24\u79cd\u573a\u666f\u4f1a\u88abSDK\u89c6\u4e3a\u4e00\u6b21\u65b0\u7684\u8bbf\u95ee\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e24\u6b21\u8fdb\u5165\u573a\u666f\u503c\u4e0d\u4e00\u81f4(\u5373\u8fdb\u5165\u65b9\u5f0f\u4e0d\u540c)\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e24\u6b21\u8fdb\u5165\u573a\u666f\u503c\u4e00\u81f4\uff0c\u4f46\u95f4\u9694\u8d85\u8fc75\u5206\u949f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-\u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appid\u6216\u5176\u4ed6\u914d\u7f6e\u9879\u662f\u5426\u53ef\u4ee5\u5728\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e2d\u6216\u63a5\u53e3\u8c03\u7528\u540e\u83b7\u53d6\u5230appid\u540e\u518d\u521d\u59cb\u5316sdk",children:"11. \u6211\u4eec\u6709\u591a\u4e2a\u73af\u5883\u7684appId\u6216\u5176\u4ed6\u914d\u7f6e\u9879\uff0c\u662f\u5426\u53ef\u4ee5\u5728\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e2d\u6216\u63a5\u53e3\u8c03\u7528\u540e\u83b7\u53d6\u5230appId\u540e\u518d\u521d\u59cb\u5316SDK\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A:"})," \u4e0d\u53ef\u4ee5\uff0cSDK\u521d\u59cb\u5316\u5fc5\u987b\u5728\u5c0f\u7a0b\u5e8fApp\u521d\u59cb\u5316\u52a0\u8f7d\u4e4b\u524d\uff1b\u5982\u679c\u60a8\u6709\u591a\u4e2a\u5c0f\u7a0b\u5e8fappId\u7528\u4e8e\u533a\u5206\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\uff0c\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u5224\u65ad\u7684\u65b9\u5f0f\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(7294);const d={},r=s.createContext(d);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);