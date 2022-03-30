import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../../../../store/configureStore";
import { createApplication } from "../../../../../store/modules/adopt/citizen/application/actions";
import { IApplication } from "../../../../../store/modules/adopt/citizen/application/types";
import { IChild } from "../../../../../store/modules/adopt/citizen/child/types";
import AddApplication from "../../../configuration/authentication/models/application/Add";

interface ChildProps {
  child: IChild;
}

export default function ChildrenComponent(props: ChildProps) {
  const { child } = props;

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
    from: "",
    to: "",
    childId: child.id,
    email: localStorage.getItem("EMAIL"),
  });

  const { from, to, childId, email } = state;
  const data = {
    from,
    to,
    childId,
    email,
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createApplication(data, history));
  };

  return (
    <div>
      <article className="overflow-hidden rounded-2xl border border-gray-100">
        <div className="flex justify-center items-center bg-gray-50 aspect-square">
          <img
            src={`http://localhost:3001/api/v1/child/image/${child.image}`}
            alt=""
            className="h-80 w-80"
          />
        </div>
        <div className="flex flex-col p-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold tracking-wide">{child.names}</h2>
            <span className="flex gap-x-1 items-center">
              <span className="text-sm text-gray-400">
                DOB :
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  {child.dob}
                </span>
              </span>
            </span>
          </div>
          <span className="text-sm text-gray-400">
            Location : <span className="text-gray-600">{child.location}</span>
          </span>
          <a
            href="#"
            className="inline-block mt-6 text-sm font-semibold text-center text-blue-500 hover:text-blue-600"
            onClick={openModal}
          >
            Adopt
          </a>

          <div className="App">
            {isOpen && (
              <>
                <AddApplication
                  closeModle={closeModal}
                  onChange={onChange}
                  state={state}
                  onSubmit={onSubmit}
                  child={child.names}
                />
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
