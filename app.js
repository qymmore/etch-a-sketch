const container = document.querySelector('#container');

//buttons
const clearButton = document.querySelector('.clear');
const blackButton = document.querySelector('.black');
const rgbButton = document.querySelector('.rgb');

//create 16x16 grid

for(let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'border: 0.25px solid black; height: 25px; width: 25px';
    div.classList.add('box');
    div.textContent = '';
    container.appendChild(div);

    const boxes = document.querySelectorAll('.box');

    //random color generator for RGB button
    const makeRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        div.addEventListener('click', e => {
            div.style.backgroundColor = "#" + randomColor;
        });
    };

    //add eventListener for color change
    rgbButton.addEventListener('click', makeRandomColor);

    blackButton.addEventListener('click', () => {
        div.addEventListener('click', e => {
            div.style.backgroundColor = 'black';
        });
    });
};
