#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";

function isPrime(n) {
    if (n < 2)
	return false;

    /**
     * An integer is prime if it is not divisible by any integer less than or equal to its square root
     **/
    var limit = Math.sqrt(n);

    for (var i = 2; i <= limit; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var candidate;
var primes_found = 0;

for (candidate = 2; primes_found < 100; candidate++) {
   if (isPrime(candidate)) {
        primes_found++;
        fs.appendFileSync(outfile, candidate);
        if (primes_found != 100)
	    fs.appendFileSync(outfile, ",");
    }
}


