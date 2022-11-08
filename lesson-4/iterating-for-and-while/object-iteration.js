let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let petKeys = Object.keys(numberOfPets);

let i = 0;
while (i < petKeys.length) {
  let petName = petKeys[i];
  let petsNumber = numberOfPets[petName];
  console.log(`${petName}: ${petsNumber}`);
  i += 1;
}

for (let i in numberOfPets) {
  console.log(i, ":", numberOfPets[i]);
};
