function print(str) {
    console.log(str);
}

function perfectNum(num) {
    if (num <= 0) {
        return "Please enter a valid number.";
    }
    var divs = [];
    var sum = 0;
    for (var i = 1, j = 0; i < num; i++) {
        if (num % i == 0) {
            divs[j] = i;
            j++;
        }
    }
    for (var i = 0; i < divs.length; i++) {
        sum += divs[i];
    }
    if (sum == num) {
        return "The number " + num + " is a perfect number.";
    }
    return "The number " + num + " is NOT a perfect number.";
}

print(perfectNum(14));