"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[57],{2237:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return b}});var n=a(7462),r=a(3366),i=a(7294),l=a(3905),o=a(7273);o.Z.initialize({startOnLoad:!0});var p=function(e){var t=e.chart;return(0,i.useEffect)((function(){o.Z.contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)},s=["components"],d={sidebar_position:2,title:"How does `lage` work?"},c="How does `lage` work?",u={unversionedId:"Guide/levels",id:"Guide/levels",title:"How does `lage` work?",description:"So how does lage make builds faster? To fully appreciate how lage gives you the best build performance compared to other monorepo task runners, take a look at this example. Here we have a repo with this dependency graph:",source:"@site/docs/Guide/levels.md",sourceDirName:"Guide",slug:"/Guide/levels",permalink:"/docs-new/docs/Guide/levels",editUrl:"https://github.com/microsoft/lage/docs-new/docs/Guide/levels.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"How does `lage` work?"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs-new/docs/Guide/getting-started"},next:{title:"Scoped builds",permalink:"/docs-new/docs/Guide/scopes"}},b=[{value:"Level 1: Typical Lerna or Workspace Runners",id:"level-1-typical-lerna-or-workspace-runners",children:[],level:2},{value:"Level 2: Scoping",id:"level-2-scoping",children:[],level:2},{value:"Level 3. Caching",id:"level-3-caching",children:[],level:2},{value:"Level 4. Pipelining",id:"level-4-pipelining",children:[],level:2}],_={toc:b};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-does-lage-work"},"How does ",(0,l.kt)("inlineCode",{parentName:"h1"},"lage")," work?"),(0,l.kt)("p",null,"So how does ",(0,l.kt)("inlineCode",{parentName:"p"},"lage")," make builds faster? To fully appreciate how ",(0,l.kt)("inlineCode",{parentName:"p"},"lage")," gives you the best build performance compared to other monorepo task runners, take a look at this example. Here we have a repo with this dependency graph:"),(0,l.kt)(p,{chart:"\ngraph TD\n  FooCore --\x3e BuildTool\n  BarCore --\x3e BuildTool\n  FooApp1 --\x3e FooCore\n  FooApp2 --\x3e FooCore\n  BarPage --\x3e BarCore\n",mdxType:"Mermaid"}),(0,l.kt)("h2",{id:"level-1-typical-lerna-or-workspace-runners"},"Level 1: Typical Lerna or Workspace Runners"),(0,l.kt)("p",null,"First, let's take a look at the typical workspace runners. ",(0,l.kt)("inlineCode",{parentName:"p"},"Lerna"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm recursive"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"rush")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"wsrun"),' all will run one task at a time. This creates a sort of "build phase" effect where ',(0,l.kt)("inlineCode",{parentName:"p"},"test")," scripts are not allowed to run until ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"gantt\n  title Level 1: Typical Lerna or Workspace Runners\n  dateFormat  s\n  axisFormat  %S\n\nsection Total\n\nprepare: active, total_prepare, 0, 30s\nbuild : active, total_build, after total_prepare, 50s\ntest : active, total_test, after total_build, 25s\n\n    section BuildTool\n\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after total_prepare, 10s\n    test   : bt_test, after total_build, 6s\n\n    section FooCore\n\n    prepare: fc_prepare, after bt_prepare, 10s\n    build: fc_build, after bt_build, 15s\n    test: fc_test, after total_build, 25s\n\nsection FooApp1\n\n    prepare: fa1_prepare, after fc_prepare, 10s\n    build: fa1_build, after fc_build, 25s\n    test: fa1_test, after total_build, 15s\n\nsection FooApp2\n\n    prepare: fa2_prepare, after fc_prepare, 10s\n    build: fa2_build, after fc_build, 12s\n    test: fa2_test, after total_build, 8s\n\nsection BarCore\n\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: bc_build, after bt_build, 10s\n    test: bc_test, after total_build, 16s\n\nsection BarPage\n\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bc_build, 25s\n    test: bp_test, after total_build, 12s\n")),(0,l.kt)("h2",{id:"level-2-scoping"},"Level 2: Scoping"),(0,l.kt)("p",null,'One of the first way to speeding up build jobs is to use "scoping". Usually a change only affect a subset of the graph. We can get rid of the builds of ',(0,l.kt)("inlineCode",{parentName:"p"},"FooCore"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FooApp1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"FooApp2")," if the only changes are inside ",(0,l.kt)("inlineCode",{parentName:"p"},"BarCore"),". However, we'll note that ",(0,l.kt)("inlineCode",{parentName:"p"},"BarPage")," is still affected, resulting in this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"gantt\n  title Level 2: Scoping\n  dateFormat  s\n  axisFormat  %S\n\n  section Total\n    Level 1: 0, 105s\n  prepare: active, total_prepare, 0, 30s\n    build  : active, total_build, after total_prepare, 45s\n  test  : active, total_test, after total_build, 16s\n\n\n    section BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after total_prepare, 10s\n    test   : bt_test, after total_build, 6s\n\n    section FooCore\n    skipped: 0\n\n  section FooApp1\n    skipped: 0\n\n  section FooApp2\n    skipped: 0\n\n  section BarCore *\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: bc_build, after bt_build, 10s\n    test: bc_test, after total_build, 16s\n\n  section BarPage\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bc_build, 25s\n    test: bp_test, after total_build, 12s\n")),(0,l.kt)("h2",{id:"level-3-caching"},"Level 3. Caching"),(0,l.kt)("p",null,"To further improve build times, we can take advantage of build caches. If we had previously built certain packages, we should be able to speed up the build with a cache. Here, the ",(0,l.kt)("inlineCode",{parentName:"p"},"BarCore")," packages have already been built and tested, and so"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"gantt\n  title Level 3: Caching\n  dateFormat  s\n  axisFormat  %S\n\n  section Total\n    Level 1: 0, 105s\n    Level 2: 0, 91s\n  prepare: active, total_prepare, 0, 30s\n    build  : active, total_build, after total_prepare, 37s\n  test  : active, total_test, after total_build, 12s\n\n    section BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after total_prepare, 10s\n    test   : bt_test, after total_build, 6s\n\n    section FooCore\n    skipped: 0\n\n  section FooApp1\n    skipped: 0\n\n  section FooApp2\n    skipped: 0\n\n  section BarCore\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: crit, bc_build, after bt_build, 2s\n    test: crit, bc_test, after total_build, 2s\n\n  section BarPage *\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bc_build, 25s\n    test: bp_test, after total_build, 12s\n")),(0,l.kt)("h2",{id:"level-4-pipelining"},"Level 4. Pipelining"),(0,l.kt)("p",null,"Finally, the last thing we can to speed things up is to break down the wall between build phases from the task runner. In ",(0,l.kt)("inlineCode",{parentName:"p"},"lage"),", we define the relationship between scripts in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline")," configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"gantt\n  title Level 4: Pipelining\n  dateFormat  s\n  axisFormat  %S\n\n  section Total\n    Level 1: 0, 105s\n    Level 2: 0, 91s\n    Level 3: 0, 79s\n  prepare: active, total_prepare, 0, 30s\n    build  : active, total_build, 10, 45s\n  test  : active, total_test, 20, 47s\n\n    section BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after bt_prepare, 10s\n    test   : bt_test, after bt_build, 6s\n\n    section FooCore\n    skipped: 0\n\n  section FooApp1\n    skipped: 0\n\n  section FooApp2\n    skipped: 0\n\n  section BarCore\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: bc_build, after bt_build, 2s\n    test: bc_test, after bc_build, 2s\n\n  section BarPage *\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bp_prepare, 25s\n    test: bp_test, after bp_build, 12s\n")))}f.isMDXComponent=!0}}]);