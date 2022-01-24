"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[46],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],a={sidebar_position:9,title:"Configuration"},p=void 0,c={unversionedId:"Guide/config",id:"Guide/config",title:"Configuration",description:"Configuration is provided by Cosmiconfig, so lage configuration is very flexible! We recommend the use of a lage.config.js because it is both concise and flexible.",source:"@site/docs/Guide/config.md",sourceDirName:"Guide",slug:"/Guide/config",permalink:"/docs-new/docs/Guide/config",editUrl:"https://github.com/microsoft/lage/docs-new/docs/Guide/config.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Priorities",permalink:"/docs-new/docs/Guide/priority"},next:{title:"CLI usage",permalink:"/docs-new/docs/Guide/cli"}},s=[{value:"Options",id:"options",children:[{value:"CacheOptions",id:"cacheoptions",children:[],level:3},{value:"ConfigOptions",id:"configoptions",children:[{value:"cache",id:"cache",children:[],level:4},{value:"cacheOptions",id:"cacheoptions-1",children:[],level:4},{value:"ignore",id:"ignore",children:[],level:4},{value:"npmClient",id:"npmclient",children:[],level:4},{value:"pipeline",id:"pipeline",children:[],level:4},{value:"priorities",id:"priorities",children:[],level:4},{value:"repoWideChanges",id:"repowidechanges",children:[],level:4}],level:3},{value:"Pipeline",id:"pipeline-1",children:[],level:3},{value:"Pipelines",id:"pipelines",children:[],level:3},{value:"Priority",id:"priority",children:[{value:"package",id:"package",children:[],level:4},{value:"priority",id:"priority-1",children:[],level:4},{value:"task",id:"task",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configuration is provided by ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cosmiconfig"},"Cosmiconfig"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"lage")," configuration is very flexible! We recommend the use of a ",(0,o.kt)("inlineCode",{parentName:"p"},"lage.config.js")," because it is both concise and flexible."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"lage.config.js")," file and place all your configurations there:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  pipeline: {\n    build: ["^build"],\n    test: ["build"],\n  },\n};\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"cacheoptions"},"CacheOptions"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: BackfillCacheOptions & { environmentGlob: string[] }")),(0,o.kt)("h3",{id:"configoptions"},"ConfigOptions"),(0,o.kt)("h4",{id:"cache"},"cache"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: boolean")),(0,o.kt)("p",null,"Should cache be enabled"),(0,o.kt)("h4",{id:"cacheoptions-1"},"cacheOptions"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: ",(0,o.kt)("a",{parentName:"em",href:"#CacheOptions"},"CacheOptions"))),(0,o.kt)("p",null,"Backfill cache options"),(0,o.kt)("h4",{id:"ignore"},"ignore"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: string[]")),(0,o.kt)("p",null,"Which files to ignore when calculating scopes with --since"),(0,o.kt)("h4",{id:"npmclient"},"npmClient"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'type: "npm" | "yarn" | "pnpm"')),(0,o.kt)("p",null,"Which NPM Client to use when running npm lifecycle scripts"),(0,o.kt)("h4",{id:"pipeline"},"pipeline"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: ",(0,o.kt)("a",{parentName:"em",href:"#Pipeline"},"Pipeline"))),(0,o.kt)("p",null,'Defines the task pipeline, prefix with "^" character to denote a topological dependency'),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  build: ["^build"],\n  test: ["build"],\n  lint: []\n}\n')),(0,o.kt)("h4",{id:"priorities"},"priorities"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: ",(0,o.kt)("a",{parentName:"em",href:"#Priority"},"Priority"),"[]")),(0,o.kt)("p",null,"Optional priority to set on tasks in a package to make the scheduler give priority to tasks on the critical path for high priority tasks"),(0,o.kt)("h4",{id:"repowidechanges"},"repoWideChanges"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: string[]")),(0,o.kt)("p",null,"disables --since flag when any of this list of files changed"),(0,o.kt)("h3",{id:"pipeline-1"},"Pipeline"),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: Map<string, ",(0,o.kt)("a",{parentName:"em",href:"#Pipeline"},"Pipeline"),">")),(0,o.kt)("h3",{id:"priority"},"Priority"),(0,o.kt)("h4",{id:"package"},"package"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: string")),(0,o.kt)("p",null,"package name, as in package.json"),(0,o.kt)("h4",{id:"priority-1"},"priority"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: number")),(0,o.kt)("p",null,"priority, the higher the more priority; undefined priority means lowest priority"),(0,o.kt)("h4",{id:"task"},"task"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type: string")),(0,o.kt)("p",null,"task name, as listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," section of package.json"))}d.isMDXComponent=!0}}]);