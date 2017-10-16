"use strict"
function print(str) {
    console.log(str);
}

var vowels = function (str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
        }
    }
    if (count < 1) return "There are no wovels in the sentence.";
    return "There are " + count + " wovels in the sentence.";
}

print(vowels("Thhhhhhhhhhrrrrr."));