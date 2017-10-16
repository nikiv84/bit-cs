function print(str) {
    console.log(str);   
}

function yearsToRetirement(yob) {
    if (typeof yob != "number" || yob <=0) {
        return "Please enter a valid number."
    }
    var ret = 65 - (2017 - yob);
    if ( ret <= 0) {
        return "Person is already retired.";
    }
    return ret + " year(s) till retirement.";
}

print(yearsToRetirement(1991));