const rlSync = require('readline-sync');

const DECK_OF_CARDS = {
  14: {
    name: 'ace',
    value: 1,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  13: {
    name: 'king',
    value: 10,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  12: {
    name: 'queen',
    value: 10,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  11: {
    name: 'jack',
    value: 10,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  10: {
    value: 10,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  9: {
    value: 9,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  8: {
    value: 8,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  7: {
    value: 7,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  6: {
    value: 6,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  5: {
    value: 5,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  4: {
    value: 4,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  3: {
    value: 3,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  },
  2: {
    value: 2,
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  }
};
const PLAYER_HAND = [];
const HOUSE_HAND = [];


while (true) {
  let someoneBusted = false;
  [PLAYER_HAND[0], PLAYER_HAND[1]] = [dealCardKeySuit(), dealCardKeySuit()];
  [HOUSE_HAND[0], HOUSE_HAND[1]] = [dealCardKeySuit(), dealCardKeySuit()];

  output(`You hand: ${displayHand(PLAYER_HAND)}`);

  // User drawing cycle
  while (true) {
    let keepGoing = specInputCaseInsensitiveTrimed('Please enter "stay" to end drawing, or "hit" to draw another card: ', ['stay', 'hit']);
    console.clear();
    if (keepGoing === 'stay') break;

    PLAYER_HAND.push(dealCardKeySuit());
    output(`You drew: ${displayCard(PLAYER_HAND[PLAYER_HAND.length - 1])}`);

    if (busted(PLAYER_HAND)) {
      someoneBusted = true;
      break;
    } else {
      output(`Your hand: ${displayHand(PLAYER_HAND)}`);
    }
  }

  // Computer drawing 'cycle'
  while (!someoneBusted && !handGreaterThan(HOUSE_HAND, 16)) {
    HOUSE_HAND.push(dealCardKeySuit());
    if (busted(HOUSE_HAND)) {
      someoneBusted = true;
    }
  }

  // Someone went over 21
  if (someoneBusted && busted(PLAYER_HAND)) {
    output('You busted, tough luck... Play again maybe? ');
  } else if (someoneBusted && busted(HOUSE_HAND)) {
    output('The dealer busted, you won!');
  } else if (!someoneBusted) {
    // Deciding Winner
    let playerWon = decideWinner(PLAYER_HAND, HOUSE_HAND);
    if (playerWon === undefined) {
      output(`Your total is: ${sumHand(PLAYER_HAND)} tying the Dealer's hand of ${sumHand(HOUSE_HAND)}`);
      output(`The Dealer's hand was: ${displayHand(HOUSE_HAND)}`);
    } else if (playerWon) {
      output(`Your total is: ${sumHand(PLAYER_HAND)} beating the Dealer's hand of ${sumHand(HOUSE_HAND)}.`);
      output(`The Dealer's hand was: ${displayHand(HOUSE_HAND)}`);
    } else if (!playerWon) {
      output(`The Dealer's total is: ${sumHand(HOUSE_HAND)} beating your hand of ${sumHand(PLAYER_HAND)}.`);
      output(`The Dealer's hand was: ${displayHand(HOUSE_HAND)}`);
    }
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

  handArr = handArr.map(displayCard);
  return `{ ${handArr.join(' | ')} }`;
}

function displayCard(handArr) {
  if (DECK_OF_CARDS[handArr[0]].hasOwnProperty('name')) {
    return DECK_OF_CARDS[handArr[0]]['name'] + " of " + handArr[1];
  }
  return String(handArr[0]) + ' of ' + handArr[1];
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

function specInputCaseInsensitiveTrimed(strPrompt, arrOfAllowedInput, rePromptStr = '') {
  let userInput = input(strPrompt).toLowerCase().trim();
  while (!arrOfAllowedInput.includes(userInput)) {
    if (rePromptStr) {
      userInput = input(rePromptStr).toLowerCase().trim();
    }
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

function dealCardKeySuit() {
  let cardKey;
  do {
    cardKey = Math.floor((Math.random() * 13)) + 2;
  } while (DECK_OF_CARDS[cardKey]['suits'].length === 0);

  let suitKey = Math.floor(Math.random() *
    DECK_OF_CARDS[cardKey]['suits'].length);

  return [cardKey, DECK_OF_CARDS[cardKey]['suits'].splice(suitKey, 1)];
}

function sumHand(hand) {
  let aceCount = 0;
  let sumWithoutAce = hand.reduce((accum, val) => {
    if (Number(val[0]) === 14) {
      aceCount++;
      return accum;
    }
    return accum + DECK_OF_CARDS[val[0]]['value'];
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
  // "Collecting cards" for next game, adding suits back to the data structure
  for (let card in DECK_OF_CARDS) {
    DECK_OF_CARDS[card]['suits'] = ['clubs', 'diamonds', 'hearts', 'spades'];
  }

  // Resetting Player and Dealer's hand to [];
  PLAYER_HAND.splice(0, PLAYER_HAND.length);
  HOUSE_HAND.splice(0, HOUSE_HAND.length);
}

function input(str) {
  return rlSync.question(`=> ${str}`);
}

function output(str) {
  return console.log(`=> ${str}`);
}