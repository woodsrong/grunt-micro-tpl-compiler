KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0;
    p += "<h1>I‘m a list</h1> <ul> ";
    for (var i = 0, l = data.length; i < l; i++) {
        var cur = data[i] || {};
        line = 14;
        p += "  <li>name: ";
        p += cur.name;
        p += "</li>  <li>age: ";
        p += cur.name;
        p += "</li>  <li>sex: ";
        p += cur.name;
        p += "</li>  ";
        if (cur.title) {
            line = 14;
            p += "  <li>title: ";
            p += cur.title;
            p += "</li>  ";
        }
        line = 14;
        p += " ";
    }
    line = 14;
    p += " </ul>";
    return p;
}});