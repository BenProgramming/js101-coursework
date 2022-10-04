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

function stringToInteger(str) {
  function singleDig(dig) {
    switch (dig) {
      case "1":
        return 1;
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;
      case "0":
        return 0;
      default:
        return NaN;
    }
  }

  let mult = 10 ** (str.length - 1);
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += mult * singleDig(str.charAt(i));
    mult /= 10;
  }
  return sum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
