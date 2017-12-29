import React from 'react';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Hello from '../src/Hello.jsx'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Testet die Hello Komponente mit Jest Snapshot', () => {
    const component = renderer.create(
        <Hello labelOn="On" labelOff="Off" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.children[0].props.onChange();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Testet die Hello Checkbox mit Enzyme', () => {
    const checkbox = shallow(<Hello labelOn="On" labelOff="Off" />);
    
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
});

