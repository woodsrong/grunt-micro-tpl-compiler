KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/kissy-require/layout.mtpl.html";
    try {
        line = 1;
        p += require("./header-mtpl")({
            desc: "I am desc"
        });
        line = 2;
        p += require("./body-mtpl")(data);
        line = 3;
        p += require("./footer-mtpl")();
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});