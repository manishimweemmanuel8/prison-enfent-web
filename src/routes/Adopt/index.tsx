import React from "react";
import { Route, Switch } from "react-router-dom";
import ApprovedApplication from "../../pages/modules/adopt/citizen/application/List";
import LeaderEditApplication from "../../pages/modules/adopt/citizen/Leader";
import ChildrenToAdoptByPrison from "../../pages/modules/adopt/citizen/listByPrison";
import EditApplication from "../../pages/modules/adopt/prison/application/Edit";
import ChildApplication from "../../pages/modules/adopt/prison/application/List";
import AddChild from "../../pages/modules/adopt/prison/child/Add";
import AdoptedChildren from "../../pages/modules/adopt/prison/child/Adopted";
import EditChild from "../../pages/modules/adopt/prison/child/Edit";
import Children from "../../pages/modules/adopt/prison/child/List";
import NotAdoptedChildren from "../../pages/modules/adopt/prison/child/NotAdopted";
import UploadImageCampaign from "../../pages/modules/adopt/prison/child/uploadImage";

export default function AdoptRoutes(props: any) {
  return (
    <Switch>
      <Route path="/prison/child" exact component={Children} />
      <Route path="/prison/child/create" exact component={AddChild} />
      <Route path="/prison/child/:id" exact component={EditChild} />
      <Route path="/prison/adopted/child" exact component={AdoptedChildren} />
      <Route
        path="/prison/notAdopted/child"
        exact
        component={NotAdoptedChildren}
      />
      <Route
        path="/prison/child/image/:id"
        exact
        component={UploadImageCampaign}
      />

      <Route
        path="/prison/child/application/:id"
        exact
        component={ChildApplication}
      />

      <Route path="/prison/applications/:id" exact component={EditApplication} />
      <Route path="/prison/adopted/child/:id" exact component={ChildrenToAdoptByPrison} />
      <Route path="/approved/applications" exact component={ApprovedApplication} />

      <Route path="/verification/form/:id" exact component={LeaderEditApplication} />


    </Switch>
  );
}
