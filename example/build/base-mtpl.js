KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += "";
    var header;
    p += "";
    p += "<h1>I‘m a list</h1>";
    p += "<ul>";
    p += "";
    p += "";
    p += "";
    for (var i = 0, l = data.length; i < l; i++) {
        p += "";
        p += "";
        var cur = data[i] || {};
        p += "";
        p += "";
        p += "";
        p += " <li>name: ";
        p += cur.name;
        p += "</li>";
        p += " <li>age: ";
        p += cur.name;
        p += "</li>";
        p += " <li>sex: ";
        p += cur.name;
        p += "</li>";
        p += " ";
        if (cur.title) {
            p += "";
            p += " <li>title: ";
            p += cur.title;
            p += "</li>";
            p += " ";
        }
        p += "";
        p += "";
    }
    p += "";
    p += "</ul>";
    return p;
}});