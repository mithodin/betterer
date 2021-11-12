"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3597],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),b=a,d=f["".concat(p,".").concat(b)]||f[b]||u[b]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8176:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={id:"betterer.bettererfilepatterns",title:"BettererFilePatterns",sidebar_label:"BettererFilePatterns",slug:"/betterer.bettererfilepatterns"},p=void 0,c={unversionedId:"api/betterer.bettererfilepatterns",id:"api/betterer.bettererfilepatterns",isDocsHomePage:!1,title:"BettererFilePatterns",description:"API &gt; @betterer/betterer &gt; BettererFilePatterns",source:"@site/docs/api/betterer.bettererfilepatterns.md",sourceDirName:"api",slug:"/betterer.bettererfilepatterns",permalink:"/betterer/docs/betterer.bettererfilepatterns",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.bettererfilepatterns.md",tags:[],version:"current",frontMatter:{id:"betterer.bettererfilepatterns",title:"BettererFilePatterns",sidebar_label:"BettererFilePatterns",slug:"/betterer.bettererfilepatterns"}},s=[{value:"Signature",id:"signature",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/betterer/docs/betterer.bettererfilepatterns"},"BettererFilePatterns")),(0,i.kt)("p",null,"An array of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expressions")," that match file paths that will be excluded from an operation."),(0,i.kt)("h2",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type BettererFilePatterns = ReadonlyArray<RegExp | ReadonlyArray<RegExp>>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can contain nested arrays, which will be ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"},"flattened"),".")))}f.isMDXComponent=!0}}]);