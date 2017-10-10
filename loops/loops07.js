var grades = [80, 77, 88, 95, 68];
var names = ['David', 'Marko', 'Dany', 'John', 'Thomas'];

for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 60) {
        console.log(names[i] + ": F!");
    } else if (grades[i] < 70) {
        console.log(names[i] + ": D!");
    } else if (grades[i] < 80) {
        console.log(names[i] + ": C!");
    } else if (grades[i] < 90) {
        console.log(names[i] + ": B!");
    } else if (grades[i] <= 100) {
        console.log(names[i] + ": A! Bravo!");
    } else {
        console.log("Error!");
    }
}