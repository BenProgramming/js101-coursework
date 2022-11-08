/*
  Write a function that takes two array arguments, each containing a list of
  numbers, and returns a new array containing the products of all combinations of
  number pairs that exist between the two arrays. The returned array should be
  sorted in ascending numerical order.

  You may assume that neither argument will be an empty array.

  Problem: 
  Input: two arrays, containing two lists of numbers 
  Output: a single array containing the product of each and every combination 
          of multiplication product 
  Explicit requirements: 
    - return the array of all combination of products 
  Implicit requirements: 
    - the array that is needing to be returned must be sorted 

  Examples *Below*

  Data Structure 
    - Array 

  Algorithm:
    - Define array to be returned // Build into array
    - Iterate through the first array
      - For each value of first array iterate through each value of the second array
        - Find the product of arrA val & arrB val
        - Push value to the array to be returned
    - Sort and return array
*/

function multiplyAllPairs(arrOne, arrTwo) {
  let retArr = [];

  arrOne.forEach(valOne=> {
    arrTwo.forEach(valTwo => {
      retArr.push(valOne * valTwo);
    });
  });

  return retArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]