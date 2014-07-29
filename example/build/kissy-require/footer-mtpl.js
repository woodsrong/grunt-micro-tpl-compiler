KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0;
    try {
        line = 1;
        p += "<footer>&copy; 2014</footer>";
    } catch (e) {
        if (window.console) {
            console.error("line", line);
            console.error("error", e.toString());
        }
    }
    return p;
}});