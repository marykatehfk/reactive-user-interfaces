import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
  constructor(props){
  super(props)
  this.newText = this.newText.bind(this);
  }

  newText (e) {
    let memo = e.target.value;
    this.props.onSave(this.props.contact.id, memo);
  }

  render() {

    return (
      <div className="Notes">
      <p>Add a memo here:</p>
      <input className="input" type="text" onChange={this.newText}/>
      <p><Link to="/components" className="back">Back</Link></p>
      </div>
    );
  }
}

export default Notes;
