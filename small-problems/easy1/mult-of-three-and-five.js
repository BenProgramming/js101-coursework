/* 
Write a function that computes the sum of all numbers between 1 and some other 
number, inclusive, that are multiples of 3 or 5. For instance, if the supplied 
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/ 

const rlSync = require('readline-sync');

const UPPER_RANGE = Number(rlSync.question("Please enter a number to determine factors of: "));

console.log(multisum(UPPER_RANGE));

function multisum(upperRange) {
  let factArr = []; 
  let threeIter = 3; 
  let fiveIter = 5; 
  while (threeIter <= upperRange) {
    if (fiveIter <= upperRange) {
      factArr.push(fiveIter);
      fiveIter += 5;
    }
    if (!factArr.includes(threeIter)) {
      factArr.push(threeIter);
    }
    threeIter += 3;
  }
  return factArr.reduce((accum, val) => {
    return accum + val; 
  });
}

// Curriculum test examples
console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));