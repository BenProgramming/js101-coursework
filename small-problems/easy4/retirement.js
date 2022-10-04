/*
  Build a program that logs when the user will retire and how many more years
    the user has to work until retirement.
*/

const readline = require('readline-sync');
const CURRENT_YEAR = 2022;

let usrAge = readline.question(`What is your age: `);
while (isNaN(Number(usrAge)) || usrAge === ' ' || usrAge < 0) {
  usrAge = readline.question(`Please enter a valid positive number: `);
}
let desiredRetire = readline.question(`At what age would you like to retire? `);
while (isNaN(Number(desiredRetire)) || desiredRetire === ' ' ||
  desiredRetire < 0 || Number(usrAge) > Number(desiredRetire)) {
  desiredRetire = readline.question(`Please enter a valid positive number: `);
}

function yearsUntil(age, retireYear) {
  return Number(retireYear) - Number(age);
}

console.log(`It's ${CURRENT_YEAR}. You will retire in ${yearsUntil(usrAge, desiredRetire) + CURRENT_YEAR}.\nYou have only ${yearsUntil(usrAge, desiredRetire)} of work to go!`);