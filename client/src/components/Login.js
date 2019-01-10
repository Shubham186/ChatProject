import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authActions';
import PropTypes from 'prop-types';

class LoginUser extends Component {
    constructor(props){
        super(props);
        this.state={
            password:"",
            email:""
        }
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePassInput = this.handlePassInput.bind(this);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    }
    handlePassInput(e){
         this.setState({
             password:e.target.value
         });
    }
    handleEmailInput(e){
        this.setState({
            email:e.target.value
        });
    }
    handleSubmitEvent(){
        const user = {
            email:this.state.email,
            password:this.state.password
        };
        this.props.loginUser(user);
    }
    render(){
        return(
            <div>  
                <div className="form-group">
                Email <input value={this.state.email} onChange={this.handleEmailInput} className="form-control" type='text' /><br/>         
                </div>             
            <div className="form-group">
                Password <input value={this.state.password} onChange={this.handlePassInput} className="form-control" type='text' /><br/>              
                </div>                             
                <button className='btn btn-info' onClick={this.handleSubmitEvent} type='button'>Submit</button>
            </div>
        );
    }    
}
const mapStateToProp = state =>({
   auth:state.auth,
   error:state.error
});
export default connect(mapStateToProp,{loginUser})(LoginUser);