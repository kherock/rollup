import MagicString from 'magic-string';
import { BLANK } from '../../utils/blank';
import { NodeRenderOptions, RenderOptions } from '../../utils/renderHelpers';
import * as NodeType from './NodeType';
import FunctionNode from './shared/FunctionNode';

export default class FunctionExpression extends FunctionNode {
	type!: NodeType.tFunctionExpression;

	render(
		code: MagicString,
		options: RenderOptions,
		{ renderedSurroundingElement }: NodeRenderOptions = BLANK
	): void {
		super.render(code, options);
		// TODO Lukas how about arrow function expressions?
		if (renderedSurroundingElement === NodeType.ExpressionStatement) {
			code.appendRight(this.start, '(');
			code.prependLeft(this.end, ')');
		}
	}
}
