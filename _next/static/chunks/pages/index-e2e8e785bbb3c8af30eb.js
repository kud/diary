_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},"4gB5":function(t,e,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("g4pe")),a=n.n(o),i=function(t){t.lang;var e=t.title,n=t.cover,o=t.description,i=e?"".concat(e," | ").concat("Diary of the _kud"):"Diary of the _kud",c=n?"http://diary.kud.io".concat(n):"https://www.gravatar.com/avatar/e6eaeaa6da69e804c27c2d4cd55107e0?s=1024",u=o||"Diary of the _kud";return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:i}),Object(r.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"/favicon.png"}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:title",content:i}),Object(r.jsx)("meta",{property:"og:url",content:"http://diary.kud.io"}),Object(r.jsx)("meta",{property:"og:description",content:u}),Object(r.jsx)("meta",{property:"og:image",content:c}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"twitter:title",content:i}),Object(r.jsx)("meta",{name:"twitter:site",content:"@_kud"}),Object(r.jsx)("meta",{name:"twitter:description",content:o}),Object(r.jsx)("meta",{name:"twitter:image",content:c}),Object(r.jsx)("meta",{name:"description",content:u})]})};i.defaultProps={lang:"en"},e.a=i},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var f=p[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var b=h;e.default=b},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},E9ED:function(t,e,n){"use strict";var r=n("nKUr");e.a=function(t){var e=t.to;return Object(r.jsx)("meta",{httpEquiv:"refresh",content:"0;url=".concat(e)})}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),o=n("DZdY"),a=(n("q1tI"),n("g4pe"),n("E9ED"),n("g5rd")),i=n("4gB5"),c=n("Zttt"),u=function(t){var e=t.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:"Welcome"}),Object(r.jsx)(c.a,{children:e})]})};var s=Object(o.a)("div",{target:"e1lpvpby3",label:"Wrapper"})({name:"1d2i958",styles:"height:100vh;width:100vw;display:flex;align-items:center;justify-content:center"}),f=Object(o.a)("div",{target:"e1lpvpby2",label:"Container"})({name:"bjn8wh",styles:"position:relative"}),l=Object(o.a)("div",{target:"e1lpvpby1",label:"AvatarBox"})({name:"16r2rig",styles:"position:absolute;bottom:100%;left:50%;transform:translateX(-50%);padding-bottom:4rem"}),p=Object(o.a)("a",{target:"e1lpvpby0",label:"EntryLink"})({name:"13mu686",styles:'display:inline-block;padding:15px 20px;margin:0 20px;color:#333;font-size:3rem;border-bottom:2px dotted transparent;transition:border 300ms ease;text-decoration:none;font-family:"Libre Baskerville",serif;&:hover{border-bottom-color:#333;}'});e.default=function(){var t=function(t){localStorage.setItem("favourite-language",t)},e=localStorage.getItem("favourite-language");return e?(window.location.href="/".concat(e,"/posts"),Object(r.jsx)("span",{})):Object(r.jsx)(u,{children:Object(r.jsx)(s,{children:Object(r.jsxs)(f,{children:[Object(r.jsx)(l,{children:Object(r.jsx)(a.a,{})}),Object(r.jsx)(p,{href:"/fr/posts",onClick:function(){t("fr")},children:"fr_FR"}),Object(r.jsx)(p,{href:"/en/posts",onClick:function(){t("en")},children:"en_UK"})]})})})}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){i(n,t);var e=s(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},Zttt:function(t,e,n){"use strict";var r=n("nKUr");n("q1tI");e.a=function(t){var e=t.children;return Object(r.jsx)(r.Fragment,{children:e})}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},g4pe:function(t,e,n){t.exports=n("8Kt/")},g5rd:function(t,e,n){"use strict";var r=n("nKUr"),o=n("DZdY"),a=(n("q1tI"),Object(o.a)("div",{target:"e5f7kyt0",label:"Root"})("width:",(function(t){return t.volume}),";height:",(function(t){return t.volume}),";display:block;border-radius:50%;border:3px solid #fff;box-shadow:0px 1px 1px rgba(0, 0, 0, 0.3);overflow:hidden;cursor:pointer;transition:transform 150ms ease;&:hover{transform:translateY(-5px);}img{height:100%;width:100%;display:block;}"));e.a=function(t){var e=t.size,n=void 0===e?"200px":e;return Object(r.jsx)(a,{volume:n,children:Object(r.jsx)("a",{href:"http://kud.io",children:Object(r.jsx)("img",{src:"https://www.gravatar.com/avatar/e6eaeaa6da69e804c27c2d4cd55107e0?s=500",alt:""})})})}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,1,2]]]);