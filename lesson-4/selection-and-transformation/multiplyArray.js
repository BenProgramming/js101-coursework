let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numArr, multi) {
  return numArr.slice().map(val => val * multi);
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
