/*
  Write a program that solicits six numbers from the user and logs a message
    that describes whether the sixth number appears among the first five
    numbers.
*/

const readline = require('readline-sync');

function input(message) {
  return readline.question(`${message}`);
}

let usrNums = [];
for (let i = 1; i <= 5; i += 1) {
  if (i === 1) {
    usrNums[i - 1] = input(`Enter the ${i}st number: `);
  } else if (i === 2) {
    usrNums[i - 1] = input(`Enter the ${i}nd number: `);
  } else if (i === 3) {
    usrNums[i - 1] = input(`Enter the ${i}rd number: `);
  } else {
    usrNums[i - 1] = input(`Enter the ${i}th number: `);
  }
}
console.log(usrNums);
let checkNum = input(`Enter the last number: `);

if (usrNums.includes(checkNum)) {
  console.log(`The number ${checkNum} appears in ${usrNums.join(", ")}.`);
} else {
  console.log(`The number ${checkNum} does not appear in ${usrNums.join(", ")}.`);
}