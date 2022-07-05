import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../../../../store/configureStore";
import { createApplication } from "../../../../../store/modules/adopt/citizen/application/actions";
import { IApplication } from "../../../../../store/modules/adopt/citizen/application/types";
import { IChild } from "../../../../../store/modules/adopt/citizen/child/types";
import { createDonation } from "../../../../../store/modules/donation/donation/actions";
import { IRequisition } from "../../../../../store/modules/donation/requisition/types";
import AddApplication from "../../../configuration/authentication/models/application/Add";
import AddDonation from "../../../configuration/authentication/models/donation/Add";

interface ActiveRequisitionProps {
  activeRequisition: IRequisition;
}

export default function ActiveRequisitionComponent(
  props: ActiveRequisitionProps
) {
  const { activeRequisition } = props;

  const [select, setSelect] = React.useState();
  const donationTypes = [
    { name: "property", value: "property" },
    { name: "amount", value: "amount" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const applicationReducer = useSelector(
    (state: AppState) => state.application
  );

  const { application }: { application: IApplication } = applicationReducer;

  const history = useHistory();

  const [state, setState] = React.useState({
    amount: 0,
    status: false,
    donationType:"Select donation type",
    requisitionId: activeRequisition.id,
  });

  const { amount, status, requisitionId } = state;
  const data = {
    amount,
    status,
    donationType:select,
    requisitionId,
    email:localStorage.getItem("EMAIL"),
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createDonation(data, history));
  };

  return (
    <div>
      <article className="overflow-hidden rounded-2xl border border-gray-100">
        {/* <div className="flex justify-center items-center bg-gray-50 aspect-square">
          <img
            src={`http://localhost:3001/api/v1/item/image/${activeRequisition.item.image}`}
            alt=""
            className="h-80 w-80"
          />
        </div> */}
        <div className="flex flex-col p-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold tracking-wide uppercase">
              {activeRequisition.item.names}
            </h2>
            <span className="flex gap-x-1 items-center">
              <span className="text-sm text-gray-400">
                Quality :
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  {activeRequisition.quality}
                </span>
              </span>
            </span>
          </div>
          <span className="text-sm text-gray-400">
            Quantity :{" "}
            <span className="text-gray-600">{activeRequisition.quantity}</span>
          </span>
          <span className="text-sm text-gray-400">
            Amount per Quantity :{" "}
            <span className="text-gray-600">
              {activeRequisition.amountPerQuantity} RWF
            </span>
          </span>
          <a
            href="#"
            className="inline-block mt-6 text-sm font-semibold text-center text-blue-500 hover:text-blue-600"
            onClick={openModal}
          >
            Donate
          </a>

          <div className="App">
            {isOpen && (
              <>
                <AddDonation
                  closeModle={closeModal}
                  onChange={onChange}
                  state={state}
                  select={select}
                  setSelect={setSelect}
                  donationTypes={donationTypes}
                  onSubmit={onSubmit}
                  item={activeRequisition.item.names}
                />
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
