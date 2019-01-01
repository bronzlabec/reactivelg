import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  backArr = ['--pink', '--green', '--yellow', '--lila'];
  backStyle = {
    backgroundColor: this.getColor()
  };
  
  getColor() {
    let rand = Math.floor(Math.random() * 4);
    return `var(${this.backArr[rand]})`;
  }

  render() {
    return (
      <div className="App" style={this.backStyle} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edited today.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
