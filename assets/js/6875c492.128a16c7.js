"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[8610],{895:function(e,t,a){a.d(t,{dK:function(){return l},_k:function(){return s},vc:function(){return o},rx:function(){return c},qo:function(){return i},Hk:function(){return m},Iz:function(){return u}});var r=a(1336),n=a.n(r);a(892)(n()),a(4212).w(n()),a(4182)(n());var l=["en","zh"],s=!1,o=null,c="a3a4267f",i=8,m=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},6165:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),s=a(2273),o=a(6742),c="sidebar_q+wC",i="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",h=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,r.Z)(e,p),i=t&&t.items.length>0;return n.createElement(s.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},i&&n.createElement("aside",{className:"col col--3"},n.createElement(f,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i})},o),a&&n.createElement("div",{className:"col col--2"},n.createElement(v.Z,{toc:a})))))}},3146:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(6010),l=a(3905),s=a(4973),o=a(6742),c=a(3018),i=a(6845),m=a(1217),u=a(6146),d="blogPostTitle_d4p0",g="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";var f=function(e){var t,a,f,v=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,E=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,Z=b.date,w=b.formattedDate,T=b.permalink,L=b.tags,y=b.readingTime,C=b.title,I=b.editUrl,P=E.author,M=E.image,x=E.keywords,z=E.author_url||E.authorURL,R=E.author_title||E.authorTitle,S=E.author_image_url||E.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:x,image:M}),r.createElement("article",{className:k?void 0:"margin-bottom--xl"},(f=k?"h1":"h2",r.createElement("header",null,r.createElement(f,{className:d},k?C:r.createElement(o.Z,{to:T},C)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:Z},w),y&&r.createElement(r.Fragment,null," \xb7 ",v(y))),r.createElement("div",{className:"avatar margin-vert--md"},S&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:z},r.createElement("img",{src:S,alt:P})),r.createElement("div",{className:"avatar__intro"},P&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:z},P)),r.createElement("small",{className:"avatar__subtitle"},R)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:i.Z},p)),(L.length>0||_)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[h]=k,t))},L.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&I&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:I})),!k&&_&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:b.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9404:function(e,t,a){a.r(t);var r=a(7294),n=a(6742),l=a(6165),s=a(3146),o=a(4973),c=a(3018);t.default=function(e){var t,a=e.metadata,i=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return r.createElement(l.Z,{title:f,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(n.Z,{href:u},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(4973),l=a(7462),s=a(3366),o=a(6010),c="iconEdit_mS5F",i=["className"],m=function(e){var t=e.className,a=(0,s.Z)(e,i);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return c},Z:function(){return i}});var r=a(7294),n=a(6010);var l=function(e,t,a){var n=(0,r.useState)(void 0),l=n[0],s=n[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var n=0,o=!1,c=document.getElementsByClassName(e);n<c.length&&!o;){var i=c[n],m=i.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(l&&l.classList.remove(t),i.classList.add(t),s(i),o=!0),n+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},s="tableOfContents_vrFS",o="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,n.Z)(s,"thin-scrollbar")},r.createElement(c,{toc:t}))}}}]);