/**
 * @module Gruntfile
 * @author woodsrong@qq.com
 * @date 14-7-12
 */

module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        clean: {
            test: ['test/actual']
        },
        mtc: {
            options: {
				wrap: 'kissy'
            },
	        demo: {
		        expand: true,
		        cwd: 'demo/src',
		        src: '**/*.mtpl.html',
		        dest: 'demo/build',
		        ext: '-mtpl.js'
	        },
            test_wrap_default: {
                options: {
                    wrap: 'default'
                },
                src: 'test/fixtures/wrap/default.mtpl.html',
                dest: 'test/actual/wrap/default-mtpl.js'
            },
            test_wrap_nodejs: {
                options: {
                    wrap: 'nodejs'
                },
                src: 'test/fixtures/wrap/nodejs.mtpl.html',
                dest: 'test/actual/wrap/nodejs-mtpl.js'
            },
            test_wrap_requirejs: {
                options: {
                    wrap: 'requirejs'
                },
                src: 'test/fixtures/wrap/requirejs.mtpl.html',
                dest: 'test/actual/wrap/requirejs-mtpl.js'
            },
            test_wrap_seajs: {
                options: {
                    wrap: 'seajs'
                },
                src: 'test/fixtures/wrap/seajs.mtpl.html',
                dest: 'test/actual/wrap/seajs-mtpl.js'
            },
            test_wrap_kissy: {
                options: {
                    wrap: 'kissy'
                },
                src: 'test/fixtures/wrap/kissy.mtpl.html',
                dest: 'test/actual/wrap/kissy-mtpl.js'
            },
            test_wrap_function: {
                options: {
                    banner: '/** wrap with function */',
                    wrap: function(code) {
                        code = 'module.exports = ' + code;
                        return code;
                    }
                },
                src: 'test/fixtures/wrap/function.mtpl.html',
                dest: 'test/actual/wrap/function-mtpl.js'
            },
            test_with_banner: {
                options: {
                    wrap: 'nodejs',
                    banner: '/** compiled micro tpl */'
                },
                src: 'test/fixtures/banner.mtpl.html',
                dest: 'test/actual/banner-mtpl.js'
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['demo']);

    // Demo task.
    grunt.registerTask('demo', ['mtc:demo']);

    // Unit test task.
    // NOTE: We run the task twice to check for file overwrite issues.
    grunt.registerTask('test', ['clean:test', 'mtc', 'mtc', 'nodeunit']);
};