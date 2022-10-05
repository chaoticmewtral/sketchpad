const container = document.querySelector('#container');

const square = document.createElement('div');
SVGTextContentElement.classList.add('square');

let num = 16;

// insert divs equal to the square of the number given
function addGrid(num) {
    for (let i = 0; i < (num ** 2); i++) {
        container.appendChild(square);
    }
}