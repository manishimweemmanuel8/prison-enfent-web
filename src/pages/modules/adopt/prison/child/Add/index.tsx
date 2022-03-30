import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import AddChildComponent from "../../../../../../components/modules/adopt/prison/child/Add";
import { AppState } from "../../../../../../store/configureStore";
import { IHistory } from "../../../../../../store/globalType";
import { createChild } from "../../../../../../store/modules/adopt/prison/child/actions";


export default function AddChild(props: IHistory) {
  const dispatch = useDispatch();

  const childReducer = useSelector((state: AppState) => state.child);

  const [checked, setChecked] = React.useState(false);

  const [state, setState] = React.useState({
    names: "",
    motherNames: "",
    location: "",
    dob: "",
    needAdoptation: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { names, dob, location, motherNames, needAdoptation } = state;
  const data = {
    names,
    dob,
    location,
    motherNames,
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
    dispatch(createChild(data, props.history));
  };

  return (
    <PrisonLayout>
      <AddChildComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}
      />
    </PrisonLayout>
  );
}
