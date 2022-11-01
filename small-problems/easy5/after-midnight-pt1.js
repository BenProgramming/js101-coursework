/*
  The time of day can be represented as the number of minutes before or after
  midnight. If the number of minutes is positive, the time is after midnight. If
  the number of minutes is negative, the time is before midnight.

  Write a function that takes a time using this minute-based format and returns
  the time of day in 24 hour format (hh:mm). Your function should work with any
  integer input.

  You may not use javascript's Date class methods.
*/

// First attempt
function timeOfDay0(minutes) {
  let returnStr;

  let signage = minutes >= 0 ? 1 : -1;
  minutes *= signage;

  let hoursMark = Math.floor(minutes / 60) > 24 ? Math.floor(minutes / 60) % 24
    : Math.floor(minutes / 60);
  let minutesMark = minutes % 60;

  if (signage === -1) {
    if (String(minutesMark).length === 0) {
      returnStr = (24 - hoursMark) + ":00";
    } else {
      returnStr = (23 - hoursMark) + ":" + minutesStr(60 - minutesMark);
    }

    returnStr = returnStr.length === 4 ? "0" + returnStr : returnStr;
    return returnStr;
  }

  if (String(hoursMark).length === 0) {
    returnStr = '00:' + minutesStr(minutesMark);
  } else if (String(hoursMark).length === 1) {
    returnStr = '0' + hoursMark + ":" + minutesStr(minutesMark);
  } else {
    returnStr = hoursMark + ":" + minutesStr(minutesMark);
  }

  return returnStr;
}

function minutesStr(num) {
  if (String(num).length === 0) {
    return "00";
  } else if (String(num).length === 1) {
    return "0" + num;
  } else {
    return String(num);
  }
}

// Second attempt, based on solution
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function leadingZero(number) {
  return number >= 10 ? String(number) : `0${number}`;
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(minutes) {
  if (minutes < 0) {
    minutes = ((minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY);
  }

  let hours = Math.floor(minutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
  minutes %= MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00"); //
console.log(timeOfDay(800) === "13:20"); //
console.log(timeOfDay(-4231) === "01:29");