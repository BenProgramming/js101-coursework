/*
The parseInt() method converts a string of numeric characters (including an
  optional plus or minus sign) to an integer. The method takes 2 arguments
  where the first argument is the string we want to convert and the second
  argument should always be 10 for our purposes. parseInt() and the Number()
  method behave similarly. In this exercise, you will create a function that
  does the same thing.

Write a function that takes a string of digits and returns the appropriate
  number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
  invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
  such as String() and Number(). Your function should do this the old-fashioned
  way and calculate the result by analyzing the characters in the string.
*/

function stringToSignedInteger(str) {
  const DIGITS  = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  function stripSignToArr(str) {
    return str.split('').filter(val => {
      if (val === "+" || val === "-") {
        return false;
      } else {
        return true;
      }
    });
  }

  function collectSum(arr) {
    return arr.reduce((accum, val, index) => {
      return accum += val * Math.pow(10, (arr.length - index - 1));
    }, 0);
    // Original form below 
    // let total = 0;
    // arr.forEach((val, index) => {
    //   total += val * Math.pow(10, (arr.length - index - 1));
    // });
    // return total;
  }

  let numArr = stripSignToArr(str).map(val => DIGITS[val]);
  if (str.trimStart().charAt(0) === "-") {
    return -1 * collectSum(numArr);
  } else { // Cases of '+' and no sign present
    return collectSum(numArr);
  }
}

console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true