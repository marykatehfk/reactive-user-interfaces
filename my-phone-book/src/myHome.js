import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './myHome.css';

class myHome extends Component {


  render() {

    return (
      <div className="home">
       <Link to={'/components'}>Enter Phone Book</Link>
      </div>
    );
  }
}

export default myHome;
