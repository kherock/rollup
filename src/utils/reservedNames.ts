export interface NameCollection {
	[name: string]: true | null;
	__proto__: null;
}

export const RESERVED_NAMES: NameCollection = {
	__proto__: null,
	await: true,
	break: true,
	case: true,
	catch: true,
	class: true,
	const: true,
	continue: true,
	debugger: true,
	default: true,
	delete: true,
	do: true,
	else: true,
	enum: true,
	eval: true,
	export: true,
	extends: true,
	false: true,
	finally: true,
	for: true,
	function: true,
	if: true,
	implements: true,
	import: true,
	in: true,
	instanceof: true,
	interface: true,
	let: true,
	new: true,
	null: true,
	package: true,
	private: true,
	protected: true,
	public: true,
	return: true,
	static: true,
	super: true,
	switch: true,
	this: true,
	throw: true,
	true: true,
	try: true,
	typeof: true,
	undefined: true,
	var: true,
	void: true,
	while: true,
	with: true,
	yield: true
};
