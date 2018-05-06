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
      aiyis: [
        {floor: "First Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Second Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Third Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Fourth Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Fifth Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Sixth Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Seventh Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Eighth Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'},
        {floor: "Ninth Floor", pic: "eating.jpg", name: 'MARY KATE', bday: '24th May', favfood: 'Bread', without: 'My umbrella', bestday: 'When the stars are out', never: 'Flowers'}
      ],
      selected: "First Floor"
    };
    this.buttonClicked = this.buttonClicked.bind(this);

  }
  buttonClicked (value) {
    this.setState({
      selected: value
  })

}

  render() {
    const isfirstfloor = this.state.selected === 'First Floor';
    const issecondfloor = this.state.selected === 'Second Floor';
    const isthirdfloor = this.state.selected === 'Third Floor';

    //this finds the aiyi of the floor, and returns 1 aiyi
    const aiyi = this.state.aiyis.find(aiyi => {
      //console.log(aiyi.floor, this.state.selected);

      return aiyi.floor === this.state.selected
    });

    //console.log(aiyi);
    return (

      <div className="App">
       <div className="menu">
        <Menu value = "First Floor" selected = {isfirstfloor} onClick={this.buttonClicked} active={this.state.selected === "First Floor"}/>
        <Menu value = "Second Floor" selected = {issecondfloor} onClick={this.buttonClicked} active={this.state.selected === "Second Floor"}/>
        <Menu value = "Third Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Third Floor"}/>
        <Menu value = "Fourth Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Fourth Floor"}/>
        <Menu value = "Fifth Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Fifth Floor"}/>
        <Menu value = "Sixth Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Sixth Floor"}/>
        <Menu value = "Seventh Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Seventh Floor"}/>
        <Menu value = "Eighth Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Eighth Floor"}/>
        <Menu value = "Ninth Floor" selected = {isthirdfloor} onClick={this.buttonClicked} active={this.state.selected === "Ninth Floor"}/>
        </div>
        <div className="main">

          <Facts aiyi={aiyi}/>
          <Questions Qlabel="Ask me a question:  " />
        </div>
      </div>

    );
  }
}

export default App;
