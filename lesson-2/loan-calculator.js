const rlSync = require('readline-sync');
const MSG_FILE = require('./loan-calc-messages.json');
const BEGINLINE = '=>';
const LANG = 'en';

let cont = 0;
do {
  let loanAmt = Number(input('getAmt'));
  while (invalidNumber(loanAmt)) {
    loanAmt = Number(input('wrgAmt'));
  }

  let basisApr = Number(input('getApr'));
  while (invalidNumber(basisApr)) {
    basisApr = Number(input('wrgApr'));
  }

  let monthDuration = Number(input('getDurationM'));
  while (invalidNumber(monthDuration)) {
    monthDuration = Number(input('wrgDuration'));
  }

  let iterResult = calcMonthlyPayment(basisApr, loanAmt, monthDuration);
  consoleOut('outMonthlyPay', 2, `$${iterResult}`);
  cont = Number(input('inputAnother'));
} while (cont === 1);

function invalidNumber(number) {
  return Number.isNaN(number) || number === undefined || number === null
    || number < 0;
}

function calcMonthlyPayment(aprBasisPts, loanAmt, durationM) {
  if (aprBasisPts === 0) { // Zero percent rate
    return Math.round((loanAmt / durationM) * 100) / 100;
  } else {
    let monthRate = aprBasisPts / 120000; // Converts to decimal percentage
    let monthFactor = monthRate / (1 - Math.pow((1 + monthRate), (-durationM)));
    return Math.round(loanAmt * monthFactor * 100) / 100;
  }
}

function input(keyVal, key = 1, str = '') {
  if (key === 0) {
    return rlSync.question(`${BEGINLINE} ${keyVal}\n`);
  } else if (key === 2) {
    return rlSync.question(`${BEGINLINE} ${MSG_FILE[LANG][keyVal]}${str}\n`);
  } else {
    return rlSync.question(`${BEGINLINE} ${MSG_FILE[LANG][keyVal]}\n`);
  }
}

function consoleOut(keyVal, key = 1, str = '') {
  if (key === 0) {
    return console.log(`${BEGINLINE} ${keyVal}`);
  } else if (key === 2) {
    return console.log(`${BEGINLINE} ${MSG_FILE[LANG][keyVal]}${str}`);
  } else {
    return console.log(`${BEGINLINE} ${MSG_FILE[LANG][keyVal]}`);
  }
}