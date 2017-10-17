'use strict';

// var output = toString(0.15);
var output = stringMe(0.15);

console.log(output);

function stringMe (num) {
    var result = num + '';
    return result;
}

var toString = stringMe;