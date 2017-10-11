var i = 0;
// while (i <= 100) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// }

function printIt(str) {
    console.log(str);
}

function isDivisible_3_5(num) {
    var i = 0;
    while (i <= num) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            printIt("FizzBuzz");
        } else if (i % 3 == 0) {
            printIt("Fizz");
        } else if (i % 5 == 0) {
            printIt("Buzz");
        } else {
            printIt(i);
        }
        i++;
    }
}

// isDivisible_3_5(100);

function isDivisible(num1, num2, num3) {
    switch (arguments.length) {
        case 0:
        case 1:
        case 2:
            return printIt("Please enter 3 parameters");
        case 3:
            var i = 0;
            while (i <= num3) {
                if ((i % num1 == 0) && (i % num2 == 0)) {
                    printIt("FizzBuzz");
                } else if (i % num1 == 0) {
                    printIt("Fizz");
                } else if (i % num3 == 0) {
                    printIt("Buzz");
                } else {
                    printIt(i);
                }
                i++;
            }
        default:
            return printIt("Error!");

    }


}

isDivisible(3, 5);