import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      people: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      this.setState({
        isLoading: false,
        people: json.results
      });
    })
  }
  render() {

      if (this.state.isLoading) {
        return <p> Loading... </p>
      }

      const List = this.state.people.map(p => {
        const splitUrl = p.url.split("/");
        const id = splitUrl[splitUrl.length - 2];

        return (
          <div key={p.url}>

            <Link to={"/people/" + id}> <h1> {p.name} </h1></Link>

          </div>
        )
      });

      return <div className="HomePage">
      <p> This is the Homepage! </p>
      {List}
      </div>

  }
}

export default HomePage;
