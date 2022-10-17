// Consider the following object: 
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this objec that contains only two elements: Barney's name and Barney's number: 
// [ 'Barney', 2 ];

let bar = Object.entries(flintstones).filter(val => val[0] === "Barney").flat();

console.log(bar);

// Exercise solution, 
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
// Shift is returning the only value in the array that is the array as a pair ["Barney", 2]
