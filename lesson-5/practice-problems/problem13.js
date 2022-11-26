let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function reduceOdds(arr) {
  return arr.reduce((accum, val) => {
    if (val % 2 === 1) return accum + val;
    return accum;
  }, 0);
}

arr.sort((a, b) => reduceOdds(a) - reduceOdds(b));

console.log(arr);

// All together in the sort function
let arr1 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr1.sort((a, b) => {
  return a.reduce((accum, val) => {
    if (val % 2 === 1) return accum + val;
    return accum;
  }, 0) - b.reduce((accum, val) => {
    if (val % 2 === 1) return accum + val;
    return accum;
  }, 0);
});

console.log('arr1 sort: ', arr1);
