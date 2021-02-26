const gridContainer = document.querySelector('#grid-container')
const resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', changeSize)

// Set the default grid when the program is loaded
function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

window.addEventListener("load", setDefaultGrid);


// Create grid with x amount of tiles
function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

// Fill grid with div elements
function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div")
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor)
        gridContainer.appendChild(gridElement)
    }
}

// Change color of tile
function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Change size of grid
function changeSize() {
    let newSize = prompt("Enter new size")
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 200 || Number.isNaN(newSize) ) {
            alert("Enter a number from 1-500 range")
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

// Clear the grid
function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    })
}