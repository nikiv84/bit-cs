function stringToArray(str) {
    if (typeof str !== "string") {
        return "Please enter a string."
    }
    var res = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            res[i] = null;
        } else {
            res[i] = str[i];
        }
    }
    return res;
}

console.log(stringToArray(" c "));