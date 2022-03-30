import React from "react";
import { LayoutProps } from "../../../store/globalType";
import Header from "../Citizen/Header";
import Headers from "./Header";
import Sidebar from "./Siderbar";

export default function AdminLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex w-full h-screen font-sans text-gray-900 bg-white">
      <Sidebar/>
      <div className="flex flex-col flex-1 py-4 px-10">
        <Header />
        <main className="overflow-y-scroll flex-1">{children}</main>
      </div>
    </div>
  );
}
