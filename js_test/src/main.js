import Hello from './hello.jsx';
import World from './world.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

window.renderApp = function(idHello, idWorld){
    ReactDOM.render(<Hello/>, document.getElementById(idHello));
    ReactDOM.render(<World/>, document.getElementById(idWorld));
};