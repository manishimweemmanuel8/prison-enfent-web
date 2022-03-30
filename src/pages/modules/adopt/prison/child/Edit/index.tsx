import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import EditChildComponent from "../../../../../../components/modules/adopt/prison/child/Edit";
import { AppState } from "../../../../../../store/configureStore";
import { IHistory } from "../../../../../../store/globalType";
import { updateChild } from "../../../../../../store/modules/adopt/prison/child/actions";
import { IChild } from "../../../../../../store/modules/adopt/prison/child/types";

export default function EditChild(props: IHistory) {
  const dispatch = useDispatch();

  const childReducer = useSelector((state: AppState) => state.child);

  const { child }: { child: IChild } = childReducer;

  const [checked, setChecked] = React.useState(child.needAdoptation);

  const [state, setState] = React.useState({
    names: child.names,
    motherNames: child.motherNames,
    location: child.location,
    needAdoptation: child.needAdoptation,
    dob: child.dob,
  });

  const { names, motherNames, location, dob } = state;
  const data = {
    names,
    motherNames,
    location,
    dob,
    needAdoptation: checked,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);
  };

  console.log(data);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateChild(child.id, data, props.history));
  };

  return (
    <PrisonLayout>
      <EditChildComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}
      />
    </PrisonLayout>
  );
}
