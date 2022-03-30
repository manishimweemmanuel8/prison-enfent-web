import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import UserListComponent from "../../../../../components/modules/configuration/user/List";
import { getUsers } from "../../../../../store/auth/actions";
import { IUser } from "../../../../../store/auth/types";
import { AppState } from "../../../../../store/configureStore";

export default function Users() {
  const dispatch = useDispatch();

  const { users }: { users: IUser[] } = useSelector(
    (state: AppState) => state.auth
  );
  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <AdminLayout>
      <UserListComponent users={users} />
    </AdminLayout>
  );
}
