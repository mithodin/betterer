"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3631],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=o(r),m=a,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5246:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return d},default:function(){return c}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],u={id:"betterer.bettererfile.addissue_2",title:"BettererFile.addIssue()",sidebar_label:"BettererFile.addIssue()",slug:"/betterer.bettererfile.addissue_2"},s=void 0,o={unversionedId:"api/betterer.bettererfile.addissue_2",id:"api/betterer.bettererfile.addissue_2",title:"BettererFile.addIssue()",description:"API &gt; @betterer/betterer &gt; BettererFile &gt; addIssue",source:"@site/docs/api/betterer.bettererfile.addissue_2.md",sourceDirName:"api",slug:"/betterer.bettererfile.addissue_2",permalink:"/betterer/docs/betterer.bettererfile.addissue_2",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettererfile.addissue_2.md",tags:[],version:"current",frontMatter:{id:"betterer.bettererfile.addissue_2",title:"BettererFile.addIssue()",sidebar_label:"BettererFile.addIssue()",slug:"/betterer.bettererfile.addissue_2"}},d=[{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2}],p={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfile"},"BettererFile")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfile.addissue_2"},"addIssue")),(0,l.kt)("p",null,"Add an issue to the file from start line/column position and end line/column position."),(0,l.kt)("h2",{id:"signature"},"Signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"addIssue(startLine: number, startCol: number, endLine: number, endCol: number, message: string, hash?: string): void;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startLine"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("code",null,"0"),"-indexed line number of the start of the issue in the file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startCol"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("code",null,"0"),"-indexed column number of the start of the issue in the line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endLine"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("code",null,"0"),"-indexed line number of the end of the issue in the file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endCol"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("code",null,"0"),"-indexed column number of the end of the issue in the line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A message that describes the issue.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A hash for the issue. If omitted, the hash of ",(0,l.kt)("code",null,"message")," will be used.")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("p",null,"void"))}c.isMDXComponent=!0}}]);