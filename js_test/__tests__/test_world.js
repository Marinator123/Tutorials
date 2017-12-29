import React from 'react'
import renderer from 'react-test-renderer';
import World from '../src/world.jsx';


test('Test example', () => {
    const component = renderer.create(
        <World/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});