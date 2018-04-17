import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage.js';
import PersonDetail from './PersonDetail.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/people/:id" component={PersonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
