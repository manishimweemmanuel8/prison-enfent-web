import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../../../../store/auth/actions";
import { IUser } from "../../../../../store/auth/types";
import { getPrison } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";
import { IProfile } from "../../../../../store/modules/configuration/profile/types";

interface ProfileProps {
  profiles: IProfile[];
  // description:string
}
export default function ProfileListComponent(props: ProfileProps) {
  const { profiles } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  var flag: string;
  const handleViewById = (id: any) => {
    dispatch(getUser(id, history, (flag = "edit")));
  };

  const handleViewByIdChangePassword = (id: any) => {
    dispatch(getUser(id, history, (flag = "password")));
  };

  return (
    <div className="flex-1 pb-8">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            User profiles
          </h1>
        </div>
      </div>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200 bg-gray-100">
            <td className="py-4 px-4 text-left"> Names</td>
            <td className="py-4 px-4 text-left">Email</td>
            <td className="py-4 px-4 text-left">Phone</td>
            <td className="py-4 pr-10 pl-4 text-left">District</td>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr className="hover:bg-gray-100 transition-colors group">
              <td className="font-medium text-left">{profile.names}</td>
              <td className="font-medium text-left">{profile.email}</td>

              <td className="font-medium text-left">{profile.phone}</td>
              <td className="font-medium text-left">{profile.district}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-x-2 justify-center pt-8 ">
        <button className=" flex justify-center items-center w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 to-gray-800  hover:text-indigo-600"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="15 6 9 12 15 18"></polyline>
          </svg>
        </button>
        <button className="flex items-center justify-center w-8 h-8 font-medium rounded-full bg-gray-700  text-white">
          1
        </button>
        <button className="text-gray-400 hover:text-indigo-600">2</button>
        <button className="text-gray-400 hover:text-indigo-600">3</button>
        <button className="text-gray-400 hover:text-indigo-600">4</button>
        <button className="text-gray-400 hover:text-indigo-600">5</button>
        <button className="text-gray-400 hover:text-indigo-600">6</button>

        <button className="flex justify-center items-center w-8 h-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 to-gray-800  hover:text-indigo-600"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
