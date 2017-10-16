"use strict"
function print(str) {
    console.log(str);
}

var firstMiddleLast = function (array) {
    var isEven = (array.length % 2 == 0);
    var middle = array.length / 2;
    var first = array[0];
    var last = array[array.length - 1];
    var res = [];

    if (isEven) {
        res[0] = first;
        res[1] = last;
        return res;
    } else {
        res[0] = first;
        res[1] = array[parseInt(middle)];
        res[2] = last;
        return res;
    }
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

print(firstMiddleLast(arr1));
print(firstMiddleLast(arr2));