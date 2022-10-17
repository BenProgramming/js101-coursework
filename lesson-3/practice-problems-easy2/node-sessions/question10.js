// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

const countT = val => val.split('').filter(val => val === 't').length;

console.log(countT(statement1));
