import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <div className="date">{this.props.date}</div>
        <div className="heading"><h1>{this.props.heading}</h1>
          <p className="sentence">{this.props.sentence}</p>
          <p className="byline">{this.props.byline}</p>
        </div>
        <div className="image"> <img src= {this.props.image} /></div>
      </div>
    );
  }
}

export default Article;