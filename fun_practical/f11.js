function getNChars(str, n) {
    if (typeof str != "string" || arguments.length < 2 || n <= 0) {
        return "Error! Please try again."
    }
    var res = '';
    for (var i = 0; i < n; i++) {
        res += str[i];
    }
    return res + "...";
}

console.log(getNChars("Fuck off", 1));