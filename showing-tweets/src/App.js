import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.sortAscending = this.sortAscending.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
    this.searchMe = this.searchMe.bind(this);
    this.state = {
      search: "",
      sort: 1,
      tweets : [
        {name: 'Mary Kate', hobby: 'Baking First Cake', favourite: 'chocolate'},
        {name: 'Mary Kate', hobby: 'Baking Second Cake', favourite: 'pistachio'},
        {name: 'Mary Kate', hobby: 'Baking Third Cake', favourite: 'chocolate'},
        {name: 'Mary Kate', hobby: 'Baking Fourth Cake', favourite: 'pistachio'},
        {name: 'Mary Kate', hobby: 'Baking Fifth Cake', favourite: 'chocolate'},
        {name: 'Mary Kate', hobby: 'Baking Sixth Cake', favourite: 'pistachio'},
        {name: 'Mary Kate', hobby: 'Baking Seventh Cake', favourite: 'chocolate'},
        {name: 'Mary Kate', hobby: 'Baking Eighth Cake', favourite: 'pistachio'},
      ]
    }
  }

  sortAscending () {
    this.setState ({
      sort: 1
    })
  }

  sortDescending () {
    this.setState ({
      sort: 2
    })
  }

  searchMe (e) {
    this.setState ({
      search: e.target.value
    })
  }

  render() {
    let arrayCopy = this.state.tweets.slice();

    if (this.state.searchMe !== "") {
      arrayCopy = arrayCopy.filter(tweet => {
        return tweet.hobby.match(this.state.searchMe);
      });

    }

    const tags = arrayCopy.map((tweet,i) => {
      return(
        <div key = {i}>
          >>> {tweet.name} : {tweet.hobby} and {tweet.favourite}
        </div>
      )
    })
    return (
      <div className="App">
      <div className="sortbutton">
        <input type="text" onChange={this.searchMe} />
        <button onClick = {this.sortAscending}> All </button>
        <button onClick = {this.sortDescending}> Choco </button>
      </div>
      {tags}

      </div>
    );
  }
}

export default App;
