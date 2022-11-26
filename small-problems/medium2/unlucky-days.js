/*
  Some people believe that Fridays that fall on the 13th day of the month are
  unlucky days. Write a function that takes a year as an argument and returns
  the number of Friday the 13ths in that year. You may assume that the year is
  greater than 1752, which is when the United Kingdom adopted the modern
  Gregorian Calendar. You may also assume that the same calendar will remain in
  use for the foreseeable future.
*/

function fridayThe13ths(year) {
  const isFriday = (date) => date.getDay() === 5;
  let yearToCheck = new Date('January 13, 1752 01:11:11');
  let numOfFridays = 0;
  yearToCheck.setYear(year);

  for (let month = 1; month < 12; month += 1) {
    if (isFriday(yearToCheck)) numOfFridays++;
    yearToCheck.setMonth(month);
  }
  return numOfFridays;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2