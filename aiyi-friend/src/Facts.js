import React, { Component } from 'react';
import './Fact.css';
import Eating from './eating.jpg';

class Facts extends Component {


  render() {
    let arrayCopy = this.props.aiyis.slice();

    const facts = arrayCopy.map(fact  => {
      return(
        <div key = {fact.id} className="profile">
          <img alt="Eating" src={Eating} className="pic" />
          <p className="name"> {fact.name}</p>
          <div className="fact">
          <p > Birthday: {fact.bday}</p>
          <p > Favourite Food: {fact.favfood}</p>
          <p > Cannot Live Without: {fact.without}</p>
          <p > Best Day: {fact.bestday}</p>
          <p > Never Give Me: {fact.never}</p>
          </div>
        </div>
      )
    });

    return (
      <div className="Facts">
      {facts}

      </div>
    );
  }
}

export default Facts;
