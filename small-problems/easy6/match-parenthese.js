/*
  Write a function that takes a string as an argument and returns true if all
  parentheses in the string are properly balanced, false otherwise. To be
  properly balanced, parentheses must occur in matching '(' and ')' pairs.

  The tests below should log true.

  Note that balanced pairs must each start with a (, not a ).
*/

function isBalanced(str) {
  let sum = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '(') {
      sum += 1;
    } else if (str[index] === ')') {
      sum -= 1;
    }
    if (sum < 0) return false;
  }
  return sum === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true); //
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);