/*
  Write a program that asks the user to enter an integer greater than 0,
  then asks whether the user wants to determine the sum or the product of
  all numbers between 1 and the entered integer, inclusive.
*/

const rlSync = require('readline-sync');

const USR_INT  = rlSync.question('Please enter a integer greater than 0: ');
const OPERATION = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let usrNum = parseInt(USR_INT);

if (OPERATION === 'p' && usrNum !== NaN) {
  console.log(`The product of the integers between 1 and ${USR_INT} is ${productInts(usrNum)}`);
} else if (OPERATION === 's' && usrNum !== NaN) {
  console.log(`The sum of the integers between 1 and ${USR_INT} is ${sumInts(usrNum)}`);
} else {
  console.log("Please enter a valid command characters, or a valid integer");
}

function sumInts(upperRange) {
  return upperRange * ((1 + upperRange) / 2);
}

function productInts(upperRange) {
  let product = 1; 
  let i = 2; 
  while (i <= upperRange) {
    product *= i; 
    i += 1;
  }
  return product;
}
