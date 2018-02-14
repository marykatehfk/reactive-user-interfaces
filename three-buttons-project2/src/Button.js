import React, { Component } from 'react';
import './App.css';
import './Button.css'

class Button extends Component {
  constructor(props){
    super(props);
    this.clickMe = this.clickMe.bind(this)
  }

  clickMe() {
    this.props.onClick(this.props.title);
  }

  render() {
    let activeButton = "Button";
    if (this.props.active) {
      activeButton = activeButton + " active";

    };


    return (
      <div>
        <button className = {activeButton} onClick={this.clickMe}> {this.props.title} </button>

      </div>
    );
  }
}

export default Button;
