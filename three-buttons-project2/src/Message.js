import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <p>You have selected: {this.props.messageTitle} </p>
      </div>
    );
  }
}

export default Message;
