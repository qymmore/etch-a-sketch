const container = document.querySelector('#container');

for(let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'border: 0.5px solid black; height: 25px; width: 25px';
    container.appendChild(div);
}