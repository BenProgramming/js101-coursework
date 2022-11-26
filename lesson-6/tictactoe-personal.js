// Change to tictactoe.js

function ticTacToe() {
  const rlSync = require('readline-sync');
  const input = (str) => rlSync.question(`=> ${str}`);
  const output = (str) => console.log(`=> ${str}`);
  // const initBoard = () => board.fill(INITIAL_MARKER);

  const INITIAL_MARKER = ' ';
  const HUMAN_MARKER = 'X';
  const COMPUTER_MARKER = 'O';

  let board = new Array(9).fill(INITIAL_MARKER);

  while (true) {
    displayBoard();

    playerChooseSquare();
    if (someoneWon() || boardFull()) break;

    computerChoosesSquare();
    if (someoneWon()) break;
  }

  displayBoard();

  if (someoneWon()) {
    output(`${detectWinner()} won!`);
  } else {
    output("It's a tie!");
  }

  playAgain();
  
  function playAgain() {
    let userChoice = input('Play again? Please enter (y/n)? ');
    if (userChoice.toLowerCase() === 'n') {
      output('Thanks for playing!');
      return undefined;
    } else if (userChoice.toLowerCase() === 'y') {
      ticTacToe();
    } else {
      output('Inproper input, please enter "y" or "n" ');
      playAgain();
    }
  }

  function displayBoard() {
    console.clear();
    output(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
    output('');
    output('     |     |     ');
    output(`  ${board[0]}  |  ${board[1]}  |  ${board[2]}   `);
    output('     |     |     ');
    output('-----+-----+-----');
    output('     |     |     ');
    output(`  ${board[3]}  |  ${board[4]}  |  ${board[5]}   `);
    output('     |     |     ');
    output('-----+-----+-----');
    output('     |     |     ');
    output(`  ${board[6]}  |  ${board[7]}  |  ${board[8]}   `);
    output('     |     |     ');
    output('');
  }

  function playerChooseSquare() {
    let choosenSquare;
    let emptySquaresDisplay = findEmptySquares().map(val => Number(val) + 1);
    while(true) {
      choosenSquare = Number(
        input(`Choose a square (${emptySquaresDisplay.join(', ')}): `).trim());
      if (emptySquaresDisplay.includes(choosenSquare)) break;
      output('Sorry that is not a valid choice, please select a cell that is not filled');
    }
    board[choosenSquare - 1] = HUMAN_MARKER;
  }

  function computerChoosesSquare() {
    let emptySquares = findEmptySquares();

    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    board[Number(emptySquares[randomIndex])] = COMPUTER_MARKER;
  }

  function findEmptySquares() {
    return Object.keys(board).filter(val => board[val] === INITIAL_MARKER);
  }

  function someoneWon() {
    // Check horizontal wins
    return !!detectWinner();
    // return [HUMAN_MARKER, COMPUTER_MARKER].some
  }

  function detectWinner() {
    let winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]             
    ];
  
    for (let line = 0; line < winningLines.length; line += 1) {
      let [ sq1, sq2, sq3 ] = winningLines[line];
      
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

  function boardFull() {
    return findEmptySquares().length === 0;
  }

}

ticTacToe();