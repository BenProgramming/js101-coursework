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
const SCORE_TO_WIN = 3;

let wins = 0;
let cpuWins = 0;

function playerWins(usrCh, cpuCh) {
  return WINNING_COMBINATIONS[usrCh].includes(cpuCh);
}

function output(message) {
  console.log(`=> ${message}`);
}

function input(message) {
  return readline.question(`=> ${message}`);
}

function computerChoice() {
  let randomIndex = Math.floor(Math.random() * (VALID_CHOICES.length - 5));
  return VALID_CHOICES[randomIndex];
}

function determineWinnerOfRound(userChoice, cpuChoice) {
  if (userChoice === cpuChoice) {
    output(`Draw`);
  } else if (playerWins(userChoice, cpuChoice)) {
    output(`You won!`);
    wins += 1;
  } else if (!playerWins(userChoice, cpuChoice)) {
    output(`The CPU won...`);
    cpuWins += 1;
  }
  output(`The current score is, player1: ${wins} cpu: ${cpuWins}`);
}

function getUserChoice() {
  let userChoice = input(`Choose one: ${VALID_CHOICES.join(', ')}: `);

  while (!VALID_CHOICES.includes(userChoice)) {
    userChoice = input('Please enter a valid choice: ');
  }

  if (VALID_CHOICES.indexOf(userChoice) > 4) {
    userChoice = VALID_CHOICES[VALID_CHOICES.indexOf(userChoice) - 5];
  }

  return userChoice;
}

function playAnotherGameQ() {
  let contQ = input(`Would you like to play again (y/n)?\n`).toLowerCase().
    trim();
  while (contQ !== 'n' && contQ !== 'y' && contQ !== 'yes' && contQ !== 'no') {
    contQ = input(`Please enter 'y', 'n', or 'yes', 'no' to continue\n`).
      toLowerCase();
  }
  return contQ;
}

function determineWinnerOfGame() {
  if (cpuWins === 3) {
    output(`The CPU is the Grand Winner :/`);
  } else if (wins === 3) {
    output(`You are the Grand Winner!`);
  }
  wins = 0;
  cpuWins = 0;
}

function roundWon() {
  if (wins === SCORE_TO_WIN || cpuWins === SCORE_TO_WIN) {
    return true;
  } else {
    return false;
  }
}

output(`Welcome to Rock Paper Scissors Spock Lizard!`);
output(`Scissors cuts Paper, Paper covers Rock`);
output(`Rock crushes Lizard, Lizard poisons Spock`);
output(`Spock smashes Lizard, Scissors decapitates Lizard`);
output(`Lizard eats Paper, Paper disproves Spock`);
output(`Spock vaporizes Rock, Rock crushes Scissors`);
output(`You may choose from the above to play agains the CPU`);
output(`or their relative shorthand versions: r, p, s, l, sp`);

while (true) {
  while (!roundWon()) {
    let userChoice = getUserChoice();
    let rpsCpuChoice = computerChoice();

    output(`You chose ${userChoice}, the 'CPU' chose ${rpsCpuChoice}`);
    determineWinnerOfRound(userChoice, rpsCpuChoice);
  }

  determineWinnerOfGame();

  let anotherRound = playAnotherGameQ();
  if (anotherRound === 'n' || anotherRound === 'no') break;
}