/*
  Write a function that determines the mean (average) of the three scores passed
   to it, and returns the letter associated with that grade.

  Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

  Tested values are all between 0 and 100. There is no need to check for
    negative values or values greater than 100.
*/

function getGrade(firstSc, secondSc, thirdSc) {
  let avgGrade = Math.round(((firstSc + secondSc + thirdSc) / 3) * 100) / 100;
  if (avgGrade < 60) {
    return 'F';
  } else if (avgGrade >= 60 && avgGrade < 70) {
    return 'D';
  } else if (avgGrade >= 70 && avgGrade < 80) {
    return 'C';
  } else if (avgGrade >= 80 && avgGrade < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"