/*
  A triangle is classified as follows:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

  To be a valid triangle, the sum of the lengths of the two shortest sides
  must be greater than the length of the longest side, and every side must
  have a length greater than 0. If either of these conditions is not
  satisfied, the triangle is invalid.

  Write a function that takes the lengths of the three sides of a triangle as
  arguments and returns one of the following four strings representing the
  triangle's classification: 'equilateral', 'isosceles', 'scalene', or
  'invalid'.
*/

function triangle(sideA, sideB, sideC) {
  let sidesArr = [sideA, sideB, sideC].sort((a, b) => a - b);

  if ((sidesArr[0] + sidesArr[1]) < sidesArr[2] ||
    sidesArr.includes(0)) return 'invalid';

  if (sidesArr.every(val => val === sidesArr[0])) {
    return 'equilateral';
  } else if (sidesArr[1] === sidesArr[2] || sidesArr[1] === sidesArr[0]) {
    return 'isosceles';
  }
  return 'scalene';
}


// Exercise solution
function triangleExercise(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return "invalid";
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"