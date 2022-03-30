import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import EditDonationComponent from "../../../../../../components/modules/donation/citizen/donation/List/Edit";
import { AppState } from "../../../../../../store/configureStore";
import { IHistory } from "../../../../../../store/globalType";
import { updateDonation } from "../../../../../../store/modules/donation/donation/actions";
import { IDonation } from "../../../../../../store/modules/donation/donation/types";

export default function EditDonation(props: IHistory) {
  const dispatch = useDispatch();

  const donationReducer = useSelector((state: AppState) => state.donation);

  const { donation }: { donation: IDonation } = donationReducer;

  const [checked, setChecked] = React.useState(donation.status);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);
  };

  const [state, setState] = React.useState({
    status: donation.status,
  });
  const data = {
    status: checked,
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateDonation(donation.id, data, props.history));
  };

  return (
    <PrisonLayout>
      <EditDonationComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}
      />
    </PrisonLayout>
  );
}
