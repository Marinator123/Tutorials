import Hello from './Hello.jsx';
import World from './World.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

window.renderApp = function(idHello, idWorld){
    ReactDOM.render(<Hello labelOn="On" labelOff="Off"/>, document.getElementById(idHello));
    ReactDOM.render(<World/>, document.getElementById(idWorld));
};