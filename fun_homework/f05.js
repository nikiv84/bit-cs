"use strict"
function print(str) {
    console.log(str);
}

var arr = [7, 9, 0, -2, 5, 6, 8];

function lastNElements(array, nOfElements) {
    nOfElements = nOfElements-- || 1;
    if (nOfElements>array.length) {
        return array;
    }
    var res = [];
    for (var i = array.length-nOfElements, j = 0; i < array.length; i++, j++) {
        res[j] = array[i];
    }
    return res;
}

print(lastNElements(arr, 10));