/*
  Write a function that takes a string consisting of zero or more space
    separated words and returns an object that shows the number of words of
    different sizes.

  Words consist of any sequence of non-space characters.
*/

function wordSizes(str) {
  let retObj = {};
  let wordsLenArr = str.split(' ').map(word => word.length).sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < wordsLenArr.length; i += 1) {
    count += 1;
    if (i === wordsLenArr.length - 1 || wordsLenArr[i] !== wordsLenArr[i + 1]) {
      retObj[wordsLenArr[i]] = count;
      count = 0;
    }
  }

  if (wordsLenArr.length === 1 && wordsLenArr.includes(0)) {
    return {};
  }
  return retObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}