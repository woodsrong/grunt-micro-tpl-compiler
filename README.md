grunt-micro-tpl-compiler
=======================
> micro template compiler in Grunt version.
> grunt micro template编译器，将micro template提前预编译为function，提升模板性能。编译后的模板可通过配置支持seajs,requirejs,kissy,nodejs模块化，也可以完全自定义配置项wrap配置编译后代码的前后包裹。

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

### Options

#### banner

Type: `String`
Default: `null`

Prefix the compressed source with the given banner, with a linebreak inbetween.

#### wrap

Type: `String|Object`
Default: `default`
```js
/**
 * wrap options
 */
wrap {
    before: 'KISSY.add(function (S, require, exports, module) {\n module.exports = ',
    after: '});'
}
```
wrapper the compiled template codes, such as 'requirejs', 'nodejs', 'seajs', 'kissy' .etc.