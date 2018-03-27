import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      articles: []
    };
  }

  componentDidMount() {
    //this component is rendered for the first time, now load data here

    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2663a6d57fc14ea28fb2c6aa07827f5d")
    .then(response =>{
      return response.json();
    })
    .then(data =>
      this.setState({
        isLoading: false,
        articles: data.response.docs
      })

    );
  }
  render() {
    //if isLoading is true
    if(this.state.isLoading) {
      return (
        <div className="App">
          <p>Loading...</p>
          </div>
        );
      }
      //if it is false
      else {
        const article = this.state.articles[0];
        console.log(article)
        return (
          <div className="App">
            <h1>{article.headline.main}</h1>
            <p>{article.snippet}</p>
            <a href={"https://shanghai.nyu.edu/"}>Visit this website</a>
            </div>
          );
      }
    }
}

export default App;
