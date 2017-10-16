"use strict"
function print(str) {
    console.log(str);
}

var median = function (array) {
    var middle = array.length / 2;

    if (array.length % 2 == 0) {
        return "Median is " + (array[middle - 1] + array[middle]) / 2;
    } else {
        return "Median is " + array[parseInt(middle)];
    }
}
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
print(median(arr1));
print(median(arr2));