KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/kissy-require/footer.mtpl.html";
    try {
        p += "<footer>&copy; 2014</footer>";
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});