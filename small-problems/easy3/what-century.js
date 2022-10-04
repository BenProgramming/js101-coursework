/*
Write a function that takes a year as input and returns the century.
  The return value should be a string that begins with the century number,
  and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
  comprise the 20th century.
*/

function century(num) {
  let floorDivBy100 = Math.floor((num - 1) / 100);
  return (floorDivBy100 + 1) + ordinalPlc(floorDivBy100);
}

function ordinalPlc(num) {
  let numToStr = String(num);
  if (num === 0) {
    return 'st';
  } else if (num > 0 && num < 10) {
    if (numToStr.slice(-1) === '0') {
      return 'st';
    } else if (numToStr.slice(-1) === '1') {
      return 'nd';
    } else if (numToStr.slice(-1) === '2') {
      return 'rd';
    } else {
      return 'th';
    }
  } else if (numToStr.slice(-1) === '0' && numToStr.slice(-2, -1) !== '1') {
    return 'st';
  } else if (numToStr.slice(-1) === '1' && numToStr.slice(-2, -1) !== '1') {
    return 'nd';
  } else if (numToStr.slice(-1) === '2' && numToStr.slice(-2, -1) !== '1') {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));