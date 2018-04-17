import React, { Component } from 'react';
import './Button.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state= {
      animating: false
    }
    this.clicked = this.clicked.bind(this);
    this.reset = this.reset.bind(this);
  }

  clicked () {
    this.setState({
      animating: true
  })
}

  reset() {
    this.setState({
      animating: false
    })
  }


  render() {
    const classes = this.state.animating ? "Button animating" : "Button";

    return (
      <div className="App">
        <button onClick={this.clicked} className={classes} onAnimationEnd = {this.reset}> Click me </button>
      </div>
    );
  }
}

export default App;
