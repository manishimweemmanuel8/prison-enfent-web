import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import RequisitionDonationListComponent from "../../../../../../components/modules/donation/citizen/donation/List";
import { AppState } from "../../../../../../store/configureStore";
import { IDonation } from "../../../../../../store/modules/donation/donation/types";

export default function RequisitionDonation() {
  const dispatch = useDispatch();

  const { requisitionDonations }: { requisitionDonations: IDonation[] } =
    useSelector((state: AppState) => state.donation);

  return (
    <PrisonLayout>
      <RequisitionDonationListComponent
        requisitionDonations={requisitionDonations}
      />
    </PrisonLayout>
  );
}
