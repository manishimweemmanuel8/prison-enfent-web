import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdoptRoutes from "./Adopt";
import AuthRoutes from "./Auth";
import ConfigurationRoutes from "./Configuration";
import DashboardRoutes from "./Dashboard";
import DonationRoutes from "./donation";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AuthRoutes />
      <DashboardRoutes />
      <ConfigurationRoutes />
      <AdoptRoutes />
      <DonationRoutes />
    </Router>
  );
};

export default rootRoutes;
