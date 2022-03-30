import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDonation } from "../../../../../../store/modules/donation/donation/actions";
import { IDonation } from "../../../../../../store/modules/donation/donation/types";
import { getRequisition } from "../../../../../../store/modules/donation/requisition/actions";

interface RequisitionDonationProps {
  requisitionDonations: IDonation[];
  // description:string
}
export default function RequisitionDonationListComponent(props: RequisitionDonationProps) {
  const { requisitionDonations } = props;

  console.log(requisitionDonations);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleViewById = (id: any) => {
    dispatch(getDonation(id, history));
  };

 

  return (
    <div className="flex-1 pb-8">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Requisition Donation
          </h1>
        </div>
       
      </div>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
           
            <td className="py-4 px-4 text-left">Donor</td>
            <td className="py-4 px-4 text-left">Amount</td>
            <td className="py-4 px-4 text-left">Status</td>
            <td className="py-4 px-4 text-left">Create date</td>
          </tr>
        </thead>
        <tbody>
          {requisitionDonations.map((donation) => (
            <tr className="hover:bg-gray-100 transition-colors group">
             
              <td className="font-medium text-left">
                {donation.profile.names}
              </td>
              <td className="font-medium text-left">{donation.amount}</td>
             

              <td className="text-center">
                <span className="font-medium">
                  {donation.status ? `True` : `False`}
                </span>
              </td>

              <td>
                <span className="inline-block w-24 group-hover:hidden">
                  {donation.createdAt.substring(0, 10)}
                </span>
                <div className="hidden group-hover:w-20 group-hover:flex group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <button
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                    onClick={() => handleViewById(donation.id)}
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
