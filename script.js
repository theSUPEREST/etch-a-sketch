const sketchArea = document.getElementById("sketch-area");

function addPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    const random = Math.floor(Math.random()*16777215).toString(16);
    pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = `#${random}`); // random colors
    // pixel.addEventListener('mouseover', () => pixel.classList.add('hover')); // black
    sketchArea.appendChild(pixel);
}

function addGrid(size) {
    for ( i = 0; i < (size ** 2); i++) {
        addPixel();
    }
    sketchArea.style.gridTemplateColumns = `repeat(auto-fill, minmax(calc(100%/${size}), 1fr))`;
}

function reset() {
    sketchArea.innerHTML = "";
    let size = prompt('Choose grid size (1 - 100)', '16');
    if (!size || size < 1 || size > 100) { reset() }
    addGrid(size)
}

const button = document.getElementById("reset");
button.addEventListener('click', reset);

addGrid(16);