import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../../components/layout/Admin";
import ItemListComponent from "../../../../../components/modules/donation/item/List";
import { AppState } from "../../../../../store/configureStore";
import { getItems } from "../../../../../store/modules/donation/item/actions";
import { IItem } from "../../../../../store/modules/donation/item/types";

export default function Items() {
  const dispatch = useDispatch();

  const { items }: { items: IItem[] } = useSelector(
    (state: AppState) => state.item
  );
  React.useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <AdminLayout>
      <ItemListComponent items={items} />
    </AdminLayout>
  );
}
