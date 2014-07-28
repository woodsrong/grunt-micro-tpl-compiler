KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += "";
    p += require("./header-mtpl")({
        desc: "I am desc"
    });
    p += "";
    p += "";
    p += require("./body-mtpl")(data);
    p += "";
    p += "";
    p += require("./footer-mtpl")();
    p += "";
    return p;
}});