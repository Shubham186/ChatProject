import React, { Component } from 'react';
import './App.css';
import{ BrowserRouter,Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import RegisterUser from './components/Register';
import LoginUser from './components/Login';
import store from './store'

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
        }   
    }
    clickHandler(){            
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
