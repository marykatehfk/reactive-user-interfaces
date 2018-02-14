import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const buttons = ['Button A', 'Button B', 'Button C'];

    const buttonName = buttons.map((myKey, myValue) => {
      return <p key={myValue}>{myKey}</p>;
    });
    return <div className="App"> {buttonName}</div>;
  }
}

export default App;
