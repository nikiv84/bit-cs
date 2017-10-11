var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var b = ["a", "b", 3, [1,2,3]];

// for (var i in a) {
//     for (var j in a[i]) {
//         console.log(a[i][j]);
//     }
// }

function printIt(str) {
    console.log(str);
}

function printAnArray(arr) {
    if (arr instanceof Array) {
        var arrLength = arr.length;
        for (var i in arr) {
            if (arr[i] instanceof Array) {
                for (var j in arr[i]) {
                    printIt(arr[i][j]);
                }
            } else {
                printIt(arr[i]);
            }
        }
    }
}
printAnArray(b);