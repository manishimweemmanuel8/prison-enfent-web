import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../../components/layout/Citizen";
import LeaderEditApplicationComponent from "../../../../../components/modules/adopt/citizen/Leader";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { IApplication } from "../../../../../store/modules/adopt/citizen/application/types";
import { updateApplication } from "../../../../../store/modules/adopt/prison/application/actions";
import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
}

export default function LeaderEditApplication(props: IHistory) {
  const params = useParams<RouteParams>();

  // console.log(id);
  const dispatch = useDispatch();

  const prisonApplicationReducer = useSelector(
    (state: AppState) => state.prisonApplication
  );

  const { application }: { application: IApplication } =
    prisonApplicationReducer;

  const [state, setState] = React.useState({
    testimony: application.testimony,
  });

  // console.log(application)

  const { testimony } = state;
  const data = {
    testimony,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  console.log(data);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateApplication(params.id, data, props.history));
  };

  console.log(application);

  return (
    <CitizenLayout>
      <LeaderEditApplicationComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </CitizenLayout>
  );
}
