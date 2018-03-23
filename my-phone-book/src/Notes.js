import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
  constructor(props){
  super(props)
  this.state = {
    text: ''
  }
  this.newText = this.newText.bind(this);
  }

  newText (e) {
    this.setState({
      text: e.target.value
    })
    this.props.onSave(this.props.contact.id, this.state.text);
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
