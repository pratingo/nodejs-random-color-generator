const chalk = require('chalk');
const { rawListeners, exit } = require('process');
const randomColor = require('randomcolor');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let done = false;
function ask() {
  let colo, lumi;
  rl.question('Color?', (col) => {
    rl.question('Luminousity?', (lum) => {
      randomColor({
        luminosity: lum,
        hue: col,
      });
      done = true;
      rl.close();
    });
  });
  if (colo && lumi) {
    printLogo();
  }
}

if (process.argv[2] === 'ask') {
  ask();
}


const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

function printLogo(row = 21, col = 9) {
  for (let i = 0; i < col; i++) {
    let str = '';
    let arr = [];
    for (let j = 0; j < row; j++) {
      str += '#';
    }
    if (
      i === Math.floor(col / 2 - 1) ||
      i === Math.floor(col / 2) ||
      i === Math.floor(col / 2 + 1)
    ) {
      str = `#####           #####`;
      if (i === Math.floor(col / 2)) {
        str = `#####  ${color}  #####`;
      }

      arr = [...str];
      const add = Math.floor((row - 21) / 2);
      for (let k = 0; k < add; k++) {
        arr.unshift('#');
        arr.push('#');
      }
      str = arr.join('');
    }
    console.log(chalk.hex(color)(str));
  }
}
/*
if (process.argv[2] === 'ask') {
  printLogo();

  rl.close();
  exit();
}
*/
if (process.argv[2]?.includes('x')) {
  let str = process.argv[2].split('x');

  printLogo(str[0], str[1]);
  rl.close();
  exit();
}
if (process.argv[2] === undefined) {
  printLogo();
  rl.close();
} else {
  printLogo();
  rl.close();
}
