// Starting with the string (below):
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
let newStr = munstersDescription.split('')
.map(val => val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase())
.join('');
console.log(newStr);

// Exercise solution below
console.log(munstersDescription.split('').map(function(char) {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}).join(''));