KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/code-style/test1.mtpl.html";
    try {
        line = 1;
        p += '<option value="">请选择城市...</option>';
        line = 2;
        for (var i = 0; i < (data.subArea && data.subArea.length || 0); i++) {
            line = 3;
            p += '<option value="';
            p += data.subArea[i].code;
            p += '" ';
            if (data.subCode && data.subCode == data.subArea[i].code) {
                p += 'selected="selected"';
            }
            if (!data.subCode && i === 0) {
                p += 'selected="selected"';
            }
            p += ">";
            p += data.subArea[i].name;
            p += "</option>";
            line = 4;
        }
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});