KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0;
    p += '<div class="bd">     <h1>I\'m body</h1>     <p>';
    p += data.desc;
    p += "</p> </div>";
    return p;
}});