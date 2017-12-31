import React from 'react';
import Square from './Square.jsx';

/**
 *  Erstellt alle Felder des Boards und behält die Übersicht darüber
 */
class Board extends React.Component {
    
    renderSquare(i, rowId) {
        return (
            <Square
                key={i}
                id={i}
                rowId={rowId}
                value={this.props.squares[i].value}
                isReadOnly={this.props.squares[i].readOnly}
                setValues={this.props.setValues}
            />
        );
    }

    render() {
        const squares = this.props.squares;
        const renderedSquares = squares.map((value, i) => {
            return (
                    this.renderSquare(i, Math.floor(i/9))
            );
        });
        
        const rowSize = this.props.squares.length / 9;
        const containers = Array(rowSize).fill(null).map((entr, i) => {
            const renderedSquaresRow = renderedSquares.slice(i*rowSize, i*rowSize + rowSize);
            return (
                <div key={i} className="board-row">
                    {renderedSquaresRow}
                </div>
            )
        });
        
        return (
            <div className="board">
                {containers}
            </div>
        )
    }
    
}

export default Board;