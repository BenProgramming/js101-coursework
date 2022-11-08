const family = { Sam: 'Brother', Michael: 'Brother', James: 'Father', Shannon: 'Mother' };

let objectValues = Object.values(family);
let objectKeys = Object.keys(family);
let objectEntries = Object.entries(family);

let objValsAndKeys = [objectValues, objectKeys];

objectEntries.forEach(val => {
  let [key, value] = val;
  console.log('key:', key);
  console.log('value:', value);
});

objValsAndKeys.forEach((val, index) => {
  if (index === 0) {
    console.log("all values:", val);
  } else {
    console.log('all keys:', val);
  }
});
