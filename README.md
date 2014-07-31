grunt-micro-tpl-compiler [![NPM version](https://badge.fury.io/js/grunt-micro-tpl-compiler.png)](http://badge.fury.io/js/grunt-micro-tpl-compiler) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
=======================
![Npm Downloads](https://nodei.co/npm/grunt-micro-tpl-compiler.png?downloads=true&stars=true)

micro template compiler in Grunt version.

> grunt micro template编译器，将micro template提前预编译为function，提升模板性能。编译后的模板可通过配置支持seajs,requirejs,kissy,nodejs模块化，也可以完全自定义配置项wrap配置编译后代码的前后包裹。`

## Features

* micro template uses js syntax directly, nearly zero learning costs
* Template enhance operational performance by compiling micro template
* Support template calls between each other
* Support running Both at client (browser) and server (nodejs) Because of using js syntax
* Support prompt of error message and line number in source template when compiled error
* Support prompt of error message and line number in source template when running into error

> * micro template直接使用js语法，近乎零学习成本
> * 通过编译micro template提升模板运行性能
> * 支持模板间互相调用
> * 因为使用js语法，支持同时运行在client(浏览器)端和server(nodejs)端
> * 支持模板编译报错提示错误信息，源模板行号
> * 支持模板运行错误时提示错误信息，源模板行号

## Getting Started
This plugin requires Grunt `^0.4.0`

```shell
npm install grunt-micro-tpl-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-micro-tpl-compiler');
```
## mtc task
_Run this task with the `grunt mtc` command._

###examples

```js
grunt.initConfig({
	mtc: {
		options: {
			wrap: 'kissy',
			banner: 'This is a compiled micro template.'
		},
		build: {
			expand: true,
			cwd: 'example/src',
			src: '**/*.mtpl.html',
			dest: 'example/dist',
			ext: '-mtpl.js'
		}
	}
});
```

### Options

#### banner

Type: `String`
Default: `''`

Prefix the compressed source with the given banner, with a linebreak inbetween.

#### lineNumber

Type: `Boolean`
Default: `false`

Support prompt of line number in source template when running error, default is false.

#### wrap

Type: `String|Object|function`
Choices: `'nodejs'`, `'requirejs'`, `'seajs'`, `'kissy'`, `'default'`, `{before: '', after: ''}` or
```js
function(code) {
    //do something
    return code;
}
```
Default: `default`
```js
/**
 * options.wrap {Object}
 */
wrap {
    before: 'KISSY.add(function (S, require, exports, module) {\n module.exports = ',
    after: '});'
}
```
wrapper the compiled template codes, such as 'requirejs', 'nodejs', 'seajs', 'kissy' .etc.

## Thanks
thanks to [grunt-tplcompile](https://github.com/atrl/grunt-tplcompile) project by [atrl](https://github.com/atrl), most of the code of this project are copied & modified from it when project started.

## Release History

 * 2014-08-01   v0.1.0 release first beta version.

 > * 2014-08-01   v0.1.0 发布第一个beta试用版
