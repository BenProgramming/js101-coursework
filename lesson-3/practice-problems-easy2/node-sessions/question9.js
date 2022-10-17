// Back in the stone age (before CSS), we used spaces to align things on the
// screen. If we have a 40-character wide
// table of Flintstone family members, how can we center the following title
// above the table with spaces?

const tableLength = 40;

let title = "Flintstone Family Members";

let rule = Math.floor((tableLength - title.length) / 2);
title = " ".repeat(rule) + title + " ".repeat(rule);
console.log(rule, title.length);
console.log(title);

// Exercise solution below! As none of the padding on the right side is needed.
title.padStart(rule, + title.length);
