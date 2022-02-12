"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7683],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=d(r),u=n,k=b["".concat(o,".").concat(u)]||b[u]||m[u]||l;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9959:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return b}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),i=["components"],s={id:"betterer",title:"betterer",sidebar_label:"betterer",slug:"/betterer"},o=void 0,d={unversionedId:"api/betterer",id:"api/betterer",title:"betterer",description:"API &gt; @betterer/betterer",source:"@site/docs/api/betterer.md",sourceDirName:"api",slug:"/betterer",permalink:"/betterer/docs/betterer",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/betterer.md",tags:[],version:"current",frontMatter:{id:"betterer",title:"betterer",sidebar_label:"betterer",slug:"/betterer"}},p=[{value:"Classes",id:"classes",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"Type Aliases",id:"type-aliases",children:[],level:2}],m={toc:p};function b(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/index"},"API")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/betterer/docs/betterer"},"@betterer/betterer")),(0,l.kt)("p",null,"JavaScript API for running ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"betterer"))),"."),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletest"},"BettererFileTest")),(0,l.kt)("td",{parentName:"tr",align:null},"A very common usecase for ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," is to track issues across all the files in a project. ",(0,l.kt)("code",null,"BettererFileTest")," provides a wrapper around ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," that makes it easier to implement such a test.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},"BettererTest")),(0,l.kt)("td",{parentName:"tr",align:null},"The main interface to the ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/tests"},"test system"),".")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterer"},"betterer(options)")),(0,l.kt)("td",{parentName:"tr",align:null},"Run ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," with the given options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.merge"},"merge(options)")),(0,l.kt)("td",{parentName:"tr",align:null},"Resolve any merge conflicts in the specified results file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.results"},"results(options)")),(0,l.kt)("td",{parentName:"tr",align:null},"Get a summary of the results of the defined ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"),"s"),".",(0,l.kt)("strong",{parentName:"td"},"Betterer")," will read the ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/test-definition-file"},"test definition file")," and the ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/results-file"},"results file")," and return a summary of the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.runner"},"runner(options)")),(0,l.kt)("td",{parentName:"tr",align:null},"Create a ",(0,l.kt)("strong",{parentName:"td"},"BettererRunner")," with the given options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.watch"},"watch(options)")),(0,l.kt)("td",{parentName:"tr",align:null},"Create a ",(0,l.kt)("strong",{parentName:"td"},"BettererRunner")," with the given options. Also starts up a file watcher for tracked files in the current working directory.")))),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Interface"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfig"},"BettererConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"Full validated config object for ",(0,l.kt)("strong",{parentName:"td"},"Betterer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterercontext"},"BettererContext")),(0,l.kt)("td",{parentName:"tr",align:null},"The context of a set of test suite runs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterercontextsummary"},"BettererContextSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"The summary of a set of test suite runs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererdiff"},"BettererDiff")),(0,l.kt)("td",{parentName:"tr",align:null},"The result of computing the difference between two results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfile"},"BettererFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Basic information about a file and its issues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilebase"},"BettererFileBase")),(0,l.kt)("td",{parentName:"tr",align:null},"Basic information about a file and its issues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilediff"},"BettererFileDiff")),(0,l.kt)("td",{parentName:"tr",align:null},"A diff object for a single file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissue"},"BettererFileIssue")),(0,l.kt)("td",{parentName:"tr",align:null},"An issue in a file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileresolver"},"BettererFileResolver")),(0,l.kt)("td",{parentName:"tr",align:null},"A helper for resolving file paths in a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileTest")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletestresult"},"BettererFileTestResult")),(0,l.kt)("td",{parentName:"tr",align:null},"A set of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfile"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFile"),"s")," which each have their own set of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissues"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileIssues")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletestresultsummary"},"BettererFileTestResultSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"The summary of the result of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileTest")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsmerge"},"BettererOptionsMerge")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for when merging conflicts in the ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/results-file"},"results file")," via the ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.merge"},(0,l.kt)("inlineCode",{parentName:"a"},"betterer.merge()")," API"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsoverride"},"BettererOptionsOverride")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for when you override the config via the ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterercontext.options"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererContext.options()")," API"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsresults"},"BettererOptionsResults")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for when you create a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultssummary"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererResultsSummary"))," via the ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.results"},(0,l.kt)("inlineCode",{parentName:"a"},"betterer.results()")," API"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionswatch"},"BettererOptionsWatch")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for when you create a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunner"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRunner"))," via the ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.watch"},(0,l.kt)("inlineCode",{parentName:"a"},"betterer.watch()")," JS API"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererreporter"},"BettererReporter")),(0,l.kt)("td",{parentName:"tr",align:null},"The interface for hooking into ",(0,l.kt)("strong",{parentName:"td"},"Betterer"),"'s reporter system.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresult"},"BettererResult")),(0,l.kt)("td",{parentName:"tr",align:null},"The deserialised result object for a single run of a single ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultssummary"},"BettererResultsSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"A summary of the results of the defined ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"),"s"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrun"},"BettererRun")),(0,l.kt)("td",{parentName:"tr",align:null},"A single ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," run. Will become a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunsummary"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRunSummary"))," when the test run is completed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunner"},"BettererRunner")),(0,l.kt)("td",{parentName:"tr",align:null},"The JS API for controlling ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," runs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunsummary"},"BettererRunSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"The summary of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," run. Includes everything from ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrun"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRun")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererserialiser"},"BettererSerialiser")),(0,l.kt)("td",{parentName:"tr",align:null},"The functions that convert between ",(0,l.kt)("code",null,"SerialisedType")," and ",(0,l.kt)("code",null,"DeserialisedType"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuite"},"BettererSuite")),(0,l.kt)("td",{parentName:"tr",align:null},"A set of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," runs. Will become a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuitesummary"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererSuiteSummary"))," when the test suite is completed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuitesummary"},"BettererSuiteSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"The summary of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuite"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererSuite"))," suite. Includes everything from ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuite"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererSuite")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestconfig"},"BettererTestConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"The validated configuration for a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestoptionsbasic"},"BettererTestOptionsBasic")),(0,l.kt)("td",{parentName:"tr",align:null},"The least complex version of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," operates on simple numbers and can be defined with just a few properties.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestoptionscomplex"},"BettererTestOptionsComplex")),(0,l.kt)("td",{parentName:"tr",align:null},"For a more complex version of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," that operates on more complex objects, you need to define more complex behaviour.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestresultsummary"},"BettererTestResultSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"The summary of the result of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest")),".")))),(0,l.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigexcludes"},"BettererConfigExcludes")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expressions")," that match file paths that will be excluded from an operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigfilters"},"BettererConfigFilters")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expressions")," that match names of relevant tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigignores"},"BettererConfigIgnores")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of absolute ",(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," patterns that match file paths that will be ignored by the file watcher in watch mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigincludes"},"BettererConfigIncludes")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of absolute ",(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," patterns that match file paths that will be included in an operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererconfigpaths"},"BettererConfigPaths")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of absolute ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/test-definition-file"},"test definition file paths")," containing ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererdelta"},"BettererDelta")),(0,l.kt)("td",{parentName:"tr",align:null},"The change between a test runs and its baseline. A ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrun"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRun"))," has a ",(0,l.kt)("code",null,"delta")," property if the test has a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestoptionscomplex.progress"},(0,l.kt)("inlineCode",{parentName:"a"},"progress()"))," handler.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererdeserialise"},"BettererDeserialise")),(0,l.kt)("td",{parentName:"tr",align:null},"The function that converts from a ",(0,l.kt)("code",null,"SerialisedType")," to a ",(0,l.kt)("code",null,"DeserialisedType"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererdiffer"},"BettererDiffer")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that compares two test results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileglobs"},"BettererFileGlobs")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," patterns that match file paths that will be included in an operation. All globs should be relative to the current .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissues"},"BettererFileIssues")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissue"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileIssue"),"s"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissueserialised"},"BettererFileIssueSerialised")),(0,l.kt)("td",{parentName:"tr",align:null},"A serialised ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissue"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileIssue")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissuesserialised"},"BettererFileIssuesSerialised")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissueserialised"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileIssueSerialised"),"s"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilepath"},"BettererFilePath")),(0,l.kt)("td",{parentName:"tr",align:null},"The path to a file on disk.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilepaths"},"BettererFilePaths")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of paths to files on disk.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilepatterns"},"BettererFilePatterns")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expressions")," that match file paths that will be excluded from an operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilesdiff"},"BettererFilesDiff")),(0,l.kt)("td",{parentName:"tr",align:null},"A map from file path to ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfilediff"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileDiff")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletestdiff"},"BettererFileTestDiff")),(0,l.kt)("td",{parentName:"tr",align:null},"A diff object for a complete ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileTest"))," run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletestfunction"},"BettererFileTestFunction")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that runs an actual file test.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletestresultserialised"},"BettererFileTestResultSerialised")),(0,l.kt)("td",{parentName:"tr",align:null},"A map from file path to ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissuesserialised"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileIssuesSerialised")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletestresultsummarydetails"},"BettererFileTestResultSummaryDetails")),(0,l.kt)("td",{parentName:"tr",align:null},"The summarised result of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileTest")),". A mapping from the path to a file to an array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfileissues"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileIssues")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsexcludes"},"BettererOptionsExcludes")),(0,l.kt)("td",{parentName:"tr",align:null},"A string or ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression")," to match file paths that should be excluded from an operation, or an array of them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsfilters"},"BettererOptionsFilters")),(0,l.kt)("td",{parentName:"tr",align:null},"A string or ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression")," to match the names of relevant tests, or an array of them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsignores"},"BettererOptionsIgnores")),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," pattern to match file paths that should be ignored by the file watcher in watch mode, or an array of them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsincludes"},"BettererOptionsIncludes")),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/glob#user-content-glob-primer"},"glob")," pattern to match file paths that should be included in an operation, or an array of them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionspaths"},"BettererOptionsPaths")),(0,l.kt)("td",{parentName:"tr",align:null},"A path to a ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/test-definition-file"},"test definition file")," containing ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," tests, or an array of them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsreporters"},"BettererOptionsReporters")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of names of npm packages that export a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererreporter"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererReporter")),", or ",(0,l.kt)("code",null,"object"),"s that implement ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererreporter"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererReporter")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsrunner"},"BettererOptionsRunner")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for when you create a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunner"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRunner"))," via the ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.runner"},(0,l.kt)("inlineCode",{parentName:"a"},"betterer.runner()")," API"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettereroptionsstart"},"BettererOptionsStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for when you run ",(0,l.kt)("strong",{parentName:"td"},"Betterer")," via the ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterer"},"JS API"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererprinter"},"BettererPrinter")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that converts a serialised test result into the string that will be saved in the ",(0,l.kt)("a",{parentName:"td",href:"https://phenomnomnominal.github.io/betterer/docs/results-file"},"results file"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererprogress"},"BettererProgress")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that converts a test result to a numeric value that represents the progress towards the goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultsummaries"},"BettererResultSummaries")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultsummary"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererResultSummary")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererresultsummary"},"BettererResultSummary")),(0,l.kt)("td",{parentName:"tr",align:null},"The summary of the result of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest"))," or ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererfiletest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererFileTest")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererruns"},"BettererRuns")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrun"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRun"),"s"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunsummaries"},"BettererRunSummaries")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererrunsummary"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererRunSummaries")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.bettererserialise"},"BettererSerialise")),(0,l.kt)("td",{parentName:"tr",align:null},"The function that converts from a ",(0,l.kt)("code",null,"DeserialisedType")," to a ",(0,l.kt)("code",null,"SerialisedType"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuitesummaries"},"BettererSuiteSummaries")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterersuitesummary"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererSuiteSummaries")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestconstraint"},"BettererTestConstraint")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that checks if a test result is ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/constraints.bettererconstraintresult"},(0,l.kt)("inlineCode",{parentName:"a"},"better"),", ",(0,l.kt)("inlineCode",{parentName:"a"},"worse"),", or the ",(0,l.kt)("inlineCode",{parentName:"a"},"same"))," than the expected result.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestdeadline"},"BettererTestDeadline")),(0,l.kt)("td",{parentName:"tr",align:null},"The date when the test should be completed by. The test will be marked as ",(0,l.kt)("code",null,"expired")," if it runs after the specified date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestfunction"},"BettererTestFunction")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that runs the actual test.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestgoal"},"BettererTestGoal")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that returns whether the test has met its goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestnames"},"BettererTestNames")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of test names.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestoptions"},"BettererTestOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for creating a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertestresultsummarydetails"},"BettererTestResultSummaryDetails")),(0,l.kt)("td",{parentName:"tr",align:null},"The summarised result of a ",(0,l.kt)("a",{parentName:"td",href:"/betterer/docs/betterer.betterertest"},(0,l.kt)("inlineCode",{parentName:"a"},"BettererTest")),".")))))}b.isMDXComponent=!0}}]);