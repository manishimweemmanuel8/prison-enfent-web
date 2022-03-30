import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import EditItemComponent from "../../../../../components/modules/donation/item/Edit";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { updateItem } from "../../../../../store/modules/donation/item/actions";
import { IItem } from "../../../../../store/modules/donation/item/types";

export default function EditItem(props: IHistory) {
  const dispatch = useDispatch();

  const itemReducer = useSelector((state: AppState) => state.item);

  const { item }: { item: IItem } = itemReducer;

  const [state, setState] = React.useState({
    names: item.names,
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
    dispatch(updateItem(item.id, data, props.history));
  };

  return (
    <AdminLayout>
      <EditItemComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminLayout>
  );
}
