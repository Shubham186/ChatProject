import React, { Component } from 'react';

class RegisterUser extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                Name<input type='text' /><br/>
                Email<input type='text' /><br/>
                Password<input type='text' /><br/>
                Confirm Password<input type='text' /><br/>
                <button type='button'>Submit</button>
            </div>
        );
    }    
}

export default RegisterUser;