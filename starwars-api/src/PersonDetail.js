import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PersonDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      person: {}
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/" + this.props.match.params.id + "/")
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      this.setState({
        isLoading: false,
        person: json
      });
    })
  }
  render() {

      if (this.state.isLoading) {
        return <p> Loading... </p>
      }
      return (
        <div>
         <h2>{this.state.person.name}</h2>
           <p> Weight: {this.state.person.height} cm </p>
           <p> Mass: {this.state.person.mass} kg</p>
           <p> Hair color: {this.state.person.hair_color}</p>
           <p> Skin color: {this.state.person.skin_color}</p>
           <Link to={"/"} > Go back </Link>
        </div>
      );
    };
  }


export default PersonDetail;
