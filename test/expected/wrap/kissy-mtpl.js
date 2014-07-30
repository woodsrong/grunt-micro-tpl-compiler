KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "";
    p += "<h1>test options kissy wrap</h1> <ul>     ";
    if (data.title) {
        p += "     <li>title: ";
        p += data.title;
        p += "</li>     ";
    }
    p += " </ul>";
    return p;
}});