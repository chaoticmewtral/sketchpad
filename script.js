const container = document.querySelector('#container');
const square = document.createElement('div');
let num = 16;

for (let i=0; i < (num ** 2); i++) {
square.classList.add('square');
container.appendChild(square);
}