class GameLogic {
    
    instantiateSquares(size, percEmptyFields) {
        // todo: funktioniert nicht mehr mit emptyFields -> eventuell wäre besser wenn zuerst alle initialisiert werden
        // und danach wieder einzelne "gelöscht"
        const squares = Array(size).fill(null);
        const alreadyTested = Array(size).fill(null);
        var i = 0;
        while (i < size) {
            if (Math.random() > percEmptyFields) {
                var number;
                if ((number = this.findUniqueNumber(i, squares, alreadyTested[i])) === undefined) {
                    alreadyTested[i] = [];
                    squares[i] = null;
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
        const id = rowId * 9 + columnId;
        /** Generiert die Startnummer des Felds z.B. 43 -> 33 */
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

}

export default GameLogic;