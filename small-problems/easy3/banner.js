/*
  Write a function that will take a short line of text, and write it to the
    console log within a box.
*/

function logInBox(msg) {
  let blockStrs = [];

  blockStrs[0] = `+${'-'.repeat(msg.length + 2)}+`;
  blockStrs[1] = `|${" ".repeat(msg.length + 2)}|`;
  blockStrs[2] = `| ${msg} |`;

  let comeBack = 0;
  for (let i = 0; i >= 0;) {
    if (i !== 2 && comeBack === 0) {
      console.log(blockStrs[i]);
      i += 1;
    } else {
      comeBack = 1;
      console.log(blockStrs[i]);
      i -= 1;
    }
  }
}

logInBox('Everyone loves to code!');