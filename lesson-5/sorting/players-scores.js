/*
  scores is an array of subarrays that each contain three elements. Suppose this
  is an array that represents the scores for three players in a game of three
  rounds. We want to sort the players in ascending order of their total score.
  In effect, we want to get the following return value:
*/

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

let sortedScores = scores.slice().sort((a, b) => {
  return (a.reduce((accum, val) => accum + val)) -
    (b.reduce((accum, val) => accum + val));
});

console.log(sortedScores);