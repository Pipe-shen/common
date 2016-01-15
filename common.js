function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

String.prototype.format = function() {
    for (var t = this,
    e = 0; e < arguments.length; e++) {
        var n = new RegExp("\\{" + e + "\\}", "gi");
        t = t.replace(n, arguments[e])
    }
    return t
}
