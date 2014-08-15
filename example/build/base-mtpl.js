KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/base.mtpl.html";
    try {
        line = 1;
        var a;
        p += "<h1>I‘m a list</h1>";
        p += "<ul>";
        line = 4;
        line = 5;
        for (var i = 0, l = data.length; i < l; i++) {
            line = 6;
            var cur = data[i] || {};
            line = 7;
            line = 8;
            p += " <li>name: ";
            p += cur.name;
            p += "</li>";
            line = 9;
            p += " <li>age: ";
            p += cur.name;
            p += "</li>";
            line = 10;
            p += " <li>sex: ";
            p += cur.name;
            p += "</li>";
            line = 11;
            p += " ";
            if (cur.title) {
                line = 12;
                p += " <li>title: ";
                p += cur.title;
                p += "</li>";
                line = 13;
                p += " ";
            }
            line = 14;
        }
        p += "</ul>";
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});