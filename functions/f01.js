function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function div(x, y) {
    return x / y;
}

function mult(x, y) {
    return x * y;
}

function mod(x, y) {
    return x % y;
}

function equal(x, y) {
    return x === y;
}

function print(x) {
    var str = "/////";
    var str2 = "\\\\\\\\\\";
    return str + x + str2;
}

console.log(print("AJjsnajsbna"));

function first(x) {
    var str = "";
    str += x;
    return str[0];
}
console.log(first(123));

function first2(x) {
    if (!isNaN(x)) {
        return null;
    }
    return x[0];
}
console.log(first2(123));

function smiley(x) {
    switch (x) {
        case ":)":
        case ":D":
            return ("Happy!");
        case ":(":
        case ":/":
        case ":\\":
            return ("Sad!");
        default:
            return ("Not a smiley!");
    }
}
console.log(smiley(":/"));