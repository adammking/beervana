import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ exact, path, children }) {
  const token = localStorage.getItem("token")

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;