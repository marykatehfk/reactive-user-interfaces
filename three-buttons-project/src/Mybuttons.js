import React, { Component } from 'react';
import './Mybuttons.css';

class Mybuttons extends Component {

  constructor(props){
    super(props)
    this.buttonClicked = this.buttonClicked.bind(this)
  };

  buttonClicked () {
    this.props.onClick(this.props.newtext);
  }
  render() {
    let activeButton = "Mybuttons";
    if (this.props.active){
      // console.log(this.props.active)
      activeButton = activeButton + " active"
      console.log(activeButton)
    }

    return (
      <div>
        <button className={activeButton} onClick={this.buttonClicked}> {this.props.buttonTitle} </button>

      </div>
    );
  }
}

export default Mybuttons;
