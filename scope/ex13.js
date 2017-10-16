"use strict"
function print(str) {
    console.log(str);
}

var greaterAvg = function (array) {
    var sum = 0;
    var avg;
    var res = [];
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / array.length;

    for (var i = 0, j = 0; i < array.length; i++) {
        if (array[i] > avg) {
            res[j] = array[i];
            j++;
        }
    }
    return "The average is " + avg + ". And the numbers greater than average are: " + res;
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var arr2 = [1, 2, 3, 4, 5];

print(greaterAvg(arr1));
print(greaterAvg(arr2));