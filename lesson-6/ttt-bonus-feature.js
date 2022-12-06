/*
Bonus Features Outlined
  - Keep score guidelines

  Keep track of how many times the player and computer each win, and report the
  scores after each game. The first player to win 5 games wins the overall match
  (a series of 2 or more games). The score should reset to 0 for each player
  when beginning a new match. Don't use any global variables. However, you may
  want to use a global constant to represent the number of games needed to win
  the match.

  - Computer AI: Defense

  The computer currently picks a square at random. That's not very interesting.
  Let's make the computer defensive-minded so that, when an immediate threat
  exists, it will try to defend the 3rd square. An immediate threat occurs when
  the human player has 2 squares in a row with the 3rd square unoccupied. If
  there's no immediate threat, the computer can pick a random square.

  - Computer AI: Offense

  The defensive-minded AI is pretty cool, but it's still not performing as well
  as possible. If there are no impending threats, it will pick a square at
  random. We can improve it by attempting to find a winning move. We're not
  going to add a complicated algorithm; instead, we'll piggyback on
  findAtRiskSquare and turn it into an attacking mechanism as well. The logic is
  simple:

    * Finding a defensive-minded square means finding an empty square in a line
      where the other two squares belong to the human player.
    * Finding an offensive-minded square means finding an empty square in a line
      where the other two squares belong to the computer.
    * These two conditions are so similar that we can use the same code to
      determine both results.

    Personal TODO
    - add settings option to change the offensive and defense functions
    - see chalk for changing the output for the application 
*/


const readline = require("readline-sync");

const WINS_NEEDED = 5;
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const BEGGINING_PLAYER = 'Player'; // 'Player' or 'Computer'
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`Score, Player: ${board['userScore']} Computer: ${board['computerScore']}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  resetBoard(board);

  board['userScore'] = 0;
  board['computerScore'] = 0;

  return board;
}

function resetBoard(board) {
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let thirdInARow = twoInARow(board);
  if (thirdInARow) {
    board[thirdInARow] = COMPUTER_MARKER;
  } else if (squareFiveOpen(board)) {
    board['5'] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
    console.log('I else am being called');
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function twoInARow(board) {
  for (let markers of [COMPUTER_MARKER, HUMAN_MARKER]) {
    for (let idx = 0; idx < WINNING_LINES.length; idx++) {
      let [ mark0, mark1, mark2] = WINNING_LINES[idx];
      if (board[mark0] === markers && board[mark1] === markers &&
        board[mark2] === INITIAL_MARKER) {
        return mark2;
      } else if (board[mark0] === INITIAL_MARKER && board[mark1] === markers
        && board[mark2] === markers) {
        return mark0;
      } else if (board[mark0] === markers && board[mark1] === INITIAL_MARKER
        && board[mark2] === markers) {
        return mark1;
      }
    }
  }
  return false;
}

function squareFiveOpen(board) {
  return board['5'] === INITIAL_MARKER;
}

function joinOr(arr, joinStr = ', ', conjunc = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${arr[0]} ${conjunc} ${arr[1]}`;
  }
  return `${arr.slice(0, arr.length - 1).join(joinStr)}${joinStr}${conjunc}`
    + ` ${arr.slice(-1)}`;
}

function chooseSquare(board, playerChoosing) {
  if (playerChoosing === 'Player') {
    playerChoosesSquare(board);
  } else if (playerChoosing == 'Computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'Computer') {
    return 'Player';
  } else if (currentPlayer === 'Player') {
    return 'Computer';
  }
}

while (true) {
  let board = initializeBoard();
  

  while (board['userScore'] !== WINS_NEEDED &&
    board['computerScore'] !== WINS_NEEDED) {
    
    let currentPlayer = BEGGINING_PLAYER;
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    if (someoneWon(board)) {
      let winner = detectWinner(board);

      if (winner === 'Player') {
        board['userScore'] += 1;
      } else if (winner === 'Computer') {
        board['computerScore'] += 1;
      }
      prompt(`${winner} won this round!`);
    } else {
      prompt("It's a tie!");
    }
    displayBoard(board);

    prompt('Ready for the next round (enter "y" to continue)?');
    let answer = readline.question().toLowerCase();
    while (answer !== 'y') {
      prompt('Please enter y or Y to continue, or n or N to stop playing');
      answer = readline.question().toLowerCase();
    }
    if (answer !== 'y') break;
    resetBoard(board);
    displayBoard(board);
  }
  prompt('Play another round?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'y') {
    prompt('Please enter y or Y to continue, or n or N to stop playing');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');