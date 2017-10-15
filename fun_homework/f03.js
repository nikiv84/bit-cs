function print(str) {
    console.log(str);
}

var myArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function foutFalsy(array) {
    var res = [];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (!!array[i]) {
            res[j] = array[i];
            j++;
        }
    }
    return res;
}

print(foutFalsy(myArr));