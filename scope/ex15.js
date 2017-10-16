"use strict"
function print(str) {
    console.log(str);
}

var arr = ["Hello", "World", "in", "a", "frame"];

var frameIt = function (array) {
    var msg = '';
    var maxLenEl = array[0];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j].length > maxLenEl.length) {
                maxLenEl = array[j];
            }
        }
    }

    var maxLength = maxLenEl.length;

    for (var i = 0; i < maxLength + 4; i++) {
        if (i == maxLength + 3) {
            msg += '*\n';
            break;
        }
        msg += '*';
    }
    for (var i = 0; i < array.length; i++) {
        msg += '* ' + array[i];
        for (var j = 0; j < maxLength - array[i].length; j++) {
            msg += " ";
        }
        msg += " *\n";
    }
    for (var i = 0; i < maxLength + 4; i++) {
        if (i == maxLength + 3) {
            msg += '*\n';
            break;
        }
        msg += '*';
    }
    return msg;
}

print(frameIt(arr));