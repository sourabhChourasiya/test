import React, { Component } from 'react';
import logo from './logo.svg';
import { subscribeToTimer } from './api';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: 'no timestamp yet'
        };
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));
    }
  
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
