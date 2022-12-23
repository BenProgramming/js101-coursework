const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const POINTS_TO_WIN = 5;
const DEALER_STOP_TOTAL = 17;
const IDEAL_CARD_SUM = 21;

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > IDEAL_CARD_SUM) sum -= 10;
  });

  return sum;
}

function busted(cardTotal) {
  return cardTotal > IDEAL_CARD_SUM;
}

function winnerOfRound(playerTotal, dealerTotal) {
  let winner = detectResult(playerTotal, dealerTotal);
  if (winner === 'PLAYER' || busted(dealerTotal)) {
    return 'PLAYER';
  } else if (winner === 'DEALER' || busted(playerTotal)) {
    return 'DEALER';
  }
  return false;
}

function displayScore(playerWins, dealerWins) {
  prompt(`\n${POINTS_TO_WIN} wins to win the match!\n\nThe score is\nHouse: ${dealerWins} Player: ${playerWins}\n`);
}

function detectResult(playerTotal, dealerTotal) {
  if (playerTotal > IDEAL_CARD_SUM) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > IDEAL_CARD_SUM) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(playerTotal, dealerTotal) {
  let result = detectResult(playerTotal, dealerTotal);
  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log('-------------');
  return specInput('Do you want to play again? (y or n)', ['y', 'n']);
}

function specInput(promptStr, allowedInput, wrgInPrompt = false) {
  let input = readline.question(`=> ${promptStr}`);
  if (wrgInPrompt) promptStr = wrgInPrompt;
  while (!allowedInput.includes(input)) {
    input = readline.question(`=> ${promptStr}`);
  }
  return input;
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

function endOfRoundSummary(dealerCards, playerCards, dealerTotal, playerTotal) {
  console.log('==============');
  prompt(`Dealer has ${dealerCards}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${playerCards}, for a total of: ${playerTotal}`);
  console.log('==============');
}

while (true) {
  let endRound = false;
  let playerWins = 0;
  let dealerWins = 0;
  prompt('Welcome to Twenty-One!');

  while (true) {
    // declare and initialize vars
    let deck = initalizeDeck();
    let playerCards = [];
    let dealerCards = [];

    // initial deal and find total
    playerCards.push(...popTwoFromDeck(deck));
    dealerCards.push(...popTwoFromDeck(deck));
    let dealerTotal = total(dealerCards);
    let playerTotal = total(playerCards);

    prompt(`Dealer has ${dealerCards[0]} and ?`);
    prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);

    // player turn
    while (true) {
      let playerTurn;

      while (true) {
        prompt('Would you like to (h)it or (s)tay?');
        playerTurn = readline.question().toLowerCase();
        if (['h', 's'].includes(playerTurn)) break;
        prompt("Sorry, must enter 'h' or 's'.");
      }

      if (playerTurn === 'h') {
        playerCards.push(deck.pop());
        playerTotal = total(playerCards);
        prompt('You chose to hit!');
        prompt(`Your cards are now: ${hand(playerCards)}`);
        prompt(`Your total is now: ${playerTotal}`);
      }

      if (playerTurn === 's' || busted(playerTotal)) break;
    }

    if (busted(playerTotal)) {
      endOfRoundSummary(dealerCards, playerCards, dealerTotal, playerTotal);
      displayResults(playerTotal, dealerTotal);
    } else {
      prompt(`You stayed at ${playerTotal}`);
    }

    // dealer turn
    if (!busted(playerTotal)) {
      prompt('Dealer turn...');

      while (dealerTotal < DEALER_STOP_TOTAL) {
        prompt(`Dealer hits!`);
        dealerCards.push(deck.pop());
        dealerTotal = total(dealerCards);
        prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
      }

      if (busted(dealerTotal)) {
        prompt(`Dealer total is now: ${dealerTotal}`);
        endOfRoundSummary(dealerCards, playerCards, dealerTotal, playerTotal);
        displayResults(playerTotal, dealerTotal);
      } else {
        prompt(`Dealer stays at ${dealerTotal}`);
      }
    }

    // both player and dealer stays - compare cards!
    if (!busted(playerTotal) && !busted(dealerTotal)) {
      endOfRoundSummary(dealerCards, playerCards, dealerTotal, playerTotal);
      displayResults(playerTotal, dealerTotal);
    }

    if (winnerOfRound(playerTotal, dealerTotal) === 'PLAYER') {
      playerWins += 1;
    } else if (winnerOfRound(playerTotal, dealerTotal) === 'DEALER') {
      dealerWins += 1;
    }

    let readyForNextRound = specInput('Ready for next round? Please enter "yes" to continue, or "no" to quit: ', ['yes', 'no']);
    console.clear();
    if (readyForNextRound === 'no') {
      endRound = true;
      prompt('Thanks for playing!');
      break;
    }

    displayScore(playerWins, dealerWins);
    if (playerWins === POINTS_TO_WIN) {
      prompt('You won the match! Congratulations!');
      break;
    } else if (dealerWins === POINTS_TO_WIN) {
      prompt('The Dealer won the match... Do better next time');
      break;
    }
  }

  if (endRound || !playAgain()) break;
}