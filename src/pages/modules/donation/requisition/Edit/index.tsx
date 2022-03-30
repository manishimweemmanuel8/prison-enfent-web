import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../components/layout/Prison";
import EditRequisitionComponent from "../../../../../components/modules/donation/requisition/Edit";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { getItems } from "../../../../../store/modules/donation/item/actions";
import { IItem } from "../../../../../store/modules/donation/item/types";
import { updateRequisition } from "../../../../../store/modules/donation/requisition/actions";
import { IRequisition } from "../../../../../store/modules/donation/requisition/types";

export default function EditRequisition(props: IHistory) {
  const dispatch = useDispatch();

  const requisitionReducer = useSelector(
    (state: AppState) => state.requisition
  );

  const { requisition }: { requisition: IRequisition } = requisitionReducer;
  console.log(requisition);

  const [checked, setChecked] = React.useState(requisition.status);
  const [select, setSelect] = React.useState(requisition.item.id);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);
  };

  const [state, setState] = React.useState({
    itemId: requisition.item.id,
    quantity: requisition.quantity,
    quality: requisition.quality,
    status: requisition.status,
    amountPerQuantity: requisition.amountPerQuantity,
  });
  const { itemId, quality, quantity, status, amountPerQuantity } = state;
  const data = {
    itemId: select,
    quality,
    quantity,
    status: checked,
    amountPerQuantity,
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateRequisition(requisition.id, data, props.history));
  };

  const { items }: { items: IItem[] } = useSelector(
    (state: AppState) => state.item
  );
  React.useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <PrisonLayout>
      <EditRequisitionComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}
        select={select}
        setSelect={setSelect}
        items={items}
        item={requisition.item.name}
      />
    </PrisonLayout>
  );
}
