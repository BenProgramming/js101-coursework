/*
  Write a function that takes one argument, a positive integer, and returns a
  string of alternating '1's and '0's, always startng wth a '1'. The length
  of the string should match the given integer.
*/

function stringy(num) {
  let retStr = '';
  for (let ct = 1; ct <= num; ct += 1) {
    retStr += (ct % 2 === 1 ? '1' : '0');
  }
  return retStr;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"