KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += "<h1>I‘m a list</h1>\n<ul>\n<%\nfor(var i = 0, l = data.length; i < l; i++) {\n	var cur = data[i] || {};\n%>\n	<li>name: <%= cur.name%></li>\n	<li>age: <%= cur.name%></li>\n	<li>sex: <%= cur.name%></li>\n	<% if(cur.title){ %>\n	<li>title: <%= cur.title%></li>\n	<% } %>\n<% } %>\n</ul>";
    return p;
}});