import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";

import {isAuthenticated} from "./index";

const PrivateRoute= ({ component: Component, ...rest }) => { //multiple things can be rendered when we use/injected children
    return (
      <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
            <Component{...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;