import React, { Component } from 'react';
import './App.css';
import{ BrowserRouter,Route,Link,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import RegisterUser from './components/Register';
import LoginUser from './components/Login';
import store from './store'
import DashBoard from './components/DashBoard';

const ProtectedRoute = ({component:RecievedComponent,...rest}) => {
  const isAuth =store.getState().auth.isAuthenticated;
  return(
    <Route {...rest} render={(props)=>(isAuth ===true?<RecievedComponent {...props} /> : <Redirect to='/login' />)} />
  );
};
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
           <ProtectedRoute path='/dashboard' component={DashBoard} />
           <Route path='/register' component={RegisterUser} />
           <Route path='/login' component={LoginUser} />
          </div>
       </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
