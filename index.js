const chalk = require('chalk');
const process = require('node:process');
const randomColor = require('randomcolor');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

function printLogo(col = 21, row = 9) {
  if (col < 21 || row < 9) {
    console.log(`Minimum allowed 31x9 wwxhh,
default values set to 31x9`);
    col = 21;
    row = 9;
  }
  col = !(col % 2) ? col-- : col;
  row = !(row % 2) ? row++ : row;

  for (let i = 0; i < row; i++) {
    let str = '';
    let arr = [];
    for (let j = 0; j < col; j++) {
      str += '#';
    }
    if (
      i === Math.floor(row / 2 - 1) ||
      i === Math.floor(row / 2) ||
      i === Math.floor(row / 2 + 1)
    ) {
      str = `#####           #####`;
      if (i === Math.floor(row / 2)) {
        str = `#####  ${color}  #####`;
      }

      arr = [...str];
      const add = Math.floor((col - 21) / 2);
      for (let k = 0; k < add; k++) {
        arr.unshift('#');
        arr.push('#');
      }
      str = arr.join('');
    }
    console.log(chalk.hex(color)(str));
    rl.close();
  }
}

if (process.argv[2] === 'ask') {
  rl.question('Width? ', (w) => {
    rl.question('Height? ', (h) => {
      console.log(w);
      console.log(h);
      rl.close();
      printLogo(w, h);
    });
  });
}

if (process.argv[2]?.includes('x')) {
  const str = process.argv[2].split('x');

  printLogo(str[0], str[1]);
}
if (
  process.argv[2] &&
  !process.argv[2].includes('x') &&
  process.argv[2] !== 'ask'
) {
  printLogo();
}

if (!process.argv[2]) {
  printLogo();
}
