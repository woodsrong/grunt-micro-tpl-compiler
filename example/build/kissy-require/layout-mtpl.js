KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += "";
    p += require("./header-mtpl")({
        desc: "I am desc"
    });
    p += "  ";
    p += require("./body-mtpl")(data);
    p += "  ";
    p += require("./footer-mtpl")();
    p += "";
    return p;
}});