System.register('bundle', ['external'], (function (exports, module) {
	'use strict';
	var b;
	return {
		setters: [(function (module) {
			b = module.b;
		})],
		execute: (function () {

			let a; exports('a', a);

			(function (v) { return exports('a', a), v; })({a} = b);
			console.log(function (v) { return exports('a', a), v; }({a} = b));

			module.import('external').then(console.log);

		})
	};
}));
