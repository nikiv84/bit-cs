function print(str) {
    console.log(str);
}

function toNumArr(str) {
    var res = [];
    for (var i = 0, j = 0; i < str.length; i++) {
        var strnum = parseInt(str[i]);
        if (typeof strnum === "number" && !isNaN(strnum)) {
            res[j] = strnum;
            j++;
        }
    }
    return res;
}

print(toNumArr("I was born in 1984, which is 33 years ago."));