"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1541],{2290:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=s(5893),i=s(1151);const o={sidebar_position:2,title:"\u4e8b\u4ef6\u6a21\u578b"},d=void 0,t={id:"basicknowledge/eventModel",title:"\u4e8b\u4ef6\u6a21\u578b",description:'\u5728 GrowingIO \u7684\u6a21\u578b\u4e2d\uff0c\u4e3a\u4e86\u5bf9\u7528\u6237\u884c\u4e3a\u8fdb\u884c\u7edf\u8ba1\u548c\u5206\u6790\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u7c7b\u88ab\u79f0\u4e3a "\u4e8b\u4ef6" \u7684\u6d88\u606f\u6765\u8bb0\u5f55\u7528\u6237\u884c\u4e3a\u3002',source:"@site/knowledge/basicknowledge/eventModel.md",sourceDirName:"basicknowledge",slug:"/basicknowledge/eventModel",permalink:"/growingio-sdk-docs/knowledge/basicknowledge/eventModel",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/basicknowledge/eventModel.md",tags:[],version:"current",lastUpdatedAt:1706254086,formattedLastUpdatedAt:"Jan 26, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e8b\u4ef6\u6a21\u578b"},sidebar:"knowledge",previous:{title:"\u7528\u6237\u6a21\u578b",permalink:"/growingio-sdk-docs/knowledge/basicknowledge/userModel"},next:{title:"\u57cb\u70b9\u4f7f\u7528\u89c4\u8303",permalink:"/growingio-sdk-docs/knowledge/basicknowledge/trackEventUse"}},l={},c=[{value:"\u65e0\u57cb\u70b9",id:"\u65e0\u57cb\u70b9",level:2},{value:"\u8bbf\u95ee\u4e8b\u4ef6",id:"\u8bbf\u95ee\u4e8b\u4ef6",level:3},{value:"\u9875\u9762\u4e8b\u4ef6",id:"\u9875\u9762\u4e8b\u4ef6",level:3},{value:"\u5143\u7d20\u4e8b\u4ef6",id:"\u5143\u7d20\u4e8b\u4ef6",level:3},{value:"\u57cb\u70b9",id:"\u57cb\u70b9",level:2},{value:"\u57cb\u70b9\u4e8b\u4ef6",id:"\u57cb\u70b9\u4e8b\u4ef6",level:3},{value:"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",id:"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",level:3},{value:"\u5ba2\u6237\u7aef\u57cb\u70b9",id:"\u5ba2\u6237\u7aef\u57cb\u70b9",level:3},{value:"\u670d\u52a1\u7aef\u57cb\u70b9",id:"\u670d\u52a1\u7aef\u57cb\u70b9",level:3}];function x(n){const e={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:'\u5728 GrowingIO \u7684\u6a21\u578b\u4e2d\uff0c\u4e3a\u4e86\u5bf9\u7528\u6237\u884c\u4e3a\u8fdb\u884c\u7edf\u8ba1\u548c\u5206\u6790\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u7c7b\u88ab\u79f0\u4e3a "\u4e8b\u4ef6" \u7684\u6d88\u606f\u6765\u8bb0\u5f55\u7528\u6237\u884c\u4e3a\u3002'}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4e00\u4e2a\u4e8b\u4ef6\u7684\u4ea7\u751f\u9075\u5faa\u5982\u4e0b\u8fc7\u7a0b\uff1a"})," ",(0,r.jsx)("br",{}),"\n1.GrowingIO SDK \u5728\u5ba2\u6237\u7aef\u901a\u8fc7\u76d1\u542c\u7b49\u624b\u6bb5\u6355\u83b7\u5404\u79cd\u7528\u6237\u884c\u4e3a",(0,r.jsx)("br",{}),'\n2.SDK \u5c06\u7528\u6237\u884c\u4e3a\u8f6c\u5316\u4e3a "\u4e8b\u4ef6" \u6d88\u606f\uff0c\u5e76\u53d1\u9001\u5230\u670d\u52a1\u5668']}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4e8b\u4ef6\u7684\u7ec4\u6210:"}),(0,r.jsx)("br",{}),"\n\u4e00\u4e2a\u5b8c\u6574\u7684\u4e8b\u4ef6\u5e94\u8be5\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.strong,{children:"\u7528\u6237\u4fe1\u606f"}),"\uff1a\u63cf\u8ff0\u7528\u6237\u7684\u4fe1\u606f\uff0c\u5982\uff1a\u7528\u6237ID\uff08\u8bbf\u95ee\u3001\u767b\u5f55\u7b49\uff09",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.strong,{children:"\u65f6\u95f4\u4fe1\u606f"}),"\uff1a\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.strong,{children:"\u884c\u4e3a\u4fe1\u606f"}),"\uff1a\u7528\u6237\u505a\u4e86\u4ec0\u4e48\u6837\u7684\u884c\u4e3a",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.strong,{children:"\u884c\u4e3a\u5bf9\u8c61\u4fe1\u606f"}),"\uff1a\u7528\u6237\u7684\u884c\u4e3a\u4f5c\u7528\u5728\u54ea\u4e9b\u5bf9\u8c61\u4e0a\uff0c\u6bd4\u5982\uff1a\u70b9\u51fb\u4e86\u6309\u94ae A\uff1b\u6d4f\u89c8\u4e86\u9875\u9762 B\uff1b\u4fee\u6539\u4e86\u6587\u672c\u6846 C\uff0c\u90a3\u4e48 A, B, C\u5206\u522b\u5c31\u662f\u7528\u6237\u884c\u4e3a\u4f5c\u7528\u5bf9\u8c61",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u91c7\u96c6\u4e8b\u4ef6\u7684\u7c7b\u578b"}),"\uff1a",(0,r.jsx)("br",{}),"\n\u6309\u7167\u91c7\u96c6\u65b9\u5f0f\u7684\u4e0d\u540c\uff0c\u5c06\u4e8b\u4ef6\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a\u65e0\u57cb\u70b9\u548c\u57cb\u70b9\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u65e0\u57cb\u70b9",children:"\u65e0\u57cb\u70b9"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u65e0\u57cb\u70b9"}),"\u662f\u6307\u7814\u53d1\u901a\u8fc7\u96c6\u6210 GrowingIO SDK\uff0c\u65e0\u9700\u989d\u5916\u5f00\u53d1\u4efb\u4f55\u4ee3\u7801\uff0c\u81ea\u52a8\u91c7\u96c6\u751f\u6210\u4e8b\u4ef6\u3002",(0,r.jsx)("br",{}),"\n\u8bbf\u95ee\u4e8b\u4ef6\uff1a\u6bcf\u5f53\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u8bbf\u95ee\u65f6",(0,r.jsx)("br",{}),"\n\u6fc0\u6d3b\u4e8b\u4ef6\uff1a\u5f53 APP \u9996\u6b21\u6fc0\u6d3b\u6253\u5f00\u65f6",(0,r.jsx)("br",{}),"\n\u5524\u9192\u4e8b\u4ef6\uff1a\u7531 GrowingIO Deep Link \u5524\u9192APP\u65f6",(0,r.jsx)("br",{}),"\n\u5e94\u7528\u5173\u95ed\u4e8b\u4ef6\uff1a",(0,r.jsx)(e.strong,{children:"APP\u3001\u5c0f\u7a0b\u5e8f"}),"\u8fdb\u5165\u540e\u53f0\u65f6",(0,r.jsx)("br",{}),"\n\u9875\u9762\u4e8b\u4ef6\uff1a\u7528\u6237\u6253\u5f00\u4e00\u4e2a\u9875\u9762\u65f6",(0,r.jsx)("br",{}),"\n\u70b9\u51fb\u4e8b\u4ef6\uff1a\u5f53\u7528\u6237\u5bf9\u9875\u9762\u4e0a\u7684\u53ef\u70b9\u51fb\u5143\u7d20\u6709\u70b9\u51fb\u884c\u4e3a\u65f6",(0,r.jsx)("br",{}),"\n\u8f93\u5165\u6846\u6539\u53d8\u5185\u5bb9\u4e8b\u4ef6\uff1a\u5f53\u7528\u6237\u5bf9 APP \u4e0a\u7684\u8f93\u5165\u5143\u7d20\u6709\u6539\u53d8\u7684\u884c\u4e3a\u65f6(\u9ed8\u8ba4\u4e0d\u91c7\u96c6)",(0,r.jsx)("br",{}),"\n\u63d0\u4ea4\u8868\u5355\u4e8b\u4ef6\uff1a\u5f53\u7528\u6237\u4ea7\u751f\u63d0\u4ea4\u8868\u5355\u884c\u4e3a\u65f6",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(e.h3,{id:"\u8bbf\u95ee\u4e8b\u4ef6",children:"\u8bbf\u95ee\u4e8b\u4ef6"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 GrowingIO \u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c",(0,r.jsx)(e.strong,{children:"\u8bbf\u95ee\u4e8b\u4ef6"}),"\u5b9a\u4e49\uff1a",(0,r.jsx)("br",{}),"\nWeb\u7aef\uff1a\u7528\u6237\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u9996\u6b21\u6253\u5f00\u7f51\u7ad9\u9875\u9762",(0,r.jsx)("br",{}),"\n\u79fb\u52a8\u7aef\uff1a\u7528\u6237\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u9996\u6b21\u6253\u5f00\u79fb\u52a8\u5e94\u7528",(0,r.jsx)("br",{}),"\n\u5c0f\u7a0b\u5e8f\uff1a\u7528\u6237\u5728\u5fae\u4fe1\u4e2d\u6253\u5f00\u5c0f\u7a0b\u5e8f",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e00\u6b21\u8bbf\u95ee\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,r.jsx)(e.strong,{children:"session"}),"\uff0c\u5404\u5e73\u53f0\u7684 session \u5237\u65b0\u673a\u5236\u5982\u4e0b\uff1a",(0,r.jsx)("br",{}),"\nWeb\u7aef\uff1a\u9996\u6b21\u8bbf\u95ee\u65f6\u751f\u6210 session\uff0c\u5f53\u7528\u623730\u5206\u949f\u5185\u65e0\u64cd\u4f5c\u884c\u4e3a\uff0c\u4e4b\u540e\u6709\u64cd\u4f5c\u884c\u4e3a\uff0c\u5237\u65b0 session\u3002",(0,r.jsx)("br",{}),"\n\u79fb\u52a8\u7aef\uff1a\u51b7\u542f\u52a8\u65f6\u751f\u6210 session\uff0c\u5f53App\u8fdb\u5165\u540e\u53f030\u79d2\u540e\u518d\u6b21\u6062\u590d\u81f3\u524d\u53f0\uff0c\u5237\u65b0session\u3002",(0,r.jsx)("br",{}),"\n\u5c0f\u7a0b\u5e8f\uff1a\u51b7\u542f\u52a8\u65f6\u751f\u6210 session\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u540e\u53f05\u5206\u949f\u540e\u518d\u6b21\u542f\u52a8\uff0c\u5237\u65b0session\u3002",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(e.h3,{id:"\u9875\u9762\u4e8b\u4ef6",children:"\u9875\u9762\u4e8b\u4ef6"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 GrowingIO \u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c",(0,r.jsx)(e.strong,{children:"\u9875\u9762\u4e8b\u4ef6"}),"\u5b9a\u4e49\uff1a",(0,r.jsx)("br",{}),"\nWeb\u7aef\uff1a\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u4e86\u4e00\u4e2a\u9875\u9762",(0,r.jsx)("br",{}),"\n\u79fb\u52a8\u7aef\uff1a\u7528\u6237\u5728\u79fb\u52a8\u5e94\u7528\u4e2d\u8bbf\u95ee\u4e86\u4e00\u4e2a\u9875\u9762",(0,r.jsx)("br",{}),"\n\u5c0f\u7a0b\u5e8f\uff1a\u7528\u6237\u5728\u5fae\u4fe1\u4e2d\u8bbf\u95ee\u4e86\u5c0f\u7a0b\u5e8f\u7684\u4e00\u4e2a\u9875\u9762"]}),"\n",(0,r.jsx)(e.h3,{id:"\u5143\u7d20\u4e8b\u4ef6",children:"\u5143\u7d20\u4e8b\u4ef6"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 GrowingIO \u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c",(0,r.jsx)(e.strong,{children:"\u5143\u7d20\u4e8b\u4ef6"}),"\u5b9a\u4e49\uff1a",(0,r.jsx)("br",{}),"\nWeb\u7aef\uff1a\u70b9\u51fb\u4e86\u4e00\u4e2a\u9875\u9762\u5143\u7d20\u63d0\u4ea4\u4e86\u4e00\u4e2a\u8868\u5355\u4fee\u6539\u4e86\u67d0\u4e2a\u8f93\u5165\u6846",(0,r.jsx)("br",{}),"\n\u79fb\u52a8\u7aef\uff1a\u70b9\u51fb\u4e86\u4e00\u4e2a\u63a7\u4ef6\u5143\u7d20\u4fee\u6539\u4e86\u67d0\u4e2a\u8f93\u5165\u6846",(0,r.jsx)("br",{}),"\n\u5c0f\u7a0b\u5e8f\u70b9\u51fb\u4e86\u4e00\u4e2a\u9875\u9762\u5143\u7d20\u63d0\u4ea4\u4e86\u4e00\u4e2a\u8868\u5355\u4fee\u6539\u4e86\u67d0\u4e2a\u8f93\u5165\u6846"]}),"\n",(0,r.jsx)(e.h2,{id:"\u57cb\u70b9",children:"\u57cb\u70b9"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5f88\u591a\u4e1a\u52a1\u5206\u6790\u573a\u666f\u4e2d\uff0c\u5355\u7eaf\u7684\u65e0\u57cb\u70b9\u65e0\u6cd5\u6ee1\u8db3\u7528\u6237\u7684\u5206\u6790\u9700\u6c42\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u57cb\u70b9"}),"\u662f\u6307\u7814\u53d1\u96c6\u6210 GrowingIO SDK\u540e\uff0c\u5f00\u53d1\u989d\u5916\u7684\u4ee3\u7801\uff0c\u8c03\u7528 GrowingIO SDK \u4e2d\u63d0\u4f9b\u7684API\uff0c\u624b\u52a8\u53d1\u9001\u4e8b\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u57cb\u70b9\u4e8b\u4ef6",children:"\u57cb\u70b9\u4e8b\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u8c03\u7528 track \u7c7b\u578b\u63a5\u53e3\u89e6\u53d1\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",children:"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u8c03\u7528 userAttribute \u7c7b\u578b\u63a5\u53e3\u89e6\u53d1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728 GrowingIO \u7cfb\u7edf\u4e2d\uff0c\u57cb\u70b9\u4e8b\u4ef6\u7684\u884c\u4e3a\u5c42\u7ea7\u5173\u7cfb\u7b49\u540c\u4e8e\u65e0\u57cb\u70b9\u4e8b\u4ef6\u7684\u5143\u7d20\u4e8b\u4ef6\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u57cb\u70b9\u4e8b\u4ef6\u6309\u57cb\u70b9\u4f4d\u7f6e\u53ef\u4ee5\u5206\u4e3a",(0,r.jsx)(e.strong,{children:"\u5ba2\u6237\u7aef\u57cb\u70b9"}),"\u548c",(0,r.jsx)(e.strong,{children:"\u670d\u52a1\u7aef\u57cb\u70b9"}),"\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u5ba2\u6237\u7aef\u57cb\u70b9",children:"\u5ba2\u6237\u7aef\u57cb\u70b9"}),"\n",(0,r.jsx)(e.p,{children:"\u7814\u53d1\u53ef\u4ee5\u901a\u8fc7\u5728\u81ea\u5df1\u7684\u5ba2\u6237\u7aef\u5e94\u7528\u4e2d\u901a\u8fc7\u8c03\u7528 SDK \u7684 API \u6765\u53d1\u9001\u57cb\u70b9\u6570\u636e"}),"\n",(0,r.jsx)(e.h3,{id:"\u670d\u52a1\u7aef\u57cb\u70b9",children:"\u670d\u52a1\u7aef\u57cb\u70b9"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u4e00\u4e9b\u590d\u6742\u7684\u4e1a\u52a1\u4e8b\u4ef6\uff0c\u5982\uff1a\u5e94\u7528\u7684\u5ba2\u6237\u7aef\u6ca1\u6709\u660e\u786e\u7684\u64cd\u4f5c\u6210\u529f\u6807\u8bb0\uff0c\u65e0\u6cd5\u901a\u8fc7\u65e0\u57cb\u70b9\u4e8b\u4ef6\u8fdb\u884c\u5206\u6790\uff1b\u7ebf\u4e0b\u8425\u9500\u6d3b\u52a8\u6570\u636e\u5f55\u5165\uff0c\u65e0\u6cd5\u901a\u8fc7\u65e0\u57cb\u70b9\u4e8b\u4ef6\u8fdb\u884c\u5206\u6790\u3002\n\u7814\u53d1\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u901a\u8fc7\u8c03\u7528 GrowingIO \u7684\u670d\u52a1\u5668\u57cb\u70b9\u4e8b\u4ef6\u63a5\u53e3\u6765\u53d1\u9001\u57cb\u70b9\u6570\u636e\u3002"})]})}function j(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>t,a:()=>d});var r=s(7294);const i={},o=r.createContext(i);function d(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);