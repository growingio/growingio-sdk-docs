"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=r,g=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>k});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),d=n(7094),p=n(2466);const m="tabList__CuJ",s="tabItem_LNqP";function u(t){var e;const{lazy:n,block:i,defaultValue:u,values:k,groupId:g,className:c}=t,N=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=k??N.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),v=(0,o.l)(f,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(e=N.find((t=>t.props.default)))?void 0:e.props.value)??N[0].props.value;if(null!==b&&!f.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:h}=(0,d.U)(),[E,y]=(0,r.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=g){const t=C[g];null!=t&&t!==E&&f.some((e=>e.value===t))&&y(t)}const D=t=>{const e=t.currentTarget,n=I.indexOf(e),a=f[n].value;a!==E&&(S(e),y(a),null!=g&&h(g,String(a)))},w=t=>{var e;let n=null;switch(t.key){case"Enter":D(t);break;case"ArrowRight":{const e=I.indexOf(t.currentTarget)+1;n=I[e]??I[0];break}case"ArrowLeft":{const e=I.indexOf(t.currentTarget)-1;n=I[e]??I[I.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},c)},f.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:t=>I.push(t),onKeyDown:w,onClick:D},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":E===e})}),n??e)}))),n?(0,r.cloneElement)(N.filter((t=>t.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==E})))))}function k(t){const e=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},9343:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},d=void 0,p={unversionedId:"android/Configuration",id:"android/Configuration",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"--------------",source:"@site/docs/android/Configuration.md",sourceDirName:"android",slug:"/android/Configuration",permalink:"/growingio-sdk-docs/docs/android/Configuration",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"gioSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs/docs/android/Introduce"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs/docs/android/api"}},m={},s=[{value:"\u914d\u7f6e\u8868\u683c",id:"\u914d\u7f6e\u8868\u683c",level:2},{value:"1. SDK\u5fc5\u9700\u53c2\u6570",id:"1-sdk\u5fc5\u9700\u53c2\u6570",level:3},{value:"2. <strong>setChannel</strong>",id:"2-setchannel",level:3},{value:"3. <strong>setDebugEnabled</strong>",id:"3-setdebugenabled",level:3},{value:"4. <strong>setCellularDataLimit</strong>",id:"4-setcellulardatalimit",level:3},{value:"5. <strong>setDataUploadInterval</strong>",id:"5-setdatauploadinterval",level:3},{value:"6. <strong>setSessionInterval</strong>",id:"6-setsessioninterval",level:3},{value:"7. <strong>setDataCollectionEnabled</strong>",id:"7-setdatacollectionenabled",level:3},{value:"8. <strong>setExcludeEvent</strong>",id:"8-setexcludeevent",level:3},{value:"9. <strong>setIgnoreField</strong>",id:"9-setignorefield",level:3},{value:"10. <strong>setEventFilterInterceptor</strong>",id:"10-seteventfilterinterceptor",level:3},{value:"11. <strong>setIdMappingEnabled</strong>",id:"11-setidmappingenabled",level:3},{value:"12. <strong>setImpressionScale</strong>",id:"12-setimpressionscale",level:3},{value:"13 <strong>addPreloadComponent</strong>",id:"13-addpreloadcomponent",level:3}],u={toc:s};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),",\u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8868\u683c"},"\u914d\u7f6e\u8868\u683c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Config"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5176\u5b83"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76eeID\uff0c\u6bcf\u4e2a\u5e94\u7528\u5bf9\u5e94\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"urlScheme")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684URLScheme\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataSourceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684DataSourceId\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataCollectionServerHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u90e8\u7f72\u540e\u7684 ServerHost"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setChannel")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDebugEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370SDK log\uff0c\u629b\u51fa\u9519\u8bef\u5f02\u5e38\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u8bf7\u5173\u95ed"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setCellularDataLimit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataUploadInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setSessionInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataCollectionEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setEventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultEventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66ff\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"td"},"setExcludeEvent")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"setIgnoreField"),"\uff0c\u7528\u4e8e\u4e8b\u4ef6\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.4.3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("font",{color:"gray"},"@Deprecated")," ",(0,r.kt)("br",null),"  ",(0,r.kt)("inlineCode",{parentName:"td"},"setExcludeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"<= 3.4.2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("font",{color:"gray"},"@Deprecated")," ",(0,r.kt)("br",null),"     ",(0,r.kt)("inlineCode",{parentName:"td"},"setIgnoreField")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"<= 3.4.2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setIdMappingEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setImpressionScale")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 ","[0-1]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u57cb\u70b9\u72ec\u6709"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setRequireAppProcessesEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDK \u662f\u5426\u80fd\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0bID"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.3.4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addPreloadComponent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LibraryGioModule")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u518c\u81ea\u5b9a\u4e49/\u9884\u5b9a\u4e49\u6a21\u5757(\u5982\u52a0\u5bc6\u6a21\u5757\u3001OAID\u6a21\u5757)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.3.4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addPreloadComponent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LibraryGioModule"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Configurable")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u518c\u81ea\u5b9a\u4e49/\u9884\u5b9a\u4e49\u6a21\u5757\u53ca\u5176\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.4.3"))))),(0,r.kt)("h3",{id:"1-sdk\u5fc5\u9700\u53c2\u6570"},"1. SDK\u5fc5\u9700\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"accountId\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"urlScheme\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"setDataSourceId\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"setDataCollectionServerHost"),"\n\u8fd9\u56db\u4e2a\u53c2\u6570\u4e3a CDP \u7528\u6237\u5fc5\u987b\u8981\u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u82e5\u4e0d\u6e05\u695a\u5177\u4f53\u6570\u503c\u8bf7\u8be2\u95ee\u76f8\u5173\u670d\u52a1\u7aef\u5bf9\u63a5\u7684\u5f00\u53d1\u540c\u4e8b\u3002"),(0,r.kt)("h3",{id:"2-setchannel"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"setChannel")),(0,r.kt)("p",null,"\u5bf9\u5e94\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053\u5b57\u6bb5\uff0c\u82e5\u8bbe\u7f6e\u4e86\u503c\u5219\u4f1a\u5728\u6bcf\u4e2a\u4e8b\u4ef6\u4e0a\u62a5\u4e2d\u542b\u6709\u6e20\u9053\u4fe1\u606f\u3002\n\u6bd4\u5982\u5728\u521d\u59cb\u5316\u4e2d\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},'.setChannel("Docs")'),",\u5219\u4f1a\u5728\u4e0a\u62a5\u4fe1\u606f\u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"appChannel")," \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "platform": "Android",\n    \u2551   "appChannel": "Docs",\n    \u2551   "screenHeight": 1920,\n    \u2551   "screenWidth": 1080,\n    \u2551   ...\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')),(0,r.kt)("h3",{id:"3-setdebugenabled"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"setDebugEnabled")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5f00\u542f\u540e\u4f1a\u8f93\u51fa SDK Log \u65e5\u5fd7\u3002\n\u5efa\u8bae\u505a\u6cd5\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(BuildConfig.DEBUG)")," \u8fd9\u6837\u65e2\u80fd\u4fdd\u8bc1Debug\u65f6\u80fd\u591f\u6253\u5370\u65e5\u5fd7\uff0c\u6b63\u5f0f\u53d1\u5e03\u65f6\u4e5f\u80fd\u5173\u95ed\u65e5\u5fd7\uff1b"),(0,r.kt)("h3",{id:"4-setcellulardatalimit"},"4. ",(0,r.kt)("strong",{parentName:"h3"},"setCellularDataLimit")),(0,r.kt)("p",null,"\u4e3a\u6bcf\u65e5\u57284G\u73af\u5883\u4e0b\u7684\u6d41\u91cf\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a10M\u3002WIFI\u73af\u5883\u4e0b\u5219\u4e0d\u8ba1\u6d41\u91cf\u3002"),(0,r.kt)("h3",{id:"5-setdatauploadinterval"},"5. ",(0,r.kt)("strong",{parentName:"h3"},"setDataUploadInterval")),(0,r.kt)("p",null,"\u4e0a\u62a5\u95f4\u9694\u3002GrowingIO SDK \u4f1a\u5148\u5c06\u4e8b\u4ef6\u5b58\u5165\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f415\u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u592750\u6761\u4e8b\u4ef6\uff09\u3002"),(0,r.kt)("h3",{id:"6-setsessioninterval"},"6. ",(0,r.kt)("strong",{parentName:"h3"},"setSessionInterval")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\u3002\u6307\u5f53\u524d\u4f1a\u8bdd\u5728\u5e94\u7528\u8fdb\u5165\u540e\u53f0\u540e\u7684\u6700\u5927\u7559\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a30\u79d2\u3002\u53e6\u5916\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f1a\u8bdd\uff0c\u5982\u8bbe\u7f6e\u7528\u6237ID\u7b49\u6838\u5fc3\u4fe1\u606f\uff0c\u91cd\u65b0\u6253\u5f00\u6570\u636e\u6536\u96c6\u7b49\u3002"),(0,r.kt)("h3",{id:"7-setdatacollectionenabled"},"7. ",(0,r.kt)("strong",{parentName:"h3"},"setDataCollectionEnabled")),(0,r.kt)("p",null,"\u6570\u636e\u6536\u96c6\u3002\u5f53\u6570\u636e\u6536\u96c6\u5173\u95ed\u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u518d\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4e8b\u4ef6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"8-setexcludeevent"},"8. ",(0,r.kt)("strong",{parentName:"h3"},"setExcludeEvent")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u8fc7\u6ee4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e8b\u4ef6\u4e0d\u4f1a\u8fdb\u884c\u8fc7\u6ee4\u3002\u4f46\u82e5\u4e0d\u60f3\u91c7\u96c6\u67d0\u4e9b\u4e8b\u4ef6\u53ef\u4ee5\u5728\u6b64\u8bbe\u7f6e\u3002\u4e8b\u4ef6\u7c7b\u578b\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/EventExcludeFilter.java"},"FilterEventParams")),(0,r.kt)(l.Z,{className:"unique-tabs",groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6\uff0c\u8c03\u7528\u65b9\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u4e8b\u4ef6\nGrowingAutotracker.startWithConfiguration(this,\n    new CdpAutotrackConfiguration("accountId", "urlScheme")\n        ...\n       .setExcludeEvent(EventExcludeFilter.EVENT_MASK_TRIGGER))\n);\n'))),(0,r.kt)(i.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6\uff0c\u8c03\u7528\u65b9\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u4e8b\u4ef6\nGrowingTracker.startWithConfiguration(this,\n    new CdpTrackConfiguration("accountId", "urlScheme")\n        ...\n       .setExcludeEvent(EventExcludeFilter.EVENT_MASK_TRIGGER))\n);\n')))),(0,r.kt)("p",null,"\u82e5\u60f3\u53d6\u6d88\u8fc7\u6ee4\uff0c\u53ef\u4ee5\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u82e5\u60f3\u53d6\u6d88\u8fc7\u6ee4\uff0c\u53ef\u4ee5\u8c03\u7528\nConfigurationProvider.core().setExcludeEvent(EventExcludeFilter.NONE)\n")),(0,r.kt)("h3",{id:"9-setignorefield"},"9. ",(0,r.kt)("strong",{parentName:"h3"},"setIgnoreField")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4\u3002\u4e8b\u4ef6\u5c5e\u6027\u6307\u4e0a\u62a5\u4e8b\u4ef6\u4e2d\u643a\u5e26\u7684\u5c5e\u6027\u53c2\u6570\u3002\u53ef\u8fc7\u6ee4\u4e8b\u4ef6\u5c5e\u6027\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/FieldIgnoreFilter.java"},"FieldIgnoreFilter"),"\n\u521d\u59cb\u5316\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u5e94\u7684\u4e8b\u4ef6\u8fc7\u6ee4"),(0,r.kt)(l.Z,{className:"unique-tabs",groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6\uff0c\u8c03\u7528\u65b9\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u5b57\u6bb5\nGrowingAutotracker.startWithConfiguration(this,\n    new CdpAutotrackConfiguration("accountId", "urlScheme")\n        ...\n       .setIgnoreField(FieldIgnoreFilter.FIELD_IGNORE_ALL)\n);\n'))),(0,r.kt)(i.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316\u65e0\u57cb\u70b9SDK\u65f6\uff0c\u8c03\u7528\u65b9\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u5b57\u6bb5\nGrowingTracker.startWithConfiguration(this,\n    new CdpTrackConfiguration("accountId", "urlScheme")\n        ...\n       .setIgnoreField(FieldIgnoreFilter.FIELD_IGNORE_ALL)\n);\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u82e5\u60f3\u53d6\u6d88\u8fc7\u6ee4\uff0c\u53ef\u4ee5\u8c03\u7528\nConfigurationProvider.core().setIgnoreField(FieldIgnoreFilter.NONE)\n")),(0,r.kt)("h3",{id:"10-seteventfilterinterceptor"},"10. ",(0,r.kt)("strong",{parentName:"h3"},"setEventFilterInterceptor")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u7528\u4e8e\u53d6\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"p"},"setExcludeEvent")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"setIgnoreField")," \u65b9\u6cd5\u3002\n\u8be5\u63a5\u53e3\u9700\u8981\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u62e6\u622a\u5668\u7528\u4e8e\u4e8b\u4ef6\u62e6\u622a\u7684\u81ea\u5b9a\u4e49\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u58f0\u660e\u4e00\u4e2a\u4e8b\u4ef6\u8fc7\u6ee4\u5668\uff0c\u7ee7\u627f `DefaultEventFilterInterceptor` \u6216 `EventFilterInterceptor`\nclass CustomEventFilterInterceptor implements EventFilterInterceptor {\n\n    // \u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u6765\u8fc7\u6ee4\u4e8b\u4ef6\uff0c\u8fd4\u56de false \u8868\u793a\u62e6\u622a\uff0c\u8fd4\u56de true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u62e6\u622a\u4e8b\u4ef6\u7c7b\u578b\u4e3a \u201cPAGE\u201d \u7684\u4e8b\u4ef6\n    @Override\n    public boolean filterEventType(String eventType) {\n        if ("PAGE".equals(eventType)) return false;\n        return true;\n    }\n\n    // \u8fc7\u6ee4\u4e8b\u4ef6\u57fa\u7840\u5c5e\u6027\uff0c\u5c5e\u6027\u8bbe\u7f6e false \u8868\u793a\u62e6\u622a\uff0c\u8bbe\u7f6e true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u4e8b\u4ef6\u4e2d\u4e0d\u518d\u5305\u542b\u5c4f\u5e55\u5bbd\u9ad8\u7684\u5c5e\u6027\u3002\n    @Override\n    public Map<String, Boolean> filterEventField(String type, Map<String, Boolean> fieldArea) {\n        fieldArea.put(BaseField.SCREEN_HEIGHT, false);\n        fieldArea.put(BaseField.SCREEN_WIDTH, false);\n        return fieldArea;\n    }\n\n    // \u9488\u5bf9\u65e0\u57cb\u70b9\u7684\u9875\u9762\u4e8b\u4ef6\u7684\u8def\u5f84\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u9875\u9762\u4e8b\u4ef6\u4e2d\u7684\u8def\u5f84\u5305\u542b \u201cTestActivity\u201d \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventPath(String path) {\n        return !path.contains("TestActivity");\n    }\n\n    // \u9488\u5bf9\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u540d\u79f0\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u4e2d\u540d\u79f0\u4e3a "test" \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventName(String eventName) {\n        return !"test".equals(eventName);\n    }\n\n    // \u4e8b\u4ef6\u5206\u7ec4\u529f\u80fd\u8fc7\u6ee4\uff08\u5c1a\u672a\u4e0a\u7ebf\uff09\n    @Override\n    public boolean filterEventGroup(String group){\n      return true;\n    }\n}\n')),(0,r.kt)("p",null,"\u4e4b\u540e\u518d\u8c03\u7528\u8be5\u63a5\u53e3\u8bbe\u7f6e\u62e6\u622a\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'GrowingTracker.startWithConfiguration(this,\n    new CdpTrackConfiguration("accountId", "urlScheme")\n        ...\n       .setEventFilterInterceptor(new CustomEventFilterInterceptor())\n);\n')),(0,r.kt)("h3",{id:"11-setidmappingenabled"},"11. ",(0,r.kt)("strong",{parentName:"h3"},"setIdMappingEnabled")),(0,r.kt)("p",null,"\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u9ed8\u8ba4\u4e0d\u652f\u6301\u3002\n\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u4e0e API \u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId(String userId, String userKey)"),"\u5bf9\u5e94, \u5f00\u542f\u65f6, userKey\u4f1a\u5728\u6bcf\u6b21\u4e0a\u62a5\u6570\u636e\u65f6\u643a\u5e26, \u5173\u95ed\u65f6, \u63a5\u53e3\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId(String userId)"),"\u4f5c\u7528\u76f8\u540c"),(0,r.kt)("h3",{id:"12-setimpressionscale"},"12. ",(0,r.kt)("strong",{parentName:"h3"},"setImpressionScale")),(0,r.kt)("p",null,"\u66dd\u5149\u6bd4\u4f8b\u3002\u4e0e\u66dd\u5149\u4e8b\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\u66dd\u5149\u6bd4\u4f8b\u662f\u6307\u5f53\u4e00\u4e2a\u66dd\u5149\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u65f6\u53ef\u89c1\u7684\u90e8\u5206\u5360\u636e\u81ea\u8eab\u5c3a\u5bf8\u7684\u6bd4\u4f8b\uff0c\u6bd4\u5982\u8bf4\u82e5\u8bbe\u4e3a 0 \u5219\u8868\u793a\u53ea\u8981\u51fa\u73b0\u5373\u4ea7\u751f\u66dd\u5149\u4e8b\u4ef6\uff0c\u82e5\u8bbe\u4e3a1\u5219\u8868\u793a\u8981\u6574\u4e2aView\u90fd\u51fa\u73b0\u5728\u5c4f\u5e55\u4e2d\u3002"),(0,r.kt)("h3",{id:"13-addpreloadcomponent"},"13 ",(0,r.kt)("strong",{parentName:"h3"},"addPreloadComponent")),(0,r.kt)("p",null,"\u6ce8\u518c\u529f\u80fd\u6a21\u5757\uff0c\u4e3a Growingio SDK \u6dfb\u52a0\u66f4\u591a\u7684\u989d\u5916\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u53ef\u4ee5\u6ce8\u518c\u5bf9\u5e94\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n        new CdpAutotrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>, <\u6a21\u5757\u914d\u7f6e>)\n        // \u6216\u8005\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>)\n\n);\n')),(0,r.kt)("p",null,"\u6a21\u5757\u5217\u8868\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android/modules"},"\u529f\u80fd\u6a21\u5757\u4e00\u89c8")))}k.isMDXComponent=!0}}]);