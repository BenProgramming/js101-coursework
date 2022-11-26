/*
  Write a function that takes a string and returns an object containing the
  following three properties:

    - the percentage of characters in the string that are lowercase letters
    - the percentage of characters that are uppercase letters
    - the percentage of characters that are neither

  You may assume that the string will always contain at least one character.
*/

function letterPercentages(str) {
  let caseDistro = str
    .split('')
    .reduce((accum, val) => {
      if (val >= 'a' && val <= 'z') {
        accum[0] += 1;
      } else if (val >= 'A' && val <= 'Z') {
        accum[1] += 1;
      } else {
        accum[2] += 1;
      }
      return accum;
    }, [0, 0, 0])
    .map(val => ((val * 100) / (str.length * 100) * 100).toFixed(2));

  return { lowercase: caseDistro[0], uppercase: caseDistro[1],
    neither: caseDistro[2] };
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }