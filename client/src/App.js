import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import{ BrowserRouter,Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import RegisterUser from './components/Register';
import LoginUser from './components/Login';
import store from './store'

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
      <Provider store={store}>
       <BrowserRouter>   
          <div className="App">
           <Route path='/register' component={RegisterUser} />
           <Route path='/login' component={LoginUser} />
          </div>
       </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
