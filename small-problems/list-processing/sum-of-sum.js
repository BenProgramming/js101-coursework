/*
  Write a function that takes an array of numbers and returns the sum of the
  sums of each leading subsequence in that array. Examine the examples to see
  what we mean. You may assume that the array always contains at least one
  number.
*/

function sumOfSums0(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx += 1) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

function sumOfSums(arr) {
  let ultimateTotal = 0;
  let runningTotal = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    runningTotal += arr[idx];
    ultimateTotal += runningTotal
  }
  return ultimateTotal;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35