"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3947],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},6396:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(3117),a=r(7294),l=r(2389),o=r(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(9521),s=r(6010),c="tabItem_1uMI";function p(e){var t,r,n,l=e.lazy,o=e.block,p=e.defaultValue,f=e.values,m=e.groupId,d=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=b[0])?void 0:n.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,a.useState)(y),E=O[0],T=O[1],N=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=k[m];null!=C&&C!==E&&v.some((function(e){return e.value===C}))&&T(C)}var j=function(e){var t=e.currentTarget,r=N.indexOf(t),n=v[r].value;n!==E&&(x(t),T(n),null!=m&&w(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;r=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},d)},v.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":E===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:j,onClick:j},null!=r?r:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function f(e){var t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},4875:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return f},default:function(){return d}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),o=r(6396),i=r(8215),u=["components"],s={id:"filters",title:"Filters",sidebar_label:"Filters",slug:"/filters"},c=void 0,p={unversionedId:"filters",id:"filters",isDocsHomePage:!1,title:"Filters",description:"If you want to be selective about which tests run, you can use the --filter option, which can take mutliple values. Each filter should be a regular expression.",source:"@site/docs/filters.md",sourceDirName:".",slug:"/filters",permalink:"/betterer/docs/filters",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/filters.md",tags:[],version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1636753986,formattedLastUpdatedAt:"11/12/2021",frontMatter:{id:"filters",title:"Filters",sidebar_label:"Filters",slug:"/filters"},sidebar:"docs",previous:{title:"Results file",permalink:"/betterer/docs/results-file"},next:{title:"Betterer & TypeScript",permalink:"/betterer/docs/betterer-and-typescript"}},f=[],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you want to be selective about which tests run, you can use the ",(0,l.kt)("a",{parentName:"p",href:"./running-betterer#start-options"},(0,l.kt)("inlineCode",{parentName:"a"},"--filter"))," option, which can take mutliple values. Each filter should be a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expression"),"."),(0,l.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn betterer --filter my-test")," to run ",(0,l.kt)("strong",{parentName:"p"},"Betterer")," with a filter."),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn betterer --filter my-test --filter my-other-test")," to run ",(0,l.kt)("strong",{parentName:"p"},"Betterer")," with multiple filters.")),(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run betterer --filter my-test")," to run ",(0,l.kt)("strong",{parentName:"p"},"Betterer")," with a filter."),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run betterer --filter my-test --filter my-other-test")," to run ",(0,l.kt)("strong",{parentName:"p"},"Betterer")," with multiple filters."))),(0,l.kt)("p",null,"When running in ",(0,l.kt)("a",{parentName:"p",href:"./running-betterer#watch-mode"},"Watch mode"),", filters can be updated on the fly by first pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),", and then modifying the current filter."))}d.isMDXComponent=!0}}]);