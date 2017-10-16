"use strict"
function print(str) {
    console.log(str);
}

function findWord(str, word) {
    str = str.toLowerCase();
    word = word.toLowerCase();
    var count = 0;
    var found = 0;
    for (var i = 0, j = 0; i < str.length; i++) {
        if (word[j] == str[i]) {
            count++;
            j++;
        } else {
            j = 0;
            count = 0;
        }
        if (count==word.length) {
            found++;
        }
    }
    if (found<1) {
        return "The word \"" + word + "\" hasn't been found.";
    }
    return "The word \"" + word + "\" has been found " + found + " time(s).";
}

print(findWord('aa, bb, cc, dd, aa', 'aa'));
print(findWord('The quick brown fox', 'fox'));