import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../components/layout/Prison";
import AddRequisitionComponent from "../../../../../components/modules/donation/requisition/Add";
import { AppState } from "../../../../../store/configureStore";
import { IHistory } from "../../../../../store/globalType";
import { createItem, getItems } from "../../../../../store/modules/donation/item/actions";
import { IItem } from "../../../../../store/modules/donation/item/types";
import { createRequisition } from "../../../../../store/modules/donation/requisition/actions";

export default function AddRequisition(props: IHistory) {
  const dispatch = useDispatch();

  const requisitionReducer = useSelector((state: AppState) => state.requisition);
  const [checked, setChecked] = React.useState(false);

  const [select, setSelect] = React.useState();


  const [state, setState] = React.useState({
    itemId: "",
    quantity: "",
    quality: "",
    status: false,
    amountPerQuantity: "",

  });
  const { itemId,quality,quantity,status,amountPerQuantity } = state;
  const data = {
    itemId:select,
    quality,
    quantity,
    status:checked,
    amountPerQuantity

  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);


  };

  const onSubmit = (event: React.FormEvent) => {

    console.log(data)
    event.preventDefault();
    dispatch(createRequisition(data, props.history));
  };
  const { items }: { items: IItem[] } = useSelector(
    (state: AppState) => state.item
  );
  React.useEffect(() => {
    dispatch(getItems());
  }, []);


  return (
    <PrisonLayout>

      <AddRequisitionComponent onChange={onChange} state={state} onSubmit={onSubmit} checked={checked} select={select} setSelect={setSelect} items={items}/>
    </PrisonLayout>
  );
}
