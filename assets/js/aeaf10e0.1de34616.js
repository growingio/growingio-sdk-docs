"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8769],{82:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=r(5893),i=r(1151);const t={sidebar_position:5,title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8"},d=void 0,c={id:"webjs/plugins/impressionTracking",title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8",description:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09",source:"@site/docs/webjs/plugins/impressionTracking.md",sourceDirName:"webjs/plugins",slug:"/webjs/plugins/impressionTracking",permalink:"/growingio-sdk-docs/docs/webjs/plugins/impressionTracking",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/webjs/plugins/impressionTracking.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8"},sidebar:"docSidebar",previous:{title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29",permalink:"/growingio-sdk-docs/docs/webjs/plugins/compress"},next:{title:"A/B\u6d4b\u8bd5",permalink:"/growingio-sdk-docs/docs/webjs/plugins/abtest"}},o={},a=[{value:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09",id:"\u7b80\u4ecbgioimpressiontracking",level:2},{value:"\u66dd\u5149\u903b\u8f91",id:"\u66dd\u5149\u903b\u8f91",level:3},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"CDN\u96c6\u6210\u5f15\u5165",id:"cdn\u96c6\u6210\u5f15\u5165",level:4},{value:"npm\u96c6\u6210\u5f15\u5165",id:"npm\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u4f20\u503c\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528Object\u5bf9\u8c61\u6216JSON\u5b57\u7b26\u4e32\u8d4b\u503c\uff08\u63a8\u8350\uff09",id:"\u4f20\u503c\u65b9\u5f0f\u4e00\u4f7f\u7528object\u5bf9\u8c61\u6216json\u5b57\u7b26\u4e32\u8d4b\u503c\u63a8\u8350",level:3},{value:"\u4f20\u503c\u65b9\u5f0f\u4e8c\uff1a\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49",id:"\u4f20\u503c\u65b9\u5f0f\u4e8c\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49",level:3},{value:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b",id:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b",level:3},{value:"\u6dfb\u52a0\u590d\u5236\u53d1\u9001\u5b9e\u4f8b",id:"\u6dfb\u52a0\u590d\u5236\u53d1\u9001\u5b9e\u4f8b",level:3},{value:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c",id:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"\u7b80\u4ecbgioimpressiontracking",children:"\u7b80\u4ecb\uff08gioImpressionTracking\uff09"}),"\n",(0,n.jsxs)(s.p,{children:["\u7528\u6237\u6807\u8bb0\u4e00\u4e2a\u5143\u7d20\u5e76\u63d0\u4f9b\u57cb\u70b9\u4e8b\u4ef6\uff0cSDK \u8d1f\u8d23\u76d1\u63a7\u6307\u5b9a\u5143\u7d20\uff0c\u5f53\u6b64\u5143\u7d20\u51fa\u73b0\u5728\u5c4f\u5e55\u53ef\u89c6\u533a\u57df\u4e2d\u65f6\u53d1\u9001\u7528\u6237\u914d\u7f6e\u7684\u57cb\u70b9\u4e8b\u4ef6\u3002\u56e0\u6b64\u60a8\u540c\u6837\u9700\u8981\u53c2\u8003",(0,n.jsx)(s.a,{href:"/docs/webjs/commonlyApi#6%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track",children:"\u57cb\u70b9\u4e8b\u4ef6"}),"\u5728\u5e73\u53f0\u4e0a\u8fdb\u884c\u4e8b\u4ef6\u7c7b\u578b\u548c\u53d8\u91cf\u7684\u9884\u5b9a\u4e49\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u66dd\u5149\u903b\u8f91",children:"\u66dd\u5149\u903b\u8f91"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsxs)(s.strong,{children:["always\uff1a",(0,n.jsx)(s.strong,{children:"\u53ea\u8981\u4ece"}),"\u5c4f\u5e55\u4e0d\u53ef\u89c1\u533a\u57df\u5230\u53ef\u89c1\u533a\u57df"]}),"\u5373\u53ef\u8ba1\u4e3a\u4e00\u6b21\u66dd\u5149\u5e76\u4e0a\u62a5\u3002(\u9ed8\u8ba4\u503c)"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsxs)(s.strong,{children:["once\uff1a",(0,n.jsx)(s.strong,{children:"\u4ece"}),"\u5c4f\u5e55\u4e0d\u53ef\u89c1\u533a\u57df\u5230\u53ef\u89c1\u533a\u57df"]}),"\u66dd\u5149\u53ea\u4e0a\u62a5\u4e00\u6b21\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",children:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png",alt:"IE",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"InternetExplorer"]}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"Edge",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"Edge"]}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"Firefox"]}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"Chrome"]}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"Safari"]}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"Opera"]}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.a,{href:"http://godban.github.io/browsers-support-badges/",children:(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"})}),(0,n.jsx)("br",{}),"Electron"]})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("font",{color:"#FC5F3A",children:"No"})}),(0,n.jsx)(s.td,{children:"Edge >= 16"}),(0,n.jsx)(s.td,{children:">= 55"}),(0,n.jsx)(s.td,{children:">= 58"}),(0,n.jsx)(s.td,{children:">= 12.1"}),(0,n.jsx)(s.td,{children:">= 45"}),(0,n.jsx)(s.td,{children:">= 10"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"\u96c6\u6210",children:"\u96c6\u6210"}),"\n",(0,n.jsx)(s.p,{children:"\u5168\u91cf\u96c6\u6210SDK\u65f6\u65e0\u9700\u518d\u6b21\u96c6\u6210\u6b64\u63d2\u4ef6\u3002"}),"\n",(0,n.jsx)(s.h3,{id:"1\u5f15\u5165",children:"1\u3001\u5f15\u5165"}),"\n",(0,n.jsx)(s.h4,{id:"cdn\u96c6\u6210\u5f15\u5165",children:"CDN\u96c6\u6210\u5f15\u5165"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioImpressionTracking.js"><\/script>\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u63d0\u793a\uff1a"})," \u4e0a\u8ff0\u5730\u5740\u4e2d\u7684SDK\u63d2\u4ef6\u9ed8\u8ba4\u4f7f\u7528",(0,n.jsx)(s.code,{children:"umd"}),"\u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0c\u82e5\u60a8\u7684\u7ad9\u70b9\u9700\u8981\u4f7f\u7528",(0,n.jsx)(s.code,{children:"esm"}),"\u683c\u5f0f\u7684SDK\u63d2\u4ef6\uff1b\u6216\u8005\u5982\u679c\u60a8\u5e0c\u671b\u4e0d\u53d7 CDN\uff08\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff09\u5f71\u54cd\uff0c\u8bf7\u4e0b\u8f7d\u81f3\u672c\u5730\u96c6\u6210\uff0c\u5e76\u4fee\u6539\u5f15\u7528\u4e3a\u60a8\u672c\u5730\u9879\u76ee\u7684\u76f8\u5bf9\u5730\u5740\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["WebJS SDK \u63d2\u4ef6\u4e0b\u8f7d\uff1a",(0,n.jsx)(s.a,{href:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases",children:"https://github.com/growingio/growingio-sdk-webjs-autotracker/releases"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u6ce8\u610fgithub\u4e0a\u7684SDK\u4ea7\u7269\u4e3a\u4e86\u65b9\u4fbf\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u9ed8\u8ba4\u662f",(0,n.jsx)(s.code,{children:"esm"}),"\u683c\u5f0f\uff0c\u5982\u9700\u5f15\u7528",(0,n.jsx)(s.code,{children:"umd"}),"\u683c\u5f0f\u7684SDK\uff0c\u8bf7\u5230\u5305\u5185\u540d\u4e3aumd\u7684\u6587\u4ef6\u5185\u67e5\u627e\u5f15\u7528\u3002"]}),"\n",(0,n.jsx)(s.h4,{id:"npm\u96c6\u6210\u5f15\u5165",children:"npm\u96c6\u6210\u5f15\u5165"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:'import gioImpressionTracking from "gio-webjs-sdk/plugins/gioImpressionTracking"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"2\u6ce8\u518c",children:"2\u3001\u6ce8\u518c"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"gdp('registerPlugins', [gioImpressionTracking]);\ngdp('init', xxxx);\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,n.jsx)(s.h3,{id:"\u4f20\u503c\u65b9\u5f0f\u4e00\u4f7f\u7528object\u5bf9\u8c61\u6216json\u5b57\u7b26\u4e32\u8d4b\u503c\u63a8\u8350",children:"\u4f20\u503c\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528Object\u5bf9\u8c61\u6216JSON\u5b57\u7b26\u4e32\u8d4b\u503c\uff08\u63a8\u8350\uff09"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,n.jsx)(s.code,{children:"data-gio-imp-track"}),"\u3001",(0,n.jsx)(s.code,{children:"data-gio-imp-attrs"})," \u5c5e\u6027\uff0c\u5e76\u5206\u522b\u5bf9\u5e94 ",(0,n.jsx)(s.code,{children:"track"})," \u65b9\u6cd5\u4e2d\u7684\u4e09\u4e2a\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e\uff0c\u53c2\u6570\u89c4\u5219\u53c2\u8003",(0,n.jsx)(s.a,{href:"/docs/webjs/commonlyApi#6%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6track",children:"\u57cb\u70b9\u4e8b\u4ef6"}),"\u3002\u4f20\u503c\u65f6\u8d4b\u503c\u4e00\u4e2aObject\u5bf9\u8c61\u6216\u4e00\u4e2aJSON\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"var impAttrs = JSON.stringify({ type: 'hjh', name: 'yue' });\n// or\nvar impAttrs = { type: 'hjh', name: 'yue' };\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:'<div\n  data-gio-imp-track="imp_picture_var"\n  data-gio-imp-attrs={impAttrs}\n  // or\n  data-gio-imp-attrs={`{ "type": "hjh", "name": "yue" }`}\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u5bf9\u5e94\u4ea7\u751f\u7684",(0,n.jsx)(s.code,{children:"CUSTOM"}),"\u4e8b\u4ef6\u76f8\u5f53\u4e8e\uff1a \u2193\u2193\u2193"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"gdp('track', 'imp_picture_var', { type: 'hjh', name: 'yue' });\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u4f20\u503c\u65b9\u5f0f\u4e8c\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49",children:"\u4f20\u503c\u65b9\u5f0f\u4e8c\uff1a\u5355\u4e2a\u5b57\u6bb5\u5b9a\u4e49"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,n.jsx)(s.code,{children:"data-gio-imp-track"}),"\u3001",(0,n.jsx)(s.code,{children:"data-gio-track-xxxxx"})," \u5c5e\u6027\u3002\u5206\u522b\u5bf9",(0,n.jsx)(s.code,{children:"properties"}),"\u5c5e\u6027\u8fdb\u884c\u5355\u4e2a\u5b9a\u4e49\u4f20\u503c\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<div\n  data-gio-imp-track="imp_cat_var"\n  data-gio-track-name="cat_picture"\n  data-gio-track-time="20210601"\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u5bf9\u5e94\u4ea7\u751f\u7684",(0,n.jsx)(s.code,{children:"CUSTOM"}),"\u4e8b\u4ef6\u76f8\u5f53\u4e8e\uff1a \u2193\u2193\u2193"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"gdp('track', 'imp_cat_var', { name: 'cat_picture', time: '20210601' });\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b",children:"\u4fee\u6539\u66dd\u5149\u7c7b\u578b"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u7684\u66dd\u5149\u4e8b\u4ef6\u53ea\u9700\u8981\u7edf\u8ba1\u4e00\u6b21\u6216\u89e6\u53d1\u8fc7\u4e8e\u9891\u7e41\u5bfc\u81f4\u66dd\u5149\u4e8b\u4ef6\u91cf\u8fc7\u5927\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0**",(0,n.jsx)(s.code,{children:'data-gio-imp-type="once"'}),"**\u5e76\u8bbe\u7f6e\u552f\u4e00\u7684",(0,n.jsx)(s.code,{children:"\u8282\u70b9id"}),"\uff0c\u6765\u4f7f\u5f97\u66dd\u5149\u903b\u8f91\u53d8\u4e3a\u5355\u6b21\u4e0a\u62a5\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<div\n  id="imp_1"\n  data-gio-imp-type="once"\n  data-gio-imp-track="imp_picture_var"\n  ...\n>\n  \u76d1\u542c\u7684\u5143\u7d20\uff0c\u5fc5\u987b\u6709\u5185\u5bb9\u6216\u989d\u5916\u6837\u5f0f\u6765\u8ba9\u8282\u70b9\u6709\u5b9e\u9645\u5927\u5c0f\n</div>\n'})}),"\n",(0,n.jsx)(s.h3,{id:"\u6dfb\u52a0\u590d\u5236\u53d1\u9001\u5b9e\u4f8b",children:"\u6dfb\u52a0\u590d\u5236\u53d1\u9001\u5b9e\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u5c06\u672c\u6b21\u66dd\u5149\u4e8b\u4ef6\u540c\u65f6\u53d1\u9001\u7ed9\u5176\u4ed6\u6570\u636e\u6e90\u548c\u5730\u5740 ",(0,n.jsx)(s.a,{href:"/docs/webjs/plugins/multipleInstances#4%E5%9F%8B%E7%82%B9%E5%9F%8B%E7%82%B9%E8%AE%A1%E6%97%B6%E5%8D%8A%E8%87%AA%E5%8A%A8%E5%9F%8B%E7%82%B9%E6%B5%8F%E8%A7%88%E5%A4%9A%E5%8F%91",children:"\u53c2\u8003\u6587\u6863"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c",children:"\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u542c"}),"\n",(0,n.jsxs)(s.p,{children:["\u5f53\u60a8\u9700\u8981\u6dfb\u52a0\u534a\u81ea\u52a8\u57cb\u70b9\u7684\u8282\u70b9\u662f\u52a8\u6001\u6e32\u67d3\u65f6\uff08\u4f8b\u5982\u6839\u636e\u63a5\u53e3\u6570\u636e\u6e32\u67d3\u4e0d\u540c\u7684\u5185\u5bb9\uff09\uff0cSDK \u53ef\u80fd\u4f1a\u56e0\u4e3a\u65e0\u6cd5\u611f\u77e5\u8282\u70b9\u6e32\u67d3\u65f6\u673a\u800c\u5931\u53bb\u5bf9\u6807\u8bb0\u8282\u70b9\u7684\u76d1\u542c\u3002\u6b64\u65f6\uff0c\u60a8\u9700\u8981\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"updateImpression"})," \u624b\u52a8\u66f4\u65b0 SDK \u7684\u76d1\u542c\u6765\u4fdd\u8bc1\u60a8\u7684\u52a8\u6001\u6e32\u67d3\u8282\u70b9\u80fd\u591f\u88ab\u76d1\u542c\u5230\u3002"]}),"\n",(0,n.jsx)(s.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"  const data = {\n    impData: [],\n  };\n\n  // \u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2aPromise\u6765\u6a21\u62df\u8c03\u7528\u63a5\u53e3\n  const getData = new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({ name: 'Lily', age: 18 });\n    }, 3000);\n  });\n\n  getData.then((result) => {\n    // \u8bbe\u503c\u89e6\u53d1\u8282\u70b9\u6e32\u67d3\n    data.impData = result;\n    // \u8d4b\u503c\u540e\u8c03\u7528\n    gdp('updateImpression');\n  });\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,n.jsxs)(s.p,{children:["1\u3001",(0,n.jsx)(s.code,{children:"data-gio-imp-attrs"})," \u5141\u8bb8\u63a5\u53d7\u4e00\u4e2aObject\u6216\u8005JSON.stringify\u540e\u7684Object\u5b57\u7b26\u4e32\uff0cSDK\u4f1a\u81ea\u52a8\u5c1d\u8bd5\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u683c\u5f0f\u5316\u5931\u8d25\u65f6\u9ed8\u8ba4\u8fd4\u56de\u7a7a\u5bf9\u8c61\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"2\u3001\u88ab\u6807\u8bb0\u7684\u8282\u70b9\u5fc5\u987b\u6709\u5b9e\u9645\u7684\u5927\u5c0f\uff0c\u4e00\u4e2a\u6ca1\u6709\u5185\u5bb9\u548c\u6837\u5f0f\u7684\u8282\u70b9\u6807\u8bb0\u53ef\u80fd\u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002"}),"\n",(0,n.jsx)(s.p,{children:"3\u3001\u8bf7\u52ff\u5728\u540c\u4e00\u9875\u9762\u4e2d\u5927\u91cf\u6807\u8bb0\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u4e8b\u4ef6\uff08\u5982\u5546\u54c1\u5217\u8868\uff09\uff0c\u53ef\u80fd\u4f1a\u4e25\u91cd\u5f71\u54cd\u9875\u9762\u6027\u80fd\u5bfc\u81f4\u5361\u987f\u3002"}),"\n",(0,n.jsx)(s.p,{children:"4\u3001\u652f\u6301\u8282\u70b9\u81ea\u52a8\u76d1\u542c\uff0c\u5373\u52a8\u6001\u751f\u6210\u7684\u8282\u70b9\uff0c\u53ea\u8981\u8865\u5145\u6807\u8bb0\u5408\u6cd5\uff0c\u5c31\u4f1a\u81ea\u52a8\u89e6\u53d1\u76d1\u542c\uff0c\u4e5f\u53ef\u4ee5\u89e6\u53d1\u66dd\u5149\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>d});var n=r(7294);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);