import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import{ BrowserRouter,Route,Link} from 'react-router-dom';

import RegisterUser from './components/Register';
import LoginUser from './components/Login';

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
     <BrowserRouter>   
        <div className="App">
          <Route path='/register' component={RegisterUser} />
          <Route path='/login' component={LoginUser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;