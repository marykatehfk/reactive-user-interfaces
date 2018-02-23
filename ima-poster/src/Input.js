import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  };

  onChange(e) {
    let txt = e.target.value;
    this.props.onChange(txt)
  }
  render() {
    return (
      <div className="Input">
        <label> {this.props.label} </label>
        <p><input type = "text" onChange = {this.onChange}/></p>
      </div>
    );
  }
}

export default Input;
