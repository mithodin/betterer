"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6298],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=c(r),f=i,m=b["".concat(s,".").concat(f)]||b[f]||l[f]||o;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return b}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),u=["components"],a={id:"betterer.betterersuite.runs",title:"BettererSuite.runs",sidebar_label:"BettererSuite.runs",slug:"/betterer.betterersuite.runs"},s=void 0,c={unversionedId:"api/betterer.betterersuite.runs",id:"api/betterer.betterersuite.runs",isDocsHomePage:!1,title:"BettererSuite.runs",description:"API &gt; @betterer/betterer &gt; BettererSuite &gt; runs",source:"@site/docs/api/betterer.betterersuite.runs.md",sourceDirName:"api",slug:"/betterer.betterersuite.runs",permalink:"/betterer/docs/betterer.betterersuite.runs",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.betterersuite.runs.md",tags:[],version:"current",frontMatter:{id:"betterer.betterersuite.runs",title:"BettererSuite.runs",sidebar_label:"BettererSuite.runs",slug:"/betterer.betterersuite.runs"}},p=[{value:"Signature",id:"signature",children:[],level:2}],l={toc:p};function b(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.betterersuite"},"BettererSuite")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.betterersuite.runs"},"runs")),(0,o.kt)("p",null,"An array containing a ",(0,o.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," for each test in the ",(0,o.kt)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/test-definition-file"},"test definition file"),"."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly runs: BettererRuns;\n")))}b.isMDXComponent=!0}}]);