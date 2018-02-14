import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Message from './Message.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : ""
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(title) {
    //console.log(this);
    this.setState ({
      text : title
    });
  }

  render() {
    let isFirstButtonClicked = false;
    if (this.state.text === "First Button") {isFirstButtonClicked = true}
    let isSecondButtonClicked = false;
    if (this.state.text === "Second Button") {isSecondButtonClicked = true}
    let isThirdButtonClicked = false;
    if (this.state.text === "Third Button") {isThirdButtonClicked = true}

    return (
      <div className="App">
        <div className="choices">
        <Button title="First Button" onClick={this.buttonClicked}  active = {isFirstButtonClicked} />
        <Button title="Second Button" onClick={this.buttonClicked} active = {isSecondButtonClicked} />
        <Button title="Third Button" onClick={this.buttonClicked} active = {isThirdButtonClicked} />
        </div>

        <Message messageTitle = {this.state.text} />
      </div>
    );
  }
}

export default App;
