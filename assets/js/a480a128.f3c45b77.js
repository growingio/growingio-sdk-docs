"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2630],{7699:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>t});var l=i(5893),d=i(1151);const c={sidebar_position:2,title:"Apple SDK \u5408\u89c4\u8bf4\u660e"},r=void 0,s={id:"compliance/iosCompliance",title:"Apple SDK \u5408\u89c4\u8bf4\u660e",description:"\u9690\u79c1\u534f\u8bae",source:"@site/knowledge/compliance/iosCompliance.md",sourceDirName:"compliance",slug:"/compliance/iosCompliance",permalink:"/growingio-sdk-docs/knowledge/compliance/iosCompliance",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/compliance/iosCompliance.md",tags:[],version:"current",lastUpdatedAt:1722504066,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Apple SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"knowledge",previous:{title:"Android SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/knowledge/compliance/androidCompliance"},next:{title:"Web JS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/knowledge/compliance/webCompliance"}},o={},t=[{value:"\u9690\u79c1\u534f\u8bae",id:"\u9690\u79c1\u534f\u8bae",level:2},{value:"\u9690\u79c1\u534f\u8bae\u586b\u5199",id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",level:2},{value:"\u6536\u96c6\u548c\u83b7\u53d6",id:"\u6536\u96c6\u548c\u83b7\u53d6",level:3},{value:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",level:3},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u65b9\u5f0f\u4e00\u3001\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173",id:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173",level:3},{value:"\u65b9\u5f0f\u4e8c\u3001\u5ef6\u8fdf\u521d\u59cb\u5316",id:"\u65b9\u5f0f\u4e8c\u5ef6\u8fdf\u521d\u59cb\u5316",level:3},{value:"iOS \u6743\u9650\u8bf4\u660e",id:"ios-\u6743\u9650\u8bf4\u660e",level:2},{value:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",level:2},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2},{value:"\u5176\u4ed6\u8bf4\u660e",id:"\u5176\u4ed6\u8bf4\u660e",level:2},{value:"\u5173\u4e8e Privacy manifest \u9690\u79c1\u6e05\u5355",id:"\u5173\u4e8e-privacy-manifest-\u9690\u79c1\u6e05\u5355",level:3},{value:"\u5173\u4e8e GDPR",id:"\u5173\u4e8e-gdpr",level:3},{value:"\u5173\u4e8e IDFA \u5e7f\u544a\u6807\u8bc6\u7b26",id:"\u5173\u4e8e-idfa-\u5e7f\u544a\u6807\u8bc6\u7b26",level:3},{value:"\u4f7f\u7528\u9014\u5f84",id:"\u4f7f\u7528\u9014\u5f84",level:4},{value:"\u5408\u89c4\u98ce\u9669",id:"\u5408\u89c4\u98ce\u9669",level:4},{value:"App Store \u9690\u79c1\u95ee\u9898",id:"app-store-\u9690\u79c1\u95ee\u9898",level:2},{value:"1. \u662f\u5426\u4f1a\u4ece\u6b64 App \u4e2d\u6536\u96c6\u6570\u636e",id:"1-\u662f\u5426\u4f1a\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u6570\u636e",level:3},{value:"2. \u4f4d\u7f6e\u6570\u636e\u6536\u96c6",id:"2-\u4f4d\u7f6e\u6570\u636e\u6536\u96c6",level:3},{value:"3. \u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6",id:"3-\u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6",level:3},{value:"4.1. \u4f4d\u7f6e",id:"41-\u4f4d\u7f6e",level:3},{value:"1. \u8bf7\u5728 \u300c\u4f4d\u7f6e\u300d\u9762\u677f\u4e2d\uff0c\u52fe\u9009 \u300c\u5206\u6790\u300d",id:"1-\u8bf7\u5728-\u4f4d\u7f6e\u9762\u677f\u4e2d\u52fe\u9009-\u5206\u6790",level:4},{value:"2. \u7136\u540e\u4e0b\u4e00\u6b65\uff0c\u52fe\u9009\u300c\u662f\uff0c\u4ece\u6b64 App \u4e2d\u6536\u96c6\u7684\u7cbe\u786e\u4f4d\u7f6e\u6570\u636e\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u300d",id:"2-\u7136\u540e\u4e0b\u4e00\u6b65\u52fe\u9009\u662f\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u7684\u7cbe\u786e\u4f4d\u7f6e\u6570\u636e\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054",level:4},{value:"3. \u6839\u636e\u60a8App\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",id:"3-\u6839\u636e\u60a8app\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",level:4},{value:"4.2 \u7528\u6237 ID",id:"42-\u7528\u6237-id",level:3},{value:"1. GrowingIO SDK \u4f1a\u5728\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\u65f6\u6536\u96c6\u7528\u6237 ID \u7528\u4e8e\u5206\u6790\u529f\u80fd\uff0c\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe",id:"1-growingio-sdk-\u4f1a\u5728\u8c03\u7528-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id-\u63a5\u53e3\u65f6\u6536\u96c6\u7528\u6237-id-\u7528\u4e8e\u5206\u6790\u529f\u80fd\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9\u5206\u6790\u5982\u56fe",level:4},{value:"2. \u52fe\u9009\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u9009\u62e9\u300c\u662f\uff0c\u4ece\u6b64 App \u4e2d\u6536\u96c6\u7684\u7528\u6237 ID \u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u300d\uff0c\u8fd9\u91cc\u6839\u636e\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u52fe\u9009\uff0c\u5982\u56fe",id:"2-\u52fe\u9009\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\u9009\u62e9\u662f\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u7684\u7528\u6237-id-\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u8fd9\u91cc\u6839\u636e\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u52fe\u9009\u5982\u56fe",level:4},{value:"3. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u9700\u8981\u9009\u62e9\u300c\u662f\uff0c\u6211\u4eec\u4f1a\u5c06\u7528\u6237 ID \u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684\u300d\u200b",id:"3-\u70b9\u51fb\u4e0b\u4e00\u6b65\u9700\u8981\u9009\u62e9\u662f\u6211\u4eec\u4f1a\u5c06\u7528\u6237-id-\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",level:4},{value:"4.3 \u8bbe\u5907",id:"43-\u8bbe\u5907",level:3},{value:"1. GrowingIO SDK \u6536\u96c6\u8bbe\u5907 ID \u7528\u4e8e\u6536\u96c6\u7528\u6237\u767b\u5f55\u524d\u7684\u6570\u636e\uff0c\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe",id:"1-growingio-sdk-\u6536\u96c6\u8bbe\u5907-id-\u7528\u4e8e\u6536\u96c6\u7528\u6237\u767b\u5f55\u524d\u7684\u6570\u636e\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u5206\u6790\u5982\u56fe",level:4},{value:"2. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u56e0\u4e3a\u6536\u96c6\u5230\u7684\u6570\u636e\u4f1a\u4e0e\u8bbe\u5907 id \u7ed1\u5b9a\uff0c\u6240\u4ee5\u6b64\u5904\u7ee7\u7eed\u9009\u62e9\u300c\u662f\u300d",id:"2-\u70b9\u51fb\u4e0b\u4e00\u6b65\u56e0\u4e3a\u6536\u96c6\u5230\u7684\u6570\u636e\u4f1a\u4e0e\u8bbe\u5907-id-\u7ed1\u5b9a\u6240\u4ee5\u6b64\u5904\u7ee7\u7eed\u9009\u62e9\u662f",level:4},{value:"3. \u7ee7\u7eed\u4e0b\u4e00\u6b65\uff0c\u540c\u7528\u6237 ID \uff0c \u4f1a\u4f7f\u7528 IDFA \u4e0e\u7b2c\u4e09\u65b9\u6570\u636e\u76f8\u5173\u8054\u4ee5\u7528\u4e8e\u5b9a\u5411\u5e7f\u544a\u6216\u5e7f\u544a\u8bc4\u4f30\u76ee\u7684\uff0c\u5982\u56fe",id:"3-\u7ee7\u7eed\u4e0b\u4e00\u6b65\u540c\u7528\u6237-id--\u4f1a\u4f7f\u7528-idfa-\u4e0e\u7b2c\u4e09\u65b9\u6570\u636e\u76f8\u5173\u8054\u4ee5\u7528\u4e8e\u5b9a\u5411\u5e7f\u544a\u6216\u5e7f\u544a\u8bc4\u4f30\u76ee\u7684\u5982\u56fe",level:4},{value:"4.4 \u4ea7\u54c1\u4ea4\u4e92",id:"44-\u4ea7\u54c1\u4ea4\u4e92",level:3},{value:"1. \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9SDK\u540e\uff0c\u4f1a\u6536\u96c6 APP\u542f\u52a8\uff0cAPP\u9000\u51fa\uff0c\u7528\u6237\u70b9\u51fb\uff0c\u9875\u9762\u6d4f\u89c8\u7b49\u76f8\u5173\u884c\u4e3a\u7528\u4e8e\u5206\u6790\u4ea7\u54c1\uff0c\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe",id:"1-\u4f7f\u7528-growingio-\u65e0\u57cb\u70b9sdk\u540e\u4f1a\u6536\u96c6-app\u542f\u52a8app\u9000\u51fa\u7528\u6237\u70b9\u51fb\u9875\u9762\u6d4f\u89c8\u7b49\u76f8\u5173\u884c\u4e3a\u7528\u4e8e\u5206\u6790\u4ea7\u54c1\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u5206\u6790\u5982\u56fe",level:4},{value:"2. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u7ee7\u7eed\u9009\u62e9\u662f\uff0c\u5982\u56fe",id:"2-\u70b9\u51fb\u4e0b\u4e00\u6b65\u7ee7\u7eed\u9009\u62e9\u662f\u5982\u56fe",level:4},{value:"3. \u6700\u540e\u8ffd\u8e2a\u76ee\u7684\uff0c\u8bf7\u6839\u636e\u60a8\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\uff0c\u662f\u5426\u8981\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",id:"3-\u6700\u540e\u8ffd\u8e2a\u76ee\u7684\u8bf7\u6839\u636e\u60a8\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u8981\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",level:4},{value:"5. GrowingIO SDK \u5408\u89c4\u6027\u8bf4\u660e",id:"5-growingio-sdk-\u5408\u89c4\u6027\u8bf4\u660e",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components},{ImageLoader:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u9690\u79c1\u534f\u8bae",children:"\u9690\u79c1\u534f\u8bae"}),"\n",(0,l.jsxs)(n.p,{children:["\u6839\u636e",(0,l.jsx)(n.a,{href:"http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm",children:"\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u5173\u4e8e\u5f00\u5c55\u7eb5\u6df1\u63a8\u8fdbAPP\u4fb5\u5bb3\u7528\u6237\u6743\u76ca\u4e13\u9879\u6574\u6cbb\u884c\u52a8"}),"\u548c ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/app-store/user-privacy-and-data-use/",children:"User Privacy and Data Use"}),"\n\uff0cApp \u9700\u8981\u901a\u8fc7\u9690\u79c1\u534f\u8bae\u8bf4\u660e\u5e94\u7528\u91c7\u96c6\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u786e\u4fdd\u60a8\u7684App\u5728\u96c6\u6210 GrowingIO SDK \u4e4b\u540e\uff0c\u80fd\u591f\u6ee1\u8db3\u5de5\u4fe1\u90e8\u76f8\u5173\u5408\u89c4\u8981\u6c42\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8bf4\u660e\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",children:"\u9690\u79c1\u534f\u8bae\u586b\u5199"}),"\n",(0,l.jsx)(n.h3,{id:"\u6536\u96c6\u548c\u83b7\u53d6",children:"\u6536\u96c6\u548c\u83b7\u53d6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u6536\u96c6\u548c\u83b7\u5f97\u7684\u4e2a\u4eba\u4fe1\u606f\u680f\u76ee\u4e2d\u6839\u636e",(0,l.jsx)(n.strong,{children:"\u5b9e\u9645\u60c5\u51b5"}),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a`IDFA`\u3001`IDFV`\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u5728\u7b2c\u4e09\u65b9SDK\u5217\u8868\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9(\u8bbe\u5907\u4fe1\u606f\u6309\u7167",(0,l.jsx)(n.strong,{children:"\u5b9e\u9645\u60c5\u51b5"}),"\u586b\u5199)\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GIO\u79fb\u52a8\u7aef SDK\n\u7528\u9014\uff1a\u5206\u6790\u6536\u96c6\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f(App)\u7528\u6237\u7684\u4f7f\u7528\u60c5\u51b5\n\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\u7c7b\u578b\uff1a\u8bbe\u5907\u6807\u8bc6\u4fe1\u606f\uff08\u5982IDFA\u3001IDFV\uff09\uff0c\u8bbe\u5907\u7c7b\u578b\uff0c\u8bbe\u5907\u7248\u672c\uff0c\u7cfb\u7edf\u7248\u672c\uff0c\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u7f51\u7edc\u8bbe\u5907\u5236\u9020\u5546\uff0c\u7f51\u7edc\u6a21\u5f0f\n\u63d0\u4f9b\u65b9\uff1a\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\n\u7b2c\u4e09\u65b9SDK\u9690\u79c1\u534f\u8bae\u94fe\u63a5\uff1ahttps://accounts.growingio.com/user-privacy\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",children:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u7684\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab\u680f\u76ee\u4e2d\u6839\u636e",(0,l.jsx)(n.strong,{children:"\u5b9e\u9645\u60c5\u51b5"}),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a`IDFA`\u3001`IDFV`\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5408\u89c4\u6b65\u9aa4",children:"\u5408\u89c4\u6b65\u9aa4"}),"\n",(0,l.jsx)(n.p,{children:"1.\u60a8\u9700\u8981\u786e\u4fdd App \u6709\u300a\u9690\u79c1\u534f\u8bae\u300b\uff0c\u5e76\u4e14\u5728\u7528\u6237\u7b2c\u4e00\u6b21\u542f\u52a8 App \u65f6\u5c31\u80fd\u5411\u7528\u6237\u5c55\u793a\u5e76\u53d6\u5f97\u7528\u6237\u540c\u610f\uff1b"}),"\n",(0,l.jsxs)(n.p,{children:["2.\u8bf7\u52a1\u5fc5\u544a\u77e5\u7528\u6237\u60a8\u4f7f\u7528\u4e86 GrowingIO SDK\uff0c\u8bf7\u5728 \u300a\u9690\u79c1\u534f\u8bae\u300b \u4e2d\u6dfb\u52a0\u9690\u79c1\u6761\u6b3e\uff0c\u53c2\u8003",(0,l.jsx)(n.a,{href:"#%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE%E5%A1%AB%E5%86%99",children:"\u9690\u79c1\u534f\u8bae\u586b\u5199"})]}),"\n",(0,l.jsxs)(n.p,{children:["3.\u96c6\u6210 ",(0,l.jsx)(n.a,{href:"/docs/ios/Introduce",children:"Apple SDK"}),"\uff0c\u8bf7\u5728\u7528\u6237\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u540e ",(0,l.jsx)(n.a,{href:"#%E6%96%B9%E5%BC%8F%E4%B8%80%E8%AE%BE%E7%BD%AE%E6%95%B0%E6%8D%AE%E6%94%B6%E9%9B%86%E5%BC%80%E5%85%B3",children:"\u6253\u5f00 SDK \u7684\u6570\u636e\u6536\u96c6\u5f00\u5173\uff08\u63a8\u8350\uff09"})," \u6216 ",(0,l.jsx)(n.a,{href:"#%E6%96%B9%E5%BC%8F%E4%BA%8C%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96",children:"\u5ef6\u8fdf\u521d\u59cb\u5316 SDK"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["4.\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u9ed8\u8ba4\u4f1a\u5c1d\u8bd5\u83b7\u53d6 ",(0,l.jsx)(n.code,{children:"IDFA"}),"\u3001",(0,l.jsx)(n.code,{children:"IDFV"})," \u4fe1\u606f\uff0c\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u7528\u6237\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\u3002\n\u53c2\u8003\uff1a",(0,l.jsx)(n.a,{href:"/docs/ios/Introduce#app-store-%E6%8F%90%E4%BA%A4%E5%BA%94%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",children:"App Store \u63d0\u4ea4\u5e94\u7528\u6ce8\u610f\u4e8b\u9879\u200b\u200b"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,l.jsx)(n.h3,{id:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173",children:"\u65b9\u5f0f\u4e00\u3001\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-swift",children:"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    // 1. dataCollectionEnabled \u8bbe\u7f6e\u4e3a NO\n    // \u8bbe\u7f6e\u7981\u6b62\u6570\u636e\u91c7\u96c6\u4ee3\u7801\n    config?.dataCollectionEnabled = false\n    // 2.\u521d\u59cb\u5316 GrowingIO SDK\n    // \u521d\u59cb\u5316\u4ee3\u7801\n  \n    ...\n    return true;\n}\n\u200b\n// \u67d0\u4e00\u65f6\u523b\u540c\u610f\u6570\u636e\u91c7\u96c6(\u6bd4\u5982\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\uff0c\u6216\u8005\u83b7\u53d6\u5230 IDFA \u6743\u9650\u4e4b\u540e)\nfunc userAcceptDataCollection() {\n    ...\n    // 3. dataCollectionEnabled \u8bbe\u7f6e\u4e3a YES\n    // \u8bbe\u7f6e\u5f00\u542f\u6570\u636e\u91c7\u96c6\u4ee3\u7801\n    Autotracker.setDataCollectionEnabled(true)\n    ...\n}\n"})}),"\n",(0,l.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,l.jsx)(n.p,{children:"\u9700\u8981\u6839\u636e\u60a8\u7684\u96c6\u6210\u65b9\u5f0f(Cocoapods/SwiftPM)\uff0cSDK\u7c7b\u578b(\u65e0\u57cb\u70b9/\u57cb\u70b9)\uff0c\u8c03\u6574\u8c03\u7528\u7c7b\u540d"})}),"\n",(0,l.jsx)(n.h3,{id:"\u65b9\u5f0f\u4e8c\u5ef6\u8fdf\u521d\u59cb\u5316",children:"\u65b9\u5f0f\u4e8c\u3001\u5ef6\u8fdf\u521d\u59cb\u5316"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-swift",children:"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    if <\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae> {\n      // \u5c55\u793a\u9690\u79c1\u534f\u8bae\u5f39\u6846\uff0c\u7b49\u5f85\u7528\u6237\u540c\u610f\u540e\uff0c\u6dfb\u52a0 GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n    } else {\n        //  GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n    }\n    ...\n    return true;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ios-\u6743\u9650\u8bf4\u660e",children:"iOS \u6743\u9650\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"\u6743\u9650"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7528\u9014"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u7f51\u7edc"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u8054\u7f51\u548c\u53d1\u9001\u6570\u636e\u6743\u9650\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1\u3002\u5fc5\u987b\u6743\u9650"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"IDFA"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5141\u8bb8\u5e94\u7528\u83b7\u53d6 IDFA\uff0c\u4ee5\u4fbf\u6807\u8bc6\u533f\u540d\u7528\u6237\u3002\u53ef\u9009\u6743\u9650"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",children:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.p,{children:["\u91c7\u96c6 SDK \u7248\u672c>=3.3.2\uff0c\u521d\u59cb\u5316\u914d\u7f6e\u65f6 encryptEnabled\u8bbe\u7f6e\u4e3aYES\uff0c\u7f51\u7edc\u4f20\u8f93\u5185\u5bb9\u5c06\u4f1a\u52a0\u5bc6\uff0c\u4e0d\u4f1a\u660e\u6587\u663e\u793a\u3002\n\u4f7f\u7528\u8bf7\u53c2\u8003",(0,l.jsx)(n.a,{href:"/docs/ios/Configuration#12-encryptenabled",children:"SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93 encryptEnabled"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",children:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:"Apple SDK \u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u652f\u6301\u8bbe\u7f6e\u53d1\u9001\u95f4\u9694(\u6700\u5c0f\u53ef\u8bbe\u7f6e5\u79d2)\uff0c\u9ed8\u8ba415\u79d2\uff0cSDK \u4f1a\u5148\u5c06\u884c\u4e3a\u6570\u636e\u5b58\u5165 App \u672c\u5730 sqlite \u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u95f4\u9694\u65f6\u95f4\u5411\u670d\u52a1\u5668\u53d1\u9001\u884c\u4e3a\u6570\u636e\u5305\uff08\u6700\u5927 500 \u6761\u884c\u4e3a\u6570\u636e\uff09\uff0c\u9996\u6b21\u8bf7\u6c42\u4e4b\u540e\uff0c\u5982\u679c\u5269\u4f59\u884c\u4e3a\u6570\u636e\u91cf\u5927\u4e8e500\u6761\uff0c\u5219\u7ee7\u7eed\u53d1\u9001\uff1b\u5426\u5219\u7b49\u5f85\u4e0b\u4e00\u6b21\u5b9a\u65f6\u5668\u8f6e\u8be2\uff0c\u884c\u4e3a\u6570\u636e\u53d1\u9001\u6210\u529f\u540e\u5c06\u5728\u6570\u636e\u5e93\u4e2d\u5220\u9664\u3002\u6570\u636e\u5e93\u4e2d\u672a\u53d1\u9001\u7684\u884c\u4e3a\u6570\u636e\u4f1a\u57287\u5929\u4e4b\u540e\u5220\u9664\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5176\u4ed6\u8bf4\u660e",children:"\u5176\u4ed6\u8bf4\u660e"}),"\n",(0,l.jsx)(n.h3,{id:"\u5173\u4e8e-privacy-manifest-\u9690\u79c1\u6e05\u5355",children:"\u5173\u4e8e Privacy manifest \u9690\u79c1\u6e05\u5355"}),"\n",(0,l.jsx)(n.p,{children:"SDK \u5185\u7f6e\u4e86 privacy manifest\uff0c\u91c7\u7528 Cocoapods/Swift Package Manager \u65b9\u5f0f\u8fdb\u884c\u96c6\u6210\uff0c\u5373\u53ef\u81ea\u52a8\u5bfc\u5165\u5230\u60a8\u751f\u6210\u7684 App \u4ea7\u7269\u4e2d"}),"\n",(0,l.jsx)(n.h3,{id:"\u5173\u4e8e-gdpr",children:"\u5173\u4e8e GDPR"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u7b26\u5408\n",(0,l.jsx)(n.a,{href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84",children:"\u200bGeneral Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"}),"\uff0c\u8bf7\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"#%E6%96%B9%E5%BC%8F%E4%B8%80%E8%AE%BE%E7%BD%AE%E6%95%B0%E6%8D%AE%E6%94%B6%E9%9B%86%E5%BC%80%E5%85%B3",children:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u6536\u96c6\u5f00\u5173"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5173\u4e8e-idfa-\u5e7f\u544a\u6807\u8bc6\u7b26",children:"\u5173\u4e8e IDFA \u5e7f\u544a\u6807\u8bc6\u7b26"}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u9014\u5f84",children:"\u4f7f\u7528\u9014\u5f84"}),"\n",(0,l.jsxs)(n.p,{children:["GrowingIO SDK \u4f1a\u91c7\u96c6 ",(0,l.jsx)(n.code,{children:"IDFA"})," \u548c ",(0,l.jsx)(n.code,{children:"IDFV"})," \u5b57\u6bb5\u4e0a\u4f20\uff0c\u5982\u679c\u60a8\u7684\u9879\u76ee\u4e2d\u5f15\u5165\u4e86 ",(0,l.jsx)(n.code,{children:"AdSupport.framework"}),"\uff0c\u4f1a\u5c1d\u8bd5\u83b7\u53d6 ",(0,l.jsx)(n.code,{children:"IDFA"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u9664\u4e86 ",(0,l.jsx)(n.code,{children:"IDFA"})," \u548c ",(0,l.jsx)(n.code,{children:"IDFV"})," \u5b57\u6bb5\uff0cGrowingIO SDK \u4f7f\u7528 \u8bbf\u95ee\u7528\u6237ID \u5b57\u6bb5\u6807\u8bc6\u8bbf\u95ee\u7528\u6237 \uff0c\u5176\u503c\u4f7f\u7528 IDFA \u3001IDFV \u6216 \u968f\u673a\u5b57\u7b26\u4e32 \uff0c\u4e09\u8005\u7684\u4f18\u5148\u7ea7\u4e3a IDFA> IDFV > \u968f\u673a\u5b57\u7b26\u4e32 \uff0c\u4f8b\u5982\uff1a\u5982\u679c\u83b7\u53d6\u4e0d\u5230 IDFA\uff0cSDK \u4f1a\u4f7f\u7528 IDFV \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u5408\u89c4\u98ce\u9669",children:"\u5408\u89c4\u98ce\u9669"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"IDFA"})," \u65f6\u6709\u4e00\u5b9a\u7684\u5408\u89c4\u98ce\u9669\uff0c\u4f46\u662f\u8003\u8651\u5230\u91c7\u96c6\u7684\u51c6\u786e\u6027\uff0cGrowingIO SDK \u4ecd\u7136\u63d0\u4f9b",(0,l.jsx)(n.code,{children:"IDFA"}),"\u7684\u91c7\u96c6\u65b9\u6cd5\uff0c\u5982\u679c\u4e0d\u9700\u8981\u91c7\u96c6",(0,l.jsx)(n.code,{children:"IDFA"}),"\uff0c\u8bf7\u5728\u9879\u76ee\u5de5\u7a0b\u4e2d\u53bb\u9664 ",(0,l.jsx)(n.code,{children:"AdSupport.framework"})," \u7684\u5f15\u7528\uff0c\u5e76\u4e14\u4e0d\u8981\u5728\u9879\u76ee\u4e2d\u5bfc\u5165 ",(0,l.jsx)(n.code,{children:"AdSupport"})," \u76f8\u5173\u5934\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u53d1\u5e03\u513f\u7ae5\u7ea7\u5e94\u7528\uff0c\u5b8c\u5168\u4e0d\u9700\u8981\u76f8\u5173 ",(0,l.jsx)(n.code,{children:"IDFA"})," \u7684\u83b7\u53d6\u903b\u8f91\uff0c\u53c2\u8003",(0,l.jsx)(n.a,{href:"/docs/ios/Configuration#1-%E7%A6%81%E7%94%A8idfa",children:"\u7981\u7528IDFA"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"app-store-\u9690\u79c1\u95ee\u9898",children:"App Store \u9690\u79c1\u95ee\u9898"}),"\n",(0,l.jsx)(n.p,{children:"\u82f9\u679c\u5728 iOS 14.3 \u7cfb\u7edf\u66f4\u65b0\u4e86\u9690\u79c1\u534f\u8bae\uff0c\u8981\u6c42 App \u66f4\u65b0\u6216\u53d1\u5e03\u65f6\u9700\u8981\u53d1\u5e03\u8005\u586b\u5199\u4e00\u4efd\u9690\u79c1\u62a5\u544a\u3002\u6b64\u65f6\u5982\u679c App \u96c6\u6210 GrowingIO SDK \u5e94\u8be5\u5982\u4f55\u586b\u5199:"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u662f\u5426\u4f1a\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u6570\u636e",children:"1. \u662f\u5426\u4f1a\u4ece\u6b64 App \u4e2d\u6536\u96c6\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u9009\u62e9 \u300c\u662f\uff0c\u4f1a\u4ece\u6b64 App \u4e2d\u6536\u96c6\u6570\u636e\u300d"})}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_enable"}),"\n",(0,l.jsx)(n.p,{children:"\u200b\u200b"}),"\n",(0,l.jsx)(n.h3,{id:"2-\u4f4d\u7f6e\u6570\u636e\u6536\u96c6",children:"2. \u4f4d\u7f6e\u6570\u636e\u6536\u96c6"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"GrowingIO SDK \u4e0d\u4f1a\u4e3b\u52a8\u7533\u8bf7\u91c7\u96c6\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5982\u679c\u5ba2\u6237\u7684App\u7533\u8bf7\u83b7\u53d6\u4e86\u4f4d\u7f6e\u4fe1\u606f\uff0cGrowingIO\u5c31\u4f1a\u91c7\u96c6\u4f4d\u7f6e\u4fe1\u606f\u7528\u4e8e\u5b9a\u4f4d\u7528\u6237\u57ce\u5e02\u7ea7\u522b\u7684\u4f4d\u7f6e\uff0c\u9700\u8981\u52fe\u9009 \u300c\u7cbe\u51c6\u4f4d\u7f6e\u300d"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u7981\u7528\u4f4d\u7f6e\u4fe1\u606f\u83b7\u53d6\uff0c\u9700\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"+setEnableLocationTrack:"}),"\u4e3a ",(0,l.jsx)(n.code,{children:"NO"})]})}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_location"}),"\n",(0,l.jsx)(n.h3,{id:"3-\u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6",children:"3. \u6807\u8bc6\u7b26\u548c\u4f7f\u7528\u6570\u636e\u6536\u96c6"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u9700\u9009\u62e9 \u300c\u8bbe\u5907 ID\u300d"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5982\u679c\u4f7f\u7528\u7528\u6237\u5173\u8054\uff0c\u5373\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\u5219\u8fd8\u9700\u52fe\u9009 \u300c\u7528\u6237 ID\u300d"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5982\u679c\u4f7f\u7528\u7684\u662f \u65e0\u57cb\u70b9SDK \u9700\u7ee7\u7eed\u52fe\u9009 \u300c\u4ea7\u54c1\u4ea4\u4e92\u300d"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{path:"img/compliance/datacollect_idenfier"}),"\u200b\u200b"]}),"\n",(0,l.jsx)(n.h3,{id:"41-\u4f4d\u7f6e",children:"4.1. \u4f4d\u7f6e"}),"\n",(0,l.jsx)(n.h4,{id:"1-\u8bf7\u5728-\u4f4d\u7f6e\u9762\u677f\u4e2d\u52fe\u9009-\u5206\u6790",children:"1. \u8bf7\u5728 \u300c\u4f4d\u7f6e\u300d\u9762\u677f\u4e2d\uff0c\u52fe\u9009 \u300c\u5206\u6790\u300d"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{path:"img/compliance/datacollect_location_analyze"}),"\u200b\u200b"]}),"\n",(0,l.jsx)(n.h4,{id:"2-\u7136\u540e\u4e0b\u4e00\u6b65\u52fe\u9009\u662f\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u7684\u7cbe\u786e\u4f4d\u7f6e\u6570\u636e\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054",children:"2. \u7136\u540e\u4e0b\u4e00\u6b65\uff0c\u52fe\u9009\u300c\u662f\uff0c\u4ece\u6b64 App \u4e2d\u6536\u96c6\u7684\u7cbe\u786e\u4f4d\u7f6e\u6570\u636e\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u300d"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_location_identifier"}),"\n",(0,l.jsx)(n.h4,{id:"3-\u6839\u636e\u60a8app\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",children:"3. \u6839\u636e\u60a8App\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"}),"\n",(0,l.jsx)(n.h3,{id:"42-\u7528\u6237-id",children:"4.2 \u7528\u6237 ID"}),"\n",(0,l.jsx)(n.h4,{id:"1-growingio-sdk-\u4f1a\u5728\u8c03\u7528-\u8bbe\u7f6e\u767b\u5f55\u7528\u6237id-\u63a5\u53e3\u65f6\u6536\u96c6\u7528\u6237-id-\u7528\u4e8e\u5206\u6790\u529f\u80fd\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9\u5206\u6790\u5982\u56fe",children:"1. GrowingIO SDK \u4f1a\u5728\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\u65f6\u6536\u96c6\u7528\u6237 ID \u7528\u4e8e\u5206\u6790\u529f\u80fd\uff0c\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_identifier_analyze"}),"\n",(0,l.jsx)(n.h4,{id:"2-\u52fe\u9009\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\u9009\u62e9\u662f\u4ece\u6b64-app-\u4e2d\u6536\u96c6\u7684\u7528\u6237-id-\u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u8fd9\u91cc\u6839\u636e\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u52fe\u9009\u5982\u56fe",children:"2. \u52fe\u9009\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u9009\u62e9\u300c\u662f\uff0c\u4ece\u6b64 App \u4e2d\u6536\u96c6\u7684\u7528\u6237 ID \u4e0e\u7528\u6237\u8eab\u4efd\u5173\u8054\u300d\uff0c\u8fd9\u91cc\u6839\u636e\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u52fe\u9009\uff0c\u5982\u56fe"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{path:"img/compliance/datacollect_identifier_id"}),"\u200b\u200b"]}),"\n",(0,l.jsx)(n.h4,{id:"3-\u70b9\u51fb\u4e0b\u4e00\u6b65\u9700\u8981\u9009\u62e9\u662f\u6211\u4eec\u4f1a\u5c06\u7528\u6237-id-\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",children:"3. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u9700\u8981\u9009\u62e9\u300c\u662f\uff0c\u6211\u4eec\u4f1a\u5c06\u7528\u6237 ID \u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684\u300d\u200b"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_track_id"}),"\n",(0,l.jsx)(n.h3,{id:"43-\u8bbe\u5907",children:"4.3 \u8bbe\u5907"}),"\n",(0,l.jsx)(n.h4,{id:"1-growingio-sdk-\u6536\u96c6\u8bbe\u5907-id-\u7528\u4e8e\u6536\u96c6\u7528\u6237\u767b\u5f55\u524d\u7684\u6570\u636e\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u5206\u6790\u5982\u56fe",children:"1. GrowingIO SDK \u6536\u96c6\u8bbe\u5907 ID \u7528\u4e8e\u6536\u96c6\u7528\u6237\u767b\u5f55\u524d\u7684\u6570\u636e\uff0c\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_id_analyze"}),"\n",(0,l.jsx)(n.h4,{id:"2-\u70b9\u51fb\u4e0b\u4e00\u6b65\u56e0\u4e3a\u6536\u96c6\u5230\u7684\u6570\u636e\u4f1a\u4e0e\u8bbe\u5907-id-\u7ed1\u5b9a\u6240\u4ee5\u6b64\u5904\u7ee7\u7eed\u9009\u62e9\u662f",children:"2. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u56e0\u4e3a\u6536\u96c6\u5230\u7684\u6570\u636e\u4f1a\u4e0e\u8bbe\u5907 id \u7ed1\u5b9a\uff0c\u6240\u4ee5\u6b64\u5904\u7ee7\u7eed\u9009\u62e9\u300c\u662f\u300d"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_id_associate"}),"\n",(0,l.jsx)(n.h4,{id:"3-\u7ee7\u7eed\u4e0b\u4e00\u6b65\u540c\u7528\u6237-id--\u4f1a\u4f7f\u7528-idfa-\u4e0e\u7b2c\u4e09\u65b9\u6570\u636e\u76f8\u5173\u8054\u4ee5\u7528\u4e8e\u5b9a\u5411\u5e7f\u544a\u6216\u5e7f\u544a\u8bc4\u4f30\u76ee\u7684\u5982\u56fe",children:"3. \u7ee7\u7eed\u4e0b\u4e00\u6b65\uff0c\u540c\u7528\u6237 ID \uff0c \u4f1a\u4f7f\u7528 IDFA \u4e0e\u7b2c\u4e09\u65b9\u6570\u636e\u76f8\u5173\u8054\u4ee5\u7528\u4e8e\u5b9a\u5411\u5e7f\u544a\u6216\u5e7f\u544a\u8bc4\u4f30\u76ee\u7684\uff0c\u5982\u56fe"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_track_deviceID"}),"\n",(0,l.jsx)(n.h3,{id:"44-\u4ea7\u54c1\u4ea4\u4e92",children:"4.4 \u4ea7\u54c1\u4ea4\u4e92"}),"\n",(0,l.jsx)(n.h4,{id:"1-\u4f7f\u7528-growingio-\u65e0\u57cb\u70b9sdk\u540e\u4f1a\u6536\u96c6-app\u542f\u52a8app\u9000\u51fa\u7528\u6237\u70b9\u51fb\u9875\u9762\u6d4f\u89c8\u7b49\u76f8\u5173\u884c\u4e3a\u7528\u4e8e\u5206\u6790\u4ea7\u54c1\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u5206\u6790\u5982\u56fe",children:"1. \u4f7f\u7528 GrowingIO \u65e0\u57cb\u70b9SDK\u540e\uff0c\u4f1a\u6536\u96c6 APP\u542f\u52a8\uff0cAPP\u9000\u51fa\uff0c\u7528\u6237\u70b9\u51fb\uff0c\u9875\u9762\u6d4f\u89c8\u7b49\u76f8\u5173\u884c\u4e3a\u7528\u4e8e\u5206\u6790\u4ea7\u54c1\uff0c\u56e0\u6b64\u8fd9\u91cc\u7ee7\u7eed\u9009\u62e9\u300c\u5206\u6790\u300d\uff0c\u5982\u56fe"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_interface_analyze"}),"\n",(0,l.jsx)(n.h4,{id:"2-\u70b9\u51fb\u4e0b\u4e00\u6b65\u7ee7\u7eed\u9009\u62e9\u662f\u5982\u56fe",children:"2. \u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u7ee7\u7eed\u9009\u62e9\u662f\uff0c\u5982\u56fe"}),"\n",(0,l.jsx)(i,{path:"img/compliance/datacollect_interface_id"}),"\n",(0,l.jsx)(n.h4,{id:"3-\u6700\u540e\u8ffd\u8e2a\u76ee\u7684\u8bf7\u6839\u636e\u60a8\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u662f\u5426\u8981\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684",children:"3. \u6700\u540e\u8ffd\u8e2a\u76ee\u7684\uff0c\u8bf7\u6839\u636e\u60a8\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\uff0c\u662f\u5426\u8981\u7528\u4e8e\u8ffd\u8e2a\u76ee\u7684"}),"\n",(0,l.jsx)(n.h3,{id:"5-growingio-sdk-\u5408\u89c4\u6027\u8bf4\u660e",children:"5. GrowingIO SDK \u5408\u89c4\u6027\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:"GrowingIO SDK \u9ed8\u8ba4\u6536\u96c6\u7684\u6570\u636e\u7c7b\u578b\u53ea\u6709\u300c\u8bbe\u5907 ID\u300d\u548c\u300c\u7528\u6237 ID\u300d\u4e3b\u8981\u7528\u4e8e\u8ffd\u8e2a\uff0c\u5176\u4ed6\u7684\u6570\u636e\u7c7b\u578b\u91c7\u96c6\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u91c7\u96c6\u4e1a\u52a1\u4ee5\u53ca\u9009\u62e9\u7684SDK \u529f\u80fd\u6765\u505a\u76f8\u5e94\u9009\u62e9\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8c03\u7528 \u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID \u63a5\u53e3\uff1a\u9700\u9009\u62e9\u300c\u7528\u6237 ID\u300d"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u65e0\u57cb\u70b9 SDK\uff1a\u9700\u9009\u62e9\u300c\u4ea7\u54c1\u4ea4\u4e92\u300d"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5f00\u542f\u5d29\u6e83\u6536\u96c6\uff1a\u9700\u9009\u62e9\u300c\u5d29\u6e83\u6570\u636e\u300d"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5f00\u542f\u7ecf\u7eac\u5ea6\u91c7\u96c6\uff1a\u9700\u9009\u62e9\u300c\u7cbe\u786e\u4f4d\u7f6e\u300d"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53e6\uff0c\u8be5\u9690\u79c1\u534f\u8bae\u7684\u586b\u5199\u662f\u53ef\u4ee5\u66f4\u6539\u7684\u3002",(0,l.jsx)(n.strong,{children:"\u8bf7\u6839\u636e\u81ea\u5df1 App \u4e1a\u52a1\u7684\u8c03\u6574\u53ca\u65f6\u66f4\u65b0\u9690\u79c1\u534f\u8bae"}),"\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var l=i(7294);const d={},c=l.createContext(d);function r(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);