KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0;
    try {
        line = 1;
        p += "<header>I'm header</header>";
    } catch (e) {
        if (window.console) {
            console.error("line", line);
            console.error("error", e.toString());
        }
    }
    return p;
}});