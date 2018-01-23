import React, { Component } from 'react';
import logo from './logo.svg';
import { sendMessage } from './api';
import './App.css';

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'',
            chatMessage:[]
        };
    }

    componentDidMount(){
        socket.on('chat message', message => {
            let chatMessage = this.state.chatMessage;
            chatMessage.push(message);
            this.setState({chatMessage})})
    }

    changeMessage = (event) =>{
        this.setState({message: event.target.value})
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ul>
              {this.state.chatMessage.map((message,index)=> <li key={index}>{message}</li>)}
          </ul>
          <form onSubmit={(event)=> {sendMessage(this.state.message); event.preventDefault();}}>
              <input value={this.state.message} onChange={this.changeMessage} />
              <button type="submit">Send</button>
          </form>
      </div>
    );
  }
}

export default App;
