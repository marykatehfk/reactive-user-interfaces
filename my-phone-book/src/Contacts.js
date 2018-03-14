import React, { Component } from 'react';
import './Contacts.css';
import { Link } from 'react-router-dom';
import ChinaButton from './ChinaButton.js';

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchMe:"",
      sorting: 'asc',
      inChina: 'no',
      alphabetical: 'no',
    };
    this.searchMe = this.searchMe.bind(this);
    this.showChina = this.showChina.bind(this);
    this.sortAlphabetical = this.sortAlphabetical.bind(this);
  }
  searchMe (e) {
    this.setState({
      searchMe: e.target.value
    })
  }

  sortAlphabetical () {
    if(this.state.alphabetical === 'no') {
      this.setState({
        alphabetical: 'yes'
      })
  } else {
    this.setState({
      alphabetical: 'no'
    })
  }
}

  showChina (title) {
    if(this.state.inChina === 'no') {
      this.setState({
        inChina: title
      })
    } else {
      this.setState({
        inChina: 'no'
      })
    }
  }

  render() {
    let arrayCopy = this.props.contacts.slice();

    if (this.state.searchMe !== "") {
      arrayCopy = arrayCopy.filter(searchItem => {
      return (searchItem.name.match(this.state.searchMe) ||
      searchItem.address.match(this.state.searchMe) ||
      searchItem.phone.match(this.state.searchMe) ||
      searchItem.email.match(this.state.searchMe)
      );
    });
    }

    if (this.state.alphabetical === 'yes') {
      arrayCopy = arrayCopy.sort((nameA, nameB) => nameA.name > nameB.name);
    }

    if (this.state.inChina === 'China') {
      arrayCopy = arrayCopy.filter(chinaContacts => {
        return (chinaContacts.address.match("China"))
      });
    }

    const book = arrayCopy.map(contact => {
      return(
        <div className="entry" key = {contact.id}>
          <h1>{contact.name}</h1>
          <p> <span id="title">address </span>{contact.address}</p>
          <p> <span id="title">phone </span>{contact.phone}</p>
          <p> <span id="title">email </span>{contact.email}</p>
          <Link to={'/notes/' + contact.id} className="back">memo</Link>
        </div>
      )
    });

    return (
      <div className="Contacts">
        <Link to="/" className="back">Back</Link>
        <div className="searching">
          <p><input type="text" className="text" onChange={this.searchMe} placeholder="search contacts"/></p>
          <button className="sortButton" onClick={this.sortAlphabetical}> A to Z </button>
          <ChinaButton onClick={this.showChina} title="China" active={this.state.inChina === "China"} />
        </div>
        {book}

      </div>
    );
  }
}

export default Contacts;
