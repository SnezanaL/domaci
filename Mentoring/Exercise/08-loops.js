/**
 * 01 Easy
 * Write a function named multiplyStrings that accepts 2 arguments.
 * It should return a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number
 * Examples:
 * multiplyStrings("*", 3) should return the string ***
 * multiplyStrings("abc", 3) should return the string abcabcabc
 * multiplyStrings("abc", -2) should return an empty string ("")
 */

/**
 * 02 Easy
 * Write a function addTo that accepts a number as a parameter
 * and adds all natural numbers smaller or equal than the parameter.
 * The result is to be returned.
 * Example: addTo(3) should return 1+2+3 = 6.
 */

/**
 * 03 Easy
 * Write a function spaces that takes a natural number n and
 * returns a string of n dashes.
 * Example: spaces(1) should return '-'
 */

/**
 * 04 medium
 * Write a function lcm that takes two natural numbers and
 * calculates their least common multiple (lcm).
 * The lcm of two natural numbers a and b is the smallest natural number
 * that is divisible by a and b.
 * Example: lcm(4, 6) should return 12
 * Hint: use a do while loop
 */

/**
 * 05 Medium
 * Write a function isPrime that checks whether a passed number is prime.
 * Prime number is the one that is divisible only by itself and 1
 * (e.g. 2, 3, 5, 7, 11)
 * In case of a prime number it should return true, otherwise false.
 * Example: isPrime(7) should return true and isPrime(8) should return false
 */

/**
 * 07 Hard
 * Write a function to construct the following pattern, using a nested for-loop.

*
**
***
****
*****
******

 */
let i = 0;
for (;;) {
  i += 1;

  if (i === 3) continue; // skip next statements

  console.log(i);
  if (i > 10) break;
}

console.log("hello");

/**
 * 09
 * Write a program that checks whether a specified character exists within
 * the 2nd to 4th position in a given string
 * E.g.
 * "Console" and "o" should print true
 * "Console" and "e" should print false
 */
