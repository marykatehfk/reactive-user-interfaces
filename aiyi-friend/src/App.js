import React, { Component } from 'react';
import './App.css';
import './eating.jpg';
import Facts from './Facts.js';
import Questions from './Questions.js';
import Menu from './Menu.js';

class App extends Component {
  //state with array of all aiyis.
  constructor(props) {
    super(props)
    this.state = {
      //questions: [],
      aiyis: [
        {pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers', id: 'a'},

      ]
    };

  }


  render() {


    return (

        <div className="App">

      <Facts aiyis={this.state.aiyis}/>

      <Questions Qlabel="Ask me a question: " />

        </div>

    );
  }
}

export default App;
