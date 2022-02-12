"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3090],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=o,m=b["".concat(l,".").concat(u)]||b[u]||c[u]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6441:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return b}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],p={id:"betterer.bettereroptionsoverride",title:"BettererOptionsOverride",sidebar_label:"BettererOptionsOverride",slug:"/betterer.bettereroptionsoverride"},l=void 0,s={unversionedId:"api/betterer.bettereroptionsoverride",id:"api/betterer.bettereroptionsoverride",title:"BettererOptionsOverride",description:"API &gt; @betterer/betterer &gt; BettererOptionsOverride",source:"@site/docs/api/betterer.bettereroptionsoverride.md",sourceDirName:"api",slug:"/betterer.bettereroptionsoverride",permalink:"/betterer/docs/betterer.bettereroptionsoverride",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettereroptionsoverride.md",tags:[],version:"current",frontMatter:{id:"betterer.bettereroptionsoverride",title:"BettererOptionsOverride",sidebar_label:"BettererOptionsOverride",slug:"/betterer.bettereroptionsoverride"}},d=[{value:"Signature",id:"signature",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:d};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettereroptionsoverride"},"BettererOptionsOverride")),(0,a.kt)("p",null,"Options for when you override the config via the ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.betterercontext.options"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererContext.options()")," API"),"."),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface BettererOptionsOverride \n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The options object will be validated by ",(0,a.kt)("strong",{parentName:"p"},"Betterer")," and turned into a ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererConfig")),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsoverride.filters"},"filters?")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsfilters"},"BettererOptionsFilters")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A string or ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression")," to match the names of tests that should be run, or an array of them. Will be converted into ",(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererConfigFilters")),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsoverride.ignores"},"ignores?")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsignores"},"BettererOptionsIgnores")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A ",(0,a.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," pattern to match file paths that should be ignored by the file watcher in watch mode, or an array of them. All ",(0,a.kt)("code",null,"ignores")," should be relative to the ",(0,a.kt)("code",null,"cwd"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsoverride.reporters"},"reporters?")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsreporters"},"BettererOptionsReporters")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An array of names of npm packages that export a ",(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererreporter"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererReporter"))," or ",(0,a.kt)("code",null,"object"),"s that implement ",(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererreporter"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererReporter")),". Ignored when ",(0,a.kt)("code",null,"silent")," is ",(0,a.kt)("code",null,"true"),".")))))}b.isMDXComponent=!0}}]);