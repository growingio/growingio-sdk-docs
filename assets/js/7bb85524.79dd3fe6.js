"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2966],{2214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var l=n(5893),s=n(1151);const r={sidebar_position:2,title:"PHP SDK"},i=void 0,d={id:"server/PHP SDK",title:"PHP SDK",description:"\u7248\u672c\u8bb0\u5f55",source:"@site/docs/server/PHP SDK.md",sourceDirName:"server",slug:"/server/PHP SDK",permalink:"/growingio-sdk-docs/docs/server/PHP SDK",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/server/PHP SDK.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PHP SDK"},sidebar:"serverSidebar",previous:{title:"JAVA SDK",permalink:"/growingio-sdk-docs/docs/server/Java SDK"},next:{title:"Python SDK",permalink:"/growingio-sdk-docs/docs/server/Python SDK"}},c={},x=[{value:"\u7248\u672c\u8bb0\u5f55",id:"\u7248\u672c\u8bb0\u5f55",level:3},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:3},{value:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001Host",id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidhost",level:4},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5},{value:"\u96c6\u6210 &amp; \u5b89\u88c5",id:"\u96c6\u6210--\u5b89\u88c5",level:3},{value:"\u521d\u59cb\u5316\u914d\u7f6e",id:"\u521d\u59cb\u5316\u914d\u7f6e",level:3},{value:"\u521d\u59cb\u5316\u53c2\u6570",id:"\u521d\u59cb\u5316\u53c2\u6570",level:6},{value:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570",id:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570",level:6},{value:"API\u8bf4\u660e",id:"api\u8bf4\u660e",level:2},{value:"\u57cb\u70b9\u4e8b\u4ef6",id:"\u57cb\u70b9\u4e8b\u4ef6",level:3},{value:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",id:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",level:3},{value:"\u7ef4\u5ea6\u8868",id:"\u7ef4\u5ea6\u8868",level:3},{value:"\u96c6\u6210\u793a\u4f8b",id:"\u96c6\u6210\u793a\u4f8b",level:2},{value:"\u7a0b\u5e8f\u6d4b\u8bd5",id:"\u7a0b\u5e8f\u6d4b\u8bd5",level:2},{value:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",id:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",level:3},{value:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",id:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",level:3},{value:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",id:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{ImageLoader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h3,{id:"\u7248\u672c\u8bb0\u5f55",children:"\u7248\u672c\u8bb0\u5f55"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u7248\u672c"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u65e5\u671f"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"v1.0.3"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u652f\u6301\u57cb\u70b9\u4e8b\u4ef6\u4e8b\u4ef6\u53d8\u91cf\u3001\u7528\u6237\u53d8\u91cf\u53ef\u4f20\u5217\u8868\u7c7b\u578b"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2022-04-20"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"v1.0.2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u652f\u6301\u57cb\u70b9\u4e8b\u4ef6\u53ef\u4f20eventTime\u53c2\u6570"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2022-04-02"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"v1.0.1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u652f\u6301userKey\u5b57\u6bb5\u8bbe\u7f6e"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2022-02-11"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,l.jsx)(t.p,{children:"GrowingIO\u63d0\u4f9b\u5728Server\u7aef\u90e8\u7f72\u7684PHP SDK,\u4ece\u800c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u4e8b\u4ef6\u4e0a\u62a5\u7b49\u64cd\u4f5c\u3002"}),"\n",(0,l.jsxs)(t.p,{children:["\u6e90\u7801\u6258\u7ba1\u5728 ",(0,l.jsx)(t.a,{href:"https://github.com/growingio/growingio-php-sdk",children:"growingio/growingio-php-sdk"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"php \u7248\u672c => 5.5"}),"\n"]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"\u96c6\u6210\u51c6\u5907",children:"\u96c6\u6210\u51c6\u5907"}),"\n",(0,l.jsx)(t.h4,{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidhost",children:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001Host"}),"\n",(0,l.jsxs)(t.admonition,{type:"info",children:[(0,l.jsxs)(t.p,{children:["AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,l.jsx)("br",{}),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,l.jsx)("br",{}),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u975e\u5e73\u53f0\u5730\u5740",(0,l.jsx)("br",{})]}),(0,l.jsx)(t.p,{children:"AccountID\u3001DataSourceID \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"})]}),"\n",(0,l.jsx)(t.h5,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,l.jsx)(n,{path:"img/common/createapplication"}),"\n",(0,l.jsx)(t.h5,{id:"\u67e5\u770b",children:"\u67e5\u770b"}),"\n",(0,l.jsx)(n,{path:"img/common/showServerDataSourceID"}),"\n",(0,l.jsx)(t.h3,{id:"\u96c6\u6210--\u5b89\u88c5",children:"\u96c6\u6210 & \u5b89\u88c5"}),"\n",(0,l.jsxs)(t.p,{children:["php sdk\u5df2\u7ecf\u53d1\u5e03\u5728",(0,l.jsx)(t.a,{href:"https://packagist.org/packages/growingio/php-sdk",children:"Packagist"}),", \u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(t.a,{href:"https://getcomposer.org",children:"Composer"}),"\u8fdb\u884c\u5b89\u88c5"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-composer",children:'"growingio/php-sdk": "1.0.3"\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"<?php\nuse com\\growingio\\GrowingIO;\n//Load Composer's autoloader\nrequire 'vendor/autoload.php';\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u5982\u679c\u6ca1\u6709\u4f7f\u7528Composer, \u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u6e90\u4ee3\u7801\u5230php\u914d\u7f6e\u4e2d\u6307\u5b9a\u7684include_path\u76ee\u5f55\u4e2d, \u5e76\u624b\u52a8\u52a0\u8f7d\u7c7b\u6587\u4ef6"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"<?php\nuse com\\growingio\\GrowingIO;\n\ninclude_once 'path/src/GrowingIO.php'; // path\u4e3a\u5bf9\u5e94\u8def\u5f84\n"})}),"\n",(0,l.jsx)(t.h3,{id:"\u521d\u59cb\u5316\u914d\u7f6e",children:"\u521d\u59cb\u5316\u914d\u7f6e"}),"\n",(0,l.jsx)(t.h6,{id:"\u521d\u59cb\u5316\u53c2\u6570",children:"\u521d\u59cb\u5316\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u5fc5\u9009"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"accountID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u9879\u76ee ID,\u89c1\u6570\u636e\u6e90\u914d\u7f6e"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"host"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u6570\u636e\u6536\u96c6\u670d\u52a1\u57df\u540d,\u8bf7\u53c2\u8003\u8fd0\u7ef4\u624b\u518c\u6216\u8054\u7cfb\u6280\u672f\u652f\u6301\u83b7\u53d6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"dataSourceId"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u6570\u636e\u6e90 ID,\u89c1\u6570\u636e\u6e90\u914d\u7f6e"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"props"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"array"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"array()"}),(0,l.jsx)(t.td,{children:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570"})]})]})]}),"\n",(0,l.jsx)(t.h6,{id:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570",children:"\u521d\u59cb\u5316\u914d\u7f6e\u989d\u5916\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u5fc5\u9009"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"debug"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"false"}),(0,l.jsx)(t.td,{children:"debug \u6a21\u5f0f, \u6b64\u6a21\u5f0f\u4ec5\u6253\u5370\u65e5\u5fd7, \u4e0d\u53d1\u9001\u6570\u636e"})]})})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"$accountID = '1234567887654321';\n$host = 'https://localhost.com';\n$dataSourceId = '12345678';\n$props = array('debug' => true);\n\n$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);\n"})}),"\n",(0,l.jsx)(t.h2,{id:"api\u8bf4\u660e",children:"API\u8bf4\u660e"}),"\n",(0,l.jsx)(t.h3,{id:"\u57cb\u70b9\u4e8b\u4ef6",children:"\u57cb\u70b9\u4e8b\u4ef6"}),"\n",(0,l.jsx)(t.p,{children:"\u53d1\u9001\u4e00\u4e2a\u57cb\u70b9\u4e8b\u4ef6\u3002\u5728\u6dfb\u52a0\u53d1\u9001\u7684\u57cb\u70b9\u4e8b\u4ef6\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u5728CDP\u5e73\u53f0\u4e8b\u4ef6\u7ba1\u7406\u754c\u9762\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u4ee5\u53ca\u5173\u8054\u4e8b\u4ef6\u5c5e\u6027"}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u5f53\u9700\u8981\u6807\u8bb0\u7528\u6237ID\u7c7b\u578b\u65f6\uff0c\u8bf7\u5148\u8fdb\u884c\u89c4\u5212\uff0c\u5e76\u5728\u5e73\u53f0\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u6dfb\u52a0\u65b0\u7684\u7528\u6237\u8eab\u4efd\u7c7b\u578b\uff0c\u518d\u8bbe\u7f6euserkey\uff0c\u8bef\u8bbe\u4f1a\u5f71\u54cd\u6570\u636e\u8d28\u91cf\u3002"}),"\n"]})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u662f\u5426\u5fc5\u586b"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"eventTime"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5f53\u524d\u65f6\u95f4\u7684\u65f6\u95f4\u6233"}),(0,l.jsxs)(t.td,{children:["\u4e8b\u4ef6\u53d1\u751f\u65f6\u95f4(\u6beb\u79d2)\uff1b",(0,l.jsx)("br",{}),"\u9700\u8981\u5f00\u542f\u201c\u81ea\u5b9a\u4e49event_time\u4e0a\u62a5\u201d\u529f\u80fd\u65b9\u53ef\u751f\u6548\uff0c\u8bf7\u8054\u7cfb\u6280\u672f\u652f\u6301\u786e\u8ba4"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"loginUserKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{children:"\u767b\u5f55\u7528\u6237KEY (\u9009\u586b\uff0c\u9700\u6709\u89c4\u5212\u5e76\u5728\u5e73\u53f0\u914d\u7f6e\u540e\u518d\u4e0a\u62a5)\uff0c\u4f20\u6b64\u53c2\u6570\u65f6\uff0c\u540c\u65f6\u9700\u4f20\u767b\u5f55\u7528\u6237ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"anonymousId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{children:"\u8bbf\u95ee\u7528\u6237ID\uff0c\u4e0e\u767b\u5f55\u7528\u6237ID\uff0c\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"loginUserId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{children:"\u767b\u5f55\u7528\u6237ID\uff0c\u4e0e\u8bbf\u95ee\u7528\u6237ID\uff0c\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"eventKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{children:"\u57cb\u70b9\u4e8b\u4ef6\u6807\u8bc6\u7b26"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"properties"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"array"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"array()"}),(0,l.jsxs)(t.td,{children:["\u4e8b\u4ef6\u53d1\u751f\u65f6,\u6240\u4f34\u968f\u7684\u7ef4\u5ea6\u4fe1\u606f\uff1b",(0,l.jsx)("br",{}),"value\u652f\u6301 string|double|int|\u6570\u7ec4,\u6570\u7ec4\u4e2d\u5143\u7d20\u652f\u6301string|double|int"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"$gio->trackCustomEvent($gio->getCustomEventFactory('loginUserId', 'eventName')\n    ->setEventTime(1648524854000)\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('attrKey1' => 'attrValue1', 'attrKey2' => 'attrValue2', 'attrKey3' => array(\"Volvo\",\"BMW\",\"Toyota\")))\n    ->create());\n"})}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,l.jsx)(t.a,{href:"/knowledge/basicknowledge/trackEventUse#%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",children:"\u57cb\u70b9\u4e8b\u4ef6\u793a\u4f8b"})]})}),"\n",(0,l.jsx)(t.h3,{id:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6",children:"\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6"}),"\n",(0,l.jsxs)(t.p,{children:["\u4ee5\u767b\u5f55\u7528\u6237\u7684\u8eab\u4efd\u5b9a\u4e49\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u6bd4\u5982\u5e74\u9f84\u3001\u6027\u522b\u3001\u4f1a\u5458\u7b49\u7ea7\u7b49\uff0c\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u76f8\u5173\u5206\u6790",(0,l.jsx)("br",{}),"\n\u5728\u6dfb\u52a0\u767b\u5f55\u7528\u6237\u5c5e\u6027\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728CDP\u5e73\u53f0\u7528\u6237\u7ba1\u7406\u754c\u9762\u4e2d\u521b\u5efa\u7528\u6237\u5c5e\u6027"]}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u5f53\u9700\u8981\u6807\u8bb0\u7528\u6237ID\u7c7b\u578b\u65f6\uff0c\u8bf7\u5148\u8fdb\u884c\u89c4\u5212\uff0c\u5e76\u5728\u5e73\u53f0\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u6dfb\u52a0\u65b0\u7684\u7528\u6237\u8eab\u4efd\u7c7b\u578b\uff0c\u518d\u8bbe\u7f6euserkey\uff0c\u8bef\u8bbe\u4f1a\u5f71\u54cd\u6570\u636e\u8d28\u91cf\u3002"}),"\n"]})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u662f\u5426\u5fc5\u586b"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"loginUserKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u767b\u5f55\u7528\u6237KEY (\u9009\u586b\uff0c\u9700\u6709\u89c4\u5212\u5e76\u5728\u5e73\u53f0\u914d\u7f6e\u540e\u518d\u4e0a\u62a5)\uff0c\u4f20\u6b64\u53c2\u6570\u65f6\uff0c\u540c\u65f6\u9700\u4f20\u767b\u5f55\u7528\u6237ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"loginUserId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u767b\u5f55\u7528\u6237ID\uff0c\u4e0e\u8bbf\u95ee\u7528\u6237ID\uff0c\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"anonymousId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u8bbf\u95ee\u7528\u6237ID\uff0c\u4e0e\u767b\u5f55\u7528\u6237ID\uff0c\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"properties"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"array"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{children:["\u7528\u6237\u5c5e\u6027\u4fe1\u606f\uff1b",(0,l.jsx)("br",{}),"value\u652f\u6301 string|double|int|\u6570\u7ec4,\u6570\u7ec4\u4e2d\u5143\u7d20\u652f\u6301string|double|int"]})]})]})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"$gio->setUserAttributesEvent($gio->getUserAttributesFactory('loginUserId')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('gender' => 'male', 'age' => '18','education' => array('\u672c\u79d1','\u7855\u58eb')))\n    ->create());\n"})}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["\u8be6\u7ec6\u4f7f\u7528\u793a\u4f8b:",(0,l.jsx)(t.a,{href:"/knowledge/basicknowledge/trackEventUse#%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",children:"\u7528\u6237\u5c5e\u6027\u4e8b\u4ef6\u793a\u4f8b"})]})}),"\n",(0,l.jsx)(t.h3,{id:"\u7ef4\u5ea6\u8868",children:"\u7ef4\u5ea6\u8868"}),"\n",(0,l.jsx)(t.p,{children:"\u4e0a\u4f20\u4e00\u4e2a\u7ef4\u5ea6\u8868\u8bb0\u5f55\u3002\u5728\u6dfb\u52a0\u6240\u9700\u8981\u4e0a\u4f20\u7ef4\u5ea6\u8868\u8bb0\u5f55\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u5728\u7ef4\u5ea6\u8868\u7ba1\u7406\u754c\u9762\u4e2d\u521b\u5efa\u5bf9\u5e94\u7ef4\u5ea6\u8868\u53ca\u5176\u5c5e\u6027"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u5fc5\u9009"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"itemId"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u7ef4\u5ea6\u8868\u6a21\u578bID(\u8bb0\u5f55ID)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"itemKey"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{children:"\u7ef4\u5ea6\u8868\u6807\u8bc6\u7b26"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"properties"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"array"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"array()"}),(0,l.jsx)(t.td,{children:"\u7ef4\u5ea6\u8868\u5c5e\u6027\u53ca\u503c"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u96c6\u6210\u793a\u4f8b",children:"\u96c6\u6210\u793a\u4f8b"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"<?php\nuse com\\growingio\\GrowingIO;\n\ninclude_once 'path/src/GrowingIO.php'; // path\u4e3a\u5bf9\u5e94\u8def\u5f84\n\n// \u8bf7\u5728\u60a8\u8c03\u8bd5\u524d,\u5c06accountID\u4fee\u6539\u4e3a\u60a8\u7684\u9879\u76eeAccountID\n// \u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u9700\u8981\u63d0\u524d\u5728GrowingIO\u4ea7\u54c1\u4e2d\u8fdb\u884c\u5b9a\u4e49\n// \u6240\u6709\u57cb\u70b9\u4e8b\u4ef6\u7684\u5c5e\u6027\u4e5f\u9700\u8981\u63d0\u524d\u5728GrowingIO\u4ea7\u54c1\u4e2d\u8fdb\u884c\u5b9a\u4e49\n$accountID = '1234567887654321';\n$host = 'https://localhost.com';\n$dataSourceId = '12345678';\n$props = array('debug' => true);\n$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);\n\n// \u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n$gio->trackCustomEvent($gio->getCustomEventFactory('loginUserId', 'eventName')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('attrKey1' => 'attrValue1', 'attrKey2' => 'attrValue2'))\n    ->create()\n);\n\n// \u8bbe\u7f6e\u767b\u5f55\u7528\u6237\u53d8\u91cf\n$gio->setUserAttributesEvent($gio->getUserAttributesFactory('loginUserId')\n    ->setLoginUserKey('loginUserKey')\n    ->setProperties(array('gender' => 'male', 'age' => '18'))\n    ->create());\n\n// \u8bbe\u7f6e\u7269\u54c1\u6a21\u578b\n$gio->setItemAttributes(\n    '1001',\n    'product',\n    array('color' => 'red')\n);\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u7a0b\u5e8f\u6d4b\u8bd5",children:"\u7a0b\u5e8f\u6d4b\u8bd5"}),"\n",(0,l.jsx)(t.p,{children:"\u8bf7\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u8fdb\u884c\u57cb\u70b9\u6570\u636e\u7684\u5f00\u53d1\u8054\u8c03\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e",children:"\u5b8c\u6210\u57cb\u70b9\u4e8b\u4ef6\u7684\u914d\u7f6e"}),"\n",(0,l.jsxs)(t.p,{children:["\u5728GrowingIO\u3010\u6570\u636e\u3011>\u3010\u6570\u636e\u7ba1\u7406\u3011\u4e2d\u521b\u5efa\u57cb\u70b9\u4e8b\u4ef6\u53ca\u4e8b\u4ef6\u5c5e\u6027/\u767b\u5f55\u7528\u6237\u5c5e\u6027\uff0c\u5982\u56fe\u6240\u793a\u3002\n",(0,l.jsx)(t.img,{src:"https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jYpHFW7WpKIaXRTx1%2Fimage.png?alt=media&token=a2dae343-1204-4d36-ad08-9c7099016b11",alt:"custom data"})]}),"\n",(0,l.jsx)(t.h3,{id:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e",children:"\u6d4b\u8bd5\u7a0b\u5e8f\u914d\u7f6e"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"\u5728\u60a8\u7684PHP\u9879\u76ee\u4e2d\u96c6\u6210\u589e\u52a0GrowingIO PHP SDK\u7684\u4f9d\u8d56\uff08\u9996\u6b21\u96c6\u6210\u9700\u8981\uff09"}),"\n",(0,l.jsx)(t.li,{children:"SDK\u521d\u59cb\u5316\u914d\u7f6e\u4e2ddebug \u914d\u7f6e\u4e3a true"}),"\n",(0,l.jsx)(t.li,{children:"\u5728\u60a8\u7684PHP\u9879\u76ee\u4e2d\u627e\u5230\u5408\u9002\u7684\u57cb\u70b9\u4f4d\u7f6e\uff0c\u8c03\u7528\u57cb\u70b9\u4e8b\u4ef6API/\u767b\u5f55\u7528\u6237\u5c5e\u6027API\u4e0a\u4f20\u6570\u636e"}),"\n",(0,l.jsx)(t.li,{children:"\u5728\u8f93\u51fa\u7684\u65e5\u5fd7\u4e2d\u67e5\u627e\u662f\u5426\u5305\u542b\u671f\u671b\u4e8b\u4ef6\u5185\u5bb9"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e",children:"\u5b8c\u6210\u4ee5\u4e0a\u6d4b\u8bd5\u6b65\u9aa4\u540e"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"\u4fee\u6539SDK\u521d\u59cb\u5316\u65f6 debug \u914d\u7f6e\u4e3a false \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5e76\u89e6\u53d1\u57cb\u70b9\u4e8b\u4ef6"}),"\n",(0,l.jsx)(t.li,{children:"\u5728\u7ebf\u67e5\u8be2GrowingIO\u6570\u636e\u5e93\uff0c\u786e\u8ba4\u6570\u636e\u4e0a\u4f20\u6210\u529f"}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var l=n(7294);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);