//importing express and body parser to take in data from POST request

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8001
const firstNPrimes = require('./getprime')
app.use(bodyParser.urlencoded({ extended: false }))
//allowing body parser to take in json data
app.use(bodyParser.json());


//creating POST request
app.post('/createdata', function (req, res) {
});

//creating GET request
app.get('/primes', function (req, res) {
    //outputting prime numbers 
    
    res.header("Content-Type", "text/plain");
    res.end(firstNPrimes(20).toString());
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
