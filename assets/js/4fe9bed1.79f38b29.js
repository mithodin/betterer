"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8542],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,m=s["".concat(p,".").concat(d)]||s[d]||b[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2587:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={id:"betterer.bettererreporter.contexterror",title:"BettererReporter.contextError()",sidebar_label:"BettererReporter.contextError()",slug:"/betterer.bettererreporter.contexterror"},p=void 0,l={unversionedId:"api/betterer.bettererreporter.contexterror",id:"api/betterer.bettererreporter.contexterror",isDocsHomePage:!1,title:"BettererReporter.contextError()",description:"API &gt; @betterer/betterer &gt; BettererReporter &gt; contextError",source:"@site/docs/api/betterer.bettererreporter.contexterror.md",sourceDirName:"api",slug:"/betterer.bettererreporter.contexterror",permalink:"/betterer/docs/betterer.bettererreporter.contexterror",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettererreporter.contexterror.md",tags:[],version:"current",frontMatter:{id:"betterer.bettererreporter.contexterror",title:"BettererReporter.contextError()",sidebar_label:"BettererReporter.contextError()",slug:"/betterer.bettererreporter.contexterror"}},u=[{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2}],b={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererreporter"},"BettererReporter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererreporter.contexterror"},"contextError")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"contextError()")," hook is called when a ",(0,a.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.betterercontext"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererContext"))," throw an error."),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"contextError?(context: BettererContext, error: BettererError): Promise<void> | void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterercontext"},"BettererContext")),(0,a.kt)("td",{parentName:"tr",align:null},"The test context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"error"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/betterer/docs/errors.betterererror"},"BettererError")),(0,a.kt)("td",{parentName:"tr",align:null},"The error thrown while running the context.")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise","<","void",">"," ","|"," void"))}s.isMDXComponent=!0}}]);