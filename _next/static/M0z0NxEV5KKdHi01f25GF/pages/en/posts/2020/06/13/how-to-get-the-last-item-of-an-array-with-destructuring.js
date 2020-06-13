(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return(a.a.createElement(i.Provider,{value:t},e.children))},p="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(l,".").concat(p)]||b[p]||O[p]||o;return n?a.a.createElement(f,c({ref:t},i,{components:n})):a.a.createElement(f,c({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"===typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Csu7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/posts/2020/06/13/how-to-get-the-last-item-of-an-array-with-destructuring",function(){return n("ZD8l")}])},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZD8l:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),l=n.n(o),c=n("7ljp"),s=(l.a.createElement,{title:"How to get the last item of an array with destructuring",description:"",cover:n("k71v")}),i={meta:s},u="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(u,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Today, we'll see a little trick to get the last item of an array with destructuring."),Object(c.b)("p",null,"As you may already know, ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"}),"destructuring")," is a way to unpack values from an array. It's really useful to create some variables really quickly."),Object(c.b)("p",null,"So let's say we've got an array of numbers like that:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const arr = [10, 20, 30, 40, 50]\n")),Object(c.b)("h2",null,"destructuring"),Object(c.b)("p",null,"In this array, we want the first element that we'll call ",Object(c.b)("inlineCode",{parentName:"p"},"a"),", so this is where destructuring will be useful:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a] = [10, 20, 30, 40, 50]\n")),Object(c.b)("p",null,"As you can imagine, ",Object(c.b)("inlineCode",{parentName:"p"},"a")," will return ",Object(c.b)("inlineCode",{parentName:"p"},"10"),"."),Object(c.b)("h2",null,"rest?"),Object(c.b)("p",null,"Now, we want to take the first one, the second one, but also the rest."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a, b, ...rest] = [10, 20, 30, 40, 50]\n")),Object(c.b)("p",null,"In this way, you'll get those returns:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a, b, ...rest] = [10, 20, 30, 40, 50]\n\nconsole.log(a) // 10\nconsole.log(b) // 20\nconsole.log(rest) // [30, 40, 50]\n")),Object(c.b)("p",null,"(By the way, ",Object(c.b)("inlineCode",{parentName:"p"},"rest")," can be call as you prefer as long as you use ",Object(c.b)("inlineCode",{parentName:"p"},"...")," before)."),Object(c.b)("h2",null,"slice"),Object(c.b)("p",null,"Now, and this is the trick of this post, we want the last item of this array. In other way, we want a variable with the value ",Object(c.b)("inlineCode",{parentName:"p"},"50"),"."),Object(c.b)("p",null,"For that, we'll use ",Object(c.b)("inlineCode",{parentName:"p"},"slice(-1)"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a] = [10, 20, 30, 40, 50].slice(-1)\n\nconsole.log(a) // 50\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"A little note, be careful with this way because using ",Object(c.b)("inlineCode",{parentName:"p"},"slice(-1)")," keeps you only the last item, so:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a, ...rest] = [10, 20, 30, 40, 50].slice(-1)\n\nconsole.log(a) // 50\nconsole.log(rest) // []\n")),Object(c.b)("h2",null,"reverse"),Object(c.b)("p",null,"Another way could be to use ",Object(c.b)("inlineCode",{parentName:"p"},"reverse()")," like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a, ...rest] = [10, 20, 30, 40, 50].reverse()\n\nconsole.log(a) // 50\nconsole.log(rest) // [40, 30, 20, 10]\n")),Object(c.b)("h2",null,"\ud83d\udca1 idea"),Object(c.b)("p",null,"The reason of this post is that I was a bit surprised at first not to be able to do:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [a, ...rest, z] = [10, 20, 30, 40, 50]\n\nconsole.log(a) // 10\nconsole.log(rest) // [20, 30, 40]\nconsole.log(z) // [50]\n")),Object(c.b)("p",null,"It sounded logical to me. I'd be interested of your point of view about this."),Object(c.b)("hr",null),Object(c.b)("p",null,"Hope you enjoyed the reading and you'll get fun with destructuring, it's really powerful. Bye!"))}b.isMDXComponent=!0},k71v:function(e,t){e.exports="/_next/static/images/cover-fb7dcfe6a9a8d4d5f1a7da2bea5c0d4a.jpg"},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["Csu7",0,1]]]);