"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4195],{6624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=n(5893),r=n(1151),i=n(2991),s=n(3438);const c={slug:"/framework/HarmonyOS",title:"HarmonyOS NEXT SDK"},a=void 0,d={id:"framework/harmonyos/index",title:"HarmonyOS NEXT SDK",description:"GrowingIO HarmonyOS NEXT SDK \u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u5e76\u652f\u6301\u624b\u52a8\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 APIs \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6\u3002",source:"@site/docs/framework/harmonyos/index.md",sourceDirName:"framework/harmonyos",slug:"/framework/HarmonyOS",permalink:"/growingio-sdk-docs/docs/framework/HarmonyOS",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/framework/harmonyos/index.md",tags:[],version:"current",frontMatter:{slug:"/framework/HarmonyOS",title:"HarmonyOS NEXT SDK"},sidebar:"docSidebar",previous:{title:"React Native SDK",permalink:"/growingio-sdk-docs/docs/framework/React Native"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/framework/harmonyos/version"}},l={},m=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:2},{value:"\u83b7\u53d6 SDK \u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccount ID\u3001DataSource ID\u3001URL Scheme\u3001Host",id:"\u83b7\u53d6-sdk-\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570account-iddatasource-idurl-schemehost",level:3},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5}];function u(e){const t={admonition:"admonition",blockquote:"blockquote",h2:"h2",h3:"h3",h5:"h5",p:"p",strong:"strong",...(0,r.a)(),...e.components},{ImageLoader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"GrowingIO HarmonyOS NEXT SDK"})," \u81ea\u52a8\u91c7\u96c6\u7528\u6237\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u5e76\u652f\u6301\u624b\u52a8\u8c03\u7528\u76f8\u5e94\u57cb\u70b9 APIs \u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6\u3002"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u652f\u6301 HarmonyOS NEXT\uff0c\u57fa\u4e8e OpenHarmony API 12"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u96c6\u6210\u51c6\u5907",children:"\u96c6\u6210\u51c6\u5907"}),"\n",(0,o.jsx)(t.h3,{id:"\u83b7\u53d6-sdk-\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570account-iddatasource-idurl-schemehost",children:"\u83b7\u53d6 SDK \u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccount ID\u3001DataSource ID\u3001URL Scheme\u3001Host"}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["AccountID\uff1a\u9879\u76ee ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,o.jsx)("br",{}),"\nDataSourceID\uff1a\u6570\u636e\u6e90 ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,o.jsx)("br",{}),"\nURL Scheme\uff1a \u662f GrowingIO SDK \u4ece\u5916\u90e8\u5524\u9192\u5e94\u7528\u65f6\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6",(0,o.jsx)("br",{}),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u975e\u5e73\u53f0\u5730\u5740",(0,o.jsx)("br",{})]}),(0,o.jsx)(t.p,{children:"Account ID\u3001DataSource ID\u3001URL Scheme \u9700\u8981\u5728 GrowingIO \u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\uff0c\u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301"})]}),"\n",(0,o.jsx)(t.h5,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,o.jsx)(n,{path:"img/common/createapplication"}),"\n",(0,o.jsx)(t.h5,{id:"\u67e5\u770b",children:"\u67e5\u770b"}),"\n",(0,o.jsx)(n,{path:"img/common/showappdatasourceid"}),"\n","\n","\n",(0,o.jsx)(i.Z,{items:(0,s.jA)().items})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var o=n(512),r=n(3438),i=n(3692),s=n(3919),c=n(5999),a=n(7955);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function m(e){let{href:t,children:n}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:r,description:i}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),i&&(0,l.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const i=(0,r.MN)(t);return(0,l.jsx)("section",{className:(0,o.Z)("row",n),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);