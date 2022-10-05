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
const WIN_SCORE = 3;

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

while (true) {
  let wins = 0;
  let cpuWins = 0;

  while (!(wins === WIN_SCORE|| cpuWins === WIN_SCORE)) {
    let choice = input(`Choose one: ${VALID_CHOICES.join(', ')}: `);
    while (!VALID_CHOICES.includes(choice)) {
      choice = input('Please enter a valid choice: ');
    }
    if (VALID_CHOICES.indexOf(choice) > 4) {
      choice = VALID_CHOICES[VALID_CHOICES.indexOf(choice) - 5];
    }
    
    let rpsCpuChoice = computerChoice();
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

  let contQ = input(`Would you like to play again (y/n)?\n`).toLowerCase()
  .trim();
  console.log("The value of contQ:\n", contQ);
  while (contQ !== 'n' && contQ !== 'y' && contQ !== 'yes' && contQ !== 'no') {
    contQ = input(`Please enter 'y', 'n', or 'yes', 'no' to continue\n`)
    .toLowerCase();
  }

  if (contQ === 'n' || contQ === 'no') break;
}


/* REVIEW NOTES 
  - Welcome message explaining how Lizard and Spock work
  - yesno working as a yes => check for the explicit values of 'y' 'n' and 'yes'
    and 'no'
  - const variable for the number of rounds + adding a function for User to 
    select the number of rounds that they would like to play
  - Add current score to the message after round

*/