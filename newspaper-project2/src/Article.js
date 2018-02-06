import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <time> {this.props.date} </time>
        <div className = "middle">
          <h2> {this.props.heading} </h2>
          <p className = "description"> {this.props.description} </p>
          <p className = "byline"> {this.props.byline} </p>
        </div>
        <figure>
        <img src = {this.props.image} />
        </figure>
      </div>
    );
  }
}

export default Article;
