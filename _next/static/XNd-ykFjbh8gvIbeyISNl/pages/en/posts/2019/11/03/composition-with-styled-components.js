(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3mUf":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),c=n.n(a),s=n("7ljp"),i=(c.a.createElement,{title:"Composition with styled-components or emotion"}),l={meta:i},p="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"When I use ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.styled-components.com/"}),"styled-components")," or ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://emotion.sh/"}),"emotion"),", it often happens that I want to extend more than only one component to another one. But I don't only want to extend, I also want to extend in certain situations directly via props. So I read lots of issues on ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.styled-components.com/"}),"styled-components"),"' github page and I finally found a solution which I find great."),Object(s.b)("p",null,"Imagine this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// MyElement.js\nconst MyElement = styled.div``\n")),Object(s.b)("p",null,"Alright, you want know to extend it."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Base.js\nconst Base = styled.div``\n\n// MyElement.js\nconst MyElement = styled(Base)``\n")),Object(s.b)("p",null,"Lovely."),Object(s.b)("p",null,"But now, you want to extend it by another one again. Ha! Tough right?"),Object(s.b)("p",null,"The idea is to do that:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// base.js\nconst base = css``\n\n// anotherBase.js\nconst anotherBase = css``\n\n// MyElement.js\nconst MyElement = styled.div`\n  ${base}\n  ${anotherBase}\n`\n")),Object(s.b)("p",null,"Boom! \ud83d\udca5"),Object(s.b)("p",null,"Bonus: you could use it depending on certains props like:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// base.js\nconst base = css``\n\n// anotherBase.js\nconst anotherBase = css``\n\n// MyElement.js\nconst MyElement = styled.div`\n  ${base}\n\n  ${({ active }) =>\n    active &&\n    css`\n      ${anotherBase}\n    `}\n`\n")),Object(s.b)("p",null,"That's great, right?!"),Object(s.b)("p",null,"If you have any other idea to extend it in a better way, feel free to ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://twitter.kud.io"}),"contact me on Twitter"),". Thanks! Bye bye!"))}u.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return(o.a.createElement(l.Provider,{value:t},e.children))},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,y=u["".concat(c,".").concat(b)]||u[b]||f[b]||a;return n?o.a.createElement(y,s({ref:t},l,{components:n})):o.a.createElement(y,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[b]="string"===typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},"9ehU":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/posts/2019/11/03/composition-with-styled-components",function(){return n("3mUf")}])},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["9ehU",0,1]]]);