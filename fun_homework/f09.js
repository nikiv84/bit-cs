"use strict"

function print(str) {
    console.log(str);
}

function hideMyEmail(mail) {
    var hidden = '';
    var splitPos = 0;
    var pos;
    for (var i = 0; i < mail.length; i++) {
        if (mail[i] == "@") {
            pos = i;
            break;
        }
    }
    splitPos = Math.floor(pos / 2);
    for (var i = 0; i < pos; i++) {
        if (i == splitPos) {
            hidden += ".";
            splitPos++;
            continue;
        }
        hidden += mail[i];
    }
    for (var i = pos; i < mail.length; i++) {
        hidden += mail[i];
    }

    return hidden;
}

print(hideMyEmail("myemailaddress@bgit.rs"));