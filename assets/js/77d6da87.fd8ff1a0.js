"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1449],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4350:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={sidebar_position:2,title:"\u81ea\u5b9a\u4e49\u6a21\u5757"},p=void 0,c={unversionedId:"android/develop/custom module",id:"android/develop/custom module",title:"\u81ea\u5b9a\u4e49\u6a21\u5757",description:"\u81ea\u5b9a\u4e49\u6a21\u5757\u53ef\u4ee5\u8ba9\u60a8\u4f7f\u7528\u81ea\u5df1\u7684\u4ee3\u7801\u5b9e\u73b0\u7684\u529f\u80fd\u6765\u66ff\u6362\u73b0\u6709\u7684\u6a21\u5757\u529f\u80fd\uff0c\u73b0\u6709\u7684\u6a21\u5757\u529f\u80fd\u53ef\u4ee5\u53c2\u8003 \u6a21\u5757\u5217\u8868",source:"@site/docs/android/develop/custom module.md",sourceDirName:"android/develop",slug:"/android/develop/custom module",permalink:"/growingio-sdk-docs/docs/android/develop/custom module",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/docs/android/develop/custom module.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u81ea\u5b9a\u4e49\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"\u81ea\u5b9a\u4e49 SDK",permalink:"/growingio-sdk-docs/docs/android/develop/coutom sdk"},next:{title:"\u4e8c\u6b21\u5f00\u53d1",permalink:"/growingio-sdk-docs/docs/android/develop/custom_develop"}},d={},u=[{value:"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757",id:"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757",level:2},{value:"\u6dfb\u52a0\u5fc5\u8981\u7684\u4f9d\u8d56",id:"\u6dfb\u52a0\u5fc5\u8981\u7684\u4f9d\u8d56",level:3},{value:"\u7f16\u5199\u4e00\u4e2aModelLoader",id:"\u7f16\u5199\u4e00\u4e2amodelloader",level:3},{value:"\u7f16\u5199DataFetcher",id:"\u7f16\u5199datafetcher",level:3},{value:"getDataClass",id:"getdataclass",level:4},{value:"cancel",id:"cancel",level:4},{value:"cleanup",id:"cleanup",level:4},{value:"executeData",id:"executedata",level:4},{value:"loadData",id:"loaddata",level:4},{value:"\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e",id:"\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e",level:3},{value:"\u6dfb\u52a0\u6a21\u5757\u6ce8\u89e3",id:"\u6dfb\u52a0\u6a21\u5757\u6ce8\u89e3",level:3},{value:"Library\u6a21\u5757\u4e2d",id:"library\u6a21\u5757\u4e2d",level:4},{value:"App\u4e3b\u6a21\u5757\u4e2d",id:"app\u4e3b\u6a21\u5757\u4e2d",level:4},{value:"\u624b\u52a8\u6dfb\u52a0\u6a21\u5757",id:"\u624b\u52a8\u6dfb\u52a0\u6a21\u5757",level:4}],s={toc:u};function m(e){var n=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u6a21\u5757\u53ef\u4ee5\u8ba9\u60a8\u4f7f\u7528\u81ea\u5df1\u7684\u4ee3\u7801\u5b9e\u73b0\u7684\u529f\u80fd\u6765\u66ff\u6362\u73b0\u6709\u7684\u6a21\u5757\u529f\u80fd\uff0c\u73b0\u6709\u7684\u6a21\u5757\u529f\u80fd\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/docs/android/develop/coutom%20sdk"},"\u6a21\u5757\u5217\u8868")),(0,l.kt)("p",null,"\u5728 GrowingIO SDK \u4e2d\uff0c\u6a21\u5757\u52a0\u8f7d\u5177\u6709\u552f\u4e00\u6027\u2014\u2014\u6bcf\u4e00\u4e2a\u8f93\u5165\u6e90\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u6a21\u5757\uff0c\u4e14\u8be5\u6a21\u5757\u4f1a\u88ab\u540e\u6ce8\u518c\u7684\u6a21\u5757\u8986\u76d6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"custom module",src:t(9275).Z,width:"698",height:"821"})),(0,l.kt)("h2",{id:"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757"},"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u53ef\u6269\u5c55\u7684SDK, \u8981\u6dfb\u52a0\u6216\u66ff\u6362\u4e00\u79cd\u65b0\u7684\u6a21\u5757\u652f\u6301, \u60a8\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6765\u6267\u884c(\u4ee5\u66ff\u6362\u7f51\u7edc\u5e93\u4e3a\u4f8b)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u4e00\u4e2a ModelLoader"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u4e00\u4e2a DataFetcher , \u53ef\u4ee5\u88ab\u5b9a\u4e49\u7684 ModelLoader \u8fd4\u56de"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u4e00\u4e2a ModelLoaderFactory"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u60a8\u7684\u65b0 ModelLoader \u6ce8\u518c\u5230sdk, \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"@GIOLibraryModule"))),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e2a okhttp3 \u7684\u7f51\u7edc\u8bf7\u6c42\u81ea\u5b9a\u4e49\u6a21\u5757\u6765\u4e3e\u4e2a\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u5fc5\u8981\u7684\u4f9d\u8d56"},"\u6dfb\u52a0\u5fc5\u8981\u7684\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5728 app/module \u7684 build.gradle \u4e0b\u6dfb\u52a0\u57fa\u7840\u5e93\u6838\u5fc3\uff08\u65e0\u57cb\u70b9\u548c\u57cb\u70b9\u90fd\u53ef\uff09\uff0c\u6ce8\u89e3\u5e93\u548c\u6ce8\u89e3\u89e3\u91ca\u5668."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    //\u65e0\u57cb\u70b9\u57fa\u7840\u5e93\n    implementation 'com.growingio.android:autotracker-core:3.3.5'\n\n    //\u6ce8\u89e3\u89e3\u6790\n    implementation 'com.growingio.android:annotation:3.3.5'\n    annotationProcessor 'com.growingio.android:compiler:3.3.5'\n}\n")),(0,l.kt)("h3",{id:"\u7f16\u5199\u4e00\u4e2amodelloader"},"\u7f16\u5199\u4e00\u4e2aModelLoader"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\u662f\u5b9e\u73b0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelLoader")," \u63a5\u53e3. \u5728\u5f00\u59cb\u4e4b\u524d, \u6211\u4eec\u9700\u8981\u51b3\u5b9a\u4e24\u4ef6\u4e8b\u60c5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u8981\u5904\u7406\u4ec0\u4e48\u7c7b\u578b\u7684\u6a21\u578b( Model )?"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u90a3\u79cd\u6a21\u578b\u6211\u4eec\u5e94\u8be5\u4ea7\u51fa\u4ec0\u4e48\u7c7b\u578b\u7684\u6570\u636e( Data )?")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d, \u6211\u4eec\u5e0c\u671b\u5904\u7406\u7f51\u7edc\u8bf7\u6c42, \u56e0\u4e3a\u66ff\u6362\u5185\u7f6e\u6846\u67b6, \u6240\u4ee5 Model \u662f\u5df2\u7ecf\u9650\u5236\u4e86\u7684\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"EventUrl"),".\n\u800c\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"EventUrl")," \u4e2d\u4ea7\u51fa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventResponse")," \u6570\u636e\u662f\u6a21\u5757\u9700\u8981\u8fd4\u56de\u7ed9SDK\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5728\u5df2\u7ecf\u77e5\u9053 ",(0,l.kt)("inlineCode",{parentName:"p"},"Model")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Data")," \u7c7b\u578b\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u80fd\u5efa\u7acb\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataLoader")," \u7c7b\u63a5\u53d7\u6b63\u786e\u7684\u53c2\u6570\u7c7b\u578b\u5e76\u8fd4\u56de\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class OkHttpDataLoader implements ModelLoader<EventUrl, EventResponse> {\n\n    private final Call.Factory client;\n\n    public OkHttpDataLoader(Call.Factory client) {\n        this.client = client;\n    }\n\n    @Override\n    public LoadData<EventResponse> buildLoadData(EventUrl eventUrl) {\n        return new LoadData<>(new OkHttpDataFetcher(client, eventUrl));\n    }\n\n    public static class Factory implements ModelLoaderFactory<EventUrl, EventResponse> {\n        private static volatile Call.Factory sInternalClient;\n        private final Call.Factory client;\n\n        private static final int DEFAULT_CONNECT_TIMEOUT = 5;\n        private static final int DEFAULT_READ_TIMEOUT = 10;\n\n        private static Call.Factory getsInternalClient() {\n            if (sInternalClient == null) {\n                synchronized (Factory.class) {\n                    if (sInternalClient == null) {\n                        sInternalClient = new OkHttpClient.Builder()\n                                .connectTimeout(DEFAULT_CONNECT_TIMEOUT, TimeUnit.SECONDS)\n                                .readTimeout(DEFAULT_READ_TIMEOUT, TimeUnit.SECONDS)\n                                .addInterceptor(new SecurityExceptionInterceptor())\n                                .build();\n                    }\n                }\n            }\n            return sInternalClient;\n        }\n\n        public Factory() {\n            this(getsInternalClient());\n        }\n\n        public Factory(Call.Factory client) {\n            this.client = client;\n        }\n\n        @Override\n        public ModelLoader<EventUrl, EventResponse> build() {\n            return new OkHttpDataLoader(client);\n        }\n    }\n}\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"Factory")," \u4f5c\u7528\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9759\u6001\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"OkHttpClient"),"\uff0c\u53ef\u4ee5\u907f\u514d\u6bcf\u6b21\u8bf7\u6c42\u90fd\u9700\u8981\u91cd\u65b0\u521b\u5efa\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u6ce8\u518c\u65f6\u63d0\u4f9b\u6a21\u5757\u7684\u5177\u4f53\u5b9e\u73b0\u7c7b\uff0c\u5373\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"ModelLoader"),".")),(0,l.kt)("h3",{id:"\u7f16\u5199datafetcher"},"\u7f16\u5199DataFetcher"),(0,l.kt)("p",null,"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelLoader")," \u7c7b\u4f3c, ",(0,l.kt)("inlineCode",{parentName:"p"},"DataFetcher")," \u63a5\u53e3\u662f\u6cdb\u578b\u7684, \u5b83\u8981\u6c42\u6211\u4eec\u6307\u5b9a\u6240\u671f\u5f85\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u5728\u7f51\u7edc\u8bf7\u6c42\u6a21\u5757\u91cc\u9762\u5373\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"EventResponse"),"\n\u8fd9\u6837\u5b50\u53ef\u4ee5\u7acb\u9a6c\u5f97\u5230\u4e00\u4e2a\u6a21\u677f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class OkHttpDataFetcher implements HttpDataFetcher<EventResponse> {\n    @Override\n    public void loadData(DataCallback<? super EventResponse> callback) {}\n\n    @Override\n    public EventResponse executeData() {\n        return null;\n    }\n\n    @Override\n    public void cleanup() {}\n\n    @Override\n    public void cancel() {}\n\n    @Override\n    public Class<EventResponse> getDataClass() {\n        return null;\n    }\n}\n")),(0,l.kt)("p",null,"\u867d\u7136\u8fd9\u91cc\u6709\u5f88\u591a\u4e2a\u65b9\u6cd5, \u4f46\u5b83\u4eec\u4e2d\u7684\u5927\u90e8\u5206\u90fd\u5f88\u5bb9\u6613\u5b9e\u73b0"),(0,l.kt)("h4",{id:"getdataclass"},"getDataClass"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDataClass")," \u6ca1\u4ec0\u4e48\u597d\u8ba8\u8bba\u7684, \u6211\u4eec\u8981\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"EventResponse")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Class<EventResponse> getDataClass() {\n  return EventResponse.class;\n}\n")),(0,l.kt)("h4",{id:"cancel"},"cancel"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u53ef\u4ee5\u53d6\u6d88\u7684\u7f51\u7edc\u8fde\u63a5\u5e93\u6216\u957f\u65f6\u95f4\u52a0\u8f7d, \u53ef\u4ee5\u901a\u8fc7 cancel() \u65b9\u6cd5\u5b9e\u73b0. \u8fd9\u5c06\u5e2e\u52a9\u52a0\u901f\u5176\u4ed6\u961f\u5217\u91cc\u7684\u52a0\u8f7d, \u5e76\u8282\u7ea6\u4e00\u4e9b CPU, \u5185\u5b58\u6216\u5176\u4ed6\u8d44\u6e90, \u5982\u679c\u6ca1\u6709\u9700\u8981\u53d6\u6d88\u7684\u64cd\u4f5c, \u53ef\u4ee5\u7559\u7a7a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void cancel() {\n  // \u6267\u884ccancel\u64cd\u4f5c, \u6216\u6761\u4ef6\u8d4b\u503c\n  isCancelled = true;\n}\n")),(0,l.kt)("h4",{id:"cleanup"},"cleanup"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u52a0\u8f7d\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"InputStream")," \u6216\u6253\u5f00\u4efb\u4f55 I/O \u7c7b\u7684\u8d44\u6e90, \u60a8\u9700\u8981\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"cleanup()")," \u65b9\u6cd5\u4e2d\u5173\u95ed\u5e76\u6e05\u7406\u8fd9\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"InputStream")," \u6216\u8d44\u6e90, \u5982\u679c\u5bf9\u5e94\u6a21\u5757\u6ca1\u6709\u8d44\u6e90\u9700\u8981\u6e05\u7406, \u53ef\u4ee5\u7559\u7a7a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void cleanup() {\n    if (stream != null) {\n        try {\n            stream.close();\n        } catch (IOException e) {\n            // Ignore\n        }\n    }\n    if (urlConnection != null) {\n        urlConnection.disconnect();\n    }\n    urlConnection = null;\n}\n")),(0,l.kt)("h4",{id:"executedata"},"executeData"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"executeData")," \u662f\u6a21\u5757\u4e2d\u6240\u671f\u5f85\u60a8\u505a\u90a3\u4e9b\u7e41\u91cd\u5de5\u4f5c\u7684\u5730\u65b9, \u60a8\u53ef\u4ee5\u5f00\u542f\u4e00\u4e2a\u7f51\u7edc\u8bf7\u6c42, \u4ece\u78c1\u76d8\u52a0\u8f7d\u6570\u636e, \u6216\u505a\u4efb\u4f55\u60a8\u60f3\u505a\u7684\u4e8b\u60c5. \u5728\u5f53\u524d\u5b9a\u5236\u7684\u6a21\u5757\u4e2d\u4e3b\u8981\u6267\u884c\u7f51\u7edc\u8bf7\u6c42\u5e76\u8fd4\u56de\u5bf9\u5e94\u6570\u636e."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic EventResponse executeData() {\n    long startTime = LogTime.getLogTime();\n    try {\n        return loadDataWithRedirects(new URL(eventUrl.toUrl()), 0, null, eventUrl.getHeaders());\n    } catch (IOException e) {\n        if (Log.isLoggable(TAG, Log.DEBUG)) {\n            Log.d(TAG, "Failed to load data for url", e);\n        }\n    } finally {\n        if (Log.isLoggable(TAG, Log.VERBOSE)) {\n            Log.v(TAG, "Finished http url fetcher fetch in " + LogTime.getElapsedMillis(startTime));\n        }\n    }\n    return new EventResponse(false);\n}\n')),(0,l.kt)("h4",{id:"loaddata"},"loadData"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loadData")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"executeData")," \u7684\u533a\u522b\u5728\u4e8e\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataCallback")," \u53c2\u6570, \u60a8\u53ef\u4ee5\u5b89\u6392\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1,\u6216\u5728\u91cc\u9762\u5b9e\u73b0\u7ebf\u7a0b\u5207\u6362\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void loadData(DataCallback<? super EventResponse> callback) {\n    long startTime = LogTime.getLogTime();\n    try {\n        EventResponse result = loadDataWithRedirects(new URL(eventUrl.toUrl()), 0, null, eventUrl.getHeaders());\n        callback.onDataReady(result);\n    } catch (IOException e) {\n        if (Log.isLoggable(TAG, Log.DEBUG)) {\n            Log.d(TAG, "Failed to load data for url", e);\n        }\n        \n        callback.onLoadFailed(e);\n    } finally {\n        if (Log.isLoggable(TAG, Log.VERBOSE)) {\n            Log.v(TAG, "Finished http url fetcher fetch in " + LogTime.getElapsedMillis(startTime));\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u5b8c\u6574\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"DataFetcher")," \u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-network/okhttp3/src/main/java/com/growingio/android/okhttp3/OkHttpDataFetcher.java"},"Github \u4e0a\u7684\u4ee3\u7801")),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e"},"\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\u679c\u6a21\u5757\u91cc\u9762\u6709\u4e9b\u914d\u7f6e\u662f\u9700\u8981\u5bf9\u5916\u5f00\u653e\u63a5\u53e3\u7684\uff0c\u90a3\u5c31\u9700\u8981\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e00\u4e2a\u914d\u7f6e\u7c7b\u5f00\u653e\u51fa\u53bb\u3002\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"OkhttpConfig"),"\uff0c\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"p"},"Configurable")," \u63a5\u53e3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class OkhttpConfig implements Configurable {\n\n    private int connectTimeout = 5;\n    private int readTimeout = 10;\n\n    //\u63a8\u8350\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f\n    public OkhttpConfig setConnectTimeout(int connectTimeout) {\n        this.connectTimeout = connectTimeout;\n        return this;\n    }\n\n    //\u63a8\u8350\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f\n    public OkhttpConfig setReadTimeout(int readTimeout) {\n        this.readTimeout = readTimeout;\n        return this;\n    }\n\n    public int getConnectTimeout() {\n        return connectTimeout;\n    }\n\n    public int getReadTimeout() {\n        return readTimeout;\n    }\n}\n")),(0,l.kt)("p",null,"\u540e\u7eed\u9700\u8981\u5c06\u8be5\u914d\u7f6e\u7c7b\u914d\u7f6e\u5230\u6a21\u5757\u6ce8\u89e3\u4e2d\uff0c\u81ea\u52a8\u6ce8\u518c\u5b8c\u6210\u540e\u751f\u6210\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"<Custom>TackerConfiguration")," \u7c7b\u4e2d\u4f1a\u81ea\u52a8\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"OkhttpConfig")," \u4e2d\u7684\u914d\u7f6e\u65b9\u6cd5\u4ee5\u4fbf SDK \u521d\u59cb\u5316\u65f6\u540c\u65f6\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u6a21\u5757\u6ce8\u89e3"},"\u6dfb\u52a0\u6a21\u5757\u6ce8\u89e3"),(0,l.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u662f\u5c06\u6a21\u5757\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Factory")," \u4e0e\u8f93\u5165\u8f93\u51fa\u6570\u636e\u7ed1\u5b9a\u4e00\u8d77\uff0c\u63d0\u4f9b\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"TrackerRegistry")," \u6ce8\u518c\u3002\u8fd9\u65f6\u5019\u6709\u4e24\u79cd\u60c5\u51b5\uff1aApp\u4e3b\u6a21\u5757\u548cLibrary\u5b50\u6a21\u5757"),(0,l.kt)("h4",{id:"library\u6a21\u5757\u4e2d"},"Library\u6a21\u5757\u4e2d"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@GIOLibraryModule")," \u6ce8\u89e3\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"LibraryGioModule")," \u914d\u5408\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@GIOLibraryModule(config = OkhttpConfig.class)\npublic class OkhttpLibraryGioModule extends LibraryGioModule {\n    @Override\n    public void registerComponents(Context context, TrackerRegistry registry) {\n        registry.register(EventUrl.class, EventResponse.class, new OkHttpDataLoader.Factory());\n    }\n}\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"@GIOLibraryModule")," \u5728\u9879\u76ee\u4e2d\u7684 Project Module \u4e2d\u4f7f\u7528\uff0c\u7ecf\u8fc7 APT \u7f16\u8bd1\u540e\u6bcf\u4e00\u4e2a Project Module \u4e2d\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u6709\u7740 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Index")," \u6ce8\u89e3\u7684\u7c7b\uff0c\u8be5\u7c7b\u4f1a\u8bb0\u5f55\u5176 Module \u4e0b\u7684\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"@GIOLibraryModule"),"\u4fe1\u606f\u3002")),(0,l.kt)("h4",{id:"app\u4e3b\u6a21\u5757\u4e2d"},"App\u4e3b\u6a21\u5757\u4e2d"),(0,l.kt)("p",null,"\u9700\u8981\u5c06\u6a21\u5757\u653e\u5165\u5230\u4e3b\u6a21\u5757\u7684\u6ce8\u89e3\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration",config = OkhttpConfig.class)\npublic class GrowingIODemoAppModule extends AppGioModule {\n    @GIOTracker(path = Autotracker.class, projectId = "<your accountId>", urlScheme = "<your urlscheme>")\n    public void config(DemoTackerConfiguration config) {\n        config.setChannel("demo")\n                .setProject("<your accountId>","<your urlscheme>")//\u82e5\u5728\u6ce8\u89e3\u4e0a\u58f0\u660e\u53ef\u4ee5\u7701\u7565\n                .setDataCollectionEnabled(true)\n                .setDebugEnabled(true);\n    }\n\n    @Override\n    public void registerComponents(Context context, TrackerRegistry registry) {\n        registry.register(EventUrl.class, EventResponse.class, new OkHttpDataLoader.Factory());\n    }\n}\n')),(0,l.kt)("h4",{id:"\u624b\u52a8\u6dfb\u52a0\u6a21\u5757"},"\u624b\u52a8\u6dfb\u52a0\u6a21\u5757"),(0,l.kt)("p",null,"\u4e0d\u540c\u4e8e\u4e0a\u9762\u4e24\u79cd\u7684\u81ea\u52a8\u6ce8\u518c\uff0c\u624b\u52a8\u6ce8\u518c\u662f\u5728 SDK \u521d\u59cb\u5316\u5b8c\u6210\u540e\u901a\u8fc7\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"registerComponent()")," \u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DemoAutotracker.start(this);\n//\u624b\u52a8\u6ce8\u518c\u6a21\u5757\u548c\u914d\u7f6e\u7c7b\nDemoAutotracker.get().registerComponent(new OkhttpLibraryGioModule());\nConfigurationProvider.get().addConfiguration(new OkhttpConfig());\n")))}m.isMDXComponent=!0},9275:function(e,n,t){n.Z=t.p+"assets/images/custom_module-d11f190d898635f0e1774afe66e99d39.png"}}]);