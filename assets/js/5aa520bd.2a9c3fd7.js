"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1260],{8681:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(5893),a=n(1151),o=n(4866),s=n(5162);const l={sidebar_position:9,title:"V2Adapter\u6a21\u5757"},i=void 0,d={id:"ios/modules/V2Adapter Module",title:"V2Adapter\u6a21\u5757",description:"V2Adapter \u652f\u6301\u4ece SaaS v2.x/CDP v1.x SDK \u65e0\u7f1d\u5347\u7ea7\u5230\u5f53\u524d SDK\uff0c\u517c\u5bb9 2.x APIs \u8c03\u7528\uff1b\u53ea\u9700\u8981\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u548c\u96c6\u6210 V2Adapter \u5373\u53ef\u6309\u7167\u6700\u65b0\u6d4b\u91cf\u534f\u8bae\u53d1\u9001\u6570\u636e",source:"@site/docs/ios/modules/V2Adapter Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/V2Adapter Module",permalink:"/growingio-sdk-docs/docs/ios/modules/V2Adapter Module",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/modules/V2Adapter Module.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"V2Adapter\u6a21\u5757"},sidebar:"docSidebar",previous:{title:"\u6570\u636e\u8f6c\u53d1\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/OthersAdapter Module"},next:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/growingio-sdk-docs/docs/ios/Upgrade"}},c={},u=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u8fc1\u79fb\u672c\u5730\u6570\u636e",id:"\u8fc1\u79fb\u672c\u5730\u6570\u636e",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"V2Adapter \u652f\u6301\u4ece SaaS v2.x/CDP v1.x SDK \u65e0\u7f1d\u5347\u7ea7\u5230\u5f53\u524d SDK\uff0c\u517c\u5bb9 2.x APIs \u8c03\u7528\uff1b\u53ea\u9700\u8981\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u548c\u96c6\u6210 V2Adapter \u5373\u53ef\u6309\u7167\u6700\u65b0\u6d4b\u91cf\u534f\u8bae\u53d1\u9001\u6570\u636e"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u652f\u6301 SaaS (v2.x) to New SaaS\uff0cCDP (v1.x) to OP (v3.x v4.x) (\u7686\u6307 SDK \u7248\u672c)"}),"\n",(0,t.jsx)(r.li,{children:"\u4ec5\u652f\u6301 Cocoapods \u96c6\u6210"}),"\n",(0,t.jsx)(r.li,{children:"\u4e0d\u517c\u5bb9\u540c\u65f6\u96c6\u6210\u4e86\u8fd0\u8425\u5e73\u53f0 SDK \u65e0\u7f1d\u5347\u7ea7"}),"\n",(0,t.jsx)(r.li,{children:"\u90e8\u5206\u63a5\u53e3\u5f52\u7c7b\u4e3a Deprecated\uff0c\u5728 Adapter \u4e2d\u4e3a\u7a7a\u5b9e\u73b0\uff0c\u6309\u7167\u65e5\u5fd7\u63d0\u793a\u4f7f\u7528\u65b0\u63a5\u53e3\u6216\u4e0d\u5904\u7406"}),"\n",(0,t.jsx)(r.li,{children:"\u90e8\u5206\u63a5\u53e3\u5f52\u7c7b\u4e3a Unavailable\uff0c\u8c03\u7528\u5c06\u62a5\u9519\uff0c\u8bf7\u53c2\u8003\u6570\u636e\u91c7\u96c6API\u6587\u6863\u4f7f\u7528\u65b0\u63a5\u53e3\u6216\u5220\u9664\u8c03\u7528"}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(s.Z,{value:"cocoapods",label:"\u65e0\u57cb\u70b9\u96c6\u6210",default:!0,children:[(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\u96c6\u6210\u5f53\u524d\u7248\u672c",(0,t.jsx)(r.a,{href:"/docs/ios/Introduce#%E6%97%A0%E5%9F%8B%E7%82%B9-sdk-%E9%9B%86%E6%88%90",children:"\u65e0\u57cb\u70b9 SDK"})]}),"\n",(0,t.jsx)(r.li,{children:"\u79fb\u9664\u8001\u7248\u672c SaaS/CDP SDK \u96c6\u6210\uff0c\u5982\u4f7f\u7528 Cocoapods \u96c6\u6210\uff0c\u5220\u9664 Podfile \u4e2d\u5bf9\u5e94\u884c\uff1b\u5982\u624b\u52a8\u96c6\u6210\uff0c\u79fb\u9664\u5bf9\u5e94 framework \u6587\u4ef6"}),"\n",(0,t.jsxs)(r.li,{children:["\u79fb\u9664\u8001\u7248\u672c SaaS/CDP SDK \u521d\u59cb\u5316\u4ee3\u7801\uff0c\u5982 ",(0,t.jsx)(r.code,{children:"[Growing startWithAccountId:...]"}),"\uff0c\u5e76\u521d\u59cb\u5316",(0,t.jsx)(r.a,{href:"/docs/ios/Introduce#sdk-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%85%8D%E7%BD%AE",children:"\u5f53\u524d SDK"})]}),"\n",(0,t.jsx)(r.li,{children:"\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0"}),"\n"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"pod 'GrowingAnalytics/V2Adapter'\n"})}),(0,t.jsxs)(r.p,{children:["\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,t.jsx)(r.code,{children:"pod install"})," \u6216 ",(0,t.jsx)(r.code,{children:"pod update"})]})]}),(0,t.jsxs)(s.Z,{value:"swiftPM",label:"\u57cb\u70b9\u96c6\u6210",children:[(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\u96c6\u6210\u5f53\u524d\u7248\u672c",(0,t.jsx)(r.a,{href:"/docs/ios/Introduce#%E5%9F%8B%E7%82%B9-sdk-%E9%9B%86%E6%88%90",children:"\u57cb\u70b9 SDK"})]}),"\n",(0,t.jsx)(r.li,{children:"\u79fb\u9664\u8001\u7248\u672c SaaS/CDP SDK \u96c6\u6210\uff0c\u5982\u4f7f\u7528 Cocoapods \u96c6\u6210\uff0c\u5220\u9664 Podfile \u4e2d\u5bf9\u5e94\u884c\uff1b\u5982\u624b\u52a8\u96c6\u6210\uff0c\u79fb\u9664\u5bf9\u5e94 framework \u6587\u4ef6"}),"\n",(0,t.jsxs)(r.li,{children:["\u79fb\u9664\u8001\u7248\u672c SaaS/CDP SDK \u521d\u59cb\u5316\u4ee3\u7801\uff0c\u5982 ",(0,t.jsx)(r.code,{children:"[Growing startWithAccountId:...]"}),"\uff0c\u5e76\u521d\u59cb\u5316",(0,t.jsx)(r.a,{href:"/docs/ios/Introduce#sdk-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%85%8D%E7%BD%AE-1",children:"\u5f53\u524d SDK"})]}),"\n",(0,t.jsx)(r.li,{children:"\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0"}),"\n"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"pod 'GrowingAnalytics/V2AdapterTrackOnly'\n"})}),(0,t.jsxs)(r.p,{children:["\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,t.jsx)(r.code,{children:"pod install"})," \u6216 ",(0,t.jsx)(r.code,{children:"pod update"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"\u8fc1\u79fb\u672c\u5730\u6570\u636e",children:"\u8fc1\u79fb\u672c\u5730\u6570\u636e"}),"\n",(0,t.jsx)(r.p,{children:"\u5982\u9700\u4f7f\u7528\u8001\u7248\u672c SDK \u7684\u7528\u6237\u6570\u636e (userId\u3001deviceId)\uff0c\u8bf7\u5728\u5f53\u524d SDK \u521d\u59cb\u5316\u4e4b\u524d\uff0c\u8fdb\u884c\u8fc1\u79fb"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-objectivec",children:'#import "Growing.h"\n\n[GrowingV2Adapter upgrade];\n\n// \u521d\u59cb\u5316 SDK\n...\n'})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>s});n(7294);var t=n(512);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:r,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>w});var t=n(7294),a=n(512),o=n(2466),s=n(6550),l=n(469),i=n(1980),d=n(7392),c=n(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[d,u]=f({queryString:n,groupId:a}),[m,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,c.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function g(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),a=l[n].value;a!==t&&(d(r),s(a))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:u,onClick:c,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function S(e){const r=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...e,...r}),(0,v.jsx)(j,{...e,...r})]})}function w(e){const r=(0,x.Z)();return(0,v.jsx)(S,{...e,children:u(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var t=n(7294);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);