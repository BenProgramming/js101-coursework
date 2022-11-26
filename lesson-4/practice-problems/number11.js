
let statement = "The Flintstones Rock";
const occurance = {};

statement
  .split('')
  .forEach(val => {
    if ((val >= 'a' && val <= 'z') || (val >= 'A' && val <= 'Z')) {
      if (!occurance.hasOwnProperty(val)) {
        occurance[val] = 1;
      } else {
        occurance[val] += 1;
      }
    }
  });

console.log(occurance);
