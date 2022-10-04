/*
  Madlibs is a simple game where you create a story template with "blanks" for
    words. You, or another player, then construct a list of words and place them
    into the story, creating an often silly or funny story as a result.

  Create a simple madlib program that prompts for a noun, a verb, an adverb, and
    an adjective, and injects them into a story that you create.
*/

const rlSync = require('readline-sync');

const fourPartsOfSpeech = {
  noun: '',
  verb: '',
  adjective: '',
  adverb: ''
};

for (let prop in fourPartsOfSpeech) {
  if (prop === 'adjective' || prop === 'adverb') {
    fourPartsOfSpeech[prop] = rlSync.question(`Please enter an ${prop}: `);
  } else {
    fourPartsOfSpeech[prop] = rlSync.question(`Please enter a ${prop}: `);
  }
}

console.log(`Do you ${fourPartsOfSpeech["verb"]} your ${fourPartsOfSpeech["noun"]} ${fourPartsOfSpeech["adverb"]}`);
console.log(`What is your favorite ${fourPartsOfSpeech["noun"]} to ${fourPartsOfSpeech["verb"]} in a ${fourPartsOfSpeech['adverb'
]} way?`);