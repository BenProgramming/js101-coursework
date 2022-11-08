let arr = [1, 6, 75, 55, 69, 111];

function doubleOddIndex(arr) {
  let shallowCopy = arr.slice();
  for (let idx = 1; idx < shallowCopy.length; idx += 2) {
    shallowCopy[idx] *= 2;
  }
  return shallowCopy;
}

console.log(doubleOddIndex(arr));
