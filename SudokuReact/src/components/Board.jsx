import React from 'react';
import Square from './Square.jsx';

/**
 *  Erstellt alle Felder des Boards und behält die Übersicht darüber
 */
class Board extends React.Component {
    
    renderSquare(i) {
        return (
            <Square
                key={i}
                id={i}
                value={this.props.squares[i].value}
                isReadOnly={this.props.squares[i].readOnly}
                setValues={this.props.setValues}
            />
        );
    }

    render() {
        //const rowSize = this.props.squares.length / 9;
        //const rowValues = this.props.squares.slice(i*rowSize, i*rowSize + rowSize);

        const squares = this.props.squares;
        const renderedSquares = squares.map((value, i) => {
            return (
                    this.renderSquare(i)
            );
        });
        
        const rowSize = this.props.squares.length / 9;
        const containers = Array(9).fill(undefined);

        for (let i = 0; i < rowSize; i++) {
            const renderedSquaresRow = renderedSquares.slice(i*rowSize, i*rowSize + rowSize);
            containers[i] = 
            <div key={i} className="board-row">
                {renderedSquaresRow}
            </div>
        }
        
        return (
            <div className="board">
                {containers}
            </div>
        )
    }
    
}

export default Board;