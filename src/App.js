import React, {Component} from 'react';
import Todo from './Components/Todo/Todo.components'
import Login from './Components/Login/Login'

const users = [
  {
      username: "Uzair",
      password: '1234567'
  },
  {
      username: "Tanzeel",
      password: '1234567'
  },
  {
      username: "Ahmed",
      password: '1234567'
  }

]

class App extends Component {
  // status;
  state = {
    username: "",
    password: "",
    status: null
    }

  formChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  formSubmit = (event) => {
    // alert(this.state.username);
    event.preventDefault();
    const status = users.some(val => val.username.toLowerCase() === this.state.username.toLowerCase() && val.password.toLowerCase() === this.state.password.toLowerCase());
    // this.state.status = status;
    this.setState({status: status})
  }

  render() {
    return (
      <div>
        {this.state.status === false || this.state.status === null ?
          <Login username={this.state.username} password={this.state.password} formchange={this.formChange} formsubmit={this.formSubmit} status={this.state.status}/> 
          : <Todo/>}
      </div>
    );
  }
}

export default App;
