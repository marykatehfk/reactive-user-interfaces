import React, { Component } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      moused: false
    }
  }

  mouseOver() {
    this.setState({
      moused: true
    })
  }

  reset() {
    this.setState({
      moused: false
    })
  }

  render() {
    //console.log(this.state.moused);
    const classes = this.state.moused ? "sun animation" : "sun";

    return (
      <div className="Homepage">
        <img alt="sun" src="/download.png" className={classes} onMouseOver={this.mouseOver} onAnimationEnd={this.reset}/>
        <p>Hello! </p>
        <p>Meet the Aiyis of NYU Shanghai. You can navigate this space by clicking on a floor number to learn more about the Aiyi on the floor. </p>
        <p>Have a question? </p>
        <p>Use the questions bar to ask them any questions! </p>
        <p>Click on the FAQ to learn more about our Aiyis life at NYU Shanghai from Manager Xu. </p>
        <Link to="/infos">
          <button> FAQ </button>
        </Link>
      </div>
    );
  }
}

export default Homepage;
