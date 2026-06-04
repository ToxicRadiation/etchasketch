const container = document.querySelector('#container');
const button = document.querySelector('button');

function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.flex = `1 0 calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

button.addEventListener('click', () => {
    let size = parseInt(prompt('Enter the dimensions you want (max 100):'));
    if (size > 0 && size <= 100) {
        createGrid(size);
    }
});

createGrid(16);