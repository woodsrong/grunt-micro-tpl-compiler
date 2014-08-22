KISSY.add('kissy-xtemplate/test-mtpl', function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += "<h1>employees</h1> <ul> ";
    for (var i = 0, l = data.length; i < l; i++) {
        var cur = data[i] || {};
        p += " <li>name: ";
        p += cur.name;
        p += "</li> <li>age: ";
        p += cur.age;
        p += "</li> <li>sex: ";
        p += cur.sex;
        p += "</li> ";
        if (cur.title) {
            p += " <li>title: ";
            p += cur.title;
            p += "</li> ";
        }
        p += " ";
    }
    p += " </ul>";
    return p;
}});