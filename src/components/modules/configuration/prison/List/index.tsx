import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPrison } from "../../../../../store/modules/configuration/prison/actions";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

interface PrisonProps {
  prisons: IPrison[];
  // description:string
}
export default function PrisonListComponent(props: PrisonProps) {
  const { prisons } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  console.log(prisons);

  const handleViewById = (id: any) => {
    dispatch(getPrison(id, history));
  };

  return (
    <div className="flex-1 pb-8">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Prisons
          </h1>
        </div>
        <a href="/admin/prison/create">
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
              Create Prison
            </span>
          </button>
        </a>
      </div>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <div className="flex items-center gap-x-4">
                <span> Names</span>
              </div>
            </td>
            <td className="py-4 px-4 text-center">Email</td>
            <td className="py-4 px-4 text-center">Location</td>
            <td className="py-4 px-4 text-center">Status</td>
            <td className="py-4 px-4 text-center">Created by</td>
            <td className="py-4 pr-10 pl-4 text-center">Created at</td>
          </tr>
        </thead>
        <tbody>
          {prisons.map((prison) => (
            <tr className="hover:bg-gray-100 transition-colors group">
              <td className="flex gap-x-4 items-center py-4 pl-10">
                {prison.names}
              </td>
              <td className="font-medium text-center">{prison.email}</td>
              <td className="font-medium text-center">{prison.location}</td>
              <td className="text-center">
                <span className="font-medium">
                  {prison.status ? `ACTIVE` : `INACTIVE`}
                </span>
              </td>
              <td>{prison.user.email}</td>
              <td>
                <span className="inline-block w-24 group-hover:hidden">
                  {prison.createdAt.substring(0, 10)}
                </span>
                <div className="hidden group-hover:w-20 group-hover:flex group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <button className="p-2 hover:rounded-md hover:bg-gray-200" onClick={() => handleViewById(prison.id)}>
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
                  <button className="p-2 hover:rounded-md hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-700"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="4" y1="7" x2="20" y2="7"></line>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
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
