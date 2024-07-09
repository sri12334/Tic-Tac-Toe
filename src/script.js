import UI from './components/ui.js';
import Game from './utils/game.js';
import gameListener from './events/gameListener.js';

// Initial render
UI.render(Game.getBoard());
UI.updateCurrentPlayer(Game.getCurrentPlayer());

// Attach listeners
gameListener();
