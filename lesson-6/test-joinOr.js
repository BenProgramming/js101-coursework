function joinOr(arr, joinStr = ', ', conjunc = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${arr[0]} ${conjunc} ${arr[1]}`;
  }
  return `${arr.slice(0, arr.length - 1).join(joinStr)}${joinStr}${conjunc} ${arr.slice(-1)}`;
}


console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"
