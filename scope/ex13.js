"use strict";
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
    return "The average is " + avg + ". The numbers greater than the average are: " + res;
}

var arr = [1, 2, 3, 4, 5];


print(greaterAvg(arr));