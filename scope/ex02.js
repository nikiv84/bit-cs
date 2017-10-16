"use strict"
function print(str) {
    console.log(str);
}

var combine = function (arr1, arr2) {
    var newArr = [];
    var arrLength = arr1.length + arr2.length;
    var k = 0;
    for (var i = 0, j = 0; i <= arrLength; i++) {
        if (i % 2 === 0) {
        newArr[i] = arr1[j];
        j++;
    } else {
        newArr[i] = arr2[k];
        k++;
    }

    }

    return newArr;
}


var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];
print(combine(arr1, arr2));