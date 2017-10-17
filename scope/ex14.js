"use strict";
function print(str) {
    console.log(str);
}
var BMI = function (weight, height) {
    var bmiindex = weight / (height * height);
    if (bmiindex < 15) {
        return "Starvation!";
    } else if (bmiindex < 17.5) {
        return "Anorexic!";
    } else if (bmiindex < 18.5) {
        return "Underweight!";
    } else if (bmiindex >= 18.5 && bmiindex < 25) {
        return "Ideal!";
    } else if (bmiindex >= 25 && bmiindex < 30) {
        return "Overweight!";
    } else if (bmiindex >= 30 && bmiindex < 40) {
        return "Obese!";
    } else {
        return "Morbidly obese!";
    }
}
print(BMI(100, 1.9));