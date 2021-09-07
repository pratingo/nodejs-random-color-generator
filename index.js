const chalk = require('chalk');

const row = 31;
const col = 9;

const randomColor = Math.floor(Math.random() * 4);

const colors = ['red', 'green', 'blue', 'yellow'];
let color = process.argv[2] ? process.argv[2] : colors[randomColor];

let innerText;

switch (process.argv[2]) {
  case 'red':
    color = 'red';
    innerText = '#ff0000';
    break;
  case 'green':
    color = 'green';
    innerText = '#00ff00';
    break;
  case 'blue':
    color = 'blue';
    innerText = '#0000ff';
    break;
  case 'yellow':
    color = 'yellow';
    innerText = '#f0f000';
    break;
  default:
    color = colors[randomColor];
    innerText = '#RANDOM';
}

function topBottom() {
  for (let i = 0; i < col / 3; i++) {
    let str = '';
    for (let j = 0; j < row; j++) {
      str += '#';
    }
    console.log(chalk[color](str));
  }
}

function middle() {
  for (let i = 0; i < col / 3; i++) {
    let str = '';

    for (let j = 0; j < row; j++) {
      if (i === 1) {
        str = `#####       ${innerText}       #####`;
        break;
      } else {
        str = '#####                     #####';
      }
    }
    console.log(chalk[color](str));
  }
}

topBottom();
middle();
topBottom();
