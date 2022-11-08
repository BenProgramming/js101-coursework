/*
  Write a function that takes an Array as an argument and reverses its elements
  in place. That is, mutate the Array passed into this method. The return value
  should be the same Array object.

  You may not use Array.prototype.reverse().
*/

function reverse(arr) {
  let iterations = Math.floor(arr.length / 2);
  let counter = 0;

  while (counter <= iterations && iterations !== 0) {
    let carry = arr[counter];
    arr[counter] = arr[arr.length - 1 - counter];
    arr[arr.length - 1 - counter] = carry;
    counter += 1;
  }
  return arr;
}

// Text solution
function reverse0(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true