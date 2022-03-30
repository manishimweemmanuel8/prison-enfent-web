import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/modules/configuration/authentication/Login";
import Signup from "../../pages/modules/configuration/authentication/Signup";

export default function AuthRoutes(props: any) {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  );
}
