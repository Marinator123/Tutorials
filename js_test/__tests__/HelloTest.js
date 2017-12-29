import React from 'react';
import {configure, shallow} from 'enzyme';
import Hello from '../src/Hello.jsx'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('CheckBox from Hello should change text after click', () => {
    const checkbox = shallow(<Hello labelOn="On" labelOff="Off" />);
    
    expect(checkbox.text()).toEqual('HelloOff');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('HelloOn');
});