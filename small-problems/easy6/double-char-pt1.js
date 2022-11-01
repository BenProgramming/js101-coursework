/*
  Write a function that takes a string, doubles every character in the string,
  and returns the result as a new string.
*/

const repeater0 = (str) => str.split('').map(character => character + character)
  .join('');

function repeater(str) {
  return str.split('').map(character => character + character).join('');
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""