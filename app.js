const createGrid = () => {
    let container = document.createElement('div')
    container.className = 'container';
    for (i = 0; i < 16; i++){
        box = document.createElement('div')
        box.className = 'box'
        container.appendChild(box)
    }
    document.body.appendChild(container)
    console.log(document.body)
};

creationBtn = document.getElementById('creationBtn');
creationBtn.addEventListener('click', createGrid);

box = document.getElementById('box')
box.addEventListener('hover', )
