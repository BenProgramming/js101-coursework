/*
  Write a function that converts a non-negative integer value
    (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

  You may not use any of the standard conversion functions available in
    JavaScript, such as String(), Number.prototype.toString, or an expression
    such as '' + number. Your function should do this the old-fashioned way and
    construct the string by analyzing and manipulating the number.
*/

function integerToString(num) {
  const STR_DIGIT = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let retStr = '';
  do {
    retStr = STR_DIGIT[num % 10] + retStr;
    num = Math.floor(num / 10);
  } while (num > 0);

  return retStr;
}


integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"