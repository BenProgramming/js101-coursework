/*
  Create a simple tip calculator. The program should prompt for a
  bill amount and a tip rate. The program must compute the tip,
  and then log both the tip and the total amount of the
  bill to the console. You can ignore input validation
  and assume that the user will enter numbers.
*/

const rlSync = require('readline-sync');

const BILL_TOTAL = Number(rlSync.question('What is the bill total? '));
const TIP_PERCENT_INT = Number(rlSync.question('What is the tip percentage? '));

let tipODiv = Math.round(BILL_TOTAL * 100) * Math.round(TIP_PERCENT_INT * 100);
let tip = tipODiv / 1000000;

console.log(`The tip is $${tip}\nThe total is $${tip + BILL_TOTAL}`);