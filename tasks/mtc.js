/**
 * @module mtc task
 * @author woodsrong@qq.com
 * @date 2014-07-13
 */

module.exports = function (grunt) {
    'use strict';
    var compiler = require('./lib/compiler')
    var wrap = require('./lib/wrap')

    grunt.registerMultiTask('mtc', 'micro template compiler', function () {
        var options = this.options({
            wrap: 'default'
        });

        this.files.forEach(function (file) {
            file.src.map(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    return grunt.log.warn('Source file ' + filepath + ' not found.');
                }

                var
                    beforeCompileTimeStamp = new Date(),
                    src = grunt.file.read(filepath),
                    dest;

                options.filepath = filepath;

                try {
                    dest = compiler.process(src, options);
                    dest = wrap(dest, options);
                }
                catch (e) {
                    grunt.log.error('Compiled Error');
                    grunt.log.warn('Source mtpl filepath: "' + filepath + '"');
                    grunt.log.warn('Line Number: ' + e.line);
                    grunt.log.warn(e.message);
                    return;
                }

                if (dest.length === 0) {
                    return grunt.log.warn('Destination not written because compiled tpl was empty.');
                }

                if (options.banner) {
                    dest = options.banner + grunt.util.linefeed + dest;
                }

                grunt.file.write(file.dest, dest);
                grunt.log.writeln('File ' + file.dest + 'created  (' + ( new Date() - beforeCompileTimeStamp ) / 1000 + 's)');
            });
        });
    });
};