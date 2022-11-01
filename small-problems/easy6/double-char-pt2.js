/*
  Write a function that takes a string, doubles every consonant character in the
  string, and returns the result as a new string. The function should not double
  vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(str) {
  return str.split('').map(character => {
    if (/[^/aeiouAEIOU0-9!@#\$%\^\&*\)\(+=._-]/.test(character)) {
      return character + character;
    } else {
      return character;
    }
  }).join("");
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""