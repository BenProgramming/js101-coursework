const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock',
  'r', 'p', 's', 'l', 'sp'];
const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

function playerWins(usrCh, cpuCh) {
  return WINNING_COMBINATIONS[usrCh].includes(cpuCh);
}

function output(message) {
  console.log(`=> ${message}`);
}

function input(message) {
  return readline.question(`=> ${message}`);
}

while (true) {
  let wins = 0;
  let cpuWins = 0;

  while (!(wins === 3 || cpuWins === 3)) {
    let choice = input(`Choose one: ${VALID_CHOICES.join(', ')}: `);
    while (!VALID_CHOICES.includes(choice)) {
      choice = input('Please enter a valid choice: ');
    }
    if (VALID_CHOICES.indexOf(choice) > 4) {
      choice = VALID_CHOICES[VALID_CHOICES.indexOf(choice) - 5];
    }

    let randomIndex = Math.floor(Math.random() * (VALID_CHOICES.length - 5));
    let rpsCpuChoice = VALID_CHOICES[randomIndex];

    output(`You chose ${choice}, the 'CPU' chose ${rpsCpuChoice}`);

    if (rpsCpuChoice === choice) {
      output(`Draw`);
    } else if (playerWins(choice, rpsCpuChoice)) {
      output(`You won!`);
      wins += 1;
    } else if (!playerWins(choice, rpsCpuChoice)) {
      output(`The CPU won...`);
      cpuWins += 1;
    }
  }

  if (cpuWins === 3) {
    output(`The CPU is the Grand Winner :/`);
  } else {
    output(`You are the Grand Winner!`);
  }

  let contQ = input(`Would you like to play again (y/n)?\n`).toLowerCase();
  while (contQ[0] !== 'n' && contQ[0] !== 'y') {
    contQ = input(`Please enter 'y' or 'n'\n`).toLowerCase();
  }

  if (contQ[0] === 'n') break;
}