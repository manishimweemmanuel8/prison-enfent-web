import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../../components/layout/Citizen";
import ChildrenComponent from "../../../../../components/modules/adopt/citizen/List";
import ActiveRequisitionComponent from "../../../../../components/modules/donation/citizen/List";
import { AppState } from "../../../../../store/configureStore";
import { getActiveRequisitions } from "../../../../../store/modules/donation/requisition/actions";
import { IRequisition } from "../../../../../store/modules/donation/requisition/types";

export default function ActiveRequisitionByPrison() {
  const dispatch = useDispatch();

  const { requisitionsByPrison }: { requisitionsByPrison: IRequisition[] } =
    useSelector((state: AppState) => state.requisition);

  return (
    <CitizenLayout>
      <section className="pt-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Request from prisons
        </h1>
        <div className="grid grid-cols-3 gap-x-6 py-6">
          {requisitionsByPrison.map((activeRequisition) => (
            <ActiveRequisitionComponent activeRequisition={activeRequisition} />
          ))}
        </div>
      </section>
    </CitizenLayout>
  );
}
