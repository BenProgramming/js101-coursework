const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function output(message, print = 1) {
  if (print === 1) {
    console.log(`=> ${message}`);
  } else if (print === 0) {
    return `=> ${message}`;
  }
}

function input(message) {
  return readline.question(`${output(message, 0)}`);
}

while (true) {
  let choice = input(`Choose one: ${VALID_CHOICES.join(', ')}: `);
  while (!VALID_CHOICES.includes(choice)) {
    choice = input('Please enter a valid choice: ');
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let rpsCpuChoice = VALID_CHOICES[randomIndex];

  output(`You chose ${choice}, the 'CPU' chose ${rpsCpuChoice}`);

  if (rpsCpuChoice === choice) {
    output(`Draw`);
  } else if ((choice === 'paper' && rpsCpuChoice === 'rock') ||
    (choice === 'rock' && rpsCpuChoice === 'scissors') ||
    (choice === 'scissors' && rpsCpuChoice === 'paper')) {
    output(`You won!`);
  } else {
    output(`The CPU won :/`);
  }

  let cont = input(`Would you like to play again (y/n)?\n`).toLowerCase();
  while (cont[0] !== 'n' && cont[0] !== 'y') {
    cont = input(`Please enter 'y' or 'n'\n`).toLowerCase();
  }

  if (cont[0] !== 'y') break;
}