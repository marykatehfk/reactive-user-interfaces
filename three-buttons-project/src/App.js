import React, { Component } from 'react';
import './App.css';
import Mybuttons from './Mybuttons.js';
import Message from './Message.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text : ""
    };
    this.buttonWasClicked = this.buttonWasClicked.bind(this);
  }

  buttonWasClicked(newtext) {
    this.setState({
      text : newtext
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
        <Mybuttons  buttonTitle = "First Button" newtext = "First Button"
           onClick = {this.buttonWasClicked} active = {isFirstButtonClicked}/>
        <Mybuttons buttonTitle = "Second Button" newtext = "Second Button"
          onClick = {this.buttonWasClicked} active = {isSecondButtonClicked}/>
        <Mybuttons buttonTitle = "Third Button" newtext = "Third Button"
          onClick = {this.buttonWasClicked} active = {isThirdButtonClicked}/>
        </div>
        <Message labelTitle = {this.state.text} />
      </div>
    );
  }
}

export default App;
