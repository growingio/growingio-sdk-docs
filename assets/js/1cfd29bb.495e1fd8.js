"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8413],{3996:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(5893),s=n(1151);const o={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},r=void 0,c={id:"giokit/web/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/giokit/web/integrate.md",sourceDirName:"giokit/web",slug:"/giokit/web/integrate",permalink:"/growingio-sdk-docs/docs/giokit/web/integrate",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/web/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"docSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/web/version"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/growingio-sdk-docs/docs/giokit/harmonyos"}},d={},l=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5f00\u59cb\u96c6\u6210",id:"\u5f00\u59cb\u96c6\u6210",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}];function a(i){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,t.jsx)(e.p,{children:"WebJS GioKit \u4ec5\u652f\u6301 3.8.0 \u4ee5\u4e0a\u7248\u672c\u7684 SDK\uff0c\u5176\u4ed6\u7248\u672c SDK \u63a5\u5165\u53ef\u80fd\u4f1a\u9047\u5230\u65e0\u6cd5\u4f7f\u7528\u6216 SDK \u62a5\u9519\u7684\u95ee\u9898\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u8bf7\u9996\u5148\u786e\u8ba4\u60a8\u7684\u91c7\u96c6 SDK \u7248\u672c\uff0c\u9700>=3.8.0\uff08\u6b63\u5f0f\u7248\uff0c\u975e RC \u7248\uff09\u624d\u80fd\u652f\u6301\u3002\u5982\u60a8\u96c6\u6210\u4f4e\u7248\u672c\u7684 SDK\uff0c\u5f3a\u70c8\u5efa\u8bae\u60a8\u5bf9 SDK \u5347\u7ea7\uff0c\u540e\u7eed WebJS SDK \u53ea\u4f1a\u5728 3.8 \u7248\u672c\u8fdb\u884c\u529f\u80fd\u8fed\u4ee3\uff0c3.3 \u7248\u672c\u4ec5\u9650\u91cd\u5927\u95ee\u9898\u4fee\u590d\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u5f00\u59cb\u96c6\u6210",children:"\u5f00\u59cb\u96c6\u6210"}),"\n",(0,t.jsxs)(e.p,{children:["\u590d\u5236\u4ee5\u4e0b\u811a\u672c\uff0c\u5e76\u5c06\u5176\u7c98\u8d34\u5230 ",(0,t.jsx)(e.code,{children:"<head></head>"})," \u6807\u7b7e\u7684",(0,t.jsx)("b",{children:" \u9876\u90e8 "}),"\uff0c\u5b9e\u4f8b\u5316\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<script src="https://assets.giocdn.com/sdk/webjs/giokit.min.js"><\/script>\n<script type="text/javascript">\n  var gioKit = new GioKit();\n<\/script>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u96c6\u6210\u540e\u5728\u7ad9\u70b9\u9875\u9762\u53f3\u4e0b\u89d2\u51fa\u73b0\u5706\u5f62\u6a59\u8272",(0,t.jsx)(e.code,{children:"G"}),"\u56fe\u6807\u5373\u8bf4\u660e\u96c6\u6210\u6210\u529f\u3002"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)("font",{color:"#FC5F3A",children:"\u6ce8\u610f\uff1a"})})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"1\uff09GioKit \u5e94\u5c3d\u65e9\u5b8c\u6210\u96c6\u6210\u5e76\u5b9e\u4f8b\u5316\uff0c\u8bf7\u5c06\u91c7\u96c6 SDK \u7684\u96c6\u6210\u4ee3\u7801\u7f6e\u4e8e GioKit \u5b9e\u4f8b\u5316\u8bed\u53e5\u4e4b\u540e\u3002\u5426\u5219\u53ef\u80fd\u65e0\u6cd5\u5728 GioKit \u65e5\u5fd7\u4e2d\u67e5\u770b\u5230 SDK \u7684\u521d\u59cb\u5316\u4fe1\u606f\u3002"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"3\uff09GioKit \u9ed8\u8ba4\u4f7f\u7528 umd \u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0ces \u683c\u5f0f\u6682\u4e0d\u652f\u6301\u3002"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"2\uff09\u5982\u679c\u60a8\u5e0c\u671b\u4e0d\u53d7 CDN\uff08\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff09\u5f71\u54cd\uff0c\u8bf7\u4e0b\u8f7d\u81f3\u672c\u5730\u96c6\u6210\uff0c\u5e76\u4fee\u6539\u4e0a\u8ff0\u96c6\u6210\u4ee3\u7801\u4e2d\u7684 CDN \u5730\u5740\u4e3a\u60a8\u672c\u5730\u7684\u76f8\u5bf9\u5730\u5740\u3002"})}),"\n",(0,t.jsxs)(e.p,{children:["WebJS GioKit \u4e0b\u8f7d\uff1a",(0,t.jsx)(e.a,{href:"https://assets.giocdn.com/sdk/webjs/giokit.min.js",children:"https://assets.giocdn.com/sdk/webjs/giokit.min.js"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:(0,t.jsxs)("font",{size:"2",children:["(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,t.jsx)(e.code,{children:"\u94fe\u63a5\u5b58\u50a8\u4e3a..."})," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"]})})}),"\n",(0,t.jsx)(e.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,t.jsx)(e.p,{children:"WebJS GioKit\u53ea\u662f\u8f85\u52a9\u60a8\u5f00\u53d1\u548c\u9ad8\u6548\u5f00\u53d1\u6821\u9a8c\u57cb\u70b9\u7b49Gio\u4e8b\u4ef6\u7684\u5de5\u5177\uff0c\u8bf7\u5728\u6b63\u5f0f\u4e0a\u7ebf\u65f6\u79fb\u9664\u5b83\uff01"})]})}function h(i={}){const{wrapper:e}={...(0,s.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(a,{...i})}):a(i)}},1151:(i,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var t=n(7294);const s={},o=t.createContext(s);function r(i){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function c(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:r(i.components),t.createElement(o.Provider,{value:e},i.children)}}}]);