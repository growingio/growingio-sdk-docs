"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3346],{2518:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=d(5893),s=d(1151);const r={sidebar_position:1,title:"\u7528\u6237\u6a21\u578b"},t=void 0,l={id:"basicknowledge/userModel",title:"\u7528\u6237\u6a21\u578b",description:"\u5728 GrowingIO \u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c\u6839\u636e\u5206\u6790\u573a\u666f\u9700\u8981\uff0c\u5efa\u7acb\u4e86\u4e24\u5957\u7528\u6237\u6a21\u578b\u6765\u8868\u8fbe\u8bbf\u95ee\u7528\u6237\u548c\u767b\u5f55\u7528\u6237\u7684\u6982\u5ff5\u3002",source:"@site/knowledge/basicknowledge/userModel.md",sourceDirName:"basicknowledge",slug:"/basicknowledge/userModel",permalink:"/growingio-sdk-docs/knowledge/basicknowledge/userModel",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/knowledge/basicknowledge/userModel.md",tags:[],version:"current",lastUpdatedAt:1717385669,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u7528\u6237\u6a21\u578b"},sidebar:"knowledge",previous:{title:"\u7b80\u4ecb",permalink:"/growingio-sdk-docs/knowledge/basicknowledge"},next:{title:"\u4e8b\u4ef6\u6a21\u578b",permalink:"/growingio-sdk-docs/knowledge/basicknowledge/eventModel"}},o={},c=[{value:"\u8bbf\u95ee\u7528\u6237",id:"\u8bbf\u95ee\u7528\u6237",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",level:3},{value:"Web",id:"web",level:3},{value:"\u767b\u5f55\u7528\u6237",id:"\u767b\u5f55\u7528\u6237",level:2},{value:"\u767b\u5f55\u7528\u6237ID",id:"\u767b\u5f55\u7528\u6237id",level:3},{value:"\u7528\u6237\u5c5e\u6027",id:"\u7528\u6237\u5c5e\u6027",level:2}];function h(e){const n={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5728 GrowingIO \u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c\u6839\u636e\u5206\u6790\u573a\u666f\u9700\u8981\uff0c\u5efa\u7acb\u4e86\u4e24\u5957\u7528\u6237\u6a21\u578b\u6765\u8868\u8fbe\u8bbf\u95ee\u7528\u6237\u548c\u767b\u5f55\u7528\u6237\u7684\u6982\u5ff5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3e\u4f8b\u6765\u8bf4\uff1a\n\u5c0f\u660e\u5728\u624b\u673a\u4e0a\u5237\u670b\u53cb\u5708\u65f6\u770b\u5230\u4e86\u67d0\u4e2a\u7535\u5546\u5e73\u53f0\u7684 H5 \u5e7f\u544a\u9875\u9762\uff0c\u4ed6\u70b9\u51fb\u4e86\u8fd9\u4e2a\u5e7f\u544a\u5185\u5bb9\uff0c\u8fdb\u5165\u4e86\u4e00\u4e2a\u5f15\u5bfc\u6ce8\u518c\u7684 H5 \u9875\u9762\uff0c\u5c0f\u660e\u586b\u5199\u81ea\u5df1\u7684\u624b\u673a\u53f7\u901a\u8fc7\u9a8c\u8bc1\uff0c\u6ce8\u518c\u6210\u529f\uff0c\u5e76\u5728\u6210\u529f\u9875\u9762\u770b\u5230\u63d0\u793a\u4e0b\u8f7d App \u5373\u9001 5 \u5f20\u6ee1\u51cf\u4f18\u60e0\u5238\uff0c\u5c0f\u660e\u4e0b\u8f7d\u4e86 App \u5e76\u767b\u5f55\uff0c\u9009\u62e9\u4e86\u81ea\u5df1\u5fc3\u4eea\u7684\u4ea7\u54c1\u540e\u4f7f\u7528\u4f18\u60e0\u5238\u7ed3\u7b97\uff0c\u5b8c\u6210\u4e86\u8d2d\u4e70\u6d41\u7a0b\u3002\n\u4e0a\u8ff0\u7684\u4f8b\u5b50\u662f\u4e00\u4e2a\u5178\u578b\u7684\u4e92\u8054\u7f51\u8425\u9500\u7684\u6848\u4f8b\uff0c\u6211\u4eec\u901a\u8fc7\u4e0a\u8ff0\u6848\u4f8b\u6765\u63cf\u8ff0\u4e00\u4e0b GrowingIO \u7684\u4e24\u79cd\u7528\u6237\u6a21\u578b\u5206\u522b\u9002\u5408\u5728\u54ea\u4e9b\u5206\u6790\u573a\u666f\u4e0b\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbf\u95ee\u7528\u6237",children:"\u8bbf\u95ee\u7528\u6237"}),"\n",(0,i.jsx)(n.p,{children:"\u8bbf\u95ee\u7528\u6237\u662f GrowingIO \u5bf9\u8bbf\u95ee\u60a8\u7684\u5e94\u7528\uff08\u5305\u62ec\u7f51\u9875\u3001App\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b49\uff0c\u4e0b\u540c\uff09\u7684\u7528\u6237\u7684\u4e00\u79cd\u8bc6\u522b\u673a\u5236\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6bcf\u4e00\u4e2a\u8bbf\u95ee\u60a8\u7684\u5e94\u7528\u7684\u7528\u6237\u90fd\u4f1a\u5728\u5bf9\u5e94\u7684\u8bbe\u5907\u4e2d\u751f\u6210\u5e76\u8bb0\u5f55\u4e00\u4e2a\u552f\u4e00\u7684 ID\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u8bbf\u95ee\u7528\u6237ID\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8bbf\u95ee\u7528\u6237ID"}),"\uff1aGrowingIO SDK \u4e3a\u6240\u6709\u7ec8\u7aef\u751f\u6210\u7684\u552f\u4e00ID\uff0c\u7528\u4e8e\u6807\u8bc6\u8bbf\u95ee\u7528\u6237\uff0c\u5982\u679c\u60a8\u60f3\u8981\u5206\u6790\u7684\u662f\u4ea7\u54c1\u6240\u6709\u8bbf\u5ba2\uff0c\u53ef\u4ee5\u9009\u62e9\u201c\u8bbf\u95ee\u7528\u6237\u201d\uff1b\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5c0f\u660e\u8bbf\u95ee H5 \u5e7f\u544a\u9875\u9762\u65f6\uff0cGrowingIO SDK \u4f1a\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684 ID \u5e76\u8bb0\u5f55\u5728Cookie \u4e2d\uff0c\u8fd9\u4e2a ID \u5c06\u4f5c\u4e3a\u5c0f\u660e\u4eca\u540e\u5728\u8be5 H5 \u7ad9\u70b9\u7684\u552f\u4e00 ID\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e0d\u540c\u5e73\u53f0\u7c7b\u578b\u7684\u5e94\u7528\uff0cGrowingIO SDK \u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u8bbf\u95ee\u7528\u6237ID\u751f\u6210\u65b9\u6848\uff0c\u4ece\u800c\u5c3d\u53ef\u80fd\u7684\u5b9e\u73b0\u5bf9\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\u3002\u540c\u4e00\u4e2a\u9879\u76ee\u4e2d\u76f8\u540c\u7684\u8bbf\u95ee\u7528\u6237ID\u4f1a\u8bc6\u522b\u4e3a\u4e00\u4e2a\u7528\u6237\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,i.jsxs)(n.p,{children:["IDFA > IDFV > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID",(0,i.jsx)("br",{}),"\niOS\u8bbe\u5907\u5982\u679c\u60f3\u8981\u4f7f\u7528IDFA\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff0c\u9700\u8981\u8bf7\u6c42\u7528\u6237\u6388\u6743\u83b7\u53d6IDFA\u4e4b\u540e\u521d\u59cb\u5316SDK\uff1b\u5982\u679c\u62d2\u7edd\u6388\u6743\uff0ciOS \u6309\u7167\u4f18\u5148\u7ea7 IDFV > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID, \u751f\u6210\u8bbf\u95ee\u7528\u6237ID \uff1b\u4f7f\u7528Keychain\u5b58\u50a8\uff0c\u5220\u6389\u5e94\u7528\u540e\u518d\u6b21\u5b89\u88c5\u8fd8\u662f\u540c\u4e00\u8bbf\u95ee\u7528\u6237ID\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(n.p,{children:["androidId > imei > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID",(0,i.jsx)("br",{}),"\nAndroid \u8bbe\u5907\u9996\u5148\u4f1a\u83b7\u53d6AndroidID\uff0c\u5982\u679cAndroidID \u4e3a\u7a7a\u6216\u4e3a\u201c9774d56d682e549c\u201d(\u5c71\u5be8\u673a\u6216\u5176\u4ed6\u8bbe\u5907)\uff0c\u4f1a\u8bf7\u6c42\u7528\u6237\u6388\u6743\u83b7\u53d6IMEI\uff0c\u5982\u679cIMEI\u83b7\u53d6\u4e0d\u5230\uff0c\u4f1a\u968f\u673a\u8bbf\u95ee\u7528\u6237ID \uff1b\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u5b58\u50a8\uff0c\u5220\u6389\u5e94\u7528\u540e\u518d\u6b21\u6309\u7167\u903b\u8f91\u751f\u6210\u53ef\u80fd\u4f1a\u4e0d\u4e00\u6837\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5c0f\u7a0b\u5e8f",children:"\u5c0f\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(n.p,{children:["OpenID  > \u968f\u673a\u8bbf\u95ee\u7528\u6237ID",(0,i.jsx)("br",{}),"\n\u5982\u679cSDK\u8bbe\u7f6e\u4e86\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f\uff0c\u7528\u6237\u6388\u6743\u5fae\u4fe1\u767b\u5f55\u83b7\u53d6\u5230openid\u4e14\u8c03\u7528 identify \u4e0a\u62a5\uff0c\u4f1a\u4f7f\u7528 openid \u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID \uff0c\u5426\u5219\u4f1a\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u968f\u673a\u8bbf\u95ee\u7528\u6237ID\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\u3002\u4f7f\u7528 storage \u5b58\u50a8\uff0c\u5220\u9664\u5c0f\u7a0b\u5e8f\u518d\u6b21\u8fdb\u5165\u8bbf\u95ee\u7528\u6237ID \u4f1a\u6539\u53d8\uff08\u8bbf\u95ee\u7528\u6237ID\u662f openid\u7684\u60c5\u51b5\u4e0d\u4f1a\uff09\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"web",children:"Web"}),"\n",(0,i.jsxs)(n.p,{children:["\u968f\u673a\u8bbf\u95ee\u7528\u6237ID",(0,i.jsx)("br",{}),"\nWeb\u4f7f\u7528\u968f\u673a\u8bbf\u95ee\u7528\u6237ID\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff0c  \u4f7f\u7528 localStorage \u5b58\u50a8\uff0c\u6c38\u4e45\u6709\u6548\uff0c\u5220\u9664\u540e\u518d\u6b21\u751f\u6210\u4f1a\u6539\u53d8\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8be6\u60c5\u8bf4\u660e\u53c2\u8003",(0,i.jsx)(n.a,{href:"/docs/question/common#10-%E5%AE%A2%E6%88%B7%E7%AB%AFsdk-deviceid-%E7%94%9F%E6%88%90%E6%9C%BA%E5%88%B6%E7%AE%80%E8%A6%81%E9%80%BB%E8%BE%91%E6%98%AF%E4%BB%80%E4%B9%88",children:"DeviceID \u751f\u6210\u673a\u5236"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u767b\u5f55\u7528\u6237",children:"\u767b\u5f55\u7528\u6237"}),"\n",(0,i.jsx)(n.p,{children:"\u767b\u5f55\u7528\u6237\u662f GrowingIO SDK \u63d0\u4f9b\u7ed9\u60a8\u5c06\u5f53\u524d\u7528\u6237\u7ed1\u5b9a\u5230\u60a8\u4e1a\u52a1\u7cfb\u7edf\u8d26\u53f7\u7684\u4e00\u4e2a\u673a\u5236\u3002\n\u540c\u65f6\u652f\u6301\u767b\u5f55\u7528\u6237\u7684\u4e0d\u540c\u8eab\u4efd\u4f53\u7cfb\uff0c\u4f8b\u5982\u5728\u5c0f\u7a0b\u5e8f\u7aef\u767b\u5f55\u7528\u6237ID\u662f\u624b\u673a\u53f7\uff0c\u5728APP\u7aef\u767b\u5f55\u7528\u6237ID\u662f\u90ae\u7bb1\u8d26\u53f7\uff0cuserKey\u7528\u4e8e\u6807\u8bb0\u4e0d\u540c\u7684\u8eab\u4efd\u4f53\u7cfb\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u767b\u5f55\u7528\u6237id",children:"\u767b\u5f55\u7528\u6237ID"}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u6ce8\u518c\u7528\u6237ID\uff0c\u7528\u4e8e\u6807\u8bb0\u767b\u5f55\u7528\u6237\uff1b\u5f53\u7528\u6237\u8bbf\u95ee\u60a8\u7684\u4ea7\u54c1\u5e76\u53d1\u751f\u6ce8\u518c/\u767b\u5f55\u884c\u4e3a\u65f6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7GrowingIO SDK \u4e2d\u7684 API \u5c06\u8be5\u7528\u6237\u7684\u6ce8\u518c ID\uff08\u6216\u4e0e\u4e4b\u5bf9\u5e94\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u53ef\u4ee5\u52a0\u5bc6\u5904\u7406\uff09\u8fdb\u884c\u4e0a\u62a5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5982\u679c\u5c06\u5c0f\u660e\u7684\u6ce8\u518cID \u5728\u5c0f\u660e\u53d1\u751f H5 \u6ce8\u518c\u65f6\u548c App \u767b\u5f55\u65f6\u901a\u8fc7 API \u4e0a\u62a5\uff0c\u8fd9\u4e2a ID \u4f1a\u88ab\u4f5c\u4e3a\u4eca\u540e\u5c0f\u660e\u5728\u5404\u4e2a\u5730\u65b9\u4f7f\u7528\u60a8\u7684\u4ea7\u54c1\u7684\u8eab\u4efd\u8bc6\u522bID\u3002GrowingIO \u5206\u6790\u7cfb\u7edf\u5c06\u53ef\u4ee5\u901a\u8fc7\u767b\u5f55\u7528\u6237ID \u5c06\u5c0f\u660e\u5728\u591a\u4e2a\u5e73\u53f0\u4e0a\u7684\u884c\u4e3a\u5f52\u7ed3\u4e3a\u540c\u4e00\u4e2a\u4eba\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7528\u6237\u5c5e\u6027",children:"\u7528\u6237\u5c5e\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u80fd\u591f\u6309\u7167\u67d0\u4e00\u4e2a\u7528\u6237\u7684\u5c5e\u6027\u6216\u8005\u7279\u5f81\u6765\u5206\u62c6\u5206\u6790\u7528\u6237\u884c\u4e3a\uff0cGrowingIO \u63d0\u4f9b\u4e86\u7528\u6237\u5c5e\u6027\u7684\u6982\u5ff5\uff0c\u5141\u8bb8\u7814\u53d1\u901a\u8fc7\u8c03\u7528 SDK \u7684 API \u4e0a\u4f20\u7528\u6237\u76f8\u5173\u7684\u5c5e\u6027\uff0c\u5e76\u652f\u6301\u5728\u5206\u6790\u5de5\u5177\u4e2d\u4f7f\u7528\u7528\u6237\u5c5e\u6027\u6765\u8fdb\u884c\u66f4\u52a0\u8d34\u8fd1\u4e1a\u52a1\u7684\u5206\u6790\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9884\u7f6e\u7528\u6237\u5c5e\u6027\u4e2d\uff0c\u90e8\u5206\u5c5e\u6027\u7684\u5b57\u6bb5\u683c\u5f0f\u6709\u8981\u6c42\uff0c\u89c1\u5982\u4e0b\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7528\u6237\u5c5e\u6027"}),(0,i.jsx)(n.th,{children:"\u6807\u8bc6\u7b26"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u51fa\u751f\u5e74\u6708\u65e5"}),(0,i.jsx)(n.td,{children:"$basic_birthday"}),(0,i.jsx)(n.td,{children:"\u65e5\u671f\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u6027\u522b"}),(0,i.jsx)(n.td,{children:"$basic_gender"}),(0,i.jsx)(n.td,{children:"\u5b57\u7b26\u4e32\uff0c\u679a\u4e3e\u503c\uff1aUNKNOWN,MALE,FEMALE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5730\u5740"}),(0,i.jsx)(n.td,{children:"$basic_address list"}),(0,i.jsx)(n.td,{children:"\u683c\u5f0f\uff0c\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\uff0c\u4f8b\u5982\uff1a\u4e2d\u56fd,\u5317\u4eac,\u671d\u9633\u533a"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u6ce8\u518c\u65f6\u95f4"}),(0,i.jsx)(n.td,{children:"$basic_createdAt"}),(0,i.jsx)(n.td,{children:"\u65f6\u95f4\u6233\u683c\u5f0f\uff08\u6beb\u79d2\u7ea7\uff09\uff0c\u9ed8\u8ba4\u503c false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5173\u6ce8\u516c\u4f17\u53f7"}),(0,i.jsx)(n.td,{children:"$wechat_subscribeList list"}),(0,i.jsx)(n.td,{children:"\u683c\u5f0f\uff0c\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694 \uff0c\u4f8b\u5982\uff1aGrowingIO,\u6613\u6570"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u652f\u4ed8\u5b9d\u5b66\u751f\u8ba4\u8bc1"}),(0,i.jsx)(n.td,{children:"$alipay_isStudentCertified"}),(0,i.jsx)(n.td,{children:"boolean \u7c7b\u578b\uff08true \u6216 false\uff09\uff0c\u9ed8\u8ba4\u503c false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u652f\u4ed8\u5b9d\u5b9e\u540d\u8ba4\u8bc1"}),(0,i.jsx)(n.td,{children:"$alipay_isCertified"}),(0,i.jsx)(n.td,{children:"boolean \u7c7b\u578b\uff08true \u6216 false\uff09\uff0c\u9ed8\u8ba4\u503c false"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>l,a:()=>t});var i=d(7294);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);