/** Compiled By kissy-xtemplate */
KISSY.add('kissy-xtemplate/test-xtpl', function (S, require, exports, module) {
    /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true*/
    return function (scope, S, undefined) {
        var buffer = "",
            config = this.config,
            engine = this,
            moduleWrap, utils = config.utils;
        if (typeof module !== "undefined" && module.kissy) {
            moduleWrap = module;
        }
        var runBlockCommandUtil = utils.runBlockCommand,
            renderOutputUtil = utils.renderOutput,
            getPropertyUtil = utils.getProperty,
            runInlineCommandUtil = utils.runInlineCommand,
            getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
        buffer += '<h1>employees</h1>\n<ul>\n    ';
        var config0 = {};
        var params1 = [];
        var id2 = getPropertyUtil(engine, scope, "this", 0, 3);
        params1.push(id2);
        config0.params = params1;
        config0.fn = function (scope) {
            var buffer = "";
            buffer += '\n    <li>name: ';
            var id3 = getPropertyOrRunCommandUtil(engine, scope, {}, "name", 0, 4);
            buffer += renderOutputUtil(id3, true);
            buffer += '</li>\n    <li>age: ';
            var id4 = getPropertyOrRunCommandUtil(engine, scope, {}, "age", 0, 5);
            buffer += renderOutputUtil(id4, true);
            buffer += '</li>\n    <li>sex: ';
            var id5 = getPropertyOrRunCommandUtil(engine, scope, {}, "sex", 0, 6);
            buffer += renderOutputUtil(id5, true);
            buffer += '</li>\n    ';
            var config6 = {};
            var params7 = [];
            var id8 = getPropertyUtil(engine, scope, "title", 0, 7);
            params7.push(id8);
            config6.params = params7;
            config6.fn = function (scope) {
                var buffer = "";
                buffer += '\n    <li>title: ';
                var id9 = getPropertyOrRunCommandUtil(engine, scope, {}, "title", 0, 8);
                buffer += renderOutputUtil(id9, true);
                buffer += '</li>\n    ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config6, "if", 7);
            buffer += '\n    ';
            return buffer;
        };
        buffer += runBlockCommandUtil(engine, scope, config0, "each", 3);
        buffer += '\n</ul>';
        return buffer;
    };
});