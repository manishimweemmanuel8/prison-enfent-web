import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import ProfileListComponent from "../../../../../components/modules/configuration/profile/List";
import UserListComponent from "../../../../../components/modules/configuration/user/List";
import { getUsers } from "../../../../../store/auth/actions";
import { IUser } from "../../../../../store/auth/types";
import { AppState } from "../../../../../store/configureStore";
import { getProfiles } from "../../../../../store/modules/configuration/profile/actions";
import { IProfile } from "../../../../../store/modules/configuration/profile/types";

export default function Profiles() {
  const dispatch = useDispatch();

  const { profiles }: { profiles: IProfile[] } = useSelector(
    (state: AppState) => state.profile
  );
  React.useEffect(() => {
    dispatch(getProfiles());
  }, []);

  console.log(profiles);

  return (
    <AdminLayout>
      <ProfileListComponent profiles={profiles} />
    </AdminLayout>
  );
}
