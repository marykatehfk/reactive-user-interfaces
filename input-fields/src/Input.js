import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value : ""
    }
  }

  onChange(e) {
    let text = e.target.value;
    text = text.replace('me','you');

    this.setState({
      value: text
    })
  }

  render() {
    return (
      <div className="Input">
        < input type = "text" onChange = {this.onChange} value = {this.state.value} />
      </div>
    );
  }
}

export default Input;
