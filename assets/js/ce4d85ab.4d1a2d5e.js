"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6560],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,m=b["".concat(p,".").concat(d)]||b[d]||c[d]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1113:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return b}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],u={id:"betterer.bettererreporter.runstart",title:"BettererReporter.runStart()",sidebar_label:"BettererReporter.runStart()",slug:"/betterer.bettererreporter.runstart"},p=void 0,l={unversionedId:"api/betterer.bettererreporter.runstart",id:"api/betterer.bettererreporter.runstart",title:"BettererReporter.runStart()",description:"API &gt; @betterer/betterer &gt; BettererReporter &gt; runStart",source:"@site/docs/api/betterer.bettererreporter.runstart.md",sourceDirName:"api",slug:"/betterer.bettererreporter.runstart",permalink:"/betterer/docs/betterer.bettererreporter.runstart",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettererreporter.runstart.md",tags:[],version:"current",frontMatter:{id:"betterer.bettererreporter.runstart",title:"BettererReporter.runStart()",sidebar_label:"BettererReporter.runStart()",slug:"/betterer.bettererreporter.runstart"}},s=[{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2}],c={toc:s};function b(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererreporter"},"BettererReporter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererreporter.runstart"},"runStart")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runStart()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," starts. The ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycle")," promise will resolve when the run ends and reject when the run throws an error, so it can be used instead of the ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererreporter.runend"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererReporter.runEnd()"))," and ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererreporter.runerror"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererReporter.runError()"))," hooks."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"runStart?(run: BettererRun, lifecycle: Promise<BettererRunSummary>): Promise<void> | void;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"run"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrun"},"BettererRun")),(0,o.kt)("td",{parentName:"tr",align:null},"The test run.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lifecycle"),(0,o.kt)("td",{parentName:"tr",align:null},"Promise","<",(0,o.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunsummary"},"BettererRunSummary"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"A promise that resolves when the test run ends and rejects when the test run throws.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"Promise","<","void",">"," ","|"," void"))}b.isMDXComponent=!0}}]);