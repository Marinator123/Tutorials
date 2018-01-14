import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button  from './Button.jsx'

// Komplett von implementation unabhängige Komponente
export default class Counter extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        // das {' '} erzeugt einen Leerschlag
        return (
            <p> 
                Clicked: {value} times
                <Button 
                    onClick={onIncrement}
                    text="+"
                />
                {' '}
                <Button 
                    onClick={onDecrement}
                    text="-"
                />
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}