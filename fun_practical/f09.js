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

}

console.log(isPrime(11));