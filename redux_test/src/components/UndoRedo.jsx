import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

// Komplett von implementation unabhängige Komponente
export default class UndoRedo extends Component {
  render() {
    return (
      <p>
        <Button onClick={this.props.onUndo} text="Undo" />{" "}
        <Button onClick={this.props.onRedo} text="Redo" />
      </p>
    );
  }
}
