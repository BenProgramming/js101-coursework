// Build a program that asks the user to enter the length and width of a room in meters,
// and then logs the area of the room to the console in both square meters and square feet.
// 

const rlSync = require('readline-sync');

console.log("Enter the length of the room in meters down to the thousandths place: ");
let length = Number(rlSync.prompt());

console.log("Enter the width of the room in meters down to the thousandths place: ");
let width = Number(rlSync.prompt());

// Defining constants in integer fashion to maintain precision 
const areaM4Zeros = (length * 100) * (width * 100);
const areaFt8Zeros = (areaM4Zeros * 107639); // 10.7639 

// Rounding to the thousandths place 
let roundedAreaM = Math.round(areaM4Zeros / 100) / 100;  
let roundedAreaFt = Math.round(areaFt8Zeros / 1000000) / 100;  

// Ouput 
console.log(`The area of the room is ${roundedAreaM} square meters and approximately ${roundedAreaFt} square feet`);

