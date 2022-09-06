// A calculator that ask the User to numbers to sum

const rlSync = require('readline-sync');
const MSG_FILE = require('./re-calc-messages.json');
const LANGUAGE = 'en';

function message(message, lang='en') {
  return MSG_FILE[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number) || number.trimStart() === '';
}

prompt(message("wlcm", LANGUAGE));

function input() {
  prompt(message("frstNumQ", LANGUAGE));
  let number1 = rlSync.question();

  while (invalidNumber(number1)) {
    prompt(message("wrgNum", LANGUAGE));
    number1 = rlSync.question();
  }

  prompt(message("secNumQ", LANGUAGE));
  let number2 = rlSync.question();

  while (invalidNumber(number2)) {
    prompt(message("wrgNum", LANGUAGE));
    number2 = rlSync.question();
  }

  prompt(`${message("numPrompt1", LANGUAGE)} ${number1} ${message("numPrompt2", LANGUAGE)} ${number2}`);

  prompt(message("operListQ", LANGUAGE));
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message("wrgOpNum", LANGUAGE));
    operation = rlSync.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${message("resultPrompt", LANGUAGE)} ${output} `);
}

let another;
do {
  input(); 
  prompt(message("anotherCalc", LANGUAGE));
  another = rlSync.question();
} while (another === "1");
