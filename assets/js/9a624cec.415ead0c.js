"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),d=n(7094),u=n(2466);const s="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:g,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,d.U)(),[y,N]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=g){const e=O[g];null!=e&&e!==y&&b.some((t=>t.value===e))&&N(e)}const A=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==y&&(I(t),N(a),null!=g&&C(g,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:D,onClick:A},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},1165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={sidebar_position:5,title:"OAID \u6a21\u5757"},d=void 0,u={unversionedId:"android/modules/oaid module",id:"android/modules/oaid module",title:"OAID \u6a21\u5757",description:"\u5728 Android 10 \u7248\u672c\u4e2d\uff0c\u975e\u7cfb\u7edf\u5e94\u7528\u65e0\u6cd5\u83b7\u53d6 IMEI\u3002\u52a0\u4e0a\u4ee5\u524d Android \u7248\u672c\u5df2\u7ecf\u5bf9 MAC \u5730\u5740\uff0c AndroidID \u7684\u83b7\u53d6\u505a\u4e86\u9650\u5236\uff0c \u5728 Android10 \u4e2d\u7f3a\u5c11\u4e00\u79cd\u552f\u4e00\u6807\u8bb0\u8bbe\u5907\u7684\u6807\u8bc6\u7b26\u3002 \u5728\u6d77\u5916\uff0c Google \u63a8\u8350\u4f7f\u7528 Google \u7684\u5e7f\u544a ID \u4f5c\u4e3a\u5e7f\u544a\u7684\u552f\u4e00\u8bc6\u522b\u7b26\uff0c\u5728\u56fd\u5185\u79fb\u52a8\u5b89\u5168\u8054\u76dfMSA \u8054\u5408\u5404\u5927\u624b\u673a\u5236\u9020\u5546\u63a8\u51fa\u4e86 OAID \u7684\u6982\u5ff5\uff0c \u4f5c\u4e3a\u552f\u4e00\u5e7f\u544a\u6807\u8bc6\u7b26\u3002OAID \u7684\u51c6\u786e\u6027\u548c\u8986\u76d6\u7387\u5747\u6ee1\u8db3\u5e7f\u544a\u573a\u666f\u7684\u4f7f\u7528\u9700\u6c42\u3002",source:"@site/docs/android/modules/oaid module.md",sourceDirName:"android/modules",slug:"/android/modules/oaid module",permalink:"/growingio-sdk-docs/docs/android/modules/oaid module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/modules/oaid module.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"OAID \u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"Protobuf \u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/protobuf module"},next:{title:"\u5708\u9009\u6a21\u5757",permalink:"/growingio-sdk-docs/docs/android/modules/circler module"}},s={},c=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 Android 10 \u7248\u672c\u4e2d\uff0c\u975e\u7cfb\u7edf\u5e94\u7528\u65e0\u6cd5\u83b7\u53d6 IMEI\u3002\u52a0\u4e0a\u4ee5\u524d Android \u7248\u672c\u5df2\u7ecf\u5bf9 MAC \u5730\u5740\uff0c AndroidID \u7684\u83b7\u53d6\u505a\u4e86\u9650\u5236\uff0c \u5728 Android10 \u4e2d\u7f3a\u5c11\u4e00\u79cd\u552f\u4e00\u6807\u8bb0\u8bbe\u5907\u7684\u6807\u8bc6\u7b26\u3002 \u5728\u6d77\u5916\uff0c Google \u63a8\u8350\u4f7f\u7528 Google \u7684\u5e7f\u544a ID \u4f5c\u4e3a\u5e7f\u544a\u7684\u552f\u4e00\u8bc6\u522b\u7b26\uff0c\u5728\u56fd\u5185",(0,r.kt)("a",{parentName:"p",href:"http://www.msa-alliance.cn/col.jsp?id=120"},"\u79fb\u52a8\u5b89\u5168\u8054\u76dfMSA")," \u8054\u5408\u5404\u5927\u624b\u673a\u5236\u9020\u5546\u63a8\u51fa\u4e86 OAID \u7684\u6982\u5ff5\uff0c \u4f5c\u4e3a\u552f\u4e00\u5e7f\u544a\u6807\u8bc6\u7b26\u3002OAID \u7684\u51c6\u786e\u6027\u548c\u8986\u76d6\u7387\u5747\u6ee1\u8db3\u5e7f\u544a\u573a\u666f\u7684\u4f7f\u7528\u9700\u6c42\u3002"),(0,r.kt)("p",null,"GrowingIO SDK \u96c6\u6210 OAID \u6a21\u5757\u540e\u5c06\u4f1a\u5728\u8bbf\u95ee\u4e8b\u4ef6\u4e2d\u643a\u5e26 oaid \u5b57\u6bb5\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7528\u4e8e\u5e7f\u544a\u7684\u6e20\u9053\u8ffd\u8e2a\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9879\u76ee\u9700\u8981\u6dfb\u52a0",(0,r.kt)("a",{parentName:"p",href:"http://www.msa-alliance.cn/col.jsp?id=120"},"\u56fd\u5185\u79fb\u52a8\u5b89\u5168\u8054\u76dfMSA"),"\u4e0b\u7684sdk\u3002\n\u5728 OAID SDK 1.0.26\u53ca\u5176\u540e\u7eed\u7248\u672c\uff0c\u83b7\u5f97OAID\u503c\u9700\u8981\u4f20\u5165\u4ece MSA \u673a\u6784\u83b7\u5f97\u7684\u8bc1\u4e66\uff1b"),(0,r.kt)("p",{parentName:"admonition"},"3.3.0 ~ 3.3.3\u7248\u672c\u65e0\u6cd5\u4f20\u5165\u5ba2\u6237\u81ea\u5df1\u83b7\u5f97\u7684OAID\u503c\u6216OAID\u8bc1\u4e66\uff0c\u82e5\u9700\u8981\u8fd9\u4e9b\u529f\u80fd\uff0c\u8bf7\u4f7f\u7528\u7248\u672c>=3.3.4 SDK\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"oaid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"OaidHelper")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},">=3.3.4")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,r.kt)(o.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:oaid:3.4.7'\n}\n"))),(0,r.kt)(i.Z,{value:"bom",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.4.7')\n\n  implementation 'com.growingio.android:oaid'\n}\n")))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"OAID \u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u8bbe\u7f6eOAID\u7684\u6765\u6e90\uff0c\u9ed8\u8ba4\u4f18\u5148\u7ea7\u4e3a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u63d0\u4f9b\u4ece\u79fb\u52a8\u5b89\u5168\u8054\u76dfSDK\u4e2d\u83b7\u53d6\u5230\u7684OAID\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"setProvideOaid")," \u6216\u8005\u5f02\u6b65\u56de\u8c03 ",(0,r.kt)("inlineCode",{parentName:"li"},"setProvideOaidCallback"),"; (\u63a8\u8350)"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u8bc1\u4e66\u5185\u5bb9\uff0cSDK\u4f1a\u901a\u8fc7\u63d0\u4f9b\u7684\u8bc1\u4e66\u53bb\u8bf7\u6c42OAID\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"setProvideCert"),";"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u8bc1\u4e66\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"asset")," \u7684\u5730\u5740 ",(0,r.kt)("inlineCode",{parentName:"li"},"setProvideCertAsset"),";"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5f02\u6b65\u56de\u8c03\u63d0\u4f9b\u8bc1\u4e66\u5185\u5bb9 ",(0,r.kt)("inlineCode",{parentName:"li"},"setProvideCertCallback"),";"),(0,r.kt)("li",{parentName:"ol"},'\u82e5\u4ee5\u4e0a\u7b56\u7565\u90fd\u672a\u901a\u8fc7\uff0c\u5219\u4f1a\u9ed8\u8ba4\u4eceasset\u4e0b\u83b7\u53d6 context.getPackageName() + ".cert.pem" \u540d\u79f0\u7684\u8bc1\u4e66\u3002')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bf7\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u4f20\u5165oaid\uff0c\u82e5\u591a\u5904\u8bbe\u7f6e\uff0c\u5219\u6309\u7167\u4ee5\u4e0b\u4f18\u5148\u7ea7\u83b7\u53d6\n// provideOaid -> OnProvideOaidCallback\n// \u8bf7\u63d0\u4f9boaid\u9700\u8981\u7684\u8bc1\u4e66\uff0c\u9ed8\u8ba4\u5c06\u4eceasset\u4e0b\u83b7\u53d6 context.getPackageName() + ".cert.pem" \u540d\u79f0\u7684\u8bc1\u4e66\u3002\u82e5\u591a\u5904\u8bbe\u7f6e\uff0c\u5219\u6309\u7167\u4ee5\u4e0b\u4f18\u5148\u7ea7\u83b7\u53d6\n// provideCert -> provideCertAsset -> OnProvideCertCallback -> \u9ed8\u8ba4\nOaidConfig oaidConfig = new OaidConfig();\noaidConfig.setProvideOaid("<YOUR OAID>");\noaidConfig.setProvideOaidCallback(context -> {\n    //require oaid logic,it\'s will run in sub thread.\n    return "<YOUR OAID>";\n});\noaidConfig.setProvideCert("<YOUR CERT VALUE>");\noaidConfig.setProvideCertAsset("<THE PATH OF YOUR CERT IN ASSET>");\noaidConfig.setProvideCertCallback(new OaidConfig.OnProvideCertCallback() {\n    @Override\n    public String provideCertJob(Context context) {\n        //require cert logic,it\'s will run in sub thread.\n        return "<YOUR CERT VALUE>";\n    }\n});\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)(o.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"autotrack",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u53ef\u4ee5\u63d0\u524d\u6ce8\u518c oaid \u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n        new CdpAutotrackConfiguration("accountId", "urlScheme")\n        // ...\n        .addPreloadComponent(new OaidLibraryGioModule(),oaidConfig)\n\n);\n'))),(0,r.kt)(i.Z,{value:"track",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u53ef\u4ee5\u63d0\u524d\u6ce8\u518c oaid \u6a21\u5757\nGrowingTracker.startWithConfiguration(this,\n        new CdpTrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(new OaidLibraryGioModule(),oaidConfig)\n);\n')))),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\u4e4b\u540e\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Visit")," \u4e8b\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"oaid")," \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "eventType": "VISIT",\n    \u2551   "oaid": "xxxxxxx-xxxxx-xxxxxx",\n    \u2551   "deviceId": "c2369951-098c-34ec-831c-858fe348df1d",\n    \u2551   // ...\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')))}m.isMDXComponent=!0}}]);