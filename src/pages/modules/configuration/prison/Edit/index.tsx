import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import AddPrisonComponent from "../../../../../components/modules/configuration/prison/Add";
import EditPrisonComponent from "../../../../../components/modules/configuration/prison/Edit";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { createPrison, updatePrison } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

export default function EditPrison(props: IHistory) {
  const dispatch = useDispatch();

  const prisonReducer = useSelector((state: AppState) => state.prison);

  const { prison }: { prison: IPrison } = prisonReducer;

  

  const [checked, setChecked] = React.useState(prison.status);

  const [state, setState] = React.useState({
    names: prison.names,
    email: prison.email,
    location: prison.location,
    status: prison.status,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { names, email, location, status } = state;
  const data = {
    names,
    email,
    location,
    status:checked,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);

  };

  console.log(data);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updatePrison(prison.id,data, props.history));
  };

  return (
    <AdminLayout>
      <EditPrisonComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}

      />
    </AdminLayout>
  );
}
