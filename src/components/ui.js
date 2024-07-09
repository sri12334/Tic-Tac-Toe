import { createBoard } from './board.js';
import dom from '../dom.js';

const UI = (() => {
    const render = (board) => {
        const boardElement = dom.board;
        boardElement.innerHTML = '';
        createBoard(board, boardElement);
    };

    const displayMessage = (message) => {
        const messageElement = dom.messageElement;
        messageElement.innerText = message;
    };

    const updateCurrentPlayer = (currentPlayer) => {
        const playerX = dom.playerX;
        const playerO = dom.playerO;
        if (currentPlayer === 'X') {
            playerX.classList.add('active');
            playerO.classList.remove('active');
        } else {
            playerX.classList.remove('active');
            playerO.classList.add('active');
        }
    };

    return {
        render,
        displayMessage,
        updateCurrentPlayer,
    };
})();

export default UI;
