import React from 'react';
import Board from './Board.jsx';
import range from 'lodash';
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
        // todo: funktioniert nicht mehr mit emptyFields -> eventuell wäre besser wenn zuerst alle initialisiert werden
        // und danach wieder einzelne "gelöscht"
        const squares = Array(size).fill({value:'', readOnly:false}); // temp, danahc auf null setzen
        const alreadyTested = Array(size).fill(null);
        const percEmptyFields = 0.0; // outsourcen
        var i = 0;
        while (i < size) {
            if (Math.random() > percEmptyFields) {
                var number;
                if ((number = this.findUniqueNumber(i, squares, alreadyTested[i])) === undefined) {
                    alreadyTested[i] = [];
                    squares[i].value = '';
                    i--;
                    continue;
                }
                else {
                    if (alreadyTested[i] === null) {alreadyTested[i] = []};
                    alreadyTested[i].push(number);
                    squares[i] = {value: number, readOnly: true};
                }
            } else {
                squares[i] = {value: '', readOnly: false};
            }
            i++;
        }
        return squares;
    }

    findUniqueNumber(id, squares, numbersAlreadyTested) {
        const rowId = Math.floor(id / 9);
        const columnId = id % 9;
        const occupiedNumbers = this.getOccupiedNumbersForField(rowId, columnId, squares, numbersAlreadyTested);
        if (occupiedNumbers.length < 9)
        {
            while (true) {
                const randomNumber = Math.floor((Math.random() * 9) + 1)
                if (occupiedNumbers.indexOf(randomNumber) === -1) {
                    return randomNumber;
                }
            }
        }
    }

    getOccupiedNumbersForField(rowId, columnId, squares, numbersAlreadyTested)  {
        /** Generiert die Startnummer des Felds z.B. 43 -> 33 */
        const id = rowId * 9 + columnId;
        const startFieldId = id - id % 3 - rowId % 3 * 9;
        var occupiedNumbers = this.getAllValuesForRow(rowId, squares).concat(
            this.getAllValuesForColumn(columnId, squares)).concat(this.getAllValuesForField(startFieldId, squares)).concat(
                numbersAlreadyTested)
        return occupiedNumbers.filter((x, i, a) => a.indexOf(x) == i); // find unique numbers
    }

    getAllValuesForRow(rowId, squares) {
        const rowSize = squares.length / 9;
        const rowSquares = squares.slice(rowId * rowSize, rowId * rowSize + rowSize);
        return this.extractSquareValues(rowSquares);
    }

    getAllValuesForField(startId, squares) {
        const fieldSquares = squares.slice(startId, startId + 3).concat(
            squares.slice(startId + 9, startId + 12).concat(squares.slice(startId + 18, startId + 21)));
        return this.extractSquareValues(fieldSquares);
    }

    getAllValuesForColumn(columnId, squares) {
        const columnSquares = Array(9).fill(null).map((x,i) => {
            return (squares[columnId + i*9])
        });
        return this.extractSquareValues(columnSquares);
    }

    extractSquareValues(squareValues) {
        return squareValues.filter(a => a !== null).map(a => a.value).filter(val => val !== '');
    }

    setValues(id, value) {
        const squares = this.state.squares.slice();
        // todo check ob squares legit sind
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

