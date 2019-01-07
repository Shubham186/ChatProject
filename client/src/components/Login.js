import React, { Component } from 'react';

class LoginUser extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>         
                Email<input type='text' /><br/>
                Password<input type='text' /><br/>            
                <button type='button'>Submit</button>
            </div>
        );
    }    
}

export default LoginUser;