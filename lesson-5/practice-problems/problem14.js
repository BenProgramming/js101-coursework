let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArr = Object.values(obj).map(val => {
  if (val.type === 'fruit') {
    return val.colors.map(val => val[0].toUpperCase() + val.slice(1));
  }
  return val.size.toUpperCase();
});

console.log(newArr);
