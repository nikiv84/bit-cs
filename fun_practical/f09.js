function isPrime(num) {
    if (isNaN(num) || num <= 1) {
        return "Please enter a valid number."
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return num + " is a composite number."
        }
    }
    return num + " is a prime number."
<<<<<<< HEAD
}

console.log(isPrime(14));
=======

}

console.log(isPrime(11));
>>>>>>> bf3d7c7b756e2c725f37ee7e730527eef25f9057
