import React, { PureComponent } from 'react';

class Button extends PureComponent {

    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

export default Button