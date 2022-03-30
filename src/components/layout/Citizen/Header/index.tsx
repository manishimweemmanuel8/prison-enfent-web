import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignOut } from "../../../../store/auth/actions";
import { AppState } from "../../../../store/configureStore";
import { IHistory } from "../../../../store/globalType";
import {
  getProfile,
  updateProfile,
} from "../../../../store/modules/configuration/profile/actions";
import { IProfile } from "../../../../store/modules/configuration/profile/types";
import AddProfile from "../../../modules/configuration/authentication/models/profile/Add";

export default function Header() {
  const signOut = () => {
    SignOut();
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const profileReducer = useSelector((state: AppState) => state.profile);

  const { profile }: { profile: IProfile } = profileReducer;

  // React.useEffect(() => {
  //   dispatch(getProfile(localStorage.getItem("EMAIL")));
  // }, []);

  const history = useHistory();

  const [state, setState] = React.useState({
    email: profile.email,
    names: profile.names,
    phone: profile.phone,
    status: profile.status,
    province: profile.province,
    district: profile.district,
    sector: profile.district,
    cell: profile.cell,
    village: profile.village,
  });

  const {
    email,
    status,
    names,
    phone,
    province,
    district,
    sector,
    cell,
    village,
  } = state;
  const data = {
    email,
    status,
    names,
    phone,
    province,
    district,
    sector,
    cell,
    village,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateProfile(profile.id, data, history));
  };

  return (
    <div className="flex flex-row items-center justify-between border-b-2 pb-4">
      <div className="flex  gap-x-4">
        <a href="/">
          <button className="flex gap-x-2 items-center rounded-2xl  px-4 text-gray-700 border-2  hover:text-green-800 hover:border-green-900">
            <span className="inline-block pt-0.5 leading-6 tex-bold uppercase">
              adopt
            </span>
          </button>
        </a>

        <a href="/donation">
          <button className="flex gap-x-2 items-center border-2 rounded-2xl  px-4 text-gray-700  hover:text-green-800 hover:border-green-900">
            <span className="inline-block pt-0.5 leading-6 tex-bold uppercase ">
              donate
            </span>
          </button>
        </a>
      </div>

      {/* model  */}
      <div className="App">
        {isOpen && (
          <>
            <AddProfile
              closeModle={closeModal}
              onChange={onChange}
              state={state}
              onSubmit={onSubmit}
            />
          </>
        )}
      </div>

      {localStorage.getItem("TOKEN") ? (
        <div className="flex  gap-x-4">
          <div className="dropdown inline-block relative">
            <button className="flex gap-x-2 items-center text-gray-400 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-green-900"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
              </svg>
              <span className="inline-block pt-0.5 text-sm leading-6 hover:text-green-900">
                {localStorage.getItem("EMAIL")}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-green-900"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M18 15l-6 -6l-6 6h12"
                  transform="rotate(180 12 12)"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-32">
              <li className="">
                <a
                  className=" bg-gray-100 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  onClick={openModal}
                >
                  Profile
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-100 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                  onClick={signOut}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <a href="/login">
          <button className="flex gap-x-2 items-center bg-gray-100 rounded-2xl  px-4 py-2 text-black  hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
            </svg>
            <span className="inline-block pt-0.5 leading-6 tex-bold ">
              Login
            </span>
          </button>
        </a>
      )}
    </div>
  );
}
