/**
 * @module compiler
 * @author woodsrong@qq.com
 * @date 2014-07-13
 */

'use strict';

var uglify = require('uglify-js');

module.exports = {
	/**
	 * process compile the codes
	 * @param code
	 * @param opts
	 * @returns {*}
	 */
	process: function (code, opts) {
		//get Variables
		var Variables = [
			// Global object properties
			// (http://www.ecma-international.org/publications/standards/Ecma-262.htm) 15.1
			'NaN', 'Infinity', 'undefined',
			'eval', 'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'decodeURI',
			'decodeURIComponent', 'encodeURI', 'encodeURIComponent',
			'Object', 'Function', 'Array', 'String', 'Boolean', 'Number',
			'Date', 'RegExp', 'Error', 'EvalError', 'RangeError',
			'ReferenceError', 'SyntaxError', 'TypeError', 'URIError',
			'Math', 'JSON',
			//..
			'undefined',
			//UserAgent global properties
			'Events', 'Navigator', 'Screen', 'History', 'Location', 'window', 'arguments',
			//common module argument
			'require', 'modue', 'exports'
		];

		var line = 0;

		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		// Generate a reusable function that will serve as a template
		// generator (and which will be cached).
		var tmp = 'function anonymous(data){var p = "", line = 0;' +
			// Introduce the data as local variables using with(){}
			'p +="' +
			// Convert the template into pure JavaScript
			code
				.replace(/(.*?)\r?\n/gm, function($0, $1) {
					return 'line = ' + (++line) + ';';
				})
				.replace(/[\t]/g, ' ')
				.split('<%').join('\t')
				//replace str ' to \\'
				.replace(/(?:(^|%>)([^\t]*))/g, function ($0, $1, $2) {
					return $1 + $2.replace(/('|\\)/g, '\\$1')
				})
				.replace(/\t=(.*?)%>/g, '"; p+=$1; p+=')
				.split('\t').join('";')
				.split('%>').join('p +="')
			+ '";return p;}';
		var ast = uglify.parse(tmp);

		var walker = new uglify.TreeWalker(function (node) {
			//Variables
			if (node instanceof uglify.AST_Var) {
				// string_template is a cute little function that UglifyJS uses for warnings
				for (var i = 0, item; item = node.definitions[i]; i++) {
					Variables.push(item.name.name);
				}
			}

			//function name
			if (node instanceof uglify.AST_Defun) {
				Variables.push(node.name.name);
			}

			//function arguments
			if (node instanceof uglify.AST_SymbolFunarg) {
				Variables.push(node.name);
			}
		});

		ast.walk(walker);

		var symbolMap = {};

		for (var i = 0, symbol; symbol = Variables[i]; i++) {
			symbolMap[symbol] = true;
		}

		// transform and print
		var withExpression = 'data';
		var transformer = new uglify.TreeTransformer(null, function (node) {
			//clear function name
			if (node instanceof uglify.AST_Defun) {
				if (node.name.name == 'anonymous') {
					node.name.name = '';
				}
			}

			//add data scope
			if (node instanceof uglify.AST_Symbol) {
				if (!symbolMap[node.name]) {
					node.name = withExpression + '.' + node.name
				}
			}
		});

		var transformedAst = ast.transform(transformer);

		//clear with
		// var withBody = ast2.body[0].body[1].body.body;
		// [].splice.apply(ast2.body[0].body, [1, 1].concat(withBody));

		return transformedAst.print_to_string({
			beautify: true
		}) || '';
	}
};