(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[818],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9808:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},c="Create a Document",l={unversionedId:"tutorial-basics/create-a-document",id:"tutorial-basics/create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/growingio-sdk-docs/docs/tutorial-basics/create-a-document",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-basics/create-a-document.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/growingio-sdk-docs/docs/tutorial-basics/create-a-page"},next:{title:"Create a Blog Post",permalink:"/growingio-sdk-docs/docs/tutorial-basics/create-a-blog-post"}},u=[{value:"Create your first Doc",id:"create-your-first-doc",children:[]},{value:"Configure the Sidebar",id:"configure-the-sidebar",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-document"},"Create a Document"),(0,a.kt)("p",null,"Documents are ",(0,a.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("strong",{parentName:"li"},"sidebar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"versioning"))),(0,a.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,a.kt)("p",null,"Create a markdown file at ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,a.kt)("p",null,"A new document is now available at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),(0,a.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,a.kt)("p",null,"Docusaurus automatically ",(0,a.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,a.kt)("p",null,"Add metadatas to customize the sidebar label and position:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,a.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n-     items: [...],\n+     items: ['hello'],\n    },\n  ],\n};\n")))}p.isMDXComponent=!0}}]);