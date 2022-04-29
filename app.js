const container = document.querySelector('#container');

//button declaration

const clearButton = document.querySelector('.clear');
const blackButton = document.querySelector('.black');
const rgbButton = document.querySelector('.rgb');

//grid resizing function 

function gridResize(userInput = parseInt(prompt('select grid size 1-100'))) {
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    createGrid(userInput);
};

//creating the grid

function createGrid (size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++) {
        let gridBox = document.createElement('div');
        gridBox.style.cssText = 'border: 0.25px solid black';
        container.appendChild(gridBox);

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

    //clearing the grid     

    function clearGrid() {
        clearButton.addEventListener('click', e => {
            gridBox.style.cssText = 'border: 0.25px solid black';
        });
    };
    clearGrid();
};

createGrid(gridResize());
