import * as foo$1 from 'external';
import foo__default from 'external';
export * from 'external';

var _missingExportShim = void 0;

const foo = 'bar';

var other = /*#__PURE__*/Object.freeze({
	__proto__: null,
	foo: foo,
	missing: _missingExportShim
});

console.log(foo__default, foo$1, other, bar, _missingExportShim);
var main = 42;

export { main as default };
