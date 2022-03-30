import React from "react";
import { Route, Switch } from "react-router-dom";
import EditDonation from "../../pages/modules/donation/citizen/donation/Edit";
import RequisitionDonation from "../../pages/modules/donation/citizen/donation/List";
import ActiveRequisition from "../../pages/modules/donation/citizen/List";
import ActiveDonation from "../../pages/modules/donation/citizen/List";
import ActiveRequisitionByPrison from "../../pages/modules/donation/citizen/requisitionByPrison";
import AddItem from "../../pages/modules/donation/item/Add";
import EditItem from "../../pages/modules/donation/item/Edit";
import Items from "../../pages/modules/donation/item/List";
import UploadImageItem from "../../pages/modules/donation/item/uploadImage";
import AddRequisition from "../../pages/modules/donation/requisition/Add";
import EditRequisition from "../../pages/modules/donation/requisition/Edit";
import Requisitions from "../../pages/modules/donation/requisition/List";

export default function DonationRoutes(props: any) {
  return (
    <Switch>
      <Route path="/admin/items" exact component={Items} />
      <Route path="/admin/item/create" exact component={AddItem} />
      <Route path="/admin/item/:id" exact component={EditItem} />
      <Route path="/admin/item/image/:id" exact component={UploadImageItem} />
      <Route path="/prison/requisitions" exact component={Requisitions} />
      <Route
        path="/prison/requisition/create"
        exact
        component={AddRequisition}
      />
      <Route path="/prison/requisition/:id" exact component={EditRequisition} />
      <Route path="/donation" exact component={ActiveRequisition} />
      <Route
        path="/prison/requisition/donations/:id"
        exact
        component={RequisitionDonation}
      />
      <Route
        path="/prison/requisition/donation/:id"
        exact
        component={EditDonation}
      />

      <Route
        path="/active/requisition/prison/:id"
        exact
        component={ActiveRequisitionByPrison}
      />
    </Switch>
  );
}
