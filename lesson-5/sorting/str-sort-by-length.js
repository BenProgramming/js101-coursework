// How would you sort the following array by the lengths of each word?
let words = ['go', 'ahead', 'and', 'jump'];

let sortedWords = words.slice().sort((a, b) => a.length - b.length);

console.log(sortedWords);