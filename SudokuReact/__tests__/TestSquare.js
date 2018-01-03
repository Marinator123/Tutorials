import React from 'react';
import renderer from 'react-test-renderer';
import Square from '../src/components/Square';
import Game from '../src/components/Game';

test('Create new Square', () => {
    const component = renderer.create(
        <Square
                key={1}
                id={1}
                rowId={1}
                value={1}
                isReadOnly={false}
                setValues={null}
            />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Modify a square', () => {
    const component = renderer.create( 
        <Game percEmptyFields={1}/>,
    );
    let tree = component.toJSON();
    // Wie ginge das schöner?
    var exampleSquare = tree.children[0].children[0].children[0].children[0];
    expect(exampleSquare.props.value).toBe('')
    var e = {target:{value:5}};
    exampleSquare.props.onBlur(e);
    tree = component.toJSON();
    exampleSquare = tree.children[0].children[0].children[0].children[0];
    expect(exampleSquare.props.value).toBe(5)
});

test('Test of validate Input', () => {
    const testValuesThrowError = ['0','10','lol'];
    testValuesThrowError.map((entr) => {
            expect(() => {Square.validateInput(entr);}).toThrow()
    })
    const testValuesValid = ['1','7'];
    testValuesValid.map((entr) => {
        expect(Square.validateInput(entr)).toBeUndefined()
})
});