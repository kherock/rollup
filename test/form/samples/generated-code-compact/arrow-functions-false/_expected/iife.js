var bundle=(function(exports,defaultLegacy,externalAuto,externalDefault,externalDefaultOnly){'use strict';function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}function _interopDefault(e){return e&&e.__esModule?e:{'default':e}}function _interopNamespaceDefaultOnly(e){return Object.freeze({__proto__:null,'default':e})}function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}});}n["default"]=e;return Object.freeze(n);}var defaultLegacy__default=/*#__PURE__*/_interopDefaultLegacy(defaultLegacy);var externalAuto__default=/*#__PURE__*/_interopDefault(externalAuto);var externalDefault__namespace=/*#__PURE__*/_interopNamespaceDefault(externalDefault);var externalDefaultOnly__namespace=/*#__PURE__*/_interopNamespaceDefaultOnly(externalDefaultOnly);exports.a=void 0;

({ a: exports.a } = defaultLegacy.b);
console.log({ a: exports.a } = defaultLegacy.b);

import('external').then(console.log);
console.log(defaultLegacy__default["default"]);
console.log(externalAuto__default["default"]);
console.log(externalDefault__namespace);
console.log(externalDefaultOnly__namespace);Object.defineProperty(exports,'foo',{enumerable:true,get:function(){return defaultLegacy.foo}});Object.keys(defaultLegacy).forEach(function(k){if(k!=='default'&&!exports.hasOwnProperty(k))Object.defineProperty(exports,k,{enumerable:true,get:function(){return defaultLegacy[k]}})});Object.defineProperty(exports,'__esModule',{value:true});return exports;})({},defaultLegacy,externalAuto,externalDefault,externalDefaultOnly);