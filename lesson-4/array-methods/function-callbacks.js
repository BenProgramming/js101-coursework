// Practice with different forms of callback functions in JavaScript

// Function expression
let print = function(val) {
  console.log(val);
};

// Arrow function 
let printer = val => console.log(val);
let printIt = val => {
  console.log(val);
};

// Function declaration
function printValues(value) {
  console.log(value);
}

[1, 2, 3, 'cool!', 'beans!'].forEach(print);
[1, 2, 3, 'cool!', 'beans!'].forEach(printer);
[1, 2, 3, 'cool!', 'beans!'].forEach(printIt);
[1, 2, 3, 'cool!', 'beans!'].forEach(printValues);
