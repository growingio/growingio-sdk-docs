"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5595],{3585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(5893),o=n(1151),a=n(4866),i=n(5162);const l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},s=void 0,u={id:"giokit/harmonyos/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u96c6\u6210 GioKit",source:"@site/docs/giokit/harmonyos/integrate.md",sourceDirName:"giokit/harmonyos",slug:"/giokit/harmonyos/integrate",permalink:"/growingio-sdk-docs/docs/giokit/harmonyos/integrate",draft:!1,unlisted:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/giokit/harmonyos/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"docSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs/docs/giokit/harmonyos/version"}},c={},d=[{value:"\u96c6\u6210 GioKit",id:"\u96c6\u6210-giokit",level:2},{value:"\u914d\u7f6e\u6807\u51c6\u5316 OHMUrl",id:"\u914d\u7f6e\u6807\u51c6\u5316-ohmurl",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u96c6\u6210-giokit",children:"\u96c6\u6210 GioKit"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"remote",label:"\u901a\u8fc7 ohpm \u4e2d\u5fc3\u4ed3\u96c6\u6210",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"ohpm install @growingio/tools\n"})})}),(0,r.jsxs)(i.Z,{value:"local",label:"\u901a\u8fc7\u672c\u5730 har \u96c6\u6210",children:[(0,r.jsx)(t.p,{children:"\u9996\u5148\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301\uff0c\u83b7\u53d6\u6700\u65b0 SDK har \u9759\u6001\u5171\u4eab\u5305\u4e0b\u8f7d\u5730\u5740\u5e76\u4e0b\u8f7d\uff0c\u518d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"ohpm install <\u60a8\u6240\u4e0b\u8f7d\u7684 har \u6587\u4ef6\u8def\u5f84>\n"})})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u914d\u7f6e\u6807\u51c6\u5316-ohmurl",children:"\u914d\u7f6e\u6807\u51c6\u5316 OHMUrl"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u5de5\u7a0b\u7ea7 build-profile.json5 \u4e2d\u914d\u7f6e useNormalizedOHMUrl \u4e3a true"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'{\n  "app": {\n    "products": [\n      {\n        "buildOption": {\n          "strictMode": {\n            "useNormalizedOHMUrl": true\n          }\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u521d\u59cb\u5316 GrowingIO HarmonyOS NEXT SDK \u65f6\u6dfb\u52a0 GrowingToolsKit\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"let config = new GrowingConfig().NewSaaS(\n  'Your AccountId',\n  'Your DataSourceId',\n  'Your UrlScheme',\n  'Your DataCollectionServerHost<Optional>'\n)\nconfig.plugins = [new GrowingToolsKit()]\nGrowingAnalytics.start(this.context, config)\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"\u8bf7\u4ec5\u5728 DEBUG \u73af\u5883\u4e0b\u4f7f\u7528 GrowingToolsKit\uff0cRELEASE \u73af\u5883\u4e0b GrowingToolsKit \u5c06\u4e0d\u4f1a\u663e\u793a"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(512);const o={tabItem:"tabItem_Ymn6"};var a=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),o=n(512),a=n(2466),i=n(6550),l=n(469),s=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:o}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),b=(()=>{const e=u??g;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),o=l[n].value;o!==r&&(u(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(7294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);