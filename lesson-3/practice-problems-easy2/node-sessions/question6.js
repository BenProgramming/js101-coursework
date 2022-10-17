// Suppose we build an array like this: let flintstones = ["Fred", "Wilma"];
let flintstones = ['Fred', 'Wilma'];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// This code will create a nested array that looks like this: 
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.
// Create a new array that contains all of the above values, but in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

let newArr = [];
flintstones.forEach(val => {
  if (Array.isArray(val)) {
    newArr.push(...val);
  } else {
    newArr.push(val);
  }
});
console.log(newArr);

function flatten(arr) {
  return arr.reduce((accum, val) => {
    if (Array.isArray(val)) {
      accum.push(...val);
    } else {
      accum.push(val);
    }
    return accum;
  }, []);
}
// Book solutions below
flintstones = [].concat(...flintstones);

// Reduce solution
flintsontes = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

// forEach solution 
let newFlintstones = []; 
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

// flat solution
let newFlintstones = flintstones.flat();
