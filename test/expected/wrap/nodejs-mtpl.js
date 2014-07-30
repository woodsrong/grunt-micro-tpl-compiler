module.exports = function (data) {
    var p = "";
    p += "<h1>test options nodejs wrap</h1> <ul>     ";
    if (data.title) {
        p += "     <li>title: ";
        p += data.title;
        p += "</li>     ";
    }
    p += " </ul>";
    return p;
}