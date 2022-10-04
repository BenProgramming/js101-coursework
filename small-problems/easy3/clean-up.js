/*
  Given a string that consists of some words and an assortment of non-alphabetic
    characters, write a function that returns that string with all of the
    non-alphabetic characters replaced by spaces. If one or more non-alphabetic
    characters occur in a row, you should only have one space in the result
    (i.e., the result string should never have consecutive spaces).
*/

// first take, commented out
// function cleanUp0(str) {
//   let charArr = str.split('');
//   let retArr = charArr.map(val => {
//     if (!/[a-zA-Z]/.test(val)) {
//       return " ";
//     } else {
//       return val;
//     }
//   });

//   return retArr.reduce((accum, val, index) => {
//     if (val === " " && index !== 0 && retArr[index - 1] === " ") {
//       return accum + "";
//     } else {
//       return accum + val;
//     }
//   }, "");
// }

function cleanUp(str) {
  let retStr = '';

  for (let ct = 0; ct < str.length - 1; ct += 1) {
    if (isUpperLetter(str[ct]) || isLowerLetter(str[ct])) {
      retStr += str[ct];
    } else if (retStr[retStr.length - 1] !== ' ') {
      retStr += " ";
    }
  }

  function isUpperLetter(char) {
    return (char >= 'a' && char <= 'z');
  }

  function isLowerLetter(char) {
    return (char >= 'A' && char <= 'Z');
  }

  return retStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "