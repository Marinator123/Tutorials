import React from 'react';
import ReactDOM from 'react-dom';

import Game from  './components/Game.jsx';
import Board from './components/Board.jsx';
import Square from './components/Square.jsx';

window.renderApp = function(idGame){
    ReactDOM.render(<Game/>, document.getElementById(idGame));
};

