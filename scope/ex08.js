"use strict";
function print(str) {
    console.log(str);
}

var maximum = function (array) {
    var newArray = [];
    var minMax = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        if (typeof array[i] != "number" || isNaN(array[i]) || !isFinite(array[i])) {
            continue;
        } else {
            newArray[j] = array[i];
            j++;
        }
    }
    var max = newArray[0];
    var min = newArray[0];
    for (var i = 1; i < newArray.length; i++) {
        max = (newArray[i] > max) ? newArray[i] : max;
        min = (newArray[i] < min) ? newArray[i] : min;
    }

    var minimumMaximum = {
        "minimum": min,
        "maximum": max
    };
    // minMax[0] = min;
    // minMax[1] = max;
    
    // return minMax;
    return minimumMaximum;
}


var arr = ["a", -12156, 3.14, "Fizz", null, false, NaN, 9856, 0, -256, true, undefined, 782345, Infinity, -Infinity, ''];

print(maximum(arr));