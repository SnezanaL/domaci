// Exercise 01
console.log("-----------01----------");

const filename = "my-file.jpg";
console.log(filename.slice(filename.lastIndexOf(".") + 1));

// Exercise 02
console.log("-----------02----------");
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);

// Exercise 03
console.log("-----------03----------");
let decimalNum = 7.6;
let roundedNum = Math.round(decimalNum);
console.log(roundedNum);

// Exercise 04
console.log("-----------04----------");
let num1 = 20;
let num2 = 3;
let remainder = num1 % num2;
console.log(remainder);

// Exercise 05
console.log("-----------05----------");

const n1 = 40,
  n2 = 41;

console.log(
  (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
    (n1 >= 70 && n2 <= 100 && n1 >= 70 && n2 <= 100)
    ? "Both are in same the range"
    : "They are not both in the same range"
);

// Exercise 06
console.log("-----------06----------");

const n21 = 10;

console.log("their difference is:", n21 <= 19 ? 19 - n21 : (n21 - 19) * 3);

// Exercise 07
console.log("-----------07----------");

const n31 = 50,
  n32 = 51;

console.log(
  n31 == 50 || n32 == 50 || n31 + n32 == 50
    ? "One of numbers is 50 or their sum is 50"
    : "None of the numbers is 50 and their sum is not 50"
);

// Exercise 08
console.log("-----------08----------");

const n41 = 20,
  n42 = -10;

console.log(
  "Both numbers have the same sign:",
  (n41 < 0 && n42 > 0) || (n41 > 0 && n42 < 0) ? "No" : "Yes"
);

// Exercise 09
console.log("-----------09----------");

const string5 = "Console";

console.log(
  string5 === null || string5 === undefined || string5.slice(0, 2) === "Py"
    ? string5
    : "Py" + string5
);

// Exercise 10
console.log("-----------10----------");

const string6 = "Console";

console.log(
  string6.length > 3
    ? string6.slice(-3) + string6 + string6.slice(-3)
    : "String is not big enough"
);

// Exercise 11
console.log("-----------11----------");

const n91 = 51,
  n92 = 41,
  n93 = 61;

console.log(
  "Last digits are the same:",
  n91 % 10 == n92 % 10 && n92 % 10 == n93 % 10 && n91 % 10 == n93 % 10
    ? "Yes"
    : "No"
);
