function conCat(str, num) {
    if ((num < 1) || (typeof num == "undefined")) {
        num = 1;
    }
    var msg = "";
    for (var i = 1; i <= num; i++) {
        msg += str + " ";
    }
    return msg;
}

function print(str) {
    console.log(str);
}

print(conCat("pera",-5));
