let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let newArr = [];

arr.forEach(val => {
  newArr[newArr.length] = val.slice();
});

newArr.forEach(val => val.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else return 0;
}));

console.log(newArr);
console.log(arr);

// Problem solution
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
