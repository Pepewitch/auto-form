import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Home } from "features/home/pages/Home";
import { FormCreator } from "features/create-form/pages/FormCreator";
import { Login } from "features/auth/pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={FormCreator} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};
