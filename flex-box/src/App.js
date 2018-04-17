import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header> The heading goes here </header>
        <div className="wrapper">
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
