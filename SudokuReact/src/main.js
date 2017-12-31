import React from 'react';
import ReactDOM from 'react-dom';

import GameLogic from  './GameLogic.js';
import Game from  './components/Game.jsx';
import Board from './components/Board.jsx';
import Square from './components/Square.jsx';

window.renderApp = function(idRoot, percEmptyFields){
    ReactDOM.render(<Game
        percEmptyFields={percEmptyFields}
    />, document.getElementById(idRoot));
};

