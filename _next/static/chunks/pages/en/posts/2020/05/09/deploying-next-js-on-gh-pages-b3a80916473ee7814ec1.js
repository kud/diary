_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,y=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return n?o.a.createElement(y,c(c({ref:t},l),{},{components:n})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},"9be0":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n("rePB"),o=n("Ff2n"),a=(n("q1tI"),n("7ljp"));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"Deploying Next.js on gh-pages",description:"Oops, Jekyll.",cover:"https://i.imgur.com/N2kq4mf.png"},l={meta:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",c(c(c({},l),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wow, this is my first page with ",Object(a.b)("a",c({parentName:"p"},{href:"https://nextjs.org/"}),"Next.js"),". I'm so glad of it! \ud83d\ude4c"),Object(a.b)("p",null,"And as it is my first deploy on GitHub too, I had just a little problem with ",Object(a.b)("a",c({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages"),"."),Object(a.b)("p",null,"Indeed, as you could know, ",Object(a.b)("a",c({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages")," use ",Object(a.b)("a",c({parentName:"p"},{href:"https://jekyllrb.com/"}),"Jekyll")," as default, and one of theirs convention is to use ",Object(a.b)("inlineCode",{parentName:"p"},"_")," as prefix of any folder which are used for the templating, not the final ",Object(a.b)("inlineCode",{parentName:"p"},"dist"),". Sounds not bad like that, but ",Object(a.b)("a",c({parentName:"p"},{href:"https://nextjs.org/"}),"Next.js")," also uses a folder called ",Object(a.b)("inlineCode",{parentName:"p"},"_next")," for distributed assets."),Object(a.b)("p",null,"So yeah, the first time I deployed my blog, it was so weird, no assets were available. \ud83d\ude31"),Object(a.b)("p",null,"I finally found ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/"}),"the solution on the GitHub blog"),"."),Object(a.b)("p",null,"You simply must add an empty file called ",Object(a.b)("inlineCode",{parentName:"p"},".nojekyll")," in order that GitHub doesn't think you're in a ",Object(a.b)("a",c({parentName:"p"},{href:"https://jekyllrb.com/"}),"Jekyll")," environment. Done!"),Object(a.b)("p",null,"By the way, if you use the excellent command line ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/tschaub/gh-pages"}),"gh-pages"),", do not forget to use the parameter ",Object(a.b)("inlineCode",{parentName:"p"},"--dotfiles")," to also deploy this new file."))}u.isMDXComponent=!0},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},c0w3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/posts/2020/05/09/deploying-next-js-on-gh-pages",function(){return n("9be0")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["c0w3",0,1]]]);