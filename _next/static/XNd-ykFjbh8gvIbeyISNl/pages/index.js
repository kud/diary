(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"4gB5":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),u=n.n(a),i=o.a.createElement,c=function(t){t.lang;var e=t.title;return i(u.a,null,i("meta",{charSet:"utf-8"}),i("title",null,e?"".concat(e," | ").concat("Diary of the _kud"):"Diary of the _kud"),i("meta",{name:"description",content:"Diary of the _kud"}))};c.defaultProps={lang:"en"},e.a=c},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var l=s[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?a=!1:(p.add(f),r[l]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=a.default();function m(t){var e=t.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},"C+bE":function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},E9ED:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;e.a=function(t){var e=t.to;return o("meta",{httpEquiv:"refresh",content:"0;url=".concat(e)})}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("wTIg"),o=n("q1tI"),a=n.n(o),u=(n("8Kt/"),n("E9ED"),n("g5rd")),i=n("4gB5"),c=n("Zttt"),l=a.a.createElement,f=function(t){var e=t.children;return l(a.a.Fragment,null,l(i.a,{title:"Welcome"}),l(c.a,null,e))},s=a.a.createElement;var p=Object(r.a)("div",{target:"e1lpvpby0"})({name:"1gsqmhk",styles:"height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;"}),d=Object(r.a)("div",{target:"e1lpvpby1"})({name:"79elbk",styles:"position:relative;"}),m=Object(r.a)("div",{target:"e1lpvpby2"})({name:"1ujchxu",styles:"position:absolute;bottom:100%;left:50%;transform:translateX(-50%);padding-bottom:4rem;"}),v=Object(r.a)("a",{target:"e1lpvpby3"})({name:"13mu686",styles:'display:inline-block;padding:15px 20px;margin:0 20px;color:#333;font-size:3rem;border-bottom:2px dotted transparent;transition:border 300ms ease;text-decoration:none;font-family:"Libre Baskerville",serif;&:hover{border-bottom-color:#333;}'});e.default=function(){var t=function(t){localStorage.setItem("favourite-language",t)},e=localStorage.getItem("favourite-language");return e&&(window.location.href="/".concat(e,"/posts")),s(f,null,s(p,null,s(d,null,s(m,null,s(u.a,null)),s(v,{href:"/fr/posts",onClick:function(){t("fr")}},"fr_FR"),s(v,{href:"/en/posts",onClick:function(){t("en")}},"en_UK"))))}},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),u=n("48fX"),i=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){u(l,i);var c=f(l);function l(t){var a;return r(this,l),a=c.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}},Zttt:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=o.a.createElement;e.a=function(t){var e=t.children;return a(o.a.Fragment,null,e)}},g5rd:function(t,e,n){"use strict";var r=n("wTIg"),o=n("q1tI"),a=n.n(o).a.createElement,u=Object(r.a)("div",{target:"e5f7kyt0"})("width:",(function(t){return t.volume}),";height:",(function(t){return t.volume}),";display:block;border-radius:50%;border:3px solid #fff;box-shadow:0px 1px 1px rgba(0,0,0,0.3);overflow:hidden;cursor:pointer;transition:transform 150ms ease;&:hover{transform:translateY(-5px);}img{height:100%;width:100%;display:block;}");e.a=function(t){var e=t.size;return a(u,{volume:void 0===e?"200px":e},a("a",{href:"http://kud.io"},a("img",{src:"http://www.gravatar.com/avatar/e6eaeaa6da69e804c27c2d4cd55107e0?s=500",alt:""})))}},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},"m0L+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");t.exports=function(t){return r(t)||o(t)||a()}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}}},[["m0L+",0,1,2]]]);