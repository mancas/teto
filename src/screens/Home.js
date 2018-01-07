import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/screens/home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {name: 'Manu'}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/screens/Home.js</code> and save to reload.
        </p>
        <p>Holka mund {this.state.name}!!</p>
      </div>
    );
  }
}

export default Home;
