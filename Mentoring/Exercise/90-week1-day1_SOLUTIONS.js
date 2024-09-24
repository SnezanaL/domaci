// 00
const yearBorn = 1988;
const futureYear = 2026;
const futureAge = futureYear - yearBorn;

console.log(`I will be ${futureAge} years old in ${futureYear}`);

// 01
const celsius = 0;

const fahrenheit = 1.8 * celsius + 32;

console.log(`${celsius} degrees Celsius are ${fahrenheit} degrees Fahrenheit.`);

// 02 -> solution = 7

// 03
const a = 1;
const b = 2;

const mean = (1 + 2) / 2;

console.log(`Mean of ${a} and ${b} is ${mean}`);

// Exercise 04
let num1 = 20;
let num2 = 3;
let remainder = num1 % num2;
console.log(remainder);

// Exercise 05
let num = 15;
num -= 5;
console.log(num);

// Exercise 06
let number = 5;
number++;
number *= 2;
console.log(number);

// Exercise 07
console.log("-----------07----------");
const string1 = "lengthystring";

console.log(string1.length);

// Exercise 08
console.log("-----------08----------");
const string2 = "Mthatha";

console.log(string2.toLowerCase() + "-" + string2.toUpperCase());

// Exercise 09
console.log("-----------09----------");
const string31 = "Amnesty",
  string32 = "International";
console.log(string31[0] + string32[0]);

// Exercise 10
console.log("-----------10----------");
const string4 = " Rosa Parks ";

let trimmedText = string4.trim();

console.log(trimmedText[0]);

// Exercise 11
console.log("-----------11----------");

const string51 = "bit",
  string52 = "it";

let string51Lower = string51.toLowerCase();
let string52Lower = string52.toLowerCase();

console.log(string51Lower.indexOf(string52Lower));

// Exercise 12
console.log("-----------12----------");

const string6 = "see and stop";

let firstBlank = string6.indexOf(" ");

console.log(string6.substring(0, firstBlank));

// Exercise 13
console.log("-----------13----------");

const string7 = "20-05-2017";

console.log(string7.replaceAll("-", "/"));
