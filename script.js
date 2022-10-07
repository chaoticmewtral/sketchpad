const container = document.querySelector('#container');
const square = document.createElement('div');
let num = 16;

const squareSize = (960/num);

    for (let i=0; i < (num ** 2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = squareSize + 'px';
        square.style.width = squareSize + 'px';
        container.appendChild(square);
    }

