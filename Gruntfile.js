/**
 * @module Gruntfile
 * @author woodsrong@qq.com
 * @date 14-7-12
 */

module.exports = function (grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint']);
};