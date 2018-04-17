import React, { Component } from 'react';
import './Button2.css';
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor (props) {
    super(props)
    this.state= {
      showMenuBox: false
    }
    this.clicked = this.clicked.bind(this);
  }

  clicked () {
    this.setState({
      showMenuBox: !this.state.showMenuBox
  })

}


  render() {

    return (
      <div className="App">
        <button onClick={this.clicked} > Click me </button>
        <CSSTransition in ={this.state.showMenuBox}
          classNames="box"
          timeout={500}
          unmountOnExit>
        <div className="box"> <p>This is the Menu </p>
         <p> Hello </p>
         <p> How are you? </p>

         </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
