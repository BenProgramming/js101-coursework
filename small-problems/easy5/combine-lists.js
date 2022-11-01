/*
  Write a function that combines two arrays passed as arguments, and returns a
  new array that contains all elements from both array arguments, with each
  element taken in alternation.

  You may assume that both input arrays are non-empty, and that they have the
  same number of elements.
*/

function interleave0(firstArr, secondArr) {
  let retArr = [];
  let counter = 0;

  for (let idx = 0; idx < firstArr.length * 2; idx += 2) {
    retArr[idx] = firstArr[counter];
    retArr[idx + 1] = secondArr[counter];
    counter += 1;
  }

  return retArr;
}

function interleave1(firstArr, secondArr) {
  let newArr = [];

  for (let idx = 0; idx < firstArr.length; idx += 1) {
    newArr.push(firstArr[idx], secondArr[idx]);
  }

  return newArr;
}

function interleave2(firstArr, secondArr) {
  return firstArr.reduce((accum, element, index) => {
    accum.push(element, secondArr[index]);
    return accum;
  }, []);
}

function interleave3(firstArr, secondArr) {
  let retArr = [];

  firstArr.forEach((val, index) => {
    retArr.push(val, secondArr[index]);
  });

  return retArr;
}

function interleave(firstArr, secondArr) {
  return firstArr.map((val, index) => {
    return [val, secondArr[index]];
  }).flat();
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]