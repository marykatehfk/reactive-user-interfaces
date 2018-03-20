import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {name: 'Mary Kate', email: 'mk@nyu.edu'},
        {name: 'Nora', email: 'nora@nyu.edu'},
        {name: 'Haitian', email: 'dirina@nyu.edu'},
        {name: 'Leidy', email: 'leidy@nyu.edu'}
      ]
    }
    this.addPerson = this.addPerson.bind(this);

  }

  addPerson(name, email) {
    let contactsCopy = this.state.contacts.slice();
    contactsCopy.push({
      name: name ,
      email: email
    });

    this.setState({
      contacts: contactsCopy
    });

  }


  render() {
    const list = this.state.contacts.map((p,i) => {
      return <p key={i}>
                <span className="title">name:</span> {p.name} - <span className="title">email:</span> {p.email}
            </p>
    })

    return (
      <div className="App">
        Hello, add someone to your contact list:
        {list}

        <Form onSubmit={this.addPerson}/>
      </div>
    );
  }
}

export default App;
