import React from 'react';
import Board from './Board.jsx';
import GameLogic from '../GameLogic.js'
/**
 * 
 */
class Game extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.percEmptyFields)
        const gameLogic = new GameLogic();
        this.state = {
            squares: gameLogic.instantiateSquares(81, this.props.percEmptyFields)
        }
    }
    
    setValues(id, value) {
        const squares = this.state.squares.slice();
        // evtl. todo check ob squares legit sind
        squares[id].value = value;
        this.setState({squares: squares})
    }

    render() {
        return (
            <Board
                squares={this.state.squares}
                setValues={(i, j) => this.setValues(i, j)}
            />
        )
    }
}

export default Game;

