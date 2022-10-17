// Write three different ways to remove all of the elements from the following array: 
let numbers = [1, 2, 3, 4];
numbers.length = 0;
numbers
numbers = [1, 2, 3, 4];
while (numbers.length) {
numbers.pop();
};
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
