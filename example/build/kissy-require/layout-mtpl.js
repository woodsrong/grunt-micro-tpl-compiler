KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0;
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
            console.error("line", line);
            console.error("error", e.toString());
        }
    }
    return p;
}});