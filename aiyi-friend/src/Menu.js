import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.floorClicked = this.floorClicked.bind(this);
  }

  floorClicked () {
    this.props.onClick(this.props.value);
    console.log("button up");
  }
  render() {
    let classes = "floorButton"
    if (this.props.active) {
      classes = classes + " active";
    };

    return (

        <div className="Menu">
          <button className= {classes} onClick={this.floorClicked}> {this.props.value} </button>
      
        </div>

    );
  }
}

export default Menu;
