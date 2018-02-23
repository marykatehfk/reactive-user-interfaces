import React, { Component } from 'react';
import './Poster.css';

class Poster extends Component {
  render() {
    return (
      <div className="Poster">
        <div className="helveticaText"> {this.props.posterTitle} </div>
        <div className="courierText">
        <p> {this.props.locationTitle} </p>
        <p> {this.props.timeTitle} </p>
        </div>
      </div>
    );
  }
}

export default Poster;
