// A calculator that ask the User to numbers to sum

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number) || number.trimStart() === '';
}

prompt('Welcome to Calculator!');

prompt("What's your first number?");
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt("Hmm that doesn't look right... Please enter a valid number: ");
  number1 = rlSync.question();
}

prompt("What's your second number?");
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt("Hmm that doesn't look right... Please enter a valid number: ");
  number2 = rlSync.question();
}

prompt(`number1: ${number1} number2: ${number2}`);

prompt('What operation would you like to perform on these two numbers? \n1) Add\n2) Substract\n3) Multiply \n4) Divide');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("You must choose 1, 2, 3, or 4");
  operation = rlSync.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output} `);
