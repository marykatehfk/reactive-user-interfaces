import React, { Component } from 'react';
import Article from './Article.js'
import './App.css';


class App extends Component {
  render() { 
    return (
      <div className="App">
        <Article 
          heading="Amazon and Apple Gush Over Holiday Sales" 
          date="Feb. 2, 2018" 
          sentence="The tech giants singled out booming results from their devices in their quarterly financial results."
          byline="By NICK WINGFIELD and BRIAN X. CHEN" 
          image = "https://static01.nyt.com/images/2018/02/07/dining/07Cocktail/07Cocktail-mediumThreeByTwo210.jpg"
        />

        <p>
        <Article 
          heading="Nicholas Von Hoffman, Provocative Journalist and Author, Dies at 88." 
          date="Feb. 1, 2018" 
          sentence="In columns and books, Mr. Von Hoffman examined American politics and culture from a left-wing perspective over five decades."
          byline="By ROBERT D. McFADDEN" 
          image = "https://static01.nyt.com/images/2018/02/02/business/02ALIBABA/02ALIBABA-mediumThreeByTwo210.jpg"
        />
        </p>

        <p>
        <Article 
          heading="Microsoft Sales Lifted by Cloud Computing" 
          date="Jan. 31, 2018" 
          sentence="The company's shift to providing cloud services continues to pay off, as its revenue rose to $28.92 billion last quarter."
          byline="By NICK WINGFIELD" 
          image="https://static01.nyt.com/images/2018/02/03/business/03MONEY/03MONEY-mediumThreeByTwo210-v2.jpg"
        />
        </p>

      </div>
    );
  }
}

export default App;
