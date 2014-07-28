KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += '<div class="bd">';
    p += "    <h1>I'm body</h1>";
    p += "    <p>";
    p += data.desc;
    p += "</p>";
    p += "</div>";
    return p;
}});