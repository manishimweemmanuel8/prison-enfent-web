import React from "react";
import { SignOut } from "../../../../store/auth/actions";

export default function Sidebar() {
  const signOut = () => {
    SignOut();
  };
  return (
    <aside className="flex flex-col relative px-6 w-60 border-r border-gray-200">
       <a href="#" className="flex gap-y-5 pt-8 items-center">
        <h4 className="text-green-900 font-bold">PRISON KID SUPPORT</h4>
      </a>
      <ul className="flex flex-col gap-y-5 pt-12  pb-80">
        <li className=" px-2   ">
          <a
            href="/admin/dashboard"
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
            href="/admin/users"
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
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              User account
            </span>
          </a>
        </li>

        <li className="px-2">
          <a
            href="/admin/prisons"
            className="flex gap-y-3 items-center text-gray-600 hover:text-green-800 hover:font-bold "
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
              <path d="M18 4v16"></path>
              <path d="M14 4v16"></path>
              <path d="M6 4v5"></path>
              <path d="M6 15v5"></path>
              <path d="M10 4v5"></path>
              <path d="M11 9h-6v6h6z"></path>
              <path d="M10 15v5"></path>
              <path d="M8 12h-.01"></path>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Prison
            </span>
          </a>
        </li>

        <li className="px-2">
          <a
            href="/admin/profiles"
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
              <rect x="3" y="4" width="18" height="16" rx="3"></rect>
              <circle cx="9" cy="10" r="2"></circle>
              <line x1="15" y1="8" x2="17" y2="8"></line>
              <line x1="15" y1="12" x2="17" y2="12"></line>
              <line x1="7" y1="16" x2="17" y2="16"></line>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Profiles
            </span>
          </a>
        </li>

        <li className="px-2">
          <a
            href="/admin/items"
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
              <rect x="3" y="4" width="18" height="16" rx="3"></rect>
              <circle cx="9" cy="10" r="2"></circle>
              <line x1="15" y1="8" x2="17" y2="8"></line>
              <line x1="15" y1="12" x2="17" y2="12"></line>
              <line x1="7" y1="16" x2="17" y2="16"></line>
            </svg>
            <span className="inline-block text-sm leading-6 text-gray-600 hover:text-green-800 hover:font-bold pl-3">
              Items
            </span>
          </a>
        </li>
      </ul>
   
    </aside>
  );
}
