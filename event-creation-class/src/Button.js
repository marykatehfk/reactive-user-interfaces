import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props)
    this.buttonClicked = this.buttonClicked.bind(this)
  }

  buttonClicked (e) {
    console.log("hello");
    this.props.onClick();
  }

  render() {

    return (
      <div className="Button">
        <button onClick={this.buttonClicked}> {this.props.buttonTitle}</button>
      </div>
    );
  }
}

export default Button;
