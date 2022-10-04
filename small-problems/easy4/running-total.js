/*
  Write a function that takes an array of numbers and returns an array with the
    same number of elements, but with each element's value being the running
    total from the original array.
*/

function runningTotal0(arr) {
  let total = 0;
  let retArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
    retArr[i] = total;
  }
  return retArr;
}

// Can you rewrite the solution using the Array.prototype.map method?
function runningTotal(arr) {
  return arr.map((_, index, array) => {
    return array.slice(0, index + 1).reduce((accum, val) => {
      return accum + val;
    });
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []