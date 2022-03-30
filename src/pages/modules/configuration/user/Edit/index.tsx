import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import AddPrisonComponent from "../../../../../components/modules/configuration/prison/Add";
import EditPrisonComponent from "../../../../../components/modules/configuration/prison/Edit";
import EditUserComponent from "../../../../../components/modules/configuration/user/Edit";
import { updateUser } from "../../../../../store/auth/actions";
import { IUser } from "../../../../../store/auth/types";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { createPrison, updatePrison } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

export default function EditUser(props: IHistory) {
  const dispatch = useDispatch();

  const authReducer = useSelector((state: AppState) => state.auth);

  const { user }: { user: IUser } = authReducer;

  

  const [checked, setChecked] = React.useState(user.status);

  const [state, setState] = React.useState({
    email: user.email,
    status: user.status,
  });
 
  const {  email } = state;
  const data = {
    email,
    status:checked,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);

  };

  console.log(user);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateUser(user.id,data, props.history));
  };

  return (
    <AdminLayout>
      <EditUserComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}

      />

    </AdminLayout>
  );
}
