"use strict"
function print(str) {
    console.log(str);
}

var rotate = function(arr, num) {
    var res = [];
    for (var i = num, j=0; i < arr.length; i++) {
        res[j] = arr[i];
        j++;
    }
    for (var i = 0; i < num; i++) {
        res[j] = arr[i];
        j++;
    }
    return res;
}

var arr = [1,2,3,4,5,6];

print(rotate(arr, 3));