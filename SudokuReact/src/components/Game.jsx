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
        const squares = Array(size).fill({value: '', readOnly: false});
        const percEmptyFields = 0.7;
        for (let i = 0; i < size; i++) {
            if (Math.random() > percEmptyFields) {
                const rowId = Math.floor(i / 9);
                const columnId = i % 9;
                /** Generiert die Startnummer des Felds z.B. 43 -> 33 */
                const startFieldId = i - i % 3 - rowId % 3 * 9;
                const number = this.findUniqueNumber(rowId, columnId, startFieldId, squares);
                squares[i] = {value: number, readOnly: true}
            }
        }
        return squares;
    }

    findUniqueNumber(rowId, columnId, startFieldId, squares) {
        const occupiedNumbers = this.getAllValuesForRow(rowId, squares).concat(
            this.getAllValuesForColumn(columnId, squares)).concat(this.getAllValuesForField(startFieldId, squares))
        while (true) {
            const randomNumber = Math.floor((Math.random() * 9) + 1)
            if (occupiedNumbers.indexOf(randomNumber) === -1) {
                return randomNumber;
            }
        }
    }

    getAllValuesForRow(rowId, squares) {
        const rowSize = squares.length / 9;
        const rowSquares = squares.slice(rowId * rowSize, rowId * rowSize + rowSize);
        return rowSquares.map(a => a.value).filter(val => val !== '');
    }

    /**
     * 
     * @param {Int} startId id des Quadrats oben links im Feld
     * @param {*} squares 
     */
    getAllValuesForField(startId, squares) {
        //const startId = (fieldId - fieldId % 3) * 9 + fieldId % 3 * 3;
        const fieldSquares = squares.slice(startId, startId + 3).concat(
            squares.slice(startId + 9, startId + 12).concat(squares.slice(startId + 18, startId + 21)));
        return fieldSquares.map(a => a.value).filter(val => val !== '');
    }

    getAllValuesForColumn(columnId, squares) {
        const columnSquares = Array(9).fill(null);
        for (let i = 0; i < columnSquares.length; i++) {
            columnSquares[i] = squares[columnId + i*9];
        }
        return columnSquares.map(a => a.value).filter(val => val !== '');
    }

    setValues(id, value) {
        const squares = this.state.squares.slice();
        // todo check ob squares legit sind
        squares[id].value = value;
        this.setState({ squares: squares })
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

