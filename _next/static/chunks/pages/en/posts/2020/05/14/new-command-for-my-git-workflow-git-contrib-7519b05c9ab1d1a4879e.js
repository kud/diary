_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},Af2X:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n("rePB"),o=n("Ff2n"),a=(n("q1tI"),n("7ljp"));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"$ git contrib",description:"A new command for my git worflow.",cover:"https://i.imgur.com/AOSAOax.png"},l={meta:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",c(c(c({},l),r),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You probably don't know me so much but I love when something is perfect, shiny, well designed. Yes, some people could say I'm a maniac. Anyway. \ud83d\ude1c"),Object(a.b)("p",null,"So why we're here today. We are here today because I want to talk about how to make a good fork on GitHub (or whatever but my command only works on GitHub yet) to contribute to a project and not to have an alternative of this one."),Object(a.b)("p",null,"Indeed, when you fork, you could have two ideas behind:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Because you want to make your own version of this project"),Object(a.b)("li",{parentName:"ul"},"Because you want to contribute by making some PRs to this project where you aren't not a maintainer (yet?)")),Object(a.b)("p",null,"This is the second case we're interested."),Object(a.b)("p",null,"If you fork only because you want to contribute, in my opinion, you should notify any visitor that it is not a project they can use."),Object(a.b)("p",null,"And as developer, you won't care so much about your ",Object(a.b)("inlineCode",{parentName:"p"},"master")," branch, you won't update it, you won't use it to make your PR, you only will only submit feature branches, one by one."),Object(a.b)("p",null,"So. How to do this?"),Object(a.b)("p",null,"We'll make the command step-by-step."),Object(a.b)("p",null,"First of all, we fork a project via ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/cli/cli"}),"this great cli command"),":"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-shell"}),"#! /usr/bin/env zsh\n\ngh repo fork $1 --clone\n")),Object(a.b)("p",null,"Fine. Now we want to create the ",Object(a.b)("inlineCode",{parentName:"p"},"master")," branch as an orphan one where we notify the user it is not a real project, just a contribution."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-shell"}),'#! /usr/bin/env zsh\n\ngh repo fork $1 --clone\n\n{...}\n\ngit co -b tmp &&\ngit branch -D master &&\ngit checkout --orphan master &&\ngit branch -D tmp &&\ngit rm -rf . &&\nrm \'.gitignore\' &> /dev/null\necho "**Repository used only for submitting PRs. \ud83d\ude4c**" > README.md &&\ngit add README.md &&\ngit commit -a -m "Initial Commit" &&\ngit push -f origin master\n')),Object(a.b)("p",null,"As you can read, we create a temporary branch, we delete ",Object(a.b)("inlineCode",{parentName:"p"},"master"),", we recreate master as orphan, we remove any tracked files, and we create a commit with only a README saying what we want to notify. And finally we force push it."),Object(a.b)("p",null,"This is what we've got:"),Object(a.b)("img",{src:n("smv6")}),Object(a.b)("p",null,"Now if anyone goes to your fork project, they know it is not an extended one, just your base to contribute."),Object(a.b)("p",null,"The final script. We just need a way to get to name of the project to open it in the shell."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-shell"}),'#! /usr/bin/env zsh\n\n# ex: git contrib git@github.com:gajus/create-index.git\n\nREPO_SPLIT_SLASH=${${1}[(ws:/:)2]}\nREPO_SPLIT_DOT=${${REPO_SPLIT_SLASH}[(ws:.:)1]}\nREPO=$REPO_SPLIT_DOT\n\ngh repo fork $1 --clone &&\ncd $REPO &&\n\ngit co -b tmp &&\ngit branch -D master &&\ngit checkout --orphan master &&\ngit branch -D tmp &&\ngit rm -rf . &&\nrm \'.gitignore\' &> /dev/null\necho "**Repository used only for submitting PRs. \ud83d\ude4c**" > README.md &&\ngit add README.md &&\ngit commit -a -m "Initial Commit" &&\ngit push -f origin master\n')),Object(a.b)("p",null,"And how to use it:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"$ git contrib git@github.com:gajus/create-index.git")),Object(a.b)("p",null,"You'll get a new project called there ",Object(a.b)("inlineCode",{parentName:"p"},"create-index")," as folder with those settings for remote:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-shell"}),"# $ git remote -v\n\norigin  git@github.com:kud/create-index.git (fetch)\norigin  git@github.com:kud/create-index.git (push)\nupstream  git@github.com:gajus/create-index.git (fetch)\nupstream  git@github.com:gajus/create-index.git (push)\n")),Object(a.b)("p",null,"So clean! \ud83d\ude4c\ud83c\udffb"),Object(a.b)("p",null,"Now we're good and can contribute to lots of projecs, oh yeaaaaaah."),Object(a.b)("p",null,"Want to see all my git commands? This is on my ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/kud/my/tree/master/bin/git"}),"environment manager project"),"."))}s.isMDXComponent=!0},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Hx8z:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/posts/2020/05/14/new-command-for-my-git-workflow-git-contrib",function(){return n("Af2X")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},smv6:function(e,t){e.exports="/_next/static/images/fork-project-2304d76c578ed5d901fb44e5132f5368.png"}},[["Hx8z",0,1]]]);