"use strict"
function print(str) {
    console.log(str);
}

var average = function (num) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

print(average(1, 2, 3, 4, 5, 6, 7, 8));