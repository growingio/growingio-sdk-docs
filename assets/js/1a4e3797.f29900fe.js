"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7920],{895:function(e,t,n){n.d(t,{dK:function(){return u},_k:function(){return c},vc:function(){return o},rx:function(){return s},qo:function(){return l},Hk:function(){return i},Iz:function(){return f}});var r=n(1336),a=n.n(r);n(892)(a()),n(4212).w(a()),n(4182)(a());var u=["en","zh"],c=!1,o=null,s="a3a4267f",l=8,i=50,f={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},7731:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(5861),a=n(7757),u=n.n(a),c=n(7294),o=n(2263),s=n(2273),l=n(9105),i=n(6742),f=n(5977),m=n(412);var h=function(){var e=(0,f.k6)(),t=(0,f.TH)(),n=(0,o.Z)().siteConfig.baseUrl;return{searchValue:m.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},d=n(22),_=n(206),p=n(2539),g=n(9481),v=n(1073),w=n(4041),E=n(7365);function S(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var k="searchQueryInput_5r-w",y="searchResultItem_18XW",I="searchResultItemPath_TjRL",b="searchResultItemSummary_5qSX";function C(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,u=t.tokens,o=t.metadata,s=0===r,l=2===r,f=(s?n.b:a.b).slice(),m=l?n.s:n.t;return s||f.push(a.t),c.createElement("article",{className:y},c.createElement("h2",null,c.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:l?(0,p.C)(m,u):(0,g.o)(m,(0,v.m)(o,"t"),u,100)}})),f.length>0&&c.createElement("p",{className:I},f.join(" \u203a ")),l&&c.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,g.o)(n.t,(0,v.m)(o,"t"),u,100)}}))}var R=function(){var e=(0,o.Z)().siteConfig.baseUrl,t=h(),n=t.searchValue,a=t.updateSearchPath,i=(0,c.useState)(n),f=i[0],m=i[1],p=(0,c.useState)(),g=p[0],v=p[1],y=(0,c.useState)(),I=y[0],b=y[1],R=(0,c.useMemo)((function(){return f?S(E.Iz.search_results_for,{keyword:f}):E.Iz.search_the_documentation}),[f]);(0,c.useEffect)((function(){a(f),g&&(f?g(f,(function(e){b(e)})):b(void 0))}),[f,g]);var z=(0,c.useCallback)((function(e){m(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==f&&m(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,a=n.zhDictionary,v((function(){return(0,_.v)(r,a,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(s.Z,{title:R},c.createElement(l.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,R),c.createElement("input",{type:"search",name:"q",className:k,"aria-label":"Search",onChange:z,value:f,autoComplete:"off",autoFocus:!0}),!g&&f&&c.createElement("div",null,c.createElement(w.Z,null)),I&&(I.length>0?c.createElement("p",null,S(1===I.length?E.Iz.count_documents_found:E.Iz.count_documents_found_plural,{count:I.length})):c.createElement("p",null,E.Iz.no_documents_were_found)),c.createElement("section",null,I&&I.map((function(e){return c.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);