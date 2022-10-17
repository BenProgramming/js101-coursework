// Q: How can you determine whether a given string ends with an exclamation mark (!)?
// Answer below!

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith('!');
str2.endsWith('!');
str1[str1.length - 1] === '!'
str2[str1.length - 1] === '!'
str1.slice(-1) === '!'
str2.slice(-1) === '!'
