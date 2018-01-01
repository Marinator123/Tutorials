import React from 'react';

/**
 * 
 */
class Square extends React.Component {
    constructor(props) {
        super(props);
        
        const regularLineStyle = '1px solid grey';
        const thickLineStyle = '2px solid black';
        this.style = {
            color:this.props.isReadOnly ? 'black' : 'grey',
            borderBottom:[2,5,8].indexOf(this.props.rowId) > -1 ? thickLineStyle: regularLineStyle,
            borderTop:this.props.rowId === 0 ? thickLineStyle: regularLineStyle,
            borderLeft:this.props.id % 9 === 0 ? thickLineStyle: regularLineStyle,
            borderRight:this.props.id % 3===2 ? thickLineStyle: regularLineStyle,
        }

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onBlur(e) {
        if (!this.props.isReadOnly) {
            var value = e.target.value;
            try {
                validateInput(value);
                if (isNaN(parseInt(value))) value = '';
                else value = parseInt(value);
                this.props.setValues(this.props.id, value);
            } catch (e) {
                this.props.setValues(this.props.id, '');
                alert(e.message);
            }
        }
    }
    
    onChange(e){
            this.props.setValues(this.props.id, e.target.value);
    }

    render () {
        return (
            <input type="text" className="square" value={this.props.value}
                onBlur={this.onBlur} onChange={this.onChange}
                readOnly={this.props.isReadOnly} style={this.style}>
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