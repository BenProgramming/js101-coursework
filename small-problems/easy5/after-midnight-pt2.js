/*
  As seen in the previous exercise, the time of day can be represented as the
  number of minutes before or after midnight. If the number of minutes is
  positive, the time is after midnight. If the number of minutes is negative,
  the time is before midnight.

  Write two functions that each take a time of day in 24 hour format, and return
  the number of minutes before and after midnight, respectively. Both functions
  should return a value in the range 0..1439.

  You may not use javascript's Date class methods.

  Disregard Daylight Savings and Standard Time and other irregularities.
*/

// First attempt
const MINUTES_PER_DAY = 1440;

function afterMidnight0(timeStr) {
  let minutes = timeStr.split(':').map(val => Number(val))
    .reduce((accum, val, index) => {
      if (index === 0) {
        return val * 60;
      }
      return accum + val;
    }, 0);
  return minutes % MINUTES_PER_DAY;
}

function beforeMidnight0(timeStr) {
  return (MINUTES_PER_DAY - afterMidnight(timeStr)) % MINUTES_PER_DAY;
}

// Book solution. Very cool array assignment on line 40!
// const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);