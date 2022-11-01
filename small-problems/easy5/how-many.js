/*
  Write a function that counts the number of occurrences of each element in a
  given array. Once counted, log each element alongside the number of
  occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

function countOccurrences(arr) {
  let checkArr = [];

  arr.forEach(val =>
    (!checkArr.includes(val) ? checkArr.push(val) : undefined));

  checkArr.forEach(val => {
    let count = 0;
    arr.forEach(element => {
      if (element === val) count += 1;
    });
    console.log(`${val} => ${count}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle',
  'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2