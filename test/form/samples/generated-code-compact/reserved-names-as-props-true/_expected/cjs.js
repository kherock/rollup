'use strict';Object.defineProperty(exports,'__esModule',{value:true});var external=require('external');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k];}});}});}n['default']=e;return Object.freeze(n);}var external__namespace=/*#__PURE__*/_interopNamespace(external);var external__default=/*#__PURE__*/_interopDefaultLegacy(external);var other = {
	foo: 'bar'
};var ns=/*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null),other,{default:other}));console.log(ns, other.foo, other.function, other["some-prop"], external.function);
console.log(undefined, undefined);

exports.function = 1;
exports.function++;Object.defineProperty(exports,'bar',{enumerable:true,get:function(){return external.function}});exports.default=external__namespace;Object.defineProperty(exports,'void',{enumerable:true,get:function(){return external__default.default}});