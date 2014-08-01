KISSY.add('kissy-xtemplate/test-mtpl', function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "src/tpl/widget/test.mtpl.html";
    p += "<h1>employees</h1>  <ul>      ";
    for (var i = 0, l = data.length; i < l; i++) {
        var cur = data[i] || {};
        p += "      <li>name: ";
        p += cur.name;
        p += "</li>      <li>age: ";
        p += cur.name;
        p += "</li>      <li>sex: ";
        p += cur.name;
        p += "</li>      ";
        if (cur.title) {
            p += "      <li>title: ";
            p += cur.title;
            p += "</li>      ";
        }
        p += "      ";
    }
    p += "  </ul>";
    return p;
}});