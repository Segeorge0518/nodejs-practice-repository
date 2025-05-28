/**
 * Author: Sara George
 * Date: 27 May 2025
 * File: isPrime.js
 * Description: This script tests the factorial function.
*/

'use strict';

const { PrimeChecker } = require('../../src/utils/isPrime'); // Import the PrimeChecker function from the isPrime.js file

describe('isPrime.js', () => {

  // Tests if the number 5 is successfully determined to be prime.
  it('should calculate if 5 is prime', () => {
    const prime = PrimeChecker(5); // Call the PrimeChecker function with the value of 5
    expect(prime).toBe(true); // The expected result is True
  });

  // Tests if the number 8 is successfully determined to not be prime.
  it('should calculate if 8 is prime', () => {
    const prime = PrimeChecker(8); // Call the PrimeChecker function with the value of 8
    expect(prime).toBe(false); // The expected result is False
  });

  // Tests if an error is successfully thrown for any number 1 or less
  it('should throw an error when calculating if a number that is 1 or less is prime', () => {
    expect(() => PrimeChecker(-1)).toThrow('Numbers that are less than or equal to 1 cannot be prime');
  });
});