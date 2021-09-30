import React from "react";
import { Route, Redirect } from "react-router-dom";


export const ProtectedRoute = ({isAuth:isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        isAuth? <Component  />
        : <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: props.location
                }
              }}
            />
      }}
    />
  );
};
