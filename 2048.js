const grid = [];
let score = 0;

function initGame() {
    createGrid();
    addRandomTile();
    addRandomTile();
    updateScore();
}

function createGrid() {
    for (let row = 0; row < 4; row++) {
        grid[row] = [];
        for (let col = 0; col < 4; col++) {
            grid[row][col] = null;
        }
    }
}

function addRandomTile() {
    const emptyCells = getEmptyCells();
    if (emptyCells.length === 0) return;
    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const value = Math.random() > 0.1 ? 2 : 4;
    grid[row][col] = value;
    displayTile(value, row, col);
}

function getEmptyCells() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (!grid[row][col]) cells.push([row, col]);
        }
    }
    return cells;
}

function displayTile(value, row, col) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.value = value;
    tile.style.gridRowStart = row + 1;
    tile.style.gridColumnStart = col + 1;
    tile.textContent = value;
    document.getElementById('grid').appendChild(tile);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            slideTiles(-1, 0);
            break;
        case 'ArrowDown':
            slideTiles(1, 0);
            break;
        case 'ArrowLeft':
            slideTiles(0, -1);
            break;
        case 'ArrowRight':
            slideTiles(0, 1);
            break;
    }
});

function slideTiles(dRow, dCol) {
    // Logic to slide and merge tiles based on direction
    addRandomTile();
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

document.getElementById('reset-button').addEventListener('click', () => {
    document.getElementById('grid').innerHTML = '';
    initGame();
});

initGame();
