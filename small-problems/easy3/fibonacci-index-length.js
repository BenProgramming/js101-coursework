/*
  Write a function that calculates and returns the index of the first Fibonacci
  number that has the number of digits specified by the argument.
  (The first Fibonacci number has an index of 1.)

  You may assume that the argument is always an
    integer greater than or equal to 2.
*/

function findFibonacciIndexByLength(bigNum) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let total;
  do {
    total = first + second;
    second = first;
    first = total;
    count += 1n;
  } while (String(total).length < bigNum);
  return count;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n)); 
console.log(findFibonacciIndexByLength(10n)); 
console.log(findFibonacciIndexByLength(16n));
