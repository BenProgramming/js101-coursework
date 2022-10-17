// Determine whether the following object of people and their age contains an entry for 'Spot':
// Different acceptable answers below!

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot');
( () => { for (let prop in ages) {
if (prop === 'Spot') return true;
} return false;
} )();
