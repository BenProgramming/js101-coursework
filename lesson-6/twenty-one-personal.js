const rlSync = require('readline-sync');

const DECK_OF_CARDS = {
  highCardKey: {
    11: 'jack',
    12: 'queen',
    13: 'king',
    14: 'ace'
  },
  ace: {
    value: [1, 11],
    delt: 0
  },
  king: {
    value: 10,
    delt: 0
  },
  queen: {
    value: 10,
    delt: 0
  },
  jack: {
    value: 10,
    delt: 0
  },
  10: {
    value: 10,
    delt: 0
  },
  9: {
    value: 9,
    delt: 0
  },
  8: {
    value: 8,
    delt: 0
  },
  7: {
    value: 7,
    delt: 0
  },
  6: {
    value: 6,
    delt: 0
  },
  5: {
    value: 5,
    delt: 0
  },
  4: {
    value: 4,
    delt: 0
  },
  3: {
    value: 3,
    delt: 0
  },
  2: {
    value: 2,
    delt: 0
  }
};
const PLAYER_HAND = [];
const HOUSE_HAND = [];


// TODO: 
// X Data Structure
// X Deal Cards function
// 
// X function for summing card total
// - gameplay flow -> expound rounds? stopping when? 
// X function for input and output
// X (changed output format) proper display of hand with proper verbage e.g. an 8, an Ace, a 7 etc.
// X check occasional Dealer hand being higher than the User's winning
// - change data structure to include suit
// - data struture changing the high card keys to numbers related to 
// - adding cool graphical display for deck

while (true) {
  let someoneBusted = false;
  [PLAYER_HAND[0], PLAYER_HAND[1]] = [dealCard(), dealCard()];
  [HOUSE_HAND[0], HOUSE_HAND[1]] = [dealCard(), dealCard()];

  output(`You hand: ${displayHand(PLAYER_HAND)}`);
  
  while (true) {
    let keepGoing = specInputCaseInsensitiveTrimed('Please enter "stay" to end drawing, or "hit" to draw another card: ', ['stay', 'hit']);
    if (keepGoing === 'stay') break;

    PLAYER_HAND.push(dealCard());
    output(`You drew: ${PLAYER_HAND[PLAYER_HAND.length - 1]}`);
    
    if (busted(PLAYER_HAND)) {
      someoneBusted = true;
      break;
    } else {
      output(`Your hand: ${displayHand(PLAYER_HAND)}`);
    }
  }

  // Computer drawing 'cycle'
  while (!someoneBusted && !handGreaterThan(HOUSE_HAND, 16)) {
    HOUSE_HAND.push(dealCard());
    if (busted(HOUSE_HAND)) {
      someoneBusted = true;
    }
  }

  if (someoneBusted && busted(PLAYER_HAND)) {
    output('You busted, tough luck... Play again maybe? ');
  } else if (someoneBusted && busted(HOUSE_HAND)) {
    output('The dealer busted, you won!');
  }

  let playerWon = decideWinner(PLAYER_HAND, HOUSE_HAND);

  if (!someoneBusted && playerWon) {
    output(`Your total is: ${sumHand(PLAYER_HAND)} beating the Dealer's hand of ${sumHand(HOUSE_HAND)}.`);
    output(`The Dealer's hand was: ${HOUSE_HAND.join(', ')}`);
  } else if (!someoneBusted && playerWon === undefined) {
    output(`Your total is: ${sumHand(PLAYER_HAND)} tying the Dealer's hand of ${sumHand(HOUSE_HAND)}`);
    output(`The Dealer's hand was: ${HOUSE_HAND.join(', ')}`);
  } else if (!someoneBusted && !playerWon) {
    output(`The Dealer's total is: ${sumHand(HOUSE_HAND)} beating your hand of ${sumHand(PLAYER_HAND)}.`);
    output(`The Dealer's hand was: ${HOUSE_HAND.join(', ')}`);
  }

  

  let playAgain = specInputCaseInsensitiveTrimed(`Please enter 'yes' to play another hand or 'no' to quit playing: `, ['yes', 'no']);
  if (playAgain === 'no') break;
  resetDeck();
  console.clear();
}

function displayHand(handArr) {
  if (handArr.length === 0) {
    return undefined;
  }
  return handArr.join(', ');
}

function busted(handArr) {
  return sumHand(handArr) > 21;
}

function decideWinner(handOne, handTwo) {
  let handOneTotal = sumHand(handOne);
  let handTwoTotal = sumHand(handTwo);

  if (handOneTotal > handTwoTotal) {
    return true;
  } else if (handTwoTotal > handOneTotal) {
    return false;
  } else {
    return undefined;
  }
}

function specInputCaseInsensitiveTrimed(strPrompt, arrOfAllowedInput) {
  let userInput = input(strPrompt).toLowerCase().trim();
  while (!arrOfAllowedInput.includes(userInput)) {
    userInput = input(strPrompt).toLowerCase().trim();
  }
  return userInput;
}

function handGreaterThan(hand, num) {
  if (sumHand(hand) > num) {
    return true;
  }
  return false;
}

function dealCard() {
  let card;
  do {
    card = Math.floor((Math.random() * 13)) + 2;
    if (card > 10) {
      card = DECK_OF_CARDS['highCardKey'][card];
    }
  } while (DECK_OF_CARDS[card]['delt'] >= 4);

  DECK_OF_CARDS[card]['delt'] += 1;
  return String(card);
}


function sumHand(hand) {
  let aceCount = 0;
  let sumWithoutAce = hand.reduce((accum, val) => {
    if (val === 'ace') {
      aceCount++;
      return accum;
    }
    return accum + DECK_OF_CARDS[val]['value'];
  }, 0);

  return aceCalc(sumWithoutAce, aceCount);
}

function aceCalc(handTotal, numOfAces) {
  if (handTotal + numOfAces > 21) {
    return handTotal + numOfAces;
  }

  let lowestPossibleSum = handTotal + numOfAces;
  while (lowestPossibleSum + 10 < 21 && numOfAces !== 0) {
    lowestPossibleSum += 10;
    numOfAces -= 1;
  }
  return lowestPossibleSum;
}

function resetDeck() {
  for (let card in DECK_OF_CARDS) {
    if (card === 'highCardKey') continue;
    DECK_OF_CARDS[card]['delt'] = 0;
  }

  PLAYER_HAND.splice(0, PLAYER_HAND.length);
  HOUSE_HAND.splice(0, PLAYER_HAND.length);
}

function input(str) {
  return rlSync.question(`=> ${str}`);
}

function output(str) {
  return console.log(`=> ${str}`);
}