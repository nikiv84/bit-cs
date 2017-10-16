function print(str) {
    console.log(str);
}

function yearsToRetirement(yob, sex) {
    if (typeof yob != "number" || yob <= 0 || arguments.length<2) {
        return "Error! Please try again."
    }
    sex = sex[0].toLowerCase();
    var margin;
    switch (sex) {
        case "m":
            margin = 65;
            break;
        case "f":
            margin = 60;
            break;
        default:
            return "Please enter M for male or F for female.";
    }
    var ret = margin - (2017 - yob);
    if (ret <= 0) {
        return "Person is already retired.";
    }
    return ret + " year(s) till retirement.";
}

print(yearsToRetirement(1984, "MALE"));