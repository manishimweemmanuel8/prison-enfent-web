import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../../../../../components/modules/configuration/authentication/Login";
import { IHistory } from "../../../../../store/globalType";
import { AppState } from "../../../../../store/configureStore";
import { authActions } from "../../../../../store/auth/actions";
import { getProfile } from "../../../../../store/modules/configuration/profile/actions";

export default function Login(props: IHistory) {
  const dispatch = useDispatch();
  const authReducer = useSelector((state: AppState) => state.auth);
  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = authReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [authReducer]);

  const [state, setState] = React.useState({
    email: "",
    password: "",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { email, password } = state;
  const data = {
    email,
    password,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(authActions(data, props.history));
    dispatch(getProfile(data.email));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  return (
    <div>
      <LoginComponent onChange={onChange} state={state} onSubmit={onSubmit} />
    </div>
  );
}
