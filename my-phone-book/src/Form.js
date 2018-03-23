import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.addressInput = this.addressInput.bind(this);
    this.phoneInput = this.phoneInput.bind(this);
    this.emailInput = this.emailInput.bind(this);

    this.state = {
      name: '',
      address: '',
      phone: '',
      email: '',
      id: ''
    }
  }

  nameInput(e) {
    this.setState({
      name: e.target.value
    })
  }

  addressInput(e) {
    this.setState({
      address: e.target.value
  })
  }

  phoneInput(e) {
    this.setState({
      phone: e.target.value
    })
    //console.log(this.state.phone);
  }

  emailInput(e) {
    this.setState({
      email: e.target.value
    })
  }

  addContact () {
    this.props.onSave(this.state.name, this.state.address, this.state.phone, this.state.email,this.state.id);
    this.setState({
      name: '',
      address: '',
      phone: '',
      email: '',
      id: ''
    })
    console.log(this.state);
    //ask Professor why the setState does not clear the fields again
  }

  render() {

    return (
      <div className="Form">
        <h3>Enter New Contact Information below: </h3>
        <div className="inputs">
        <input type="text" className="text" placeholder="enter name..." onChange={this.nameInput}/>
        <p><input type="text" className="text" placeholder="enter address..." onChange={this.addressInput}/></p>
        <p><input type="text" className="text" placeholder="enter phone..." onChange={this.phoneInput}/></p>
        <p><input type="text" className="text" placeholder="enter email..." onChange={this.emailInput}/></p>
</div>
        <button onClick={this.addContact}> add contact </button>
      </div>
    );
  }
}

export default Form;
