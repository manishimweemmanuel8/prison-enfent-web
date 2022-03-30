import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import PrisonListComponent from "../../../../../components/modules/configuration/prison/List";
import { AppState } from "../../../../../store/configureStore";
import { getPrisons } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

export default function Prisons() {
  const dispatch = useDispatch();

  const { prisons }: { prisons: IPrison[] } = useSelector(
    (state: AppState) => state.prison
  );
  React.useEffect(() => {
    dispatch(getPrisons());
  }, []);

  return (
    <AdminLayout>
     <PrisonListComponent prisons={prisons}/>
    </AdminLayout>
  );
}
