const container = document.querySelector('#container');

let num = 16;

// insert divs equal to the square of the number given
document.addEventListener('load', () => {
    for (let i = 0; i < (num ** 2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
});