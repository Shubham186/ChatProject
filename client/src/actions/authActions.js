import {GET_ERRORS} from './types'
import {SET_CURRENT_USER} from './types'
import axios from 'axios';

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