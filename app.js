//importing express and body parser to take in data from POST request

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8001
app.use(bodyParser.urlencoded({ extended: false }))
//allowing body parser to take in json data
app.use(bodyParser.json());


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


//creating GET request
app.get('/primes', function (req, res) {
    //outputting prime numbers
    res.json({ "first 20 primes numbers": firstNPrimes(20) })
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
