var bundle = (function (exports, foo) {
	'use strict';

	var _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { 'default': e };

	var foo__default = /*#__PURE__*/_interopDefaultLegacy(foo);

	console.log(foo__default["default"]);

	Object.keys(foo).forEach(k => {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: () => foo[k]
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, foo);
