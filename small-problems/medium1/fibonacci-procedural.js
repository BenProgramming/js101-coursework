/*
  In the previous exercise, we developed a recursive solution for computing the
  nth Fibonacci number. In a language that is not optimized for recursion, some
  (but not all) recursive functions can be extremely slow and may require
  massive quantities of memory and/or stack space. If you tested for bigger nth
  numbers, you might have noticed that getting the 50th fibonacci number already
  takes a significant amount of time.

  Fortunately, every recursive function can be rewritten as a non-recursive
  (or procedural) function.

  Rewrite your recursive fibonacci function so that it computes its results
  without using recursion.

  Note that JavaScript can accurately compute integers up to 16 digits long;
  this means that fibonacci(78) is the largest Fibonacci number that you can
  accurately compute with simple operations in JavaScript.
*/

function fibonacci0(num) {
  let firstNum = 0;
  let secondNum = 1;
  let carry;

  for (let idx = 1; idx < num; idx++) {
    carry = secondNum;
    secondNum += firstNum;
    firstNum = carry;
  }
  return secondNum;
}

// Array solution
function fibonacci(num) {
  let arr = [1, 1];
  for (let idx = arr.length; idx < num; idx += 1) {
    arr = [arr[1], arr[1] + arr[0]];
  }
  return arr[1];
}


console.log(fibonacci(19));       // 4181
console.log(fibonacci(20));       // 6765

console.log(fibonacci(34));       // 5702887
console.log(fibonacci(35));       // 9227465

console.log(fibonacci(49));       // 7778742049
console.log(fibonacci(50));       // 12586269025

console.log(fibonacci(74));       // 1304969544928657
console.log(fibonacci(75));       // 2111485077978050