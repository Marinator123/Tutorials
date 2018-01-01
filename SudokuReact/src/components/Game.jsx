import React from 'react';
import Board from './Board.jsx';
import GameLogic from '../GameLogic.js'
/**
 * 
 */
class Game extends React.Component {

    // todo:
    // comments
    // tests 
    // Schwierigkeitsstufen
    // evtl. check ob nummer noch nicht vergeben

    constructor(props) {
        super(props);
        this.boardSize = 81;
        this.gameLogic = new GameLogic();
        this.userSolutionState = null;
        this.originalSquare = this.gameLogic.fillSquares(this.boardSize, this.props.percEmptyFields);
        this.state = {
            squares: this.originalSquare.map(a => Object.assign({}, a))
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
        this.userSolutionState = squares.map(a => Object.assign({}, a));
        this.setState({
            squares:this.gameLogic.solveSudoku(this.originalSquare)
        })
    }

    resetSolution() {
        this.setState({
            squares:this.userSolutionState,
        })
        this.userSolutionState = null;
    }

    render() {
        var solveFunction, buttonDescription;
        if (this.userSolutionState === null) {
            solveFunction = () => this.solveSudoku();
            buttonDescription = 'Solve Sudoku';
        } else {
            solveFunction = () => this.resetSolution();
            buttonDescription = 'Reset Solution';
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        setValues={(i, j) => this.setValues(i, j)}
                    />
                </div>
                <div className="button-container">
                    <button className="button" onClick={solveFunction}>{buttonDescription}</button>
                </div>
            </div>
        )
    }
}

export default Game;

