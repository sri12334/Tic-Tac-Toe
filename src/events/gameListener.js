import gameHandler from '../handlers/gameHandler.js';
import Game from '../utils/game.js';
import UI from '../components/ui.js';
import dom from '../dom.js';

const gameListener = () => {
    dom.board.addEventListener('click', (event) => {
        if (event.target.dataset.index) {
            gameHandler(event);
        }
    });

    dom.restartButton.addEventListener('click', () => {
        Game.restart();
        UI.render(Game.getBoard());
        UI.displayMessage('');
        UI.updateCurrentPlayer(Game.getCurrentPlayer());
    });
};

export default gameListener;
