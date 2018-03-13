import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ClassesPage from './ClassesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/About">About</Link>
            <Link to="/classes/capstone">Capstone</Link>
            <Link to="/classes/react-class">RUI</Link>
          </header>

          <div className="pages">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route path="/classes/:id" component={ClassesPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
