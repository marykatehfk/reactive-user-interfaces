import React, { Component } from 'react';
import './Fact.css';
import Eating from './eating.jpg';

class Facts extends Component {
  // constructor(props) {
  //   super(props)
  // };

  render() {

    return (
      //Use the aiyi prop and find the facts in the array of aiyi objects.
      <div className="profile">

        <img alt="Eating" src={Eating} className="pic" />
        <p className="name"> {this.props.aiyi.name}</p>
        <div className="fact">
          <p > Birthday: {this.props.aiyi.bday}</p>
          <p > Favourite Food: {this.props.aiyi.favfood}</p>
          <p > Cannot Live Without: {this.props.aiyi.without}</p>
          <p > Best Day: {this.props.aiyi.bestday}</p>
          <p > Never Give Me: {this.props.aiyi.never}</p>
        </div>

      </div>
    );
  }
}

export default Facts;
