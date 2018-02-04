import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = "Mary Kate";
    const showName = true;

    return (
      <div className="App">
        {showName && (<p>My name is: {name}</p>)} 
      </div>
    );
  }
}

export default App;
