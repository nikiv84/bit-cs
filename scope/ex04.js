"use strict"
function print(str) {
    console.log(str);
}

var returnDigits = function (num) {
    var numString = num + "";
    var arr = [];
    for (var i = numString.length - 1, j = 0; i >= 0; i--) {
        arr[j] = numString[i];
        j++
    } return arr;
}

print(returnDigits(123456));