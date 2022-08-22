import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../../../components/layout/Citizen";
import ApprovedApplicationListComponent from "../../../../../../components/modules/adopt/citizen/List/application/List";
import { AppState } from "../../../../../../store/configureStore";
import { IHistory } from "../../../../../../store/globalType";
import { getApprovedApplication } from "../../../../../../store/modules/adopt/prison/application/actions";
import { IApplication } from "../../../../../../store/modules/adopt/prison/application/types";

export default function ApprovedApplication(props: IHistory) {
  const dispatch = useDispatch();

  const { approvedApplications }: { approvedApplications: IApplication[] } =
    useSelector((state: AppState) => state.prisonApplication);
  React.useEffect(() => {
    dispatch(getApprovedApplication(props.history));
  }, []);

  console.log(approvedApplications);

  return (
    <CitizenLayout>
       <div className="flex-1 pb-8">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            My approved applications
          </h1>
        </div>
      </div>

      <table className="w-full border-b border-gray-200" id="my-table">
        <thead > 
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="py-4 px-4 text-left">Child Names</td>
            <td className="py-4 px-4 text-left">Adopt names</td>
            <td className="py-4 px-4 text-left">From</td>
            <td className="py-4 px-4 text-left">To</td>
            <td className="py-4 px-4 text-left">Stage</td>
          </tr>
        </thead>
        <tbody>
      {approvedApplications.map((application) => (
        <ApprovedApplicationListComponent
          application={application}
        />
      ))}
      </tbody>
      </table>
      <div className="flex gap-x-2 justify-center pt-8 ">
        <button
          className=" flex justify-center items-center w-8 h-8"
        >
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
    </CitizenLayout>
  );
}
