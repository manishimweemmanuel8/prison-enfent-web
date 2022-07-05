import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import SignupComponent from "../../../../../components/modules/configuration/authentication/Signup";
import AddPrisonComponent from "../../../../../components/modules/configuration/prison/Add";
import AddUserComponent from "../../../../../components/modules/configuration/user/Add";
import { createUser } from "../../../../../store/auth/actions";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";

export default function Signup(props: IHistory) {
  const dispatch = useDispatch();

  const authReducer = useSelector((state: AppState) => state.auth);

  const [state, setState] = React.useState({
    email: "",
    roles: "CITIZEN",
    status: true,
  });

  const { email, roles, status } = state;
  const data = {
    email,
    roles,
    status,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  console.log(data);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createUser(data, props.history));
  };

  return (
    <div>
      <SignupComponent onChange={onChange} state={state} onSubmit={onSubmit} />
    </div>
  );
}
