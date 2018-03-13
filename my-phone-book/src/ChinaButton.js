import React, { Component } from 'react';
import './ChinaButton.css';

class ChinaButton extends Component {
  constructor(props){
    super(props);
    this.clickMe = this.clickMe.bind(this)
  }

  clickMe() {
    this.props.onClick(this.props.title);
  }

  render() {
    let active = "ChinaButton";
    if (this.props.active) {
      active = active + " active";

    };


    return (
      <button className = {active} onClick={this.clickMe}> {this.props.title} </button>
    );
  }
}

export default ChinaButton;
