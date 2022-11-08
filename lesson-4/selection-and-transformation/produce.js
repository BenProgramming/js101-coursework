let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceObj) {
  let retObj = {};
  for (let key in produceObj) {
    if (produceObj[key] === 'Fruit') {
      retObj[key] = produce[key];
    }
  }
  return retObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);
