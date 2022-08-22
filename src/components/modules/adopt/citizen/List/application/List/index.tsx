import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { IApplication } from "../../../../../../../store/modules/adopt/prison/application/types";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface ApplicationProps {
  application: IApplication;
}
export default function ApprovedApplicationListComponent(
  props: ApplicationProps
) {
  const { application } = props;

  const exportCertificatePdfData = () => {
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
      html: "#my-table",
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
    <tr className="hover:bg-gray-100 transition-colors group">
      <td className="font-medium text-left">{application.child.names}</td>
      <td className="font-medium text-left">{application.profile.names}</td>
      <td className="font-medium text-left">{application.from}</td>
      <td className="font-medium text-left">{application.to}</td>

      <td>
        <span className="inline-block w-24 group-hover:hidden">
          {application.stage}
        </span>
        <div className="hidden group-hover:w-20 group-hover:flex group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
          <button
            className="p-2 hover:rounded-md hover:bg-gray-200"
            onClick={exportCertificatePdfData}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-700"
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
              <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"></path>
              <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path>
              <rect x="7" y="13" width="10" height="8" rx="2"></rect>
            </svg>
          </button>
        </div>
      </td>
    </tr>

  
  );
}
