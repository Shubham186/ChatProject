import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            endpoint:"localhost:3001"
        }
        this.socket = io(this.state.endpoint);
    }
    clickHandler(){
       this.socket.emit('Hello');
    }
  render() {
    return (
      <div className="App">
          <button type='button' onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default App;
