class GameLogic {
    
    fillSquares(size, percEmptyFields) {
        var squares = Array(size).fill(null);
        const alreadyTested = Array(size).fill(null);
        var i = 0;
        var directionForward = true;
        while (i < size) {
            var number;
            // falls keine passende Nummer für das Feld gefunden werden kann
            if ((number = this.findUniqueNumber(i, squares, alreadyTested[i])) === undefined) {
                alreadyTested[i] = [];
                squares[i] =  {value: '', readOnly:false};
                directionForward = false
            }
            // falls er eine Nummer findet:
            else {
                if (alreadyTested[i] === null) {alreadyTested[i] = []};
                alreadyTested[i].push(number);
                squares[i] = {value: number, readOnly: true};
                directionForward = true;
            }
            directionForward ? i++ : i--;
        }
        
        squares = squares.map((entry) => {
            if (Math.random() < percEmptyFields) {
                entry = ({value: '', readOnly: false});
            }
            return entry
        });
        
        return squares;
    }

    solveSudoku(squares) {
        const size = squares.length;
        const alreadyTested = Array(size).fill(null);
        var i = 0;
        var directionForward = true;
        const start = new Date().getTime();
        while (i < size && new Date().getTime() - start < 2000) {
            if (squares[i].readOnly === false) {
                var number;
                // falls keine passende Nummer für das Feld gefunden werden kann
                if ((number = this.findUniqueNumber(i, squares, alreadyTested[i])) === undefined) {
                    alreadyTested[i] = [];
                    squares[i] = {value: '', readOnly:false};
                    directionForward = false;
                }
                // falls er eine Nummer findet:
                else {
                    if (alreadyTested[i] === null) {alreadyTested[i] = []};
                    alreadyTested[i].push(number);
                    squares[i] = {value: number, readOnly: false};
                    directionForward = true;
                }
            } 
            directionForward ? i++ : i--;
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
        var occupiedNumbers = this.getAllValuesForRow(rowId, squares).concat(
            this.getAllValuesForColumn(columnId, squares)).concat(this.getAllValuesForField(rowId, columnId, squares)).concat(
                numbersAlreadyTested)
        return occupiedNumbers.filter((x, i, a) => a.indexOf(x) == i && x !== null); // find unique numbers
    }

    getAllValuesForRow(rowId, squares) {
        const rowSize = squares.length / 9;
        const rowSquares = squares.slice(rowId * rowSize, rowId * rowSize + rowSize);
        return this.extractSquareValues(rowSquares);
    }

    getAllValuesForField(rowId, columnId, squares) {
        /** Generiert die (obere linke) Startnummer des Felds z.B. 43 -> 33 */
        const id = rowId * 9 + columnId;
        const startId = id - id % 3 - rowId % 3 * 9;
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