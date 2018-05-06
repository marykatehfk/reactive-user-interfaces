import React, { Component } from 'react';
import './Aiyipage.css';
import { Link } from 'react-router-dom';

class Aiyipage extends Component {

  render() {

    return (
      //Use the aiyi prop and find the facts in the array of aiyi objects.
      <div>
      <Link to="/" className="back">Back</Link>
      <div className="profile">
        <img alt="Eating" src={this.props.aiyi.pic} className="pic" />
        <p className="name"> {this.props.aiyi.name}</p>
        <div className="fact">
          <p > Birthday: <span>{this.props.aiyi.bday}</span></p>
          <p > Favourite Food: <span>{this.props.aiyi.favfood}</span></p>
          <p > Cannot Live Without: <span>{this.props.aiyi.without}</span></p>
          <p > Best Day: <span>{this.props.aiyi.bestday}</span></p>
          <p > Give Me: <span>{this.props.aiyi.never}</span></p>
        </div>

      </div>
      </div>
    );
  }
}

export default Aiyipage;
