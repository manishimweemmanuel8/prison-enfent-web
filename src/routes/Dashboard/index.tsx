import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import ChildrenToAdopt from "../../pages/modules/adopt/citizen/List";
import AdminDashboard from "../../pages/modules/configuration/dashboard/Admin";
import PrisonDashboard from "../../pages/modules/configuration/dashboard/Prison";

export default function DashboardRoutes(props: any) {
  return (
    <Switch>
      <Route path="/admin/dashboard" exact component={AdminDashboard} />
      <Route path="/prison/dashboard" exact component={PrisonDashboard} />
      <Route path="/" exact component={ChildrenToAdopt} />
    </Switch>
  );
}
