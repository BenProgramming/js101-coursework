let myNumbers = [1, 4, 3, 7, 2, 6];

// Can you make a version that mutates the argument?
function doubleNumbers0(arr) {
  arr.forEach(val => val = val * 2);
  return arr;
}

// Personal version of non-mutating
function doubleNumbers(arr) {
  return arr.map(val => val * 2);
}

console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]
