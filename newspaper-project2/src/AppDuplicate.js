import React, { Component } from 'react';
import './App.css';
import Article from './Article.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
          date = "Feb. 6, 2018"
          heading = "How Does Monday's Stock Plunge Stack Up?"
          description = "Stock investors have endured a number of big drops over past three decades. Monday's sell-off, on a percentage basis, isn't close to the worst."
          byline = "by STEPHEN GROCER"
          image = "https://static01.nyt.com/images/2018/02/06/business/06DB-STOCKHIS2/06DB-STOCKHIS2-mediumThreeByTwo210.jpg"
        />
        <Article
          date = "Feb. 5, 2018"
          heading = "Starboard Value Criticizes Mellanox for Stock Sales"
          description = "The activist hedge fund says corporate insiders showed a lack of faith in the chip maker by selling more of the company's shares than they bought."
          byline = "by MICHAEL J."
          image = "https://static01.nyt.com/images/2018/02/06/world/06db-mellanox-1/06db-mellanox-1-mediumThreeByTwo210.jpg"
        />
        <Article
          date = "Feb. 5, 2018"
          heading = "How Silicon Valley Came to Be a Land of 'Bros'"
          description = "Why is the tech industry populated with so many aggressive dudes and so feew women? Emily Chang examined the issue in her book, 'Brotopia', and shared her findings with us."
          byline = "by PUI-WING TAM"
          image = "https://static01.nyt.com/images/2018/02/03/business/05BROTOPIA-1/05BROTOPIA-1-mediumThreeByTwo210-v2.jpg"
        />
      </div>
    );
  }
}

export default App;
