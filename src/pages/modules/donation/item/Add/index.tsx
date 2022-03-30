import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import AddItemComponent from "../../../../../components/modules/donation/item/Add";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { createItem } from "../../../../../store/modules/donation/item/actions";

export default function AddItem(props: IHistory) {
  const dispatch = useDispatch();

  const itemReducer = useSelector((state: AppState) => state.item);

  const [state, setState] = React.useState({
    names: "",
  });
  const { names } = state;
  const data = {
    names,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  console.log(data);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createItem(data, props.history));
  };

  return (
    <AdminLayout>
      <AddItemComponent onChange={onChange} state={state} onSubmit={onSubmit} />
    </AdminLayout>
  );
}
