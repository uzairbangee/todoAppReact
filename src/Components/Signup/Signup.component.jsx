import React, {Component} from 'react';
import './signup.css'
import Input from '../Input/Input.component';
import Alert from '../Alert/Alert';
import AlertFail from '../AlertFail/AlertFail';
// import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import SignupMiddleware from '../../Store/middleware/signupMiddleware';
import { Redirect } from "react-router-dom";
import SignupAction from "../../Store/action/signupAction";



class Signup extends Component {

  state = {
    username: "",
    password: "",
    c_password: "",
    message: ""
    }

  formChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmit = (event) => {
    event.preventDefault();
    if(this.state.password === this.state.c_password){
      if(this.state.password.length >= 8){
        this.setState({message : undefined});
        this.props.userSignup({
          username : this.state.username,
          password : this.state.password
        });
      }
      else{
        this.setState({message : "Password length should be greater than 8"});
      }
    }
    else{
      this.setState({message : "Password and Confirm password doest not match"});
    }
  }

    render() {
      console.log(this.props);
      const {loading, authenticated} = this.props;
        if(authenticated){
          return <Redirect to='/'/>
        }
        return (
          <div>

            {this.props.errorMessage && <Alert type="danger" message={this.props.errorMessage}/>}

            <form onSubmit={this.formSubmit} onChange={this.formChange}>
 
            <div className="container block">
              <Input 
                type={'text'}
                name={'username'}
                label={'Username'}
                placeholder={'Username'}
              />
              <Input
                type={'password'}
                name={'password'}
                label={'Password'}
                placeholder={'Password'}
              />
              <Input
                type={'password'}
                name={'c_password'}
                label={'Confirm Password'}
                placeholder={'Confirm Password'}
              />
              {this.state.message && <p>{this.state.message}</p>}
              { 
              loading ?
                <button type="submit" className="submit" disabled={true}>
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
                ....Please Wait
              </button>
              :
              <button type="submit" className="submit">Sign Up</button>
              }
            </div>

            </form>
          </div>
        );
      }
}

const mapStateToProps = (state) => {
  return {
    loading : state.signup.loading,
    authenticated : state.signup.authenticated,
    errorMessage : state.signup.errorMessage,
    error : state.signup.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup : (data) => dispatch(SignupMiddleware.signupMiddleware(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);