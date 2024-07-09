import { PLAYER_X, PLAYER_O } from './constants.js';

const Game = (() => {
    let board = Array(9).fill('');
    let currentPlayer = PLAYER_X;

    const getBoard = () => board;

    const makeMove = (index) => {
        if (board[index] === '' && !checkWin()) {
            board[index] = currentPlayer;
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
            return true;
        }
        return false;
    };

    const checkWin = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return board.includes('') ? null : 'draw';
    };

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    const restart = () => {
        board = Array(9).fill('');
        currentPlayer = PLAYER_X;
    };

    return {
        getBoard,
        makeMove,
        checkWin,
        getCurrentPlayer,
        restart,
    };
})();

export default Game;
