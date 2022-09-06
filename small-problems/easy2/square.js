/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write
a function that computes the square of its argument (the square is the result of
multiplying a number by itself).
*/

function multiply(num, num0 = num) {
  if (isNaN(Number(num)) || isNaN(Number(num0)) || num === '' || num0 === '') {
    return 'Please enter a valid number';
  } else {
    return num * num0;
  }
}

const square = num => multiply(num);

console.log(square(5));
console.log(square(-8));
console.log(multiply(5, 9));