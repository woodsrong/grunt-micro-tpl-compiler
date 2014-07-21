function (data) {
    var p = "";
    p += "<h1>I‘m a list</h1>  <ul>  ";
    for (var i = 0, l = data.length; i < l; i++) p += "   ";
    var cur = data[i] || {};
    p += "   <li>name: ";
    p += cur.name;
    p += "</li>   <li>age: ";
    p += cur.name;
    p += "</li>   <li>sex: ";
    p += cur.name;
    p += "</li>   ";
    if (cur.title) {
        p += "   <li>title: ";
        p += cur.title;
        p += "</li>   ";
    }
    p += "  </ul>";
    return p;
}