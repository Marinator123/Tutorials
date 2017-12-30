import React from 'react';
import Board from './Board.jsx';

/**
 * 
 */
class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            squares: this.instantiateSquares(81)
        }
    }
    
    instantiateSquares(size) {
        const squares = Array(size).fill(null);
        const percEmptyFields = 0.7;
        for (let i = 0; i < size; i++) {
            if (Math.random() > percEmptyFields)  {
                const number = Math.floor((Math.random() * 9) + 1); // todo: muss zuerst prüfen ob feld und reihe frei ist
                squares[i] = {value:number, readOnly:true}
            } else {
                squares[i] = {value:'', readOnly:false}
            }
        }
        return squares;
    }

    setValues(id, value) {
        const squares = this.state.squares.slice();
        // todo check ob squares legit sind
        squares[id].value = value;
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

