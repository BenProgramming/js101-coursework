/*
Write a function that takes an array of arrays that represents a 3x3 matrix and
  returns the transpose of the matrix. You should implement the function on
  your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new
matrix and leave the input matrix array unchanged.
*/

function transpose(twoLayArr) {
  let retArr = [[],[],[]];
  twoLayArr.forEach((val, index) => {
    val.forEach((val0, index0) => {
      retArr[index][index0] = twoLayArr[index0][index];
    });
  });
  return retArr;
}

// Iterating with for loop version 
function transpose(twoLayArr) {
  let retArr = [[],[],[]];
  for (let i = 0; i < twoLayArr.length; i += 1) {
    for (let j = 0; j < twoLayArr[i].length; j += 1) {
      retArr[i][j] = twoLayArr[j][i];
    }
  }
  return retArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]