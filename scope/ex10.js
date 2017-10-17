"use strict";
function print(str) {
    console.log(str);
}

var mostFrequent = function (array) {
    var count = 0;
    var currCount = 0;
    var element;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
        if (count > currCount) {
            currCount = count;
            element = array[i];
        }
        count = 0;
    }
    return element;
}
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9];
print(mostFrequent(arr));