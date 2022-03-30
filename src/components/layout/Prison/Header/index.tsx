import React from "react";

export default function Headers() {
  return (
    <div className="flex flex-row items-center justify-between border-b-2 pb-4 ">
      <div>
        <span>Hello</span>
      </div>
      <button className="flex gap-x-2 items-center text-gray-400 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
         className="w- h-4 text-green-900"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
        </svg>
        <span className="inline-block pt-0.5 text-sm leading-6">
          {localStorage.getItem("EMAIL")}
        </span>
      </button>
    </div>
  );
}
