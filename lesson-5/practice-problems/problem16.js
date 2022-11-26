let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let expectedObj = {};
arr.forEach(val => {
  expectedObj[val[0]] = val[1];
});
console.log(expectedObj);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

