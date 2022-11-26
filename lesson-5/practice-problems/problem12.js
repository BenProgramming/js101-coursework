let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let onlyMultsThree = arr.map(val => {
  return val.slice().filter(val => val % 3 === 0);
});

console.log(onlyMultsThree);
