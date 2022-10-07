const container = document.querySelector('#container');
const btn = document.querySelector('#gridSize');
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


function changeGrid() {
    btn.addEventListener(('click'), () => {
        const popUp = document.querySelector('#popUp');
        popUp.classList.add('vis');
    });
    const submit = document.querySelector('sub');
    submit.addEventListener(('click'), () => {
        num = parseInt(document.getElementById('#number').value);
    });
    popUp.classList.remove('vis');
    play();
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