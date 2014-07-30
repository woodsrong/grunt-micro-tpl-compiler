/** wrap with function */
module.exports = function (data) {
    var p = "";
    p += "<h1>test options.wrap {function}</h1> <ul>     ";
    if (data.title) {
        p += "     <li>title: ";
        p += data.title;
        p += "</li>     ";
    }
    p += " </ul>";
    return p;
}