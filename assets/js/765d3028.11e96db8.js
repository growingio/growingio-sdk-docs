"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1868],{6484:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=n(5893),o=n(1151),s=n(4866),a=n(5162);const t={sidebar_position:3,title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"},l=void 0,d={id:"miniprogram/integration/baidu",title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",description:"\u5bf9\u4e8e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/integration/baidu.md",sourceDirName:"miniprogram/integration",slug:"/miniprogram/integration/baidu",permalink:"/growingio-sdk-docs/docs/miniprogram/integration/baidu",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/miniprogram/integration/baidu.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"},sidebar:"docSidebar",previous:{title:"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/integration/alipay"},next:{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs/docs/miniprogram/integration/bytedance"}},u={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u96c6\u6210SDK",id:"\u96c6\u6210sdk",level:2},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk",level:4},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk-1",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk-2",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210-1",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:4},{value:"SDK\u529f\u80fd\u63d2\u4ef6\u6269\u5c55",id:"sdk\u529f\u80fd\u63d2\u4ef6\u6269\u5c55",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2}];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{ImageLoader:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"\u5bf9\u4e8e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u8de8\u5e73\u53f0\u6846\u67b6\u5f00\u53d1\u4e14\u6709\u591a\u7aef\uff08\u7279\u6307\u5c0f\u7a0b\u5e8f\uff0c\u5feb\u5e94\u7528\u3001App \u548c Web \u9664\u5916\uff09\u540c\u65f6\u9700\u8981\u96c6\u6210 SDK \u7684\u9700\u6c42\u65f6\uff0c\u53ea\u9700\u5728\u6846\u67b6\u4ee3\u7801\u4e2d\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002\u4f8b\uff1a"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u4f7f\u7528 uni-app \u540c\u65f6\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\uff0c\u53ea\u9700\u96c6\u6210\u4e00\u6b21\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,i.jsxs)(r.p,{children:["1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6**",(0,i.jsx)(r.code,{children:"accountId"}),"\u548c",(0,i.jsx)(r.code,{children:"dataSourceId"}),"**\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6**",(0,i.jsx)(r.code,{children:"appId"}),"**\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"3\u3001\u5728\u4e0b\u5217\u9009\u9879\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u7684 SDK \u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\u6216\u4f7f\u7528 npm \u7684\u65b9\u5f0f\u96c6\u6210\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u96c6\u6210sdk",children:"\u96c6\u6210SDK"}),"\n",(0,i.jsxs)(s.Z,{groupId:"1",defaultValue:"\u539f\u751f",values:[{label:"\u539f\u751f",value:"\u539f\u751f"},{label:"uni-app",value:"uni-app"},{label:"Taro",value:"Taro"}],children:[(0,i.jsxs)(a.Z,{value:"\u539f\u751f",children:[(0,i.jsx)(r.h4,{id:"1\u52a0\u8f7d-sdk",children:"1\u3001\u52a0\u8f7d SDK"}),(0,i.jsxs)(r.p,{children:["\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,i.jsx)(r.code,{children:"utils/gio"}),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"]}),(0,i.jsxs)(r.p,{children:["\u767e\u5ea6\u539f\u751f SDK \u4e0b\u8f7d\uff1a",(0,i.jsx)(r.a,{href:"https://assets.giocdn.com/sdk/minip/4.1.0/gio-baidu.js",children:"https://assets.giocdn.com/sdk/minip/4.1.0/gio-baidu.js"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(r.strong,{children:(0,i.jsxs)("font",{size:"2",children:["(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.jsx)(r.code,{children:"\u94fe\u63a5\u5b58\u50a8\u4e3a..."})," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"]})})]}),(0,i.jsxs)(r.h4,{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",children:["2\u3001\u4f7f\u7528",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"]}),(0,i.jsxs)(r.p,{children:["\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u5728 App \u5b9e\u4f8b\u4e4b\u524d\u8c03\u7528",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)("font",{size:"4",color:"#FC5F3A",children:"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"})})}),(0,i.jsx)(r.h4,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// app.js\nimport gdp from './utils/gio/gio-baidu.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    ...other settings\n});\n\nApp({ ... });\n"})}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-baidu.js').default;\n"})})]}),(0,i.jsxs)(a.Z,{value:"uni-app",children:[(0,i.jsx)(r.h4,{id:"1\u52a0\u8f7d-sdk-1",children:"1\u3001\u52a0\u8f7d SDK"}),(0,i.jsx)(r.h5,{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",children:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"}),(0,i.jsxs)(r.p,{children:["\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,i.jsx)(r.code,{children:"utils/gio"}),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"]}),(0,i.jsxs)(r.p,{children:["uniapp \u6846\u67b6 SDK \u4e0b\u8f7d\uff1a",(0,i.jsx)(r.a,{href:"https://assets.giocdn.com/sdk/minip/4.1.0/gio-uniapp.js",children:"https://assets.giocdn.com/sdk/minip/4.1.0/gio-uniapp.js"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(r.strong,{children:(0,i.jsxs)("font",{size:"2",children:["(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.jsx)(r.code,{children:"\u94fe\u63a5\u5b58\u50a8\u4e3a..."})," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"]})})]}),(0,i.jsx)(r.h5,{id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210",children:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npm i gio-miniprogram-sdk --save\n"})}),(0,i.jsxs)(r.h4,{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-1",children:["2\u3001\u4f7f\u7528",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"]}),(0,i.jsxs)(r.p,{children:["\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 main.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u8c03\u7528",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.strong,{children:["\u6ce8\u610f",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2 \u548c vue3 \u4e2d\u5206\u522b\u4e0e app \u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09"]})}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)("font",{size:"4",color:"#FC5F3A",children:"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"})})}),(0,i.jsx)(r.h4,{id:"\u793a\u4f8b\u4ee3\u7801-1",children:"\u793a\u4f8b\u4ee3\u7801"}),(0,i.jsxs)(s.Z,{groupId:"2",defaultValue:"uni-app(vue2)",values:[{label:"uni-app(vue2)",value:"uni-app(vue2)"},{label:"uni-app(vue3)",value:"uni-app(vue3)"}],children:[(0,i.jsx)(a.Z,{value:"uni-app(vue2)",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/uniapp';\n\nApp.mpType = 'app';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    uniVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst app = new Vue(App);\napp.$mount();\n\n"})})}),(0,i.jsx)(a.Z,{value:"uni-app(vue3)",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// main.js\nimport App from './App.vue';\nimport { createApp } from 'vue';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-uniapp.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/uniapp';\n\nexport function createApp() {\n  // \u6ce8\u610fvue3\u4e2dapp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\n  const app = createApp(App);\n\n  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n      version: 'your miniProgram version',\n      // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n      serverUrl: 'your server url'\n      uniVue: app,\n      ...other settings\n  });\n\n  return { app };\n}\n"})})})]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-uniapp.js').default;\n"})})]}),(0,i.jsxs)(a.Z,{value:"Taro",children:[(0,i.jsx)(r.h4,{id:"1\u52a0\u8f7d-sdk-2",children:"1\u3001\u52a0\u8f7d SDK"}),(0,i.jsx)(r.h5,{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210-1",children:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"}),(0,i.jsxs)(r.p,{children:["\u4e0b\u8f7dSDK\u6dfb\u52a0\u81f3\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,i.jsx)(r.code,{children:"utils/gio"}),"\u76ee\u5f55\u4f5c\u4e3a\u4e0b\u8f7d\u96c6\u6210\u7684\u793a\u4f8b\u76ee\u5f55(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"]}),(0,i.jsxs)(r.p,{children:["Taro \u6846\u67b6 SDK \u4e0b\u8f7d\uff1a",(0,i.jsx)(r.a,{href:"https://assets.giocdn.com/sdk/minip/4.1.0/gio-taro.js",children:"https://assets.giocdn.com/sdk/minip/4.1.0/gio-taro.js"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(r.strong,{children:(0,i.jsxs)("font",{size:"2",children:["(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.jsx)(r.code,{children:"\u94fe\u63a5\u5b58\u50a8\u4e3a..."})," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"]})})]}),(0,i.jsx)(r.h5,{id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210-1",children:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npm i gio-miniprogram-sdk --save\n"})}),(0,i.jsxs)(r.h4,{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316-2",children:["2\u3001\u4f7f\u7528",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"]}),(0,i.jsxs)(r.p,{children:["\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u5f15\u7528SDK\u5e76\u8c03\u7528",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.strong,{children:["\u6ce8\u610f",(0,i.jsx)(r.code,{children:"init"}),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\uff08vue2 \u548c vue3 \u4e2d\u5206\u522b\u4e0e app \u5b9e\u4f8b\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u540c\uff09\u3002\u4f7f\u7528 vue \u5f00\u53d1\u65f6",(0,i.jsx)(r.code,{children:"taro"}),"\u548c",(0,i.jsx)(r.code,{children:"taroVue"}),"\u90fd\u8981\u4f20\u3002"]})}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)("font",{size:"4",color:"#FC5F3A",children:"\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\uff0cSDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u7684\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002"})})}),(0,i.jsx)(r.h4,{id:"\u793a\u4f8b\u4ee3\u7801-2",children:"\u793a\u4f8b\u4ee3\u7801"}),(0,i.jsxs)(s.Z,{groupId:"3",defaultValue:"Taro2",values:[{label:"Taro2",value:"Taro2"},{label:"Taro3(react)",value:"Taro3(react)"},{label:"Taro3(vue2)",value:"Taro3(vue2)"},{label:"Taro3(vue3)",value:"Taro3(vue3)"}],children:[(0,i.jsx)(a.Z,{value:"Taro2",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    taro: Taro,\n    ...other settings\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"})})}),(0,i.jsx)(a.Z,{value:"Taro3(react)",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// app.js\nimport React, { Component } from 'react';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/taro';\n\nconst taroRuntime = require('@tarojs/runtime');\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    taro: taroRuntime,\n    ...other settings\n});\n\nclass App extends Component { ... }\nexport default App;\n"})})}),(0,i.jsx)(a.Z,{value:"Taro3(vue2)",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// app.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/taro';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taro: Taro,\n    taroVue: Vue,\n    ...other settings\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n"})})}),(0,i.jsx)(a.Z,{value:"Taro3(vue3)",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"// app.js\nimport { createApp } from 'vue';\nimport Taro from '@tarojs/taro';\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taro.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk/taro';\n\nconst taroRuntime = require('@tarojs/runtime');\n\n// \u6ce8\u610fvue3\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u524d\nconst App = createApp({ ... });\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'your miniProgram version',\n    // OP\u79c1\u6709\u90e8\u7f72\u5ba2\u6237\u8bf7\u586b\u5199serverUrl\uff0cSaas\u5ba2\u6237\u8bf7\u5ffd\u7565\n    serverUrl: 'your server url'\n    // \u6ce8\u610ftaro\u548ctaroVue\u90fd\u9700\u8981\u4f20\n    taro: taroRuntime,\n    taroVue: App,\n    ...other settings\n});\n\nexport default App;\n"})})})]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"\u539f\u6709 require \u7684\u5f15\u7528\u65b9\u5f0f\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u3002\nconst gdp = require('./utils/gio/gio-taro.js').default;\n"})})]})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.strong,{children:["\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,i.jsx)(r.a,{href:"/docs/miniprogram/initSettings",children:"\u96c6\u6210\u914d\u7f6e"}),"\u83dc\u5355\u4e2d\u67e5\u770b"]})}),"\n",(0,i.jsx)(r.h2,{id:"sdk\u529f\u80fd\u63d2\u4ef6\u6269\u5c55",children:"SDK\u529f\u80fd\u63d2\u4ef6\u6269\u5c55"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"\u96c6\u6210 SDK \u65f6\uff0cSDK \u4ec5\u5185\u7f6e\u57cb\u70b9\u529f\u80fd\uff0c\u5982\u60a8\u9700\u8981\u6269\u5c55\u5176\u4ed6\u529f\u80fd\u65f6\uff0c\u9700\u8981\u96c6\u6210\u5e76\u6ce8\u518c\u5bf9\u5e94\u63d2\u4ef6\u65b9\u53ef\u6fc0\u6d3b\u5bf9\u5e94\u529f\u80fd\u4f7f\u7528\u3002"})}),"\n",(0,i.jsxs)(r.p,{children:["\u5404\u4e2a\u63d2\u4ef6\u7684\u4ecb\u7ecd\u548c\u96c6\u6210\u65b9\u5f0f\u8bf7\u89c1",(0,i.jsx)(r.a,{href:"/docs/miniprogram/plugins",children:"\u63d2\u4ef6"}),"\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"}),"\n",(0,i.jsx)(n,{path:"img/miniprogram/plugin_debug"}),"\n",(0,i.jsx)(r.h2,{id:"\u6570\u636e\u6821\u9a8c",children:"\u6570\u636e\u6821\u9a8c"}),"\n",(0,i.jsxs)(r.p,{children:["\u8bf7\u5728",(0,i.jsx)(r.code,{children:"init"}),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"debug"})})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"true"})})," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d Console \u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770b SDK \u4e0a\u62a5\u7684 log \u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"]}),"\n",(0,i.jsx)(n,{path:"img/miniprogram/swan_debug"}),"\n",(0,i.jsx)(r.h2,{id:"\u6dfb\u52a0\u767d\u540d\u5355",children:"\u6dfb\u52a0\u767d\u540d\u5355"}),"\n",(0,i.jsxs)(r.p,{children:["\u7531\u4e8e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,i.jsx)(r.a,{href:"https://smartprogram.baidu.com/docs/develop/api/net/net_rule/",children:"\u53c2\u8003\u6587\u6863"}),"\uff0c\u60a8\u9700\u8981\u5728\u300c\u667a\u80fd\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u8bbe\u7f6e-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0 request \u5408\u6cd5\u57df\u540d\u3002",(0,i.jsx)(r.a,{href:"https://smartprogram.baidu.com/developer/index.html",children:"\u667a\u80fd\u5c0f\u7a0b\u5e8f\u540e\u53f0"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.strong,{children:[(0,i.jsx)("font",{color:"#FC5F3A",children:"\u6ce8\u610f\uff1a"}),"\u8bf7\u5728\u6b63\u5f0f\u751f\u4ea7\u73af\u5883\u53d1\u5e03\u524d\u5b8c\u6210\u767d\u540d\u5355\u7684\u6dfb\u52a0\uff0c\u672a\u6dfb\u52a0\u767d\u540d\u5355\u53ef\u80fd\u4f1a\u51fa\u73b0 SDK \u65e0\u6cd5\u4e0a\u62a5\u6570\u636e\u7684\u60c5\u51b5\u3002"]})})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>a});n(7294);var i=n(512);const o={tabItem:"tabItem_Ymn6"};var s=n(5893);function a(e){let{children:r,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,a),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>S});var i=n(7294),o=n(512),s=n(2466),a=n(6550),t=n(469),l=n(1980),d=n(7392),u=n(12);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:n,attributes:i,default:o}}=e;return{value:r,label:n,attributes:i,default:o}}))}(n);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const o=(0,a.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,s=p(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:s}))),[d,c]=m({queryString:n,groupId:o}),[g,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,u.Nk)(n);return[o,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),v=(()=>{const e=d??g;return h({value:e,tabValues:s})?e:null})();(0,t.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),j(e)}),[c,j,s]),tabValues:s}}var j=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function f(e){let{className:r,block:n,selectedValue:i,selectValue:a,tabValues:t}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),o=t[n].value;o!==i&&(d(r),a(o))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:t.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>l.push(e),onKeyDown:c,onClick:u,...s,className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=g(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(f,{...e,...r}),(0,x.jsx)(b,{...e,...r})]})}function S(e){const r=(0,j.Z)();return(0,x.jsx)(y,{...e,children:c(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);