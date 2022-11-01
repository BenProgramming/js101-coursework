/*
  Write a function that takes an array as an argument and returns an array that
  contains two elements, each of which is an array. Put the first half of the
  original array elements in the first element of the return value, and put the
  second half in the second element. If the original array contains an odd
  number of elements, place the middle element in the first half array.
*/

// First solution
function halvsies0(arr) {
  let firstArrLenth = Math.ceil(arr.length / 2);
  let firstArr = [];

  for (let idx = 0; idx < firstArrLenth; idx += 1) {
    firstArr[idx] = arr[idx];
  }

  return [firstArr, arr.slice(firstArrLenth)];
}

// Second solution
function halvsies(arr) {
  let firstArrLenth = Math.ceil(arr.length / 2);
  return [arr.slice(0, firstArrLenth), arr.slice(firstArrLenth)];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);             // [[5], []]
halvsies([]);                 // [[], []]