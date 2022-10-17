// Q: The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
// Answer below,

let num = [1, 2, 3, 4];
let revArr = num.slice().reverse();
let revArrSort = [...num].sort((a, b) => b - a);
let forEachRevArr = [];
// Bonus Q, Can you do it using only the Array.prototype.forEach() method?
num.forEach(val => {
forEachRevArr.unshift(val);
});
