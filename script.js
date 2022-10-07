const container = document.querySelector('#container');

let num = 16;

const squareSize = (960/num);

function addGrid() {
    for (let i=0; i < (num ** 2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = squareSize + 'px';
        square.style.width = squareSize + 'px';
        container.appendChild(square);
    }
}

function fillPixel() {
    const pixels = document.querySelectorAll('.square');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', (e) => {
            pixel.classList.add('fillPixel');
        });
    });
}

// function popUp() {
//     const getNum = document.createElement('div');
//     getNum.classList.add('popUp');
    
//     const popText = document.createElement('p');
//     p.textContent = "Enter the number of squares per side you want."
//     getNum.appendChild(p);

//     const field = document.createElement('input');
//     field.type = 'number';
//     getNum.appendChild(field);

//     container.appendChild(getNum);
// }

function changeGrid() {
    const btn = document.querySelector('#gridSize');
    btn.addEventListener(('click'), () => {
        const popUp = document.querySelector('#popUp');
        popUp.classList.add('vis');
    });
}

// function popUp() {
//     const popUp = document.querySelector('#popUp');
//     popUp.classList.add('vis');
// }

function play() {
    addGrid();
    fillPixel();
}

window.addEventListener('load', play());
changeGrid();