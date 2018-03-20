import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.onSave = this.onSave.bind(this);
  }

changeName(e) {
  this.setState({
    name : e.target.value
  })
}


changeEmail(e){
  this.setState({
    email : e.target.value
  })

}

onSave() {
  this.props.onSubmit(this.state.name, this.state.email)
  this.setState({
    name: '',
    email: ''
  })
}

  render() {

    return (
      <div className="Form">
        <input type="text" placeholder=" write name here.." onChange={this.changeName}/>
        <input type="text" placeholder=" write email here.." onChange={this.changeEmail} />
        <button onClick={this.onSave}> Save </button>
      </div>
    );
  }
}

export default Form;
