/*
  Write a function that takes a string argument and returns a new string that
  contains the value of the original string with all consecutive duplicate
  characters collapsed into a single character.
*/

function crunch(str) {
  let retStr = '';
  if (str === '') {
    return retStr;
  } else {
    let charArr = str.split('');
    charArr.forEach(val => {
      if (retStr.charAt(retStr.length - 1) !== val) {
        retStr += val;
      }
    });
    return retStr;
  }
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""