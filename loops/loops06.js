// var sum = 0;
// var i = 0;
// while (i <= 20) {
//     sum = sum + (i * i);
//     i++;
// }
// console.log(sum);

function printIt(str) {
    console.log(str);
}

function sumOfSquares(num) {
    var newnum = parseInt(num);
    if (typeof newnum == "string" || typeof newnum == "undefined" || typeof newnum == "NaN") {
        return "Please enter a number.";
    } else if (num instanceof Array) {
        var sum = 0;
        for (var i in num) {
            sum += Math.pow(num[i], 2);
        }
        return sum;
    } else {
        var sum = 0;
        var i = 0;
        while (i <= newnum) {
            sum += (i * i);
            i++;
        }
        return sum;
    }
}
printIt(sumOfSquares("abc"));