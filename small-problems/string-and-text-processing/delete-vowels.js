/*
  Write a function that takes an array of strings and returns an array of the
  same string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels(arr) {
  const vowelsStr = 'aeiouAEIOU';
  return arr.slice().map(val => {
    let strWithoutVowels = '';
    for (let idx = 0; idx < val.length; idx++ ) {
      if (!vowelsStr.includes(val[idx])) {
        strWithoutVowels += val[idx];
      }
    }
    return strWithoutVowels;
  });
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]