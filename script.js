const container = document.querySelector('#container');
const square = document.createElement('div');
let num = 16;

const squareSize = (960/num);

    for (let i=0; i < (num ** 2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `squareSize`;
        square.style.width = `squareSize`;
        container.appendChild(square);
    }



// assign size attribute based on num
