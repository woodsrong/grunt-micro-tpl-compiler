KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/kissy-require/body.mtpl.html";
    try {
        line = 1;
        p += '<div class="bd">';
        line = 2;
        p += "    <h1>I'm body</h1>";
        line = 3;
        p += "    <p>";
        p += data.desc;
        p += "</p>";
        line = 4;
        p += "</div>";
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});