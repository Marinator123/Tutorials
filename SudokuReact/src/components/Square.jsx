import React from 'react';

/**
 * 
 */
class Square extends React.Component {
    //todo: readonly buttons für anfangszahlen
    constructor(props) {
        super(props);
        this._onBlur = this._onBlur.bind(this);
        this._onChange = this._onChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    _onBlur(e) {
        var value = e.target.value;
        try {
            validateInput(value);
            if (isNaN(parseInt(value))) value = '';
            this.props.setValues(this.props.id, value);
        } catch (e) {
            this.props.setValues(this.props.id, '');
            alert(e.message);
        }
    }
    
    _onChange(e){
        this.props.setValues(this.props.id, e.target.value);
    }
    
    // todo, sollte eigentlich Feld verlassen, danach zusammensetzen mit onBlur
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            var value = e.target.value;
            try {
                validateInput(value);
                if (isNaN(parseInt(value))) value = '';
                this.props.setValues(this.props.id, value);
            } catch (e) {
                this.props.setValues(this.props.id, '');
                alert(e.message);
            }
        }
    }

    render () {
        return (
            <input type="text" className="square" value={this.props.value}
            onBlur={this._onBlur} onChange={this._onChange} onKeyPress={this._handleKeyPress}>
            </input>
        );
    }
}

export default Square;

function validateInput(value) {
    if (value.length > 0) {
        if (isNaN(value)) {
            throw new Error('Input is not a Number');
        } else if (value > 9 || value < 1) {
            throw new Error('Input must be between 1-9')
        }
    }
}