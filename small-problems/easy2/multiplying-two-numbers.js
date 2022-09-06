/*
Create a function that takes two arguments, multiplies them together,
  and returns the result.
*/

function multiply(num, num0) {
  if (isNaN(Number(num)) || isNaN(Number(num0)) || num === '' || num0 === '') {
    return 'Please enter a valid number';
  } else {
    return num * num0;
  }
}

console.log(multiply(5, 3) === 15); // logs true