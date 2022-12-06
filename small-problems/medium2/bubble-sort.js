/*
  Bubble Sort is one of the simplest sorting algorithms available. It is not an
  efficient algorithm, so developers rarely use it in real code. However, it is
  an excellent exercise for student developers. In this exercise, you will write
  a function that sorts an array using the bubble sort algorithm.

  A bubble sort works by making multiple passes (iterations) through an array.
  On each pass, the two values of each pair of consecutive elements are
  compared. If the first value is greater than the second, the two elements are
  swapped. This process is repeated until a complete pass is made without
  performing any swaps. At that point, the array is completely sorted.
*/

function bubbleSort(array) {
  if (array.length === 1) return array;
  while (true) {
    let swaps = false;
    for (let idx = 1; idx < array.length; idx += 1) {
      if (array[idx - 1] > array[idx]) {
        [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
        swaps = true;
      }
    }
    if (!swaps) break;
  }
  return array;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]