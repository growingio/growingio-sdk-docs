"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7362],{6167:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=i(5893),l=i(1151);const s={sidebar_position:5,title:"HarmonyOS NEXT SDK \u5408\u89c4\u8bf4\u660e"},r=void 0,c={id:"compliance/harmonyosCompliance",title:"HarmonyOS NEXT SDK \u5408\u89c4\u8bf4\u660e",description:"\u9690\u79c1\u534f\u8bae",source:"@site/knowledge/compliance/harmonyosCompliance.md",sourceDirName:"compliance",slug:"/compliance/harmonyosCompliance",permalink:"/growingio-sdk-docs/knowledge/compliance/harmonyosCompliance",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/compliance/harmonyosCompliance.md",tags:[],version:"current",lastUpdatedAt:1734675591,formattedLastUpdatedAt:"Dec 20, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"HarmonyOS NEXT SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"knowledge",previous:{title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs/knowledge/compliance/minpCompliance"},next:{title:"Debug \u548c\u6821\u9a8c",permalink:"/growingio-sdk-docs/knowledge/debugverify"}},d={},o=[{value:"\u9690\u79c1\u534f\u8bae",id:"\u9690\u79c1\u534f\u8bae",level:2},{value:"\u9690\u79c1\u534f\u8bae\u586b\u5199",id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",level:2},{value:"\u6536\u96c6\u548c\u83b7\u53d6",id:"\u6536\u96c6\u548c\u83b7\u53d6",level:3},{value:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",level:3},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"\u91c7\u96c6\u8be6\u60c5",id:"\u91c7\u96c6\u8be6\u60c5",level:2},{value:"\u8bbe\u5907\u6743\u9650",id:"\u8bbe\u5907\u6743\u9650",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u65b9\u5f0f\u4e00\u3001\u8bbe\u7f6e\u6570\u636e\u91c7\u96c6\u5f00\u5173",id:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u91c7\u96c6\u5f00\u5173",level:3},{value:"\u65b9\u5f0f\u4e8c\u3001\u5ef6\u8fdf\u521d\u59cb\u5316",id:"\u65b9\u5f0f\u4e8c\u5ef6\u8fdf\u521d\u59cb\u5316",level:3},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u9690\u79c1\u534f\u8bae",children:"\u9690\u79c1\u534f\u8bae"}),"\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e",(0,t.jsx)(e.a,{href:"http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm",children:"\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u5173\u4e8e\u5f00\u5c55\u7eb5\u6df1\u63a8\u8fdb APP \u4fb5\u5bb3\u7528\u6237\u6743\u76ca\u4e13\u9879\u6574\u6cbb\u884c\u52a8"}),"\u7684\u6307\u5bfc\uff0c\u5e94\u7528\u7a0b\u5e8f\uff08App\uff09\u5fc5\u987b\u901a\u8fc7\u8be6\u7ec6\u7684\u9690\u79c1\u534f\u8bae\u6765\u660e\u786e\u9610\u8ff0\u5176\u6240\u91c7\u96c6\u7684\u7528\u6237\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u786e\u4fdd\u60a8\u7684 App \u5728\u96c6\u6210 GrowingIO SDK \u4e4b\u540e\uff0c\u80fd\u591f\u5168\u9762\u7b26\u5408\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u7684\u76f8\u5173\u5408\u89c4\u8981\u6c42\u53ca\u56fd\u5bb6\u6cd5\u5f8b\u89c4\u5b9a\uff0c\u8bf7\u60a8\u53c2\u8003\u4ee5\u4e0b\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u9690\u79c1\u534f\u8bae\u586b\u5199",children:"\u9690\u79c1\u534f\u8bae\u586b\u5199"}),"\n",(0,t.jsx)(e.h3,{id:"\u6536\u96c6\u548c\u83b7\u53d6",children:"\u6536\u96c6\u548c\u83b7\u53d6"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u6536\u96c6\u548c\u83b7\u5f97\u7684\u4e2a\u4eba\u4fe1\u606f\u680f\u76ee\u4e2d\u6839\u636e",(0,t.jsx)(e.strong,{children:"\u5b9e\u9645\u60c5\u51b5"}),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002 \n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u5728\u7b2c\u4e09\u65b9SDK\u5217\u8868\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9(\u8bbe\u5907\u4fe1\u606f\u6309\u7167",(0,t.jsx)(e.strong,{children:"\u5b9e\u9645\u60c5\u51b5"}),"\u586b\u5199)\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"GrowingIO HarmonyOS NEXT SDK\n\u7528\u9014\uff1a\u5206\u6790\u6536\u96c6\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f(App)\u7528\u6237\u7684\u4f7f\u7528\u60c5\u51b5\n\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\u7c7b\u578b\uff1a\u8bbe\u5907\u7c7b\u578b\uff0c\u8bbe\u5907\u7248\u672c\uff0c\u7cfb\u7edf\u7248\u672c\uff0c\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u7f51\u7edc\u8bbe\u5907\u5236\u9020\u5546\uff0cIP\u5730\u5740\uff0c\u7f51\u7edc\u6a21\u5f0f\n\u63d0\u4f9b\u65b9\uff1a\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\n\u7b2c\u4e09\u65b9SDK\u9690\u79c1\u534f\u8bae\u94fe\u63a5\uff1ahttps://accounts.growingio.com/user-privacy\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab",children:"\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u60a8\u7684APP\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\u7684\u4e0e\u6388\u6743\u5408\u4f5c\u4f19\u4f34\u5171\u4eab\u680f\u76ee\u4e2d\u6839\u636e",(0,t.jsx)(e.strong,{children:"\u5b9e\u9645\u60c5\u51b5"}),"\u586b\u5199\u5982\u4e0b\u5185\u5bb9:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\u6211\u4eec\u7684\u4ea7\u54c1\u96c6\u6210\u4e86 GrowingIO SDK\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 GrowingIO SDK \u6536\u96c6\u60a8\u7684\u8bbe\u5907\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u64cd\u4f5c\u7cfb\u7edf\u3001\u8bbe\u5907\u578b\u53f7\u3001\u7cfb\u7edf\u7248\u672c\uff09\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u60a8\u5728 App \u5185\u7684\u4f7f\u7528\u6548\u679c\uff0c\u4ece\u800c\u6539\u8fdb\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5408\u89c4\u6b65\u9aa4",children:"\u5408\u89c4\u6b65\u9aa4"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u60a8\u9700\u8981\u786e\u4fdd App \u6709\u8be6\u7ec6\u4e14\u660e\u786e\u7684\u7b26\u5408\u56fd\u5bb6\u6cd5\u5f8b\u6cd5\u89c4\u89c4\u5b9a\u7684\u300a\u9690\u79c1\u534f\u8bae\u300b\u6216\u76f8\u5173\u653f\u7b56\uff0c\u4e14\u8be5\u534f\u8bae\u5c06\u5168\u9762\u9610\u8ff0\u5982\u4f55\u6536\u96c6\u3001\u4f7f\u7528\u3001\u5b58\u50a8\u53ca\u4fdd\u62a4\u6700\u7ec8\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5728\u6700\u7ec8\u7528\u6237\u9996\u6b21\u542f\u52a8 App \u65f6\uff0c\u7cfb\u7edf\u5e94\u5411\u6700\u7ec8\u7528\u6237\u81ea\u52a8\u5f39\u51fa\u6216\u5c55\u793a\u300a\u9690\u79c1\u534f\u8bae\u300b\u7684\u754c\u9762\uff0c\u8be5\u754c\u9762\u5e94\u8bbe\u8ba1\u76f4\u89c2\u3001\u6613\u4e8e\u7406\u89e3\uff0c\u5e76\u540c\u65f6\u63d0\u51fa \u201c\u540c\u610f\u534f\u8bae\u201d\u3001\u201c\u62d2\u7edd\u534f\u8bae\u201d \u4e24\u79cd\u660e\u786e\u7684\u9009\u9879\uff0c\u4ee5\u4f9b\u7528\u6237\u9009\u62e9\u3002\u7528\u6237\u5fc5\u987b\u5728\u505a\u51fa\u9009\u62e9\u540e\uff0c\u624d\u80fd\u7ee7\u7eed\u4f7f\u7528 App\uff0c\u4ee5\u786e\u4fdd\u5bf9\u5176\u4e2a\u4eba\u4fe1\u606f\u7684\u6536\u96c6\u548c\u5904\u7406\u7684\u5145\u5206\u77e5\u60c5\u53ca\u81ea\u4e3b\u9009\u62e9\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u8bf7\u52a1\u5fc5\u544a\u77e5\u6700\u7ec8\u7528\u6237\uff0cApp \u4e2d\u96c6\u6210\u5e76\u4f7f\u7528\u4e86 GrowingIO SDK\u3002\u5728\u300a\u9690\u79c1\u534f\u8bae\u300b\u4e2d\uff0c\u60a8\u9700\u8981\u7279\u522b\u6dfb\u52a0\u5173\u4e8e GrowingIO SDK \u4f7f\u7528\u7684\u4e2a\u4eba\u9690\u79c1\u6761\u6b3e\uff0c\u534f\u8bae\u94fe\u63a5\u4e3a\uff1a",(0,t.jsx)(e.a,{href:"https://accounts.growingio.com/user-privacy",children:"https://accounts.growingio.com/user-privacy"})," \u660e\u786e\u8bf4\u660e SDK \u7684\u63d0\u4f9b\u65b9\u3001\u8be6\u7ec6\u4fe1\u606f\u3001\u6570\u636e\u6536\u96c6\u8303\u56f4\u3001\u76ee\u7684\u3001\u5b58\u50a8\u65b9\u5f0f\u53ca\u5b89\u5168\u4fdd\u969c\u63aa\u65bd\u7b49\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u7279\u522b\u63d0\u9192\uff0c\u8bf7\u5728\u6700\u7ec8\u7528\u6237\u660e\u786e\u540c\u610f\u300a\u9690\u79c1\u534f\u8bae\u300b\u540e\uff0c\u518d\u884c\u542f\u52a8 SDK \u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u82e5\u6700\u7ec8\u7528\u6237\u62d2\u7edd\u300a\u9690\u79c1\u534f\u8bae\u300b\uff0c\u8bf7\u52ff\u4f7f\u7528 GrowingIO SDK \u8fdb\u884c\u91c7\u96c6\uff0c\u4ee5\u5c0a\u91cd\u7528\u6237\u7684\u610f\u613f\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u7528\u6237\u5355\u72ec\u540c\u610f\u5408\u89c4\n\u6839\u636e\u300a\u4e2a\u4eba\u4fe1\u606f\u4fdd\u62a4\u6cd5\u300b\u7b2c 23\u300125\u300126\u300129 \u548c 39 \u6761\u4ee5\u53ca\u300a\u4fe1\u606f\u5b89\u5168\u6280\u672f\u4e2a\u4eba\u4fe1\u606f\u5904\u7406\u4e2d\u544a\u77e5\u540c\u610f\u7684\u5b9e\u65bd\u6307\u5357\u300b\u7b2c 9.2 \u6761\u7684\u89c4\u5b9a\uff0c\u201c\u5355\u72ec\u540c\u610f\u201d \u4e3b\u8981\u9002\u7528\u4e8e\u4ee5\u4e0b\u4e94\u79cd\u60c5\u5f62\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"1\uff09\u5411\u5176\u4ed6\u4e2a\u4eba\u4fe1\u606f\u5904\u7406\u8005\u63d0\u4f9b\u5176\u5904\u7406\u7684\u4e2a\u4eba\u4fe1\u606f\uff1b"}),"\n",(0,t.jsx)(e.p,{children:"2\uff09\u516c\u5f00\u5176\u5904\u7406\u7684\u4e2a\u4eba\u4fe1\u606f\uff1b"}),"\n",(0,t.jsx)(e.p,{children:"3\uff09\u5c06\u516c\u5171\u573a\u6240\u6536\u96c6\u7684\u4e2a\u4eba\u56fe\u50cf/\u8eab\u4efd\u7279\u5f81\u4fe1\u606f\u7528\u4e8e\u975e\u516c\u5171\u5b89\u5168\u4e4b\u76ee\u7684\uff1b"}),"\n",(0,t.jsx)(e.p,{children:"4\uff09\u5904\u7406\u654f\u611f\u4e2a\u4eba\u4fe1\u606f\uff08\u654f\u611f\u4e2a\u4eba\u4fe1\u606f\u7684\u5177\u4f53\u5224\u65ad\u53ca\u5206\u7ea7\u6807\u51c6\u53c2\u89c1\uff1a\u56fd\u5bb6\u6807\u51c6 GB/T 35273-2020 <\u4fe1\u606f\u5b89\u5168\u6280\u672f\u4e2a\u4eba\u4fe1\u606f\u5b89\u5168\u89c4\u8303>\uff09\uff1b"}),"\n",(0,t.jsx)(e.p,{children:"5\uff09\u5411\u5883\u5916\u63d0\u4f9b\u4e2a\u4eba\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u9488\u5bf9\u4e0a\u8ff0\u60c5\u5f62\uff0c\u5728\u7528\u6237\u505a\u51fa\u5355\u72ec\u540c\u610f\u4e4b\u524d\uff0c\u60a8\u5e94\u5f53\u901a\u8fc7\u589e\u5f3a\u5f0f\u544a\u77e5\u6216\u5373\u65f6\u63d0\u793a\u7684\u65b9\u5f0f\uff0c\u9488\u5bf9\u9700\u8981\u5355\u72ec\u540c\u610f\u7684\u4e8b\u9879\u4e88\u4ee5\u4e13\u95e8\u3001\u5145\u5206\u7684\u544a\u77e5\u3002\u8fd9\u5c31\u610f\u5473\u7740\u60a8\u4e0d\u80fd\u5c06\u5355\u72ec\u540c\u610f\u4e8b\u9879\u6346\u7ed1\u6216\u8005\u6df7\u540c\u5728\u5176\u4ed6\u540c\u610f\u4e8b\u9879\u4e2d\uff0c\u91c7\u53d6\u4e00\u63fd\u5b50\u7684\u65b9\u5f0f\u53d6\u5f97\u6700\u7ec8\u7528\u6237\u7684\u540c\u610f\u3002\u800c\u662f\u5e94\u8be5\u5c06\u201c\u5355\u72ec\u540c\u610f\u201d\u4e8b\u9879\u62bd\u79bb\u51fa\u6765\u5355\u72ec\u544a\u77e5\u3002\u4f8b\u5982\u901a\u8fc7\u5f39\u7a97\uff0c\u53ef\u4e0b\u6ed1\u67e5\u770b\u7684\u5d4c\u5957\u7f51\u9875\u3001\u8df3\u8f6c\u5230\u53e6\u4e00\u9875\u9762\u4ee5\u589e\u5f3a\u544a\u77e5\u7b49\u65b9\u5f0f\u6e05\u6670\u660e\u786e\u5730\u5bf9\u7528\u6237\u8fdb\u884c\u544a\u77e5\u8bf4\u660e\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u91c7\u96c6\u8be6\u60c5",children:"\u91c7\u96c6\u8be6\u60c5"}),"\n",(0,t.jsx)(e.h3,{id:"\u8bbe\u5907\u6743\u9650",children:"\u8bbe\u5907\u6743\u9650"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"\u6743\u9650"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u7528\u9014"}),(0,t.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,t.jsx)(e.th,{children:"\u7533\u8bf7\u65f6\u673a"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"ohos.permission.INTERNET"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u8054\u7f51\u548c\u53d1\u9001\u7edf\u8ba1\u6570\u636e\u7684\u6743\u9650\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1"}),(0,t.jsx)(e.td,{children:"\u5fc5\u987b\u6743\u9650"}),(0,t.jsx)(e.td,{children:"\u53d1\u9001\u57cb\u70b9\u6570\u636e\u65f6"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"ohos.permission.GET_NETWORK_INFO"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u83b7\u53d6\u5f53\u524d\u8054\u7f51\u65b9\u5f0f\u7684\u6743\u9650\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u7edf\u8ba1\u5206\u6790\u670d\u52a1"}),(0,t.jsx)(e.td,{children:"\u5fc5\u987b\u6743\u9650"}),(0,t.jsx)(e.td,{children:"\u53d1\u9001\u57cb\u70b9\u6570\u636e\u65f6"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(e.h3,{id:"\u65b9\u5f0f\u4e00\u8bbe\u7f6e\u6570\u636e\u91c7\u96c6\u5f00\u5173",children:"\u65b9\u5f0f\u4e00\u3001\u8bbe\u7f6e\u6570\u636e\u91c7\u96c6\u5f00\u5173"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 AbilityStage \u7684 onCreate \u65b9\u6cd5\u4e2d\u521d\u59cb\u5316 SDK (Stage \u6a21\u578b)\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"export default class MyAbilityStage extends AbilityStage {\n  onCreate(): void {\n    // \u5e94\u7528\u7684HAP\u5728\u9996\u6b21\u52a0\u8f7d\u7684\u65f6\uff0c\u4e3a\u8be5Module\u521d\u59cb\u5316\u64cd\u4f5c\n    this.startAnalytics()\n  }\n  onAcceptWant(want: Want): string {\n    // \u4ec5specified\u6a21\u5f0f\u4e0b\u89e6\u53d1\n    return 'MyAbilityStage'\n  }\n\n  startAnalytics() {\n    let config = ...\n    // 1.dataCollectionEnabled \u8bbe\u7f6e\u4e3a false\n    config.dataCollectionEnabled = false\n    // 2.\u521d\u59cb\u5316 GrowingIO SDK\n    // GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n    GrowingAnalytics.start(this.context, config)\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u67d0\u4e00\u65f6\u523b\uff0c\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"GrowingAnalytics.setDataCollectionEnabled(true)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u65b9\u5f0f\u4e8c\u5ef6\u8fdf\u521d\u59cb\u5316",children:"\u65b9\u5f0f\u4e8c\u3001\u5ef6\u8fdf\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 EntryAbility \u7684 onCreate \u65b9\u6cd5\u4e2d\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\u521d\u59cb\u5316 SDK (Stage \u6a21\u578b)\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"export default class EntryAbility extends UIAbility {\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n        if (<\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae>){\n        \t// \u5c55\u793a\u9690\u79c1\u534f\u8bae\u5f39\u7a97\uff0c\u7b49\u5f85\u7528\u6237\u540c\u610f\n            ...\n\n        \tif (<\u7528\u6237\u540c\u610f\u4e86\u9690\u79c1\u534f\u8bae>){\n        \t\t// GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n\t\t        ...\n        \t}\n        } else {\n            //\u7528\u6237\u5df2\u7ecf\u540c\u610f\u9690\u79c1\u534f\u8bae\n            // GrowingIO SDK \u521d\u59cb\u5316\u4ee3\u7801\n            ...\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",children:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"HarmonyOS NEXT SDK \u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u652f\u6301\u8bbe\u7f6e\u53d1\u9001\u95f4\u9694\uff0c\u9ed8\u8ba4 15 \u79d2\uff0cSDK \u4f1a\u5148\u5c06\u884c\u4e3a\u6570\u636e\u5b58\u5165 App \u672c\u5730 sqlite \u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u95f4\u9694\u65f6\u95f4\u5411\u670d\u52a1\u5668\u53d1\u9001\u884c\u4e3a\u6570\u636e\u5305\uff08\u6700\u5927 500 \u6761\u884c\u4e3a\u6570\u636e\uff09\uff0c\u5982\u679c\u5f85\u53d1\u9001\u884c\u4e3a\u6570\u636e\u91cf\u5927\u4e8e 500 \u6761\uff0c\u5219\u53d1\u9001\u81f3\u6240\u6709\u6570\u636e\u53d1\u9001\u5b8c\u6210\uff0c\u884c\u4e3a\u6570\u636e\u53d1\u9001\u6210\u529f\u540e\u5c06\u5728\u6570\u636e\u5e93\u4e2d\u5220\u9664\u3002\u6570\u636e\u5e93\u4e2d\u672a\u53d1\u9001\u7684\u884c\u4e3a\u6570\u636e\u4f1a\u5728 7 \u5929\u4e4b\u540e\u5220\u9664\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var t=i(7294);const l={},s=t.createContext(l);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);