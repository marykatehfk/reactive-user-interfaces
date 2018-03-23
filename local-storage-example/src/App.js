import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
    this.deleteList = this.deleteList.bind(this);

    const stringState = localStorage.getItem('contactData');
    if (stringState) {
      this.state = JSON.parse(stringState);
    } else {
      this.state = {
        contacts: []
      }
    }
  }

  addContact () {
    let myCopy = this.state.contacts.slice();
    myCopy.push({
      name: 'Mary Kate',
      email: 'mhf273@nyu.edu',
      id: this.state.contacts.length
    });

    this.setState({
      contacts: myCopy
    })
  }

  deleteList () {
    this.setState({
      contacts: []
    })
  }

  componentDidUpdate() {
    localStorage.setItem('contactData', JSON.stringify(this.state));
  }

  render() {

    const list = this.state.contacts.map(c => (
    <p key={c.id}>
    {c.name} and {c.email}
    </p>
    ));

    return (
      <div className="App">
        The List:
        {list}
        <p><button onClick={this.addContact}> add a contact </button></p>
        <button onClick={this.deleteList}> Delete </button>
      </div>
    );
  }
}

export default App;
