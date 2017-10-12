function replaceSpace(str, cha) {
    if (typeof cha == "undefined") {
        cha = "-";
    }
    var res = "";

    var space = ' ';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == space) {
            res += cha;
        } else {
            res += str[i];
        }
    }
    return res;
}


console.log(replaceSpace("My random string", "$"));