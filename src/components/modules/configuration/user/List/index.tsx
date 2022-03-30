import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../../../../store/auth/actions";
import { IUser } from "../../../../../store/auth/types";
import { getPrison } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

interface PrisonProps {
  users: IUser[];
  // description:string
}
export default function UserListComponent(props: PrisonProps) {
  const { users } = props;

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
            User Accounts
          </h1>
        </div>
        <a href="/admin/adminUser/create">
          <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-green-800 rounded-xl hover:bg-green-600 focus:ring-2 focus:bg-green-500 focus:ring-offset-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>

            <span className="text-sm font-semibold tracking-wide">
              Create New Admin
            </span>
          </button>
        </a>
      </div>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200 bg-gray-100">
            <td className="py-4 px-4 text-left">Email</td>
            <td className="py-4 px-4 text-left">Role</td>
            <td className="py-4 px-4 text-left">Status</td>
            <td className="py-4 pr-10 pl-4 text-left">Join date</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="hover:bg-gray-100 transition-colors group">
              <td className="font-medium text-left">{user.email}</td>
              <td className="text-left">
                {user.roles.map((role: string) => (
                  <span className="font-medium">{role}</span>
                ))}
              </td>
              <td className="text-left">
                <span className="font-medium">
                  {user.status ? `ACTIVE` : `INACTIVE`}
                </span>
              </td>
              <td className="text-left">
                <span className="inline-block w-24 group-hover:hidden">
                  {user.joinDate.substring(0, 10)}
                </span>
                <div className="hidden group-hover:w-20 group-hover:flex group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <button
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                    onClick={() => handleViewById(user.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green-700"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z"></path>
                      <path d="M16 5l3 3"></path>
                      <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999"></path>
                    </svg>
                  </button>
                  <button
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                    onClick={() => handleViewByIdChangePassword(user.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="8" cy="15" r="4"></circle>
                      <line x1="10.85" y1="12.15" x2="19" y2="4"></line>
                      <line x1="18" y1="5" x2="20" y2="7"></line>
                      <line x1="15" y1="8" x2="17" y2="10"></line>
                    </svg>
                  </button>
                </div>
              </td>
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
