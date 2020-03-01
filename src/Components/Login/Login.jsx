import React, {Component} from 'react';
import Username from '../Username/Username';
import Password from '../Password/Password';
import './Login.css'
import Alert from '../Alert/Alert';
import AlertFail from '../AlertFail/AlertFail';
// import users from './data.js'


class Login extends Component {

    render() {
        return (
          <div>

            {this.props.status == true && <Alert/>}
            {this.props.status == false && <AlertFail/>}

            <form onSubmit={this.props.formsubmit}>
 
            <div className="container">
              <Username value={this.props.username} change={this.props.formchange}/>
              <Password value={this.props.password} change={this.props.formchange}/>
              <button type="submit">Login</button>
            </div>

            </form>
          </div>
        );
      }
}

export default Login;