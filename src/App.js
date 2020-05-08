import React, {Component} from 'react';
import Todo from './Components/Todo/Todo.components'
// import Login from './Components/Login/Login'
import Signup from "./Components/Signup/Signup.component"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Authenticated from './Components/Authenticated/Authenticated';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Authenticated exact path="/">
              <Todo/>
          </Authenticated>
          <Route path="/signup">
            <Signup />
          </Route>
          {/* <Route path="/login">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
