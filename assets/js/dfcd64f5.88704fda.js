"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1343],{153:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>g});var o=n(5893),r=n(1151);const d={sidebar_position:1,title:"Mobile Debugger"},l=void 0,t={id:"debugverify/mobiledebugger",title:"Mobile Debugger",description:"GrowingIO \u7684\u79fb\u52a8\u7aef\u7684SDK\u652f\u6301 Mobile Debugger \u5de5\u5177\uff0c\u53ef\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u3002",source:"@site/knowledge/debugverify/mobiledebugger.md",sourceDirName:"debugverify",slug:"/debugverify/mobiledebugger",permalink:"/growingio-sdk-docs/knowledge/debugverify/mobiledebugger",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/debugverify/mobiledebugger.md",tags:[],version:"current",lastUpdatedAt:1723428048,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Mobile Debugger"},sidebar:"knowledge",previous:{title:"\u65e5\u5fd7\u8f93\u51fa\u8c03\u8bd5\u548c\u6821\u9a8c",permalink:"/growingio-sdk-docs/knowledge/debugverify/debug"},next:{title:"\u6d4b\u91cf\u534f\u8bae",permalink:"/growingio-sdk-docs/knowledge/measurement"}},s={},g=[{value:"\u542f\u52a8 Mobile Debugger",id:"\u542f\u52a8-mobile-debugger",level:2},{value:"1.\u8fdb\u5165Mobile Debugger\u542f\u52a8\u9875",id:"1\u8fdb\u5165mobile-debugger\u542f\u52a8\u9875",level:3},{value:"2.\u626b\u7801\u5524\u8d77App",id:"2\u626b\u7801\u5524\u8d77app",level:3},{value:"\u4f7f\u7528 Mobile Debugger \u6d4b\u8bd5\u6570\u636e",id:"\u4f7f\u7528-mobile-debugger-\u6d4b\u8bd5\u6570\u636e",level:2},{value:"\u901a\u8fc7\u201c\u4e8b\u4ef6\u6d41\u201d\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e",id:"\u901a\u8fc7\u4e8b\u4ef6\u6d41\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e",level:3},{value:"\u901a\u8fc7\u201cSDK\u8fd0\u884c\u65e5\u5fd7\u201d\u67e5\u770bSDK\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f/\u8b66\u544a/\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7",id:"\u901a\u8fc7sdk\u8fd0\u884c\u65e5\u5fd7\u67e5\u770bsdk\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f\u8b66\u544a\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7",level:3}];function b(e){const i={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageLoader:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"GrowingIO \u7684\u79fb\u52a8\u7aef\u7684SDK\u652f\u6301 Mobile Debugger \u5de5\u5177\uff0c\u53ef\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"\u542f\u52a8-mobile-debugger",children:"\u542f\u52a8 Mobile Debugger"}),"\n",(0,o.jsx)(i.p,{children:"\u6b64\u529f\u80fd\u53ef\u4ee5\u5728\u7f51\u9875\u7aef\u67e5\u770b\u79fb\u52a8\u7aef SDK \u4e0a\u62a5\u6570\u636e\u7684\u65e5\u5fd7\u4fe1\u606f\u3002"}),"\n",(0,o.jsx)(i.h3,{id:"1\u8fdb\u5165mobile-debugger\u542f\u52a8\u9875",children:"1.\u8fdb\u5165Mobile Debugger\u542f\u52a8\u9875"}),"\n",(0,o.jsxs)(i.p,{children:["\u767b\u5f55 GrowingIO CDP \u7ba1\u7406\u5e73\u53f0\uff08\u4e00\u822c\u6765\u8bf4\uff0ccdp\u90fd\u4f1a\u914d\u6709\u6570\u636e\u7ba1\u7406\uff09\uff0c\u5728\u5e73\u53f0\u7ba1\u7406---\x3e\u5ba2\u6237\u6570\u636e\u5e73\u53f0---\x3e\u6570\u636e\u6821\u9a8c---\x3e",(0,o.jsx)(i.strong,{children:"Mobile Debugger"})," \u8fdb\u5165Mobile Debugger\u542f\u52a8\u9875\u3002"]}),"\n",(0,o.jsx)(n,{path:"img/debugverify/EnterMobileDebugger"}),"\n",(0,o.jsx)(i.h3,{id:"2\u626b\u7801\u5524\u8d77app",children:"2.\u626b\u7801\u5524\u8d77App"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\u9009\u62e9\u9879\u76ee\u4e2d\u9700\u8981\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u7684\u5e94\u7528\uff0c\u5e76\u4fdd\u8bc1\u624b\u673a\u4e2d\u5df2\u7ecf\u5b89\u88c5\u8be5APP\uff0c\u4e14\u8be5APP\u5df2\u7ecf\u96c6\u6210GrowingIO SDK\u548c\u8bbe\u7f6e\u8fc7 URL Scheme\u3002"}),"\n",(0,o.jsx)(i.li,{children:"\u4f7f\u7528\u624b\u673a\u6d4f\u89c8\u5668\u626b\u63cf\u9875\u9762\u4e2d\u7684\u4e8c\u7ef4\u7801\u5524\u8d77 APP\u3002"}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{title:"\u63d0\u793a",type:"info",children:(0,o.jsxs)(i.p,{children:["Android \u8bbe\u5907\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u4e2d\u6d4f\u89c8\u5668\u626b\u7801\u5524\u8d77APP\u3002",(0,o.jsx)("br",{}),"\niOS \u8bbe\u5907\uff0c\u53ef\u4f7f\u7528\u76f8\u673a\u6216\u81ea\u5e26\u7684\u626b\u7801\u5e94\u7528\u626b\u7801\u5524\u8d77APP\u3002",(0,o.jsx)("br",{}),"\n\u9700\u8981\u6ce8\u610f",(0,o.jsx)(i.strong,{children:"\u5fae\u4fe1\u6216\u5176\u4ed6\u5e94\u7528\u4e2d\u626b\u7801\u65e0\u6cd5\u5524\u8d77APP"}),"\u3002",(0,o.jsx)("br",{}),"\n\u5c0f\u7c73\u8bbe\u5907\uff0c\u7531\u4e8e\u5c0f\u7c73\u7cfb\u7edf\u539f\u56e0\u65e0\u6cd5\u4f7f\u7528 Mobile Debugger\u3002"]})}),"\n",(0,o.jsx)(i.h2,{id:"\u4f7f\u7528-mobile-debugger-\u6d4b\u8bd5\u6570\u636e",children:"\u4f7f\u7528 Mobile Debugger \u6d4b\u8bd5\u6570\u636e"}),"\n",(0,o.jsx)(i.p,{children:"\u5728\u5524\u8d77APP\u540e\uff0c\u8be5APP\u91c7\u96c6\u7684\u884c\u4e3a\u6570\u636e\u3001\u65e5\u5fd7\u4fe1\u606f\u4ee5\u53ca\u5f53\u524d\u9875\u9762\u622a\u56fe\u5c31\u4f1a\u51fa\u73b0\u5728\u7f51\u9875\u4e0a\uff0c\u6d4b\u8bd5\u540c\u5b66\u53ef\u4ee5\u6839\u636e\u9875\u9762\u4e2d\u5c55\u793a\u7684\u6570\u636e\u67e5\u770bAPP\u4e2d\u6570\u636e\u7684\u91c7\u96c6\u4ee5\u53ca\u53d1\u9001\u60c5\u51b5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u6d4b\u8bd5\u548c\u6821\u9a8c\u3002"}),"\n",(0,o.jsx)(i.h3,{id:"\u901a\u8fc7\u4e8b\u4ef6\u6d41\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e",children:"\u901a\u8fc7\u201c\u4e8b\u4ef6\u6d41\u201d\u9875\u7b7e\u67e5\u770b\u8bf7\u6c42\u6570\u636e"}),"\n",(0,o.jsx)(i.p,{children:"\u5982\u4e0b\u56fe\uff0c\u53ef\u4ee5\u67e5\u770b\u4e0a\u62a5\u4e8b\u4ef6\u5c5e\u6027\u7684\u8bf7\u6c42\u6570\u636e"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZPOkRVBIr9mSewTl5%2F%E4%BA%8B%E4%BB%B6%E6%B5%81%E9%A1%B5%E9%9D%A2.png?alt=media&token=8dce6e01-5f54-48d0-8e62-b500c6c5004d",alt:"Mobile Debugger"})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"\u56fe\u7247\u4e2d\u5e8f\u53f71\uff1a\u53ef\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u7528\u6237\u53ca\u8bbe\u5907\u7b49\u57fa\u672c\u4fe1\u606f"}),"\n",(0,o.jsx)(i.li,{children:"\u56fe\u7247\u4e2d\u5e8f\u53f72\uff1a\u7b5b\u9009\u5668\u4e2d\u5c55\u793a\u7684\u662f\u7cfb\u7edf\u4e2d\u5df2\u5b9a\u4e49\u7684\u4e8b\u4ef6\u6807\u8bc6\u7b26\u5217\u8868\uff0c\u5982\u679c\u7b5b\u9009\u540e\u65e0\u6570\u636e\uff0c\u8bf4\u660e\u672c\u6b21\u8fde\u63a5\u672a\u4e0a\u62a5\u6570\u636e"}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"\u901a\u8fc7sdk\u8fd0\u884c\u65e5\u5fd7\u67e5\u770bsdk\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f\u8b66\u544a\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7",children:"\u901a\u8fc7\u201cSDK\u8fd0\u884c\u65e5\u5fd7\u201d\u67e5\u770bSDK\u8fd0\u884c\u4e2d\u7684\u4fe1\u606f/\u8b66\u544a/\u9519\u8bef\u4e09\u79cd\u65e5\u5fd7"}),"\n",(0,o.jsx)(i.p,{children:"\u5982\u4e0b\u56fe\uff0c\u53ef\u4ee5\u70b9\u51fb\u65e5\u5fd7\u53d1\u751f\u7684\u65f6\u95f4\u67e5\u770b\u76f8\u5e94\u7684\u65e5\u5fd7"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZRF90xKX8ecHudHtf%2FSDK%E6%97%A5%E5%BF%97.png?alt=media&token=e0069156-124e-464b-bf0d-6c88ab8cdd5c",alt:"\u8fde\u63a5\u6210\u529f\u540e\u8fdb\u5165SDK\u8fd0\u884c\u65e5\u5fd7"})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"\u56fe\u7247\u4e2d\u5e8f\u53f71\uff1a\u53ef\u70b9\u51fb\u6682\u505c\u6309\u94ae\uff0c\u505c\u6b62\u540c\u6b65SDK\u4ea7\u751f\u7684\u65e5\u5fd7\uff0c\u4fbf\u4e8e\u67e5\u770b\u5f53\u524d\u9047\u5230\u7684\u95ee\u9898\uff1b\u518d\u6b21\u70b9\u51fb\u7ee7\u7eed\u6309\u94ae\uff0c\u5219\u540c\u6b65\u6240\u6709\u4ea7\u751f\u7684SDK\u65e5\u5fd7\uff0c\u5e76\u5c55\u793a\u6700\u65b0\u7684\u4e00\u6761\u65e5\u5fd7\u6570\u636e"}),"\n",(0,o.jsx)(i.li,{children:"\u56fe\u7247\u4e2d\u5e8f\u53f72\uff1a\u70b9\u51fb\u6e05\u5c4f\u6309\u94ae\uff0c\u6e05\u9664\u5f53\u524d\u6240\u6709\u4ea7\u751f\u7684\u65e5\u5fd7"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["\u6821\u9a8c\u7684\u5173\u6ce8\u70b9\u8bf7\u53c2\u8003",(0,o.jsx)(i.a,{href:"/knowledge/debugverify#%E6%A0%A1%E9%AA%8C%E6%97%B6%E9%9C%80%E5%85%B3%E6%B3%A8%E5%AD%97%E6%AE%B5%E5%92%8C%E8%AF%B4%E6%98%8E",children:"\u6821\u9a8c\u65f6\u9700\u5173\u6ce8\u5b57\u6bb5\u548c\u8bf4\u660e"}),"\u3002"]})]})}function c(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>l});var o=n(7294);const r={},d=o.createContext(r);function l(e){const i=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(d.Provider,{value:i},e.children)}}}]);