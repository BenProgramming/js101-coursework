/*
  Modify the function from the previous exercise so it ignores non-alphabetic
  characters when determining whether it should uppercase or lowercase each
  letter. The non-alphabetic characters should still be included in the return
  value; they just don't count when toggling the desired case.
*/

function staggeredCase0(str) {
  let letterCount = 0;
  return str
    .split('')
    .map(val => {
      if ((val >= 'a' && val <= 'z') || (val >= 'A' && val <= 'Z')) {
        if (letterCount % 2 === 0) {
          letterCount += 1;
          return val.toUpperCase();
        } else {
          letterCount += 1;
          return val.toLowerCase();
        }
      }
      return val;
    })
    .join('');
}

// Exercise solution, toggling true / false when counting letter chars
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(char => {
      char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);