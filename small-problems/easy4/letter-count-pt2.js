/*
  Write a function that takes a string consisting of zero or more space
    separated words and returns an object that shows the number of words of
    different sizes.

  Words consist of any sequence of non-space characters.

  Part 2,
  Modify the wordSizes function from the previous exercise to exclude
    non-letters when determining word size. For instance, the word size of
    "it's" is 3, not 4.
*/

function wordSizes(str) {
  let retObj = {};
  let relCharLengths = str.split(' ').map(val => val.match(/[A-Za-z]/g));

  if (relCharLengths[0] === null) {
    return retObj;
  } else {
    let wordsLenArr = relCharLengths.map(val => {
      return val.length;
    }).sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < wordsLenArr.length; i += 1) {
      count += 1;
      if (i === wordsLenArr.length - 1 || wordsLenArr[i] !== wordsLenArr[i + 1]) {
        retObj[wordsLenArr[i]] = count;
        count = 0;
      }
    }
    return retObj;
  }
}

console.log(wordSizes('Four score and seven.'));             
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));