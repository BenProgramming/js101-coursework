// Using the following string, create a new string that contains all lowercase
// letters except for the first character, which should be capitalized.
// (See the example output.)
//
// Answers below
//
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let newStr = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
let newerStr = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
console.log(newStr);
console.log(newerStr);
