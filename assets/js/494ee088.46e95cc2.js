"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6658],{5567:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=i(5893),r=i(1151);const t={sidebar_position:4,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e"},c=void 0,d={id:"compliance/minpCompliance",title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",description:"\u6536\u96c6\u7684\u6570\u636e",source:"@site/knowledge/compliance/minpCompliance.md",sourceDirName:"compliance",slug:"/compliance/minpCompliance",permalink:"/growingio-sdk-docs/knowledge/compliance/minpCompliance",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/compliance/minpCompliance.md",tags:[],version:"current",lastUpdatedAt:1720058077,formattedLastUpdatedAt:"Jul 4, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"knowledge",previous:{title:"Web JS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/knowledge/compliance/webCompliance"},next:{title:"HarmonyOS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/knowledge/compliance/harmonyosCompliance"}},s={},l=[{value:"\u6536\u96c6\u7684\u6570\u636e",id:"\u6536\u96c6\u7684\u6570\u636e",level:2},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",id:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",level:3},{value:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",level:2},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2},{value:"GDPR",id:"gdpr",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u6536\u96c6\u7684\u6570\u636e",children:"\u6536\u96c6\u7684\u6570\u636e"}),"\n",(0,o.jsx)(n.p,{children:"\u6309\u7167 GDPR \u7684\u754c\u5b9a\uff0cGrowingIO \u5c5e\u4e8e\u6570\u636e\u5904\u7406\u65b9\uff0c\u8fd9\u662f\u56e0\u4e3a GrowingIO \u4f1a\u6309\u7167\u5ba2\u6237\u7684\u6307\u793a\u4ee3\u8868\u5ba2\u6237\u6536\u96c6\u548c\u5904\u7406\u6570\u636e\u3002\u6211\u4eec\u7684\u5ba2\u6237\u5219\u662f\u6570\u636e\u63a7\u5236\u65b9\uff0c\u4ed6\u4eec\u62e5\u6709\u6240\u6709\u76f8\u5173\u6743\u5229\uff0c\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u968f\u65f6\u63a7\u5236\u662f\u5426\u5f00\u542f\u6570\u636e\u6536\u96c6\u548c\u5904\u7406\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u6536\u96c6\u4fe1\u606f\u662f\u4e3a\u4e86\u60a8\u7684\u5c0f\u7a0b\u5e8f\u5411\u6240\u6709\u7528\u6237\u63d0\u4f9b\u66f4\u597d\u7684\u670d\u52a1\u3002GrowingIO \u5c0f\u7a0b\u5e8f SDK \u5c06\u4f1a\u6536\u96c6\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u76f8\u5173\u7684\u73af\u5883\u4fe1\u606f\uff0c\u5305\u62ec\u5fae\u4fe1\u7248\u672c\u53f7\uff0c\u5c0f\u7a0b\u5e8f\u573a\u666f\u503c\uff0c\u8bbe\u5907\u4fe1\u606f\uff0c\u7f51\u7edc\u4fe1\u606f\u3002\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684\u672c\u5730\u5b58\u50a8\u6765\u5b58\u50a8 SDK \u81ea\u52a8\u751f\u6210\u7684\u8bbf\u95ee\u7528\u6237ID\uff08\u7528\u4e8e\u6807\u8bb0\u8bbf\u95ee\u7528\u6237\uff09\u3001\u767b\u5f55\u7528\u6237Id\u3001session\u4fe1\u606f\u3002\u5176\u4ed6\u7528\u6237\u4fe1\u606f\u5747\u9700\u7528\u6237\u6388\u6743\u540e\u7531\u5f00\u53d1\u65b9\u4e0a\u62a5\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1aopenId\u3001unionId\u3001\u5fae\u4fe1\u5934\u50cf\u3001\u6635\u79f0\u3001\u5b9a\u4f4d\u7b49\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5408\u89c4\u6b65\u9aa4",children:"\u5408\u89c4\u6b65\u9aa4"}),"\n",(0,o.jsx)(n.h3,{id:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",children:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"}),"\n",(0,o.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003",(0,o.jsx)(n.a,{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/",children:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7528\u6237\u9690\u79c1\u4fdd\u62a4"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",children:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"}),"\n",(0,o.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u57fa\u7840SDK\u4e0d\u5305\u542b\u6570\u636e\u52a0\u5bc6\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u521d\u59cb\u5316\u65f6\u6ce8\u518c\u52a0\u5bc6\u63d2\u4ef6\u6765\u5f00\u542f\u8bf7\u6c42\u6570\u636e\u52a0\u5bc6\uff0c\u4ee5\u589e\u5f3a\u6570\u636e\u4f20\u8f93\u7684\u5b89\u5168\u6027\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528\u8bf7\u53c2\u8003",(0,o.jsx)(n.a,{href:"/docs/miniprogram/plugins/compress",children:"SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93 compress"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",children:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"}),"\n",(0,o.jsx)(n.p,{children:"\u5c0f\u7a0b\u5e8f SDK \u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u9ed8\u8ba4\u91c7\u7528\u8282\u6d41 1 \u79d2\u949f\u53d1\u9001\u7684\u7b56\u7565\uff0c\u5f53\u8282\u6d41\u961f\u5217\u91cc\u5927\u4e8e50\u6761\u884c\u4e3a\u6570\u636e\u540e\u7acb\u5373\u6253\u5305\u53d1\u9001\u4e00\u6b21\u3002\u884c\u4e3a\u6570\u636e\u7f13\u5b58\u91c7\u7528\u5185\u5b58\u7f13\u5b58\uff0c\u4e0d\u4f1a\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u5b58\u50a8\u3002\u5982\u679c\u60a8\u9700\u8981\u8c03\u6574\u53d1\u9001\u7b56\u7565\uff0c\u8bf7\u53c2\u8003\u521d\u59cb\u5316\u914d\u7f6e\u9879 uploadInterval\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u5f00\u542f\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f(forceLogin \u8bbe\u7f6e\u4e3a true)\u662f\uff0c\u5728\u8c03\u7528 identify \u63a5\u53e3\u4e4b\u524d\u7684\u6240\u6709\u884c\u4e3a\u6570\u636e\u90fd\u4f1a\u91c7\u7528\u5185\u5b58\u7f13\u5b58\u3002\u5f85\u8c03\u7528 identify \u540e\u7acb\u5373\u4e0a\u62a5\u7f13\u5b58\u7684\u884c\u4e3a\u6570\u636e\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"gdpr",children:"GDPR"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84",children:"\u200bGeneral Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"}),"\u200b"]}),"\n",(0,o.jsxs)(n.p,{children:["GrowingIO \u4f5c\u4e3a\u6570\u636e\u5904\u7406\u65b9\uff0c\u4e3a\u7b26\u5408 GDPR\uff0c\u5c0f\u7a0b\u5e8f SDK \u63d0\u4f9b\u8bbe\u7f6e\u63a5\u53e3\uff0c\u5728\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\u65f6\uff0c\u521d\u59cb\u5316\u65f6\u5c06",(0,o.jsx)(n.code,{children:"dataCollect"}),"\u8bbe\u7f6e\u4e3a ",(0,o.jsx)(n.code,{children:"false"})," \uff0c\u7981\u6b62\u6570\u636e\u91c7\u96c6\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u8c03\u7528",(0,o.jsx)(n.code,{children:"setOption"}),"\u8bbe\u7f6e",(0,o.jsx)(n.code,{children:"dataCollect"}),"\u4e3a ",(0,o.jsx)(n.code,{children:"true"}),"\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002"]}),"\n",(0,o.jsx)("b",{children:"\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"var userAgreePolicy = {\u672c\u5730\u5b58\u50a8\u4e2d\u83b7\u53d6\u662f\u5426\u5df2\u540c\u610f\u9690\u79c1\u534f\u8bae}\ngdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {\n  version: '1.0.0',\n  dataCollect: userAgreePolicy,\n  ... // \u5176\u4ed6\u521d\u59cb\u5316\u914d\u7f6e\u9879\u6309\u9700\u914d\u7f6e\n});\n\n// \u5c0f\u7a0b\u5e8f\u4ee3\u7801\n...\n\n// \u5f39\u7a97\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\u6253\u5f00\u6570\u636e\u91c7\u96c6\nif (userAgreePolicy) {\n  gdp('setOption', 'dataCollect', true);\n}\n// \u5411\u672c\u5730\u5b58\u50a8\u4e2d\u4fdd\u5b58\u540c\u610f\u72b6\u6001\n...\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var o=i(7294);const r={},t=o.createContext(r);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);