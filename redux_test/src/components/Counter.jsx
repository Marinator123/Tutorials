import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Komplett von implementation unabhängige Komponente
export default class Counter extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        // das {' '} erzeugt einen Leerschlag
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                <button onClick={onDecrement}>
                    -
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}