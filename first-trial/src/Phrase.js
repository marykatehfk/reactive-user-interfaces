import React, { Component } from 'react';
import './Phrase.css';

class Phrase extends Component {
  render() {
    return (
      <div className="Phrase">
        {this.props.sentences}
      </div>
    );
  }
}

export default Phrase;