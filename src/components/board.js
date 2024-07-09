export const createBoard = (board, boardElement) => {
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.dataset.index = index;
        cellElement.innerText = cell;
        boardElement.appendChild(cellElement);
    });
};
