function print(str) {
    console.log(str);
}

function reverseNum(num) {
    var str = num + "";
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return parseInt(res);
}

print(reverseNum(12345));
print(typeof reverseNum(12345));