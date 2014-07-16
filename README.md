grunt-micro-tpl-compiler
=======================
> micro template compiler in Grunt version.

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

wrapper the compiled template codes, such as 'requirejs', 'nodejs', 'seajs', 'kissy' .etc.