/*
  Write a program that prompts the user for two positive integers, and then
  prints the results of the following operations on those two numbers:
  addition, subtraction, product, quotient, remainder, and power. Do not
  worry about validating the input.
*/

const rlSync = require('readline-sync');

const addLineStart = () => '==> ';

const OPERATIONS = ['+', '-', '*', '/', '%', '**'];

function promptNumIn(str) {
  return Number(rlSync.question(`${addLineStart()}${str}\n`));
}

function operationAndString(num, num0, operator) {
  switch (operator) {
    case '+':
      return `${addLineStart()}${num} ${operator} ${num0} = ${num + num0}`;
    case '-':
      return `${addLineStart()}${num} ${operator} ${num0} = ${num - num0}`;
    case '*':
      return `${addLineStart()}${num} ${operator} ${num0} = ${num * num0}`;
    case '/':
      return `${addLineStart()}${num} ${operator} ${num0} = ${num / num0}`;
    case '%':
      return `${addLineStart()}${num} ${operator} ${num0} = ${num % num0}`;
    case '**':
      return `${addLineStart()}${num} ${operator} ${num0} = ${num ** num0}`;
    default:
      console.log("Please enter a valid operator!");
      return null;
  }
}

const FIRST_NUM = promptNumIn('Enter the first number:');
const SECOND_NUM = promptNumIn('Enter the second number:');

for (let operator of OPERATIONS) {
  console.log(operationAndString(FIRST_NUM, SECOND_NUM, operator));
}
