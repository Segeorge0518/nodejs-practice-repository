/**
 * Author: Sara George
 * Date: 27 May 2025
 * File: isPrime.js
 * Description: This script checks if a number is prime
*/

'use strict';

//The PrimeChecker function checks if a number is prime
function PrimeChecker(n) {
  if (n <= 1) {
    throw new Error('Numbers that are less than or equal to 1 cannot be prime'); // Numbers that are less than or equal to 1 cannot be prime
  }

  if (n <= 3) {
    return true; // 2 and 3 are prime
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false; // Numbers divisible by 2 or 3 are not prime
  }

  // Optimization: Check divisibility only up to the square root of the number
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false; // If divisible by i or i+2, it's not prime
    }
  }

  return true; 
}

module.exports = { PrimeChecker }; // Export the PrimeChecker function