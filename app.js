const gridContainer = document.querySelector('#grid-container')

window.addEventListener("load", setDefaultGrid);

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div")
        gridElement.classList = "grid-element"
        // Check his CSS
    }
}