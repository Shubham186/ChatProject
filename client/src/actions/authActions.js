import {GET_ERRORS} from './types'
import {SET_CURRENT_USER} from './types'
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import io from "socket.io-client";

//Register user
export const registerUser = userData => dispatch=>{
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/register",
        "method": "POST",
        "headers": {    
          "cache-control": "no-cache",
        },
        "data": userData
      }
    axios(settings).then(response=>{
        console.log(response);
    },err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data.errors});
    });
}
//Login user
export const loginUser = user =>dispatch=>{   
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "/login",
        "method": "POST",
        "headers": {    
          "cache-control": "no-cache",
        },
        "data": user
      }    
    axios(settings).then(res=>{  
        const {token} = res.data;
        localStorage.setItem('jwtToken',token); 
        setAuthToken(token);
        const decoded = jwtDecode(token);      
        dispatch({
            type:SET_CURRENT_USER,
            payload:decoded
        });
        const socket = io("localhost:3001");
        const {name} = decoded.user;
        socket.on('connect',()=>{
            console.log(`${name} connected`);
        });
    }).catch(err=>dispatch({
        type:GET_ERRORS,
       payload: err.response.data.errors
    }));
}