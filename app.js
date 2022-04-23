const container = document.querySelector('#container');

//buttons
const resetButton = document.querySelector('.reset');
const blackButton = document.querySelector('.black');
const rgbButton = document.querySelector('.rgb');

//create a grid

for(let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.cssText = 'border: 0.25px solid black; height: 25px; width: 25px';

    div.addEventListener('click', e => {
        e.target.style.cssText = 'background-color: black';
    });
}

