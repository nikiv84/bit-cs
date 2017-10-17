'use strict';
function squareIt(a) {
    return a * a;
}
function addOne(a) {
    return ++a;
}

function divide10(a) {
    return a / 10;
}

function multiplyBy2() {
    var result = [];
    var callback = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
        var currentElement = arguments[i];
        result[i] = callback(currentElement * 2);
    }
    return result;
}

function add1Divide10() {
    var result = [];
    var callback1 = arguments[arguments.length - 2];
    var callback2 = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 2; i++) {
        result[i] = divide10(addOne(arguments[i]));
    }
    return result;
}
function add1Divide10Arr(array) {
    var result = [];
    var callback1 = arguments[arguments.length - 2];
    var callback2 = arguments[arguments.length - 1];
    for (var i = 0, j =0; i < array.length; i++) {
        result[j] = callback2(callback1(array[i]));
        j++;
    }
    return result;
}

// console.log(multiplyBy2(2, 3, 4, 5, 6, 10, 12, squareIt));
// console.log(multiplyBy2(2, 3, 4, 5, 6, 10, 12, function (a){
//     return a*10;
// }));
// console.log(add1Divide10(2, 3, 4, 5, 6, addOne, divide10));
console.log(add1Divide10Arr(multiplyBy2(2, 3, 4, 5, 6, 10, 12, squareIt), addOne, divide10));