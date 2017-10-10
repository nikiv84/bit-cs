var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var str = "";

// for (var index = 0; index < x.length; index++) {
//         str = str + x[index];
// }
// console.log(str);

var i = 0;
while (i < x.length) {
        str = str + x[i];
        i++;
}
console.log(str);