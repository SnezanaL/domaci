// 01
console.log('-----------01----------');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

sum += numbers[0]
sum += numbers[1]
sum += numbers[2]
sum += numbers[3]
sum += numbers[4]
sum += numbers[5]
sum += numbers[6]
sum += numbers[7]
sum += numbers[8]
sum += numbers[9]

console.log('Sum is', sum);

// 02
console.log('-----------02----------');

const n21 = 2, n22 = 3;

console.log('The array is', [n21, n22]);

// 03
console.log('-----------03----------');
const array3 = [1, 2]

console.log('The first item in array is', array3[0]);

// 04
console.log('-----------04----------');

const fruit = 'banana'
const array4 = []

array4[0] = fruit;
console.log(array4)

// 05
console.log('-----------05----------');

const array5 = ['banana', 'apple', 'pear', 'orange', 'coconut', 'strawberry'];

let lastIndex = array5.length - 1;

console.log(array5[lastIndex])

// 06
console.log('-----------06----------');

const array6 = [];

array6.push('horse')

console.log(array6);

// 07
console.log('-----------07----------');
const array7 = [1, 2]

const newElement = 3;
array7.indexOf(newElement) > -1 ?  null : array7.push(newElement)

console.log(array7);

// 08
console.log('-----------08----------');

const array8 = ['Huey', 'Dewey', 'Louie'];

const words = array8.slice(0, array8.length - 1);
const lastWord = array8[array8.length - 1];

console.log(words.join(", ") + " and " + lastWord); 


// 09
console.log('-----------9----------');

const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const idx = 5

console.log(array9.slice(0, idx));


// 10
console.log('-----------10----------');
const string10 = '025468'

const result = [string10[0]]; 

string10[0] % 2 === 0 && string10[1] % 2 === 0 ? result.push("-", string10[1]) : result.push(string10[1]);
string10[1] % 2 === 0 && string10[2] % 2 === 0 ? result.push("-", string10[2]) : result.push(string10[2]);
string10[2] % 2 === 0 && string10[3] % 2 === 0 ? result.push("-", string10[3]) : result.push(string10[3]);
string10[3] % 2 === 0 && string10[4] % 2 === 0 ? result.push("-", string10[4]) : result.push(string10[4]);
string10[4] % 2 === 0 && string10[5] % 2 === 0 ? result.push("-", string10[5]) : result.push(string10[5]);
string10[5] % 2 === 0 && string10[6] % 2 === 0 ? result.push("-", string10[6]) : result.push(string10[6]);

console.log(result.join(''));


// 11
console.log('-----------11----------');
const array11 = ['banana','orange', 'apple'] 

array11[0][0] === 'a' ? array11.splice(0, 1) : array11;
array11[1][0] === 'a' ? array11.splice(1, 1) : array11;
array11[2][0] === 'a' ? array11.splice(2, 1) : array11;


console.log(array11);