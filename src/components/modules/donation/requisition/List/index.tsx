import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRequisitionDonations } from "../../../../../store/modules/donation/donation/actions";
import { getRequisition } from "../../../../../store/modules/donation/requisition/actions";
import { IRequisition } from "../../../../../store/modules/donation/requisition/types";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface RequisitionProps {
  requisitions: IRequisition[];
  // description:string
}
export default function RequisitionListComponent(props: RequisitionProps) {
  const { requisitions } = props;

  console.log(requisitions);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleViewById = (id: any) => {
    dispatch(getRequisition(id, history));
  };

  const handleViewDonationBy = (id: any) => {
    dispatch(getRequisitionDonations(id, history));
  };

  const exportRequisitionPdfData = () => {
    let doc = new jsPDF();
    let now = new Date();

    // doc.setFont(, "bold");
    doc.setFontSize(12);
    doc.text("PRISON KIDS SUPPORT", 80, 20);
    doc.setDrawColor(0, 255, 0);
    doc.line(15, 25, 195, 25);

    doc.setDrawColor(0, 255, 0);
    doc.line(15, 25, 195, 25);

    // doc.text(`Print date : ${now.toString()}`, 80, 35);

    doc.text("Chid application certificate ", 80, 45);
    // doc.line(75, 47, 50, 25);

    // doc.autoTable({
    //   styles: { fontSize: 9 },
    //   theme: "grid",
    //   margin: { top: 40 },
    //   html: "#my-table",
    // });
    autoTable(doc, {
      styles: { fontSize: 9 },
      theme: "grid",
      margin: { top: 60 },
      html: "#my-table-requisition",
    });

    doc.text(`Print Date:${now}`, 15, 250);
    doc.text(`Printed By:${localStorage.getItem("EMAIL")}`, 15, 256);

    // doc.setTextColor(255, 0, 0);
    addFooters(doc);

    doc.output("dataurlnewwindow");
  };

  const addFooters = (doc: any) => {
    const pageCount = doc.internal.getNumberOfPages();

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(
        "Page " + String(i) + " of " + String(pageCount),
        doc.internal.pageSize.width / 2,
        287,
        {
          align: "center",
        }
      );
    }
  };

  return (
    <div className="flex-1 pb-8">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Requisition
          </h1>
        </div>

        <button
          className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-green-800 rounded-xl hover:bg-green-600 focus:ring-2 focus:bg-green-500 focus:ring-offset-1"
          onClick={exportRequisitionPdfData}
        >
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
            Print report
          </span>
        </button>
        <a href="/prison/requisition/create">
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
              Create new Requisition
            </span>
          </button>
        </a>
      </div>

      <table className="w-full border-b border-gray-200" id="my-table-requisition">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <div className="flex items-left gap-x-4">
                <span> Image</span>
              </div>
            </td>
            <td className="py-4 px-4 text-left">Names</td>
            <td className="py-4 px-4 text-left">Quality</td>
            <td className="py-4 px-4 text-left">Quantity</td>
            <td className="py-4 px-4 text-left">Amount per Item</td>
            <td className="py-4 px-4 text-left">Status</td>
            <td className="py-4 px-4 text-left">Create date</td>
          </tr>
        </thead>
        <tbody>
          {requisitions.map((requisition) => (
            <tr className="hover:bg-gray-100 transition-colors group">
              <td className="">
                <img
                  className="w-24 h-24"
                  src={`http://localhost:3001/api/v1/item/image/${requisition.item.image}`}
                  alt=""
                />
              </td>
              <td className="font-medium text-left">
                {requisition.item.names}
              </td>
              <td className="font-medium text-left">{requisition.quality}</td>
              <td className="font-medium text-left">{requisition.quantity}</td>
              <td className="font-medium text-left">
                RWF {requisition.amountPerQuantity}
              </td>

              <td className="text-center">
                <span className="font-medium">
                  {requisition.status ? `ACTIVE` : `INACTIVE`}
                </span>
              </td>

              <td>
                <span className="inline-block w-24 group-hover:hidden">
                  {requisition.createdAt.substring(0, 10)}
                </span>
                <div className="hidden group-hover:w-20 group-hover:flex group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <button
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                    onClick={() => handleViewById(requisition.id)}
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
                    onClick={() => handleViewDonationBy(requisition.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-yellow-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="10" cy="10" r="7"></circle>
                      <path d="M21 21l-6 -6"></path>
                      <path d="M7 10l2 2l4 -4"></path>
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
