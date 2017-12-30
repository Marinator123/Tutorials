import React from 'react';
import Board from './Board.jsx';

/**
 * 
 */
class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(3).fill('')
        }
    }
    
    setValues(id, value) {
        const squares = this.state.squares.slice();
        // todo check ob squares legit sind
        squares[id] = value;
        this.setState({squares:squares})
    }

    render() {
        return (
            <Board
                squares={this.state.squares}
                setValues={(i,j) => this.setValues(i,j)}
            />
        )
    }
}

export default Game;

