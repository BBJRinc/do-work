import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Sweetest Most Coolest App Around</h1>
        </header>
        
        <h3>This was a great change.</h3>
        
        <h1>this is rendering</h1>
      </div>
    );
  }
}

export default App;
