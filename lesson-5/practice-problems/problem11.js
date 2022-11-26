let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(val => {
  let newObj = Object.assign({}, val);
  Object.keys(newObj).forEach(val2 => {
    newObj[val2] += 1;
  });
  return newObj;
});

console.log(arr);
console.log(newArr);
