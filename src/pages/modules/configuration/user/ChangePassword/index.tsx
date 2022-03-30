import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import AddPrisonComponent from "../../../../../components/modules/configuration/prison/Add";
import EditPrisonComponent from "../../../../../components/modules/configuration/prison/Edit";
import ChangeUserPasswordComponent from "../../../../../components/modules/configuration/user/ChangePassword";
import EditUserComponent from "../../../../../components/modules/configuration/user/Edit";
import { changeUserPassword, updateUser } from "../../../../../store/auth/actions";
import { ILoginParams, IUser } from "../../../../../store/auth/types";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { createPrison, updatePrison } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

export default function ChangeUserPassword(props: IHistory) {
  const dispatch = useDispatch();

  const authReducer = useSelector((state: AppState) => state.auth);

  const { user }: { user: IUser } = authReducer;

  


  const [state, setState] = React.useState({
    email: user.email,
    password: "",
  });
 
  const {  email,password } = state;
  const data = {
    email,
    password
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });

  };

  console.log(user);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(changeUserPassword(user.id,data, props.history));
  };

  return (
    <AdminLayout>
      <ChangeUserPasswordComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}

      />

    </AdminLayout>
  );
}
