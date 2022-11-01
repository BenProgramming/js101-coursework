const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}

for (let i = 0; i < alphabet.length; i += 1) {
  console.log(alphabet.charAt(i));
}

