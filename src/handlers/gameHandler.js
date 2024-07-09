import Game from '../utils/game.js';
import UI from '../components/ui.js';

const gameHandler = (event) => {
    const index = event.target.dataset.index;
    if (Game.makeMove(index)) {
        UI.render(Game.getBoard());
        const winner = Game.checkWin();
        if (winner) {
            UI.displayMessage(
                winner === 'draw' ? "It's a draw!" : `${winner} wins!`,
            );
        } else {
            UI.updateCurrentPlayer(Game.getCurrentPlayer());
        }
    }
};

export default gameHandler;
