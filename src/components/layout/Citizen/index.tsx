import React from "react";
import { LayoutProps } from "../../../store/globalType";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function CitizenLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="flex w-full h-screen font-sans text-gray-900 bg-white">
      <main className="overflow-y-scroll flex-1">
        <div className="flex flex-col flex-1 py-4 px-10">
          <Header />

          <main>{children}</main>
        </div>
      </main>
      <Sidebar />
    </div>
  );
}
