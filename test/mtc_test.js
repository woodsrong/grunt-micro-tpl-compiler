/**
 * @Module mtc Unit Test
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2014-07-22.
 */

'use strict';

var grunt = require('grunt');

exports.mtc = {
    main: function(test) {
        test.expect(1);
        test.ok(true, 'main is ok!');
        test.done();
    },
    wrap_default: function(test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/wrap/default-mtpl.js');
        var result = grunt.file.read('test/actual/wrap/default-mtpl.js');
        test.equal(expect, result, 'options wrap default test ok!');

        test.done();
    },
    wrap_nodejs: function(test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/wrap/nodejs-mtpl.js');
        var result = grunt.file.read('test/actual/wrap/nodejs-mtpl.js');
        test.equal(expect, result, 'options wrap nodejs test ok!');

        test.done();
    },
    wrap_requirejs: function(test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/wrap/requirejs-mtpl.js');
        var result = grunt.file.read('test/actual/wrap/requirejs-mtpl.js');
        test.equal(expect, result, 'options wrap requirejs test ok!');

        test.done();
    },wrap_seajs: function(test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/wrap/seajs-mtpl.js');
        var result = grunt.file.read('test/actual/wrap/seajs-mtpl.js');
        test.equal(expect, result, 'options wrap seajs test ok!');

        test.done();
    },
    wrap_kissy: function(test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/wrap/kissy-mtpl.js');
        var result = grunt.file.read('test/actual/wrap/kissy-mtpl.js');
        test.equal(expect, result, 'options wrap kissy test ok!');

        test.done();
    },
    with_banner: function(test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/banner-mtpl.js');
        var result = grunt.file.read('test/actual/banner-mtpl.js');
        test.equal(expect, result, 'options banner test ok!');

        test.done();
    }
};