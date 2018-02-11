import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  constructor(props){
  super(props)
  this.buttonWasClicked = this.buttonWasClicked.bind(this)
  }

  buttonWasClicked() {
    console.log(this)
  }

  render() {
    return (
      <div className="App">
        <Button buttonTitle = "hello" onClick = {this.buttonWasClicked} />
      </div>
    );
  }
}

export default App;
