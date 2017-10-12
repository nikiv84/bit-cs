function countMe(str, letter) {
    if (typeof str != "string" || typeof letter != "string") {
        return "Please enter a string.";
    }
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            counter++;
        }
    }
    return counter;
}
function print(str) {
    console.log(str);
}
print(countMe("My random string.", "g"));