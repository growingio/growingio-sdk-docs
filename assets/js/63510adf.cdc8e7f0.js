"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3793],{5982:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var d=r(5893),l=r(1151),n=r(4866),s=r(5162);const t={sidebar_position:1,title:"H5\u6df7\u5408\u6a21\u5757"},c=void 0,a={id:"ios/modules/Hybrid Module",title:"H5\u6df7\u5408\u6a21\u5757",description:"APP \u5185\u5d4c H5 \u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5 \u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK",source:"@site/docs/ios/modules/Hybrid Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/Hybrid Module",permalink:"/growingio-sdk-docs/docs/ios/modules/Hybrid Module",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/modules/Hybrid Module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"H5\u6df7\u5408\u6a21\u5757"},sidebar:"docSidebar",previous:{title:"\u6a21\u5757\u5217\u8868",permalink:"/growingio-sdk-docs/docs/ios/modules"},next:{title:"\u5708\u9009\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/WebCircle Module"}},o={},h=[{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK",id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:5},{value:"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)",id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:5},{value:"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)",id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:5},{value:"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165",id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:5},{value:"5.\u91cd\u7f6e Hybrid \u6ce8\u5165",id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:5},{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210-1",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e-1",level:3},{value:"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK",id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:5},{value:"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)",id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:5},{value:"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)",id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:5},{value:"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165",id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:5},{value:"5.\u91cd\u7f6e Hybrid \u6ce8\u5165",id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:5}];function b(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{ImageLoader:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.p,{children:"APP \u5185\u5d4c H5 \u9875\u9762\u5982\u679c\u4e5f\u9700\u8981\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cH5 \u9875\u9762\u9700\u8981\u96c6\u6210 Web JS SDK"}),"\n",(0,d.jsxs)(i.p,{children:["\u82e5\u9700\u8981 H5 \u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0e APP \u4e2d GIO SDK \u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\uff0c\u8bf7\u53c2\u8003 ",(0,d.jsx)(i.a,{href:"/docs/webjs/plugins/hybridAdapter",children:"Hybrid\u5185\u5d4c\u9875\u6253\u901a\u63d2\u4ef6"})]}),"\n",(0,d.jsxs)(i.p,{children:["\u5982\u679c APP \u96c6\u6210\u7684\u662f",(0,d.jsx)(i.a,{href:"/docs/ios/Introduce#%E6%97%A0%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90",children:(0,d.jsx)(i.strong,{children:"\u65e0\u57cb\u70b9 SDK"})}),"\uff0c \u4e0d\u9700\u8981\u505a\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u6ce8\u5165\u6865\u63a5\u4ee3\u7801\uff0c\u5b9e\u73b0\u6570\u636e\u6253\u901a\uff1b"]}),"\n",(0,d.jsxs)(i.p,{children:["\u5982\u679c APP \u96c6\u6210\u7684\u662f",(0,d.jsx)(i.a,{href:"/docs/ios/Introduce#%E5%9F%8B%E7%82%B9sdk%E9%9B%86%E6%88%90",children:(0,d.jsx)(i.strong,{children:"\u57cb\u70b9 SDK"})}),"\uff0c\u5219\u9700\u8981\u60a8\u6dfb\u52a0 Hybrid \u4f9d\u8d56"]}),"\n",(0,d.jsx)(i.admonition,{type:"info",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"})})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsxs)(n.Z,{children:[(0,d.jsxs)(s.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",default:!0,children:[(0,d.jsx)(i.h3,{id:"\u6a21\u5757\u96c6\u6210",children:"\u6a21\u5757\u96c6\u6210"}),(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsxs)(i.li,{children:["\u6dfb\u52a0 ",(0,d.jsx)(i.strong,{children:"GrowingModule_Hybrid"})," Package"]}),"\n"]}),(0,d.jsx)(r,{path:"img/ios/add_package_hybrid"}),(0,d.jsxs)(i.ol,{start:"2",children:["\n",(0,d.jsxs)(i.li,{children:["\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cHybrid \u5c06\u81ea\u52a8\u6ce8\u5165\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0c\u5982\u9700\u989d\u5916\u914d\u7f6e\uff0c\u53ef\u5728\u76ee\u6807\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 ",(0,d.jsx)(i.code,{children:"import GrowingModule_Hybrid"}),"\uff0c\u5e76\u8c03\u7528\u4e0b\u5217\u914d\u7f6e\u63a5\u53e3"]}),"\n"]}),(0,d.jsx)(i.h3,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),(0,d.jsx)(i.p,{children:"Hybrid \u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u63a5\u53e3\uff1a"}),(0,d.jsx)(i.h4,{id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk",children:"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK"}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u914d\u7f6e\u63a5\u53e3"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"autoBridgeEnabled"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"Bool"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"true"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5bf9\u6240\u6709 webView \u81ea\u52a8\u6ce8\u5165 Hybrid SDK"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-swift",children:"let hybrid = Hybrid.sharedInstance()\nhybrid.autoBridgeEnabled = false\n"})}),(0,d.jsx)(i.h4,{id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f",children:"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"enableBridge(_ webView: WKWebView)"}),(0,d.jsx)("br",{}),"\n\u5728 autoBridgeEnabled \u4e3a false \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53c2\u6570"}),(0,d.jsx)(i.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"webView"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"WKWebView"})}),(0,d.jsx)(i.td,{children:"\u5f53\u524d webView \u5b9e\u4f8b"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-swift",children:"let hybrid = Hybrid.sharedInstance()\nhybrid.enableBridge(webView)\n"})}),(0,d.jsx)(i.h4,{id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f",children:"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"disableBridge(_ webView: WKWebView)"}),(0,d.jsx)("br",{}),"\n\u5728 autoBridgeEnabled \u4e3a true \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53c2\u6570"}),(0,d.jsx)(i.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"webView"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"WKWebView"})}),(0,d.jsx)(i.td,{children:"\u5f53\u524d webView \u5b9e\u4f8b"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-swift",children:"let hybrid = Hybrid.sharedInstance()\nhybrid.disableBridge(webView)\n"})}),(0,d.jsx)(i.h4,{id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165",children:"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"isBridgeEnabled(_ webView: WKWebView)"}),(0,d.jsx)("br",{}),"\n\u5224\u65ad\u5f53\u524d\u914d\u7f6e\u4e0b\uff0cwebView \u662f\u5426\u53ef\u6ce8\u5165"]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53c2\u6570"}),(0,d.jsx)(i.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"webView"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"WKWebView"})}),(0,d.jsx)(i.td,{children:"\u5f53\u524d webView \u5b9e\u4f8b"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-swift",children:"let hybrid = Hybrid.sharedInstance()\nlet isBridgeEnabled = hybrid.isBridgeEnabled(webView)\n"})}),(0,d.jsx)(i.h4,{id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165",children:"5.\u91cd\u7f6e Hybrid \u6ce8\u5165"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"resetBridgeSettings()"}),(0,d.jsx)("br",{}),"\n\u91cd\u7f6e Hybrid \u6ce8\u5165\u914d\u7f6e\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-4",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-swift",children:"let hybrid = Hybrid.sharedInstance()\nhybrid.resetBridgeSettings()\n"})})]}),(0,d.jsxs)(s.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",children:[(0,d.jsx)(i.h3,{id:"\u6a21\u5757\u96c6\u6210-1",children:"\u6a21\u5757\u96c6\u6210"}),(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsx)(i.li,{children:"\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0"}),"\n"]}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ruby",children:"pod 'GrowingAnalytics/Hybrid'\n"})}),(0,d.jsxs)(i.p,{children:["\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,d.jsx)(i.code,{children:"pod install"})," \u6216 ",(0,d.jsx)(i.code,{children:"pod update"})]}),(0,d.jsxs)(i.ol,{start:"2",children:["\n",(0,d.jsxs)(i.li,{children:["\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cHybrid \u5c06\u81ea\u52a8\u6ce8\u5165\u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0c\u5982\u9700\u989d\u5916\u914d\u7f6e\uff0c\u53ef\u5728\u76ee\u6807\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 ",(0,d.jsx)(i.code,{children:'#import "GrowingHybridModule.h"'}),"\uff0c\u5e76\u8c03\u7528\u4e0b\u5217\u914d\u7f6e\u63a5\u53e3"]}),"\n"]}),(0,d.jsx)(i.h3,{id:"\u6a21\u5757\u914d\u7f6e-1",children:"\u6a21\u5757\u914d\u7f6e"}),(0,d.jsx)(i.p,{children:"Hybrid \u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u63a5\u53e3\uff1a"}),(0,d.jsx)(i.h4,{id:"1\u81ea\u52a8\u5bf9\u6240\u6709-webview-\u6ce8\u5165-hybrid-sdk-1",children:"1.\u81ea\u52a8\u5bf9\u6240\u6709 webView \u6ce8\u5165 Hybrid SDK"}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u914d\u7f6e\u63a5\u53e3"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"autoBridgeEnabled"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"BOOL"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"YES"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5bf9\u6240\u6709 webView \u81ea\u52a8\u6ce8\u5165 Hybrid SDK"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-5",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-objectivec",children:"[GrowingHybridModule sharedInstance].autoBridgeEnabled = NO;\n"})}),(0,d.jsx)(i.h4,{id:"2\u5355\u4e2a-webview-\u542f\u7528-hybrid-\u6ce8\u5165-\u767d\u540d\u5355\u6a21\u5f0f-1",children:"2.\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165 (\u767d\u540d\u5355\u6a21\u5f0f)"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"enableBridgeForWebView:"}),(0,d.jsx)("br",{}),"\n\u5728 autoBridgeEnabled \u4e3a NO \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u542f\u7528 Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53c2\u6570"}),(0,d.jsx)(i.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"webView"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"WKWebView"})}),(0,d.jsx)(i.td,{children:"\u5f53\u524d webView \u5b9e\u4f8b"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-6",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-objectivec",children:"[[GrowingHybridModule sharedInstance] enableBridgeForWebView:webView];\n"})}),(0,d.jsx)(i.h4,{id:"3\u5355\u4e2a-webview-\u5173\u95ed-hybrid-\u6ce8\u5165-\u9ed1\u540d\u5355\u6a21\u5f0f-1",children:"3.\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165 (\u9ed1\u540d\u5355\u6a21\u5f0f)"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"disableBridgeForWebView:"}),(0,d.jsx)("br",{}),"\n\u5728 autoBridgeEnabled \u4e3a YES \u65f6\uff0c\u5bf9\u5355\u4e2a webView \u5173\u95ed Hybrid \u6ce8\u5165\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53c2\u6570"}),(0,d.jsx)(i.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"webView"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"WKWebView"})}),(0,d.jsx)(i.td,{children:"\u5f53\u524d webView \u5b9e\u4f8b"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-7",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-objectivec",children:"[[GrowingHybridModule sharedInstance] disableBridgeForWebView:webView];\n"})}),(0,d.jsx)(i.h4,{id:"4\u67e5\u770b-webview-\u662f\u5426\u53ef\u6ce8\u5165-1",children:"4.\u67e5\u770b webView \u662f\u5426\u53ef\u6ce8\u5165"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"isBridgeForWebViewEnabled:"}),(0,d.jsx)("br",{}),"\n\u5224\u65ad\u5f53\u524d\u914d\u7f6e\u4e0b\uff0cwebView \u662f\u5426\u53ef\u6ce8\u5165"]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53c2\u6570"}),(0,d.jsx)(i.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,d.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"webView"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"WKWebView"})}),(0,d.jsx)(i.td,{children:"\u5f53\u524d webView \u5b9e\u4f8b"})]})})]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-8",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-objectivec",children:"BOOL enabled = [[GrowingHybridModule sharedInstance] isBridgeForWebViewEnabled:webView];\n"})}),(0,d.jsx)(i.h4,{id:"5\u91cd\u7f6e-hybrid-\u6ce8\u5165-1",children:"5.\u91cd\u7f6e Hybrid \u6ce8\u5165"}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"resetBridgeSettings"}),(0,d.jsx)("br",{}),"\n\u91cd\u7f6e Hybrid \u6ce8\u5165\u914d\u7f6e\uff0c\u8bf7\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528"]}),(0,d.jsx)(i.h5,{id:"\u793a\u4f8b-9",children:"\u793a\u4f8b"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-objectivec",children:"[[GrowingHybridModule sharedInstance] resetBridgeSettings];\n"})})]})]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsxs)(i.admonition,{type:"tip",children:[(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:"1. H5 \u9875\u9762 Web JS SDK \u91c7\u96c6\u7684\u6570\u636e\u4e0e APP \u4e2d GIO SDK \u91c7\u96c6\u7684\u7528\u6237\u7b49\u6570\u636e\u6253\u901a\u89c4\u5219\uff1a"})}),(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u4e24\u8005 accountId \u4e00\u81f4\u65f6\uff0cH5 \u4e0e APP \u6253\u901a\uff0c\u6b64\u65f6 H5 \u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u4ec5\u7531 APP \u4e2d GIO SDK \u53d1\u9001"}),"\n",(0,d.jsx)(i.li,{children:"\u4e24\u8005 accountId \u4e0d\u4e00\u81f4\u65f6\uff0cH5 \u9875\u9762\u4e0a\u91c7\u96c6\u7684\u6570\u636e\u540c\u65f6\u7531 Web JS SDK \u548c APP \u4e2d GIO SDK \u53d1\u9001"}),"\n",(0,d.jsx)(i.li,{children:"\u6ee1\u8db3\u6253\u901a\u8bbe\u7f6e\u65f6\uff0cH5 \u9875\u9762\u8c03\u7528 setUserID\uff0ccleanUserID \u4f1a\u8c03\u7528 APP \u7684 setLoginUserID\uff0ccleanUserID\u3002"}),"\n"]}),(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"2. \u6253\u901a\u6210\u529f\u6548\u679c"}),"\n\u5f53\u89e6\u53d1\u4e86\u6253\u901a\u89c4\u5219\uff0c\u5b9e\u73b0\u6253\u901a\u8bbe\u7f6e\u540e\uff0cH5 \u5185\u5d4c\u9875\u91c7\u96c6\u7684\u6570\u636e\u7ecf APP \u4e2d GIO SDK \u53d1\u9001\u6570\u636e\u3002\u4ee5\u4e0b\u5b57\u6bb5\u53d8\u5316\u5982\u4e0b\uff1a",(0,d.jsx)("br",{}),"\ndeviceId: \u4f7f\u7528\u539f\u751f App \u7684d eviceId",(0,d.jsx)("br",{}),"\nsessionId: \u4f7f\u7528\u539f\u751f App \u7684 sessionId",(0,d.jsx)("br",{}),"\ngioId: \u4f7f\u7528\u539f\u751f App \u7684 gioId ",(0,d.jsx)("br",{}),"\nuserId: \u4f7f\u7528\u539f\u751f App \u7684 userId",(0,d.jsx)("br",{}),"\nuserKey: \u4f7f\u7528\u539f\u751f App \u7684 userKey",(0,d.jsx)("br",{}),"\ndataSourceId: \u4f7f\u7528\u539f\u751f App \u7684 dataSourceId",(0,d.jsx)("br",{}),"\nplatform: \u4f7f\u7528\u539f\u751f App \u7684 platform",(0,d.jsx)("br",{}),"\ndomain: \u4f7f\u7528 H5 \u9875\u9762\u7684\u57df\u540d",(0,d.jsx)("br",{})]}),(0,d.jsx)(i.p,{children:"\u7528\u6237\u884c\u4e3a\u4e0e\u91c7\u96c6\u6570\u636e\u63cf\u8ff0\uff1a\u7528\u6237\u70b9\u51fb APP \u5185\u5d4c H5 \u9875\u9762\uff0c\u7531 APP \u539f\u751f\u9875\u9762\u8fdb\u5165 H5 \u9875\u9762\uff0cH5 \u9875\u9762\u96c6\u6210\u7684\u91c7\u96c6 SDK \u4f1a\u628a\u91c7\u96c6\u7684\u6570\u636e\u8f6c\u53d1\u7ed9 APP \u96c6\u6210\u7684 SDK\uff0c\u518d\u8fdb\u884c\u4e0a\u62a5\uff1bH5 \u9875\u9762\u7684\u884c\u4e3a\u6570\u636e\u4e2d\u7684\u4ee5\u4e0a\u7528\u6237\u4fe1\u606f\u5b57\u6bb5\u4f1a\u7528 APP SDK \u91c7\u96c6\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5b9e\u73b0 H5 \u9875\u9762\u7528\u6237\u4e0e APP \u7528\u6237\u4fe1\u606f\u5173\u8054\u3002"})]})]})}function u(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},5162:(e,i,r)=>{r.d(i,{Z:()=>s});r(7294);var d=r(512);const l={tabItem:"tabItem_Ymn6"};var n=r(5893);function s(e){let{children:i,hidden:r,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,d.Z)(l.tabItem,s),hidden:r,children:i})}},4866:(e,i,r)=>{r.d(i,{Z:()=>m});var d=r(7294),l=r(512),n=r(2466),s=r(6550),t=r(469),c=r(1980),a=r(7392),o=r(12);function h(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:i,children:r}=e;return(0,d.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:r,attributes:d,default:l}}=e;return{value:i,label:r,attributes:d,default:l}}))}(r);return function(e){const i=(0,a.l)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,r])}function u(e){let{value:i,tabValues:r}=e;return r.some((e=>e.value===i))}function x(e){let{queryString:i=!1,groupId:r}=e;const l=(0,s.k6)(),n=function(e){let{queryString:i=!1,groupId:r}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:i,groupId:r});return[(0,c._X)(n),(0,d.useCallback)((e=>{if(!n)return;const i=new URLSearchParams(l.location.search);i.set(n,e),l.replace({...l.location,search:i.toString()})}),[n,l])]}function j(e){const{defaultValue:i,queryString:r=!1,groupId:l}=e,n=b(e),[s,c]=(0,d.useState)((()=>function(e){let{defaultValue:i,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const d=r.find((e=>e.default))??r[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:i,tabValues:n}))),[a,h]=x({queryString:r,groupId:l}),[j,w]=function(e){let{groupId:i}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(i),[l,n]=(0,o.Nk)(r);return[l,(0,d.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:l}),g=(()=>{const e=a??j;return u({value:e,tabValues:n})?e:null})();(0,t.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,d.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),w(e)}),[h,w,n]),tabValues:n}}var w=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=r(5893);function y(e){let{className:i,block:r,selectedValue:d,selectValue:s,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,n.o5)(),o=e=>{const i=e.currentTarget,r=c.indexOf(i),l=t[r].value;l!==d&&(a(i),s(l))},h=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;i=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;i=c[r]??c[c.length-1];break}}i?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},i),children:t.map((e=>{let{value:i,label:r,attributes:n}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:d===i?0:-1,"aria-selected":d===i,ref:e=>c.push(e),onKeyDown:h,onClick:o,...n,className:(0,l.Z)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":d===i}),children:r??i},i)}))})}function v(e){let{lazy:i,children:r,selectedValue:l}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(i){const e=n.find((e=>e.props.value===l));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:n.map(((e,i)=>(0,d.cloneElement)(e,{key:i,hidden:e.props.value!==l})))})}function f(e){const i=j(e);return(0,p.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,p.jsx)(y,{...e,...i}),(0,p.jsx)(v,{...e,...i})]})}function m(e){const i=(0,w.Z)();return(0,p.jsx)(f,{...e,children:h(e.children)},String(i))}},1151:(e,i,r)=>{r.d(i,{Z:()=>t,a:()=>s});var d=r(7294);const l={},n=d.createContext(l);function s(e){const i=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),d.createElement(n.Provider,{value:i},e.children)}}}]);