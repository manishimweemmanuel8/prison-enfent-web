import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../components/layout/Prison";
import RequisitionListComponent from "../../../../../components/modules/donation/requisition/List";
import { AppState } from "../../../../../store/configureStore";
import { IItem } from "../../../../../store/modules/donation/item/types";
import { getRequisitions } from "../../../../../store/modules/donation/requisition/actions";

export default function Requisitions() {
  const dispatch = useDispatch();

  const { requisitions }: { requisitions: IItem[] } = useSelector(
    (state: AppState) => state.requisition
  );
  React.useEffect(() => {
    dispatch(getRequisitions());
  }, []);

  return (
    <PrisonLayout>
      <RequisitionListComponent requisitions={requisitions} />

    </PrisonLayout>
  );
}
