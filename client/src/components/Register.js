import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../actions/authActions';
import PropTypes from 'prop-types';

class RegisterUser extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password2:""
        }
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleConfirmInput = this.handleConfirmInput.bind(this);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    }
    handleSubmitEvent(){
        this.props.registerUser({message:"Hello"});  
    }
    handleNameInput(e) {
        this.setState({
            name:e.target.value
        });
  }
  handleEmailInput(e) {
      this.setState({
          email:e.target.value
      });
  }
  handlePasswordInput(e) {
      this.setState({
        password:e.target.value
      });
     }
  handleConfirmInput(e) {
  this.setState({
    password2:e.target.value
  });
 }
    render(){
        return(
            <div>
                <div className="form-group">
                Name <input value={this.state.name} onChange={this.handleNameInput} className="form-control" type='text' /><br/>
                </div>
                <div className="form-group">
                Email <input value={this.state.email} onChange={this.handleEmailInput} className="form-control" type='text' /><br/>
                </div>
                <div className="form-group">
                Password <input value={this.state.password} onChange={this.handlePasswordInput} className="form-control" type='text' /><br/>
                </div>
                <div className="form-group">
                Confirm Password <input value={this.state.password2} onChange={this.handleConfirmInput} className="form-control"  type='text' /><br/>
                </div>
                <button className='btn btn-outline-primary' onClick={this.handleSubmitEvent} type='button'>Submit</button>
            </div>
        );
    }    
}
RegisterUser.propTypes={
    registerUser:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth:state.auth,
    errors:state.errors
});
export default connect(mapStateToProps,{registerUser})(RegisterUser);