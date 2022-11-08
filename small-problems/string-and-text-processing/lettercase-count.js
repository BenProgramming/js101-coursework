/*
  Write a function that takes a string and returns an object containing three
  properties: one representing the number of characters in the string that are
  lowercase letters, one representing the number of characters that are
  uppercase letters, and one representing the number of characters that are
  neither.
*/

function letterCaseCount(str) {
  const strCaseObj = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < str.length; index++) {
    if (str[index].charCodeAt() >= 97 && str[index].charCodeAt() <= 122) {
      strCaseObj['lowercase'] += 1;
    } else if (str[index].charCodeAt() >= 65 && str[index].charCodeAt() <= 90) {
      strCaseObj['uppercase'] += 1;
    } else {
      strCaseObj['neither'] += 1;
    }
  }

  return strCaseObj;
}


// Exercise solutions
function letterCaseCount0(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  return counts;
}

function letterCaseCount1(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }