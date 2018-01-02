import Game from "../src/components/Game"

import GameLogic from "../src/GameLogic"
import React from 'react';
import renderer from 'react-test-renderer';

    //import {fillSquares} from "../src/GameLogic"
    //fillSquares = jest.fn().mockImplementation((a,b) => {console.log(a)});


test('Test of the Function to fill the Squares', () => {
    const gameLogic = new GameLogic();
    var squares = gameLogic.fillSquares(81, 0.4);
    // Test whether the expected size is correct
    expect(squares.length).toBe(81);
    // Test, that no values are stored, which are not Numbers
    expect(squares.filter(a => isNaN(a.value)).length).toBe(0);
    // Test, that a new Board with Factor 1 has no values
    squares = gameLogic.fillSquares(81, 1);
    expect(squares.filter(a => a.value === '').length).toBe(81);
    // Test, that a new Board with Factor 0 has no empty values
    squares = gameLogic.fillSquares(81, 0);
    expect(squares.filter(a => a.value === '').length).toBe(0);
});

test('Test of solving the Sudoku', () => {
    // Example values for squares with factor 0.4
    const exampleInput = [{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":8,"readOnly":true},{"value":3,"readOnly":true},{"value":9,"readOnly":true},{"value":4,"readOnly":true},{"value":1,"readOnly":true},{"value":2,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":1,"readOnly":true},{"value":4,"readOnly":true},{"value":6,"readOnly":true},{"value":2,"readOnly":true},{"value":5,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":3,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":8,"readOnly":true},{"value":"","readOnly":false},{"value":1,"readOnly":true},{"value":6,"readOnly":true},{"value":9,"readOnly":true},{"value":"","readOnly":false},{"value":1,"readOnly":true},{"value":"","readOnly":false},{"value":6,"readOnly":true},{"value":"","readOnly":false},{"value":3,"readOnly":true},{"value":9,"readOnly":true},{"value":"","readOnly":false},{"value":7,"readOnly":true},{"value":8,"readOnly":true},{"value":8,"readOnly":true},{"value":"","readOnly":false},{"value":3,"readOnly":true},{"value":7,"readOnly":true},{"value":6,"readOnly":true},{"value":2,"readOnly":true},{"value":5,"readOnly":true},{"value":"","readOnly":false},{"value":9,"readOnly":true},{"value":5,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":8,"readOnly":true},{"value":3,"readOnly":true},{"value":6,"readOnly":true},{"value":2,"readOnly":true},{"value":2,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":1,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":5,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":6,"readOnly":true},{"value":"","readOnly":false},{"value":9,"readOnly":true},{"value":"","readOnly":false},{"value":3,"readOnly":true},{"value":2,"readOnly":true},{"value":4,"readOnly":true},{"value":1,"readOnly":true},{"value":"","readOnly":false},{"value":3,"readOnly":true},{"value":1,"readOnly":true},{"value":"","readOnly":false},{"value":5,"readOnly":true},{"value":"","readOnly":false},{"value":"","readOnly":false},{"value":8,"readOnly":true},{"value":"","readOnly":false}];

    const component = renderer.create(
        <Game percEmptyFields={1}/>,
    );
    const instance = component.getInstance();
    // Set the current state to match the example Squares
    instance.setState({squares: exampleInput});
    instance.originalSquare = exampleInput;
    // Test should match the example Input
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // Solve the sudoku
    instance.solveSudoku();
    // Test should match the solved sudoku
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});