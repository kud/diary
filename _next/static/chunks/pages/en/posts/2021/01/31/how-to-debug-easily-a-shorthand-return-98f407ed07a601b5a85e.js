_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,y=s["".concat(c,".").concat(f)]||s[f]||b[f]||a;return n?o.a.createElement(y,i(i({ref:t},p),{},{components:n})):o.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},ByfB:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n("rePB"),o=n("Ff2n"),a=(n("q1tI"),n("7ljp"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"How to easily debug a shorthand return",description:"like a map().",cover:n("vAhg")},p={meta:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",i(i(i({},p),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"See this code:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),'const arr = [\n  {\n    title: "ha",\n    another: "thing",\n  },\n  {\n    title: "oh",\n    another: "stuff",\n  },\n  {\n    title: "hey",\n    another: "person",\n  },\n]\n\nconst MyComponent = () => (\n  <div>\n    {arr.map((item) => (\n      <div>{item.title}</div>\n    ))}\n  </div>\n)\n')),Object(a.b)("p",null,"As you can see, you've got here a shorthand return for your ",Object(a.b)("inlineCode",{parentName:"p"},"Array.map()"),"."),Object(a.b)("p",null,"But for a reason you want to debug ",Object(a.b)("inlineCode",{parentName:"p"},"item")," without uncoding this shorthand and code a classic return like ",Object(a.b)("inlineCode",{parentName:"p"},"arr.map(item => { return ... })"),"."),Object(a.b)("p",null,"This is my solution:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-diff"}),"const MyComponent = () => (\n  <div>\n    {arr.map((item) => (\n+     console.log(item),\n      <div>{item.title}</div>\n    ))}\n  </div>\n)\n")),Object(a.b)("p",null,"Yyyyyes."),Object(a.b)("p",null,"This can be possible because we use the comma operator (",Object(a.b)("inlineCode",{parentName:"p"},","),") which evaluates any expression and will return the last element."),Object(a.b)("p",null,"Nice trick, isn't it?"))}l.isMDXComponent=!0},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},eZqi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/posts/2021/01/31/how-to-debug-easily-a-shorthand-return",function(){return n("ByfB")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vAhg:function(e,t){e.exports="/_next/static/images/cover-c9792dbffe627cf12d903eb9d71cb75b.jpg"}},[["eZqi",0,1]]]);