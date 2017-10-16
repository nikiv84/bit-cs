"use strict"
function print(str) {
    console.log(str);
}

var multiplicationTable = function () {
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            console.log(i + " * " + j + " = " + i * j);
        }
    }
}

print(multiplicationTable());