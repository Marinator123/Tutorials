import React from 'react'
import renderer from 'react-test-renderer';
import World from '../src/World.jsx';


test('Testet die World Komponente', () => {
    const component = renderer.create(
        <World/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});