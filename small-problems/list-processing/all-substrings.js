/*
  Write a function that returns a list of all substrings of a string. Order the
  returned list by where in the string the substring begins. This means that all
  substrings that start at index position 0 should come first, then all
  substrings that start at index position 1, and so on. Since multiple
  substrings will occur at each position, return the substrings at a given index
  from shortest to longest.

  You may (and should) use the leadingSubstrings function you wrote in the
  previous exercise:
*/

function substrings0(str) {
  let allSubstrings = [];
  for (let startDex = 0; startDex < str.length; startDex += 1) {
    let pushStr = '';
    for (let idx = startDex; idx < str.length; idx += 1) {
      pushStr += str[idx];
      allSubstrings[allSubstrings.length] = pushStr;
    }
  }
  return allSubstrings;
}

// Using leading substrings function (that was supposed to be used...)
function substrings1(str) {
  let allSubstrings = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    allSubstrings = allSubstrings.concat(leadingSubstrings(str.slice(idx)));
  }
  return allSubstrings;
}

function leadingSubstrings(str) {
  let carryStr = '';
  return str.split('').map(val => {
    carryStr += val;
    return carryStr;
  });
}

/*
  Rewrite substrings using list processing functions. That is, convert the
  string into an array of some sort and use functions like map, filter, or
  reduce to get the desired substrings. (You will also need to use join.) Try
  not to use forEach as that is too similar to the for loop approach.
*/

function substrings(str) {
  return str.split('').map((_, strIndex) => {
    return leadingSubstrings(str.slice(strIndex));
  }).flat();
}

console.log(substrings('abcde'));