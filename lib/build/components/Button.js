!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("lodash"),require("react")):"function"==typeof define&&define.amd?define("custom-components-lib",["lodash","react"],o):"object"==typeof exports?exports["custom-components-lib"]=o(require("lodash"),require("react")):t["custom-components-lib"]=o(t.lodash,t.react)}("undefined"!=typeof global?global:window,(function(t,o){return function(t){function o(o){for(var e,r,u=o[0],c=o[1],i=0,p=[];i<u.length;i++)r=u[i],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);for(l&&l(o);p.length;)p.shift()()}var e={},n={Button:0};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r.oe=function(t){throw console.error(t),t};var u=("undefined"!=typeof global?global:window).webpackJsonpcustom_components_lib=("undefined"!=typeof global?global:window).webpackJsonpcustom_components_lib||[],c=u.push.bind(u);u.push=o,u=u.slice();for(var i=0;i<u.length;i++)o(u[i]);var l=c;return r(r.s="./src/components/Button/Button.tsx")}({"./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */function(t,o,e){"use strict";e.r(o);var n,r=e(/*! react */"react"),u=e.n(r),c=(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return c(o,t),o.prototype.handleClick=function(){window.open("http://localhost:6060")},o.prototype.componentDidMount=function(){console.log("component did mount"),Promise.resolve().then(e.t.bind(null,/*! lodash */"lodash",7)).then((function(t){var o=t.default;console.log(o.ceil(4,1))}))},o.prototype.render=function(){return u.a.createElement("button",{onClick:this.handleClick},"Documentation")},o}(r.Component);o.default=i},lodash:
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(o,e){o.exports=t},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: Component, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=o}})}));
//# sourceMappingURL=Button.js.map