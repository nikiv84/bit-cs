"use strict"
function print(str) {
    console.log(str);
}

function createArray (num, element) {
    num = num || 1;
    if (num<=0) {
        return "Please enter a valid number.";
    }
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = element;
    }
    return arr;
}

print(createArray(10, "test"));