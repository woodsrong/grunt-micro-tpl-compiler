/**
 * @module Gruntfile
 * @author woodsrong@qq.com
 * @date 14-7-12
 */

module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        mtc: {
            options: {

            },
            build: {
                src: '',
                dest: ''
            }
        },
        watch: {

        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['jshint']);

    // Demo task.
    grunt.registerTask('demo', ['jshint']);
};