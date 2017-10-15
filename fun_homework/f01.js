function replaceString(str, newstr, position) {
    position = position || 1;
    var res = '';
    for (var i = 0; i < str.length; i++) {
        if (i == position - 1) {
            for (var j = 0; j < newstr.length; j++) {
                res += newstr[j];
            }
        }
        res += str[i];
    }
    return res;
}

console.log(replaceString("This is some string", " COOL"));