// Q: Will the code below raise an error?
// Bonus: what will numbers[4] return? 

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];

// What will this line return? 
// ans: It doesn't raise an error. The JavaScript engine will treat array slots 3 through 5 as empty slots.
// Bonus ans: It will output unedfined, though the array will still show <3 empty items> for the three undefined values
