/*
Write a program that will ask for user's name. The program will then greet the
user. If the user writes "name!" then the computer yells back to the user.
*/

const rlSync = require('readline-sync');

const USR_NAME = rlSync.question("Please enter your name: ");

if (USR_NAME.slice(USR_NAME.length - 1) === "!") {
  console.log(`HELLO ${USR_NAME.toUpperCase().slice(0, USR_NAME.length - 1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${USR_NAME}`);
}
