import React, { Component } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(page) {
    //console.log(page);
    //now that we know that it can do the page number, we can fetch and do the page number
    fetch ("https://swapi.co/api/people/?page=" + page)
      .then(response => {
        if (response.ok) {
          return response.json();
          console.log(response);
        } else {
          throw new Error("Something went wrong ..."); // if the response is not ok, add this error message
        }
      })
      .then(data => {
        let myCopy = this.state.people.concat(data.results); //data.results is where the infos are
        this.setState({ people : myCopy });
      });
  }

  render() {
    const people = this.state.people.map(p => (
      <div className="person" key={p.url}>
        <h2>{p.name}</h2>
        <p>Hair color: {p.hair_color}</p>
      </div>
    ));

    return (
      <div className="App">
        Hello, this is the scroll
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
          >
          {people}
          </InfiniteScroll>
      </div>
    );
  }
}

export default App;
