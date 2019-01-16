import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../actions/authActions';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
class RegisterUser extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{}
        }
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleConfirmInput = this.handleConfirmInput.bind(this);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    }
    componentWillReceiveProps(nextProps){
     this.setState({
        errors: nextProps.errors
        });
    }
    handleSubmitEvent(){      
        const user = {
            name : this.state.name,
            email : this.state.email,
            password:this.state.password,
            password2:this.state.password2            
        };
        this.props.registerUser(user,this.props.history);      
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
        let errors = this.state.errors;
        return(
            <div>
                <div className="form-group">
                Name <input value={this.state.name} onChange={this.handleNameInput} className="form-control" type='text' /><br/>
                {errors.name &&(<div>{errors.name}</div>)}
                </div>               
                <div className="form-group">
                Email <input value={this.state.email} onChange={this.handleEmailInput} className="form-control" type='text' /><br/>
                {errors.email &&(<div>{errors.email}</div>)}
                </div>
                <div className="form-group">
                Password <input value={this.state.password} onChange={this.handlePasswordInput} className="form-control" type='text' /><br/>
                {errors.password &&(<div>{errors.password}</div>)}
                </div>
                <div className="form-group">
                Confirm Password <input value={this.state.password2} onChange={this.handleConfirmInput} className="form-control"  type='text' /><br/>
                {errors.confirm &&(<div>{errors.confirm}</div>)}
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
export default connect(mapStateToProps,{registerUser})(withRouter(RegisterUser));