import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="wrapper">
      <header> The heading goes here </header>
        <aside> The side </aside>
        <main>
          <p>The main text </p>
          <p>Another text </p>
          <p>Another text </p>
        </main>
        </div>
      </div>
    );
  }
}

export default App;
