(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},121:function(e,t,n){"use strict";var a=n(0),r=n(122);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},123:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(121),o=n(119),l=n(56),c=n.n(l),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(l),v=j[0],h=j[1],g=a.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=u&&O(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(118)),o=n(123),l=n(124),c={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation"},b={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Prerequisites",source:"@site/docs/installation.md",slug:"/installation",permalink:"/betterer/docs/installation",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/installation.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614393388,sidebar_label:"Installation",sidebar:"docs",previous:{title:"Introduction",permalink:"/betterer/docs/introduction"},next:{title:"Running Betterer",permalink:"/betterer/docs/running-betterer"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Adding <strong>Betterer</strong> to your project",id:"adding-betterer-to-your-project",children:[{value:"Init Options",id:"init-options",children:[]},{value:"Read more about Init",id:"read-more-about-init",children:[]}]},{value:"Installing <strong>Betterer</strong> dependencies",id:"installing-betterer-dependencies",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"You need at least ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js v12")," to install and run ",Object(i.b)("strong",{parentName:"p"},"Betterer"),"."),Object(i.b)("h2",{id:"adding-betterer-to-your-project"},"Adding ",Object(i.b)("strong",{parentName:"h2"},"Betterer")," to your project"),Object(i.b)("p",null,"The easiest way to get up and running with ",Object(i.b)("strong",{parentName:"p"},"Betterer")," is to use the ",Object(i.b)("inlineCode",{parentName:"p"},"init")," script via ",Object(i.b)("inlineCode",{parentName:"p"},"npx"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# Run this from the root of your project:\nnpx @betterer/cli init\n")),Object(i.b)("p",null,"Running this command will:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"@betterer/cli")," as a ",Object(i.b)("inlineCode",{parentName:"li"},"devDependency")," to your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")),Object(i.b)("li",{parentName:"ol"},"Add a ",Object(i.b)("inlineCode",{parentName:"li"},"betterer")," script to your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")),Object(i.b)("li",{parentName:"ol"},"Create a blank ",Object(i.b)("a",{parentName:"li",href:"./test-definition-file"},Object(i.b)("inlineCode",{parentName:"a"},".betterer.ts"))," file in the root of your project")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Running ",Object(i.b)("inlineCode",{parentName:"p"},"npx @betterer/cli init")," will modify your project's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, so you probably want to make sure all your changes are saved first!"))),Object(i.b)("h3",{id:"init-options"},"Init Options"),Object(i.b)("p",null,"You can pass the following options to the ",Object(i.b)("inlineCode",{parentName:"p"},"init")," script:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Option"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"-c"),", ",Object(i.b)("inlineCode",{parentName:"td"},"--config")," ","[path]"),Object(i.b)("td",{parentName:"tr",align:null},"Path to test definition file relative to CWD"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"./.betterer.ts"))))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Betterer")," uses TypeScript by default! If you pass a ",Object(i.b)("inlineCode",{parentName:"p"},"--config")," path that ends with ",Object(i.b)("inlineCode",{parentName:"p"},".js"),", JavaScript will be used instead and TypeScript will not be installed."))),Object(i.b)("h3",{id:"read-more-about-init"},"Read more about Init"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./test-definition-file"},"The test definition file"))),Object(i.b)("h2",{id:"installing-betterer-dependencies"},"Installing ",Object(i.b)("strong",{parentName:"h2"},"Betterer")," dependencies"),Object(i.b)("p",null,"You'll need to install the new dependency with your package manager of choice:"),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," to install ",Object(i.b)("inlineCode",{parentName:"p"},"@betterer/cli"))),Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," to install ",Object(i.b)("inlineCode",{parentName:"p"},"@betterer/cli")))),Object(i.b)("h2",{id:"thats-it"},"That's it!"),Object(i.b)("p",null,"You're all ready to go! \ud83c\udf89"))}u.isMDXComponent=!0}}]);