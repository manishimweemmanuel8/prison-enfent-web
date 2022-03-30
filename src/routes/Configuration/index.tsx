import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/modules/configuration/authentication/Login";
import AdminDashboard from "../../pages/modules/configuration/dashboard/Admin";
import AddPrison from "../../pages/modules/configuration/prison/Add";
import EditPrison from "../../pages/modules/configuration/prison/Edit";
import Prisons from "../../pages/modules/configuration/prison/List";
import Profiles from "../../pages/modules/configuration/profile/List";
import AddAdminUser from "../../pages/modules/configuration/user/Add";
import ChangeUserPassword from "../../pages/modules/configuration/user/ChangePassword";
import EditUser from "../../pages/modules/configuration/user/Edit";
import Users from "../../pages/modules/configuration/user/List";

export default function ConfigurationRoutes(props: any) {
  return (
    <Switch>
      <Route path="/admin/prisons" exact component={Prisons} />
      <Route path="/admin/prison/create" exact component={AddPrison} />
      <Route path="/admin/prison/:id" exact component={EditPrison} />
      <Route path="/admin/users" exact component={Users} />
      <Route path="/admin/user/:id" exact component={EditUser} />
      <Route
        path="/admin/user/changePassword/:id"
        exact
        component={ChangeUserPassword}
      />
      <Route path="/admin/adminUser/create" exact component={AddAdminUser} />
      <Route path="/admin/profiles" exact component={Profiles} />
    </Switch>
  );
}
