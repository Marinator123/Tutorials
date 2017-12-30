import React from 'react';
import Square from './Square.jsx';

/**
 *  Erstellt alle Felder des Boards und behält die Übersicht darüber
 */
class Board extends React.Component {
    
    renderSquare(i) {
        return (
            <Square
                id={i}
                value={this.props.squares[i]}
                setValues={this.props.setValues}
            />
        );
    }

    render() {
        return(
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
        );
    }
    
}

export default Board;