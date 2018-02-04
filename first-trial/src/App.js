import React, { Component } from 'react';
import Phrase from './Phrase.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Phrase sentences = "My first sentence"/>
      </div>
    );
  }
}

export default App;
