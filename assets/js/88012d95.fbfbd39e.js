"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1919],{8464:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(5893),a=n(1151),s=n(4866),o=n(5162);const i={title:"\u5347\u7ea7\u6307\u5357",sidebar_position:5},l=void 0,c={id:"ios/Upgrade",title:"\u5347\u7ea7\u6307\u5357",description:"\u8bf7\u6ce8\u610f\uff0c\u4ec5\u5e73\u53f0\u7248\u672c\u4ece\u8001\u7248\u672c\u5347\u7ea7\u81f3 OP-4.2 \u4ee5\u4e0a\u6216\u8005 New SaaS\uff0c\u624d\u9700\u8981\u8fdb\u884c\u5347\u7ea7 SDK \u64cd\u4f5c",source:"@site/docs/ios/Upgrade.md",sourceDirName:"ios",slug:"/ios/Upgrade",permalink:"/growingio-sdk-docs/docs/ios/Upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/ios/Upgrade.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5347\u7ea7\u6307\u5357",sidebar_position:5},sidebar:"docSidebar",previous:{title:"V2Adapter\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/ios/modules/V2Adapter Module"},next:{title:"WebJS SDK",permalink:"/growingio-sdk-docs/docs/webjs"}},u={},d=[{value:"\u4ece CDP 3.x \u5347\u7ea7\u81f3 CDP 4.x",id:"\u4ece-cdp-3x-\u5347\u7ea7\u81f3-cdp-4x",level:3},{value:"\u4ece SaaS \u5347\u7ea7\u81f3 New SaaS",id:"\u4ece-saas-\u5347\u7ea7\u81f3-new-saas",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u4ec5\u5e73\u53f0\u7248\u672c\u4ece\u8001\u7248\u672c\u5347\u7ea7\u81f3 OP-4.2 \u4ee5\u4e0a\u6216\u8005 New SaaS\uff0c\u624d\u9700\u8981\u8fdb\u884c\u5347\u7ea7 SDK \u64cd\u4f5c"}),(0,t.jsx)(r.p,{children:"\u4e0b\u6587\u4e2d\u7684\u7248\u672c\u7686\u4e3a SDK \u7248\u672c"})]}),"\n",(0,t.jsx)(r.h3,{id:"\u4ece-cdp-3x-\u5347\u7ea7\u81f3-cdp-4x",children:"\u4ece CDP 3.x \u5347\u7ea7\u81f3 CDP 4.x"}),"\n",(0,t.jsx)(r.p,{children:"4.x SDK \u79fb\u9664\u4e86 cdp \u540e\u7f00\uff0c\u5728\u96c6\u6210\u6b65\u9aa4\u4e2d\uff0c\u8bf7\u53c2\u8003\u4f7f\u7528\u975e cdp \u540e\u7f00\u7684 SDK \u96c6\u6210\u6b65\u9aa4\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(o.Z,{value:"\u65e0\u57cb\u70b9\u96c6\u6210",label:"\u65e0\u57cb\u70b9\u96c6\u6210",default:!0,children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u5982\u679c\u60a8\u901a\u8fc7 Cocoapods \u96c6\u6210"}),"\uff1a"]}),(0,t.jsx)(r.p,{children:"\u5c06 Podfile \u6587\u4ef6\u4e2d\u7684\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"pod 'GrowingAnalytics-cdp/Autotracker'\n"})}),(0,t.jsx)(r.p,{children:"\u66f4\u6539\u4e3a\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"pod 'GrowingAnalytics/Autotracker', '>= 4.0.0'\n"})}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u5982\u679c\u60a8\u901a\u8fc7 SwiftPM \u96c6\u6210"}),"\uff1a"]}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u96c6\u6210\u65f6\uff0cExact Version \u9009\u62e9 4.x \u7248\u672c"}),"\n",(0,t.jsxs)(r.li,{children:["\u9009\u62e9 library \u65f6\uff0c",(0,t.jsx)(r.strong,{children:"GrowingAutotracker_cdp"})," \u6539\u4e3a\u9009\u62e9 ",(0,t.jsx)(r.strong,{children:"GrowingAutotracker"}),"\uff1b"]}),"\n",(0,t.jsxs)(r.li,{children:["\u5bfc\u5165\u65f6\uff0c",(0,t.jsx)(r.code,{children:"import GrowingAutotracker_cdp"})," \u6539\u4e3a ",(0,t.jsx)(r.code,{children:"import GrowingAutotracker"})]}),"\n"]})]}),(0,t.jsxs)(o.Z,{value:"\u57cb\u70b9\u96c6\u6210",label:"\u57cb\u70b9\u96c6\u6210",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u5982\u679c\u60a8\u901a\u8fc7 Cocoapods \u96c6\u6210"}),"\uff1a"]}),(0,t.jsx)(r.p,{children:"\u5c06 Podfile \u6587\u4ef6\u4e2d\u7684\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"pod 'GrowingAnalytics-cdp/Tracker'\n"})}),(0,t.jsx)(r.p,{children:"\u66f4\u6539\u4e3a\uff1a"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"pod 'GrowingAnalytics/Tracker', '>= 4.0.0'\n"})}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u5982\u679c\u60a8\u901a\u8fc7 SwiftPM \u96c6\u6210"}),"\uff1a"]}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u96c6\u6210\u65f6\uff0cExact Version \u9009\u62e9 4.x \u7248\u672c"}),"\n",(0,t.jsxs)(r.li,{children:["\u9009\u62e9 library \u65f6\uff0c",(0,t.jsx)(r.strong,{children:"GrowingTracker_cdp"})," \u6539\u4e3a\u9009\u62e9 ",(0,t.jsx)(r.strong,{children:"GrowingTracker"}),"\uff1b"]}),"\n",(0,t.jsxs)(r.li,{children:["\u5bfc\u5165\u65f6\uff0c",(0,t.jsx)(r.code,{children:"import GrowingTracker_cdp"})," \u6539\u4e3a ",(0,t.jsx)(r.code,{children:"import GrowingTracker"})]}),"\n"]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"\u4ece-saas-\u5347\u7ea7\u81f3-new-saas",children:"\u4ece SaaS \u5347\u7ea7\u81f3 New SaaS"}),"\n",(0,t.jsxs)(r.p,{children:["\u8bf7\u53c2\u8003 ",(0,t.jsx)(r.a,{href:"/docs/ios/modules/V2Adapter%20Module",children:"V2Adapter \u6a21\u5757"}),"\u96c6\u6210"]}),"\n",(0,t.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>o});n(7294);var t=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>k});var t=n(7294),a=n(512),s=n(2466),o=n(6550),i=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,d]=x({queryString:n,groupId:a}),[g,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(5893);function j(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(c(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=g(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(j,{...e,...r}),(0,m.jsx)(v,{...e,...r})]})}function k(e){const r=(0,b.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(7294);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);