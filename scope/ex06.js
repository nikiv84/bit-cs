"use strict";
function print(str) {
    console.log(str);
}

var celsToFar = function(temp) {
    return temp * 1.8 + 32;
}

print(celsToFar(20));