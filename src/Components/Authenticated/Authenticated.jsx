import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {connect} from 'react-redux';

const Authenticated = ({ children, error, ...rest }) => {
    const token = localStorage.getItem('token') || false;
    if(error !== "TokenExpiredError"){
      localStorage.removeItem("token");

    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            token ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signup",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}

const mapStateToProps = state => {
  return {
    error : state.signup.error
  }
}

export default connect(mapStateToProps)(Authenticated);