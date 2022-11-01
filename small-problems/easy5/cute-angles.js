/*
  Write a function that takes a floating point number representing an angle
  between 0 and 360 degrees and returns a string representing that angle in
  degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
  degrees, a single quote (') to represent minutes, and a double quote (") to
  represent seconds. There are 60 minutes in a degree, and 60 seconds in a
  minute.

  Note: your results may differ slightly depending on how you round values, but
  should generally be within a second or two fo the results shown
*/

function dms(degree) {
  let arr = [Number.parseInt(degree, 10)];
  let decimal = decimals(degree);

  for (let idx = 0; idx < 2; idx += 1) {
    arr[arr.length] = Number.parseInt(convertToFractionSixty(decimal), 10);
    decimal = decimals(convertToFractionSixty(decimal));
  }

  arr = arr.map(val => {
    if (String(val).length === 1) {
      return "0" + val;
    }
    return val;
  });

  return arr[0] + '\u00B0' + arr[1] + "'" + arr[2] + '"';
}

function decimals(float) {
  return float - Number.parseInt(float, 10);
}

function convertToFractionSixty(num) {
  return ((num * convertRetFac(num)) * 60) / convertRetFac(num);
}

function convertRetFac(decimal) {
  let factor = 1;
  while (!Number.isInteger(decimal)) {
    decimal *= 10;
    factor *= 10;
  }
  return factor;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"