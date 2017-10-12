function lastCharPos(str, letter) {
    if (typeof str != "string" || typeof letter != "string") {
        return "Please enter a string.";
    }
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    letter = letter[0];
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] === letter) {
            return i + 1;
        }
    }
    return "-1";
}
function print(str) {
    console.log(str);
}
print(lastCharPos("peRa pera", ' '));

