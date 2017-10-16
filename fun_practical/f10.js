function replaceSpace(str, sep) {
    if (typeof cha == "undefined") {
        sep = "-";
    }
    var res = "";
    var space = ' ';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == space) {
            res += sep;
        } else {
            res += str[i];
        }
    }
    return res;
}


console.log(replaceSpace("My random string", "_"));