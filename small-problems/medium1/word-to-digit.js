/*
  Write a function that takes a sentence string as an argument and returns that
  string with every occurrence of a "number word" — 'zero', 'one', 'two',
  'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
  corresponding digit character.
*/

function wordToDigit(str) {
  const arrMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine'];

  return str
    .split(' ')
    .map(val => {
      let includedIndex = arrMap.indexOf(val.toLowerCase);
      if (includedIndex === -1) {
        return val;
      } else return arrMap[includedIndex];
    })
    .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."