var grades = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]];
// var grades = [80, 77, 88, 95, 68];
// var names = ['David', 'Marko', 'Dany', 'John', 'Thomas'];

// var sum = 0;
// var avg = 0;
// var res = '';

// for (var index = 0; index < grades.length; index++) {
//     sum += grades[index];
// }
// avg = sum / grades.length;

function printIt(str) {
    console.log(str);
}

function gradeMe(avgrd) {
    if (avgrd <= 60) {
        return "F!";
    } else if (avgrd <= 70) {
        return "D!";
    } else if (avgrd <= 80) {
        return "C!";
    } else if (avgrd <= 90) {
        return "B!";
    } else if (avgrd <= 100) {
        return "A! Bravo!";
    } else {
        return "Error! Error!";
    }
}

function avgGrade(score) {
    var sum = 0;
    for (var i in score) {
        for (var j in score[i]) {
            if (!isNaN(score[i][j])) {
                sum += score[i][j];
            }
        }
    }
    var avg = sum / score.length;
    var res = "Average mark is " + avg + ", which represents a grade: " + gradeMe(avg);
    return res;
}

printIt(avgGrade(grades));

// for (var i in grades) {
//     for (var j in grades[i]) {
//         if (!isNaN(grades[i][j])) {
//             sum += grades[i][j];
//         }
//     }
// }

// avg = sum / grades.length;

// res += "Average mark is " + avg + ", which represents a grade: ";

// if (avg <= 60) {
//     res += "F!";
// } else if (avg <= 70) {
//     res += "D!";
// } else if (avg <= 80) {
//     res += "C!";
// } else if (avg <= 90) {
//     res += "B!";
// } else if (avg <= 100) {
//     res += "A! Bravo!";
// } else {
//     res = "Error! Error!";
// }

// console.log(res);

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