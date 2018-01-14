import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

// Komplett von implementation unabhängige Komponente
export default class UndoRedo extends Component {
  render() {
    return (
      <p>
        <Button disabled={!(this.props.canUndo)} onClick={this.props.onUndo} text="Undo" />{" "}
        <Button disabled={!(this.props.canRedo)} onClick={this.props.onRedo} text="Redo" />
      </p>
    );
  }
}
