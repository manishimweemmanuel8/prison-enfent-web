import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import AddPrisonComponent from "../../../../../components/modules/configuration/prison/Add";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { createPrison } from "../../../../../store/modules/configuration/prison/actions";

export default function AddPrison(props: IHistory) {
  const dispatch = useDispatch();

  const prisonReducer = useSelector((state: AppState) => state.prison);

  const [checked, setChecked] = React.useState(false);

  const [state, setState] = React.useState({
    names: "",
    email: "",
    location: "",
    status: false,
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
    dispatch(createPrison(data, props.history));
  };

  return (
    <AdminLayout>
      <AddPrisonComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}

      />
    </AdminLayout>
  );
}
