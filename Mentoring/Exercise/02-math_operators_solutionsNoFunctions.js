// 01
const celsius = 0;

const fahrenheit = 1.8 * celsius + 32;

console.log(`${celsius} degrees Celsius are ${fahrenheit} degrees Fahrenheit.`);

// 02
const naturalNumber = 3244;

console.log(
  `Number ${naturalNumber}  has ${String(naturalNumber).length}  digits.`
);

// 03 -> solution = 7

// 04
const a = 1;
const b = 2;

const mean = (1 + 2) / 2;

console.log(`Mean of ${a} and ${b} is ${mean}`);

// 05

const txt = "once upon a time";
console.log("txt is", typeof txt);

// 06
const base = 5;
const height = 6;

const area = (base * height) / 2;

console.log(
  `The area of a triangle with base ${base} and height ${height} is ${area}`
);
// Exercise 07
let a7 = 3;
let b7 = 4;
let c7 = Math.sqrt(a7 * a7 + b7 * b7);
console.log(c7);

// Exercise 08
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);

// Exercise 09
let decimalNum = 7.6;
let roundedNum = Math.round(decimalNum);
console.log(roundedNum);

// Exercise 10
let num1 = 20;
let num2 = 3;
let remainder = num1 % num2;
console.log(remainder);

// Exercise 11
let num = 15;
num -= 5;
console.log(num);

// Exercise 12
let number = 5;
number++;
number *= 2;
console.log(number);
