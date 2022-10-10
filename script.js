const container = document.querySelector('#container');
const btn = document.querySelector('#gridSize');
const submit = document.querySelector('#sub');
const popUp = document.querySelector('#popUp');
document.querySelector('#number').defaultValue = 16;

let num = document.querySelector('#number').value;

function addGrid() {
    for (let i=0; i < (num ** 2); i++) {
        const squareSize = (960/num);
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
// show popUp window to change grid size

btn.addEventListener(('click'), e => {
    popUp.classList.toggle('vis');
});

// replace grid with new grid based on selected number of squares

submit.addEventListener(('click'), e => {
    popUp.classList.toggle('vis');
    container.replaceChildren();
    num = document.querySelector('#number').value;
    play();
})


function play() {
    addGrid();
    fillPixel();
}

window.addEventListener('load', play());