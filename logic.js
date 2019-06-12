function generateGrid(rows, cols){
    const container = document.querySelector('#container');
    container.style.display = 'grid';
    container.style.gridTemplate = `repeat(1fr, ${rows}) / repeat(1fr, ${cols})`
    
    for (r = 0; r < rows; r++){
        for (c = 0; c < cols; c++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridElement');
            newDiv.id = `grid-${r+1}-${c+1}`;
            newDiv.style.gridRow = `${r+1} / ${r+2}`;
            newDiv.style.gridColumn = `${c+1} / ${c+2}`;
            container.appendChild(newDiv);
        }
    }
}

function createHoverEffect(color, opacity){
    const boxArray = document.querySelectorAll('.gridElement');
    boxArray.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = color;
            e.target.style.opacity = opacity;
        });
    });
}

function addClearButton(){
    const btn = document.querySelector('#clear');
    const boxArray = document.querySelectorAll('.gridElement');
    btn.addEventListener('click', (e) => {
        boxArray.forEach((box) => {
            //box.style.backgroundColor = "white";
            box.remove();
        });
        const inputBox = document.querySelector('#gridSize');
        let gridSize = parseInt(inputBox.value);
        console.log(inputBox.value);
        if(inputBox.value != '')
            generateGrid(gridSize, gridSize);
        else
            generateGrid(16, 16);
        changeColors();
        addClearButton();
    });
}

function changeColors() {
    const dropdown = document.querySelector('#colorPalatte');
    const opacity = document.querySelector('#opacityRange');
    createHoverEffect(dropdown.value, opacity.value);
}
const rows = 16;
const cols = rows;
generateGrid(rows, cols);
createHoverEffect("red");
addClearButton();
