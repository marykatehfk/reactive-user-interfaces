import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Poster from './Poster.js';

class App extends Component {
  constructor(props){
    super(props)
    this.onEventChange = this.onEventChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.state = {
      eventName : "",
      locationName : "",
      timeName : ""
    }
  }

  onEventChange(txt) {
    this.setState({
      eventName : txt
    })
  }

  onLocationChange(txt) {
    this.setState({
      locationName : txt
    })
  }

  onTimeChange(txt) {
    this.setState({
      timeName : txt
    })
  }

  render() {

    return (
      <div className="App">
        <div className="TextLeft">
        <Input label="Event Name" onChange = {this.onEventChange}/>
        <Input label="Location" onChange = {this.onLocationChange}/>
        <Input label="Time" onChange = {this.onTimeChange}/>
        </div>

        <div className="PosterRight">
        <Poster posterTitle = {this.state.eventName}
          locationTitle = {this.state.locationName}
          timeTitle = {this.state.timeName}/>
        </div>
      </div>
    );
  }
}

export default App;
