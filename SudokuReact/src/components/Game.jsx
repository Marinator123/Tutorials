import React from 'react';
import Board from './Board.jsx';
import GameLogic from '../GameLogic.js'
/**
 * 
 */
class Game extends React.Component {

    // todo:
    // state vor Lösung wiederherstellen
    // comments
    // tests 
    // Schwierigkeitsstufen
    // evtl. check ob nummer noch nicht vergeben

    constructor(props) {
        super(props);
        this.boardSize = 81;
        this.gameLogic = new GameLogic();
        this.state = {
            squares: this.gameLogic.fillSquares(this.boardSize, this.props.percEmptyFields)
        }
    }
    
    setValues(id, value) {
        const squares = this.state.squares.slice();
        // evtl. todo check ob squares legit sind
        squares[id].value = value;
        this.setState({squares: squares})
    }

    solveSudoku() {
        const squares = this.state.squares.slice();        
        this.setState({
            squares:this.gameLogic.solveSudoku(squares)
        })
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        setValues={(i, j) => this.setValues(i, j)}
                    />
                </div>
                <div className="button-container">
                    <button className="button" onClick={() => this.solveSudoku()}>Solve Sudoku</button>
                </div>
            </div>
        )
    }
}

export default Game;

