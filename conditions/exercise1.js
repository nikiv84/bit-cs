var a = 0,
    b = -1,
    c = 4;
if (a > b) {
    if (a > c) {
        if (b > c) {
            console.log("Najveci broj je " + a + ", pa zatim " + b + ", pa potom " + c + ". :)");

        } else {
            console.log("Najveci broj je " + a + ", pa zatim " + c + ", pa potom " + b + ". :)");
        }
    } else {
        console.log("Najveci broj je " + c + ", pa zatim " + a + ", pa potom " + b + ". :)");
    }
} else {
    if (c > b) {
        console.log("Najveci broj je " + c + ", pa zatim " + b + ", pa potom " + a + ". :)");
    } else {
        if (a > c) {
            console.log("Najveci broj je " + b + ", pa zatim " + a + ", pa potom " + c + ". :)");
        } else {
            console.log("Najveci broj je " + b + ", pa zatim " + c + ", pa potom " + a + ". :)");
        }
    }
}