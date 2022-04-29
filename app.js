const container = document.querySelector('#container');

//button declaration

const clearButton = document.querySelector('.clear');
const blackButton = document.querySelector('.black');
const rgbButton = document.querySelector('.rgb');

//grid resizing function 

function gridResize(userInput = parseInt(prompt('select grid size 1-100'))) {
    if(userInput <= 100) {
        container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        createGrid(userInput);
    }
    else {
        alert("That's not a valid input"); 
    }
};

//creating the grid

function createGrid (size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('box');
        gridBox.style.cssText = 'border: 0.25px solid black';
        container.appendChild(gridBox);

        //clear grid color
        
        function clearGrid() {
            let boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                box.style.backgroundColor = null;
            });
        };
        
        clearButton.addEventListener('click', clearGrid);

        blackButton.addEventListener('click', () => {
            gridBox.addEventListener('click', e => {
                gridBox.style.backgroundColor = 'black';
            });
        });

        //random color generator

        const makeRandomColor = () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            gridBox.addEventListener('click', e => {
                gridBox.style.backgroundColor = '#' + randomColor;
            });
        };
        rgbButton.addEventListener('click', makeRandomColor);
    };
};

createGrid(gridResize());