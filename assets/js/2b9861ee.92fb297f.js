"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2117],{9937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var l=n(5893),s=n(1151);n(4866),n(5162);const r={sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},i=void 0,d={id:"android/Configuration",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e Configuration, \u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a",source:"@site/docs/android/Configuration.md",sourceDirName:"android",slug:"/android/Configuration",permalink:"/growingio-sdk-docs/docs/android/Configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"docSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs/docs/android/Introduce"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/android/api"}},a={},c=[{value:"\u914d\u7f6e\u8868\u683c",id:"\u914d\u7f6e\u8868\u683c",level:2},{value:"\u901a\u7528\u914d\u7f6e",id:"\u901a\u7528\u914d\u7f6e",level:3},{value:"\u65e0\u57cb\u70b9\u914d\u7f6e",id:"\u65e0\u57cb\u70b9\u914d\u7f6e",level:3},{value:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e",id:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e",level:2},{value:"1. SDK\u5fc5\u9700\u53c2\u6570",id:"1-sdk\u5fc5\u9700\u53c2\u6570",level:3},{value:"2. setChannel",id:"2-setchannel",level:3},{value:"3. setDebugEnabled",id:"3-setdebugenabled",level:3},{value:"4. setCellularDataLimit",id:"4-setcellulardatalimit",level:3},{value:"5. setDataUploadInterval",id:"5-setdatauploadinterval",level:3},{value:"6. setSessionInterval",id:"6-setsessioninterval",level:3},{value:"7. setDataCollectionEnabled",id:"7-setdatacollectionenabled",level:3},{value:"8. setEventFilterInterceptor",id:"8-seteventfilterinterceptor",level:3},{value:"9. setImeiEnabled",id:"9-setimeienabled",level:3},{value:"10. setAndroidIdEnabled",id:"10-setandroididenabled",level:3},{value:"11. setRequireAppProcessesEnabled",id:"11-setrequireappprocessesenabled",level:3},{value:"12. setIdMappingEnabled",id:"12-setidmappingenabled",level:3},{value:"13. addPreloadComponent",id:"13-addpreloadcomponent",level:3},{value:"14. setRequestTimeout",id:"14-setrequesttimeout",level:3},{value:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e",id:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e",level:2},{value:"1. setImpressionScale",id:"1-setimpressionscale",level:3},{value:"2. setWebViewBridgeEnabled",id:"2-setwebviewbridgeenabled",level:3},{value:"3. enableFragmentTag",id:"3-enablefragmenttag",level:3},{value:"4. setPageRuleXml",id:"4-setpagerulexml",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e ",(0,l.jsx)(t.code,{children:"Configuration"}),", \u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a"]}),"\n",(0,l.jsx)(t.h2,{id:"\u914d\u7f6e\u8868\u683c",children:"\u914d\u7f6e\u8868\u683c"}),"\n",(0,l.jsx)(t.h3,{id:"\u901a\u7528\u914d\u7f6e",children:"\u901a\u7528\u914d\u7f6e"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u914d\u7f6e\u65b9\u6cd5"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u662f\u5426\u5fc5\u586b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"}),(0,l.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"accountId"})," ",(0,l.jsx)(t.a,{href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"String"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"\u662f"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"null"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9879\u76eeID\uff0c\u6bcf\u4e2a\u5e94\u7528\u5bf9\u5e94\u552f\u4e00\u503c"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"urlScheme"})," ",(0,l.jsx)(t.a,{href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"String"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"\u662f"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"null"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e94\u7528\u7684URLScheme\uff0c\u552f\u4e00\u503c"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"setDataSourceId"})," ",(0,l.jsx)(t.a,{href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"String"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"\u662f"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"null"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e94\u7528\u7684DataSourceId\uff0c\u552f\u4e00\u503c"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setDataCollectionServerHost ",(0,l.jsx)(t.a,{href:"#1-sdk%E5%BF%85%E9%9C%80%E5%8F%82%E6%95%B0",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"String"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"\u65b0saas\u5730\u5740"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6536\u6570\u5730\u5740"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setChannel ",(0,l.jsx)(t.a,{href:"#2-setchannel",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"String"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"null"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8bbe\u7f6e\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setDebugEnabled ",(0,l.jsx)(t.a,{href:"#3-setdebugenabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370 Log \u548c\u9519\u8bef\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u8bf7\u5173\u95ed"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setCellularDataLimit ",(0,l.jsx)(t.a,{href:"#4-setcellulardatalimit",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"int"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"10"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setDataUploadInterval ",(0,l.jsx)(t.a,{href:"#5-setdatauploadinterval",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"int"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"15"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setSessionInterval ",(0,l.jsx)(t.a,{href:"#6-setsessioninterval",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"int"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"30"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u5355\u4f4d\u79d2"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setImeiEnabled ",(0,l.jsx)(t.a,{href:"#8-setimeienabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u91c7\u96c6Imei\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e0d\u91c7\u96c6"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setDataCollectionEnabled ",(0,l.jsx)(t.a,{href:"#7-setdatacollectionenabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"true"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u91c7\u96c6\u6570\u636e"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setEventFilterInterceptor ",(0,l.jsx)(t.a,{href:"#8-seteventfilterinterceptor",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"EventFilterInterceptor"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"\u4e0d\u62e6\u622a"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7528\u4e8e\u4e8b\u4ef6\u8fc7\u6ee4,\u8fc7\u6ee4\u4e8b\u4ef6\u7c7b\u578b\u548c\u4e8b\u4ef6\u5c5e\u6027"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setIdMappingEnabled ",(0,l.jsx)(t.a,{href:"#12-setidmappingenabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setRequireAppProcessesEnabled ",(0,l.jsx)(t.a,{href:"#11-setrequireappprocessesenabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"SDK \u662f\u5426\u80fd\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0bID"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setAndroidIdEnabled ",(0,l.jsx)(t.a,{href:"#10-setandroididenabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"SDK \u662f\u5426\u80fd\u83b7\u53d6 AndroidId"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["addPreloadComponent ",(0,l.jsx)(t.a,{href:"#13-addpreloadcomponent",children:"#"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.em,{children:"LibraryGioModule"}),",",(0,l.jsx)("br",{}),"[",(0,l.jsx)(t.em,{children:"Configurable"}),"]"]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"null"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6ce8\u518c\u81ea\u5b9a\u4e49/\u9884\u5b9a\u4e49\u6a21\u5757\u53ca\u5176\u914d\u7f6e\u6587\u4ef6"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setRequestTimeout ",(0,l.jsx)(t.a,{href:"#14-setrequesttimeout",children:"#"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.em,{children:"int"}),",",(0,l.jsx)(t.em,{children:"TimeUnit"})]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"30s"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7f51\u7edc\u6570\u636e\u53d1\u9001\u8d85\u65f6\u8bbe\u7f6e"}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u65e0\u57cb\u70b9\u914d\u7f6e",children:"\u65e0\u57cb\u70b9\u914d\u7f6e"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u914d\u7f6e\u65b9\u6cd5"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u662f\u5426\u5fc5\u586b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"}),(0,l.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setImpressionScale ",(0,l.jsx)(t.a,{href:"#1-setimpressionscale",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"float"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"0"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 [0-1]"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setWebViewBridgeEnabled ",(0,l.jsx)(t.a,{href:"#2-setwebviewbridgeenabled",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"true"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5168\u91cf\u91c7\u96c6 hybrid \u6570\u636e"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["enableFragmentTag ",(0,l.jsx)(t.a,{href:"#3-enablefragmenttag",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u5426"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5c06Fragment\u7684tag\u4f5c\u4e3a\u65e0\u57cb\u70b9\u8def\u5f84\u7684\u8bb0\u53f7"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["setPageRuleXml ",(0,l.jsx)(t.a,{href:"#4-setpagerulexml",children:"#"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"int"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u662f"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"xml id"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7528\u4e8e\u81ea\u52a8\u91c7\u96c6\u65e0\u57cb\u70b9\u9875\u9762"}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e",children:"\u901a\u7528\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,l.jsx)(t.h3,{id:"1-sdk\u5fc5\u9700\u53c2\u6570",children:"1. SDK\u5fc5\u9700\u53c2\u6570"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"accountId\uff0c"})," ",(0,l.jsx)(t.strong,{children:"urlScheme\uff0c"})," ",(0,l.jsx)(t.strong,{children:"setDataSourceId\uff0c"}),"\n\u8fd9\u4e09\u4e2a\u53c2\u6570\u4e3a\u7528\u6237\u5fc5\u987b\u8981\u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u82e5\u4e0d\u6e05\u695a\u5177\u4f53\u6570\u503c\u8bf7\u8be2\u95ee\u76f8\u5173\u670d\u52a1\u7aef\u5bf9\u63a5\u7684\u5f00\u53d1\u540c\u4e8b\u3002"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"setDataCollectionServerHost"})," \u9ed8\u8ba4\u57df\u540d\u4e3a ",(0,l.jsx)(t.code,{children:"napi.growingio.com"}),"\uff0c\u82e5\u662fOP\u5ba2\u6237\uff0c\u9700\u8981\u8bbe\u7f6e\u81ea\u5df1\u7684ServerHost\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"2-setchannel",children:"2. setChannel"}),"\n",(0,l.jsxs)(t.p,{children:["\u5bf9\u5e94\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053\u5b57\u6bb5\uff0c\u82e5\u8bbe\u7f6e\u4e86\u503c\u5219\u4f1a\u5728\u6bcf\u4e2a\u4e8b\u4ef6\u4e0a\u62a5\u4e2d\u542b\u6709\u6e20\u9053\u4fe1\u606f\u3002\n\u6bd4\u5982\u5728\u521d\u59cb\u5316\u4e2d\u8bbe\u7f6e\u4e86",(0,l.jsx)(t.code,{children:'.setChannel("Google")'}),",\u5219\u4f1a\u5728\u4e0a\u62a5\u4fe1\u606f\u4e2d\u51fa\u73b0 ",(0,l.jsx)(t.code,{children:"appChannel"})," \u5b57\u6bb5\uff1a"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "platform": "Android",\n    \u2551   "appChannel": "Google",\n    \u2551   "screenHeight": 1920,\n    \u2551   "screenWidth": 1080,\n    \u2551   ...\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n'})}),"\n",(0,l.jsx)(t.h3,{id:"3-setdebugenabled",children:"3. setDebugEnabled"}),"\n",(0,l.jsxs)(t.p,{children:["\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5f00\u542f\u540e\u4f1a\u8f93\u51fa SDK Log \u65e5\u5fd7\u3002\n\u5efa\u8bae\u505a\u6cd5\u8bbe\u4e3a ",(0,l.jsx)(t.code,{children:"setDebugEnabled(BuildConfig.DEBUG)"})," \u8fd9\u6837\u65e2\u80fd\u4fdd\u8bc1Debug\u65f6\u80fd\u591f\u6253\u5370\u65e5\u5fd7\uff0c\u6b63\u5f0f\u53d1\u5e03\u65f6\u4e5f\u80fd\u5173\u95ed\u65e5\u5fd7\uff1b"]}),"\n",(0,l.jsx)(t.h3,{id:"4-setcellulardatalimit",children:"4. setCellularDataLimit"}),"\n",(0,l.jsx)(t.p,{children:"\u4e3a\u6bcf\u65e5\u57284G\u73af\u5883\u4e0b\u7684\u6d41\u91cf\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a10M\u3002WIFI\u73af\u5883\u4e0b\u5219\u4e0d\u8ba1\u6d41\u91cf\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"5-setdatauploadinterval",children:"5. setDataUploadInterval"}),"\n",(0,l.jsx)(t.p,{children:"\u4e0a\u62a5\u95f4\u9694\u3002GrowingIO SDK \u4f1a\u5148\u5c06\u4e8b\u4ef6\u5b58\u5165\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f415\u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u592750\u6761\u4e8b\u4ef6\uff09\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"6-setsessioninterval",children:"6. setSessionInterval"}),"\n",(0,l.jsx)(t.p,{children:"\u8bbe\u7f6e\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\u3002\u6307\u5f53\u524d\u4f1a\u8bdd\u5728\u5e94\u7528\u8fdb\u5165\u540e\u53f0\u540e\u7684\u6700\u5927\u7559\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a30\u79d2\u3002\u53e6\u5916\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f1a\u8bdd\uff0c\u5982\u8bbe\u7f6e\u7528\u6237ID\u7b49\u6838\u5fc3\u4fe1\u606f\uff0c\u91cd\u65b0\u6253\u5f00\u6570\u636e\u6536\u96c6\u7b49\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"7-setdatacollectionenabled",children:"7. setDataCollectionEnabled"}),"\n",(0,l.jsx)(t.p,{children:"\u6570\u636e\u6536\u96c6\u3002\u5f53\u6570\u636e\u6536\u96c6\u5173\u95ed\u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u518d\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4e8b\u4ef6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"8-seteventfilterinterceptor",children:"8. setEventFilterInterceptor"}),"\n",(0,l.jsxs)(t.p,{children:["\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u8be5\u63a5\u53e3\u9700\u8981\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u62e6\u622a\u5668\u7528\u4e8e\u4e8b\u4ef6\u62e6\u622a\u7684\u81ea\u5b9a\u4e49\u5316\u3002",(0,l.jsx)(t.strong,{children:"\u4f7f\u7528\u4e8b\u4ef6\u62e6\u622a\u5668\u65f6\u8bf7\u6ce8\u610f\u4f7f\u7528\uff0c\u4e0d\u8981\u8fc7\u6ee4\u6389\u91cd\u8981\u4fe1\u606f\uff0c\u9632\u6b62\u6570\u636e\u91c7\u96c6\u4fe1\u606f\u4e22\u5931\u6216\u8005\u5c11\u91c7\u3002"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'// \u58f0\u660e\u4e00\u4e2a\u4e8b\u4ef6\u8fc7\u6ee4\u5668\uff0c\u7ee7\u627f `DefaultEventFilterInterceptor` \u6216 `EventFilterInterceptor`\nclass CustomEventFilterInterceptor implements EventFilterInterceptor {\n\n    // \u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u6765\u8fc7\u6ee4\u4e8b\u4ef6\uff0c\u8fd4\u56de false \u8868\u793a\u62e6\u622a\uff0c\u8fd4\u56de true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u62e6\u622a\u4e8b\u4ef6\u7c7b\u578b\u4e3a \u201cPAGE\u201d \u7684\u4e8b\u4ef6\n    @Override\n    public boolean filterEventType(String eventType) {\n        if (FilterEventType.PAGE.equals(eventType)) return false;\n        return true;\n    }\n\n    // \u8fc7\u6ee4\u4e8b\u4ef6\u57fa\u7840\u5c5e\u6027\uff0c\u5c5e\u6027\u8bbe\u7f6e false \u8868\u793a\u62e6\u622a\uff0c\u8bbe\u7f6e true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u4e8b\u4ef6\u4e2d\u4e0d\u518d\u5305\u542b\u5c4f\u5e55\u5bbd\u9ad8\u7684\u5c5e\u6027\u3002\n    @Override\n    public Map<String, Boolean> filterEventField(String type, Map<String, Boolean> fieldArea) {\n        fieldArea.put(BaseField.SCREEN_HEIGHT, false);\n        fieldArea.put(BaseField.SCREEN_WIDTH, false);\n        return fieldArea;\n    }\n\n    // \u9488\u5bf9\u65e0\u57cb\u70b9\u7684\u9875\u9762\u4e8b\u4ef6\u7684\u8def\u5f84\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u9875\u9762\u4e8b\u4ef6\u4e2d\u7684\u8def\u5f84\u5305\u542b \u201cTestActivity\u201d \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventPath(String path) {\n        return !path.contains("TestActivity");\n    }\n\n    // \u9488\u5bf9\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u540d\u79f0\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u4e2d\u540d\u79f0\u4e3a "test" \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventName(String eventName) {\n        return !"test".equals(eventName);\n    }\n}\n'})}),"\n",(0,l.jsx)(t.p,{children:"\u4e4b\u540e\u518d\u8c03\u7528\u8be5\u63a5\u53e3\u8bbe\u7f6e\u62e6\u622a\u5668"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'GrowingTracker.startWithConfiguration(this,\n    new AutotrackConfiguration("accountId", "urlScheme")\n        ...\n       .setEventFilterInterceptor(new CustomEventFilterInterceptor())\n);\n'})}),"\n",(0,l.jsx)(t.h3,{id:"9-setimeienabled",children:"9. setImeiEnabled"}),"\n",(0,l.jsx)(t.p,{children:"\u662f\u5426\u91c7\u96c6Imei\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e0d\u91c7\u96c6\uff0c\u4e14Android 10\u53ca\u4ee5\u4e0a\u5df2\u4e0d\u518d\u652f\u6301 Imei \u7684\u83b7\u53d6\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"10-setandroididenabled",children:"10. setAndroidIdEnabled"}),"\n",(0,l.jsxs)(t.p,{children:["\u662f\u5426\u83b7\u53d6AndroidId\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e0d\u83b7\u53d6\uff0c",(0,l.jsx)(t.strong,{children:"\u5efa\u8bae\u6253\u5f00"}),"\uff0c\u53ef\u4ee5\u5e2e\u52a9\u66f4\u51c6\u786e\u7684\u5339\u914d\u5e7f\u544a\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"11-setrequireappprocessesenabled",children:"11. setRequireAppProcessesEnabled"}),"\n",(0,l.jsxs)(t.p,{children:["SDK \u662f\u5426\u80fd\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0bID\u3002\u9ed8\u8ba4\u4e0d\u83b7\u53d6\uff0c\u5728\u5e94\u7528\u6709\u591a\u8fdb\u7a0b\u7684\u573a\u666f\u4e0b",(0,l.jsx)(t.strong,{children:"\u5efa\u8bae\u6253\u5f00"}),"\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"12-setidmappingenabled",children:"12. setIdMappingEnabled"}),"\n",(0,l.jsxs)(t.p,{children:["\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u9ed8\u8ba4\u4e0d\u652f\u6301\u3002\n\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u4e0e API \u63a5\u53e3",(0,l.jsx)(t.code,{children:"setLoginUserId(String userId, String userKey)"}),"\u5bf9\u5e94\uff0c\u9700\u8981\u4e0a\u62a5 userkey \u65f6\u5f00\u542f\uff1b \u5f00\u542f\u65f6\uff0cuserKey\u4f1a\u5728\u6bcf\u6b21\u4e0a\u62a5\u6570\u636e\u65f6\u643a\u5e26\uff1b\u5173\u95ed\u65f6\uff0cuserKey\u4e0d\u4e0a\u62a5\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"13-addpreloadcomponent",children:"13. addPreloadComponent"}),"\n",(0,l.jsx)(t.p,{children:"\u6ce8\u518c\u529f\u80fd\u6a21\u5757\uff0c\u4e3a Growingio SDK \u6dfb\u52a0\u66f4\u591a\u7684\u989d\u5916\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u53ef\u4ee5\u6ce8\u518c\u5bf9\u5e94\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n        new AutotrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>, <\u6a21\u5757\u914d\u7f6e>)\n        // \u6216\u8005\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>)\n\n);\n'})}),"\n",(0,l.jsxs)(t.p,{children:["\u6a21\u5757\u5217\u8868\u8bf7\u53c2\u8003 ",(0,l.jsx)(t.a,{href:"/docs/android/modules",children:"\u529f\u80fd\u6a21\u5757\u4e00\u89c8"})]}),"\n",(0,l.jsx)(t.h3,{id:"14-setrequesttimeout",children:"14. setRequestTimeout"}),"\n",(0,l.jsx)(t.p,{children:"\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u957f\uff0c\u9ed8\u8ba430s\u3002"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'GrowingAutotracker.startWithConfiguration(this,\n        new AutotrackConfiguration("accountId", "urlScheme")\n        // \u8bbe\u7f6e\u7f51\u7edc\u8bf7\u6c42\u8d85\u65f6\n        .setRequestTimeout(30,TimeUnit.SECONDS)\n        // \u6216\u8005\u5728\u4f7f\u7528okHttp\u8bf7\u6c42\u5e93\u65f6\uff0c\u53ef\u4ee5\u8be6\u7ec6\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\n        .setRequestDetailTimeout(10, 10, 10, TimeUnit.SECONDS)\n\n);\n'})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:["\u5f53\u4f7f\u7528\u9ed8\u8ba4 Okhttp \u8bf7\u6c42\u5e93\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(t.code,{children:"setRequestDetailTimeout(10, 10, 10, TimeUnit.SECONDS)"})," \u63a5\u53e3\uff0c\u5176\u503c\u5206\u522b\u5bf9\u5e94 Okhttp \u7f51\u7edc\u5e93\u7684\u8bf7\u6c42\u8d85\u65f6\u8bbe\u7f6e ",(0,l.jsx)(t.code,{children:"connectTimeout"}),", ",(0,l.jsx)(t.code,{children:"readTimeout"}),", ",(0,l.jsx)(t.code,{children:"writeTimeout"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e",children:"\u65e0\u57cb\u70b9\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,l.jsx)(t.h3,{id:"1-setimpressionscale",children:"1. setImpressionScale"}),"\n",(0,l.jsx)(t.p,{children:"\u66dd\u5149\u6bd4\u4f8b\u3002\u4e0e\u66dd\u5149\u4e8b\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\u66dd\u5149\u6bd4\u4f8b\u662f\u6307\u5f53\u4e00\u4e2a\u66dd\u5149\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u65f6\u53ef\u89c1\u7684\u90e8\u5206\u5360\u636e\u81ea\u8eab\u5c3a\u5bf8\u7684\u6bd4\u4f8b\uff0c\u6bd4\u5982\u8bf4\u82e5\u8bbe\u4e3a 0 \u5219\u8868\u793a\u53ea\u8981\u51fa\u73b0\u5373\u4ea7\u751f\u66dd\u5149\u4e8b\u4ef6\uff0c\u82e5\u8bbe\u4e3a1\u5219\u8868\u793a\u8981\u6574\u4e2aView\u90fd\u51fa\u73b0\u5728\u5c4f\u5e55\u4e2d\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"2-setwebviewbridgeenabled",children:"2. setWebViewBridgeEnabled"}),"\n",(0,l.jsx)(t.p,{children:"\u662f\u5426\u5168\u91cf\u91c7\u96c6 hybrid \u6570\u636e\uff08\u9ed8\u8ba4\u4e3a true\uff09"}),"\n",(0,l.jsxs)(t.p,{children:["\u65e0\u57cb\u70b9\u9ed8\u8ba4\u4f1a\u91c7\u96c6\u5bf9\u5e94 webview \u7684 hybrid \u4e8b\u4ef6\uff0c\u8bbe\u7f6e\u4e3a false\uff0c\u53ef\u4ee5\u5173\u95ed\u91c7\u96c6 hybrid \u6570\u636e\u3002",(0,l.jsx)("br",{}),"\n\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u91c7\u96c6\u5355\u4e2a webview \u7684 hybrid \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u65f6 API \u63a5\u53e3",(0,l.jsx)(t.code,{children:"bridgeWebView(View webView)"}),"\u5f00\u542f\u91c7\u96c6\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"3-enablefragmenttag",children:"3. enableFragmentTag"}),"\n",(0,l.jsx)(t.p,{children:"\u5728\u4f7f\u7528\u4e00\u4e9b\u5e93\u65f6\u4f1a\u5bfc\u81f4Fragment\u7684Tag\u4e0d\u53ef\u9884\u8ba1\uff0c\u6bd4\u5982\u5728\u9ad8\u7248\u672c Navigation \u5e93\uff0cNavigation\u5e93\u4f1a\u5bf9\u6240\u6709\u7684\u5bfc\u822a Fragment \u8d4b\u4e88\u4e00\u4e2a UUID \u751f\u6210\u7684\u968f\u673aTAG\u3002\u4e3a\u4e86\u4fdd\u8bc1\u65e0\u57cb\u70b9\u8def\u5f84\u7684\u51c6\u786e\uff0c\u53d6\u6d88\u65e0\u57cb\u70b9\u8def\u5f84xcontent\u4e2d\u5bf9tag\u7684\u652f\u6301\uff0c\u73b0\u5728\u9ed8\u8ba4\u53d6 Fragment \u7684id\u4e3axcontent\u8def\u5f84\u3002\n\u82e5\u5ba2\u6237\u9700\u8981tag\u652f\u6301\uff0c\u53ef\u6253\u5f00 enableFragmentTag(true)\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"4-setpagerulexml",children:"4. setPageRuleXml"}),"\n",(0,l.jsx)(t.p,{children:'\u5728\u65e0\u57cb\u70b9SDK\u4e2d\uff0c\u8be5\u65b9\u6cd5\u901a\u8fc7\u4e00\u4e2a xml \u914d\u7f6e\u6587\u4ef6\u6765\u81ea\u52a8\u91c7\u96c6\u65e0\u57cb\u70b9\u9875\u9762\u3002\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u6709\u4e24\u79cd\u89c4\u5219\uff0c\u4e00\u79cd\u662f\u6307\u5b9a\u9875\u9762\u7684\u5b8c\u6574\u8def\u5f84\u548c\u9875\u9762\u540d\u79f0\uff0c\u53e6\u4e00\u79cd\u662f\u6b63\u5219\u5339\u914d\u9875\u9762\u8def\u5f84\uff0c\u9875\u9762\u540d\u79f0\u9ed8\u8ba4\u53d6\u9875\u9762\u7684\u7c7b\u540d\uff0c\u5982"com.growingio.demo.MainActicity"\u6587\u4ef6\uff0c\u53d6 "MainActivity" \u4e3a\u9875\u9762\u540d\u79f0\u3002'}),"\n",(0,l.jsx)(t.p,{children:"\u9875\u9762\u914d\u7f6exml\u56fa\u5b9a\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-xml",children:'<growingio-setting xmlns:android="http://schemas.android.com/apk/res/android">\n    <page-rule>\n        <page-list>\n            <page\n                name="Main"\n                path="com.growingio.demo.MainActivity" />\n            <page\n                name="Dashboard"\n                path="com.growingio.demo.ui.dashboard.DashboardFragment" />\n        </page-list>\n\n        <page-match>\n            <page regex="com.growingio.demo.ui.*Fragment" />\n        </page-match>\n    </page-rule>\n</growingio-setting>\n'})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["page-list \u8282\u70b9\u4e0b\u7684page\u4e3a\u6307\u5b9a\u9875\u9762\u914d\u7f6e\uff0cname \u8868\u793a\u4e3a\u9875\u9762\u7684\u540d\u79f0\uff0cpath\u8868\u793a\u4e3a\u7c7b\u7684\u8def\u5f84\uff0c\u5728java\u4e2d\u5bf9\u5e94\u65b9\u6cd5\u4e3a ",(0,l.jsx)(t.code,{children:"getClass().getName()"}),";"]}),"\n",(0,l.jsxs)(t.li,{children:["page-match \u8282\u70b9\u4e0b\u7684page\u4e3a\u6b63\u5219\u5339\u914d\u3002regex\u4e3a\u6b63\u5219\u5339\u914d\u89c4\u5219\uff0c\u5728java\u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e3a ",(0,l.jsx)(t.code,{children:"String.matches(regex)"})," \u6765\u9a8c\u8bc1\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u5728\u65e0\u57cb\u70b9\u9875\u9762\u7684\u89c4\u5219\u4e2d\uff0c\u4f18\u5148\u7ea7\u4e3a _autotrackPage_\u63a5\u53e3 > page-list > page-match."})}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u653e\u5728Android\u8d44\u6e90\u76ee\u5f55 ",(0,l.jsx)(t.strong,{children:"res->xml"})," \u76ee\u5f55\u4e2d\uff0c\u5982 ",(0,l.jsx)(t.code,{children:"growingio_page_setting.xml"}),", \u90a3\u4e48\u914d\u7f6e\u5316\u4ee3\u7801\u5c06\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:'val sConfiguration = AutotrackConfiguration("Your AccountId", "Your URLScheme")\n    .setDataCollectionServerHost("Your ServerHost")\n    .setDataSourceId("Your DataSourceId")\n    .setPageRuleXml(R.xml.growingio_page_setting)\nGrowingAutotracker.startWithConfiguration(this, sConfiguration)\n'})})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var l=n(512);const s={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>A});var l=n(7294),s=n(512),r=n(2466),i=n(6550),d=n(469),a=n(1980),c=n(7392),o=n(12);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:s}}=e;return{value:t,label:n,attributes:l,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[i,a]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[c,x]=j({queryString:n,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,o.Nk)(n);return[s,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),p=(()=>{const e=c??g;return u({value:e,tabValues:r})?e:null})();(0,d.Z)((()=>{p&&a(p)}),[p]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),x(e),f(e)}),[x,f,r]),tabValues:r}}var f=n(2389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(5893);function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),o=e=>{const t=e.currentTarget,n=a.indexOf(t),s=d[n].value;s!==l&&(c(t),i(s))},x=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>a.push(e),onKeyDown:x,onClick:o,...r,className:(0,s.Z)("tabs__item",p.tabItem,r?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",p.tabList),children:[(0,m.jsx)(b,{...e,...t}),(0,m.jsx)(y,{...e,...t})]})}function A(e){const t=(0,f.Z)();return(0,m.jsx)(v,{...e,children:x(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var l=n(7294);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);