
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function firstNPrimes(n) {
    var primes = [];
    var num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }

        num += 1;
    }

    return primes;
}

module.exports = firstNPrimes;