"use strict"
function print(str) {
    console.log(str);
}

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequency(array) {
    var count = 0;
    var item;
    var countItem = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
        if (count > countItem) {
            countItem = count;
            item = array[i];
        }
        count = 0;
    }

    return "The most frequent item of the array is: " + item;
}

print(frequency(arr));