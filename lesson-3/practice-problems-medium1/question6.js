// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // False
// Bonus: How can you reliably test if a value is NaN?
// Personal solution: Number.isNaN()