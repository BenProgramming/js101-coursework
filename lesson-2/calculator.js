// A calculator that ask the User to numbers to sum

const rlSync = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's your first number?");
let number1 = Number(rlSync.question());

console.log("What's your second number?");
let number2 = Number(rlSync.question());

console.log(`number1: ${number1} number2: ${number2}`);

console.log('What operation would you like to perform on these two numbers? \n1) Add\n2) Substract\n3) Multiply \n4) Divide');
let operation = Number(rlSync.question());

let output;
if (operation === 1) {
  output = number1 + number2;
} else if (operation === 2) {
  output = number1 - number2;
} else if (operation === 3) {
  output = number1 * number2;
} else if (operation === 4) {
  output = number1 / number2;
} else {
  console.log(`Please enter a number that corresponds to the operation you would like to perform on your inputs`);
}

console.log(`Your result is: ${output} `);
