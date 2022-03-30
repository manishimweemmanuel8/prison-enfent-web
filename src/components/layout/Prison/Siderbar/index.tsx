import React from "react";
import { SignOut } from "../../../../store/auth/actions";

export default function Sidebar() {
  const signOut = () => {
    SignOut();
  };
  return (
    <aside className="flex flex-col relative px-6 w-60 border-r border-gray-200">
      <button className="absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border=gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-400"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="11 7 6 12 11 17"></polyline>
          <polyline points="17 7 12 12 17 17"></polyline>
        </svg>
      </button>
      <a href="#" className="flex gap-y-5 pt-8 items-center">
        <h4 className="text-green-900 font-bold">PRISON KID SUPPORT</h4>
      </a>
      <ul className="flex flex-col gap-y-4 pt-8  pb-60">
        <li className=" px-2   ">
          <a
            href="/prison/dashboard"
            className="flex gap-y-3 items-center text-gray-600 hover:text-green-800 hover:font-bold py-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6  "
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="13" r="2"></circle>
              <line x1="13.45" y1="11.55" x2="15.5" y2="9.5"></line>
              <path d="M6.4 20a9 9 0 1 1 11.2 0z"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Dashboard
            </span>
          </a>
        </li>
        <li className="px-2">
          <a
            href="/prison/child"
            className="flex gap-y-3 items-center text-gray-600 hover:text-green-800 hover:font-bold "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="9" y1="10" x2="9.01" y2="10"></line>
              <line x1="15" y1="10" x2="15.01" y2="10"></line>
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
              <path d="M12 3a2 2 0 0 0 0 4"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Kids
            </span>
          </a>
        </li>

        <li className="px-2">
          <a
            href="/prison/adopted/child"
            className="flex gap-y-3 items-center text-gray-600 hover:text-green-800 hover:font-bold "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="9" y1="10" x2="9.01" y2="10"></line>
              <line x1="15" y1="10" x2="15.01" y2="10"></line>
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
              <path d="M12 3a2 2 0 0 0 0 4"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Adopted Kids
            </span>
          </a>
        </li>

        <li className="px-2">
          <a
            href="/prison/notAdopted/child"
            className="flex gap-y-3 items-center text-gray-600 hover:text-green-800 hover:font-bold "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="9" y1="10" x2="9.01" y2="10"></line>
              <line x1="15" y1="10" x2="15.01" y2="10"></line>
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
              <path d="M12 3a2 2 0 0 0 0 4"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Not Adopted Kids
            </span>
          </a>
        </li>

        <li className="px-2">
          <a
            href="/prison/requisitions"
            className="flex gap-y-3 items-center text-gray-600 hover:text-green-800 hover:font-bold "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="9" y1="10" x2="9.01" y2="10"></line>
              <line x1="15" y1="10" x2="15.01" y2="10"></line>
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
              <path d="M12 3a2 2 0 0 0 0 4"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Requisition
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
