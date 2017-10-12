function isString(str) {
    return typeof str == "string";
}

function print(str) {
    console.log(str);
}
var str = "12";


function isStringMsg(str) {
    if (isString(str)) {
        return str + " is a string."
    } else {
        return str + " is not a string."
    }
}

print(isStringMsg(str));