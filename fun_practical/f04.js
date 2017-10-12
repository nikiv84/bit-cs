function humanizeIt(num) {
    if (num <= 0 || typeof num != "number") {
        return "Please enter a valid number.";
    }
    var str = "";
    var test = num % 100;
    var test2 = num % 10;
    if (test >= 11 && test <= 20) {
        return str += num + "th";
    } else if (num % 10 >= 0 || num % 10 <= 9) {
        switch (test2) {
            case 0:
                return str += num + "th";
            case 1:
                return str += num + "st";
            case 2:
                return str += num + "nd";
            case 3:
                return str += num + "rd";
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return str += num + "th";
        }
    }
}

console.log(humanizeIt(100000011));