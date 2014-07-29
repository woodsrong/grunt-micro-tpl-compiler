KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0;
    try {
        line = 1;
        p += "<h1>I‘m a list</h1>";
        line = 2;
        p += "<p>";
        p += data.name;
        p += "</p>";
        line = 3;
        p += "<p>children is not defined, will prompt error in console when runing</p>";
        line = 4;
        p += "<p>";
        p += data.children.name;
        p += "</p>";
        line = 5;
        p += "</ul>";
    } catch (e) {
        if (window.console) {
            console.error("line", line);
            console.error("error", e.toString());
        }
    }
    return p;
}});