const sketchArea = document.getElementById("sketch-area");
function addPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    sketchArea.appendChild(pixel);
}

function addGrid(size) {
    for ( i = 0; i < (size ** 2); i++) {
        addPixel();
    }
    sketchArea.style.gridTemplateColumns = `repeat(auto-fill, minmax(calc(100%/${size}), 1fr))`;
}

function reset() {
    let size = prompt('Choose grid size (1 - 72)', '16');
    console.log(size);
    addGrid(size)
}