var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var str = "";

// for (var index = 0; index < x.length; index++) {
//         str = str + x[index];
// }
// console.log(str);

// var i = 0;
// while (i < x.length) {
//         str = str + x[i];
//         i++;
// }
// console.log(str);

function makeAString(arr) {
        if (typeof arr == "undefined") {
                return "Please try again with  a different variable.";
        } else if (arr instanceof Array) {
                var str = "";
                var i = 0;
                while (i < arr.length) {
                        str = str + arr[i];
                        i++;
                }
                return str;
        } else if (!isNaN(arr)) {
                str = "";
                str += arr;
                return str;

        } else if (typeof arr == "string") {
                return arr;
        }
        else {
                return "Error!!!";
        }
}

function printIt(str) {
        console.log(str);
}

printIt(makeAString(123.14));