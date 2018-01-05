import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'

import GameLogic from  './GameLogic.js';
import Game from  './components/Game.jsx';
import Board from './components/Board.jsx';
import Square from './components/Square.jsx';

window.renderApp = function(idRoot, percEmptyFields){
    ReactDOM.render(
    <AppContainer>
        <Game
            percEmptyFields={percEmptyFields}
        />
    </AppContainer>
    , document.getElementById(idRoot));
};

if (module.hot) {
    module.hot.accept('./components/Game.jsx', () => {
        
    })
}