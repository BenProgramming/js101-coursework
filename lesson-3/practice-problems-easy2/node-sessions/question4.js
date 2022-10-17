// Starting with the String
let famousWords = "seven years ago...";
// Show two different ways to put the expected "Four score and " in front of it
console.log("Four score and " + famousWords.slice());
console.log("Four score and ".concat(famousWords));
console.log("Four score and " + famousWords);

