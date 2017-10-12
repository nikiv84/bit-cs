function multiples(min, max) {
    if (arguments.length < 2) {
        max = arguments[0];
        min = 0;
    }
    var sum = 0;
    for (min; min <= max; min++) {
        if (min % 3 == 0 && min % 5 == 0) {
            sum += min;
        }
    }
    return sum;
}

function printIt(str) {
    console.log(str);
}

printIt(multiples(450));