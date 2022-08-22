import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import EditApplicationComponent from "../../../../../../components/modules/adopt/prison/application/Edit";
import { AppState } from "../../../../../../store/configureStore";
import { IHistory } from "../../../../../../store/globalType";
import { updateApplication } from "../../../../../../store/modules/adopt/prison/application/actions";
import { IApplication } from "../../../../../../store/modules/adopt/prison/application/types";

export default function EditApplication(props: IHistory) {
  const dispatch = useDispatch();

  const prisonApplicationReducer = useSelector(
    (state: AppState) => state.prisonApplication
  );

  const { application }: { application: IApplication } =
    prisonApplicationReducer;

  const [state, setState] = React.useState({
    stage: application.stage,
  });

  const [select, setSelect] = React.useState();


  const stages = [
    { name: "PENDING", value: "PENDING" },
    { name: "IN_PROCESS", value: "IN_PROCESS" },
    { name: "APPROVED", value: "APPROVED" },
    { name: "DENY", value: "DENY" },
  ];

  const { stage } = state;
  const data = {
    stage:select,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  console.log(data);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateApplication(application.id, data, props.history));
  };

  console.log(application);

  return (
    <PrisonLayout>
      <EditApplicationComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        stages={stages}
        select={select}
        setSelect={setSelect}
      />
    </PrisonLayout>
  );
}
