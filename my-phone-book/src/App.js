import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts.js';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import myHome from './myHome.js';
import Notes from './Notes.js';
import Form from './Form.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {name: 'Mary Kate', address: '3680 Zhangyang Lu, Shanghai', phone: '86 18621001595', email: 'marykate@nyu.edu', id:'marykate', memo:""},
        {name: 'Nora', address: 'Fanciest villa in the Amazon Rainforest, Peru', phone: '86 27384938293', email: 'nora@nyu.edu', id:'nora', memo:""},
        {name: 'Leidy', address: 'Shanghai, China', phone: '86 28374949222', email: 'leidy@nyu.edu', id:'leidy', memo:""},
        {name: 'Haitian', address: 'Suzhou, China', phone: '86 185384849400', email: 'haitian@nyu.edu', id:'haitian', memo:""},
        {name: 'Jason', address: 'Bayshore Road, Singapore', phone: '64 34849493922', email: 'jason@nyu.edu', id:'jason', memo:""},
        {name: 'Lily Kate', address: 'Bayshore Road, Singapore', phone: '64 3849404022', email: 'lilykate@nyu.edu', id:'lilykate', memo:""},
        {name: 'Alicia', address: '11 Raoul Rochecouste, Rose Hill, Mauritius', phone: '230 4643801', email: 'alicia@nyu.edu', id:'alicia', memo:""},
        {name: 'Jerome', address: '11 Raoul Rochecouste, Rose Hill, Mauritius', phone: '230 4643801', email: 'jerome@nyu.edu', id:'jerome', memo:""},
        {name: 'Ian', address: 'Ontario, Canada', phone: '1 23940982930', email: 'ian@nyu.edu', id:'ian', memo:""},
        {name: 'Yi Sul', address: 'California, USA', phone: '1 2839405382', email: 'yisul@nyu.edu', id:'yisul', memo:""},
      ]
    };
    this.updateMemo = this.updateMemo.bind(this);
    this.addNewContact = this.addNewContact.bind(this);

    const stringState = localStorage.getItem('contactsData');
    if (stringState) {
      this.state = JSON.parse(stringState);
    }
  }

updateMemo (id, text){

  const index =  this.state.contacts.findIndex(c =>
    c.id === id)

  let myCopy = this.state.contacts.slice();
  let personCopy = Object.assign({}, myCopy[index]);
  personCopy.memo = text;
  myCopy[index] = personCopy;
  // update person in myCopy

//myCopy[index] = Object.assign(person, { memo: text });
  //make a copy of the person and assign the memo to be text

    this.setState({
      contacts: myCopy
    })
  //onsole.log(myCopy);


  // find the person
  // setstate to update person with memo
}

addNewContact(name, address, phone, email, id) {
  //const myCopy = this.props.contacts.slice();
  //console.log(myCopy);
  const myCopy = this.state.contacts.slice();
    myCopy.push({
      name: name,
      address: address,
      phone: phone,
      email: email,
      id: name,
    });
    this.setState({
      contacts: myCopy
    });
  //  console.log(myCopy);
  }

componentDidUpdate() {
  localStorage.setItem('contactsData', JSON.stringify(this.state));
}

  render() {

    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={myHome} />
          <Route exact path="/components" render={props => {
          return <Contacts contacts={this.state.contacts}/>;

        }} />

          <Route exact path="/components" render={props => {
          const addContact = this.state.contacts.slice();
          return <Form myCopy={addContact} onSave={this.addNewContact}/>
        }} />

        <Route exact path="/notes/:id" render={props => {
          const note = this.state.contacts.find(contact =>
            props.match.params.id === contact.id
          );
          return <Notes contact={note} onSave = {this.updateMemo} /> ;
        }}
        />
        </div>
      </Router>
    );
  }
}

export default App;
