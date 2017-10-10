var grades = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]];
// var grades = [80, 77, 88, 95, 68];
// var names = ['David', 'Marko', 'Dany', 'John', 'Thomas'];

var sum = 0;
var avg = 0;
var res = '';

// for (var index = 0; index < grades.length; index++) {
//     sum += grades[index];
// }
// avg = sum / grades.length;

for (var i in grades) {
    for (var j in grades[i]) {
        if (j == 1) {
            sum = sum + grades[i][j];
        }
    }
}

avg = sum / grades.length;

res += "Average mark is " + avg + ", which represents a grade: ";

if (avg <= 60) {
    res += "F!";
} else if (avg <= 70) {
    res += "D!";
} else if (avg <= 80) {
    res += "C!";
} else if (avg <= 90) {
    res += "B!";
} else if (avg <= 100) {
    res += "A! Bravo!";
} else {
    res = "Error! Error!";
}

console.log(res);

// for (var i = 0; i < grades.length; i++) {
//     if (grades[i] < 60) {
//         console.log(names[i] + ": F!");
//     } else if (grades[i] < 70) {
//         console.log(names[i] + ": D!");
//     } else if (grades[i] < 80) {
//         console.log(names[i] + ": C!");
//     } else if (grades[i] < 90) {
//         console.log(names[i] + ": B!");
//     } else if (grades[i] <= 100) {
//         console.log(names[i] + ": A! Bravo!");
//     } else {
//         console.log("Error! Error!");
//     }
// }