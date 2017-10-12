function isString(str) {
    return typeof str == "string";
}

function print(str) {
    console.log(str);
}

function isBlank(str) {
    if (isString(str)) {
        if (str.length < 1) {
            return "This is a blank string.";
        } else {
            return str + " is string with letters.";
        }
    } else {
        return str + " is not a string.";
    }
}

print(isBlank(""));